import InvestmentAdvice from '@/components/InvestmentAdvice'
import Navbar from '@/components/Navbar'
import ParticlesDemo from '@/components/ParticleEffect'

const Advice = () => {
  return (
    <div className="overflow-hidden h-full mx-auto">
        <div className="flex justify-center">
            <ParticlesDemo />
            <Navbar />
        </div>
        <div className="mt-32">
          <InvestmentAdvice />
        </div>
    </div>
  )
}

export default Advice