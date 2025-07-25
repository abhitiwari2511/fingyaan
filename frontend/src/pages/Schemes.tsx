import GovtSchemes from "@/components/GovtSchemes";
import Navbar from "@/components/Navbar";
import ParticlesDemo from "@/components/ParticleEffect";

const Schemes = () => {
  return (
    <div className="min-h-screen w-full bg-zinc-950 hide-scrollbar">
      <div className="flex justify-center">
        <ParticlesDemo />
        <Navbar />
      </div>
      <div className="pt-20 sm:pt-24 lg:pt-28 px-4 sm:px-6 lg:px-8 pb-8 main-content">
        <GovtSchemes />
      </div>
    </div>
  );
};

export default Schemes;
