import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";


function Card() {
  return (
    <div className="relative w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-5 py-10 overflow-hidden">
      {/* icon */}
      <FaRegFileAlt />
      {/* text */}
      <p className="text-sm leading-tight font-semibold mt-5">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      {/* footer */}
      <div className="footer absolute bottom-0 w-full left-0">
        {/* footer/data */}
        <div className="flex items-center justify-between px-8 py-3 mb-3">
          <h5>.4mb</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            <LuDownload size=".7em" color="#fff" />
          </span>
        </div>
        {/* footer/tag */}
        <div className="tag w-full py-4 bg-green-600 flex items-center justify-center">
          <h3 className="text-sm font-semibold">Download Now</h3>
        </div>
      </div>
    </div>
  )
}

export default Card
