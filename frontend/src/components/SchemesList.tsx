import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";

interface Scheme {
  id: string;
  name: string;
  description: string;
  applyLink: string;
  lastDate?: string;
}

const schemes: Scheme[] = [
  {
    id: "1",
    name: "PM Mudra Yojana",
    description: "Loans for small businesses",
    applyLink: "https://www.mudra.org.in/",
    lastDate: "2024-12-31",
  },
  {
    id: "2",
    name: "Atal Pension Yojana",
    description: "Pension scheme for unorganized sector",
    applyLink: "https://www.npscra.nsdl.co.in/scheme-details.php",
  },
  {
    id: "3",
    name: "Sukanya Samriddhi Yojana",
    description: "Savings scheme for girl child",
    applyLink:
      "https://www.indiapost.gov.in/Financial/Pages/Content/Sukanya-Samriddhi-Account.aspx",
  },
  {
    id: "4",
    name: "PM Jan Dhan Yojana",
    description: "Financial inclusion program",
    applyLink: "https://www.pmjdy.gov.in/account",
  },
  {
    id: "5",
    name: "Kisan Credit Card",
    description: "Credit facility for farmers",
    applyLink: "https://www.india.gov.in/spotlight/kisan-credit-card-kcc",
  },
];

const duplicatedSchemes = Array.from({ length: 2 }, () => schemes).flat();

const SchemeCard = ({ name, description, applyLink, lastDate }: Scheme) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[300px] sm:max-w-[400px] cursor-pointer overflow-auto rounded-2xl p-3 sm:p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // transparent background
        "bg-transparent",
        // dark styles
        "transform-gpu backdrop-blur-md [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-2 sm:gap-3">
        <div className="flex size-8 sm:size-10 items-center justify-center rounded-2xl bg-blue-500/20">
          <span className="text-base sm:text-lg">💰</span>
        </div>
        <div className="flex flex-col overflow-hidden flex-1 min-w-0">
          <figcaption className="flex flex-col sm:flex-row sm:items-center whitespace-pre text-base sm:text-lg font-medium text-white">
            <span className="text-sm sm:text-lg truncate">{name}</span>
            {lastDate && (
              <>
                <span className="hidden sm:inline mx-1">·</span>
                <span className="text-xs text-gray-400">Until {lastDate}</span>
              </>
            )}
          </figcaption>
          <p className="text-xs sm:text-sm font-normal text-white/60 line-clamp-2">
            {description}
          </p>
        </div>
      </div>
      <a
        href={applyLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 block text-right text-xs text-blue-400 hover:text-blue-300"
      >
        Apply Now →
      </a>
    </figure>
  );
};

export function SchemesList({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-[400px] sm:h-[450px] w-full max-w-4xl mx-auto flex-col overflow-hidden gap-3 sm:gap-4 p-3 sm:p-4 hide-scrollbar",
        className
      )}
    >
      <AnimatedList delay={1000}>
        {duplicatedSchemes.map((scheme) => (
          <SchemeCard {...scheme} key={scheme.id} />
        ))}
      </AnimatedList>
    </div>
  );
}
