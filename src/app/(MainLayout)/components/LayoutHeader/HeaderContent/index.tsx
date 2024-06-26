
"use client"
// material-ui
import { useMediaQuery } from "@mui/material";

// project import
import MobileSection from "./MobileSection";
import { useAppTheme } from "@/lib/Theme/hooks";
import BigDeviceSection from "./BigDeviceSection";

// ==============================|| HEADER - CONTENT ||============================== //
const HeaderContent: React.FC = () => {
  const theme=useAppTheme()
  const downLg = useMediaQuery( theme.breakpoints.down("lg"));

  if (downLg) {
    return <MobileSection />;
  }
  return <BigDeviceSection />;
};

export default HeaderContent;
