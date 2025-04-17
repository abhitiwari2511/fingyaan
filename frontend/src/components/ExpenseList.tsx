import { Calendar, IndianRupee } from 'lucide-react';
import { ExpenseListProps } from '../types';

export function ExpenseList({ expenses }: ExpenseListProps) {
  return (
    <div className="text-white rounded-lg shadow-md h-[68vh] flex flex-col">
      <h2 className="text-xl font-semibold mb-4">Recent Expenses</h2>
      <div className="space-y-4 overflow-y-auto flex-grow pr-2 custom-scrollbar">
        {expenses.map((expense) => (
          <div
            key={expense.id}
            className="flex items-center justify-between p-4 border rounded-lg"
          >
            <div className="flex items-center">
              <div className="bg-blue-100 p-2 rounded-full">
                <IndianRupee className="w-5 h-5 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="font-medium">{expense.description || expense.category}</p>
                <p className="text-sm text-gray-500">{expense.category}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold">₹{expense.amount.toFixed(2)}</p>
              <p className="text-sm text-gray-500">
                <Calendar className="w-4 h-4 inline mr-1" />
                {new Date(expense.date).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-center">
        <p className="text-lg text-white font-semibold">Total Expenses: ₹{expenses.reduce((total, expense) => total + expense.amount, 0).toFixed(2)}</p>
      </div>
    </div>
  );
}