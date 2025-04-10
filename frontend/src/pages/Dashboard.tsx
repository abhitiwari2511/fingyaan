import { FeatCard, FeatCardProps } from "@/components/FeatCard";
import Navbar from "@/components/Navbar";
import ParticlesDemo from "@/components/ParticleEffect";

const Dashboard = () => {
  const cardData: FeatCardProps[] = [
    {
      imgUrl: "https://plus.unsplash.com/premium_photo-1681487767138-ddf2d67b35c1?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wxfHx8ZW58MHx8fHx8",
      title: "Expense Tracker",
      description: "Track your daily expenses, visualize spending patterns to improve your financial habits and achieve savings goals.",
      btnValue: "Expense Tracker",
      btnLink: "/expense-tracker"
    },
    {
      imgUrl: "https://plus.unsplash.com/premium_photo-1680396766429-ccfb5626a40d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Investment Advice",
      description: "Get personalized investment strategies based on your goals, risk, and time.",
      btnValue: "Investment Advice",
      btnLink: "/investment-advice"
    },
    {
      imgUrl: "https://media.istockphoto.com/id/876774666/photo/businessman-counting-money-indian-rupee-currency-in-the-envelope-just-given-by-his-partner.jpg?s=612x612&w=0&k=20&c=HubzypUWEfF9ErDKfhTeO9bjKMwojx-jfLZBse6F7tc=",
      title: "Govt. Schemes",
      description: "Explore financial schemes offered by the government to secure your financial future.",
      btnValue: "Govt. Schemes",
      btnLink: "/govt-schemes"
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1622186477895-f2af6a0f5a97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Learning Resources",
      description: "Access educational materials, articles, to enhance your financial literacy and decisions.",
      btnValue: "Learning Resources",
      btnLink: "/learning-resources"
    }
  ]
  return (
    <div className="overflow-hidden h-screen mx-auto bg-zinc-950">
      <div className="flex justify-center">
        <ParticlesDemo />
        <Navbar />
      </div>
      <div className="mt-30 scale-90 flex justify-center gap-18">
       {cardData.map(({title, description, imgUrl, btnValue, btnLink}, index) => {
        return <FeatCard key={index} btnValue={btnValue} btnLink={btnLink} title={title} description={description} imgUrl={imgUrl} />
       })}
      </div>
    </div>

  );
};

export default Dashboard;
