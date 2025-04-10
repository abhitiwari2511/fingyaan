import Auth from "@/components/Auth";
import ParticlesDemo from "@/components/ParticleEffect";

const SignUp = () => {
  return (
    <div className="bg-zinc-950 z-10 w-screen h-screen flex justify-center items-center">
      <ParticlesDemo />
      <Auth mode="signup"/>
    </div>
  );
}

export default SignUp