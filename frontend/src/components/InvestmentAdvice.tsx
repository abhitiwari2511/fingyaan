import { AlertTriangle, BookOpen } from "lucide-react";
import { FeatCard } from "./FeatCard";

const InvestmentAdvice = () => {
  const investmentStrategies = [
    {
      title: "Long-term Investment Strategy",
      description:
        "Consider index funds like Nifty 50 and Sensex for stable long-term growth. Aim to invest 30% of your savings in these instruments for optimal portfolio balance.",
    },
    {
      title: "Risk Management",
      description:
        "Maintain an emergency fund of 6 months' expenses in a high-yield savings account before starting investments to ensure financial security.",
    },
    {
      title: "Smart Spending Guidelines",
      description:
        "Follow the 50-30-20 rule: 50% for needs, 30% for wants, and 20% for savings and investments to maintain financial discipline.",
    },
  ];

  const warnings = [
    {
      title: "High-Risk Investments",
      description:
        "Avoid investing more than 10% of your portfolio in high-risk assets like cryptocurrencies or penny stocks.",
    },
    {
      title: "Emergency Fund First",
      description:
        "Build your emergency fund before starting aggressive investments.",
    },
    {
      title: "Research Before Investing",
      description:
        "Never invest in products you don't understand. Research thoroughly and consult financial advisors.",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl flex flex-col sm:flex-row items-center justify-center font-bold text-center mb-6 sm:mb-8 p-3 sm:p-5 text-white">
          <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 mb-2 sm:mb-0 sm:mr-4 text-blue-600" />
          <span className="text-center">Investment Strategy Guide</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {investmentStrategies.map(({ title, description }, index) => {
            return (
              <FeatCard
                key={index}
                title={title}
                description={description}
                imgUrl={null}
                btnLink="#"
              />
            );
          })}
        </div>
      </div>

      <div className="mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl flex flex-col sm:flex-row items-center justify-center font-bold text-center mb-6 sm:mb-8 p-3 sm:p-5 text-white">
          <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 mb-2 sm:mb-0 sm:mr-4 text-red-500" />
          <span className="text-center">Warnings</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {warnings.map(({ title, description }, index) => {
            return (
              <FeatCard
                key={index}
                title={title}
                description={description}
                imgUrl={null}
                btnLink="#"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InvestmentAdvice;
