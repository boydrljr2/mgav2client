import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { Paper, Grid, Autocomplete, Button, Typography } from '@mui/material';
import MGATextField from '../Scaffold/FieldParts/MGATextField';

import { 
    MailingAddressItemValues, USPSSTATEABBREVIATIONS,
    InsurerItemValues, newInsurer, INSURERS, INSURERSTATUSES,
    initialInsurerFormErrors, initialInsurerFormTouches, initialInsurerFormValid  
    } from '../Scaffold/MGAValues';

import ObjectFooter, { ObjectFooterValues } from '../Scaffold/PageParts/ObjectFooter';
import MGAUSPSMailingAddressItem from '../MailingAddress/MGAUSPSMailingAddressItem';

export default function InsurerItem (insurerItemProps : InsurerItemValues) {

    const navigate = useNavigate();

    const { insurer } = insurerItemProps;
    const insurerUndefined = (insurer === undefined);

    //Set intialFormValues  
    const initialFormValues = !insurerUndefined ? insurer : newInsurer;
    const initialFormErrors = initialInsurerFormErrors;
    const initialFormTouches = initialInsurerFormTouches;
    const initialFormValid = initialInsurerFormValid;

    //Set the state variables
    const [formValues, setFormValues] = useState({...initialFormValues});
    const [formErrors, setFormErrors] = useState({...initialFormErrors});
    const [formTouches, setFormTouches] = useState({...initialFormTouches});
    const [formValid, setFormValid] = useState({...initialFormValid});

    const footerProps : ObjectFooterValues = !insurerUndefined ?
    {
        creatorId       : insurer.creatorId,
        creatorName     : insurer.creatorName, 
        created         : insurer.created, 
        lastModified    : insurer.lastModified
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

    const handleChangeMailingAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            mailingAddress : 
                {...formValues.mailingAddress, [e.target.name] : e.target.value}}
        )
    };

    const handleChangeMailingAddressState = (event: React.ChangeEvent<{}>, newValue: any) => {
        setFormValues({
            ...formValues,
            mailingAddress :
                {...formValues.mailingAddress, state : newValue}
        })
    };

    //Don't forget to update the lastModified date by running this in handleSubmit
    const updateLastModified = () => {
        setFormValues({...formValues, lastModified: new Date()})
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        updateLastModified();
        //TODO: Add validations for all the fields
        const formIsValid = Object.values(formValid).every((v)=>v);
        if (formIsValid) {
            const insurerIndex = INSURERS.findIndex(insurer => insurer.id === formValues.id);
            if (insurerIndex === -1) {
                INSURERS.push(formValues);
            } else {
                INSURERS[insurerIndex] = formValues;
            }
            navigate('/insurers');
        }
    }



    //This early return has to be called after all the useState calls otherwise React crashes
    if (insurerItemProps === undefined) {
        return (
            <Typography>
                Insurer Item Undefined 
            </Typography>
        )
    }

    return (
        <Paper variant="outlined" sx={{padding: 2}}>
            <form onSubmit={handleSubmit} > 
                <Grid container spacing={1}>
                    {/* group 1 Name & ID */}
                    <Grid item xs={4}>
                        <MGATextField
                            id="name" name="name" label="Name"
                            value={formValues.name}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <MGATextField
                            id="insurerFEIN" name="insurerFEIN" label="FEIN"
                            value={formValues.FEIN}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <MGATextField
                            id="naicCode" name="naicCode" label="NAIC Code"
                            value={formValues.NAICCode}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <Autocomplete 
                            id="insurer-status"
                            options={INSURERSTATUSES}
                            getOptionLabel={(option : any) => option.label}
                            value={formValues.status}
                            isOptionEqualToValue={(option, value) => option.label === value.label}
                            onChange={(event, newValue) => {
                                //@ts-ignore
                                setFormValues({...formValues, status : newValue})
                            }}
                            renderInput={(params) => 
                                <MGATextField 
                                    {...params} 
                                    label="Status" 
                                    error={!formValid.status}
                                    helperText={formErrors.status}
                                />}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <Autocomplete 
                            id="domicile-state"
                            options={USPSSTATEABBREVIATIONS}
                            getOptionLabel={(option : any) => option.label}
                            clearOnEscape
                            value={formValues.domicileState}
                            isOptionEqualToValue={(option, value) => option.label === value.label}
                            onChange={(event, newValue) => {
                                //@ts-ignore
                                setFormValues({...formValues, domicileState : newValue})
                            }}
                            renderInput={(params) => 
                                <MGATextField 
                                    {...params} 
                                    label="Domicile State" 
                                    error={!formValid.domicileState}
                                    helperText={formErrors.domicileState}
                                />}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <MGATextField
                            id="naicGroup" name="naicGroup" label="NAIC Group"
                            value={formValues.NAICGroup}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <MGATextField
                            id="naicGroupName" name="naicGroupName" label="Group Name"
                            value={formValues.NAICGroupName}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <MGATextField
                            id="amBestID" name="amBestID" label="AMBest ID"
                            value={formValues.AMBestID}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <MGATextField
                            id="amBestRating" name="amBestRating" label="Rating"
                            value={formValues.AMBestRating}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <MGATextField
                            id="legacyId" name="legacyId" label="Legacy ID"
                            value={formValues.legacyId}
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid>
                <Paper variant="outlined" sx={{p:2, mb:1}}>
                    <MGAUSPSMailingAddressItem
                        formValues={formValues.mailingAddress}
                        handleChangeMailingAddress={handleChangeMailingAddress}
                        handleChangeMailingAddressState={handleChangeMailingAddressState}
                    />
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
                            component={Link} to='/insurers'
                        >Cancel</Button>
                    </Grid>
                </Grid>
            </form>
            <pre>formValues {JSON.stringify(formValues, null, 2)}</pre>
        </Paper>
    )
}
