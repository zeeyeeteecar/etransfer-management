"use client";
import React from "react";
import Edit_Modal from "./Edit_Modal";
import Script from "next/script";
import { FaRegEdit } from "react-icons/fa";

export default function Edit_List({ _donor, handle_EditItem }: any) {
  const [showModal_Edit, setShowModal_Edit] = React.useState(false);
  const handleOnClose = () => setShowModal_Edit(false);

  function handle_EditItem_local(e: any) {
    alert("edit confirmation--" + _donor.id);

    //handle_EditItem(_donor.id);
  }
  return (
    <div>
      
        <button
          type="submit"
          className="h-full border-0"
          value={_donor.id.toString()}
          onClick={(e) => setShowModal_Edit(true)}
        >
          <FaRegEdit className="h-[30px] w-[30px] font-thin text-slate-200 hover:text-red-600" />
        </button>
      
      <div>
        <Edit_Modal
          visible={showModal_Edit}
          handleOnClose={handleOnClose}
          handle_EditItem={handle_EditItem}
          _donor={_donor}
        />
      </div>
    </div>
  );
}
