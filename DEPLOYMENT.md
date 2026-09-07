# Despliegue en Kubernetes (entorno de pruebas)

Guía paso a paso para levantar **ProGuatemala 2026** en un clúster de Kubernetes de pruebas.

La app es un SPA de Vite + React que se sirve como archivos estáticos con Nginx. El backend de datos es Supabase (externo al clúster), por lo que **no se despliega ninguna base de datos aquí**: solo el frontend.

---

## ⚠️ Nota clave sobre las variables de entorno

Vite **incrusta las variables `VITE_*` dentro del bundle en tiempo de build**, no en tiempo de ejecución. Esto significa:

- La URL y la anon key de Supabase se pasan como **build-args de Docker**, no como variables del contenedor ni ConfigMaps de runtime.
- Para cambiar de proyecto Supabase hay que **reconstruir la imagen**.
- La `VITE_SUPABASE_ANON_KEY` es una clave pública de cliente (segura para exponer en el navegador); la seguridad real la dan las políticas RLS en Supabase, no el ocultar esta clave.

---

## Requisitos previos

1. Un clúster de Kubernetes de pruebas accesible y `kubectl` configurado apuntando a él:
   ```bash
   kubectl config current-context
   ```
2. Docker instalado para construir la imagen.
3. Acceso a un **registro de contenedores** al que el clúster pueda hacer pull (Docker Hub, GHCR, GitLab, Harbor interno, etc.).
4. Un **Ingress Controller** en el clúster (estos manifiestos asumen `ingress-nginx`). Si no tienes ingress, usa la alternativa con `port-forward` del paso 6.
5. Los valores de Supabase del entorno de pruebas:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

> La base de datos Supabase debe existir y tener las migraciones aplicadas (ver `README.md`, sección "Configuración de Supabase"). Recuerda que la tabla `news` necesita la columna `linkedin_url` para la sección de LinkedIn.

---

## Archivos incluidos

```
Dockerfile            # Build multi-etapa (node -> nginx)
nginx.conf            # Config Nginx con fallback SPA y /healthz
.dockerignore
k8s/
  namespace.yaml      # Namespace proguatemala-test
  deployment.yaml     # Deployment (2 réplicas, probes a /healthz)
  service.yaml        # Service ClusterIP
  ingress.yaml        # Ingress (host de ejemplo)
```

---

## Paso 1 — Definir variables

Ajusta estos valores a tu entorno:

```bash
export REGISTRY="tu-registro.example.com/tu-namespace"   # p. ej. docker.io/miusuario o ghcr.io/mi-org
export IMAGE="$REGISTRY/proguatemala-2026"
export TAG="test-$(date +%Y%m%d-%H%M%S)"                  # una etiqueta única por build

export VITE_SUPABASE_URL="https://xxxx.supabase.co"
export VITE_SUPABASE_ANON_KEY="eyJhbGciOi..."
```

> Usa una etiqueta única (no `latest`) para que Kubernetes haga pull de la imagen nueva en cada despliegue.

---

## Paso 2 — Construir la imagen

Desde la raíz del proyecto:

```bash
docker build \
  --build-arg VITE_SUPABASE_URL="$VITE_SUPABASE_URL" \
  --build-arg VITE_SUPABASE_ANON_KEY="$VITE_SUPABASE_ANON_KEY" \
  -t "$IMAGE:$TAG" \
  .
```

(Opcional) Prueba la imagen en local antes de subirla:

```bash
docker run --rm -p 8080:80 "$IMAGE:$TAG"
# Abre http://localhost:8080  y  http://localhost:8080/healthz
```

---

## Paso 3 — Publicar la imagen en el registro

```bash
# Autenticarse si hace falta:  docker login "$REGISTRY"
docker push "$IMAGE:$TAG"
```

---

## Paso 4 — Crear el namespace

```bash
kubectl apply -f k8s/namespace.yaml
```

---

## Paso 5 — Desplegar en el clúster

Los manifiestos traen un marcador `REGISTRY_PLACEHOLDER` en la imagen. Sustitúyelo por tu imagen real al aplicar:

```bash
sed "s|REGISTRY_PLACEHOLDER/proguatemala-2026:latest|$IMAGE:$TAG|g" k8s/deployment.yaml \
  | kubectl apply -f -

kubectl apply -f k8s/service.yaml
kubectl apply -f k8s/ingress.yaml
```

Verifica que los pods arranquen:

```bash
kubectl -n proguatemala-test rollout status deployment/proguatemala-web
kubectl -n proguatemala-test get pods,svc,ingress
```

---

## Paso 6 — Acceder a la aplicación

### Opción A — Con Ingress

1. Edita `k8s/ingress.yaml` y cambia `host: proguatemala.test.local` por tu dominio de pruebas (o déjalo así para pruebas locales).
2. Obtén la IP del ingress:
   ```bash
   kubectl -n proguatemala-test get ingress proguatemala-web
   ```
3. Si usas un host ficticio, apúntalo en `/etc/hosts`:
   ```
   <IP_DEL_INGRESS>   proguatemala.test.local
   ```
4. Abre `http://proguatemala.test.local`.

### Opción B — Sin Ingress (port-forward)

```bash
kubectl -n proguatemala-test port-forward svc/proguatemala-web 8080:80
# Abre http://localhost:8080
```

---

## Actualizar a una versión nueva

```bash
export TAG="test-$(date +%Y%m%d-%H%M%S)"
docker build \
  --build-arg VITE_SUPABASE_URL="$VITE_SUPABASE_URL" \
  --build-arg VITE_SUPABASE_ANON_KEY="$VITE_SUPABASE_ANON_KEY" \
  -t "$IMAGE:$TAG" .
docker push "$IMAGE:$TAG"

kubectl -n proguatemala-test set image deployment/proguatemala-web web="$IMAGE:$TAG"
kubectl -n proguatemala-test rollout status deployment/proguatemala-web
```

Rollback a la versión anterior si algo falla:

```bash
kubectl -n proguatemala-test rollout undo deployment/proguatemala-web
```

---

## Diagnóstico rápido

```bash
# Logs de un pod
kubectl -n proguatemala-test logs deploy/proguatemala-web

# Describir el pod (eventos, motivo de fallos de arranque/pull)
kubectl -n proguatemala-test describe pod -l app=proguatemala-web
```

| Síntoma | Causa probable | Solución |
|---|---|---|
| `ImagePullBackOff` | El clúster no puede acceder al registro | Verifica `$IMAGE:$TAG` y crea un `imagePullSecret` si el registro es privado |
| Página en blanco / errores de Supabase en consola | Build sin build-args o con valores incorrectos | Reconstruye la imagen con los `--build-arg` correctos |
| 404 al recargar una ruta (p. ej. `/recursos`) | Falta el fallback SPA | Ya está resuelto en `nginx.conf` (`try_files ... /index.html`) |
| Pod en `CrashLoopBackOff` | Error de Nginx | Revisa `kubectl logs` del pod |

---

## Limpieza

```bash
kubectl delete namespace proguatemala-test
```
