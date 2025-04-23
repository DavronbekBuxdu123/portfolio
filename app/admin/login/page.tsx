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
      const { data } = await supabase.from("Login").select("*");
      setAuth(data!);
    };
    fetchData();
  }, []);

  const handeleCheck = () => {
    console.log("ishladi", auth);
    const user = auth.find(
      (check) => check.Login === login && check.Parol === parol
    );

    if (user) {
      router.push("/");
    } else {
      alert("Login yoki Parol xato");
      router.push("/admin/login");
    }
  };

  return (
    <div className="">
      <div className="card max-w-[400px]  mx-auto ">
        <div className="card-header text-white bg-dark text-center">
          Sign-in
        </div>
        <div className="card-body">
          <input
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            type="text"
            placeholder="Login..."
            className="form-control"
          />
          <input
            value={parol}
            onChange={(e) => setParol(e.target.value)}
            type="text"
            placeholder="Parol..."
            className="form-control mt-2"
          />
        </div>
        <div className="card-footer">
          <button onClick={handeleCheck} className="btn btn-dark w-full">
            Sign-in
          </button>
        </div>
      </div>
    </div>
  );
}
