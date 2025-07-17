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
    <Card className="bg-transparent relative w-full h-auto flex flex-col border-zinc-800 min-h-[400px] sm:min-h-[450px] lg:min-h-[500px]">
      {imgUrl && (
        <CardHeader className="flex-shrink-0">
          <Lens zoomFactor={2} lensSize={100} ariaLabel="Image zoom lens">
            <img
              src={imgUrl}
              alt="image placeholder"
              className="w-full h-32 sm:h-40 lg:h-48 rounded-lg object-cover"
            />
          </Lens>
        </CardHeader>
      )}
      <CardContent className="flex-grow p-4 sm:p-6">
        <CardTitle className="text-lg sm:text-xl lg:text-2xl text-white mb-2">
          {title}
        </CardTitle>
        <CardDescription className="text-xs sm:text-sm lg:text-base">
          {description}
        </CardDescription>
      </CardContent>
      {btnValue && (
        <CardFooter className="flex-shrink-0 p-4 sm:p-6">
          <Link to={btnLink} className="w-full">
            <Button
              onClick={handleClick}
              className="cursor-pointer w-full text-xs sm:text-sm"
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
