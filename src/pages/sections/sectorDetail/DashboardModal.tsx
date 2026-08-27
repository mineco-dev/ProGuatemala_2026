import { useEffect } from 'react';
import { TableauEmbed } from '@/components/layouts/TableauEmbed';
import { useLanguage } from '@/contexts/LanguageContext';
import { dashboards, tableauLanguage } from '@/data/dashboards';

interface DashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Modal con el tablero de Tableau de sectores estrategicos.
 * El embed y el dimensionamiento los resuelve <TableauEmbed>.
 */
export default function DashboardModal({ isOpen, onClose }: DashboardModalProps) {
  const { t, language } = useLanguage();

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={t('sectorDetail.dashboardTitle')}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full overflow-hidden"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="p-4 bg-sector-6 text-white flex items-center justify-between">
          <div className="font-semibold">{t('sectorDetail.dashboardTitle')}</div>
          <button
            className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20"
            onClick={onClose}
          >
            {t('common.close')}
          </button>
        </div>
        <div className="p-4">
          <TableauEmbed
            vizName={dashboards.strategicSectors[language]}
            title={t('sectorDetail.dashboardTitle')}
            aspectRatio={0.85}
            language={tableauLanguage(language)}
          />
        </div>
      </div>
    </div>
  );
}
