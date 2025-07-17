import { TextAnimate } from "@/components/magicui/text-animate";
import Particles from "react-tsparticles";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="min-h-screen w-full bg-zinc-950 flex-col relative flex justify-center items-center px-4 sm:px-6 lg:px-8">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          particles: {
            color: {
              value: "#00b8d9", // cyan color matching your text
            },
            links: {
              color: "#00b8d9",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 1,
              direction: "none",
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />
      <div className="flex flex-col justify-center items-center max-w-4xl mx-auto text-center">
        <div className="text-white flex justify-center flex-col items-center font-bold gap-y-2 z-10">
          <TextAnimate
            animation="blurInUp"
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-cyan-500"
            by="character"
            duration={1}
            once
          >
            Welcome to
          </TextAnimate>
          <TextAnimate
            animation="blurInUp"
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-cyan-500"
            by="character"
            duration={1.5}
            once
          >
            FinGyaan
          </TextAnimate>
          <TextAnimate
            animation="blurInUp"
            className="text-lg sm:text-2xl md:text-3xl lg:text-4xl mt-4 lg:mt-7 text-cyan-500 px-4"
            duration={1.5}
            once
          >
            Your one way solution for all your financial needs.
          </TextAnimate>
        </div>
        <div className="mt-8 sm:mt-10 lg:mt-12">
          <Link
            to={"/login"}
            className={buttonVariants({ variant: "outline" })}
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
