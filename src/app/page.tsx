import DashboardHeader from "@/components/dashboard-header";
import OverviewMetrics from "@/components/overview-metrics";
import DistributionCharts from "@/components/distribution-charts";
import FeatureDictionary from "@/components/feature-dictionary";
import FeatureImportance from "@/components/feature-importance";
import Pipeline from "@/components/pipeline";
import PreprocessingNotes from "@/components/preprocessing-notes";
import SiteFooter from "@/components/site-footer";
import FloatingNav from "@/components/floating-nav";
import SectionHeading from "@/components/section-heading";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 bg-grid -z-20 opacity-60" />
      <div className="fixed top-[-15%] left-[-8%] w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-indigo-600/10 blur-[160px] rounded-full -z-10" />
      <div className="fixed bottom-[-10%] right-[-5%] w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] bg-purple-600/8 blur-[140px] rounded-full -z-10" />
      <div className="fixed top-[45%] left-[40%] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-emerald-600/5 blur-[150px] rounded-full -z-10 hidden sm:block" />

      <FloatingNav />

      <main className="relative z-10 max-w-[1320px] mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-10 space-y-14 sm:space-y-20">
        <DashboardHeader />

        <section id="overview" className="scroll-mt-8">
          <SectionHeading number="01" label="VUE D'ENSEMBLE" />
          <OverviewMetrics />
        </section>

        <section id="distributions" className="scroll-mt-8">
          <SectionHeading number="02" label="ANALYSE DES DISTRIBUTIONS" />
          <DistributionCharts />
        </section>

        <section id="features" className="scroll-mt-8">
          <SectionHeading number="03" label="DICTIONNAIRE DES VARIABLES" />
          <FeatureDictionary />
        </section>

        <section id="importance" className="scroll-mt-8">
          <SectionHeading number="04" label="FEATURE IMPORTANCE (RANDOM FOREST)" />
          <FeatureImportance />
        </section>

        <section id="pipeline" className="scroll-mt-8 space-y-12">
          <SectionHeading number="05" label="PIPELINE DE DÉVELOPPEMENT COMPLET" />
          <Pipeline />
        </section>

        <section id="notes" className="scroll-mt-8">
          <PreprocessingNotes />
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}
