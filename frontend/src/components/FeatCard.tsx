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

export function FeatCard({title, description, imgUrl, btnValue, btnLink}: FeatCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Clicked");
    {btnValue === "Expense Tracker" && navigate("/expense-tracker")}
    {btnValue === "Investment Advice" && navigate("/investment-advice")}
    {btnValue === "Govt. Schemes" && navigate("/govt-schemes")}
    {btnValue === "Learning Resources" && navigate("/learning-resources")}
  }

  return (
      <Card className="bg-transparent relative w-full h-full flex justify-evenly border-zinc-800">
        {imgUrl && (
          <CardHeader>
            <Lens
              zoomFactor={2}
              lensSize={100}
              ariaLabel="Image zoom lens"
            >
              <img
                src={imgUrl}
                alt="image placeholder"
                width={220}
                className="rounded-lg object-fill"
              />
            </Lens>
          </CardHeader>
        )}
        <CardContent>
          <CardTitle className="text-2xl text-white">{title}</CardTitle>
          <CardDescription className="text-sm mt-2">
            {description}
          </CardDescription>
        </CardContent>
        {btnValue && (
          <CardFooter>
            <Link to={btnLink}>
              <Button onClick={handleClick} className="cursor-pointer" variant="secondary">
                {btnValue}
              </Button>
            </Link>
          </CardFooter>
        )}
        <BorderBeam duration={8} size={900} />
      </Card>
  );
}
