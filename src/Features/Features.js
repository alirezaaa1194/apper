import "./Features.css";
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init({
  duration: 700,
  easing: "ease-out-cubic",
});
const Features = () => {
  return (
    <section className="mx-4 mt-20 lg:mt-64 shadow-section rounded-section bg-white/50 relative">
      <img src="hero-bg.png" className="hero-bg absolute top-30 lg:-top-80 lg:-right-80 -z-10 lg:scale(1)" alt="" />
      <div className="container xl:max-w-[1536px] relative pt-14 pb-14 lg:pt-56 lg:pb-32 flex flex-col items-center lg:px-[89px]">
        <img src="device-feature.png" className="w-[250px] lg:w-[921px] mx-auto absolute right-0 left-0 -top-6 lg:-top-16" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="100" alt="" />
        <h2 className="text-dark-purple text-2xl lg:text-4xl font-bold" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="200" alt="">
          <span className="text-primary-purple text-2xl lg:text-4xl font-bold">ویژگی‌ها،</span>ما را متفاوت میکند
        </h2>
        <p className="text-[#3E3F66] text-center text-sm lg:text-base mt-2" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="200" alt="">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
          <br /> با استفاده از طراحان گرافیک است.
        </p>
        <div className="flex flex-wrap lg:flex-nowrap justify-between gap-5 mt-20">
          <div className="flex flex-col items-center lg:items-start w-full lg:w-1/4" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="50">
            <img src="secure_data.png" className="w-20" alt="" />
            <h3 className="text-2xl font-bold text-dark-purple mt-12">داده امن</h3>
            <p className="text-[#3E3F66] text-base mt-1 text-center lg:text-right">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
          </div>
          <div className="flex flex-col items-center lg:items-start w-full lg:w-1/4" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="50">
            <img src="functional.png" className="w-20" alt="" />
            <h3 className="text-2xl font-bold text-dark-purple mt-12">خودکار بودن</h3>
            <p className="text-[#3E3F66] text-base mt-1 text-center lg:text-right">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
          </div>
          <div className="flex flex-col items-center lg:items-start w-full lg:w-1/4" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="50">
            <img src="live-chat.png" className="w-20" alt="" />
            <h3 className="text-2xl font-bold text-dark-purple mt-12">داده امن</h3>
            <p className="text-[#3E3F66] text-base mt-1 text-center lg:text-right">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
          </div>
          <div className="flex flex-col items-center lg:items-start w-full lg:w-1/4" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="50">
            <img src="support.png" className="w-20" alt="" />
            <h3 className="text-2xl font-bold text-dark-purple mt-12">داده امن</h3>
            <p className="text-[#3E3F66] text-base mt-1 text-center lg:text-right">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;
