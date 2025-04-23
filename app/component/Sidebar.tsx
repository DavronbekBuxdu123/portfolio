"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import useSidebarStore from "../store/useSidebarStore";
import { createClient } from "../utils/supabase/client";
type User = {
  name: string;
  telegram: string;
  email: string;
  github: string;
  phone: string;
  skills: string[];
  id: string;
};
export default function Sidebar() {
  const { isOpen, close } = useSidebarStore();
  const [portfolio, setPortfolio] = useState<User[]>([]);
  const supabase = createClient();

  useEffect(() => {
    const fetchData = async () => {
      const supabase = createClient();
      const { data } = await supabase.from("Portfolio1").select("*");
      setPortfolio(data!);
    };
    fetchData();
  }, []);
  return (
    <div
      className={`absolute top-0 left-0 h-full max-w-[400px] z-50 transition-transform duration-300 bg-[#1b1b1b] p-4  ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-evenly  border-[#FFFFFF40] text-white"></div>

      <div className=" ">
        <Image
          className="rounded-lg ml-5"
          src="/Davron.jpg"
          width={259}
          height={260}
          alt="logo"
        />
      </div>
      <div>
        {portfolio?.map((user) => (
          <p
            key={user.id}
            className="text-white text-[18px] mt-2 font-bold ml-5"
          >
            {user.name}
          </p>
        ))}

        <div className="w-[259px]   flex gap-[10px] flex-wrap justify-items-start  ml-5  text-white">
          {portfolio?.map((user) => (
            <div className="flex gap-3">
              {JSON.parse(user.skills).map((skil) => (
                <div
                  key={skil}
                  className="max-w-[150px] h-[26px]  bg-[#FFFFFF1A] p-[6px] pr-[8px] rounded-[8px] flex items-center justify-center text-[12px] font-normal"
                >
                  {skil}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="p-[10px]  flex flex-col items-start justify-start">
        <div className="flex items-center   gap-4 ">
          <Image
            className=""
            src="/email.svg"
            width={44}
            height={44}
            alt="logo"
          />
          <div className="flex items-start justify-center flex-col ">
            <p className="text-white text-[16px] font-normal mb-0">E-pochta</p>

            {portfolio?.map((user) => (
              <p key={user.id} className="text-[#FFFFFFB2] text-[14px] mb-0">
                {user.email}
              </p>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4 mt-1">
          <Image
            className=""
            src="/github.svg"
            width={44}
            height={44}
            alt="logo"
          />
          <div className="mt-1">
            <p className="text-white text-[16px] font-normal mb-0">Github</p>
            {portfolio?.map((user) => (
              <p key={user.id} className="text-[#FFFFFFB2] text-[14px] mb-0 ">
                {user.github}
              </p>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Image
            className=""
            src="/telegram.svg"
            width={44}
            height={44}
            alt="logo"
          />
          <div className="mt-2">
            <p className="text-white text-[16px] font-normal  mb-0">Telegram</p>
            {portfolio?.map((user) => (
              <p key={user.id} className="text-[#FFFFFFB2] text-[14px] mb-0">
                {user.telegram}
              </p>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Image
            className=""
            src="/phone.svg"
            width={44}
            height={44}
            alt="logo"
          />
          <div className="mt-2">
            <p className="text-white text-[16px] font-normal mb-0">
              Telefon raqam
            </p>
            {portfolio?.map((user) => (
              <p key={user.id} className="text-[#FFFFFFB2] text-[14px] mb-0">
                {user.phone}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
