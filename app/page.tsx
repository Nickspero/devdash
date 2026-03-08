import Header from "./Components/Header";
import MainWidgets from "./Components/MainWidgets";
import SideWidgets from "./Components/SideWidgets";

export default function Home() {
  return (
    <div className="flex-1 p-8 h-screen w-full">
      <Header />
      <div className="flex w-full gap-8 my-12">
        <MainWidgets />
        <SideWidgets />
      </div>
    </div>
  );
}
