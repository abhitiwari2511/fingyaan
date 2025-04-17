import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "./ui/input";
import { useState } from "react";
import { ExpenseFormProps } from "@/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  amount: z.number().min(0),
  category: z.string().min(1),
  description: z.string().optional(),
});

const ExpenseForm = ({ onAddExpense }: ExpenseFormProps) => {
  const [amount, setAmount] = useState<number>(0);
  const [category, setCategory] = useState<string>("Food");
  const [description, setDescription] = useState<string>("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: 0,
      category: "Food",
      description: "",
    },
  });

  function onSubmit(_values: z.infer<typeof formSchema>) {
    const expense = {
      id: Date.now().toString(),
      amount: amount,
      category,
      date: new Date().toISOString(),
      description,
    };
    console.log(expense);
    onAddExpense(expense);
    setAmount(0);
    setDescription("");
    form.reset({ amount: 0, category: "Food", description: "" });
  }

  return (
        <Card className="w-[22vw] h-[68vh]">
          <CardHeader>
            <CardTitle>Add Your Expense</CardTitle>
            <CardDescription>Please fill in the details below</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <div className="grid w-full items-center gap-4">
                  <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Amount</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Enter amount"
                            {...field}
                            value={amount} onChange={(e) => setAmount(Number(e.target.value))}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="category"
                    render={() => (
                      <FormItem>
                        <FormLabel>Category</FormLabel>
                        <FormControl>
                          <Select onValueChange={(value) => setCategory(value)} defaultValue="Food">
                            <SelectTrigger id="category" className="w-full">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent position="popper">
                              <SelectItem value="Food">Food</SelectItem>
                              <SelectItem value="Transportation">
                                Transportation
                              </SelectItem>
                              <SelectItem value="Entertainment">Entertainment</SelectItem>
                              <SelectItem value="Shopping">Shopping</SelectItem>
                              <SelectItem value="Bills">Bills</SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter description" {...field} value={description} onChange={(e) => setDescription(e.target.value)}/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button type="submit" className="w-full">
                  Submit Expense
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
  );
};

export default ExpenseForm;
