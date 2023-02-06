import React, {useState} from 'react';

import { Paper, Typography, Divider, Stack, Box, Toolbar } from '@mui/material';

import { policies } from './policies';

import PageBar from '../../Scaffold/PageParts/PageBar';
import { PageButtonValues, PageBarValues } from '../../Scaffold/PageParts/PageValues';

import OperatorView from '../../Operator/OperatorView';
import AutoCardView from '../Auto/AutoCardView';
import CoveragesView from '../Coverages/CoveragesView';
import PolicyHeader from './PolicyHeader';
import LienholderView from '../Lienholder/LienholderView';

export default function PolicyView () {

    const [policy, setPolicy] = useState(policies[0]);

    const pageButtons : PageButtonValues[] = [
        {name: "Edit", link: "/policy/edit/1"}
    ];
    const pageBarProps : PageBarValues = {
        title: "View Policy",
        pageButtons: pageButtons
    }

    return (
        <React.Fragment>
            <PageBar {...pageBarProps} />
            <Paper variant="outlined">

{/* Another shot at Policy Header */}
                <PolicyHeader policy={policy} />

                <Divider sx={{margin:1}}/>

{/* Auto Units */}
                <Box sx={{margin:1}}>
                    <AutoCardView autos={policy.autoUnits} />
                </Box>

                <Divider sx={{margin:1}}/>

{/* Lienholders */}
                <Box sx={{margin:1}}>
                    <LienholderView autoUnits={policy.autoUnits} />
                </Box>

                <Divider sx={{margin:1}}/>

{/* Coverages */}
                <Box sx={{margin: 1 }}>
                    <CoveragesView autos={policy.autoUnits} />
                </Box>
                
                <Divider sx={{margin:1}}/>

{/* Operators Info */}

                <Box sx={{margin:1}}>
                    <OperatorView operators={policy.operators} />
                </Box>

                <Divider sx={{margin:1}}/>

{/* Endorsements */}
                <Box sx={{margin: 1 }}>
                    <Typography
                        sx={{color: 'primary.main', fontSize: '1.2rem'}}
                    >Endorsements
                    </Typography>
                    <Typography>
                        {policy.endorsements?.join(", ") ?? "None"}
                    </Typography>
                </Box>

            </Paper>
        </React.Fragment>
    );
}