/** @format */
"use client"
import { Badge, IconButton, SvgIcon } from "@mui/material";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { setMode } from "@/lib/Theme/ThemeSlice";
import { useAppDispatch } from "@/lib/Redux/ReduxStore/hooks";
import { useAppTheme } from "@/lib/Theme/hooks";

const ModeToggler: React.FC = () => {
    const theme = useAppTheme();
    const dispatch = useAppDispatch();

    const handleModeToggle = () => {
        dispatch(setMode());
    };

    return (
        <IconButton
            title="Change Mode"
            onClick={handleModeToggle}
            aria-label="Toggle light/dark mode"
            sx={{borderRadius:"50%"}}
        >
            <SvgIcon sx={{color:theme.palette.customBg?.icon}}>

                {theme.palette.mode === "dark" ? (
                    <MdOutlineDarkMode size={20} />
                ) : (
                    <MdOutlineLightMode size={20} />
                )}
            </SvgIcon>
        </IconButton>
    );
}

export default ModeToggler;
