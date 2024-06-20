/** @format */

import { AiOutlineForm, AiOutlineTable } from "react-icons/ai";
import { BiCard, BiCalendar } from "react-icons/bi";
import { MdOutlineList } from "react-icons/md";

const UIDesign = {
  id: "uidesing",
  items: [
    {
      id: "form",
      title: "Form Design",
      type: "single",
      icon: AiOutlineForm,
      url: "/form-design",
      target: false,
      breadcrumbs: true,
    },
    {
      id: "card",
      title: "Card Design",
      type: "single",
      icon: BiCard,
      url: "/card-design",
      target: false,
      breadcrumbs: true,
    },
    {
      id: "table",
      title: "Table Design",
      type: "single",
      icon: AiOutlineTable,
      url: "/table-design",
      target: false,
      breadcrumbs: true,
    },
    {
      id: "calendar",
      title: "Calendar Design",
      type: "single",
      icon: BiCalendar,
      url: "/calendar-design",
      target: false,
      breadcrumbs: true,
    },
    {
      id: "list",
      title: "List Design",
      type: "single",
      icon: MdOutlineList,
      url: "/list-design",
      target: false,
      breadcrumbs: true,
    },
  ],
};

export default UIDesign;
