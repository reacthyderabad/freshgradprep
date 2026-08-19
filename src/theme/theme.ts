import { createTheme, alpha } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';
import { freshgradTheme1 } from './colorThemes';
import type { ColorTheme } from './colorThemes';

declare module '@mui/material/styles' {
  interface Palette {
    accent: Palette['primary'];
    highlight: Palette['primary'];
  }
  interface PaletteOptions {
    accent?: PaletteOptions['primary'];
    highlight?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    accent: true;
    highlight: true;
  }
}

declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides {
    accent: true;
    highlight: true;
  }
}

const headingFont = '"Plus Jakarta Sans", sans-serif';
const bodyFont = '"DM Sans", sans-serif';

export const createAppTheme = (colors: ColorTheme): Theme =>
  createTheme({
    palette: {
      primary: {
        main: colors.primary,
        contrastText: '#ffffff',
      },
      secondary: {
        main: colors.secondary,
        contrastText: colors.primary,
      },
      accent: {
        main: colors.accent,
        light: alpha(colors.accent, 0.15),
        dark: colors.accent,
        contrastText: '#ffffff',
      },
      highlight: {
        main: colors.highlight,
        light: alpha(colors.highlight, 0.1),
        dark: colors.highlight,
        contrastText: '#ffffff',
      },
      background: {
        default: '#ffffff',
        paper: '#ffffff',
      },
      text: {
        primary: '#1F1F1F',
        secondary: '#3D3D3D',
      },
      divider: alpha(colors.primary, 0.1),
    },
    typography: {
      fontFamily: bodyFont,
      h1: {
        fontFamily: headingFont,
        fontWeight: 700,
        fontSize: '3rem',
        lineHeight: 1.15,
        letterSpacing: '-0.02em',
      },
      h2: {
        fontFamily: headingFont,
        fontWeight: 700,
        fontSize: '2.25rem',
        lineHeight: 1.2,
        letterSpacing: '-0.01em',
      },
      h3: {
        fontFamily: headingFont,
        fontWeight: 600,
        fontSize: '1.75rem',
        lineHeight: 1.3,
      },
      h4: {
        fontFamily: headingFont,
        fontWeight: 600,
        fontSize: '1.35rem',
        lineHeight: 1.35,
      },
      h5: {
        fontFamily: headingFont,
        fontWeight: 600,
        fontSize: '1.15rem',
        lineHeight: 1.4,
      },
      h6: {
        fontFamily: headingFont,
        fontWeight: 600,
        fontSize: '1rem',
        lineHeight: 1.5,
      },
      subtitle1: {
        fontFamily: bodyFont,
        fontWeight: 500,
        fontSize: '1.125rem',
        lineHeight: 1.6,
      },
      subtitle2: {
        fontFamily: bodyFont,
        fontWeight: 500,
        fontSize: '0.95rem',
        lineHeight: 1.55,
      },
      body1: {
        fontFamily: bodyFont,
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: 1.7,
      },
      body2: {
        fontFamily: bodyFont,
        fontWeight: 400,
        fontSize: '0.875rem',
        lineHeight: 1.65,
      },
      button: {
        fontFamily: headingFont,
        fontWeight: 600,
        textTransform: 'none',
        letterSpacing: '0.01em',
      },
      caption: {
        fontFamily: bodyFont,
        fontWeight: 400,
        fontSize: '0.8rem',
      },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 10,
            padding: '10px 24px',
            fontSize: '0.95rem',
          },
          sizeLarge: {
            padding: '14px 32px',
            fontSize: '1rem',
          },
        },
        defaultProps: {
          disableElevation: true,
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            fontWeight: 500,
          },
        },
      },
      MuiContainer: {
        defaultProps: {
          maxWidth: 'lg',
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            scrollBehavior: 'smooth',
          },
          body: {
            transition: 'background-color 0.3s ease, color 0.3s ease',
          },
        },
      },
    },
  });

const theme = createAppTheme(freshgradTheme1);

export default theme;
