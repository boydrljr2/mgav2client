import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { Paper, Grid, Button } from '@mui/material';
import MGATextField from '../Scaffold/FieldParts/MGATextField';

import { InsurerItemValues, newInsurer } from '../Scaffold/MGAValues';
import ObjectFooter, { ObjectFooterValues } from '../Scaffold/PageParts/ObjectFooter';

export default function InsurerItem (insurerItemProps : InsurerItemValues) {

    //const navigate = useNavigate();

    const { insurer } = insurerItemProps;
    const insurerUndefined = (insurer === undefined);
    const initialFormValues = !insurerUndefined ? insurer : newInsurer;

    const [formValues, setFormValues] = useState(initialFormValues);

    const handleTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormValues({...formValues, [name] : value})
    };

    const objectFooterProps : ObjectFooterValues = !insurerUndefined ?
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

    return (
        <Paper variant="outlined" sx={{padding: 2}}>
            <form> 
                <Grid container spacing={1}>
                    {/* group 1 Name & ID */}
                    <Grid item xs={8}>
                        <MGATextField
                            id="insurerName" name="insurerName" label="Insurer"
                            value={formValues.name}
                            onChange={handleTextFieldChange}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <MGATextField
                            id="insurerID" name="insurerId" label="ID"
                            value={formValues.id}
                            onChange={handleTextFieldChange}
                        />
                    </Grid>
                </Grid>
                {/* group 2 FEIN & Domicile State & Status */}
                <Grid container spacing={1}>
                    <Grid item xs={4}>
                        <MGATextField
                            id="insurerFEIN" name="insurerFEIN" label="FEIN"
                            value={formValues.FEIN}
                            onChange={handleTextFieldChange}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <MGATextField
                            id="insurerDomicileState" name="insurerDomicileState" label="Domicile State"
                            value={formValues.domicileState}
                            onChange={handleTextFieldChange}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <MGATextField 
                            id="insurer-status" name="insurerStatus" label="Status"
                            value={formValues.status}
                            onChange={handleTextFieldChange}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    {/* group 3 NAIC & AMBest */}
                    <Grid item xs={6} md={2}>
                        <MGATextField
                            id="naicCode" name="naicCode" label="NAIC Code"
                            value={formValues.NAICCode}
                            onChange={handleTextFieldChange}
                        />
                    </Grid>
                    <Grid item xs={6} md={2}>
                        <MGATextField
                            id="naicGroup" name="naicGroup" label="Group"
                            value={formValues.NAICGroup}
                            onChange={handleTextFieldChange}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <MGATextField
                            id="naicGroupName" name="naicGroupName" label="Group Name"
                            value={formValues.NAICGroupName}
                            onChange={handleTextFieldChange}
                        />
                    </Grid>
                    <Grid item xs={6} md={2}>
                        <MGATextField
                            id="amBestID" name="amBestID" label="AMBest ID"
                            value={formValues.AMBestID}
                            onChange={handleTextFieldChange}
                        />
                    </Grid>
                    <Grid item xs={6} md={2}>
                        <MGATextField
                            id="amBestRating" name="amBestRating" label="Rating"
                            value={formValues.AMBestRating}
                            onChange={handleTextFieldChange}
                        />
                    </Grid>
                </Grid>
                {/* group 4 Mailing Address */}
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
                        <MGATextField
                            id="state" name="state" label="State"
                            value={formValues.mailingAddress.state}
                            onChange={handleTextFieldChange}
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
                <ObjectFooter footerValues={objectFooterProps} />
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
        </Paper>
    )
}
