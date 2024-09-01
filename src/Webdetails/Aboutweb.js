import "./Aboutweb.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Aboutweb = () => {
  Aos.init({
    duration: 700,
    easing: "ease-out-cubic",
  });

  const showSiteInfoByScroll = () => {
    const webInfoContainer = document.querySelector("#web-info-container");
    const infosBox = document.querySelectorAll(".info");

    if (window.scrollY >= webInfoContainer.offsetTop) {
      infosBox.forEach((box) => {
        let infoCounter = 0;
        let counterMax = box.dataset.info;

        let timeCounter = setInterval(() => {
          if (infoCounter < counterMax) {
            infoCounter++;
            box.innerHTML = infoCounter;
          } else {
            clearInterval(timeCounter);
          }
        }, 3);
      });
    }
  };

  window.addEventListener("scroll", showSiteInfoByScroll);
  window.addEventListener("load", showSiteInfoByScroll);
  return (
    <div className="grid grid-cols-2 gap-6 lg:gap-8 mt-8" data-aos="fade-in" data-aos-easing="ease" data-aos-delay="100">
      <div className="col-span-1 w-full px-2.5 py-2.5 bg-white shadow-section rounded-primary flex items-center gap-3">
        <img src="download.png" alt="" />
        <div className="">
          <h2 className="text-dark-purple text-2xl lg:text-4xl font-bold">
            <span className="info text-2xl lg:text-3xl align-middle" data-info="17">
              0
            </span>
            <span className="text-2xl lg:text-4xl align-middle">+م</span>
          </h2>
          <span className="text-dark-purple text-base mt-3 text-center lg:text-right align-middle">دانلود</span>
        </div>
      </div>
      <div className="col-span-1 w-full px-2.5 py-2.5 bg-white shadow-section rounded-primary flex items-center gap-3">
        <img src="followers.png" alt="" />
        <div className="">
          <h2 className="text-dark-purple text-2xl lg:text-4xl font-bold">
            <span className="info text-2xl lg:text-3xl align-middle" data-info="8">
              0
            </span>
            <span className="text-2xl lg:text-4xl align-middle">+م</span>
          </h2>
          <span className="text-dark-purple text-base mt-3 text-center lg:text-right align-middle">دنبال کننده</span>
        </div>
      </div>
      <div className="col-span-1 w-full px-2.5 py-2.5 bg-white shadow-section rounded-primary flex items-center gap-3">
        <img src="reviews.png" alt="" />
        <div className="">
          <h2 className="text-dark-purple text-2xl lg:text-4xl font-bold">
            <span className="info text-2xl lg:text-3xl align-middle" data-info="2300">
              0
            </span>
            <span className="text-2xl lg:text-4xl align-middle">+م</span>
          </h2>
          <span className="text-dark-purple text-base mt-3 text-center lg:text-right align-middle">نظرات</span>
        </div>
      </div>
      <div className="col-span-1 w-full px-2.5 py-2.5 bg-white shadow-section rounded-primary flex items-center gap-3">
        <img src="countries.png" alt="" />
        <div className="">
          <h2 className="text-dark-purple text-2xl lg:text-4xl font-bold">
            <span className="info text-2xl lg:text-3xl align-middle" data-info="150">
              0
            </span>
            <span className="text-2xl lg:text-4xl align-middle">+م</span>
          </h2>
          <span className="text-dark-purple text-base mt-3 text-center lg:text-right align-middle">کشورها</span>
        </div>
      </div>
    </div>
  );
};

export default Aboutweb;
