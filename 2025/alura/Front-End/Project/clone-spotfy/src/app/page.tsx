"use client";
import Footer from "../components/Footer/Footer";
import Library from "../components/Library/Library";
import Sidebar from "../components/Sidebar/Sidebar";
import Navigator from "../components/Navigator/Navigator";
import Cards from "@/components/Cards/Cards";
import { useState } from "react";

export default function Home() {

  const [pesquisa, setPesquisa] = useState('');



  return (
    <>
        <div className="fixed top-0 left-0 bottom-0 h-screen p-[12px] w-[19em] bg-[#000000]">
          <Sidebar />
          <Library/>
        </div>

        <div className="max-w-[80vw] ml-[20em] mr-[32px] p-4 m-2 bg-[var(--background-card-black)] rounded-[15px]">
           <Navigator pesquisa={pesquisa} setPesquisa={setPesquisa}/>
        </div>

        <main className="bg-[var(--background-card-black)] max-w-[80vw] ml-[20em] mr-[32px] px-10 rounded-[15px]">


          <Cards pesquisa={pesquisa}/>
        </main>

      <Footer/>
    </>
  );
}
