import "./Webdetails.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Aboutweb from "./Aboutweb";

const Webdetails = () => {
  Aos.init({
    duration: 700,
    easing: "ease-out-cubic",
  });
  return (
    <div className="container xl:max-w-[1536px] grid grid-cols-6 lg:grid-cols-12 grid-rows-2 lg:grid-rows-1 gap-12 mt-24 pb-48" id="web-info-container">
      <div className="web-fetures-rightHand row-start-2 lg:row-start-1 col-span-6 relative top-12 lg:top-1/4">
        <img src="about-frame.png" className="img1 absolute z-10 w-[272px] h-[554px] lg:w-[303px w-[272px] h-[554px]] lg:h-[616px] top-0 bottom-0 my-auto" alt="" data-aos="fade-in" data-aos-easing="ease" data-aos-delay="100" />
        <img src="about-screen.png" className="img2 absolute z-10 w-[247px] h-[342px] lg:w-[286px w-[272px] h-[554px]] lg:h-[381px] left-0 lg:right-[151px] top-0 bottom-0 my-auto" alt="" data-aos="fade-in" data-aos-easing="ease" data-aos-delay="100" />
      </div>
      <div className="row-start-1 lg:row-start-1 col-span-6 flex flex-col">
        <div className="" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="100">
          <h2 class="text-dark-purple text-2xl lg:text-4xl font-bold text-center lg:text-right" alt="">
            چند کلمه جالب <span class="text-primary-purple text-2xl lg:text-4xl font-bold">درباره برنامه.</span>
          </h2>
          <p className="text-[#3E3F66] text-base mt-3 text-center lg:text-right">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
        </div>
        <Aboutweb />
        <button id="start-test-btn" class="py-2.5 px-10 mt-8 w-fit bg-primary-purple rounded-full text-white border border-primary-purple hover:text-primary-purple self-center lg:self-start" data-aos="fade-in" data-aos-easing="ease-in" data-aos-delay="200">
          شروع امتحان رایگان
        </button>
      </div>
    </div>
  );
};
export default Webdetails;
