
import { deepMerge } from "../utils/merge";
import AdminMenuItems from "./AdminMenu/AdminMenuItems";
import ClientMenuItems from "./ClientMenu/ClientMenuItems";
import UserMenuItems from "./UserMenu/UserMenuItems";


// Define the type for the menu structure, which is used by the components
interface MenuStructure {
  breadcrumbs: any[]; // Specify the type more detailed based on your actual data
  drawerValues: any[]; // Specify the type more detailed based on your actual data
  subDrawerValues: any[]; // Specify the type more detailed based on your actual data
  navbarValues: any[]; // Specify the type more detailed based on your actual data
}

// Define the type for the returned object from initializeMenuItems function
interface InitializedMenu {
  breadcrumbs: any[];
  drawerValues: any[];
  subDrawerValues: any[];
  navbarValues: any[];
}
// Your arrays to merge
const array1 = {
  items: [
    {
      id: "navmenu",
      tag: "navmenu",
      menu: [],
    },
    {
      id: "drawermenu",
      tag: "drawermenu",
      menu: [
        {
          type: "single",
          id: "dashboard",
          title: "Dashboard",
          url: "/dashboard",
          icon: "icon",
          breadcrumbs: true,
        }
      ],
    }
  ]
};

// Adjust this function to return a typed MenuStructure
export const GetMenuItemsByRole = (user: any, url?: string): MenuStructure => {
  let MenuItems;

  if (user && user.role === "admin") {
    MenuItems = deepMerge(ClientMenuItems, AdminMenuItems);
  } else if (user && user.role === "user") {
    MenuItems = deepMerge(ClientMenuItems, UserMenuItems);
  } else {
    MenuItems = ClientMenuItems;
  }

  // Call and return the result of initializeMenuItems
  return initializeMenuItems(MenuItems);
};

// Ensure that the MenuItems parameter is of the correct type
function initializeMenuItems(MenuItems: { items: any[] }): InitializedMenu {
  const breadcrumbs: any[] = [];
  const drawerValues: any[] = [];
  const navbarValues: any[] = [];
  const subDrawerValues: any[] = [];
  if (MenuItems) {
    MenuItems.items.forEach((item) => {
      breadcrumbs.push(...item.menu);
      switch (item.tag) {
        case "drawermenu":
          drawerValues.push(item.menu);
          break;
        case "navmenu":
          navbarValues.push(item.menu);
          break;
        case "subdrawermenu":
          subDrawerValues.push(item.menu);
          break;
        default:
          break;
      }
    });
  }
  return {
    breadcrumbs,
    drawerValues,
    subDrawerValues,
    navbarValues,
  };
}
