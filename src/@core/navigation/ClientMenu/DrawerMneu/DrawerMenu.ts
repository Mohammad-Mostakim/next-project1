/** @format */
import products from "./menu/Products";
import PrograminServices from "./menu/PrograminServices";
import UIDesignProvider from "./menu/UIDesignProvider";

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const DrawerMenu = {
  id: "drawermenu",
  tag: "drawermenu",
  menu: [
    UIDesignProvider,
    PrograminServices,
    products,
  ],
};

export default DrawerMenu;
