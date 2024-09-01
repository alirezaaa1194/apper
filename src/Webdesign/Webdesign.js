import "./Webdesign.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Webdesign = () => {
  Aos.init({
    duration: 700,
    easing: "ease-out-cubic",
  });
  return (
    <div className="container xl:max-w-[1536px] grid grid-cols-6 lg:grid-cols-12 gap-12 mt-24 relative">
      <img src="hero-bg.png" class="hero-bg absolute bottom-1/4 lg:-top-80 lg:left-0 -z-10" alt=""></img>
      <div className="col-span-6">
        <h2 class="text-dark-purple text-2xl lg:text-4xl font-bold text-center lg:text-right" alt="" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">
          طراحی زیبا همراه <span class="text-primary-purple text-2xl lg:text-4xl font-bold">طراحی رابط کاربری مدرن</span>
        </h2>
        <p className="text-[#3E3F66] text-base mt-3 text-center lg:text-right" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
        </p>
        <ul className="mt-10 flex flex-col gap-y-7">
          <li className="flex flex-col lg:flex-row items-center lg:items-start gap-3 lg:gap-4" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">
            <img src="right_icon.png" alt="" />
            <div className="flex flex-col">
              <span className="text-dark-purple font-bold text-xl text-center lg:text-right">با دقت طراحی شده</span>
              <p className="text-[#3E3F66] text-base mt-1 text-center lg:text-right">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است</p>
            </div>
          </li>
          <li className="flex flex-col lg:flex-row items-center lg:items-start gap-3 lg:gap-4" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
            <img src="right_icon.png" alt="" />
            <div className="flex flex-col">
              <span className="text-dark-purple font-bold text-xl text-center lg:text-right">هماهنگی بی‌نظیر</span>
              <p className="text-[#3E3F66] text-base mt-1 text-center lg:text-right">چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
            </div>
          </li>
          <li className="flex flex-col lg:flex-row items-center lg:items-start gap-3 lg:gap-4" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
            <img src="right_icon.png" alt="" />
            <div className="flex flex-col">
              <span className="text-dark-purple font-bold text-xl text-center lg:text-right">دسترسی به درایو</span>
              <p className="text-[#3E3F66] text-base mt-1 text-center lg:text-right">تابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="web-design col-span-6 relative h-[500px] lg:h-auto">
        <img src="modern01.png" className="img1 absolute right-0 top-0 bottom-0 m-auto" alt="" data-aos="fade-in" data-aos-delay="100" />
        <img src="shield_icon.png" className="img2 absolute left-20 top-8 m-auto" alt="" data-aos="fade-in" data-aos-delay="100" />
        <img src="modern02.png" className="img2 absolute left-8 top-0 bottom-0 m-auto" alt="" data-aos="fade-in" data-aos-delay="100" />
        <img src="modern03.png" className="img2 absolute left-20 bottom-8 m-auto" alt="" data-aos="fade-in" data-aos-delay="100" />
      </div>
    </div>
  );
};
export default Webdesign;
