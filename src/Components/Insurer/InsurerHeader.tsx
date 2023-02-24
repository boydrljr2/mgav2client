import { Box, Typography, Grid } from '@mui/material';

import { InsurerValues } from '../Scaffold/MGAValues';
import { ObjectFooterValues } from '../Scaffold/PageParts/ObjectFooterValues';
import ObjectFooter from '../Scaffold/PageParts/ObjectFooter';

import MGATextField from '../Scaffold/FieldParts/MGATextField';

export default function InsurerHeader (props: {selectedInsurer: InsurerValues}) {
    
    //write a const to get insurer from insurers array with the id equal to insurerId
    const insurer = props.selectedInsurer;

    //create a footerValues object to pass to the ObjectFooter component
    const enteredDate = new Date(insurer.dateEntered);
    const lastModifiedDate = new Date(insurer.dateLastModified);
    const footerValues: ObjectFooterValues = { enteredDate, lastModifiedDate};

    return (
        <Box sx={{margin:2}}>          
            <Typography
                sx={{color: 'primary.main', fontSize: '1.2rem'}}
            >Insurer Header
            </Typography>
            <Grid container spacing={1}>
                {/* group 1 Identifiers */}
                <Grid item xs={4} md={2}>
                    <MGATextField
                        id="insurerID" name="insurerId" label="ID"
                        value={insurer.id}
                        inputProps={{readOnly: true}}
                    />
                </Grid>
                <Grid item xs={8} md={6}>
                    <MGATextField
                        id="insurerName" name="insurerName" label="Insurer"
                        value={insurer.insurerName}
                        inputProps={{readOnly: true}}
                    />
                </Grid>
                <Grid item xs={4} md={2}>
                    <MGATextField
                        id="insurerFEIN" name="insurerFEIN" label="FEIN"
                        value={insurer.insurerFEIN}
                        inputProps={{readOnly: true}}
                    />
                </Grid>
                <Grid item xs={4} md={1}>
                    <MGATextField
                        id="insurerDomicileState" name="insurerDomicileState" label="Domicile State"
                        value={insurer.insurerDomicileState}
                        inputProps={{readOnly: true}}
                    />
                </Grid>
                <Grid item xs={4} md={1}>
                    <MGATextField 
                        id="insurer-status" name="insurerStatus" label="Status"
                        value={insurer.insurerStatus}
                        inputProps={{readOnly: true}}
                    />
                </Grid>
                {/* group 2 NAIC & AMBest */}
                <Grid item xs={6} sm={2}>
                    <MGATextField
                        id="naicCode" name="naicCode" label="NAIC Code"
                        value={insurer.NAICCode}
                        inputProps={{readOnly: true}}
                    />
                </Grid>
                <Grid item xs={6} sm={2}>
                    <MGATextField
                        id="naicGroup" name="naicGroup" label="Group"
                        value={insurer.NAICGroup}
                        inputProps={{readOnly: true}}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <MGATextField
                        id="naicGroupName" name="naicGroupName" label="Group Name"
                        value={insurer.NAICGroupName}
                        inputProps={{readOnly: true}}
                    />
                </Grid>
                <Grid item xs={6} sm={2}>
                    <MGATextField
                        id="amBestID" name="amBestID" label="AMBest ID"
                        value={insurer.AMBestID}
                        inputProps={{readOnly: true}}
                    />
                </Grid>
                <Grid item xs={6} sm={2}>
                    <MGATextField
                        id="amBestRating" name="amBestRating" label="Rating"
                        value={insurer.AMBestRating}
                        inputProps={{readOnly: true}}
                    />
                </Grid>
            </Grid>
            <ObjectFooter footerValues={footerValues} />
        </Box>
    )

}