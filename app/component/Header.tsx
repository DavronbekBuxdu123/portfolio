"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiLogoGithub } from "react-icons/bi";
import { IoReorderThreeOutline } from "react-icons/io5";
import useSidebarStore from "../store/useSidebarStore";

export default function Header() {
  const pathname = usePathname();
  const { toggle } = useSidebarStore();

  return (
    <div className="h-[48px] border-b border-gray-700 w-full bg-[#1b1b1b] mx-auto flex justify-between items-center px-4 rounded-t-2xl">
      <div className="flex items-center w-full justify-between max-w-[1540px] mx-auto">
        <div className="flex items-center gap-x-5">
          <IoReorderThreeOutline
            onClick={toggle}
            className="size-6 text-white cursor-pointer lg:hidden"
          />
          <div>
            <h4 className="text-white mt-1">
              Davronbek.<span className="text-success">Uz</span>
            </h4>
          </div>
        </div>
        <div className="p-4">
          <ul className="text-white  items-center gap-5 mt-2 hidden lg:flex">
            <li>
              <Link
                style={{ color: "green", textDecoration: "none" }}
                className={
                  pathname === "/" ? "text-success underline " : "text-white"
                }
                href="/"
              >
                Bosh sahifa
              </Link>
            </li>
            <li>
              <Link
                style={{ color: "green", textDecoration: "none" }}
                className={
                  pathname === "/Haqida" ? "text-success" : "text-white"
                }
                href="/Haqida"
              >
                Haqida
              </Link>
            </li>
            <li>
              <Link
                style={{ color: "green", textDecoration: "none" }}
                className={
                  pathname === "/Loyihalar" ? "text-success" : "text-white"
                }
                href="/Loyihalar"
              >
                Loyihalar
              </Link>
            </li>
            <li>
              <Link
                style={{ color: "green", textDecoration: "none" }}
                className={
                  pathname === "/Boglanish" ? "text-success" : "text-white"
                }
                href="/Boglanish"
              >
                Bog’lanish
              </Link>
            </li>
            <li>
              <Link
                className="text-white"
                href="https://github.com/DavronbekBuxdu123"
              >
                <BiLogoGithub size={24} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
