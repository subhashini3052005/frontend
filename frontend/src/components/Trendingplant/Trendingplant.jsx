import React from 'react'
import Vector1 from '../../assets/Vector5.png'
import Vector2 from '../../assets/Vector6.png'
import Angle from '../../assets/Rectangle.png'
import Plant2 from '../../assets/Plant2.png'

const Trendingplant = () => {
  return (
    <section className='min-h-[1700px]'>

      <div className='absolute left-[623px] top-[1000px]'>
        <h2 className='text-[55px] font-semibold text-white leading-none w-[584px]'>
          Our Trendy Plants
        </h2>
      </div>

      <div className='absolute left-[610px] top-[1000px] flex'>
          <img src={Vector1} alt="" className='w-[61.2px] h-[63px]' />
          <img src={Vector2} alt=""  className='w-[61.5px] h-[63px] ml-[345px]'/>
      </div>

      <div className='absolute left-[45px] top-[1171px]'>

        <div className='relative w-[1430px] h-[526px] rounded-[151px] border-2 border-white/20 bg-white/[0.05] backdrop-blur-[15px]  '>

          <div className='absolute left-[72px] -top-[150px] overflow-visible z-20 '>
            <img src={Plant2} alt="" className='w-[630px] h-auto scale-120 object-contain'/>
          </div>

        </div>

        <div>

          <div>
            Description
          </div>

          <div>
            Price
          </div>

          <div>
            <button></button>
            <span>Explore</span>
          </div>

          <div>
            <button></button>
            <img src="" alt="" />
          </div>

        </div>
      </div>

    </section>
  )
}
export default Trendingplant;