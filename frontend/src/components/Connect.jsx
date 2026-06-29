import Hero from "./hero/hero";
import Trendingplant from "./Trendingplant/Trendingplant";
import Bg from "../assets/bg.jpg"

 function Connect(){
  return (
    <section className="relative  min-h-[200vh]  ">
     <img src={Bg} alt="" className='absolute right-[-10px] w-[1535px] h-[300vh] max-w-none -z-10 top-[-60px] ' />
     <Hero/>
     <Trendingplant/>


    </section>
  )
}
export default Connect;
