import Learn from '@/components/Learn'
import Navbar from '@/components/Navbar'
import ParticlesDemo from '@/components/ParticleEffect'

const Learning = () => {
  return (
    <div className="mx-auto overflow-hidden">
        <div className="flex justify-center">
            <ParticlesDemo />
            <Navbar />
        </div>
        <div className="mt-32">
            <Learn />
        </div>
    </div>
  )
}

export default Learning