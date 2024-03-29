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
            backgroundColor: alpha(theme.palette.primary.main, 0.25),
            border: `1px solid ${alpha(theme.palette.primary.dark, 0.5)}`,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
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

//  ----  Style the Operators Table to have alternating row colors  ----
export const MGATableRowAlternating = styled(TableRow)(({theme}) => ({
    [`&:nth-of-type(even)`]: {
      backgroundColor: alpha(theme.palette.primary.main, 0.05)
    }
  })
); 

//  ----  Style TableRows where visible rows and collapsible rows match alternating color  ----
export const MGATableRowAlternating4nPlus34 = styled(TableRow)(({theme}) => ({
    [`&:nth-of-type(4n+3)`]: {
      backgroundColor: alpha(theme.palette.primary.main, 0.05)
    },
    [`&:nth-of-type(4n+4)`]: {
      backgroundColor: alpha(theme.palette.primary.main, 0.05)
    }
  })
); 

