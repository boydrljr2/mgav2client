import React from 'react';

import {Paper, Grid, Autocomplete } from '@mui/material';
import MGATextField from '../Scaffold/FieldParts/MGATextField';
import { USPSSTATEABBREVIATIONS } from '../Scaffold/MGAValues';

export default function MGAUSPSMailingAddressItem(props : 
    {formValues : any, 
        handleChangeMailingAddress : any
        handleChangeMailingAddressState : any}) {

    const {formValues, handleChangeMailingAddress, handleChangeMailingAddressState} = props;

    return (
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <MGATextField 
                        id="street-address" name="streetAddress" label="Street Address"
                        value={formValues.streetAddress}
                        onChange={handleChangeMailingAddress}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <MGATextField
                        id="mailing-address-city" name="city" label="City"
                        value={formValues.city}
                        onChange={handleChangeMailingAddress}
                    />
                </Grid>
                <Grid item xs={6} md={2}>
                    <Autocomplete 
                        id="mailing-address-state"
                        options={USPSSTATEABBREVIATIONS}
                        getOptionLabel={(option : any) => option.label}
                        clearOnEscape
                        value={formValues.state}
                        isOptionEqualToValue={(option, value) => option.label === value.label}
                        onChange={handleChangeMailingAddressState}
                        renderInput={(params) => 
                            <MGATextField 
                                {...params} 
                                label="State" 
                                //error={!formValid.domicileState}
                                //helperText={formErrors.domicileState}
                            />}
                    />
                </Grid>
                <Grid item xs={6} md={4}>
                    <MGATextField
                        id="mailing-address-zip" name="mailingAddressZip" label="Zip"
                        value={formValues.zip}
                        onChange={handleChangeMailingAddress}
                    />
                </Grid>
            </Grid>
    )
}
