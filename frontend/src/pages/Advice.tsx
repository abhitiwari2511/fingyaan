import InvestmentAdvice from "@/components/InvestmentAdvice";
import Navbar from "@/components/Navbar";
import ParticlesDemo from "@/components/ParticleEffect";

const Advice = () => {
  return (
    <div className="min-h-screen w-full bg-zinc-950 hide-scrollbar">
      <div className="flex justify-center">
        <ParticlesDemo />
        <Navbar />
      </div>
      <div className="pt-20 sm:pt-24 lg:pt-28 px-4 sm:px-6 lg:px-8 pb-8 main-content">
        <InvestmentAdvice />
      </div>
    </div>
  );
};

export default Advice;
