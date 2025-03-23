import { AuroraText } from "./magicui/aurora-text";
import { SchemesList } from "./SchemesList";

const GovtSchemes = () => {

  return (
    <div className='w-full flex gap-10'>
      <h1 className="text-[5rem] p-2 text-white font-bold tracking-tighter">
      Govt.
      <div>
        <AuroraText className="text-[5rem]">Schemes</AuroraText >
      </div>
      </h1>
      <div className="scale-90 -mt-10 scroll-auto">
        <SchemesList />
      </div>
    </div>
  )
}

export default GovtSchemes