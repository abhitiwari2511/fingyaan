import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BorderBeam } from "@/components/magicui/border-beam";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-zinc-950 w-screen flex justify-center items-center">
      <Card className="relative w-[24vw] border-zinc-800 bg-transparent text-white overflow-hidden">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription className="mt-2">
            Enter your credentials to access your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-5">
              <div className="flex flex-col space-y-3">
                <Label htmlFor="email">Email</Label>
                <Input className="border-zinc-800" id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="flex flex-col space-y-3">
                <Label htmlFor="password">Password</Label>
                <Input className="border-zinc-800"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => {navigate("/signup")}} className="bg-transparent border-zinc-800 cursor-pointer">Register</Button>
          <Button variant="outline" className="bg-transparent cursor-pointer border-zinc-800">Login</Button>
        </CardFooter>
        <BorderBeam duration={8} size={150} />
      </Card>
    </div>
  );
}

export default Login