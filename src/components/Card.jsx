import { FaRegFileAlt } from "react-icons/fa";

function Card() {
  return (
    <div className="w-60 h-72 rounded-[20px] bg-zinc-900/90 text-white p-5">
      {/* icon */}
      <FaRegFileAlt />
      {/* text */}
      <p className="text-sm leading-tight font-semibold mt-5">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      {/* footer */}
      {/* footer/data */}
      {/* footer/tag */}
    </div>
  )
}

export default Card
