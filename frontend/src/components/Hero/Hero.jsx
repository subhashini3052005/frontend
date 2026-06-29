import React from 'react'
import {FaPlay} from 'react-icons/fa'
import Plant1 from '../../assets/plant1.png'
import Rect from '../../assets/rectangle.svg'
import Arrow from '../../assets/right-arrow.png'
import Reviewprofile from '../../assets/picgirl.png'
import Star from '../../assets/star1.png'
import Star5 from '../../assets/star5.png'


const Hero = () => {
  return (
    <section className='relative min-h-screen'>

        <div className='relative pt-60 pl-10 max-w-[600px]'>

            <h1 className='text-white font-medium  w-[1000px] text-[118px]  leading-none  opacity-75 tracking-wide'>
            
                Earth's Exhale
            </h1>

            <p className='w-[775px] text-[23px] font-medium leading-[30px]  text-white/70 mt-2'>
                "Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.
            </p>

            <div className='flex items-center gap-5 mt-5'>

                <button className=' border-white w-[217px] h-[64px] border-2 rounded-[12px] text-white opacity-75 
                hover:text-black hover:bg-white transistion-all duration-300 easy-in-out hover:scale-100'>
                    <span className='text-[30px] font-normal leading-none'>
                        Buy Now
                    </span>
                </button>

                <div className='cursor-pointer flex items-center gap-4'>

                    <div className='w-[70px] h-[70px] border-2 border-white rounded-full'>
                        <FaPlay className='text-white text-[26px] opacity-75 ml-6 mt-5'/>

                    </div>
                    <span className='text-white font-regular text-[25px]'
                    style={{fontFamily:"Indie Flower"}}>
                        Live Demo...
                    </span>
                </div>

            </div>

        </div>

        <div className='absolute top-[194px] right-[40px]' >
            <div className='relative w-[512px] h-[644px] backdrop-blur-[12px]'>
                <img src={Rect} alt="glass image" className='absolute inset-0 w-full h-full'/>

                <div className='absolute w-[459px] h-auto object-contain top-[-85px] left-1/2 -translate-x-1/2'>
                    <img src={Plant1} alt="Plant" />
                </div>

                <div className='absolute left-20 top-[370px]'>
                    <p className='text-[23px] font-normal text-white/75'>
                    Indoor Plant
                    </p>
                    <h3 className='text-[38px] font-normal text-white/75 mt-2 leading-none'>
                    Aglaonema plant
                    </h3>

                    <button className=' border-white w-[217px] h-[64px] border-2 mt-5 rounded-[12px] text-white opacity-75 
                hover:text-black hover:bg-white transistion-all duration-300 easy-in-out hover:scale-100'>
                    <span className='text-[30px] font-normal leading-none'>
                        Buy Now
                    </span>
                    </button>

                </div>

                <div className='absolute right-8 top-[425px]'>
                    <img src={Arrow} alt="" className='w-[20px] h-[20px] object-contain cursor-pointer' />
                </div>

                <div className='absolute flex items-center gap-2 bottom-8 left-1/2 -translate-x-1/2'>
                    <span className='w-[21px] h-[6px] rounded-full bg-white'></span>
                    <span className='w-[6px] h-[6px] rounded-full bg-white'></span>
                    <span className='w-[6px] h-[6px] rounded-full bg-white'></span>
                </div>

            </div>

        </div>

        <div className='absolute left-[43px] top-[685px]'>
            <div className='relative w-[409px] h-[237px] rounded-[45px] overflow-hidden bg-white/[0.04] border border-white/10 backdrop-blur-[12px]'>
            
            <div className='absolute left-[27px] top-[37px]'>
                <img src={Reviewprofile} alt="Girl" className='w-[64px] h-[64px] rounded-full object-cover' />
            </div>

            <div className='absolute left-[119px] top-[46px]'>
                <h4 className='text-[22px] font-normal text-white leading-none tracking-wide'>
                    Ronnie Hamill
                </h4>

                <div className='flex  gap-[8px] mt-2'>
                    <img src={Star} alt="" className='w-[15px] h-[15px]'/>
                    <img src={Star} alt="" className='w-[15px] h-[15px]'/>
                    <img src={Star} alt="" className='w-[15px] h-[15px]'/>
                    <img src={Star} alt="" className='w-[15px] h-[15px]'/>
                    <img src={Star5} alt="" className='w-[7.13px] h-[13.57px]'/>
                </div>
            </div>

            <div className='absolute left-[25px] top-[125px]'>

                <p className='w-[335px] text-[17px] font-normal text-white/70 leading-[21px] tracking-wide '>
                    I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.
                </p>

            </div>  
            </div>
        </div>

    </section>
    
    
  )
}
export default Hero;
