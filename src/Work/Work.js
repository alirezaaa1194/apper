import "./Work.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Work = () => {
  Aos.init({
    duration: 700,
    easing: "ease-out-cubic",
  });
  return (
    <section className="mx-4 mt-20 lg:mt-24 py-16 px-8 shadow-section rounded-section bg-white/50 relative overflow-x-hidden">
      <img src="hero-bg.png" class="hero-bg absolute top-30 lg:-top-80 lg:-right-80 -z-10 lg:scale(1)" alt=""></img>
      <div className="container xl:max-w-[1536px] relative">
        <div className="flex flex-col items-center">
          <h2 class="text-dark-purple text-2xl lg:text-4xl font-bold text-center" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100" alt="">
            نحوه کار
            <span class="text-primary-purple text-2xl lg:text-4xl font-bold">-سه قدم آسان</span>
          </h2>
          <p class="text-[#3E3F66] text-base mt-1 text-center lg:w-1/2" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
        </div>
        <div className="mt-8">
          <ul className="flex flex-col lg:block">
            <li className="work-list flex flex-col lg:flex-row items-center gap-x-3 justify-between relative mt-20">
              <div className="flex flex-col gap-y-2 mt-3" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="100">
                <span class="text-dark-purple font-bold text-xl text-center lg:text-left">دانلود اپلیکیشن</span>
                <div className="flex items-center gap-x-2 self-center lg:self-end">
                  <a href="" className="flex items-center justify-center w-10 h-10 rounded-full transition-colors bg-[#DFDAF3] hover:bg-primary-purple">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-white">
                      <path fill-rule="evenodd" d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97ZM6.75 8.25a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H7.5Z" clip-rule="evenodd" />
                    </svg>
                  </a>
                  <a href="" className="flex items-center justify-center w-10 h-10 rounded-full transition-colors bg-[#DFDAF3] hover:bg-primary-purple">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-white">
                      <path fill-rule="evenodd" d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97ZM6.75 8.25a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H7.5Z" clip-rule="evenodd" />
                    </svg>
                  </a>
                  <a href="" className="flex items-center justify-center w-10 h-10 rounded-full transition-colors bg-[#DFDAF3] hover:bg-primary-purple">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-white">
                      <path fill-rule="evenodd" d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97ZM6.75 8.25a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H7.5Z" clip-rule="evenodd" />
                    </svg>
                  </a>
                </div>
                <p class="text-[#3E3F66] text-base mt-1 text-center lg:text-right mb-3 lg:mb-0">دانلود اپلیکیشن برای ویندوز ، مک یا آندروید</p>
              </div>
              <span className="number-box bg-[#fff1da] border-[7px] border-[#f9e8cd] text-2xl lg:text-3xl font-bold flex items-center justify-center w-[50px] lg:w-[80px] h-[50px] lg:h-[80px] rounded-full absolute right-0 lg:right-1/2 translate-x-[50px] lg:translate-x-1/2 top-0 lg:top-auto text-dark-purple">01</span>
              <img src="download_app.jpg" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="100" alt="" />
            </li>
            <li className="work-list flex flex-col lg:flex-row items-center gap-x-3 justify-between relative mt-20">
              <img src="create_account.jpg" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="100" alt="" />

              <span className="number-box bg-[#d8fdff] border-[7px] border-[#c5f5f8] text-2xl lg:text-3xl font-bold flex items-center justify-center w-[50px] lg:w-[80px] h-[50px] lg:h-[80px] rounded-full absolute right-0 lg:right-1/2 translate-x-[50px] lg:translate-x-1/2 top-0 lg:top-auto text-dark-purple">02</span>

              <div className="flex flex-col gap-y-2 mt-3" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="100">
                <span class="text-dark-purple font-bold text-xl text-center lg:text-right">ساخت اکانت</span>
                <span class="text-dark-purple font-bold text-lg text-center lg:text-right">14 روز امتحان رایگان</span>
                <p class="text-[#3E3F66] text-base mt-1 text-center lg:text-right">ثبت نام رایگان در برنامه.یک حساب برای همه دستگاه ها.</p>
              </div>
            </li>
            <li className="work-list flex flex-col lg:flex-row items-center gap-x-3 justify-between relative mt-20">
              <div className="flex flex-col gap-y-2 mt-3" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="100">
                <span class="text-dark-purple font-bold text-xl text-center lg:text-left w-full lg:w-1/2">تمام شد، از برنامه لذت ببرید</span>
                <p class="text-[#3E3F66] text-base mt-1 text-center lg:text-left w-full lg:w-1/2 mb-3 lg:mb-0">سوالی دارید؟ چک کنیدسوالات متداولبهترین تجربه از یک برنامه را داشته باشید، جستجو و به اشتراک بگذارید</p>
              </div>
              <span className="number-box bg-[#fff1da] border-[7px] border-[#f9e8cd] text-2xl lg:text-3xl font-bold flex items-center justify-center w-[50px] lg:w-[80px] h-[50px] lg:h-[80px] rounded-full absolute right-0 lg:right-1/2 translate-x-[50px] lg:translate-x-1/2 top-0 lg:top-auto text-dark-purple">03</span>
              <img src="enjoy_app.jpg" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="100" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Work;
