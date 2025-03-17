"use client";
import { Particles } from "@/components/magicui/particles";

export default function ParticlesDemo() {


  return (
    <div className="h-screen w-screen z-0">
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={500}
        color="ffffff"
        refresh
      />
    </div>
  );
}
