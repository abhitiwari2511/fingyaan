"use client";
import { HomeIcon } from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { SparklesText } from "./magicui/sparkles-text";
import axios from "axios";
export type IconProps = React.HTMLAttributes<SVGElement>;

export default function Navbar() {

  const Icons = {
    // translate: (props: IconProps) => (
    //   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-languages" {...props}><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>
    //   ),
    logout: (props: IconProps) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-out"{...props}><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
      ),
    };
  
  const DATA = {
    navbar: [
      { href: "/dashboard", icon: HomeIcon, label: "Home" },
      // { href: "#", icon: PencilIcon, label: "Blog" },
    ],
    language: {
      btns: {
        // Translate: {
        //   name: "Translate",
        //   url: "#",
        //   icon: Icons.translate,
        // },
        logout: {
          name: "Logout",
          onclick: async () => {
            const endPoint = `${import.meta.env.VITE_BACKEND_URL}/api/v1/users/logout`;
            try {
              await axios.post(endPoint, {}, { withCredentials: true });
              window.location.href = "/login";
            } catch (error) {
              console.error("Logout failed:", error);
            }
          },
          url: "#", 
          icon: Icons.logout,
        }
      }
    }}

  return (
    <div className="flex z-10 absolute flex-col items-center justify-center">
      <TooltipProvider>
        <Dock direction="middle" className="border-zinc-800">
          {DATA.navbar.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    to={item.href}
                    aria-label={item.label}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full text-white",
                    )}
                  >
                    <item.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full bg-zinc-600" />
            <div className="text-white leading-none tracking-normal">
              <SparklesText sparklesCount={5} text="Welcome To FinGyaan" />
            </div>
          <Separator orientation="vertical" className="h-full py-2 bg-zinc-600" />
          {Object.entries(DATA.language.btns).map(([name, btns]) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div
                    onClick={btns.onclick}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full text-white",
                    )}
                  >
                    <btns.icon className="size-4" />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        </Dock>
      </TooltipProvider>
    </div>
  );
}