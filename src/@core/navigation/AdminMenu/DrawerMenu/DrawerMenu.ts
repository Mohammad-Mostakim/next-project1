
import Client from "./menu/Client";
import dashboard from "./menu/dashboard";

import support from "./menu/support";

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const DrawerMenu = {
  id: "drawermenu",
  tag: "drawermenu",
  menu: [
    dashboard,
    Client,
    support,

  ],
};

export default DrawerMenu;
