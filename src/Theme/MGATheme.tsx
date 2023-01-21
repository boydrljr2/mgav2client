import { createTheme } from '@mui/material/styles';

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
        }
    }
});
