import React, { useState } from 'react'
import { Link, useNavigate }  from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';

import { useForm, SubmitHandler, Controller, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Paper, Grid, Autocomplete, TextField, FormControlLabel, Checkbox, Button, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { USPSSTATEABBREVIATIONS,
        USERS,
        INSURERS,
        ProductAssetTypeValues, PRODUCTASSETTYPES, ProductStatusValues,  PRODUCTSTATUSES, 
        ProductValues, ProductItemValues, ProductSchema, newProduct, PRODUCTS } 
        from '../Scaffold/MGAValues';

import ObjectFooter, { ObjectFooterValues } from '../Scaffold/PageParts/ObjectFooter';

export default function ProductItem(productItemProps : ProductItemValues) {

    const navigate = useNavigate();
    
    const { product } = productItemProps;
    const productUndefined = (product === undefined);
    const newProductId = uuidv4();

    const [effectiveDateValue, setEffectiveDateValue] = useState<Date | null>
        (!productUndefined ? product.effectiveDate : new Date());

    const methods = 
        useForm<ProductValues>({
            resolver: yupResolver(ProductSchema),
            defaultValues: {
                id          : (!productUndefined) ? product.id : newProductId,
                name        : (!productUndefined) ? product.name : '',
                status      : (!productUndefined) ? product.status : PRODUCTSTATUSES[0],
                assetType   : (!productUndefined) ? product.assetType : PRODUCTASSETTYPES[0],
                state       : (!productUndefined) ? product.state : USPSSTATEABBREVIATIONS[0],
                defaultRatingTerritory : (!productUndefined) ? product.defaultRatingTerritory : USPSSTATEABBREVIATIONS[0],
                effectiveDate : (!productUndefined) ? product.effectiveDate : new Date(),
                sr22        : (!productUndefined) ? product.sr22 : false,
                insurer     : (!productUndefined) ? product.insurer : INSURERS[0]
            }
        });

    const footerProps : ObjectFooterValues = !productUndefined ?
        {
            creatorId       : product.creatorId,
            creatorName     : product.creatorName, 
            created         : product.created, 
            lastModified    : product.lastModified
        } :
        {   
            creatorId       : uuidv4(),
            creatorName     : "Yankee Zulu",
            created         : new Date(),
            lastModified    : new Date()
        }

    const { control,handleSubmit, watch, formState, 
        formState: { errors, dirtyFields, isDirty, isValid, touchedFields} } 
        = methods;


    const productFormHandler : SubmitHandler<ProductValues> = (data) => {
        console.log('onSubmit data: ', data);
        methods.setValue('lastModified', new Date());
        const productIndex = PRODUCTS.findIndex(product => product.id === data.id);
        if (productIndex === -1) {
            PRODUCTS.push(data);
        } else {
            PRODUCTS[productIndex] = data;
        }
        navigate('/products');

    }

    //This early return has to be called after all the useState calls otherwise React crashes
    if (productItemProps === undefined) {
        return (
            <Typography>
                Insurer Item Undefined 
            </Typography>
        )
    }
    
    
    return (
        <FormProvider {...methods}>
            <Paper sx={{p:2}}>
                <form onSubmit={handleSubmit(productFormHandler)}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Controller
                                name="name"
                                control={control}
                                render={({field}) => (
                                    <TextField
                                        {...field}
                                        label="Name"
                                        variant="outlined" sx={{m:1}} fullWidth
                                        error={!!errors.name}
                                        helperText={errors.name?.message}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Controller
                                name="insurer.name"
                                control={control}
                                render={({field}) => (
                                    <TextField
                                        {...field}
                                        label="Insurer"
                                        variant="outlined" sx={{m:1}} fullWidth
                                        error={!!_.get(errors, 'insurer.name' , null)}
                                        //@ts-ignore
                                        helperText={_.get(errors, 'insurer.name.message', '')}
                                    />
                                )}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={4} md={2} >
                            <Controller 
                                name="status"
                                control={control}
                                render={({field}) => (
                                    <Autocomplete {...field}
                                        id="status" 
                                        options={PRODUCTSTATUSES}
                                        getOptionLabel={(option) => option.label}
                                        isOptionEqualToValue={(option, value) => option.value === value.value}
                                        onChange={( event, newValue) => {
                                            field.onChange(newValue);
                                        }}
                                        renderInput={(field) => 
                                            <TextField 
                                                {...field} 
                                                label="Status"
                                                variant="outlined" sx={{m:1}} fullWidth
                                                error={!!errors.status}
                                                helperText={errors.status?.message}
                                            />
                                        }
                                    />   
                                )}
                            />
                        </Grid>
                        <Grid item xs={4} md={2} >
                            <Controller 
                                name="assetType"
                                control={control}
                                render={({field}) => (
                                    <Autocomplete {...field}
                                        id="assetType" 
                                        options={PRODUCTASSETTYPES}
                                        getOptionLabel={(option) => option.label}
                                        isOptionEqualToValue={(option, value) => option.value === value.value}
                                        onChange={( event, newValue) => {
                                            field.onChange(newValue);
                                        }}
                                        renderInput={(field) => 
                                            <TextField 
                                                {...field} 
                                                label="Asset Type"
                                                variant="outlined" sx={{m:1}} fullWidth
                                                error={!!errors.assetType}
                                                helperText={errors.assetType?.message }
                                            />}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={4} md={2} >
                            <Controller 
                                name="state"
                                control={control}
                                render={({field}) => (
                                    <Autocomplete {...field}
                                        id="status" 
                                        options={USPSSTATEABBREVIATIONS}
                                        getOptionLabel={(option) => option.label}
                                        isOptionEqualToValue={(option, value) => option.value === value.value}
                                        onChange={( event, newValue) => {
                                            field.onChange(newValue);
                                        }}
                                        renderInput={(field) => 
                                            <TextField 
                                                {...field} 
                                                label="State"
                                                variant="outlined" sx={{m:1}} fullWidth
                                                error={!!errors.state}
                                                helperText={errors.state?.message}
                                            />}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={4} md={2} >
                            <Controller 
                                name="defaultRatingTerritory"
                                control={control}
                                render={({field}) => (
                                    <Autocomplete {...field}
                                        id="defaultRatingTerritory" 
                                        options={USPSSTATEABBREVIATIONS}
                                        getOptionLabel={(option) => option.label}
                                        isOptionEqualToValue={(option, value) => option.value === value.value}
                                        onChange={( event, newValue) => {
                                            field.onChange(newValue);
                                        }}
                                        renderInput={(field) => 
                                            <TextField 
                                                {...field} 
                                                label="Default Rating Territory"
                                                variant="outlined" sx={{m:1}} fullWidth
                                                error={!!errors.defaultRatingTerritory}
                                                helperText={errors.defaultRatingTerritory?.message}
                                            />}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={4} md={2} >
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <Controller
                                    name="effectiveDate"
                                    control={control}
                                    render={({field: { ref, onBlur, name, ...field}, fieldState}) => (
                                        <DatePicker
                                            {...field}
                                            inputRef={ref}
                                            label="Effective Date"
                                            renderInput={(inputProps) => (
                                                <TextField
                                                    {...inputProps}
                                                    variant="outlined" sx={{m:1}} fullWidth
                                                    onBlur={onBlur}
                                                    error={!!errors.effectiveDate}
                                                    helperText={errors.effectiveDate?.message}
                                                />
                                            )}
                                        />
                                    )}
                                />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={4} md={2} >
                            <Controller 
                                name="sr22"
                                control={control}
                                render={({field: {onChange, value, ...field}}) => (
                                    <FormControlLabel 
                                        sx={{ mt:2, ml:5, alignItems: 'center'}}
                                        label="SR22"
                                        labelPlacement="start"
                                        control={
                                            <Checkbox
                                                sx={{mt:0}} 
                                                onChange={onChange} 
                                                checked={value} {...field} 
                                            />
                                        }
                                    />
                                )}
                            />
                        </Grid>
                    </Grid>
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
                                    component={Link} to={'/products'}
                                >Cancel</Button>
                            </Grid>
                    </Grid>
                </form>
            </Paper>
        </FormProvider>
        
    )
}
