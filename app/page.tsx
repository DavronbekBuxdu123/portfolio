import Link from "next/link";
import React from "react";
import { createClient } from "./utils/supabase/server";

export default async function page() {
  const supabase = await createClient();
  const { data: portfolio } = await supabase.from("Portfolio1").select("*");
  console.log(portfolio);
  return (
    <div className="w-full  mx-auto bg-[url(/Body.svg)] bg-cover bg-center overflow-hidden h-[93.3vh]">
      <div className="max-w-[1540px]">
        <div className=" px-4 mt-50   text-center">
          <div className="max-w-[633px] mx-auto h-[265px] flex flex-col gap-[16px]">
            <h1 className="text-[28px]  font-bold text-white">
              Assalomu alaykum, Men{" "}
              {portfolio?.map((user) => (
                <span key={user.id} className="text-[#39965F]">
                  {user.name}
                </span>
              ))}
              <span className="text-white">man</span>
            </h1>
            {portfolio?.map((user) => (
              <p key={user.id} className="text-[16px]  text-[#FFFFFFB2] ">
                {user.description}
              </p>
            ))}

            <div className="w-full flex items-center justify-center">
              <Link href="/Loyihalar">
                <button className="btn btn-success  w-[169px] h-[43px] text-white">
                  Loyihalar
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
