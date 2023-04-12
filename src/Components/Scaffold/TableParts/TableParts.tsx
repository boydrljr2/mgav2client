import React from 'react';

import { styled, alpha } from '@mui/material/styles';
import { TableRow, TableCell, tableCellClasses } from '@mui/material';

//Style table header cells and maybe rows as well
//Move these styles to MGATheme or create an MGATableHeaderCell component
export const MGATableHeaderCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          color: theme.palette.primary.dark,
          //set font to bold
            fontWeight: 'bold',
            verticalAlign: 'bottom',
            backgroundColor: alpha(theme.palette.primary.main, 0.15),
            border: `1px solid ${alpha(theme.palette.primary.dark, 0.5)}`,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      })
);

//Style table header cells and maybe rows as well
//Move these styles to MGATheme or create an MGATableHeaderCell component
export const MGATableRowAlternating = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      })
);

export const MGATableRowCellCollapsible = styled(TableRow)(({ theme }) => ({
        backgroundColor: alpha(theme.palette.primary.main, 0.15),
        border: `1px solid ${alpha(theme.palette.primary.dark, 0.5)}`,
        paddingBottom: 0,
        paddingTop: 0,
        verticalAlign: 'top'
        })
);
