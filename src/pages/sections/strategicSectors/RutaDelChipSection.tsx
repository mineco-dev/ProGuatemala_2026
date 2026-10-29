import { useState } from 'react';
import { Download, FileText } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import VideoModal from '@/components/ui/VideoModal';
import ImageGalleryModal from '@/components/ui/ImageGalleryModal';
import { chipAssetUrl } from '@/data/resources/chipAssets';
import { chipDocuments } from '@/data/resources/chipDocuments';
import { chipStudies } from '@/data/resources/chipStudies';
import { chipVideos } from '@/data/resources/chipVideos';
import type { ChipDocument, ChipVideo } from '@/types/resource';

/** Formulario de registro (micrositio Ruta del Chip de MINECO). */
const REGISTER_FORM =
  'https://forms.office.com/pages/responsepage.aspx?id=Oed5uvsY-UyJycdfOw5B7qT6-IAQXhJKh1DoEqM8V-tUN1gwNEdXUjUyQjU5NlkzRlNRV1U5Q0RNWC4u&route=shorturl';

/** PDF del Ecosistema de Becas (cuelgan de `/files/`, no de `/images/`). */
const BECAS_ONE_PAGER =
  'https://www.mineco.gob.gt/files/ruta_del_chip/archivos/ONE%20PAGER%20ECOSISTEMA%20DE%20BECAS.pdf';
const BECAS_MANUAL =
  'https://www.mineco.gob.gt/files/ruta_del_chip/archivos/MANUAL%20ECOSISTEMA%20DE%20BECAS%20FINAL.pdf';

/** Fotografías de la galería (subcarpeta `galeria/`). */
const GALLERY_FILES = [
  '184A3174_compressed.jpg',
  '184A1471_compressed.jpg',
  '184A3213_compressed.jpg',
  '184A3220_compressed.jpg',
  '184A3236_compressed.jpg',
  '184A3321_compressed.jpg',
  '184A3473_compressed.jpg',
  '184A1221_compressed.jpg',
  '184A1226_compressed.jpg',
  '184A1282_compressed.jpg',
  '184A1319_compressed.jpg',
  '184A1353_compressed.jpg',
];

/** Etiquetas cortas de las aplicaciones (videos 3-5). */
const APP_LABELS = ['Wearables', 'Agrotech', 'Sensores'];

