"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CiFilter } from "react-icons/ci";
import { FaEye, FaGithub } from "react-icons/fa";
import Link from "next/link";
import { createClient } from "../utils/supabase/client";

export default function Page() {
  const [loyihalar, setLoyihalar] = useState<any[]>([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const supabase = createClient();
      const { data } = await supabase.from("Loyihalar").select("*");
      setLoyihalar(data || []);
    };
    fetchData();
  }, []);

  const filtered = filter
    ? loyihalar.filter((loy) => loy.level === filter)
    : loyihalar;
  return (
    <div>
      <div className="bg-[url(/Body.svg)] bg-cover min-h-screen bg-center max-w-[1540px] mx-auto flex items-center justify-center">
        {" "}
        <div className=" max-w-[1040px]    mt-5  space-y-[24px]">
          <div>
            <h1 className="text-[32px] font-bold text-white">Loyihalar</h1>
            <div className="w-[112px] h-[8px] bg-[#39965F] rounded-[10px]"></div>
          </div>
          <div className="text-white flex items-center justify-between  max-w-[900px]">
            <div>
              <button className="flex items-center  gap-x-2 bg-[#1B1B1B] border  w-[140px] h-[44px] rounded-[6px] pt-[10px] pb-[10px] pl-[24px] pr-[24px]">
                Filtrlash <CiFilter size={20} />
              </button>
            </div>
            <div className="space-x-5 ">
              <select
                onChange={(e) => setFilter(e.target.value)}
                className=" border  ml-2 w-[140px] h-[44px] rounded-[6px] pt-[10px] pb-[10px] pl-[24px] pr-[24px]"
              >
                <option className="text-black" value="">
                  Barchasi
                </option>
                <option className="text-black" value="Yuqori">
                  Yuqori
                </option>
                <option className="text-black" value="O'rta">
                  O'rta
                </option>
                <option className="text-black" value="Past">
                  Past
                </option>
              </select>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-x-[20px] space-y-2">
            {filtered?.map((loy) => (
              <div className="space-y-2 max-w-[444px] mx-auto group relative">
                <div>
                  <img
                    className={`rounded-lg group-hover:blur-xs`}
                    src={loy.image}
                    alt=""
                  />
                  <div
                    className={`hidden group-hover:block transition duration-300`}
                  >
                    {" "}
                    <div className="absolute  text-black top-2 right-2 gap-2 flex ">
                      <div className="bg-white p-1 rounded-md">
                        <Link href={loy.projectUrl}>
                          {" "}
                          <FaEye size={20} />{" "}
                        </Link>
                      </div>
                      <div className="bg-white p-1 rounded-md">
                        {" "}
                        <Link href={loy.projectGitUrl}>
                          {" "}
                          <FaGithub size={20} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-white flex items-start justify-between ">
                  <div>
                    {" "}
                    <p>{loy.name}</p>
                  </div>
                  <div className="flex w-[70px] h-[20px] ">
                    <div>
                      <p className="">{loy.level} </p>
                    </div>
                    <div
                      className={` w-[10px] mt-2 ml-1 h-[10px] rounded-full ${
                        loy.level === "Past" ? "bg-red-700" : ""
                      } ${loy.level === "O'rta" ? "bg-amber-300" : ""} ${
                        loy.level === "Yuqori" ? "bg-green-500" : ""
                      }`}
                    ></div>
                  </div>
                </div>
                <div className="grid grid-cols-4 text-green-700">
                  {JSON.parse(loy.skills).map((skil: string, index: number) => (
                    <div>#{skil}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="w-[912px] h-[208px] mt-[50px] border rounded-[12px] bg-[#1B1B1B] flex items-center justify-evenly">
            <div>
              <Image
                src="/telegram1.svg"
                alt="Background"
                width={168}
                height={168}
              />
            </div>
            <div>
              <p className="text-white text-[28px]">Telegram kanal</p>
              <p className="text-gray-400">
                Barcha loyihalarimni telegram kanalimda <br /> ham kuzatib
                borishingiz mumkin!
              </p>
              <Link href="https://t.me/Davronbek_IT_blog">
                <button className="w-[190px] h-[43px] btn btn-success mt-[24px] text-center text-white">
                  Tashrif buyurish
                </button>
              </Link>
            </div>
            <div className="flex   ">
              <Image
                className="absolute  "
                src="/wind.svg"
                alt="Background"
                width={144}
                height={144}
              />
              <Image
                src="/mega.svg"
                alt="Background"
                width={206}
                height={192}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
