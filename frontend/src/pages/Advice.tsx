import InvestmentAdvice from "@/components/InvestmentAdvice";
import Navbar from "@/components/Navbar";
import ParticlesDemo from "@/components/ParticleEffect";

const Advice = () => {
  return (
    <div className="min-h-screen w-full bg-zinc-950 overflow-x-hidden">
      <div className="flex justify-center">
        <ParticlesDemo />
        <Navbar />
      </div>
      <div className="pt-20 sm:pt-24 lg:pt-28 px-4 sm:px-6 lg:px-8">
        <InvestmentAdvice />
      </div>
    </div>
  );
};

export default Advice;
