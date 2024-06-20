// Import necessary dependencies from MUI and React
import { createTheme, responsiveFontSizes, Theme, ThemeOptions } from "@mui/material/styles";
import { useMemo } from "react";
import { deepmerge } from "@mui/utils";

// Import custom configurations and styles
import CustomPalette from "./palette";
import CustomTypography from "./typography";
import { ThemeConfigProps } from "../config";
import ComponentStyleOverrides from "./overrides";

// Define extended interfaces for CustomTheme and ThemeOptionsProps
export interface CustomTheme extends Theme { }
export interface ThemeOptionsProps extends ThemeOptions {
}

// ThemeCustomizer function definition
const ThemeCustomizer = (customValues: ThemeConfigProps): CustomTheme => {
    const custom_values = useMemo(() => customValues, [customValues]);
    // Memoize theme options creation
    const themeOptions: ThemeOptionsProps = useMemo(() => {
        const defaultTheme = createTheme();
        const mergePalette = deepmerge(defaultTheme.palette, CustomPalette(custom_values));
        const mergeTypography = deepmerge(defaultTheme.typography, CustomTypography(custom_values));

        return {
            breakpoints: {
                values: {
                    xs: 0,
                    sm: 576,
                    xmd: 800,
                    md: 1024,
                    lg: 1266,
                    xl: 1536,
                },
            },
            palette:{... mergePalette},
            spacing: (factor: number): string => `${factor * 0.25}rem`,
            shape: {
                borderRadius: custom_values.borderRadius
            },
            typography: {...mergeTypography},
        };
    }, [custom_values]);

    themeOptions.components = { ...ComponentStyleOverrides(themeOptions) }
    // Create a theme using the options
    const theme = createTheme(themeOptions) as CustomTheme;
    // Apply responsive font sizes
    return responsiveFontSizes(theme);
};

export default ThemeCustomizer;
