"use client";
import { Particles } from "@/components/magicui/particles";

export default function ParticlesDemo() {
  return (
    <div className="fixed inset-0 w-screen h-full z-0">
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={100}
        color="ffffff"
        refresh
      />
    </div>
  );
}