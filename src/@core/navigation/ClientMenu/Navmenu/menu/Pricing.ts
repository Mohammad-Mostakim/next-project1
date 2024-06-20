/** @format */
// assets
import {  MdOutlinePriceChange } from "react-icons/md";

// icons
const icons = {
 pricing: MdOutlinePriceChange ,
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const Pricing = {
  type: "single",
  id: "pricing",
  title: "Pricing",
  url: "/pricing",
  icon: icons.pricing,
  breadcrumbs: true,
};

export default Pricing;
