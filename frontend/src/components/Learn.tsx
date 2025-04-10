import { FeatCard } from "./FeatCard";

const Learn = () => {

  const courses = [
    {
      title: "Personal Finance Basics",
      description: "Learn the fundamentals of personal finance, budgeting, and money management.",
      btnText: "Learn More",
      link: 'https://www.coursera.org/learn/personal-financial-planning',
    },
    {
      title: "Investment Fundamentals",
      description: "Understanding different investment options and strategies for long-term wealth creation.",
      btnText: "Learn More",
      link: 'https://www.edx.org/learn/investing',
    },
    {
      title: "Stock Market Basics",
      description: "Learn how the Indian stock market works and basic trading concepts.",
      btnText: "Learn More",
      link: 'https://www.udemy.com/course/indian-stock-market-for-beginners',
    }
  ];

  const videos = [
    {
      title: "Smart Budgeting Tips",
      description: "Learn effective budgeting strategies for better financial management.",
      btnText: "Watch Video",
      link: 'https://www.youtube.com/watch?v=example1',
    },
    {
      title: "Investment Strategies",
      description: "Expert insights on creating a balanced investment portfolio.",
      btnText: "Watch Video",
      link: 'https://www.youtube.com/watch?v=example2',
    }
    ];

  return (
  <div className='top-div flex flex-col mx-auto justify-center items-center'>
    <div className='first-div mx-10 mb-12'>
      <h1 className="text-6xl font-bold text-center mb-8 p-5 text-white">Online Courses</h1>
      <div className="flex justify-center items-center gap-10">
        {courses.map(({title, description, link, btnText}, index) => {
          return <FeatCard key={index} title={title} description={description} imgUrl={null} btnValue={btnText} btnLink={link} />
        })}
      </div>
    </div>
    
    <div className='edu-divs mx-10 mb-12'>
      <h1 className="text-6xl font-bold text-center mb-8 p-5 text-white">Videos</h1>
      <div className="grid grid-cols-2 gap-10">
        {videos.map(({title, description, link, btnText}, index) => {
          return <FeatCard key={index} title={title} description={description} imgUrl={null} btnValue={btnText} btnLink={link} />
        })}
      </div>
    </div>
  </div>
  )
}

export default Learn
