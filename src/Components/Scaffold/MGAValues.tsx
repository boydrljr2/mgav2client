export interface MailingAddressValues {
    id: number;
    name?: string;
    initial?: string;
    streetAddress: string;
    city: string;
    state: string;
    zip: string;
}

export interface InsurerValues {
    id                      : number;
    insurerFEIN             : string;
    insurerStatus           : string;
    insurerName             : string;
    insurerDomicileState    : string;
    insurerPhone?           : string;
    insurerEmail?           : string;
    insurerURL?             : string;
    insurerMailingAddress   : MailingAddressValues;
    NAICGroup?              : string;
    NAICCode?               : string;
    NAICGroupName?          : string;
    AMBestID?               : string;
    AMBestRating?           : string;
    creatorId               : number;
    creatorName             : string;
    created                 : Date;
    lastModified            : Date;
}

export interface AgencyValues {
    agencyName              : string;
    agencyMailingAddress    : MailingAddressValues
    agencyPhone?            : string;
    agencyEmail?            : string;
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
    autoSYM         : string;
    autoAGE         : number;
    autoTERR        : string;
    autoCLASS       : string;
    autoPTS         : number;
    autoSAFE?       : string;
    autoTRNS?       : string;
    autoREN?        : string;
    autoATF?        : string;
    autoFLCV?       : string;
    autoVSRC?       : string;
    autoNOWN?       : string;
    autoDEFD?       : string;
    autoMC?         : string;
    autoAV?         : string;
    autoSM?         : string;
    autoLGL?        : string;
    autoERS?        : string;
    coverages       : CoverageValues[];
    lienholders?    : LienholderValues[];
}

export interface CoverageValues {
    coverageType: string;
    coverageLimit: string;
    coverageDeductible: string;
    coveragePremium: number;
}   

export interface LienholderValues {
    lienholderName: string;
    lienholderMailingAddress: MailingAddressValues;
}

export interface PolicyValues {
    id              : number;
    policyNumber    : string;
    periodStartDate : Date;
    periodEndDate   : Date;
    endorsementDate : Date;
    product         : ProductValues;
    agency          : AgencyValues;
    insured         : InsuredValues;
    operators       : OperatorValues[];
    autoUnits       : AutoValues[];
    endorsements?   : string[];
    created         : Date;
    lastModified    : Date;
}