export default function RutaDelChipSection() {
  const { t, language } = useLanguage();
  const docs = chipDocuments[language];
  const studies = chipStudies[language];
  const videos = chipVideos[language];
  const [activeVideo, setActiveVideo] = useState<ChipVideo | null>(null);
  const [galleryOpen, setGalleryOpen] = useState(false);

  const galleryImages = GALLERY_FILES.map((file) => chipAssetUrl(`galeria/${file}`));

  const DocGrid = ({ title, items }: { title: string; items: ChipDocument[] }) => (
    <div>
      <h3 className="text-2xl md:text-3xl font-extrabold uppercase text-primary-500 text-center mb-8">
        {title}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {items.map((doc) => (
          <div
            key={doc.id}
            className="flex flex-col items-center text-center bg-white rounded-2xl border border-black/5 shadow-sm p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <FileText className="w-10 h-10 text-accent-500 mb-3" />
            <p className="text-sm font-semibold text-primary-500 leading-snug flex-grow mb-4">
              {doc.name}
            </p>
            <a
              href={doc.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-primary-500 hover:bg-primary-600 text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              {t('rutaChip.download')}
            </a>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="ruta-del-chip" className="scroll-mt-20 bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Encabezado de la sección */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-[0.12em] text-primary-500">
            {t('rutaChip.sectionTitle')}
          </h2>
        </div>

        {/* ¿Qué es la Ruta del Chip? */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 bg-gray-50 rounded-3xl p-8 sm:p-10">
            <h3 className="text-2xl md:text-3xl font-extrabold text-center text-primary-500 mb-4">
              {t('rutaChip.intro.title')}
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              {t('rutaChip.intro.body')}
            </p>
            <div className="text-center mt-6">
              <a
                href={chipAssetUrl('documentos/RUTA_DEL_CHIP_DOC.pdf')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                <Download className="w-5 h-5" />
                {t('rutaChip.moreInfo')}
              </a>
            </div>
          </div>
          <div className="md:col-span-5 flex justify-center">
            <img
              src={chipAssetUrl('logo_ruta_del_chip.png')}
              alt={t('rutaChip.sectionTitle')}
              loading="lazy"
              className="w-full max-w-sm h-auto object-contain"
            />
          </div>
        </div>

        {/* Banner de registro */}
        <a href={REGISTER_FORM} target="_blank" rel="noopener noreferrer" className="block">
          <img
            src={chipAssetUrl('Ruta del Chip.jpeg')}
            alt={t('rutaChip.registerAlt')}
            loading="lazy"
            className="w-full rounded-2xl object-cover"
          />
        </a>

        {/* Testimoniales (videos 1 y 2) */}
        <div className="space-y-10">
          {videos.slice(0, 2).map((video, index) => (
            <div
              key={video.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <h3 className="text-xl md:text-2xl font-extrabold uppercase text-primary-500 mb-3">
                  {video.name}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed text-justify">
                  {video.description}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveVideo(video)}
                aria-label={video.name}
                className={`group relative block w-full aspect-video rounded-2xl overflow-hidden shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 ${
                  index % 2 === 1 ? 'lg:order-1' : ''
                }`}
              >
                <img
                  src={video.poster}
                  alt={video.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black/25 group-hover:bg-black/35 transition-colors">
                  <span className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                    <span className="ml-1 border-y-[10px] border-y-transparent border-l-[16px] border-l-primary-500" />
                  </span>
                </span>
              </button>
            </div>
          ))}
        </div>

        {/* Ecosistema de Becas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a href={BECAS_ONE_PAGER} target="_blank" rel="noopener noreferrer" className="block">
            <img
              src={chipAssetUrl('MINI BANNERS-05.jpeg')}
              alt={t('rutaChip.becas.onePager')}
              loading="lazy"
              className="w-full rounded-2xl object-cover"
            />
          </a>
          <a href={BECAS_MANUAL} target="_blank" rel="noopener noreferrer" className="block">
            <img
              src={chipAssetUrl('MINI BANNERS-06.jpeg')}
              alt={t('rutaChip.becas.manual')}
              loading="lazy"
              className="w-full rounded-2xl object-cover"
            />
          </a>
        </div>

        {/* Aplicaciones (videos 3, 4 y 5) */}
        <div>
          <h3 className="text-2xl md:text-3xl font-extrabold uppercase text-primary-500 text-center mb-8">
            {t('rutaChip.applications.title')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.slice(2, 5).map((video, index) => (
              <button
                key={video.id}
                type="button"
                onClick={() => setActiveVideo(video)}
                aria-label={video.name}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={video.poster}
                    alt={video.name}
                    loading="lazy"
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                    <span className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                      <span className="ml-1 border-y-[9px] border-y-transparent border-l-[14px] border-l-primary-500" />
                    </span>
                  </span>
                </div>
                <h4 className="text-xl font-bold text-center text-primary-500 py-5">
                  {APP_LABELS[index]}
                </h4>
              </button>
            ))}
          </div>
        </div>

        {/* Guatemala se prepara... */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="bg-gray-50 rounded-3xl p-8 sm:p-10">
            <h3 className="text-2xl md:text-3xl font-extrabold uppercase text-primary-500 text-center mb-5 leading-tight">
              {t('rutaChip.future.title')}
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-4">
              {t('rutaChip.future.body1')}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              {t('rutaChip.future.body2')}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <img
              src={chipAssetUrl('184A3174_compressed.jpg')}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="w-full rounded-2xl object-cover"
            />
            <img
              src={chipAssetUrl('184A1471_compressed.jpg')}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="w-full rounded-2xl object-cover"
            />
          </div>
        </div>

        {/* Galería */}
        <div className="text-center">
          <button
            type="button"
            onClick={() => setGalleryOpen(true)}
            className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-bold px-8 py-4 rounded-xl transition-colors"
          >
            {t('rutaChip.gallery.button')}
          </button>
        </div>

        {/* Banner intermedio */}
        <img
          src={chipAssetUrl('banner-2_compressed.png')}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="w-full rounded-2xl object-cover"
        />

        {/* Documentos */}
        <DocGrid title={t('rutaChip.docs.downloadable')} items={docs} />
        <DocGrid title={t('rutaChip.docs.preliminary')} items={studies} />

        {/* Banner final */}
        <img
          src={chipAssetUrl('banner-3.png')}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="w-full rounded-2xl object-cover"
        />
      </div>

      <VideoModal
        isOpen={activeVideo !== null}
        onClose={() => setActiveVideo(null)}
        title={activeVideo?.name ?? ''}
        description={activeVideo?.description}
        src={activeVideo?.link ?? ''}
        poster={activeVideo?.poster}
      />

      <ImageGalleryModal
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        title={t('rutaChip.gallery.title')}
        images={galleryImages}
      />
    </section>
  );
}
