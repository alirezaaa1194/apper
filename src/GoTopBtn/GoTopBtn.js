import "./GoTopBtn.css";
import Aos from "aos";
import "aos/dist/aos.css";

const GoTopBtn = () => {
  Aos.init({
    duration: 700,
    easing: "ease-out-cubic",
  });
  const goTop = () => {
    window.scrollTo(0, 0);
  };

  const showBtn = () => {
    let goTopBtn = document.querySelector("#goTopBtn");
    if (window.scrollY > 500) {
      goTopBtn.classList.remove("invisible");
      goTopBtn.classList.add("visible");

      goTopBtn.classList.remove("opacity-0");
      goTopBtn.classList.add("opacity-100");
    } else {
      goTopBtn.classList.add("invisible");
      goTopBtn.classList.remove("visible");

      goTopBtn.classList.add("opacity-0");
      goTopBtn.classList.remove("opacity-100");
    }
  };
  window.addEventListener("scroll", showBtn);
  window.addEventListener("load", showBtn);

  return (
    <button id="goTopBtn" onClick={goTop} className="w-[40px] lg:w-[50px] h-[40px] lg:h-[50px] rounded-full bg-primary-purple text-white flex items-center justify-center fixed left-8 bottom-8 z-50 transition-all hover:-translate-y-2 invisible opacity-0 shadow-section">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 lg:size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
      </svg>
    </button>
  );
};
export default GoTopBtn;
