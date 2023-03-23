import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { Paper, Grid, Autocomplete, Button, Typography } from '@mui/material';
import MGATextField from '../Scaffold/FieldParts/MGATextField';

import { INSURERS, InsurerItemValues, newInsurer } from './InsurerValues';
import ObjectFooter, { ObjectFooterValues } from '../Scaffold/PageParts/ObjectFooter';

export default function InsurerItem (insurerItemProps : InsurerItemValues) {

    const navigate = useNavigate();

    const { insurer } = insurerItemProps;
    const insurerUndefined = (insurer === undefined);
    const initialFormValues = !insurerUndefined ? insurer : newInsurer;

    const [formValues, setFormValues] = useState(initialFormValues);

    const objectFooterProps : ObjectFooterValues = !insurerUndefined ?
    {
        creatorName     : insurer.creatorName, 
        created         : insurer.created, 
        lastModified    : insurer.lastModified
    } :
    {   
        creatorName     : "Able Baker",
        created         : new Date(),
        lastModified    : new Date()
    }

    return (
        <Paper variant="outlined" sx={{padding: 2}}>
            <form> 
                <Typography
                    sx={{color: 'primary.main', fontSize: '1.2rem'}}
                >Insurer Header
                </Typography>

                <Grid container spacing={1}>
                    {/* group 1 Identifiers */}
                    <Grid item xs={8}>
                        <MGATextField
                            id="insurerName" name="insurerName" label="Insurer"
                            value={formValues.insurerName}
                            inputProps={{readOnly: true}}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <MGATextField
                            id="insurerID" name="insurerId" label="ID"
                            value={formValues.id}
                            inputProps={{readOnly: true}}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item xs={4}>
                        <MGATextField
                            id="insurerFEIN" name="insurerFEIN" label="FEIN"
                            value={formValues.insurerFEIN}
                            inputProps={{readOnly: true}}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <MGATextField
                            id="insurerDomicileState" name="insurerDomicileState" label="Domicile State"
                            value={formValues.insurerDomicileState}
                            inputProps={{readOnly: true}}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <MGATextField 
                            id="insurer-status" name="insurerStatus" label="Status"
                            value={formValues.insurerStatus}
                            inputProps={{readOnly: true}}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    {/* group 2 NAIC & AMBest */}
                    <Grid item xs={6} md={2}>
                        <MGATextField
                            id="naicCode" name="naicCode" label="NAIC Code"
                            value={formValues.NAICCode}
                            inputProps={{readOnly: true}}
                        />
                    </Grid>
                    <Grid item xs={6} md={2}>
                        <MGATextField
                            id="naicGroup" name="naicGroup" label="Group"
                            value={formValues.NAICGroup}
                            inputProps={{readOnly: true}}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <MGATextField
                            id="naicGroupName" name="naicGroupName" label="Group Name"
                            value={formValues.NAICGroupName}
                            inputProps={{readOnly: true}}
                        />
                    </Grid>
                    <Grid item xs={6} md={2}>
                        <MGATextField
                            id="amBestID" name="amBestID" label="AMBest ID"
                            value={formValues.AMBestID}
                            inputProps={{readOnly: true}}
                        />
                    </Grid>
                    <Grid item xs={6} md={2}>
                        <MGATextField
                            id="amBestRating" name="amBestRating" label="Rating"
                            value={formValues.AMBestRating}
                            inputProps={{readOnly: true}}
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
