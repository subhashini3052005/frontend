import Hero from "./Hero/Hero";
import Trendingplant from "./Trendingplant/Trendingplant";
import Topselling from "./Topselling/Topselling";
import Review from "./Review/Review";
import Ourbest from "./Ourbest/Ourbest";
import Footer from "./Footer/Footer";

import Bg from "../assets/bg.jpg"

 function Connect(){
  return (
    <section className="relative  inset-0  min-h-[200vh] overflow-x-hidden">
     <img src={Bg} alt="" className='absolute top-[-70px] w-[1545px] h-[2592px] scale-115 object-contain max-w-none -z-10  ' />
     <Hero/>
     <Trendingplant/>
     <Topselling/>
     <Review/>
     <Ourbest/>
     <Footer/>
     


    </section>
  )
}
export default Connect;
