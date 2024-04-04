"use client";
import React from "react";
import toast, { Toaster } from "react-hot-toast";

const notify = (msg: string) => toast(msg);

export default function Modal_Event_Edit({
  visible,
  handleOnClose,
  handle_EditItem,
  _donor,
}: any) {

  if (!visible) return null;

  const handle_Delete_Event_local = (eventID: string) => {
    var confirmation = confirm("Want to delete?");
    //if (confirmation) {
    //handle_DeleteEvent(eventID); //Logic to delete the item
    handleOnClose();
    //notify("Event Delete successfully.");
    //}
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-[2px] flex items-center justify-center z-50">
      <div className="bg-white p-2 rounded w-[1000px] h-[700px]">
        <div className="border-0 text-right">
          <button onClick={handleOnClose} className="h-[30px] w-[50px]">
            X
          </button>
        </div>
        <h1 className="font-semibold text-center text-xl text-gray-700">
          {_donor.fname} {_donor.lname}
        </h1>
        <p className="text-center text-gray-700 mb-5">Donor # {_donor.id}</p>

        <form action={handle_EditItem} method="post">
          <div className="flex flex-col">
            {JSON.stringify(_donor)}
            <input
              type="text"
              className="border border-gray-700 p-2 rounded mb-5"
              placeholder="email@example.com"
            />
            <input
              type="text"
              className="border border-gray-700 p-2 rounded mb-5"
              defaultValue={_donor.userAddress}
            />
          </div>
        </form>
        <div className="text-center space-x-3">
          <button className="px-5 py-2 bg-gray-700 text-white rounded w-[100px]">
            Save
          </button>
          <button
            //onClick={()=>handle_AddNewEvent(eventAddInfo)}
            onClick={() => handle_Delete_Event_local(_donor.id.toString())}
            //onClick={()=>notify()}
            //onClick={(e)=>{console.log(eventAddInfo)}}
            className="px-5 py-2 bg-slate-300 text-gray-700 rounded w-[100px]"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
