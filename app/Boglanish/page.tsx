"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { createClient } from "../utils/supabase/client";

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
    <div className="bg-[url(/Body.svg)] bg-cover min-h-screen bg-center flex items-center justify-center px-4">
      <div className="max-w-[1540px] w-full mx-auto space-y-10 py-10">
        <div className="text-center lg:ml-[80px]">
          <h1 className="text-[32px] font-bold text-white text-left">
            Bog`lanish
          </h1>
          <div className="w-[112px] h-[8px] bg-[#39965F] rounded-[10px]  mt-2"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <div className="w-full sm:w-[290px] h-[190px] border border-amber-50 rounded-[12px] bg-[#1B1B1B] flex flex-col items-center justify-evenly">
            <Image src="/email.svg" alt="Email" width={64} height={64} />
            <p className="text-white text-[20px]">E-pochta</p>
            {portfolio.map((user) => (
              <p key={user.id} className="text-gray-400">
                {user.email}
              </p>
            ))}
          </div>

          <div className="w-full sm:w-[290px] h-[190px] border border-amber-50 rounded-[12px] bg-[#1B1B1B] flex flex-col items-center justify-evenly">
            <Image src="/telegram.svg" alt="Telegram" width={64} height={64} />
            <p className="text-white text-[20px]">Telegram</p>
            {portfolio.map((user) => (
              <p key={user.id} className="text-gray-400">
                {user.telegram}
              </p>
            ))}
          </div>

          <div className="w-full sm:w-[290px] h-[190px] border border-amber-50 rounded-[12px] bg-[#1B1B1B] flex flex-col items-center justify-evenly">
            <Image src="/phone.svg" alt="Phone" width={64} height={64} />
            <p className="text-white text-[20px]">Telefon raqam</p>
            {portfolio.map((user) => (
              <p key={user.id} className="text-gray-400">
                {user.phone}
              </p>
            ))}
          </div>
        </div>

        <div className="max-w-[912px] w-full mx-auto">
          <h1 className="text-[32px] font-bold text-white">So‘rov yuborish</h1>
          <div className="w-[112px] h-[8px] bg-[#39965F] rounded-[10px] mt-2"></div>

          <div className="bg-[#1B1B1B] mt-6 rounded-[20px] border border-amber-50 p-4">
            <div className="flex flex-col lg:flex-row justify-between gap-4 mb-4">
              <label className="text-white w-full lg:w-1/2">
                Ismingiz*
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="form-control w-full bg-[#1B1B1B] border border-white rounded-md p-2 mt-1"
                  placeholder="Falonchiyev Falonchi"
                />
              </label>
              <label className="text-white w-full lg:w-1/2">
                Manzilingiz*
                <input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  type="text"
                  className="form-control w-full bg-[#1B1B1B] border border-white rounded-md p-2 mt-1"
                  placeholder="email@.com..."
                />
              </label>
            </div>
            <label className="text-white w-full block mb-4">
              Izohingiz*
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Izohingizni yozing..."
                className="form-control w-full h-[150px] bg-[#1B1B1B] border border-white rounded-md p-2 mt-1"
              ></textarea>
            </label>
            <button
              onClick={handleSave}
              className="btn btn-success mt-2 w-full lg:w-auto"
            >
              Yuborish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
