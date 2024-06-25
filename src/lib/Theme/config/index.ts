import { Rethink_Sans, Roboto, Romanesco } from "next/font/google";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});
 const rithika = Rethink_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});


// Define an interface for the color configuration
interface ColorModeSettings {
  light: string;
  dark: string;
}

interface BackgroundColorsProps {
  [key: string]: ColorModeSettings;
}

// Define the main interface for ThemeConfigProps
export interface ThemeConfigProps {
  mode: "light" | "dark";
  fontFamily: string;
  borderRadius: number;
  drawerWidth: number;
  closeDrawerWidth: number;
  navbarHeight: string;
  gridSpacing: number;
  contrastThreshold: number;
  tonalOffset: number;
  bgcolors: BackgroundColorsProps;
}

// Define the ThemeConfig object with the ThemeConfigProps type
const ThemeConfig: ThemeConfigProps = {
  mode: "light",
  fontFamily: roboto.style.fontFamily,
  borderRadius: 12,
  drawerWidth: 260,
  closeDrawerWidth: 80,
  navbarHeight: "3.5rem",
  gridSpacing: 3,
  contrastThreshold: 3,
  tonalOffset: 0.2,
  bgcolors: {
    default: { dark: "#28243D", light: "#F4F5FA" },
    main: { dark: "#303030", light: "#e3f2fd" },
    navbar: { dark: "#303030", light: "#fffc" },
    drawer: { dark: "#1a1b3a", light: "#fff" },
    paper: { dark: "#312D4B", light: "#FFF" },
    button: { dark: "#181b5c", light: "#3cc321" },
    card: { dark: "#1a1b3a", light: "#fff" },
    tab: { dark: "#9155fd", light: "#f57c00" },
    listitem: { dark: "#645e55", light: "#3cafe3" },
    icon: { dark: "#def7e2", light: "#ce93d8" },
    text: { dark: "#fff", light: "#00000000" },
  }
};

export default ThemeConfig;
