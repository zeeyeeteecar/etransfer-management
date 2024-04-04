"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios, { Axios, AxiosError } from "axios";
import { toast } from "react-hot-toast";

export default function SigninPage() {
  const router = useRouter();
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const [passcode, setPasscode] = useState({ passcode: "" });

  const handle_Login = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/login", passcode);
      console.log("Login successfully", await response.data);
      //toast.success("Login successfully");
      router.push("/eTransferList");

    } catch (error) {
      const err = error as AxiosError;

      console.log("err.message---", err.message);

      if (err.message.toString().includes("401")) {
        alert("Please input Passcode");
      }

      if (err.message.toString().includes("402")) {
        alert("Login failed: -- Wrong Password");
      }

      //toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (passcode.passcode.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
      //alert("pls input passcode");
    }
  }, [passcode]);

  return (
    <div
      className="flex items-center justify-center min-h-screen py-2 bg-slate-500 font-extralight 
    bg-[url('https://source.unsplash.com/random/900×700/?fruit')] bg-center bg-no-repeat bg-cover"
    >
      <div className="h-30 w-[500px] border-0 flex flex-col p-10 space-y-6 rounded-3xl">
        <label className="text-center text-white text-4xl font-bold my-2  w-[300px] ">
          {loading ? "Processing" : "O2B2  Login"}
        </label>

        <input
          className="p-4 border border-tray-300 rounded-lg text-slate-600 font-normal text-lg mb-4 focus:outline-none focus:border-gray-600 w-[300px]"
          id="password"
          type="text"
          value={passcode.passcode}
          onChange={(e) => {
            setPasscode({ ...passcode, passcode: e.target.value });
          }}
          placeholder="password"
        ></input>

        <button
          className="p-4 border border-tray-300 rounded-lg mb-4 text-slate-50 bg-slate-400 focus:outline-none focus:border-gray-600 hover:bg-slate-800 w-[300px]"
          onClick={handle_Login}
        >
          {buttonDisabled ? "Login Here" : "Login Here"}
        </button>

        <Link href="/signup">
          <button className="p-4 border border-tray-300 rounded-lg mb-4 text-slate-50 bg-slate-400 focus:outline-none focus:border-gray-600 hover:bg-slate-800 w-[300px]">
            Go to Sign Up Page
          </button>
        </Link>
      </div>
    </div>
  );
}
