import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { GrInstallOption } from "react-icons/gr";
import { IoIosClose } from "react-icons/io";
import {motion} from "framer-motion";
function Card({data,reference}) {
  return (
<motion.div  drag  className='relative  flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 px-8 py-10 text-white overflow-hidden '>
  {/* icons 
  disc
  footer
      mb
      icon
      tag */}
      <span className='text-white'>
    <FaRegFileAlt />
      </span>
      <p className='font-semibold leading-tight text-sm mt-5'>{data.desc}</p>
      <div className='footer absolute w-full bottom-0  left-0'> 
        <div className='flex items-center justify-center  mb-5'>
           <h5 className='mr-4'>{data.filesize}</h5>
           <span className='ml-24 w-6 h-6 bg-zinc-700  rounded-full flex items-center justify-center px-1 py-1 '>
           {data.close ? <IoIosClose/> :<GrInstallOption size=".8em"/> }
           </span>
        </div>
        {data.tag.isOpen &&(<div className='tags w-full flex items-center justify-center py-3 bg-green-600'>
            <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
           </div> )}
        
      </div>
      

</motion.div>
  )
}

export default Card;