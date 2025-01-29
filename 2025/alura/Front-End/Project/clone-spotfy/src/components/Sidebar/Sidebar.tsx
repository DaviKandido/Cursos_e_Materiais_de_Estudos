import Image from "next/image";
import img from "../../../public/assets/icons/logo-spotify.png";
import { House, Search } from "lucide-react";

export default function Sidebar() {
  return (
      <nav className="bg-[var(--background-card-black)] rounded-[8px] cursor-pointer py-[20px]">
        <div className="flex bg-[var(--background-card)] rounded-[8px] pl-[16px] mb-7">
          <a href="#">
            <Image src={img} alt="Logo" className="w-[100px]" />
          </a>
        </div>
          <ul className="flex flex-col mt-[20px] px-[20px] gap-5">
            <li >
              <a href="#" className="flex items-center gap-3 text-[#b3b3b3] font-[600] hover:text-[#fff]">
                <House width={20}/> <span>Inicio</span>
              </a>
            </li>
            <li >
              <a href="#" className="flex items-center gap-3 text-[#b3b3b3] font-[600] hover:text-[#fff]">
                <Search width={20}/> <span>Buscar</span>
              </a>
            </li>
          </ul>
      </nav>
  );
}
