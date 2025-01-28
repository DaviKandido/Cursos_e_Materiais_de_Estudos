import Library from "../components/Library/Library";
import Sidebar from "../components/Sidebar/Sidebar";

export default function Home() {
  return (
    <>
      <div className="fixed top-0 left-0 bottom-0 h-screen p-[12px] w-[300px] bg-[#000000]">
        <Sidebar />
        <Library/>
      </div>
    </>
  );
}
