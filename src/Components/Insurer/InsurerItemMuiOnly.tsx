import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { Paper, Grid, Autocomplete, Button } from '@mui/material';
import MGATextField from '../Scaffold/FieldParts/MGATextField';

import { MailingAddressItemValues, USPSSTATEABBREVIATIONS,
        InsurerItemValues, newInsurer, INSURERSTATUSES,
         initialInsurerFormErrors, initialInsurerFormTouches, initialInsurerFormValid  } 
         from '../Scaffold/MGAValues';

import ObjectFooter, { ObjectFooterValues } from '../Scaffold/PageParts/ObjectFooter';

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

    const handleTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormValues({...formValues, [name] : value})
    };



    return (
        <Paper variant="outlined" sx={{padding: 2}}>
            <form> 
                <Grid container spacing={1}>
                    {/* group 1 Name & ID */}
                    <Grid item xs={4}>
                        <MGATextField
                            id="name" name="name" label="Name"
                            value={formValues.name}
                            onChange={handleTextFieldChange}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <MGATextField
                            id="insurerFEIN" name="insurerFEIN" label="FEIN"
                            value={formValues.FEIN}
                            onChange={handleTextFieldChange}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <MGATextField
                            id="naicCode" name="naicCode" label="NAIC Code"
                            value={formValues.NAICCode}
                            onChange={handleTextFieldChange}
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
                            freeSolo clearOnEscape
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
                            onChange={handleTextFieldChange}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <MGATextField
                            id="naicGroupName" name="naicGroupName" label="Group Name"
                            value={formValues.NAICGroupName}
                            onChange={handleTextFieldChange}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <MGATextField
                            id="amBestID" name="amBestID" label="AMBest ID"
                            value={formValues.AMBestID}
                            onChange={handleTextFieldChange}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <MGATextField
                            id="amBestRating" name="amBestRating" label="Rating"
                            value={formValues.AMBestRating}
                            onChange={handleTextFieldChange}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <MGATextField
                            id="legacyId" name="legacyId" label="Legacy ID"
                            value={formValues.legacyId}
                            onChange={handleTextFieldChange}
                        />
                    </Grid>
                </Grid>
                <Paper variant="outlined" sx={{p:2, mb:1}}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} >
                            <MGATextField
                            id="streetAddress" name="streetAddress" label="Street"
                            value={formValues.mailingAddress.streetAddress}
                            onChange={handleTextFieldChange}
                        />
                        </Grid>
                        <Grid item xs={6}>
                            <MGATextField
                                id="city" name="city" label="City"
                                value={formValues.mailingAddress.city}
                                onChange={handleTextFieldChange}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <Autocomplete 
                                id="mailing-address-state"
                                options={USPSSTATEABBREVIATIONS}
                                getOptionLabel={(option : any) => option.label}
                                freeSolo clearOnEscape
                                value={formValues.mailingAddress.state}
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
                        <Grid item xs={3}>
                            <MGATextField
                                id="zip" name="zip" label="Zip"
                                value={formValues.mailingAddress.zip}
                                onChange={handleTextFieldChange}
                            />
                        </Grid>
                    </Grid>
                </Paper>
                {/* <MailingAddressItem {...mailingAddressItemProps }/> */}
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
            <pre>insurer {JSON.stringify(insurer, null, 2)}</pre>
            <pre>formvalues {JSON.stringify(formValues, null, 2)}</pre>
            <pre>formErrors {JSON.stringify(formErrors, null, 2)}</pre>
            <pre>formValid {JSON.stringify(formValid, null, 2)}</pre>
            <pre>formTouches {JSON.stringify(formTouches, null, 2)}</pre>
        </Paper>
    )
}
