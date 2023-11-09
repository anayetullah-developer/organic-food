import LeftSideBar from "./components/Home/LeftSideBar/LeftSideBar";
import Main from "./components/Home/ContentArea/ContentArea";
import RightSideBar from "./components/Home/RightSideBar/RightSideBar";
import TopBar from "./components/Home/TopBar/TopBar";
import LeftBar from "./components/Home/LeftBar/LeftBar";
import Footer from "./Footer/Footer";

export default function Home() {
  return (
    <div className="h-screen ">
      <TopBar />
      <div className="flex justify-start bg-white">
        <LeftBar />
        <div className="flex justify-between bg-[#E5E7EB] w-full gap-4 border-[1rem] rounded-md mt-3">
          <div className="bg-[#E5E7EB] w-1/5 max-w-[19rem] rounded-lg hidden md:block">
            <LeftSideBar />
          </div>
          <Main />
          <RightSideBar />
        </div>
      </div>
      <Footer/>
    </div>
  );
}
