"use client";
import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";

export default function Delete_List({ _itemID, handle_DeleteItem }: any) {
  //const [itemID, setItemID] = useState(_itemID.toString());

  function handle_DeleteItem_local(e: any) {
    alert("delete confirmation--" + _itemID);

    handle_DeleteItem(_itemID);
  }

  return (
    <div>
      <form action={handle_DeleteItem} method="post">
        <button
          type="submit"
          className="h-full border-0"
          value={_itemID.toString()}
          onClick={(e) => {
            handle_DeleteItem_local(e.currentTarget.value);
          }}
        >
          <RiDeleteBinLine className="h-[30px] w-[30px] font-thin text-slate-200 hover:text-red-600" />
        </button>
      </form>
    </div>
  );
}
