import clsx from "clsx";
import * as React from "react";
import { MdDashboard } from "react-icons/md";
import { IoIosBeaker } from "react-icons/io";
import { GrTextWrap } from "react-icons/gr";
import { IoExtensionPuzzleSharp } from "react-icons/io5";
import { AiFillHeart } from "react-icons/ai";
import {
  BsCircleFill,
  BsStack,
  BsBroadcast,
  BsFileTextFill,
} from "react-icons/bs";
import { FaMap } from "react-icons/fa";

import { CgPushLeft } from "react-icons/cg";

export default function SidebarIcons({
  id,
  isNested,
}: {
  id: string;
  isNested: boolean;
}) {
  const icons = {
    0: <MdDashboard />,
    1: <IoIosBeaker />,
    2: <BsFileTextFill />,
    3: <IoExtensionPuzzleSharp />,
    31: <AiFillHeart color="red" />,
    32: <BsCircleFill color="gray" size={13} />,
    4: <BsStack />,
    41: (
      <img
        src={`/semrush_logo.svg`}
        alt=""
        className="h-4"
        style={{ fill: "red" }}
      />
    ),
    5: <FaMap />,
    6: <BsBroadcast />,
    7: <CgPushLeft />,
  };

  return (
    <div
      className={clsx(
        "w-8 h-8 xl:w-5 xl:h-5",
        isNested ? "xl:w-4 xl:h-4 ml-3" : ""
      )}
    >
      {icons[id as unknown as keyof typeof icons]}
    </div>
  );

  return /*#__PURE__*/ React.createElement(
    "svg",
    {
      className: clsx(
        "w-8 h-8 xl:w-5 xl:h-5",
        isNested ? "xl:w-4 xl:h-4 ml-3" : ""
      ),
      viewBox: "0 0 24 24",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
    },

    //icons[id as unknown as keyof typeof icons]
    icons[0]
  );
}
