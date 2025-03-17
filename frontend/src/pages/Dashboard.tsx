import Navbar from "@/components/Navbar"
import ParticlesDemo from "@/components/ParticleEffect"

const Dashboard = () => {
  return (
    <div className="bg-zinc-950 w-screen flex justify-center">
        <ParticlesDemo />
        <Navbar />
    </div>
  )
}

export default Dashboard