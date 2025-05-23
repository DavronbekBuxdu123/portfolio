import Image from "next/image";
import React from "react";
import { createClient } from "../utils/supabase/server";
import Link from "next/link";

export default async function Page() {
  const supabase = await createClient();
  const { data: skills } = await supabase.from("Skills").select("*");
  return (
    <div className="min-h-screen bg-[url(/Body.svg)] bg-cover bg-center">
      <div className="max-w-[1540px] mx-auto">
        <div className="min-h-screen max-w-[1040px] mx-auto">
          <div className="p-10 flex flex-col gap-[24px]">
            <div>
              <h1 className="text-[32px] font-bold text-white">Men haqimda</h1>
              <div className="w-[112px] h-[8px] bg-[#39965F] rounded-[10px]"></div>
            </div>
            <div className="sm:text-center lg:text-left ">
              <p className="text-[#FFFFFFB2] text-[18px]">
                Men Aslonov Davronbek veb dasturchisiman. Yoshim 20 da, Buxoro
                viloyatida <br /> tug`ilganman. Qiziqarli, ko`p funksionallika
                ega bo`lgan va kuchli dizaynga ega bo`lgan dasturlar
                <br />
                yaratishga qiziqaman. <br /> <br /> Mening vazifam veb saytni
                foydalanuvchilarga qulay, sayt dizayni foydalanuvchilarga jalb
                qiluvchi <br /> lekin ayni paytda tezkor bo`lishini taminlashdir
                va saytni moslashuvchan kodlar bilan yaratishdir! <br /> Mening
                maqsadim veb sayt foydalanuvchilariga barcha qismlarini intuitiv
                va qulay bo`lishga harakat <br /> qilishga qaratilgan. Agar
                sizga men yaratgan loyihalarim qiziq bo`lsa{" "}
                <Link className="text-success" href="./Loyihalar">
                  Loyihalar
                </Link>{" "}
                sahifasi tashrif
                <br />
                buyurishingiz mumkin :
              </p>{" "}
              <br />
              <Link href="./Boglanish">
                <button className="btn btn-success w-[181px] mt-4 text-center text-white">
                  Bog`lanish
                </button>
              </Link>
            </div>
          </div>
          <div className="p-4 lg:p-10 lg:ml-5 flex flex-col gap-[24px] mt-5">
            <div>
              <h1 className="text-[32px] font-bold text-white">
                Texnologiyalar
              </h1>
              <div className="w-[112px] h-[8px] bg-[#39965F] rounded-[10px]"></div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-5 justify-center sm:w-full lg:w-[912px] space-y-4">
              {skills?.map((skil, index) => (
                <div
                  key={index}
                  className="w-[150px]  h-[124px] border border-[#FFFFFF40] bg-[#1B1B1B] rounded-[12px] flex items-center justify-center relative overflow-hidden group"
                >
                  <Image
                    width={213}
                    height={124}
                    src={skil.image}
                    alt="skill image"
                    className="w-[64px] h-[64px] transition duration-300 group-hover:opacity-0"
                  />
                  <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-[-1] text-center px-2 text-[14px] transition duration-300 group-hover:text-white group-hover:opacity-100 group-hover:z-[1]">
                    {skil.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="">
            <div className="p-10">
              <h1 className="text-[32px] font-bold text-white ">
                Men nimalar qila olaman
              </h1>
              <div className="w-[112px] h-[8px] bg-[#39965F] rounded-[10px]"></div>
            </div>
            <div className=" flex flex-wrap gap-[24px] justify-center lg:ml-[-50px] p-3">
              <div className="group ">
                <div className="lg:w-[444px] sm:max-w-[500px] h-[124px] group-hover:scale-[1.05] transition duration-300 cursor-pointer border border-[#FFFFFF40] bg-[#1B1B1B] flex rounded-[12px] p-[20px] gap-[14px]">
                  <div>
                    <Image
                      className="mt-2"
                      src="/0.svg"
                      alt="Seo"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className="flex items-start py-5 justify-center flex-col">
                    <p className="text-white text-[20px] mb-0">Seo</p>
                    <p className="text-[#FFFFFFB2] text-[16px]">
                      Qidiruv tizimining natijalarida sayt <br /> reytingini
                      yaxshilash
                    </p>
                  </div>
                </div>
              </div>
              <div className="group">
                <div className="lg:w-[444px] sm:max-w-[500px] h-[124px] group-hover:scale-[1.05] transition duration-300 border border-[#FFFFFF40] bg-[#1B1B1B] flex rounded-[12px] p-[20px] gap-[14px]">
                  <div>
                    <Image
                      className="mt-2"
                      src="/2.svg"
                      alt="Design"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div>
                    <p className="text-white text-[20px] mb-0">Dizayn</p>
                    <p className="text-[#FFFFFFB2]">
                      Kuchli dizayn va kichik detallargacha <br /> e`tibor
                      berish
                    </p>
                  </div>
                </div>
              </div>
              <div className="group">
                <div className="lg:w-[444px] sm:max-w-[500px] h-[124px] group-hover:scale-[1.05] transition duration-300 border border-[#FFFFFF40] bg-[#1B1B1B] flex rounded-[12px] p-[20px] gap-[14px]">
                  <div>
                    <Image
                      className="mt-2"
                      src="/1.svg"
                      alt="Quality"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div>
                    <p className="text-white text-[20px] mb-0">Sifat</p>
                    <p className="text-[#FFFFFFB2]">
                      Yuqori darajada saytlarni sifatli ishlab <br /> chiqish
                    </p>
                  </div>
                </div>
              </div>
              <div className="group">
                <div className="lg:w-[444px] sm:max-w-[500px] h-[124px] group-hover:scale-[1.05] transition duration-300 border border-[#FFFFFF40] bg-[#1B1B1B] flex rounded-[12px] p-[20px] gap-[14px]">
                  <div>
                    <Image
                      className="mt-2"
                      src="/3.svg"
                      alt="Speed"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div>
                    <p className="text-white text-[20px] mb-0">Tezkorlik</p>
                    <p className="text-[#FFFFFFB2]">
                      Qisqa muddat ichida tezkor sayt ishlab chiqish
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-10 py-20">
            <div>
              <h1 className="text-[32px] font-bold text-white">Mijozlar</h1>
              <div className="w-[112px] h-[8px] bg-[#39965F] rounded-[10px]"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3  space-x-6  space-y-6 mt-5 justify-center">
              <div className="w-[300px] border border-[#FFFFFF40] h-[150px] bg-[#1B1B1B] rounded-[12px] flex items-center justify-center">
                <Image src="/4.svg" alt="Client 1" width={64} height={64} />
              </div>
              <div className="w-[300px] border border-[#FFFFFF40] h-[150px] bg-[#1B1B1B] rounded-[12px] flex items-center justify-center">
                <Image src="/5.svg" alt="Client 2" width={64} height={64} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
