import "./Videosection.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Videosection = () => {
  Aos.init({
    duration: 700,
    easing: "ease-out-cubic",
  });
  return (
    <div className="container xl:max-w-[1536px] relative mt-12 flex items-center justify-center" data-aos="fade-in" data-aos-duration="1800" data-aos-delay="200">
      <img src="yt_thumb.png" alt="" className="object-cover h-[300px] lg:h-auto rounded-primary" />
      <div className="absolute flex flex-col items-center justify-center gap-y-7">
        <a href="#" className="relative flex items-center justify-center">
          <span className="wave1 block w-[150px] aspect-square absolute opacity-0 rounded-full bg-white/30 scale-90 lg:scale-100"></span>
          <span className="wave2 block w-[150px] aspect-square absolute opacity-0 rounded-full bg-white/30 scale-90 lg:scale-100"></span>
          <span className="wave3 block w-[150px] aspect-square absolute opacity-0 rounded-full bg-white/30 scale-90 lg:scale-100"></span>
          <img src="play_icon.png" className="relative z-[2] scale-90 lg:scale-100" alt="" />
        </a>
        <a href="" className="flex flex-col items-center justify-center text-white gap-y-2">
          <span className="text-md font-bold">تصویری ببنید چطور کار میکند</span>
          <span className="text-3xl lg:text-4xl  font-bold">مشاهده ویدئو</span>
        </a>
      </div>
    </div>
  );
};
export default Videosection;
