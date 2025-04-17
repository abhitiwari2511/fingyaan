import ExpenseForm from '@/components/ExpenseForm'
import { ExpenseList } from '@/components/ExpenseList'
import Navbar from '@/components/Navbar'
import ParticlesDemo from '@/components/ParticleEffect'
import { Expense } from '@/types'
import { useState } from 'react'

const Tracker = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const handleAddExpense = (expense: Expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  return (
    <div className="mx-auto min-h-screen relative">
        <div className="flex justify-center inset-0">
            <ParticlesDemo />
            <Navbar />
        </div>
        <div className="mt-34 relative grid grid-cols-2 gap-30 scale-95">
          <ExpenseForm onAddExpense={handleAddExpense}/>
          <ExpenseList expenses={expenses}/>
        </div>
       
    </div>
  )
}

export default Tracker