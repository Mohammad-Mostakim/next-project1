import { MdJavascript } from "react-icons/md";
import { SiPython, SiSocketdotio, SiTypescript } from "react-icons/si";

// icons
const icons = {
  SiSocketdotio,
  MdJavascript,
  SiPython,
  SiTypescript,
};

// ==============================|| MENU ITEMS - PROGRAMMING SERVICES ||============================== //
const PrograminServices = {
  id: "programmingservices",
  title: "Programming Services",
  type: "collapse",
  icon: icons.SiSocketdotio,
  url: "/programming-services",
  target: false,
  breadcrumbs: true,
  children: [
    {
      id: "javascript-services",
      title: "JavaScript Services",
      type: "expand",
      url: "/programming-services/js",
      icon: icons.MdJavascript,
      target: false,
      breadcrumbs: true,
    },
    {
      id: "python-services",
      title: "Python Services",
      type: "expand",
      url: "/programming-services/python",
      icon: icons.SiPython,
      target: false,
      breadcrumbs: true,
    },
    {
      id: "typescript-services",
      title: "TypeScript Services",
      type: "expand",
      url: "/programming-services/typescript",
      icon: icons.SiTypescript,
      target: false,
      breadcrumbs: true,
    },
  ],
};

export default PrograminServices;
