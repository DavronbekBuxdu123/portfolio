"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { createClient } from "../utils/supabase/client";
import Link from "next/link";
type User = {
  id: string;
  email: string;
  telegram: string;
  phone: string;
};
export default function Page() {
  const supabase = createClient();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [portfolio, setPortfolio] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const supabase = createClient();
      const { data } = await supabase.from("Portfolio1").select("*");
      setPortfolio(data!);
    };
    fetchData();
  }, []);
  console.log(portfolio);
  const handleSave = async () => {
    try {
      await supabase
        .from("Murojaatlar")
        .insert([{ name, description, location }])
        .select();
    } catch (error) {
      console.log(error);
    }
    setDescription("");
    setLocation("");
    setName("");
  };
  return (
    <div className="h-auto">
      <div className="bg-[url(/Body.svg)] bg-cover min-h-screen bg-center max-w-[1540px] mx-auto flex items-center justify-center">
        <div className="  mt-5 mx-auto space-y-[24px]">
          <div>
            {" "}
            <div className="mx-auto">
              <h1 className="text-[32px] font-bold text-white">
                {" "}
                Bog&apos;lanish
              </h1>
              <div className="w-[112px] h-[8px] bg-[#39965F] rounded-[10px]"></div>
            </div>
            <div className="flex gap-x-[20px] items-center mt-5">
              <div className="w-[290px] h-[190px] border border-amber-50 rounded-[12px] bg-[#1B1B1B] flex flex-col  items-center justify-evenly ">
                <Link href="/"></Link>
                <Image
                  src="/email.svg"
                  alt="Background"
                  width={64}
                  height={64}
                />
                <p className="text-white text-[20px]">E-pochta</p>
                {portfolio?.map((user) => (
                  <p key={user.id} className="text-gray-400">
                    {user.email}
                  </p>
                ))}
              </div>
              <div className="w-[290px] h-[190px] border border-amber-50 rounded-[12px] bg-[#1B1B1B] flex flex-col items-center justify-evenly">
                <Image
                  src="/telegram.svg"
                  alt="Background"
                  width={64}
                  height={64}
                />
                <p className="text-white text-[20px]">Telegram</p>
                {portfolio?.map((user) => (
                  <p key={user.id} className="text-gray-400">
                    {user.telegram}
                  </p>
                ))}
              </div>
              <div className="w-[290px] h-[190px] border border-amber-50 rounded-[12px] bg-[#1B1B1B] flex flex-col items-center justify-evenly">
                <Image
                  src="/phone.svg"
                  alt="Background"
                  width={64}
                  height={64}
                />
                <p className="text-white text-[20px]">Telefon raqam</p>
                {portfolio?.map((user) => (
                  <p key={user.id} className="text-gray-400">
                    {user.phone}
                  </p>
                ))}
              </div>
            </div>
            <div className="mt-[50px] w-[912px] h-auto">
              <div>
                <h1 className="text-[32px] font-bold text-white">
                  So'rov yuborish
                </h1>
                <div className="w-[112px] h-[8px] bg-[#39965F] rounded-[10px]"></div>
              </div>
              <div className="w-[912px] h-[420px] bg-[#1B1B1B] mt-[30px]  rounded-[20px] border border-amber-50">
                <div className="p-4 flex justify-between gap-4">
                  <label htmlFor="" className="text-white w-1/2">
                    Ismingiz*
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      className="form-control w-full bg-[#1B1B1B] border border-white rounded-md p-2 mt-1 "
                      placeholder="Falonchiyev Falonchi"
                    />
                  </label>
                  <label htmlFor="" className="text-white w-1/2">
                    Manzilingiz*
                    <input
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      type="text"
                      className="form-control w-full bg-[#1B1B1B] border border-white rounded-md p-2 mt-1 "
                      placeholder="misol@gmail.com"
                    />
                  </label>
                </div>
                <div className="px-4">
                  <label htmlFor="" className="text-white w-full block">
                    Izohingiz*
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Izohingizni yozing..."
                      className="form-control w-full h-[150px] bg-[#1B1B1B] border border-white rounded-md p-2 mt-1 "
                      name=""
                      id=""
                    ></textarea>
                  </label>
                </div>
                <div className="p-4">
                  {" "}
                  <button
                    onClick={handleSave}
                    className="btn btn-success  mt-2"
                  >
                    Yuborish
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
