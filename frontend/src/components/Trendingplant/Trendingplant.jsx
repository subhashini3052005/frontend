import React from 'react'
import Vector1 from '../../assets/Vector5.png'
import Vector2 from '../../assets/Vector6.png'
import Angle from '../../assets/Rectangle.png'
import Plant2 from '../../assets/Plant2.png'
import Bag from '../../assets/bag.png'
import Plant3 from '../../assets/plant3.png'

const Trendingplant = () => {
  return (
    <section className='min-h-[1700px]'>

      <div className='absolute left-[580px] top-[1000px]'>
        <h2 className='text-[55px] font-semibold text-white leading-none w-[584px]'>
          Our Trendy Plants
        </h2>
      </div>

      <div className='absolute left-[570px] top-[1000px] flex'>
          <img src={Vector1} alt="" className='w-[61.2px] h-[63px]' />
          <img src={Vector2} alt=""  className='w-[61.5px] h-[63px] ml-[345px]'/>
      </div>

      <div className='absolute left-[45px] top-[1155px]'>

        <div className='relative w-[1600px] h-[526px] rounded-[151px] border-2 border-white/20 bg-white/[0.05] backdrop-blur-[15px]  '>

          <div className='absolute left-[15px] -top-[160px] overflow-visible z-20 '>
            <img src={Plant2} alt="" className='w-[630px] h-auto scale-110 object-contain'/>
          </div>

        </div>

        <div>

          <div className='absolute left-[805px] top-[130px]'>
            <h3 className='w-[508px] text-[38px] text-white font-semibold leading-none '>
              For Your Desks Decorations
            </h3>
          </div>

          <div className='absolute left-[805px] top-[210px]'>
            <p className='w-[732px] font-semibold text-white text-[20px] leading-[25px]'>
              I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!
            </p>
          </div>

          <div className='absolute left-[805px] top-[290px]'>
            <p className='w-[171px] font-semibold text-white text-[38px] leading-none'>
              Rs. 599/-
            </p>
          </div>

          <div className='absolute left-[805px] top-[340px]'>
            <button className='border-white w-[217px] h-[64px] border-3 mt-5 rounded-[12px] text-white opacity-75 
            hover:text-black hover:bg-white transistion-all duration-300 easy-in-out hover:scale-100 cursor-pointer'>
              <span className='text-[28px] font-medium  leading-none '>
                Explore
              </span>
            </button>
            
          </div>

          <div className='absolute left-[1053px] top-[340px]'>
            <button className='w-[64px] h-[64px] border-3 border-white justify-center flex items-center mt-5 rounded-[12px] opacity-75 cursor-pointer'>
              <img src={Bag} alt="" className='w-[34px] h-[34px]'/>
            </button>
          </div>

        </div>
      </div>


      <div className='absolute left-[45px] top-[1815px]'>
        <div className='relative w-[1600px] h-[526px] rounded-[151px] border-2 border-white/20 bg-white/[0.05] backdrop-blur-[15px]  '>

        <div className='absolute left-[65px] top-[125px]'>
          <h3 className='w-[508px] text-[38px] text-white font-semibold leading-none'>
            For Your Desks Decorations
          </h3>
        </div>

        <div className='absolute left-[65px] top-[205px]'>
          <p className='w-[732px] font-semibold text-white text-[20px] leading-[25px]'>
            The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming
          </p>
        </div>

        <div className='absolute left-[65px] top-[280px]'>
          <p className='w-[171px] font-semibold text-white text-[38px] leading-none'>
            Rs. 399/-
          </p>
        </div>

        <div className='absolute left-[65px] top-[330px]'>
          <button className='border-white w-[217px] h-[64px] border-3 mt-5 rounded-[12px] text-white  
            hover:text-black hover:bg-white transistion-all duration-300 easy-in-out hover:scale-100 cursor-pointer'>
            <span className='text-[28px] font-medium  leading-none '>
              Explore
            </span>
          </button>
        </div>

        <div className='absolute left-[315px] top-[330px]'>
          <button className='w-[64px] h-[64px] border-3 border-white justify-center flex items-center mt-5 rounded-[12px]  cursor-pointer'>
            <img src={Bag} alt="" className='w-[34px] h-[34px]'/>
          </button>
        </div>

        </div>

        <div className='absolute left-[926px] -top-[121px] z-20'>
          <img src={Plant3} alt="" className='w-[732px] h-auto object-contain scale-110'/>
        </div>

      </div>

    </section>
  )
}
export default Trendingplant;