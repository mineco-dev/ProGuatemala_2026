interface LoadingStateProps {
  message?: string;
}

/** Spinner a pantalla completa para paginas que cargan datos remotos. */
export default function LoadingState({ message = 'Cargando...' }: LoadingStateProps) {
  return (
    <div className="pt-16 min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-gray-600 font-medium">{message}</p>
      </div>
    </div>
  );
}
