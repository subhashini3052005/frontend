import Hero from "./hero/hero";
import Trendingplant from "./Trendingplant/Trendingplant";
import Topselling from "./Topselling/Topselling";
import Review from "./Review/Review";

import Bg from "../assets/bg.jpg"

 function Connect(){
  return (
    <section className="relative  inset-0  min-h-[200vh] ">
     <img src={Bg} alt="" className='absolute right-[-65px] w-[1535px] h-[317vh] scale-115 object-contain max-w-none -z-10  ' />
     <Hero/>
     <Trendingplant/>
     <Topselling/>
     <Review/>
     


    </section>
  )
}
export default Connect;
