import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import { FormGroup, Paper, Typography, Divider, Stack, Box, Toolbar, Button } from '@mui/material';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import MGATextField, 
    {MGATextFieldStyle200, MGATextFieldStyle400, MGATextFieldStyle100, MGATextFieldStyle50  } 
    from '../../Scaffold/FieldParts//MGATextField';
import { MGADesktopDatePicker } from '../../Scaffold/FieldParts/MGADesktopDatePicker';

import { policies } from './policies';

import PageBar from '../../Scaffold/PageParts/PageBar';
import MailingAddressView from '../MailingAddress/MailingAddressView';
import OperatorTable from './OperatorTable';
import AutoCardView from './AutoCardView';


export const PolicyView = () => {

    const [policy, setPolicy] = useState(policies[0]);

    const pageButtons = [
        {name: "Edit", link: "/policy/edit/1"}
    ];

    const insuredPersonName = policy.insured.personName.firstName + " " 
                        + ((policy.insured.personName.middleName !== undefined) ? policy.insured.personName.middleName : "") + " " 
                        + policy.insured.personName.lastName;

    const handleDatePickerChange = (newValue: Date | null) => {
        console.log("handleDatePickerChange: ", policy.periodStartDate, policy.periodEndDate);
        setPolicy({...policy, periodStartDate: policies[0].periodStartDate}) ;
    }   

    return (
        <React.Fragment>
            <PageBar title="View Policy" pageButtons={pageButtons} />

            {/* Policy Header */}
            <Paper variant="outlined">
                <Typography
                    sx={{margin: 1, color: 'primary.main'}}
                >Policy Header
                </Typography>
                <FormGroup row>
                    <MGATextField
                        id="policyNumber" name="policyNumber" label="Policy Number"
                        value={policy.policyNumber}
                        sx={MGATextFieldStyle100}
                    />
                    <MGATextField
                        id="insuredName" name="insuredName" label="Insured"
                        value= {insuredPersonName}
                        sx={MGATextFieldStyle400}
                    />
                </FormGroup>
                <FormGroup row>
                    <MGATextField
                        id="insurerName" name="insurerName" label="Insurer"
                        value={policy.product.insurer.insurerName}
                        sx={MGATextFieldStyle200}
                    />
                    <MGATextField
                        id="productName" name="productName" label="Product"
                        value={policy.product.productName}
                        sx={MGATextFieldStyle400}
                    />
                </FormGroup>
                <FormGroup row>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Box sx={{margin:1}}>
                            <MGADesktopDatePicker
                                label="Policy Period Begins"
                                //inputFormat="MM/DD/YYYY"
                                value={policy.periodStartDate}
                                //renderInput={(params) => <MGATextField {...params} />}
                                onChange={handleDatePickerChange}
                            />
                        </Box>
                        <Box sx={{margin:1}}>
                            <MGADesktopDatePicker
                                label="Ends"
                                //inputFormat="MM/DD/YYYY"
                                value={policy.periodEndDate}
                                //renderInput={(params) => <TextField {...params} />}
                                onChange={handleDatePickerChange}                               
                            />
                        </Box>
                    </LocalizationProvider>
                </FormGroup>

                <Divider sx={{margin:1}}/>

                <FormGroup row>
                    <Stack>
                        <Typography
                            sx={{margin: 1, color: 'primary.main'}}
                        >Insured
                        </Typography>
                        <MGATextField
                            id="insuredName" name="insuredName" label="Insured Name"
                            value={insuredPersonName}
                            sx={MGATextFieldStyle200}
                        />
                        <MailingAddressView mailingAddress={policy.insured.personMailingAddress}/>
                    </Stack>
                </FormGroup>

                <Divider sx={{margin:1}}/>

                <FormGroup row>
                    <Stack>
                        <Typography
                            sx={{margin: 1, color: 'primary.main'}}
                        >Agency
                        </Typography>
                        <MGATextField
                            id="insuredName" name="insuredName" label="Insured Name"
                            value={policy.agency.agencyName}
                            sx={MGATextFieldStyle200}
                        />
                        <MailingAddressView mailingAddress={policy.agency.agencyMailingAddress}/>
                    </Stack>
                </FormGroup>

                <Divider sx={{margin:1}}/>

                {/* Operators Info */}
                <FormGroup>
                    <Stack>
                        <Toolbar 
                            variant='dense'
                            sx={{color: 'primary.main'}}
                        >
                            <Typography
                                sx={{color: 'primary.main'}}
                            >Operators
                            </Typography>
                            {/*
                            <Box sx={{
                                    display: 'flex',
                                    justifyContent:'right'
                                }}
                            >
                                <Button
                                    key="addOperator"
                                    variant="outlined"
                                    size="small"
                                    component={Link}
                                    to="/policies"
                                    sx={{
                                        color:'primary', 
                                        display: 'block',
                                        mr:1,
                                        '&:hover': {
                                            color: 'white',
                                            backgroundColor: 'primary.main',
                                        } }}
                                >Add
                                </Button>
                            </Box>
                            */}
                        </Toolbar>
                        <OperatorTable operators={policy.operators} />
                    </Stack>
                </FormGroup>

                <Divider sx={{margin:1}}/>

                {/* Auto Units */}
                <FormGroup>
                    <Typography
                        sx={{margin: 1, color: 'primary.main'}}
                    >Autos
                    </Typography>
                    <AutoCardView autos={policy.autoUnits} />
                </FormGroup>

            </Paper>
        </React.Fragment>
    );
}