import MailingAddressValues from '../MailingAddress/MailingAddressValues';

export interface InsurerValues {
    insurerName     : string;
    insurerPhone    : string;
    insurerEmail    : string;
    insurerMailingAddress : MailingAddressValues
}

export interface AgencyValues {
    agencyName      : string;
    agencyPhone    : string;
    agencyMailingAddress : MailingAddressValues
}

export interface ProductValues {
    productName     : string;
    insuranceType   : string;
    insurer         : InsurerValues
}


export interface PersonValues {
    personName : {
        firstName   : string;
        middleName? : string;
        lastName    : string;
    }
    personSSN? : string;
    personMailingAddress? : MailingAddressValues;
    personPhone?    : string;
    personEmail?    : string;
    personDateOfBirth? : Date;
    personGender? : string;
    personMaritalStatus? : string;
}

export interface OperatorValues extends PersonValues {
    id: number;
    operatorType            : "ADDL" | "PRIN" | "EXCL";
    sr22                    : "N" | "Y";
    operatorLicenseNumber   : string;
    operatorLicenseState    : string;
    operatorLicenseExpirationDate : Date;
    operatorCoverageStatus : string; 
    operatorAccidentsViolations : string;
}

export interface InsuredValues extends PersonValues {}

export interface AutoValues {
    unit            : number;
    autoMake        : string;
    autoModel       : string;
    autoYear        : number;
    autoVIN         : string;
    autoSymbol      : string
}

export interface PolicyValues {
    id: number;
    policyNumber    : string;
    periodStartDate : Date;
    periodEndDate   : Date;
    product         : ProductValues;
    agency          : AgencyValues;
    insured         : InsuredValues;
    operators       : OperatorValues[];
    autoUnits       : AutoValues[]
}