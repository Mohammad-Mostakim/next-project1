/** @format */

import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaTeamspeak } from "react-icons/fa";

// assets

// icons
const icons = {
  FaTeamspeak,
  CgProfile,
  AiOutlineUsergroupDelete,
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const Client = {
  id: "client",
  title: "Client Facing",
  type: "collapse",
  icon: icons.AiOutlineUsergroupDelete,
  url: "client",
  target: false,
  breadcrumbs: true,
  children: [
    {
      id: "services",
      title: "Services",
      type: "collapse",
      url: "client/services",
      icon: icons.FaTeamspeak,
      target: false,
      breadcrumbs: true,
      children: [
        {
          id: "products",
          title: "Products",
          type: "collapseItem",
          url: "client/services/products",
          icon: icons.CgProfile,
          target: false,
          breadcrumbs: true,
        },
        {
          id: "design",
          title: "Web Design",
          type: "collapseItem",
          url: "client/services/design",
          icon: icons.CgProfile,
          target: false,
          breadcrumbs: true,
        },
      ],
    },
    {
      id: "orders",
      title: "Orders",
      type: "collapseItem",
      url: "client/orders",
      icon: icons.CgProfile,
      target: false,
      breadcrumbs: true,
    },
  ],
};

export default Client;
