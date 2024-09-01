import "./Header.css";
import "../index.css";
const Header = () => {
  window.addEventListener("scroll", () => {
    let header = document.querySelector("#header");

    if (window.scrollY >= header.scrollHeight) {
      header.classList.add("top-0");
      header.classList.remove("-top-full");
    } else {
      header.classList.add("-top-full");
      header.classList.remove("top-0");
    }
  });

  const Navbar = () => {
    return (
      <nav>
        <button className="lg:hidden close" id="open-close-navbar" onClick={navbarToggleGenerator}>
          <svg id="close-btn-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
          <svg id="open-btn-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
          </svg>
        </button>
        <ul className="navbar close flex flex-col lg:flex-row gap-y-4 lg:items-center absolute lg:static right-0 top-full w-full lg:w-auto shadow-primary lg:shadow-none mt-4 lg:mt-0 py-4 lg:py-0 rounded-primary lg:rounded-none transition-transform origin-top lg:scale-y-1 bg-white lg:bg-transparent">
          <li className="submenu-item transition-colors hover:bg-white relative group z-10" onClick={toggleSubmenuGenerator}>
            <a className="submenu-link cursor-pointer py-0 lg:py-1 px-5 flex items-center justify-between transition-all lg:hover:text-primary-purple lg:hover:shadow-primary lg:group-hover:text-primary-purple lg:group-hover:shadow-primary rounded-t-primary">
              خانه
              <svg className="dropdown-item-icon size-4 mx-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </a>
            <div className="submenu-dropdown lg:absolute right-0 lg:opacity-0 lg:-mt-3 lg:invisible bg-white lg:rounded-b-primary lg:shadow-primary w-full lg:w-44 px-5 lg:p-5 transition-[.4s] group-hover:opacity-100 group-hover:visible lg:group-hover:mt-0">
              <ul className="flex flex-col gap-y-4">
                <li>
                  <a href="#" className="overflow-hidden navbar-submenu-link flex items-center transition-all hover:text-primary-purple hover:ps-5">
                    آیتم
                  </a>
                </li>
                <li>
                  <a href="#" className="overflow-hidden navbar-submenu-link flex items-center transition-all hover:text-primary-purple hover:ps-5">
                    آیتم
                  </a>
                </li>
                <li>
                  <a href="#" className="overflow-hidden navbar-submenu-link flex items-center transition-all hover:text-primary-purple hover:ps-5">
                    آیتم
                  </a>
                </li>
                <li>
                  <a href="#" className="overflow-hidden navbar-submenu-link flex items-center transition-all hover:text-primary-purple hover:ps-5">
                    آیتم
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#" className="py-0 lg:py-1 px-5 flex items-center transition-all hover:text-primary-purple">
              ویژگی ها
            </a>
          </li>
          <li>
            <a href="#" className="py-0 lg:py-1 px-5 flex items-center transition-all hover:text-primary-purple">
              نحوه کار
            </a>
          </li>
          <li className="submenu-item transition-colors hover:bg-white relative group z-10" onClick={toggleSubmenuGenerator}>
            <a className="submenu-link cursor-pointer py-0 lg:py-1 px-5 flex items-center justify-between transition-all lg:hover:text-primary-purple lg:hover:shadow-primary lg:group-hover:text-primary-purple lg:group-hover:shadow-primary rounded-t-primary">
              صفحه ها
              <svg className="dropdown-item-icon size-4 mx-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </a>
            <div className="submenu-dropdown lg:absolute right-0 lg:opacity-0 lg:-mt-3 lg:invisible bg-white lg:rounded-b-primary lg:shadow-primary w-full lg:w-44 px-5 lg:p-5 transition-[.4s] group-hover:opacity-100 group-hover:visible lg:group-hover:mt-0">
              <ul className="flex flex-col gap-y-4">
                <li>
                  <a href="#" className="overflow-hidden navbar-submenu-link flex items-center transition-all hover:text-primary-purple hover:ps-5">
                    آیتم
                  </a>
                </li>
                <li>
                  <a href="#" className="overflow-hidden navbar-submenu-link flex items-center transition-all hover:text-primary-purple hover:ps-5">
                    آیتم
                  </a>
                </li>
                <li>
                  <a href="#" className="overflow-hidden navbar-submenu-link flex items-center transition-all hover:text-primary-purple hover:ps-5">
                    آیتم
                  </a>
                </li>
                <li>
                  <a href="#" className="overflow-hidden navbar-submenu-link flex items-center transition-all hover:text-primary-purple hover:ps-5">
                    آیتم
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#" className="py-0 lg:py-1 px-5 flex items-center transition-all hover:text-primary-purple">
              قیمت گذاری
            </a>
          </li>
          <li>
            <a href="#" className="py-0 lg:py-1 px-5 flex items-center transition-all hover:text-primary-purple">
              بلاگ
            </a>
          </li>
          <li>
            <a href="#" className="py-0 lg:py-1 px-5 flex items-center transition-all hover:text-primary-purple">
              ارتباط باما
            </a>
          </li>
          <li className="start-navbar-item relative ms-5">
            <a href="#" className="start-navbar-link w-fit relative py-[9px] px-10 flex items-center rounded-3xl text-white bg-primary-purple">
              شروع کنید
            </a>
          </li>
        </ul>
      </nav>
    );
  };
  const toggleSubmenuGenerator = (e) => {
    if (e.target.tagName === "A") {
      const svg = e.target.querySelector("svg");
      const dropdown = e.target.parentElement.querySelector(".submenu-dropdown");
      e.target.classList.toggle("toggle");
      svg.classList.toggle("toggle");
      dropdown.classList.toggle("toggle");

      if (dropdown.className.includes("toggle")) {
        dropdown.style.height = `${dropdown.scrollHeight + 12}px`;
      } else {
        dropdown.style.height = "0";
      }
    }
  };

  const navbarToggleGenerator = (e) => {
    const navbar = document.querySelector(".navbar");
    if (e.target.tagName === "svg") {
      if (e.target.parentElement.className.includes("open")) {
        e.target.parentElement.classList.remove("open");
        e.target.parentElement.classList.add("close");

        navbar.classList.remove("open");
        navbar.classList.add("close");
      } else {
        e.target.parentElement.classList.add("open");
        e.target.parentElement.classList.remove("close");
        navbar.classList.add("open");
        navbar.classList.remove("close");
      }
    } else if (e.target.tagName === "path") {
      if (e.target.parentElement.parentElement.className.includes("open")) {
        e.target.parentElement.parentElement.classList.remove("open");
        e.target.parentElement.parentElement.classList.add("close");
        navbar.classList.remove("open");
        navbar.classList.add("close");
      } else {
        e.target.parentElement.parentElement.classList.add("open");
        e.target.parentElement.parentElement.classList.remove("close");
        navbar.classList.add("open");
        navbar.classList.remove("close");
      }
    }
  };
  return (
    <header className="container xl:max-w-[1536px] bg-white/50 backdrop-blur-sm sticky z-50 py-4 transition-all" id="header">
      <div className="relative flex items-center justify-between gap-x-28">
        <div className="">
          <a href="">
            <img src="apper-logo.png" className="w-[150px] h-[27px]" alt="" />
          </a>
        </div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
