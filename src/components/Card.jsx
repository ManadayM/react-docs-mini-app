import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={.1}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
      className="relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-5 py-10 overflow-hidden"
    >
      {/* icon */}
      <FaRegFileAlt />
      {/* text */}
      <p className="text-sm leading-tight font-semibold mt-5">{data.desc}</p>
      {/* footer */}
      <div className="footer absolute bottom-0 w-full left-0">
        {/* footer/data */}
        <div className="flex items-center justify-between px-8 py-3 mb-3">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? <IoClose size=".7em" color="#fff" /> : <LuDownload size=".7em" color="#fff" />}
          </span>
        </div>
        {/* footer/tag */}
        {
          data.tag.isOpen && (
            <div className={`tag w-full py-4 ${data.tag.tagColor} flex items-center justify-center`}>
              <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
            </div>
          )
        }

      </div>
    </motion.div>
  )
}

export default Card
