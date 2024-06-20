// ThemeSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ThemeConfig, { ThemeConfigProps } from "./config";

export interface ThemeStateProps {
  activeUrl: string | undefined;
  themeConfig: ThemeConfigProps;
  opened: boolean;
  drawerOpen: boolean;
  menuItems: any; // Define your type for menuItems, replace `any` with the actual type if known
}

const initialState: ThemeStateProps = {
  activeUrl: undefined,
  themeConfig: ThemeConfig,
  opened: true,
  drawerOpen: false,
  menuItems: null, // Initialize appropriately or maintain as null
};

const ThemeSlice = createSlice({
  name: "Theme",
  initialState,
  reducers: {
    setMode: (state) => {
      state.themeConfig.mode = state.themeConfig.mode === "dark" ? "light" : "dark";
    },
    setDrawerOpen: (state) => {
      state.drawerOpen = state.drawerOpen===false?true:false;
    },
    menuItemsReducer: (state, action: PayloadAction<any>) => {
      state.menuItems = action.payload.menuItems;
    },
    menuActiveReducer: (state, action: PayloadAction<string>) => {
      state.activeUrl = action.payload;
    },
    setMenuReducer: (state, action: PayloadAction<boolean>) => {
      state.opened = action.payload;
    },
    setFontFamilyReducer: (state, action: PayloadAction<string>) => {
      state.themeConfig.fontFamily = action.payload;
    },
    setBorderRadiusReducer: (state, action: PayloadAction<number>) => {
      state.themeConfig.borderRadius = action.payload;
    },
  },
});

export const {
  menuActiveReducer,
  setMenuReducer,
  setFontFamilyReducer,
  setBorderRadiusReducer,
  setDrawerOpen,
  setMode,
  menuItemsReducer,
} = ThemeSlice.actions;

export default ThemeSlice;
