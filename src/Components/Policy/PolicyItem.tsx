import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { Paper, Grid, TextField, Autocomplete, Button, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { useForm, SubmitHandler, Controller, FormProvider} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { USERS, 
        AGENCIES, AgencyValues, AgencyItemValues, 
        INSURERS, PRODUCTS, 
        POLICIES, PolicyValues, PolicyItemProps, PolicySchema, newPolicy} from '../Scaffold/MGAValues'

import ObjectFooter, { ObjectFooterValues } from '../Scaffold/PageParts/ObjectFooter';
import MailingAddressItem from '../MailingAddress/MailingAddressItem';

export default function PolicyItem (policyItemProps : PolicyItemProps) {

    const navigate = useNavigate();

    const { policy } = policyItemProps;
    const policyUndefined = typeof policy === 'undefined';

    const initialFormValues = !policyUndefined ? policy : newPolicy;
    const [formValues, setFormValues] = useState(initialFormValues);

    const footerProps : ObjectFooterValues = !policyUndefined ?
    {
        creatorId       : policy.creatorId,
        creatorName     : policy.creatorName, 
        created         : policy.created, 
        lastModified    : policy.lastModified
    } :
    {   
        creatorId       : uuidv4(),
        creatorName     : "Yankee Zulu",
        created         : new Date(),
        lastModified    : new Date()
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({...formValues, [e.target.name] : e.target.value})
    };

    return (
        <Paper variant="outlined" sx={{padding:2}}>
            <form>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Typography variant="h6" color='primary.main'>Policy Header</Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField
                            id="header-policy-number" name="policyNumber" label="Policy Number"
                            value={formValues.policyNumber}   
                            onChange={handleChange}                        
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField
                            id="insurer-name" name="product.insurer.name" label="Insurer"
                            value={formValues.product.insurer.name} 
                            inputProps={{readOnly: true}}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField
                            id="product-name" name="productName" label="Product"
                            value={formValues.product.name}
                            inputProps={{readOnly: true}}
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TextField
                            id="agency-name" name="agency.name" label="Agency"
                            value={formValues.agency.name} 
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TextField
                            id="insured-name" name="insuredName" label="Primary Insured"
                            value={formValues.insured.name}
                            inputProps={{readOnly: true}}
                        />
                    </Grid>
                    <Grid item xs={4} md={2}>
                        <TextField
                            id="period-start-date" name="periodStartDate" label="Period Start Date"
                            value={formValues.periodStartDate.toLocaleDateString()} 
                            inputProps={{readOnly: true}}
                        />
                    </Grid>
                    <Grid item xs={4} md={2}>
                        <TextField
                            id="period-end-date" name="periodEndDate" label="Period End Date"
                            value={formValues.periodEndDate.toLocaleDateString()}
                            inputProps={{readOnly: true}}
                        />
                    </Grid>
                </Grid>
                <Paper variant="outlined" sx={{p:2}}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Typography variant="h6" color='primary.main'>Insurer</Typography>
                        </Grid>
                        <Grid item xs={12}>
                        </Grid>
                    </Grid>
                </Paper>
                <ObjectFooter footerValues={footerProps} />
                <Grid container direction="row" spacing={2}
                    sx={{margin:'auto', justifyContent:"flex-end"}}
                >
                    <Grid item >
                        <Button
                            variant="contained" size='medium'
                            type="submit"
                        >Save</Button>
                    </Grid>
                    <Grid item sx={{mr:1}}>
                        <Button
                            variant="outlined" size='medium'
                            component={Link} to='/policies'
                        >Cancel</Button>
                    </Grid>
                </Grid>
            </form>
            <pre>formValues {JSON.stringify(formValues, null, 2)}</pre>
        </Paper>
    )
}