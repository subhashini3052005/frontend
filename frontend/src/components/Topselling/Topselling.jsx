import React from 'react'
import Vector1 from '../../assets/Vector5.png'
import Vector2 from '../../assets/Vector6.png'
import Rect from '../../assets/Rectangle6.png'
import Plant1 from '../../assets/plant1.png'
import plant2 from '../../assets/plant2.png'
import Bag from '../../assets/bag.png'
import Plant3 from '../../assets/plant4.png'
import Plant4 from '../../assets/plant5.png'
import Plant5 from '../../assets/plant6.png'
import Plant6 from '../../assets/plant7.png'

const Topselling = () => {
  return (
    <section className="relative w-[1700px] min-h-[3253px] mx-auto bg-[#142012] overflow-hidden">
        <div className='absolute left-[580px] top-[120px]'>
            <h2 className='text-[55px] text-white font-semibold'>
                Our Top Selling Plants
            </h2>
        </div>
        <div className='absolute left-[570px] top-[135px] flex '>
            <img src={Vector1} alt="" className='w-[61.2px] h-[63px]'/>
            <img src={Vector2} alt="" className='w-[61.2px] h-[63px] ml-[450px]'/>
        </div>

        <div>

            <div className='absolute flex'>

                <div className='relative left-[47px] top-[360px]'>
                    <img src={Rect} alt="" className='w-[512px] h-[644px]'/>
                    <div className='absolute left-[20px] top-[-115px]'>
                        <img src={Plant1} alt=""  className='w-[459px] h-[459px] object-contain '/>
                    </div>

                    <div className='absolute left-[70px] top-[350px] gap-5'>
                        <h3 className='text-white/75 text-[38px] font-regular'>
                            Aglaonema plant
                        </h3>
                        <p className='text-white/75 text-[24px] font-regular w-[372px] leading-[30px]'>
                            The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care
                        </p>
                        <div className='absolute flex top-[180px] gap-30'>
                            <p className='w-[169px] h-[46px] text-white/75 text-[38px] font-regular'>
                                Rs. 300/-
                            </p>
                            <button className='w-[55px] h-[55px] border-2 border-white justify-center flex items-center rounded-[12px] opacity-75'>
                                <img src={Bag} alt="" className='w-[27px] h-[27px]'/>
                            </button>
                            
                        </div>
                    </div>

                </div>

                <div>
                    <div className='relative left-[87px] top-[360px]'>
                    <img src={Rect} alt="" className='w-[512px] h-[644px]'/>
                    <div className='absolute left-[30px] top-[-115px]'>
                        <img src={plant2} alt="" className='w-[459px] h-[459px] object-contain' />
                    </div>

                    <div className='absolute top-[350px] left-[70px]'>
                        <h3 className='text-white/75 text-[38px] font-regular'>
                            Plantain Lilies
                        </h3>
                        <p className='text-white/75 text-[24px] font-regular leading-[30px] w-[358px]'>
                            Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,
                        </p>
                        <div className='absolute flex top-[180px] gap-30'>
                            <p className='text-white/75 w-[168px] text-[38px] font-regular'>Rs. 380/-</p>
                            <button className='w-[55px] h-[55px] border-2 border-white justify-center flex items-center rounded-[12px] opacity-75'>
                                <img src={Bag} alt="" className='w-[27px] h-[27px]'/>
                            </button>
                        </div>
                    </div>

                    </div>

                </div>

                <div>
                    <div className='relative left-[125px] top-[360px]'>
                    <img src={Rect} alt="" className='w-[512px] h-[644px]'/>
                    <div className='absolute left-[40px] top-[-110px]'>
                        <img src={Plant3} alt="" className='w-[459px] h-[459px] object-contain' />
                    </div>

                    <div className='absolute top-[350px] left-[70px]'>
                        <h3 className='text-white/75 text-[38px] font-regular'>
                            Cactus
                        </h3>
                        <p className='text-white/75 text-[24px] font-regular leading-[30px] w-[368px]'>
                            It is known for their ability to thrive in arid environments
                        </p>
                        <div className='absolute flex top-[180px]  gap-35'>
                            <p className='text-white/75 text-[38px] font-regular'>
                                Rs. 259/-
                            </p>
                            <button className='w-[55px] h-[55px] border-2 border-white justify-center flex items-center rounded-[12px] opacity-75'>
                                <img src={Bag} alt="" className='w-[27px] h-[27px]'/>
                            </button>
                        </div>
                    </div>

                </div>

                </div>

            </div>

            <div>
                <div className='absolute flex'>
                    <div className='relative left-[47px] top-[1170px]'>
                        <img src={Rect} alt="" className='w-[512px] h-[644px]'/>
                        <div className='absolute left-[20px] top-[-140px]'>
                        <img src={Plant4} alt=""  className='w-[459px] h-[459px] object-contain '/>
                    </div>
                    <div className='absolute top-[350px] left-[70px]  '>
                        <h3 className='text-white/75 text-[38px] font-regular'>
                            Swiss cheese Plant
                        </h3>
                        <p className='text-white/75 text-[24px] font-regular leading-[30px] w-[350px]'>
                            It is a popular tropical houseplant known for its distinctive, perforated leaves
                        </p>
                        <div className='absolute flex top-[160px] gap-30'>
                            <p className='text-white/75 w-[168px] text-[38px] font-regular'>
                           Rs. 400/-
                            </p>
                            <button className='w-[55px] h-[55px] border-2 border-white justify-center flex items-center rounded-[12px] opacity-75'>
                                <img src={Bag} alt="" className='w-[27px] h-[27px]'/>
                            </button>
                        </div>
                    </div>

                    </div>

                    <div className='relative left-[87px] top-[1170px]'>
                        <img src={Rect} alt="" className='w-[512px] h-[644px]'/>
                        <div className='absolute left-[20px] top-[-140px]'>
                        <img src={Plant5} alt=""  className='w-[459px] h-[459px] object-contain '/>
                    </div>
                    <div className='absolute top-[330px] left-[70px]  '>
                        <h3 className='text-white/75 text-[38px] font-regular'>
                            Sansevieria plant
                        </h3>
                        <p className='text-white/75 text-[24px] font-regular leading-[30px]  w-[393px]'>
                            It is a popular indoor plant admired for its striking appearance and low-maintenance nature.
                        </p>
                        <div className='absolute flex top-[180px] gap-30'>
                            <p className='text-white/75 w-[168px] text-[38px] font-regular'>
                           Rs. 450/-
                            </p>
                            <button className='w-[55px] h-[55px] border-2 border-white justify-center flex items-center rounded-[12px] opacity-75'>
                                <img src={Bag} alt="" className='w-[27px] h-[27px]'/>
                            </button>
                        </div>
                    </div>

                    </div>
                    
                    <div className='relative left-[127px] top-[1170px]'>
                        <img src={Rect} alt="" className='w-[512px] h-[644px]'/>
                        <div className='absolute left-[20px] top-[-140px]'>
                        <img src={Plant6} alt=""  className='w-[459px] h-[459px] object-contain '/>
                    </div>
                    <div className='absolute top-[325px] left-[70px]  '>
                        <h3 className='text-white/75 text-[38px] font-regular'>
                            Agave plant
                        </h3>
                        <p className='text-white/75 text-[24px] font-regular leading-[30px]  w-[393px]'>
                            The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.
                        </p>
                        <div className='absolute flex top-[185px] gap-30'>
                            <p className='text-white/75 w-[168px] text-[38px] font-regular'>
                           Rs. 359/-
                            </p>
                            <button className='w-[55px] h-[55px] border-2 border-white justify-center flex items-center rounded-[12px] opacity-75'>
                                <img src={Bag} alt="" className='w-[27px] h-[27px]'/>
                            </button>
                        </div>
                    </div>

                    </div>

                </div> 

            </div>

        </div>

    </section>
  )
}
export default Topselling;
