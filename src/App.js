import Features from "./Features/Features";
import GoTopBtn from "./GoTopBtn/GoTopBtn";
import Header from "./Header/Header";
import Section1 from "./Section1/Section1";
import Videosection from "./Videosection/Videosection";
import Webdesign from "./Webdesign/Webdesign";
import Webdetails from "./Webdetails/Webdetails";
import Work from "./Work/Work";
import "./index.css";
export default function App() {
  return (
    <div className="">
      <Header />
      <Section1 />
      <Features />
      <Webdetails />
      <Webdesign />
      <Work />
      <Videosection />
      <GoTopBtn />
    </div>
  );
}
