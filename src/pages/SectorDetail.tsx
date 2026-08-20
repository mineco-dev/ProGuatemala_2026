import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocalized } from '@/hooks/useLocalized';
import { isSectorSlug, sectorDetails } from '@/data/sectorDetails';
import {
  AdvantagesSection,
  CtaSection,
  DashboardModal,
  HeroSection,
  OpportunitiesSection,
  StatsSection,
  ValueChainSection,
} from './sections/sectorDetail';

function SectorNotFound() {
  const { t } = useLanguage();

  return (
    <div className="pt-16 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">{t('sectorDetail.notFound')}</h1>
        <Link to="/strategic-sectors" className="text-sector-6 hover:brightness-110">
          {t('sectorDetail.back')}
        </Link>
      </div>
    </div>
  );
}

export default function SectorDetail() {
  const { t } = useLanguage();
  const { sector } = useParams();
  const sectors = useLocalized(sectorDetails);
  const [showDashboard, setShowDashboard] = useState(false);

  if (!isSectorSlug(sector)) {
    return <SectorNotFound />;
  }

  const currentSector = sectors[sector];

  return (
    <div className="pt-16">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/strategic-sectors"
            className="inline-flex items-center text-sector-6 hover:brightness-110 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('sectorDetail.back')}
          </Link>
        </div>
      </div>

      <HeroSection sector={currentSector} onShowDashboard={() => setShowDashboard(true)} />

      <DashboardModal isOpen={showDashboard} onClose={() => setShowDashboard(false)} />

      <StatsSection stats={currentSector.stats} />

      <OpportunitiesSection opportunities={currentSector.keyOpportunities} />

      <ValueChainSection steps={currentSector.valueChain} />

      <AdvantagesSection
        sectorName={currentSector.name}
        advantages={currentSector.advantages}
        caseStudies={currentSector.caseStudies}
      />

      <CtaSection sectorName={currentSector.name} />
    </div>
  );
}
