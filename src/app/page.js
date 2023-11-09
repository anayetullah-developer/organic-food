import LeftSideBar from "./components/Home/LeftSideBar/LeftSideBar";
import Main from "./components/Home/ContentArea/ContentArea";
import RightSideBar from "./components/Home/RightSideBar/RightSideBar";
import TopBar from "./components/Home/TopBar/TopBar";
import LeftBar from "./components/Home/LeftBar/LeftBar";

export default function Home() {
  return (
    <main className="h-screen ">
      <TopBar />
      <div className="flex justify-start bg-white">
        <LeftBar/>
        <div className="flex justify-between bg-[#E5E7EB] w-full gap-3 border-8 rounded-md mt-3">
          <LeftSideBar />
          <Main />
          <RightSideBar />
        </div>
      </div>
    </main>
  );
}
