import React from 'react'
import Pic from "../../assets/leaf.png"

const Footer = () => {
  return (
    <section className='relative w-full h-[800px] mx-auto bg-[#142012] overflow-hidden'>
        <div className='absolute flex left-[60px] top-[250px] gap-4 '>
            <img src={Pic} alt='' className=' w-[94px] h-[94px] '/>
            <h1 className='text-[#FFFFFF]/75 text-[20px] mt-6  md:text-[45px] font-black tracking-normal leading-none'
          style={{ fontFamily: "Inter" }}>
            FloraVision.
          </h1>

          <div className='absolute left-[20px] top-[130px]'>
            <p className='text-white text-[28px] font-medium w-[560px]'>
                "From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment."
            </p>
          </div>

          <div className='absolute flex top-[360px] gap-15 left-[20px]'>
            <p className='text-[28px] text-white font-bold'>
                FB
            </p>
            <p className='text-[28px] text-white font-bold'>
                TW
            </p>
            <p className='text-[28px] text-white font-bold'>
                LI
            </p>
          </div>
        </div>

        <div className='absolute left-[730px] top-[240px]'>
            <h2 className='text-white text-[28px] font-bold'>
                Quick Link’s
            </h2>

            <div className='absolute flex flex-col gap-5 mt-10'>
                <a href="" className='text-white text-[24px] font-medium underline'>Home</a>
                <a href="" className='text-white text-[24px] font-medium w-[187px] underline'>Type's Of Plant's</a>
                <a href="" className='text-white text-[24px] font-medium underline'>Contact</a>
                <a href="" className='text-white text-[24px] font-medium underline'>Privacy</a>
            </div>
        </div>

        <div className='absolute left-[1030px] top-[240px]'>
            <h2 className='text-white text-[28px] font-bold'>
                For Every Update.
            </h2>

            <div className='absolute top-[90px]  flex mt-6 '>
                <div className='w-[470px] h-[74px] flex items-center border-3 border-white rounded-[12px] '>
                    <input type="Email" placeholder='Enter Email' className='flex-1 h-full outline-none pl-8 bg-transparent text-white text-[24px] ' />
                    <button className='w-[150px] h-[65px] bg-white rounded-[15px] text-[#000000] font-bold  text-[22px] cursor-pointer'>
                    SUBSCRIBE
                    </button>
                </div>
            </div>

            <p className='text-white text-[24px] font-medium mt-80'>
                FloraVision © all right reserve
            </p>


        </div>

    </section>
  )
}
export default Footer;