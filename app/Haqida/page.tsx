import Image from "next/image";
import React from "react";
import { createClient } from "../utils/supabase/server";
import Link from "next/link";

export default async function Page() {
  const supabase = await createClient();
  const { data: skills } = await supabase.from("Skills").select("*");
  return (
    <div className="">
      <div className="bg-[url(/Body.svg)] bg-cover bg-center max-w-[1540px] mx-auto flex items-center justify-center">
        <div className=" min-h-screen  max-w-[1040px] mx-auto">
          <div className="p-10 flex flex-col gap-[24px] ">
            <div>
              <h1 className="text-[32px] font-bold  text-white">Men haqimda</h1>
              <div className="w-[112px] h-[8px] bg-[#39965F] rounded-[10px]"></div>
            </div>
            <div className="sm:text-center lg:text-left border">
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
                sizga men yaratgan loyihalarim qiziq bo`lsa Loyihalar sahifasi
                {">"}a tashrif
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
          <div className=" p-10 flex flex-col  gap-[24px] mt-5">
            <div>
              <h1 className="text-[32px] font-bold text-white">
                Asbob-Uskunalar
              </h1>
              <div className="w-[112px] h-[8px] bg-[#39965F] rounded-[10px]"></div>
            </div>
            <div className="flex flex-wrap gap-[20px] w-[912px]">
              {skills?.map((skil, index) => (
                <div
                  key={index}
                  className="w-[213px] h-[124px] border border-[#FFFFFF40] bg-[#1B1B1B] rounded-[12px] flex items-center justify-center relative overflow-hidden group "
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
            <div className="p-10 ">
              <h1 className="text-[32px] font-bold text-white ">
                Men nimalar qila olaman
              </h1>
              <div className="w-[112px] h-[8px] bg-[#39965F] rounded-[10px]"></div>
            </div>
            <div className="px-10 flex flex-wrap  gap-[24px]">
              <div className="group">
                <div className="w-[444px]  h-[124px]  group-hover:scale-[1.05] transition duration-300 cursor-pointer border border-[#FFFFFF40] bg-[#1B1B1B] flex rounded-[12px] p-[20px] gap-[14px]">
                  <div>
                    <Image
                      className="mt-2"
                      src="/0.svg"
                      alt="Background"
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
                {" "}
                <div className="w-[444px] h-[124px] group-hover:scale-[1.05] transition duration-300 border border-[#FFFFFF40] bg-[#1B1B1B] flex rounded-[12px] p-[20px] gap-[14px]">
                  <div>
                    <Image
                      className="mt-2"
                      src="/2.svg"
                      alt="Background"
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
                <div className="w-[444px] h-[124px] group-hover:scale-[1.05] transition duration-300 border border-[#FFFFFF40] bg-[#1B1B1B] flex rounded-[12px] p-[20px] gap-[14px]">
                  <div>
                    <Image
                      className="mt-2"
                      src="/1.svg"
                      alt="Background"
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
                <div className="w-[444px] h-[124px] group-hover:scale-[1.05] transition duration-300 border border-[#FFFFFF40] bg-[#1B1B1B] flex rounded-[12px] p-[20px] gap-[14px]">
                  <div>
                    <Image
                      className="mt-2"
                      src="/3.svg"
                      alt="Background"
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
            <div className=" flex flex-wrap gap-[20px] mt-5">
              <div className="w-[213px] border border-[#FFFFFF40] h-[124px] bg-[#1B1B1B] rounded-[12px] flex items-center justify-center">
                <Image src="/4.svg" alt="Background" width={64} height={64} />
              </div>
              <div className="w-[213px] border border-[#FFFFFF40] h-[124px] bg-[#1B1B1B] rounded-[12px] flex items-center justify-center">
                <Image src="/5.svg" alt="Background" width={64} height={64} />
              </div>
              <div className="w-[213px] border border-[#FFFFFF40] h-[124px] bg-[#1B1B1B] rounded-[12px] flex items-center justify-center"></div>
              <div className="w-[213px] border border-[#FFFFFF40] h-[124px] bg-[#1B1B1B] rounded-[12px] flex items-center justify-center"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
