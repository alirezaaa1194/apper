import "./Section1.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Section1 = () => {
  Aos.init({
    duration: 700,
    easing: "ease-out-cubic",
  });
  return (
    <section className="container xl:max-w-[1536px] grid grid-cols-6 lg:grid-cols-12 items-center relative gap-12 mt-5 lg:mt-12">
      <img src="hero-bg.png" className="hero-bg absolute top-30 lg:-top-40 lg:left-32 -z-10" alt="" />
      {/* section1 right hand */}
      <div className="col-span-6 flex flex-col gap-y-1 lg:gap-y-3" data-aos="fade-left" data-aos-easing="ease" data-aos-delay="100">
        <h2 className="text-2xl lg:text-5xl text-dark-purple font-bold text-center lg:text-right">
          بهترین راه برای <span className="text-2xl lg:text-5xl text-primary-purple font-bold">مدیریت مشتریان شما.</span>
        </h2>
        <p className="text-[#3E3F66] text-center lg:text-justify text-sm lg:text-base">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.</p>
        <div className="flex flex-col items-center lg:flex-row gap-3 mt-3">
          <input id="email-input" type="text" placeholder="ایمیل خودرا وارد کنید" className="py-3 px-6 outline-none border transition-shadow rounded-md w-2/3 lg:w-full placeholder:text-black font-bold" />
          <button id="email-btn" className="py-3 px-14 bg-primary-purple rounded-md text-white border border-primary-purple font-bold">
            ارسال
          </button>
        </div>
        <div className="flex items-center justify-center lg:justify-start gap-x-8 mt-3 lg:mt-0">
          <span className="flex items-center gap-x-2">
            <svg className="w-5 h-5 m-0 p-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
            </svg>

            <span className="text-sm"> آزمایش رایگان 14 روز</span>
          </span>
          <span className="flex items-center gap-x-2">
            <svg className="w-5 h-5 m-0 p-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
            </svg>

            <span className="text-sm">کارت اعتباری نیازی ندارد</span>
          </span>
        </div>
        <div className="flex items-center justify-center lg:justify-start gap-x-4 relative mt-2">
          <ul className="flex">
            <li className="relative top-0 w-[51px] h-[51px]">
              <img src="https://atiyehahmadi.ir/apper-demo/all-demo/04-app-landing-page-gredient-color/images/used01.png" className="w-[51px] h-[51px] rounded-ful" alt="" />
            </li>
            <li className="relative top-0 w-[51px] h-[51px] -mr-6">
              <img src="https://atiyehahmadi.ir/apper-demo/all-demo/04-app-landing-page-gredient-color/images/used02.png" className="w-[51px] h-[51px] rounded-ful" alt="" />
            </li>
            <li className="relative top-0 w-[51px] h-[51px] -mr-6">
              <img src="https://atiyehahmadi.ir/apper-demo/all-demo/04-app-landing-page-gredient-color/images/used03.png" className="w-[51px] h-[51px] rounded-ful" alt="" />
            </li>
            <li className="relative top-0 w-[51px] h-[51px] -mr-6">
              <img src="https://atiyehahmadi.ir/apper-demo/all-demo/04-app-landing-page-gredient-color/images/used04.png" className="w-[51px] h-[51px] rounded-ful" alt="" />
            </li>
          </ul>
          <p className="text-sm">
            +12 میلیون
            <br /> کاربران برنامه
          </p>
        </div>
      </div>
      <div className="col-span-6 section-ads-imgs">
        <div className="flex flex-col items-center lg:flex-row gap-6">
          <div className="flex items-center flex-wrap justify-center lg:flex-nowrap lg:flex-col lg:items-end gap-3">
            <img className="rounded-primary shadow-primary img1 my-1 w-[255px] h-[380px]" src="img1.png" alt="" />
            <img className="rounded-primary shadow-primary img2 my-1 w-[165px] h-[150px]" src="img2.png" alt="" />
          </div>
          <div className="flex flex-col items-start gap-3">
            <img className="rounded-primary shadow-primary img3 my-1 w-[215px] h-[120px]" src="img3.png" alt="" />
            <img className="rounded-primary shadow-primary img4 my-1 w-[255px] h-[380px]" src="img4.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Section1;
