import Navbar from '@/components/Navbar'
import ParticlesDemo from '@/components/ParticleEffect'

const Tracker = () => {
  return (
    <div className="overflow-hidden mx-auto">
        <div className="flex justify-center">
            <ParticlesDemo />
            <Navbar />
        </div>
        <div className="mt-32">
        </div>
    </div>
  )
}

export default Tracker