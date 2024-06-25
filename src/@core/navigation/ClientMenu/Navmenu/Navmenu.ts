/** @format */
import Blog from "./menu/Blog";
import Services from "./menu/Services";
import Pricing from "./menu/Pricing";
import Contact from "./menu/Contact";


// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const Navmenu = {
  id: "navmenu",
  tag: "navmenu",
  menu: [
    Services,
    Blog,
    Pricing,
    Contact
  ],
};

export default Navmenu;
