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
import { FormEvent, useState } from "react";
import axios from "axios";

interface AuthProps {
  mode: "login" | "signup";
  onSubmit?: (data: { email: string; password: string; fullName?: string }) => void;
}

const Auth = ({ mode }: AuthProps) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  
  const isSignup = mode === "signup";
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const endpoint = isSignup ? `${import.meta.env.VITE_BACKEND_URL}/api/v1/users/signup` : `${import.meta.env.VITE_BACKEND_URL}/api/v1/users/login`;
      await axios.post(endpoint, {
        email,
        password,
        ...(isSignup ? { fullName } : {})
      }, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        }
      });
      
      // Redirect user after successful authentication
      navigate(isSignup ? "/dashboard" : "/dashboard");
    } catch (error) {
      console.error("Authentication error:", error);
    }
  };

  return (
    <Card className="absolute w-[24vw] border-zinc-800 bg-zinc-950 text-white overflow-hidden">
      <CardHeader>
        <CardTitle>{isSignup ? "SignUp" : "Login"}</CardTitle>
        <CardDescription className="mt-2">
          {isSignup 
            ? "Enter your credentials to register your account."
            : "Enter your credentials to access your account."}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-5">
            {/* only for signup */}
            {isSignup && (
              <div className="flex flex-col space-y-3">
                <Label htmlFor="fullName">Full Name</Label>
                <Input 
                  className="border-zinc-800" 
                  id="fullName" 
                  type="text" 
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
            )}
            
            <div className="flex flex-col space-y-3">
              <Label htmlFor="email">Email</Label>
              <Input 
                className="border-zinc-800" 
                id="email" 
                type="email" 
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="flex flex-col space-y-3">
              <Label htmlFor="password">Password</Label>
              <Input 
                className="border-zinc-800"
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button 
          variant="outline" 
          onClick={() => navigate(isSignup ? "/login" : "/signup")} 
          className="bg-transparent border-zinc-800 cursor-pointer"
        >
          {isSignup ? "Login" : "Register"}
        </Button>
        <Button 
          variant="outline" 
          className="bg-transparent cursor-pointer border-zinc-800"
          onClick={handleSubmit}
          type="submit"
        >
          {isSignup ? "SignUp" : "Login"}
        </Button>
      </CardFooter>
      <BorderBeam duration={8} size={150} />
    </Card>
  );
}

export default Auth;