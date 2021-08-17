import React from 'react';
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as CgIcons from "react-icons/cg";
import * as BiIcons from "react-icons/bi";


export const Sidebardata = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Chat",
    path: "/chat",
    icon: <BsIcons.BsChatSquareFill />,
    cName: "nav-text",
  },
  {
    title: "Meet",
    path: "/meet",
    icon: <BsIcons.BsFillCameraVideoFill />,
    cName: "nav-text",
  },
  {
    title: "Notes",
    path: "/notes",
    icon: <CgIcons.CgNotes />,
    cName: "nav-text",
  },
  {
    title: "Calendar",
    path: "/calendar",
    icon: <AiIcons.AiFillCalendar />,
    cName: "nav-text",
  },
  {
    title: "Whiteboard",
    path: "/whiteboard",
    icon: <BiIcons.BiChalkboard />,
    cName: "nav-text",
  }
];