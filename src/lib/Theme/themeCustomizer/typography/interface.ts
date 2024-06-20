// theme.d.ts
import '@mui/material/styles';

// declare module '@mui/material/styles' {
//     interface TypographyVariants {
//         customHeading?: React.CSSProperties;
//     }
//     interface TypographyOptions {
//         customHeading?: React.CSSProperties;
//     }
// }
// theme.d.ts
import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    customHeading: React.CSSProperties;  // Define custom typography styles
  }

  interface TypographyVariantsOptions {
    customHeading?: React.CSSProperties;  // Optional in options
  }
}

// Optionally, if you want to extend the theme's typography configuration utility
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    customHeading: true;
  }
}