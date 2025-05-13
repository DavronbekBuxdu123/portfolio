"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaEye, FaGithub } from "react-icons/fa";
import Link from "next/link";
import { createClient } from "../utils/supabase/client";

interface Loyiha {
  id: number;
  name: string;
  level: string;
  image: string;
  projectUrl: string;
  projectGitUrl: string;
  skills: string;
}

export default function Page() {
  const [loyihalar, setLoyihalar] = useState<Loyiha[]>([]);
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
    <div className="bg-[url(/Body.svg)] bg-cover min-h-screen bg-center px-4">
      <div className="max-w-[1540px] w-full mx-auto flex justify-center pt-10 pb-20">
        <div className="w-full max-w-[1040px] space-y-10">
          <div>
            <h1 className="text-[32px] font-bold text-white">Loyihalar</h1>
            <div className="w-[112px] h-[8px] bg-[#39965F] rounded-[10px] mt-1"></div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-white gap-4">
            <select
              onChange={(e) => setFilter(e.target.value)}
              className="border w-[140px] h-[44px] rounded-[6px] px-6"
            >
              <option className="text-black" value="">
                Barchasi
              </option>
              <option className="text-black" value="Yuqori">
                Yuqori
              </option>
              <option className="text-black" value="O`rta">
                O`rta
              </option>
              <option className="text-black" value="Past">
                Past
              </option>
            </select>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            {filtered?.map((loy) => (
              <div
                key={loy.id}
                className="space-y-2 w-full bg-[#1B1B1B] rounded-lg p-2 z-10 group relative"
              >
                <div className="relative">
                  <Image
                    width={444}
                    height={200}
                    className="rounded-lg object-cover group-hover:blur-xs"
                    src={loy.image}
                    alt={loy.name}
                  />

                  {/* Hover bo‘lganda ikonka ko‘rinadi, rasm esa xira bo‘ladi */}
                  <div className="hidden group-hover:flex transition duration-300 absolute top-2 right-2 gap-2 z-20">
                    <Link
                      href={loy.projectUrl}
                      className="bg-white p-2 rounded-md"
                      target="_blank"
                    >
                      <FaEye size={20} className="text-black" />
                    </Link>
                    <Link
                      href={loy.projectGitUrl}
                      className="bg-white p-2 rounded-md"
                      target="_blank"
                    >
                      <FaGithub size={20} className="text-black" />
                    </Link>
                  </div>
                </div>

                <div className="text-white flex justify-between items-center">
                  <p>{loy.name}</p>
                  <div className="flex items-center gap-1">
                    <p className="mb-0">{loy.level}</p>
                    <div
                      className={`w-3 h-3 rounded-full ${
                        loy.level === "Past"
                          ? "bg-red-700"
                          : loy.level === "O`rta"
                          ? "bg-amber-300"
                          : "bg-green-500"
                      }`}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-4 gap-1 text-green-600 text-sm">
                  {JSON.parse(loy.skills).map((skill: string, i: number) => (
                    <div key={i}>#{skill}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Telegram CTA */}
          <div className="w-full bg-[#1B1B1B] border rounded-[12px] p-6 flex flex-col lg:flex-row items-center justify-between gap-6">
            <Image
              src="/telegram1.svg"
              alt="Telegram"
              width={168}
              height={168}
            />
            <div className="text-white space-y-2 text-center lg:text-left">
              <p className="text-[28px]">Telegram kanal</p>
              <p className="text-gray-400">
                Barcha loyihalarimni telegram kanalimda <br /> ham kuzatib
                borishingiz mumkin!
              </p>
              <Link href="https://t.me/Davronbek_IT_blog">
                <button className="btn btn-success mt-4 w-full lg:w-[190px] h-[43px] text-white">
                  Tashrif buyurish
                </button>
              </Link>
            </div>
            <div className="relative">
              <Image
                className="absolute top-0 left-0"
                src="/wind.svg"
                alt=""
                width={144}
                height={144}
              />
              <Image src="/mega.svg" alt="" width={206} height={192} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
