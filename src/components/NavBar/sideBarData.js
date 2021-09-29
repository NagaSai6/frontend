import React from "react";
import * as AiIcons from "react-icons/ai";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "States",
    path: "/sort-by-state",
    icon: <AiIcons.AiFillPieChart />,
    cName: "nav-text",
  },
  {
    title: "Courses",
    path: "/sort-by-courses",
    icon: <AiIcons.AiOutlineBarChart />,
    cName: "nav-text",
  },
];
