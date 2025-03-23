import GovtSchemes from "@/components/GovtSchemes"
import Navbar from "@/components/Navbar"
import ParticlesDemo from "@/components/ParticleEffect"


const Schemes = () => {
  return (
    <div className="overflow-hidden mx-auto">
        <div className="flex justify-center">
            <ParticlesDemo />
            <Navbar />
        </div>
        <div className="mt-32">
            <GovtSchemes />
        </div>
    </div>
  )
}

export default Schemes