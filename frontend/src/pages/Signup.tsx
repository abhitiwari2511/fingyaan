import Auth from "@/components/Auth";
import ParticlesDemo from "@/components/ParticleEffect";

const SignUp = () => {
  return (
    <div className="relative bg-zinc-950 min-h-screen w-full flex justify-center items-center px-4 sm:px-6 lg:px-8">
      <ParticlesDemo />
      <div className="relative z-20">
        <Auth mode="signup" />
      </div>
    </div>
  );
};

export default SignUp;
