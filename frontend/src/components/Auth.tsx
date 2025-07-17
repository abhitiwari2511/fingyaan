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
  onSubmit?: (data: {
    email: string;
    password: string;
    fullName?: string;
  }) => void;
}

const Auth = ({ mode }: AuthProps) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const isSignup = mode === "signup";

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    console.log("Login form submitted"); // Debug log

    // Basic validation
    if (!email || !password || (isSignup && !fullName)) {
      setError("Please fill in all required fields");
      setIsLoading(false);
      return;
    }

    try {
      const backendUrl =
        import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";
      const endpoint = isSignup
        ? `${backendUrl}/api/v1/users/signup`
        : `${backendUrl}/api/v1/users/login`;

      await axios.post(
        endpoint,
        {
          email,
          password,
          ...(isSignup ? { fullName } : {}),
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Redirect user after successful authentication
      navigate("/dashboard");
    } catch (error) {
      console.error("Authentication error:", error);
      // Add user-friendly error handling
      if (axios.isAxiosError(error)) {
        console.error("Response data:", error.response?.data);
        console.error("Response status:", error.response?.status);
        setError(
          error.response?.data?.message ||
            "Authentication failed. Please try again."
        );
      } else {
        setError("An unexpected error occurred. Please check your connection.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative">
      <Card className="w-full max-w-sm sm:max-w-md border-zinc-800 bg-transparent text-white overflow-hidden lg:w-[24vw] xl:max-w-xl mx-auto">
        <CardHeader className="space-y-1">
          <CardTitle className="text-xl font-bold text-center">
            {isSignup ? "SignUp" : "Login"}
          </CardTitle>
          <CardDescription className="text-center text-zinc-400 text-sm">
            {isSignup
              ? "Enter your credentials to register your account."
              : "Enter your credentials to access your account."}
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit} noValidate className="touch-manipulation">
          <CardContent className="space-y-4 px-6">
            {error && (
              <div className="text-red-400 text-sm text-center bg-red-950/20 border border-red-900/30 rounded-md p-2">
                {error}
              </div>
            )}
            {/* only for signup */}
            {isSignup && (
              <div className="space-y-1.5">
                <Label htmlFor="fullName" className="text-sm font-medium">
                  Full Name
                </Label>
                <Input
                  className="border-zinc-700 bg-zinc-900 focus:border-zinc-600 h-10"
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  disabled={isLoading}
                  required
                />
              </div>
            )}

            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-sm font-medium">
                Email
              </Label>
              <Input
                className="border-zinc-700 bg-zinc-900 focus:border-zinc-600 h-10"
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                required
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="password" className="text-sm font-medium">
                Password
              </Label>
              <Input
                className="border-zinc-700 bg-zinc-900 focus:border-zinc-600 h-10"
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                required
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-row justify-between gap-3 pt-8 px-6">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate(isSignup ? "/login" : "/signup")}
              disabled={isLoading}
              className="flex-1 bg-transparent border-zinc-700 hover:bg-zinc-800 hover:border-zinc-600 hover:text-white cursor-pointer h-10 transition-colors active:bg-zinc-700 touch-manipulation disabled:opacity-50"
            >
              {isSignup ? "Login" : "Register"}
            </Button>
            <Button
              type="submit"
              variant="outline"
              disabled={isLoading}
              className="flex-1 bg-transparent border-zinc-700 hover:bg-zinc-800 hover:border-zinc-600 hover:text-white cursor-pointer h-10 transition-colors active:bg-zinc-700 touch-manipulation disabled:opacity-50"
              onTouchStart={() => console.log("Touch start on login button")}
              onClick={() => console.log("Click event on login button")}
            >
              {isLoading ? "Loading..." : isSignup ? "SignUp" : "Login"}
            </Button>
          </CardFooter>
        </form>
        <BorderBeam duration={8} size={150} className="absolute inset-0" />
      </Card>
    </div>
  );
};

export default Auth;
