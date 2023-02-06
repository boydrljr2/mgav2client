import { Box, Typography, Grid, TextField } from '@mui/material';

import { PolicyValues } from '../../Scaffold/MGAValues';
import { ObjectFooterValues } from '../../Scaffold/PageParts/ObjectFooterValues';

import InsuredCardView from '../../Insured/InsuredCardView';
import AgencyCardView from '../Agency/AgencyCardView';
import InsurerCardView from '../Insurer/InsurerCardView';
import ObjectFooter from '../../Scaffold/PageParts/ObjectFooter';

import MGATextField from '../../Scaffold/FieldParts/MGATextField';

export default function PolicyHeader (props: {policy: PolicyValues}) {

    const {policy} = props;

    const startDate = new Date(policy.periodStartDate).toString();
    const endDate = new Date(policy.periodEndDate).toString();
    const endorsementDate = new Date(policy.endorsementDate).toString();

    //create a footerValues object to pass to the ObjectFooter component
    const enteredDate = new Date(policy.dateEntered);
    const lastModifiedDate = new Date(policy.dateLastModified);
    const footerValues: ObjectFooterValues = { enteredDate, lastModifiedDate};

    return (
        <Box sx={{margin: 1}}>          
        <Typography
            sx={{margin: 1, color: 'primary.main', fontSize: '1.2rem'}}
        >Policy Header
        </Typography>
        <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
                <MGATextField
                    id="policyNumber" name="policyNumber" label="Policy Number"
                    value={policy.policyNumber}
                    inputProps={{readOnly: true}}
                />
            </Grid>
            <Grid item xs={12} md={4}>
                <MGATextField
                    id="insurerName" name="insurerName" label="Insurer"
                    value={policy.product.insurer.insurerName}
                    inputProps={{readOnly: true}}
                />
            </Grid>
            <Grid item xs={12} md={4}>
                <MGATextField
                    id="productName" name="productName" label="Product"
                    value={policy.product.productName}
                    inputProps={{readOnly: true}}
                />
            </Grid>
            <Grid item xs={12} md={4}>
                <TextField
                    id="startDate" name="startDate" label="Period Start Date"
                    fullWidth
                    value={startDate}
                    inputProps={{readOnly: true}}
                />
            </Grid>
            <Grid item xs={12} md={4}>
                <TextField
                    id="endDate" name="endDate" label="End Date"
                    value={endDate}
                    fullWidth
                    inputProps={{readOnly: true}}
                />
            </Grid>
            <Grid item xs={12} md={4}>
                <TextField
                    id="endorsementDate" name="endorsementDate" label="Endorsement Date"
                    value={endorsementDate}
                    fullWidth
                    inputProps={{readOnly: true}}
                />
            </Grid>
            <Grid item key='Insured' xs={12} md={4}>
                <InsuredCardView insured={policy.insured} />
            </Grid>
            <Grid item key='Insurer' xs={12} md={4}>
                <InsurerCardView insurer={policy.product.insurer} />
            </Grid>
            <Grid item key='Agency' xs={12} md={4}>
                <AgencyCardView agency={policy.agency} />
            </Grid>
            <ObjectFooter footerValues={footerValues} />
        </Grid>
    </Box>
    )

}