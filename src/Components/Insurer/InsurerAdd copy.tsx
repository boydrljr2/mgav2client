import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {Paper, FormControl, FormGroup,  Grid, Box, Typography, Button, Autocomplete} from '@mui/material';
import MGATextField from '../Scaffold/FieldParts/MGATextField';
import { InsurerValues } from '../Scaffold/MGAValues';
import { insurers } from './insurers';
import InsurerStatusWidget from './InsurerStatusWidget';

export const insurerStatuses = [ "Active", "Inactive", "Pending", "Suspended", "Terminated" ];

/* From to add a new insurer */
export default function InsurerAdd() {

    //write a useState function to set the insurer to null using the InsurerValues interface
    const getDefaultInsurerValues = () => {
        return {
            id                  : insurers.length + 1,
            insurerFEIN         : '',
            insurerStatus       : '',
            insurerName         : '',
            insurerDomicileState: '',
            insurerPhone        : '',
            insurerEmail        : '',
            insurerURL          : '',
            insurerMailingAddress: {
                id              : 0,
                streetAddress   : '',
                city            : '',
                state           : '',
                zip             : ''
            },
            NAICGroup           : '',
            NAICCode            : '',
            NAICGroupName       : '',
            AMBestID            : '',
            AMBestRating        : '',
            dateEntered         : new Date(),
            dateLastModified    : new Date()
        }
    }

    const [insurerFormValues, setInsurerFormValues] = useState<InsurerValues>(
        getDefaultInsurerValues()
    );

    const handleTextFieldChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        console.log('handleTextFieldChange e.target.name: ', e.target.name, " value: ", e.target.value)
        setInsurerFormValues({...insurerFormValues, [name]: value});
    }

    const handleTextFieldBlur = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        console.log('handleTextFieldBlur e.target.name: ', e.target.name, " value: ", e.target.value)
    }

    const handleSubmit = () => {
        console.log('handleSubmit insurer: ', insurerFormValues)
        insurers.push(insurerFormValues);
        setInsurerFormValues({...getDefaultInsurerValues()})
    }

    const handleInsurerStatusChange = (
            e: React.SyntheticEvent<Element, Event>,
            value: string
        ) => {
            setInsurerFormValues({...insurerFormValues, insurerStatus: value})
            console.log('handleInsurerStatusChange value: ', insurerFormValues)
    }


    return (
        <React.Fragment>
            <Paper variant="outlined" sx={{padding:2}}>
{/*  INSURER Header */}
                    <Box sx={{margin:1}}>          
                        <Typography
                            sx={{color: 'primary.main', fontSize: '1.2rem'}}
                        >Insurer Header
                        </Typography>
                        <form>
                            <Grid container spacing={1}>
    {/* group 1 Identifiers */}
                                <Grid item xs={4} md={2}>
                                    <MGATextField
                                        id="insurerID" name="insurerId" label="ID"
                                        value={insurerFormValues.id}
                                        inputProps={{readOnly: true}}
                                    />
                                </Grid>
                                <Grid item xs={8} md={4}>
                                    <MGATextField
                                        id="insurerName" name="insurerName" label="Insurer"
                                        value={insurerFormValues.insurerName} 
                                        onChange={handleTextFieldChange}
                                        onBlur = {handleTextFieldBlur}
                                    />
                                </Grid>
                                <Grid item xs={4} md={2}>
                                    <MGATextField
                                        id="insurerFEIN" name="insurerFEIN" label="FEIN"
                                        value={insurerFormValues.insurerFEIN}
                                        onChange={handleTextFieldChange}
                                        onBlur = {handleTextFieldBlur}
                                    />
                                </Grid>
                                <Grid item xs={4} md={2}>
                                    <MGATextField
                                        id="insurerDomicileState" name="insurerDomicileState" label="Domicile State"
                                        value={insurerFormValues.insurerDomicileState}
                                        onChange={handleTextFieldChange}
                                        onBlur = {handleTextFieldBlur}
                                    />
                                </Grid>
                                
                                <Grid item xs={4} md={2}>
                                    <Autocomplete
                                        id="insurer-status"
                                        includeInputInList
                                        options={insurerStatuses}
                                        inputValue={insurerFormValues.insurerStatus}
                                        renderInput={(params) => (
                                            <MGATextField {...params} label="Status" variant="outlined" />
                                        )}
                                        renderOption={(props, options) => {
                                            return (
                                                <li {...props}>
                                                    {options}
                                                </li>
                                            )
                                        }}
                                        onInputChange={handleInsurerStatusChange}
                                    />
                                </Grid>

    {/* group 2 NAIC & AMBest */}
                                <Grid item xs={6} md={2}>
                                    <MGATextField
                                        id="NAICCode" name="NAICCode" label="NAIC Code"
                                        value={insurerFormValues.NAICCode}
                                        onChange={handleTextFieldChange}
                                        onBlur = {handleTextFieldBlur}
                                    />
                                </Grid>
                                <Grid item xs={6} md={2}>
                                    <MGATextField
                                        id="NAICGroup" name="NAICGroup" label="Group"
                                        value={insurerFormValues.NAICGroup}
                                        onChange={handleTextFieldChange}
                                        onBlur = {handleTextFieldBlur}
                                    />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <MGATextField
                                        id="NAICGroupName" name="NAICGroupName" label="Group Name"
                                        value={insurerFormValues.NAICGroupName}
                                        onChange={handleTextFieldChange}
                                        onBlur = {handleTextFieldBlur}
                                    />
                                </Grid>
                                <Grid item xs={6} md={2}>
                                    <MGATextField
                                        id="AMBestID" name="AMBestID" label="AMBest ID"
                                        value={insurerFormValues.AMBestID}
                                        onChange={handleTextFieldChange}
                                        onBlur = {handleTextFieldBlur}
                                    />
                                </Grid>
                                <Grid item xs={6} md={2}>
                                    <MGATextField
                                        id="AMBestRating" name="AMBestRating" label="Rating"
                                        value={insurerFormValues.AMBestRating}
                                        onChange={handleTextFieldChange}
                                        onBlur = {handleTextFieldBlur}
                                    />
                                </Grid>
                            </Grid>
                            
{/* Page BUTTONS Save & Cancel */}
                            <FormGroup row >
                                <Button 
                                    variant='contained' size='medium' 
                                    sx={{margin:'auto', display:"flex"}}
                                    onClick={handleSubmit}
                                >Save
                                </Button>
                                <Button 
                                    key="Cancel"
                                    variant='outlined' 
                                    component={Link}
                                    to={`/insurers`}
                                    sx={{margin:'auto', display:"flex"}}
                                >Cancel
                                </Button>
                            </FormGroup>
                        </form>
                    </Box>
            </Paper>
        </React.Fragment>
    )
}