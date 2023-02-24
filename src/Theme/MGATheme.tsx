import { createTheme } from '@mui/material/styles';

//You have to tell typescript that 'grid' is a valid interface
declare module "@mui/material/styles/createPalette" {
    interface Palette {
        grid: {main: string, dark: string, light: string};
    }
    interface PaletteOptions {
        grid?: {main: string, dark: string, light: string};
    }
}

export const MGATheme = createTheme({
    palette: {
        primary: {
            main: 'rgba(22, 92, 125, 1)',
            light:'rgba(59, 174, 227, 1)',
            dark: 'rgba(48, 83, 99, 1)'
        },
        error: {
            main: 'rgba(227,82,101, 1)',
        },
        warning: {
            main: 'rgba(227, 219, 36, 1)',
        },
        //'Grid' is a custom palette for grids - a fairly arbitrary thing to have.
        // used like 'primary.main' or 'grid.dark'
        grid: {
            main: "rgba(122, 92, 125, 1)",
            light: "rgba(159, 174, 227, 1)",
            dark: "rgba(148, 83, 99, 1)",
        }
    }
});
