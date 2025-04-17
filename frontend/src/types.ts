export interface Expense {
    id: string;
    amount: number;
    category: string;
    date: string;
    description: string;
}

export interface ExpenseFormProps {
    onAddExpense: (expense: any) => void;
}

export interface ExpenseListProps {
  expenses: Expense[];
}