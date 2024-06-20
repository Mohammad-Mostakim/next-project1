/** @format */

import { SiBootstrap, SiTailwindcss } from "react-icons/si";
import { AiFillHtml5, AiOutlineAntDesign } from "react-icons/ai";
import { GiPencilBrush } from "react-icons/gi";
import { FaMdb } from "react-icons/fa";
const Icons = {
  AiFillHtml5,
  SiBootstrap,
  SiTailwindcss,
  AiOutlineAntDesign,
  GiPencilBrush,
  FaMdb,
};
// ==============================|| MENU ITEMS - UI DESIGN SERVICES ||============================== //
const UIDesignProvider= {
  id: "uidesign",
  title: "UI Design Services",
  type: "collapse",
  icon: Icons.GiPencilBrush, // Corrected icon here
  url: "/ui-design",
  target: false,
  breadcrumbs: true,
  children: [
    {
      id: "bootstrap",
      title: "Bootstrap",
      type: "expand",
      url: "/ui-design/bootstrap",
      icon: Icons.AiFillHtml5,
      target: false,
      breadcrumbs: true,
    },
    {
      id: "html&css",
      title: "Html & Css",
      type: "expand",
      url: "/ui-design/html&css",
      icon: Icons.SiBootstrap, // Corrected icon here
      target: false,
      breadcrumbs: true,
    },
    {
      id: "tailwind",
      title: "Tailwind CSS",
      type: "expand",
      url: "/ui-design/tailwind",
      icon: Icons.SiTailwindcss, // Corrected icon here
      target: false,
      breadcrumbs: true,
    },
    {
      id: "materialui",
      title: "Material-UI",
      type: "expand",
      url: "/ui-design/material-ui",
      icon: Icons.AiOutlineAntDesign, // Corrected icon here
      target: false,
      breadcrumbs: true,
    },
    {
      id: "mdb",
      title: "MDB",
      type: "expand",
      url: "/ui-design/mdb",
      icon: Icons.FaMdb, // Corrected icon here
      target: false,
      breadcrumbs: true,
    },
    {
      id: "antdesign",
      title: "Ant Design",
      type: "expand",
      url: "/ui-design/ant-design",
      icon: Icons.AiOutlineAntDesign, // Corrected icon here
      target: false,
      breadcrumbs: true,
    },
    // Add more UI libraries and frameworks here as needed
  ],
};

export default UIDesignProvider;
