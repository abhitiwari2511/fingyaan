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
import { ExpenseFormProps } from "@/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  amount: z.coerce.number().min(0.01, "Amount must be greater than 0"),
  category: z.string().min(1, "Please select a category"),
  description: z.string().optional(),
});

const ExpenseForm = ({ onAddExpense }: ExpenseFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: 0,
      category: "Food",
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const expense = {
      id: Date.now().toString(),
      amount: values.amount,
      category: values.category,
      date: new Date().toISOString(),
      description: values.description || "",
    };
    console.log(expense);
    onAddExpense(expense);
    form.reset();
  }

  return (
    <Card className="relative mx-auto w-[18rem] min-h-[4rem] sm:min-h-[450px] lg:w-[22rem] lg:min-h-[4rem]">
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl">Add Your Expense</CardTitle>
        <CardDescription className="text-sm sm:text-base">
          Please fill in the details below
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-3 sm:space-y-4"
          >
            <div className="grid w-full items-center gap-3 sm:gap-4">
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm sm:text-base">
                      Amount
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter amount"
                        className="text-sm sm:text-base"
                        {...field}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm sm:text-base">
                      Category
                    </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger
                          id="category"
                          className="w-full text-sm sm:text-base"
                        >
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectItem value="Food">Food</SelectItem>
                          <SelectItem value="Transportation">
                            Transportation
                          </SelectItem>
                          <SelectItem value="Entertainment">
                            Entertainment
                          </SelectItem>
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
                    <FormLabel className="text-sm sm:text-base">
                      Description
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter description"
                        className="text-sm sm:text-base"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" className="w-full mt-2 text-sm sm:text-base">
              Submit Expense
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ExpenseForm;
