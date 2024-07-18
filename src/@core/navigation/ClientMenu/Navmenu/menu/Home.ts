/** @format */
// assets
import { BiHome } from "react-icons/bi";

// icons
const icons = {
  BiHome ,
};
// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const Home = {
  type: "single",
  id: "home",
  title: "Home",
  url: "/",
  icon: icons.BiHome ,
  breadcrumbs: false,
};

export default Home;
