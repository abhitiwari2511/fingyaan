import { AlertTriangle, BookOpen } from 'lucide-react';
import { FeatCard } from './FeatCard';

const InvestmentAdvice = () => {

  const investmentStrategies = [
    {
      title: "Long-term Investment Strategy",
      description: "Consider index funds like Nifty 50 and Sensex for stable long-term growth. Aim to invest 30% of your savings in these instruments for optimal portfolio balance."
    },
    {
      title: "Risk Management",
      description: "Maintain an emergency fund of 6 months' expenses in a high-yield savings account before starting investments to ensure financial security."
    },
    {
      title: "Smart Spending Guidelines",
      description: "Follow the 50-30-20 rule: 50% for needs, 30% for wants, and 20% for savings and investments to maintain financial discipline."
    }
  ];

  const warnings = [
    {
      title: "High-Risk Investments",
      description: "Avoid investing more than 10% of your portfolio in high-risk assets like cryptocurrencies or penny stocks."
    },
    {
      title: "Emergency Fund First",
      description: "Build your emergency fund before starting aggressive investments."
    },
    {
      title: "Research Before Investing",
      description: "Never invest in products you don't understand. Research thoroughly and consult financial advisors."
    }
  ];

  return (
    <div className='top-div flex flex-col mx-auto justify-center items-center'>
        <div className='first-div mx-10 mb-12'>
          <h1 className="text-6xl flex items-center justify-center font-bold text-center mb-8 p-5 text-white">
            <BookOpen className="w-10 h-10 mr-4 text-blue-600" />
            Investment Strategy Guide
          </h1>
          <div className="grid grid-cols-3 gap-10">
            {investmentStrategies.map(({title, description}, index) => {
              return <FeatCard key={index} title={title} description={description} imgUrl={null} btnLink="#" />
            })}
          </div>
        </div>
        
        <div className='edu-divs mx-10 mb-12'>
          <h1 className="text-6xl flex items-center justify-center font-bold text-center mb-8 p-5 text-white">
            <AlertTriangle className="w-10 h-10 mr-4 text-red-500" />
            Warnings
          </h1>
          <div className="grid grid-cols-3 gap-10">
            {warnings.map(({title, description}, index) => {
              return <FeatCard key={index} title={title} description={description} imgUrl={null} btnLink="#" />
            })}
          </div>
        </div>
      </div>
  )
}

export default InvestmentAdvice