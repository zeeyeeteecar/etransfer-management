import React from "react";
import Image from "next/image";
//import SessionInfo  from "@/lib/SessionInfo";
import axios from "axios";
import { prisma } from "../../lib/prisma";
import moment from "moment";
import { PiCellSignalFullLight } from "react-icons/pi";
import { AiOutlineHome } from "react-icons/ai";
import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { PiTrademarkRegisteredLight } from "react-icons/pi";
import { IoTimeOutline } from "react-icons/io5";
import { CiHome } from "react-icons/ci";

import { revalidatePath } from "next/cache";

import TokenInfo from "../common/components/TokenInfo";
import Delete_List from "./components/Delete_List";
import Edit_List from "./components/Edit_List"

async function handle_DeleteItem(itemID:string) {
  "use server"
  revalidatePath("/eTransferList")
  } 


  async function handle_EditItem(itemID:string) {
    "use server"
    revalidatePath("/eTransferList")
    } 


export default async function Header() {
  // const randomAvatarLink = () => {
  //   const url =
  //     "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/";
  //   const randomNumber = Math.floor(Math.random() * 100) + 1;
  //   return url + randomNumber.toString() + ".png";
  // };



  const randomAvatarLink = () => {
    const url = "https://i.pravatar.cc/150?img=";
    const randomNumber = Math.floor(Math.random() * 70) + 1;
    return url + randomNumber.toString();
  };

  const donorList = await prisma.tbl_ETransferInfo.findMany({
    orderBy: { id: "desc" },
  });
  return (
    <div className="bg-slate-300 h-screen w-full flex  flex-col ">
      <div className="h-[40px]">
        <TokenInfo />{" "}
      </div>

      <section className="border-0 h-[650px] w-[1600px] bg-slate-50 mx-auto flex flex-col rounded-t-lg">
        <div
          id="titleBar"
          className="w-full h-[50px] bg-slate-700 rounded-t-lg"
        ></div>

        <div
          id="dataListBlock"
          className="flex flex-col font-light flex-1 w-full overflow-y-auto"
        >
          {/* {JSON.stringify(donorList)} */}
          {donorList &&
            donorList.map((donor: any, key: number) => {
              return (
                <div
                  key={key}
                  className=" my-0 w-full min-h-[90px]  flex  flex-row text-slate-700 px-3 hover:bg-white hover:text-slate-800 hover:opacity-100 border-b place-content-center"
                >
                  <div className="w-[50px] place-content-center">
                    {donor.id}
                  </div>
                  <div className="w-[50px] place-content-center mr-5 ">
                    <Image
                      width={50}
                      height={50}
                      className=" rounded-full"
                      alt="Picture of the author"
                      src={randomAvatarLink()}
                    />
                  </div>
                  <div className="flex flex-col w-[400px] h-full border-0 border-slate-600 place-content-center space-y-1">
                    <div className="flex flex-row ">
                      <div className="w-[100px] font-semibold">
                        {donor.fname}
                      </div>
                      <div className="w-[100px]  font-semibold">
                        {donor.lname}
                      </div>
                    </div>
                    <div className="flex flex-row text-sm">
                      <span className=" text-slate-400  pl-0 pr-1 h-[20px] border-0 grid place-items-center">
                        <CiHome />
                      </span>
                      <span className="text-sm text-left opacity-80 inline-block  border-0 w-full ">
                        {donor.userAddress}
                      </span>
                    </div>
                  </div>

                  <div className="w-[250px]  place-content-center space-y-1">
                    <div className="flex flex-row space-x-2">
                      <span className=" text-slate-300   px-1 h-[20px] border-0 grid place-items-center">
                        <CiPhone />
                      </span>
                      <span className="text-sm text-left opacity-80 inline-block  border-0 w-full">
                        {donor.userTel}
                      </span>
                    </div>

                    <div className="flex flex-row  space-x-2">
                      <span className=" text-slate-300   px-1 h-[20px] border-0 grid place-items-center">
                        <CiMail />
                      </span>
                      <span className="text-sm text-left opacity-80 inline-block  border-0 w-full">
                        {donor.useremail}
                      </span>
                    </div>
                  </div>

                  <div className="w-[250px]  place-content-center space-y-1">
                    <div className="flex flex-row space-x-2">
                      <span className=" text-slate-300   px-1 h-[20px] border-0 grid place-items-center">
                        <PiTrademarkRegisteredLight />
                      </span>
                      <span className="text-sm text-left opacity-80 inline-block  border-0 w-full">
                        {moment(donor.RegDate)
                          .utcOffset(0)
                          .format("YYYY-MM-DD")}
                      </span>
                    </div>

                    <div className="flex flex-row  space-x-2">
                      <span className=" text-slate-300   px-1 h-[20px] border-0 grid place-items-center">
                        <IoTimeOutline />
                      </span>
                      <span className="text-sm text-left opacity-80 inline-block  border-0 w-full">
                        {moment(donor.RegTime).utcOffset(0).format("hh:mm:ss")}
                      </span>
                    </div>
                  </div>

                  <div className="w-[200px] place-content-center ">
                    {donor.userIP}
                  </div>

                  <div className="w-[200px] place-content-center ">
                    <Delete_List _itemID={donor.id} handle_DeleteItem={handle_DeleteItem}/>
                  </div>

                  
                  <div className="w-[200px] place-content-center ">
                    <Edit_List _donor={donor} handle_EditItem={handle_EditItem}/>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </div>
  );
}
