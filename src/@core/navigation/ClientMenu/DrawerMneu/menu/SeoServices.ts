import { FaSearch, FaPencilAlt, FaWordpress, FaBullhorn } from "react-icons/fa";

// icons
const icons = {
  FaSearch,
  FaPencilAlt,
  FaWordpress,
  FaBullhorn, // Using for Social Media Marketing
};

// ==============================|| MENU ITEMS - SEO SERVICES ||============================== //
const SEOServices = {
  id: "seoservices",
  title: "SEO Services",
  type: "collapse",
  icon: icons.FaSearch, // General icon for the category
  url: "/seo-services",
  target: false,
  breadcrumbs: true,
  children: [
    {
      id: "social-media-marketing",
      title: "Social Media Marketing",
      type: "expand",
      url: "/seo-services/social-media-marketing",
      icon: icons.FaBullhorn,
      target: false,
      breadcrumbs: true,
    },
    {
      id: "seo-content-writing-services",
      title: "SEO Content Writing Services",
      type: "expand",
      url: "/seo-services/seo-content-writing",
      icon: icons.FaPencilAlt,
      target: false,
      breadcrumbs: true,
    },
    {
      id: "buy-wordpress-websites",
      title: "Buy WordPress Websites",
      type: "expand",
      url: "/seo-services/buy-wordpress-websites",
      icon: icons.FaWordpress,
      target: false,
      breadcrumbs: true,
    },
  ],
};

export default SEOServices;
