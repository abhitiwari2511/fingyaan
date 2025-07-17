import { AuroraText } from "./magicui/aurora-text";
import { SchemesList } from "./SchemesList";

const GovtSchemes = () => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="text-center mb-8 lg:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl p-2 text-white font-bold tracking-tighter">
          Govt.
        </h1>
        <div className="mt-2">
          <AuroraText className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl">
            Schemes
          </AuroraText>
        </div>
      </div>
      <div className="mt-8 lg:mt-12">
        <SchemesList />
      </div>
    </div>
  );
};

export default GovtSchemes;
