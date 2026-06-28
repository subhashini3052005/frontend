import React, { useState } from 'react'
import Pic from "../../assets/leaf.png"
import Pic2 from "../../assets/search.png"
import Pic3 from "../../assets/bag.png"
import { HiChevronDown } from "react-icons/hi2"
import {Menu,X} from "lucide-react"

const Navbar = () => {
  const [open,setopen]=useState(false);

  return (
    <nav className='bg-[#1B2316] flex justify-between md:px-20 md:py-6 px-5  py-5 mx-auto   '>
        <div className='flex items-center gap-2'>

          <img src={Pic} alt='' className=' w-10 mt-5'/>

          <h1 className='text-[#FFFFFF] text-[20px] md:text-[28px] font-black mt-7 tracking-normal leading-none'
          style={{ fontFamily: "Inter" }}>
            FloraVision.
          </h1>

        </div>

        <div className='flex flex-1 justify-center'>

          <ul className="hidden md:flex gap-14  text-[#FFFFFF] mt-7  text-[24px] font-normal tracking-normal"
          style={{ fontFamily: "Indie Flower" }}>

            <li><a href="#Home">Home</a></li>
            <li className='flex  gap-4 '><a href="Plants Type">Plants Type</a>
              <div className="w-0 h-0 mt-3
             border-l-[6px] border-l-transparent
             border-r-[6px] border-r-transparent
             border-t-[7px] border-t-white">
             </div>
            </li>
            <li><a href="#More">More</a></li>
            <li><a href="#More">Contact</a></li>

          </ul>
          

        </div>
        {open&&(
          <ul className='md:hidden space-y-3 px-5 py-4 text-white'>
            <li><a href="#home"onClick={()=>setopen(false)}>Home</a></li>
            <li><a href="#Plants Type"onClick={()=>setopen(false)}>Plants Type</a></li>
            <li><a href="#More"onClick={()=>setopen(false)}>More</a></li>
            <li><a href="#Contact"onClick={()=>setopen(false)}>Contact</a></li>
          </ul>
        )

        }

        <div className='flex items-center gap-6'>   

          <div className='hidden md:flex items-center gap-10 ' >

            <img src={Pic2} alt="" className='w-[26px] h-[26px] cursor-pointer opacity-75 mt-7 '/>
            <img src={Pic3} alt="" className='w-[26px] h-[26px] cursor-pointer opacity-75 mt-7'/>

            <div className='flex flex-col gap-[9px] mt-7'>
              <div className='w-[31px] h-[4px] bg-white rounded-full'></div>
              <div className='w-[23px] h-[4px] bg-white rounded-full self-end'></div>
            </div>

          </div>

          
          <div className="flex md:hidden items-center gap-7 mt-7">
            <img src={Pic2} alt="" className="w-6 h-6" />
            <img src={Pic3} alt="" className="w-6 h-6" />
            
            <button onClick={() => setopen(!open)}className='cursor-pointer'>
              {open ? <X className='text-white' size={30} /> : <Menu className='text-white' size={30} />}
            </button>
          </div> 
          </div>
        
    </nav>
  );
};
export default Navbar;