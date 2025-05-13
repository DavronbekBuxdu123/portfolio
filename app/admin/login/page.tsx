"use client";

import { createClient } from "@/app/utils/supabase/client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type Login = {
  Parol: string;
  Login: string;
};

export default function Page() {
  const [auth, setAuth] = useState<Login[]>([]);
  const [login, setLogin] = useState("");
  const [parol, setParol] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const supabase = createClient();
      const { data, error } = await supabase.from("Login").select("*");

      if (data) {
        setAuth(data);
      } else {
        console.error("Ma'lumotlarni olishda xatolik:", error);
      }
    };
    fetchData();
  }, []);

  const handleCheck = () => {
    const user = auth.find(
      (check) => check.Login === login && check.Parol === parol
    );

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      router.push("/admin");
    } else {
      alert("Login yoki Parol xato");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card max-w-[400px] w-full mx-auto shadow-lg">
        <div className="card-header text-white bg-dark text-center text-xl font-bold">
          Sign-in
        </div>
        <div className="card-body p-4">
          <input
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            type="text"
            placeholder="Login..."
            className="form-control mb-3"
          />
          <input
            value={parol}
            onChange={(e) => setParol(e.target.value)}
            type="password"
            placeholder="Parol..."
            className="form-control"
          />
        </div>
        <div className="card-footer p-4">
          <button onClick={handleCheck} className="btn btn-dark w-full">
            Sign-in
          </button>
        </div>
      </div>
    </div>
  );
}
