import * as React from 'react';

import { styled, alpha } from '@mui/material/styles';
import { Tabs, tabClasses } from '@mui/material';


export const MGATabs = styled(Tabs)(({theme}) => ({
    [`& .${tabClasses.selected}`]: {
        border: `2px solid ${alpha(theme.palette.primary.dark, 1.0)}`,
        //if selected then set background color to white
        backgroundColor: alpha(theme.palette.primary.main, 1.0),
        fontWeight: 'bold',
    },
    [`& .${tabClasses.root}`]: {
        border: `1px solid ${alpha(theme.palette.primary.dark, 0.5)}`,
        backgroundColor: alpha(theme.palette.primary.main, 0.15),
        color: theme.palette.primary.dark,
        '&:hover': {
            backgroundColor: alpha(theme.palette.primary.main, 0.5),
            color: alpha(theme.palette.common.white, 1.0),
        },
    },
}));


export interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

export function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <div>{children}</div>
            )}
        </div>
    );
}

export function tabAllyProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}