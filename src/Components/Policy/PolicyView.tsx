import React, {useState} from 'react';

import { FormGroup, Paper, Typography, Divider, Stack, Box } from '@mui/material';
//import { DesktopDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import MGATextField, {MGATextFieldStyle, MGATextFieldStyle400  } from '../../Scaffold/FieldParts//MGATextField';
import { MGADesktopDatePicker } from '../../Scaffold/FieldParts/MGADesktopDatePicker';
import { policies } from './PolicyValues';
import PageBar from '../../Scaffold/PageParts/PageBar';
import MailingAddressView from '../MailingAddress/MailingAddressView';


export const PolicyView = () => {

    const [policy, setPolicy] = useState(policies[0]);

    const pageButtons = [
        {name: "Edit", link: "/policy/edit/1"}
    ];

    const personName = policy.insured.personName.firstName + " " 
                        + ((policy.insured.personName.middleName !== undefined) ? policy.insured.personName.middleName : "") + " " 
                        + policy.insured.personName.lastName;

    const handleDatePickerChange = (newValue: Date | null) => {
        console.log("handleDatePickerChange: ", policy.periodStartDate, policy.periodEndDate);
        setPolicy({...policy, periodStartDate: policies[0].periodStartDate}) ;
    }   

    return (
        <React.Fragment>
            <PageBar title="View Policy" pageButtons={pageButtons} />
            <Paper variant="outlined">
                <Typography
                    sx={{margin: 1, color: 'primary.main'}}
                >Policy Header
                </Typography>
                <FormGroup row>
                    <MGATextField
                        id="policyNumber" name="policyNumber" label="Policy Number"
                        value={policy.policyNumber}
                        sx={MGATextFieldStyle}
                    />
                    <MGATextField
                        id="insuredName" name="insuredName" label="Insured"
                        value= {personName}
                        sx={MGATextFieldStyle400}
                    />
                </FormGroup>
                <FormGroup row>
                    <MGATextField
                        id="insurerName" name="insurerName" label="Insurer"
                        value={policy.product.insurer.insurerName}
                        sx={MGATextFieldStyle}
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
                            value={policy.insured.personName.firstName + " " 
                                    + (policy.insured.personName.middleName === undefined) ? "-" : policy.insured.personName.middleName + " " 
                                    + policy.insured.personName.lastName}
                            sx={MGATextFieldStyle}
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
                            sx={MGATextFieldStyle}
                        />
                        <MailingAddressView mailingAddress={policy.agency.agencyMailingAddress}/>
                    </Stack>
                </FormGroup>

                <Divider sx={{margin:1}}/>

            </Paper>
        </React.Fragment>
    );
}