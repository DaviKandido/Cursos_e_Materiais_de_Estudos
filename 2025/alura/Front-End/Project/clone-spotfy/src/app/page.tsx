import Footer from "../components/Footer/Footer";
import Library from "../components/Library/Library";
import Sidebar from "../components/Sidebar/Sidebar";
import Navigator from "../components/Navigator/Navigator";

export default function Home() {
  return (
    <>

        <div className="fixed top-0 left-0 bottom-0 h-screen p-[12px] w-[300px] bg-[#000000]">
          <Sidebar />
          <Library/>
        </div>

        <div className="max-w-[80vw] ml-[320px] mr-[32px] p-4 m-2 bg-[var(--background-card-black)] rounded-[15px]">
           <Navigator/>
        </div>

          <main className="bg-[var(--background-card-black)] max-w-[80vw] ml-[320px] mr-[32px] px-10 py-5 rounded-[15px]">

            <div>
              <h2 className="font-[1000] text-[50px] mb-[40px]">Boa tarde</h2>
              <p className="font-[700] text-[30px] mb-[20px]">Navegar por todas as seções</p>
            </div>
          </main>

        <Footer/>
    </>
  );
}
