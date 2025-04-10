import Auth from "@/components/Auth";
import ParticlesDemo from "@/components/ParticleEffect";

const Login = () => {
  return (
    <div className="bg-zinc-950 z-10 w-screen h-screen flex justify-center items-center">
      <ParticlesDemo />
      <Auth mode= "login"/>
    </div>
  );
}

export default Login