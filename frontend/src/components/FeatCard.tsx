import { Link, useNavigate } from "react-router-dom";
import { BorderBeam } from "./magicui/border-beam";
import { Lens } from "./magicui/lens";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export interface FeatCardProps {
  title: string;
  description: string;
  imgUrl?: string | null;
  btnValue?: string;
  btnLink: string;
}

export function FeatCard({
  title,
  description,
  imgUrl,
  btnValue,
  btnLink,
}: FeatCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Clicked");
    {
      btnValue === "Expense Tracker" && navigate("/expense-tracker");
    }
    {
      btnValue === "Investment Advice" && navigate("/investment-advice");
    }
    {
      btnValue === "Govt. Schemes" && navigate("/govt-schemes");
    }
    {
      btnValue === "Learning Resources" && navigate("/learning-resources");
    }
  };

  return (
    <Card className="bg-transparent relative w-full h-auto flex flex-col border-zinc-800 min-h-[280px] max-w-xs mx-auto hover:scale-105 transition-transform duration-200">
      {imgUrl && (
        <CardHeader className="flex-shrink-0 p-2">
          <Lens zoomFactor={2} lensSize={100} ariaLabel="Image zoom lens">
            <img
              src={imgUrl}
              alt="image placeholder"
              className="w-full h-20 sm:h-24 rounded-lg object-cover"
            />
          </Lens>
        </CardHeader>
      )}
      <CardContent className={`flex-grow p-2 sm:p-3 ${!imgUrl ? "pt-4" : ""}`}>
        <CardTitle className="text-sm sm:text-base text-white mb-1.5 leading-tight">
          {title}
        </CardTitle>
        <CardDescription className="text-xs text-zinc-400 line-clamp-3 leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
      {btnValue && (
        <CardFooter className="flex-shrink-0 p-2 sm:p-3 pt-0">
          <Link to={btnLink} className="w-full">
            <Button
              onClick={handleClick}
              className="cursor-pointer w-full text-xs h-7 hover:scale-105 transition-transform duration-200"
              variant="secondary"
            >
              {btnValue}
            </Button>
          </Link>
        </CardFooter>
      )}
      <BorderBeam duration={8} size={900} />
    </Card>
  );
}
