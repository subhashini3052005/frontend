import React from 'react'
import Vector1 from '../../assets/Vector5.png'
import Vector2 from '../../assets/Vector6.png'
import Rect from '../../assets/Rectangle7.png'
import Photo1 from '../../assets/photo1.png'
import Photo2 from '../../assets/photo2.jpg'
import Photo3 from '../../assets/photo3.png'
import Star from '../../assets/star1.png'
import Star5 from '../../assets/star5.png'



const Review = () => {
  return (
    <section className="relative w-[1857px] min-h-[1000px] mx-auto bg-[#142012] overflow-hidden">
        <div className='absolute left-[580px] top-[120px]'>
            <h2 className='text-[55px] text-white font-semibold'>
                Customer Review
            </h2>
        </div>

        <div className='absolute flex left-[570px]  top-[135px]  '>
            <img src={Vector1} alt="" className='w-[61.5px] h-[63px]'/>
            <img src={Vector2} alt="" className='w-[61.5px] h-[63px] ml-[335px]'/>
         </div>

         <div className='absolute flex'>
            <div className='relative left-[25px] top-[360px]'>
                <img src={Rect} alt="" className='w-[500px] h-[480px]'/>
                <div className='absolute left-[70px] top-[90px] '>
                    <img src={Photo1} alt="" className='w-[88px] h-[88px] rounded-full object-cover' />
                </div>

                <div className='absolute left-[190px] top-[90px]'>
                    <h4 className='text-white text-[38px] font-semibold w-[244px]'>
                        Shelly Russel
                    </h4>
                    <div className='flex  gap-[8px] '>
                        <img src={Star} alt="" className='w-[19px] h-[19px]'/>
                        <img src={Star} alt="" className='w-[19px] h-[19px]'/>
                        <img src={Star} alt="" className='w-[19px] h-[19px]'/>
                        <img src={Star} alt="" className='w-[19px] h-[19px]'/>
                        <img src={Star5} alt="" className='w-[9.04px] h-[17.19px]'/>
                    </div>
                </div>
                <div className='absolute left-[70px] top-[230px]'>
                    <p className='text-white/75 text-[24px] font-regular w-[403px] leading-[30px]'>
                        Just got my hands on some absolutely awesome plants, and I couldn’t be happier!
                    </p>
                </div>

            </div>

            <div className='relative left-[25px] top-[360px]'>
                <img src={Rect} alt="" className='w-[500px] h-[480px]'/>
                <div className='absolute left-[70px] top-[90px] '>
                    <img src={Photo2} alt="" className='w-[88px] h-[88px] rounded-full object-cover' />
                </div>

                <div className='absolute left-[190px] top-[90px]'>
                    <h4 className='text-white text-[38px] font-semibold w-[244px]'>
                        Lula Rolfson
                    </h4>
                    <div className='flex  gap-[8px] '>
                        <img src={Star} alt="" className='w-[19px] h-[19px]'/>
                        <img src={Star} alt="" className='w-[19px] h-[19px]'/>
                        <img src={Star} alt="" className='w-[19px] h-[19px]'/>
                        <img src={Star} alt="" className='w-[19px] h-[19px]'/>
                        <img src={Star5} alt="" className='w-[9.04px] h-[17.19px]'/>
                    </div>
                </div>

                <div className='absolute left-[70px] top-[230px]'>
                    <p className='text-white/75 text-[24px] font-regular w-[403px] leading-[30px]'>
                        Each one has its own unique charm and personality, and they’ve already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.
                    </p>
                </div>

            </div>

            <div className='relative left-[25px] top-[360px]'>
                <img src={Rect} alt="" className='w-[480px] h-[480px]'/>
                <div className='absolute left-[70px] top-[90px] '>
                    <img src={Photo3} alt="" className='w-[88px] h-[88px] rounded-full object-cover'/>
                </div>
 
                <div className='absolute left-[190px] top-[90px]'>
                    <h4 className='text-white text-[38px] font-semibold w-[244px]'>
                        Carol Huels
                    </h4>
                    <div className='flex  gap-[8px] '>
                        <img src={Star} alt="" className='w-[19px] h-[19px]'/>
                        <img src={Star} alt="" className='w-[19px] h-[19px]'/>
                        <img src={Star} alt="" className='w-[19px] h-[19px]'/>
                        <img src={Star} alt="" className='w-[19px] h-[19px]'/>
                        <img src={Star5} alt="" className='w-[9.04px] h-[17.19px]'/>
                    </div>
                </div>

                <div className='absolute left-[70px] top-[230px]'>
                    <p className='text-white/75 text-[24px] font-regular w-[380px] leading-[30px]'>
                        It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!
                    </p>
                </div>

            </div>

         </div>



    </section>
  )
}
export default Review;