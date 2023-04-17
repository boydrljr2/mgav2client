import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';

import { Paper, Grid, Tab, Button, Typography, Divider } from '@mui/material';

import { useForm, useFieldArray, SubmitHandler, Controller, FormProvider} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { POLICIES, PolicyValues, PolicyItemProps, PolicySchema, newPolicy,} 
        from '../Scaffold/MGAValues'

import { TabPanel, tabAllyProps, MGATabs } from '../Scaffold/PageParts/TabParts';
import ObjectFooter, { ObjectFooterValues } from '../Scaffold/PageParts/ObjectFooter';

import PolicyHeader from './PolicyHeader';
import PolicyDetails from './PolicyDetails';
import InsuredDetails  from '../Insured/InsuredDetails';
import OperatorPolicyPanel from '../Operator/OperatorPolicyPanel';
import AutoPolicyPanel from '../Auto/AutoPolicyPanel';

export default function PolicyItem (policyItemProps : PolicyItemProps) {

    const navigate = useNavigate();

    const { policy } = policyItemProps;
    const policyUndefined = (policy === undefined);

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

    const [tabValue, setTabValue] = useState(0);
    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    const methods = useForm<PolicyValues>({
        resolver: yupResolver(PolicySchema),
        defaultValues: !policyUndefined ? policy : newPolicy
    });
    console.log( 'PolicyItem methods: ', methods );
    const { register, handleSubmit, control, reset, trigger, setError, formState: { errors } } = methods;
    const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
        control,
        name: "operators"
    });

    const policyFormHandler : SubmitHandler<PolicyValues> = (data) => {
        console.log('Policy onSubmit data: ', data);
        methods.setValue('lastModified', new Date());
        const policyIndex = POLICIES.findIndex(policy => policy.id === data.id);
        if (policyIndex === -1) {
            POLICIES.push(data);
        } else {
            POLICIES[policyIndex] = data;
        }
        navigate('/policies');
    }

    if (policyItemProps === undefined) {
        return (
            <Typography variant="h6" color='primary.main'>Policy not found</Typography>
        )
    }

    return (
        <FormProvider {...methods}>
            <Paper variant="outlined" sx={{p:2, m:1, flexGrow:1}}>
                <form onSubmit={handleSubmit(policyFormHandler)} >
                    <PolicyHeader />
                    <ObjectFooter footerValues={footerProps} />
                    <Divider sx={{m:1, p:1}} />

                    {/*  Tabs for Details - Insured - Autos & Coverages - Operators */}
                    <Grid container sx={{ width: '100%' }}>
                        <Grid item xs={12} sx={{ borderColor: 'divider', mb:2, p:1 }}>
                            <MGATabs 
                                value={tabValue} 
                                onChange={handleTabChange} 
                                aria-label="basic tabs example"
                                variant="fullWidth"
                            >
                                <Tab label="Policy Details"  {...tabAllyProps}/>
                                <Tab label="Insured Details" {...tabAllyProps} />
                                <Tab label="Operators" {...tabAllyProps} />
                                <Tab label="Auto Details" {...tabAllyProps} />
                                <Tab label="Coverages" {...tabAllyProps} />
                            </MGATabs> 
                        </Grid>
                        <TabPanel value={tabValue} index={0}> 
                            <PolicyDetails />
                        </TabPanel>
                        <TabPanel value={tabValue} index={1}> 
                            <InsuredDetails />
                        </TabPanel>
                        <TabPanel value={tabValue} index={2}> 
                            <OperatorPolicyPanel />
                        </TabPanel>
                        <TabPanel value={tabValue} index={3}> 
                            <AutoPolicyPanel /> 
                        </TabPanel>
                        <TabPanel value={tabValue} index={4}>
                            Coverages
                        </TabPanel>
                    </Grid>

                    {/* SAVE & CANCEL BUTTONS */}
                    <Divider sx={{m:1, p:1}} />
                    <Grid container direction="row" spacing={2}
                        sx={{margin:'auto', justifyContent:"flex-end"}}
                    >
                        <Grid item sx={{mr:1}}>
                            <Button
                                variant="contained" size='medium'
                                type="submit"
                            >Save All
                            </Button>
                        </Grid>
                        <Grid item sx={{mr:1}}>
                            <Button
                                variant="outlined" size='medium'
                                type="reset" onClick={() => reset()}
                            >Reset
                            </Button>
                        </Grid>
                        <Grid item sx={{mr:5}}>
                            <Button
                                variant="outlined" size='medium'
                                component={Link} to='/policies'
                            >Cancel
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </FormProvider>
    )
}
