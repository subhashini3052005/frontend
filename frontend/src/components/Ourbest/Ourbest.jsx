import React from 'react'
import Vector1 from '../../assets/Vector3.png'
import Vector2 from '../../assets/Vector4.png'
import Plant2 from '../../assets/plant1.png'

const Ourbest = () => {
  return (
    <section className='relative w-full h-[1300px] mx-auto bg-[#142012] overflow-hidden'>
      <div className='absolute left-[580px] top-[120px]'>
            <h2 className='text-[55px] text-white font-semibold'>
                Our Best o2
            </h2>
      </div>

      <div className='absolute flex left-[570px]  top-[135px]  '>
                    <img src={Vector2} alt="" className='w-[61.5px] h-[63px] '/>
                    <img src={Vector1} alt="" className='w-[61.5px] h-[63px] ml-[195px]'/>
                    
      </div>

      <div className='absolute left-[45px] top-[400px]'>
        <div className='relative w-[1430px] h-[700px] rounded-[92px] border-4 border-white/20 bg-white/[0.05] backdrop-blur-[15px]  '>
        <div className='absolute left-[-30px] -top-[60px] overflow-visible z-20 '>
          <img src={Plant2} alt="" className='w-[650px] h-auto scale-110 object-contain'/>
        </div>

        <div className='absolute left-[670px] top-[100px]'>
          <h4 className='text-white/75 font-semibold text-[38px] leading-[50px]'>
              We Have Small And Best O2 Plants Collection’s
          </h4>
        </div>

        <div className='absolute left-[670px] top-[230px] '>
          <p className='text-white/75 font-semibold text-[28px] w-[700px]'>
              Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.
          </p>
          <p className='text-white/75 font-semibold text-[28px] w-[700px] mt-8'>
              Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.
          </p>
        </div>

        <div className='absolute left-[670px] top-[540px]'>
          <button className='border-white/75 w-[217px] h-[64px] border-3 mt-5 rounded-[12px] text-white/75 
            hover:text-black hover:bg-white transistion-all duration-300 easy-in-out hover:scale-100 cursor-pointer'>
          <span className='text-[28px] font-medium  leading-none '>
                Explore
          </span>
          </button>
        </div>

          
        </div>

        </div>
        <div className='absolute flex items-center gap-2 bottom-[100px] left-1/2 -translate-x-1/2'>
            <span className='w-[31px] h-[11px] rounded-full bg-white/75'></span>
            <span className='w-[11px] h-[11px] rounded-full bg-white/75'></span>
            <span className='w-[11px] h-[11px] rounded-full bg-white/75'></span>
        </div>
    </section>
  )
}
export default Ourbest;