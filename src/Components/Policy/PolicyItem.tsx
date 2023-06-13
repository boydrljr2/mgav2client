import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';

import { useForm, useFieldArray, SubmitHandler, Controller, FormProvider} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Paper, Toolbar, Grid, Tab, Button, TextField, Typography, Divider, IconButton, Collapse, Box, Switch, FormControlLabel,
         TableContainer, Table, TableHead, TableBody, TableRow, TableCell  } from '@mui/material';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { POLICIES, PolicyValues, PolicyItemProps, PolicySchema, newPolicy, 
        AutoValues, CoverageValues} 
        from '../Scaffold/MGAValues'

import { MGATableHeaderCell } from '../Scaffold/TableParts/TableParts';
import { TabPanel, tabAllyProps, MGATabs } from '../Scaffold/PageParts/TabParts';
import ObjectFooter, { ObjectFooterValues } from '../Scaffold/PageParts/ObjectFooter';

import PolicyHeader from './PolicyHeader';
import PolicyDetails from './PolicyDetails';
import InsuredDetails  from '../Insured/InsuredDetails';
import OperatorPolicyPanel from '../Operator/OperatorPolicyPanel';
import AutoPolicyPanel from '../Auto/AutoPolicyPanel';

export default function PolicyItem (policyItemProps : PolicyItemProps) {

    const navigate = useNavigate();

    const { policy } = policyItemProps;
    const policyUndefined = (policy === undefined);

    const footerProps : ObjectFooterValues = !policyUndefined ?
    {
        creatorId       : policy.creatorId,
        creatorName     : policy.creatorName, 
        created         : policy.created, 
        lastModified    : policy.lastModified
    } :
    {   
        creatorId       : uuidv4(),
        creatorName     : "Yankee Zulu",
        created         : new Date(),
        lastModified    : new Date()
    }

    const [dense, setDense] = useState(false);
    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    const methods = useForm<PolicyValues>({
        resolver: yupResolver(PolicySchema),
        defaultValues: !policyUndefined ? policy : newPolicy
    });
    
    const { handleSubmit, control, reset, formState: { errors } } = methods;
    const { fields, } = useFieldArray({
        control,
        name: "autoUnits"
    });

    const policyFormHandler : SubmitHandler<PolicyValues> = (data) => {
        console.log('Policy onSubmit data: ', data);
        methods.setValue('lastModified', new Date());
        const policyIndex = POLICIES.findIndex(policy => policy.id === data.id);
        if (policyIndex === -1) {
            POLICIES.push(data);
        } else {
            POLICIES[policyIndex] = data;
        }
        navigate('/policies');
    }


    const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDense(event.target.checked);
    };

    function ccyFormat(num: number)  {
        return`${num.toFixed(2)}`
    }

    if (policyItemProps === undefined) {
        return (
            <Typography variant="h6" color='primary.main'>Policy not found</Typography>
        )
    }

    function Row(props: { row : AutoValues, index: number }) {
        const {row } =props;
        const {index } = props;
        const [open, setOpen] = useState(false);

        return (
            <React.Fragment>
            <Paper variant="outlined" sx={{p:1, m:1, flexGrow:1, borderColor:'primary.dark'}}>
                <TableRow key={row.id} sx={{ '& > *':{borderBottom: 'unset'} }}>
                    <TableCell>
                        <IconButton 
                            aria-label="expand row" 
                            size="small"
                            sx={{maxWidth:'20px'}} 
                            onClick={() => setOpen(!open)}>
                            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </IconButton>
                    </TableCell>
                    <TableCell >
                        <Controller
                            name={`autoUnits.${index}.unit`}
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    id="auto-number" label="Unit"
                                    variant="outlined" fullWidth 
                                    sx={{maxWidth: '50px'}}
                                />
                            )}
                        />
                    </TableCell>
                    <TableCell >
                        <Controller
                            name={`autoUnits.${index}.make`}
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    id="auto-make" label="Make"
                                    variant="outlined" fullWidth 
                                />
                            )}
                        />
                    </TableCell>                            
                    <TableCell >
                        <Controller
                            name={`autoUnits.${index}.model`}
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    id="auto-model" label="Model"
                                    variant="outlined" fullWidth 
                                />
                            )}
                        />
                    </TableCell>                            
                    <TableCell >
                        <Controller
                            name={`autoUnits.${index}.year`}
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    id="auto-year" label="Year"
                                    variant="outlined" fullWidth 
                                />
                            )}
                        />
                    </TableCell>
                    <TableCell  >
                        <Controller
                            name={`autoUnits.${index}.vin`}
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    id="auto-vin" label="VIN"
                                    variant="outlined" fullWidth 
                                    sx={{minWidth:'200px'}}
                                />
                            )}
                        />
                    </TableCell>
                    <TableCell >
                        <LocalizationProvider dateAdapter={AdapterDayjs} >
                            <Controller
                                name={`autoUnits.${index}.effectiveDate`}
                                control={control}
                                render={({ field: { ref, onBlur, name, ...field }, fieldState }) => (
                                <DatePicker 
                                    {...field}
                                    inputRef={ref}
                                    label="Effective Date"
                                    renderInput={(inputProps) => (
                                        <TextField 
                                            {...inputProps}
                                            variant="outlined" fullWidth 
                                            sx={{minWidth:'150px'}}
                                        />
                                        )}
                                    />
                                )}
                            />
                        </LocalizationProvider>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Table size="small" aria-label="coverage table">
                                <TableHead>
                                    <TableRow>
                                        <MGATableHeaderCell>Coverage Type</MGATableHeaderCell>
                                        <MGATableHeaderCell>Limit</MGATableHeaderCell>
                                        <MGATableHeaderCell>Deductible</MGATableHeaderCell>
                                        <MGATableHeaderCell align="right" >Premium</MGATableHeaderCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.coverages.map((coverage, cindex) => (
                                        <TableRow key={coverage.coverageType}>
                                            <TableCell component="th" scope="row">
                                                {coverage.coverageType}
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                {coverage.coverageLimit}
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                {coverage.coverageDeductible}
                                            </TableCell>
                                            <TableCell component="th" scope="row" sx={{textAlign:'right'}}>
                                                {coverage.coveragePremium.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                        <TableRow> 
                                            <TableCell colSpan={2} />
                                            <TableCell colSpan={1} >Subtotal</TableCell>
                                            <TableCell colSpan={1} sx={{textAlign: 'right'}}>{ccyFormat(premiumSubtotal)}</TableCell>
                                        </TableRow>
                                </TableBody>
                            </Table>
                        </Collapse>
                    </TableCell>
                </TableRow>
            </Paper>
            </React.Fragment>
        )
    }

    function calculateCoveragePremiumSubtotal(items: readonly AutoValues[]) {
        return items.map(item => {
            const coverageSubtotal = item.coverages.reduce((total, coverage) => {
                return total + coverage.coveragePremium;
            }, 0);
            return { coverageSubtotal };
            }
        );
    }

    const premiumSubtotal = calculateCoveragePremiumSubtotal(fields).reduce((total, item) => total + item.coverageSubtotal, 0);

    return (
        <FormProvider {...methods}>
            <Paper variant="outlined" sx={{p:2, m:1, flexGrow:1}}>
                <form onSubmit={handleSubmit(policyFormHandler)} >
                    <PolicyHeader />
                    <ObjectFooter footerValues={footerProps} />
                    <Divider sx={{m:1, p:1}} />
                    <Grid container sx={{ width: '100%' }}>
                        <Grid item xs={12} sx={{ borderColor: 'divider', mb:2, p:1 }}>
                            <MGATabs 
                                value={tabValue} 
                                onChange={handleTabChange} 
                                aria-label="basic tabs example"
                                variant="fullWidth"
                            >
                                <Tab label="Policy Details"  {...tabAllyProps}/>
                                <Tab label="Insured Details" {...tabAllyProps} />
                                <Tab label="Operators" {...tabAllyProps} />
                                <Tab label="Auto Details" {...tabAllyProps} />
                                <Tab label="Coverages" {...tabAllyProps} />
                            </MGATabs> 
                        </Grid>
                        <TabPanel value={tabValue} index={0}> 
                            <PolicyDetails />
                        </TabPanel>
                        <TabPanel value={tabValue} index={1}> 
                            <InsuredDetails />
                        </TabPanel>
                        <TabPanel value={tabValue} index={2}> 
                            <OperatorPolicyPanel />
                        </TabPanel>
                        <TabPanel value={tabValue} index={3}> 
                            <AutoPolicyPanel /> 
                        </TabPanel>
                        <TabPanel value={tabValue} index={4}>
                            <Toolbar  variant='regular' sx={{flexGrow: 1, size:'fullWidth'}} >
                                <Grid container direction="row" spacing={2}
                                sx={{margin:'auto', justifyContent:"flex-end"}}
                                >
                                    <Grid item sx={{mr:1}}>
                                        <Typography variant='subtitle1'  sx={{color: 'primary.main'}}>
                                            Coverage Panel Toolbar: Panel buttons, User messages, nav breadcrumbs, etc.
                                        </Typography>
                                    </Grid>
                                    <Grid item sx={{mr:1}}>
                                        <Button
                                            variant="outlined" size='medium' color='primary'
                                            type="submit"
                                        >Append
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Toolbar>
                            <TableContainer component={Paper}>
                                <Table size={dense ? 'small' : 'medium'} aria-label="coverage table">
                                    <TableBody>
                                        {fields.map((row, index) => (
                                            <Row row={ row } index={ index }  />
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <FormControlLabel
                                control={<Switch checked={dense} onChange={handleChangeDense} />}
                                label="Dense"
                            />
                        </TabPanel>
                    </Grid>

                    {/* SAVE & CANCEL BUTTONS */}
                    <Divider sx={{m:1, p:1}} />
                    <Grid container direction="row" spacing={2}
                        sx={{margin:'auto', justifyContent:"flex-end"}}
                    >
                        <Grid item sx={{mr:1}}>
                            <Button
                                variant="contained" size='medium'
                                type="submit"
                            >Save All
                            </Button>
                        </Grid>
                        <Grid item sx={{mr:1}}>
                            <Button
                                variant="outlined" size='medium'
                                type="reset" onClick={() => reset()}
                            >Reset
                            </Button>
                        </Grid>
                        <Grid item sx={{mr:5}}>
                            <Button
                                variant="outlined" size='medium'
                                component={Link} to='/policies'
                            >Cancel
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </FormProvider>
    )
}
