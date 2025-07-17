import { Calendar, IndianRupee } from "lucide-react";
import { ExpenseListProps } from "../types";

export function ExpenseList({ expenses }: ExpenseListProps) {
  return (
    <div className="text-white rounded-lg shadow-md w-[20rem] lg:w-[30rem] max-w-md mx-auto h-auto min-h-[400px] sm:min-h-[450px] lg:min-h-[4rem] flex flex-col p-4 sm:p-6 border border-zinc-800">
      <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
        Recent Expenses
      </h2>
      <div className="space-y-3 sm:space-y-4 overflow-y-auto flex-grow pr-2 custom-scrollbar">
        {expenses.map((expense) => (
          <div
            key={expense.id}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 sm:p-4 border border-zinc-700 rounded-lg gap-2 sm:gap-0"
          >
            <div className="flex items-center">
              <div className="bg-blue-100 p-2 rounded-full flex-shrink-0">
                <IndianRupee className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
              </div>
              <div className="ml-3 sm:ml-4 min-w-0 flex-1">
                <p className="font-medium text-sm sm:text-base truncate">
                  {expense.description || expense.category}
                </p>
                <p className="text-xs sm:text-sm text-gray-500">
                  {expense.category}
                </p>
              </div>
            </div>
            <div className="text-left sm:text-right ml-10 sm:ml-0">
              <p className="font-semibold text-sm sm:text-base">
                ₹{expense.amount.toFixed(2)}
              </p>
              <p className="text-xs sm:text-sm text-gray-500 flex items-center sm:justify-end">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                {new Date(expense.date).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
        {expenses.length === 0 && (
          <div className="text-center text-gray-500 py-8">
            <p className="text-sm sm:text-base">No expenses added yet</p>
            <p className="text-xs sm:text-sm">
              Add your first expense to get started!
            </p>
          </div>
        )}
      </div>
      <div className="mt-3 sm:mt-4 text-center border-t border-zinc-700 pt-3 sm:pt-4">
        <p className="text-base sm:text-lg text-white font-semibold">
          Total Expenses: ₹
          {expenses
            .reduce((total, expense) => total + expense.amount, 0)
            .toFixed(2)}
        </p>
      </div>
    </div>
  );
}
