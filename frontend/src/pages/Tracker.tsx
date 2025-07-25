import ExpenseForm from "@/components/ExpenseForm";
import { ExpenseList } from "@/components/ExpenseList";
import Navbar from "@/components/Navbar";
import ParticlesDemo from "@/components/ParticleEffect";
import { Expense } from "@/types";
import { useState } from "react";

const Tracker = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const handleAddExpense = (expense: Expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  return (
    <div className="min-h-screen w-full relative bg-zinc-950 hide-scrollbar">
      <div className="flex justify-center inset-0">
        <ParticlesDemo />
        <Navbar />
      </div>
      <div className="pt-20 sm:pt-24 lg:pt-28 px-4 sm:px-6 lg:px-8 pb-8 main-content">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 mt-10 lg:grid-cols-2 gap-4 sm:gap-6">
            <ExpenseForm onAddExpense={handleAddExpense} />
            <ExpenseList expenses={expenses} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracker;
