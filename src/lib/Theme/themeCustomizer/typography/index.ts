
import { TypographyVariantsOptions } from "@mui/material/styles";
import { ThemeConfigProps } from "../../config";

export default function CustomTypography(themeConfig: ThemeConfigProps):TypographyVariantsOptions {
    const { fontFamily } = themeConfig;

    return {
        fontFamily: fontFamily,
        h6: {
            fontWeight: 500,
            fontSize: "0.75rem",
            fontFamily:fontFamily
        },
        h5: {
            fontSize: "0.875rem",
            fontWeight: 500,
            fontFamily:fontFamily
        },
        h4: {
            fontSize: "1rem",
            fontWeight: 600,
            fontFamily:fontFamily
        },
        h3: {
            fontSize: "1.25rem",
            fontWeight: 600,
            fontFamily:fontFamily
        },
        h2: {
            fontSize: "1.5rem",
            fontWeight: 700,
            fontFamily:fontFamily
        },
        h1: {
            fontSize: "2.125rem",
            fontWeight: 700,
            fontFamily:fontFamily
        },
        subtitle1: {
            fontSize: "0.875rem",
            fontWeight: 500,
            fontFamily:fontFamily
        },
        subtitle2: {
            fontSize: "0.75rem",
            fontWeight: 400,
            fontFamily:fontFamily
        },
        caption: {
            fontSize: "0.75rem",
            fontWeight: 400,
            fontFamily:fontFamily
        },
        body1: {
            fontSize: "0.875rem",
            fontWeight: 400,
            lineHeight: "1.334",
            fontFamily:fontFamily
        },
        body2: {
            fontSize: "0.567rem",
            fontWeight: 400,
            lineHeight: "1.5",
            fontFamily:fontFamily
        },
        button: {
            textTransform: "capitalize",
            fontFamily:fontFamily
        },
        customHeading: {
            fontSize: "1.5rem",
            fontWeight: "600",
            lineHeight: "2rem"
          }
    };
}
