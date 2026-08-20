import { useLanguage } from '@/contexts/LanguageContext';
import { competitiveAdvantageHotspots } from '@/data/home';
import PorqueGTImg from '@/assets/images/porqueGT.png';

interface AdvantagesHotspotMapProps {
  onHotspotClick: (targetId: string) => void;
}

/** Imagen "Por que Guatemala" con puntos que enlazan a cada tarjeta de ventaja. */
export default function AdvantagesHotspotMap({ onHotspotClick }: AdvantagesHotspotMapProps) {
  const { t } = useLanguage();

  return (
    <div className="flex justify-center mb-6">
      <div className="relative w-full max-w-3xl">
        <img
          src={PorqueGTImg}
          alt={t('home.advantages.title')}
          className="w-full rounded-2xl shadow-lg"
        />
        {competitiveAdvantageHotspots.map((hotspot) => {
          const label = t(hotspot.labelKey);
          return (
            <a
              key={hotspot.id}
              href={`#${hotspot.targetId}`}
              aria-label={label}
              title={label}
              className="group absolute z-20 -translate-x-1/2 -translate-y-1/2 rounded-full focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300"
              style={{ top: hotspot.top, left: hotspot.left }}
              onClick={() => onHotspotClick(hotspot.targetId)}
            >
              <span className="block h-20 w-20 rounded-full bg-transparent md:h-24 md:w-24" />
              <span className="pointer-events-none absolute left-1/2 top-0 w-max max-w-[220px] -translate-x-1/2 -translate-y-[118%] rounded-2xl border border-blue-100 bg-white/95 px-4 py-3 text-center shadow-[0_18px_45px_rgba(2,16,73,0.18)] backdrop-blur-md opacity-0 transition-all duration-300 group-hover:-translate-y-[128%] group-hover:opacity-100 group-focus-visible:-translate-y-[128%] group-focus-visible:opacity-100">
                <span className="block text-base font-bold text-[#021049] md:text-lg">{label}</span>
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
