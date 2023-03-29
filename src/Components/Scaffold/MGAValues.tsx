import { v4 as uuidv4 } from 'uuid';

//MAILING ADDRESS


export interface USPSStateAbbreviationValues {
    label: string;
    value: string;
}

export interface MailingAddressValues {
    id              : string;
    name?           : string;
    initial?        : string;
    streetAddress   : string;
    city            : string;
    state           : USPSStateAbbreviationValues;
    zip             : string;
}

export interface MailingAddressItemValues {
    mailingAddress  : MailingAddressValues;
}

//array of all 50 US States ++
export const USPSSTATEABBREVIATIONS : Array<USPSStateAbbreviationValues>  = [
    { label: 'Select a State', value: ''},
    { label: 'Alabama', value: 'AL' },
    { label: 'Alaska', value: 'AK' },
    { label: 'American Samoa', value: 'AS' },
    { label: 'Arizona', value: 'AZ' },
    { label: 'Arkansas', value: 'AR' },
    { label: 'California', value: 'CA' },
    { label: 'Colorado', value: 'CO' },
    { label: 'Connecticut', value: 'CT' },
    { label: 'Delaware', value: 'DE' },
    { label: 'District Of Columbia', value: 'DC' },
    { label: 'Federated States Of Micronesia', value: 'FM' },
    { label: 'Florida', value: 'FL' },
    { label: 'Georgia', value: 'GA' },
    { label: 'Guam', value: 'GU' },
    { label: 'Hawaii', value: 'HI' },
    { label: 'Idaho', value: 'ID' },
    { label: 'Illinois', value: 'IL' },
    { label: 'Indiana', value: 'IN' },
    { label: 'Iowa', value: 'IA' },
    { label: 'Kansas', value: 'KS' },
    { label: 'Kentucky', value: 'KY' },
    { label: 'Louisiana', value: 'LA' },
    { label: 'Maine', value: 'ME' },
    { label: 'Marshall Islands', value: 'MH' },
    { label: 'Maryland', value: 'MD' },
    { label: 'Massachusetts', value: 'MA' },
    { label: 'Michigan', value: 'MI' },
    { label: 'Minnesota', value: 'MN' },
    { label: 'Mississippi', value: 'MS' },
    { label: 'Missouri', value: 'MO' },
    { label: 'Montana', value: 'MT' },
    { label: 'Nebraska', value: 'NE' },
    { label: 'Nevada', value: 'NV' },
    { label: 'New Hampshire', value: 'NH' },
    { label: 'New Jersey', value: 'NJ' },
    { label: 'New York', value: 'NY' },
    { label: 'New Mexico', value: 'NM' },
    { label: 'North Carolina', value: 'NC' },
    { label: 'North Dakota', value: 'ND' },
    { label: 'Ohio', value: 'OH' },
    { label: 'Oklahoma', value: 'OK' },
    { label: 'Oregon', value: 'OR' },
    { label: 'Pennsylvania', value: 'PA' },
    { label: 'Puerto Rico', value: 'PR' },
    { label: 'Rhode Island', value: 'RI' },
    { label: 'South Carolina', value: 'SC' },
    { label: 'South Dakota', value: 'SD' },
    { label: 'Tennessee', value: 'TN' },
    { label: 'Texas', value: 'TX' },
    { label: 'Utah', value: 'UT' },
    { label: 'Vermont', value: 'VT' },
    { label: 'Virgin Islands', value: 'VI' },
    { label: 'Virginia', value: 'VA' },
    { label: 'Washington', value: 'WA' },
    { label: 'West Virginia', value: 'WV' },
    { label: 'Wisconsin', value: 'WI' },
    { label: 'Wyoming', value: 'WY' },
    { label: 'Armed Forces Americas', value: 'AA' },
    { label: 'Armed Forces Europe', value: 'AE' },
    { label: 'Armed Forces Pacific', value: 'AP' },
    { label: 'Alberta', value: 'AB' },
    { label: 'British Columbia', value: 'BC' },
    { label: 'Manitoba', value: 'MB' },
    { label: '', value: ''}
]

//PERSON
export interface PersonValues {
    id      : string;
    name : {
        first   : string;
        middle? : string;
        last    : string;
    }
    SSN? : string;
    mailingAddress? : MailingAddressValues;
    phone?    : string;
    email?    : string;
    dateOfBirth? : Date;
    gender? : string;
    maritalStatus? : string;
}

//USERS
export const user1Id = uuidv4();
export const user2Id = uuidv4();

export interface RoleValues {
    label: string;
    value: string;
}

export const ROLES : Array<RoleValues> = [
    {label: 'User', value: 'User'},
    {label: 'Administrator', value: 'Administrator'}, 
]

export interface UserValues {
    id          : string;
    name        : string;
    email       : string;
    password    : string;
    image       : string;
    role        : RoleValues;
    creatorId   : string;
    creatorName : string;
    created     : Date;
    lastModified: Date;
}

export interface UserItemValues {
    user? : UserValues;
}

export const USERS : Array<UserValues> = [
    {
        id          : user1Id,
        name        : "Able Baker",
        email       : "able@baker.com",
        password    : "passwordAB",
        image       : "https://this-person-does-not-exist.com/de",
        role        : {label: "Administrator", value: "Administrator"},
        creatorId   : user1Id,
        creatorName : "Able Baker",
        created     : new Date(),
        lastModified: new Date()
    },
    {
        id          : user2Id,
        name        : "Charlie Dog",
        email       :   "charlie@dog.com",
        password    : "passwordCD",
        image       : "https://this-person-does-not-exist.com/de",
        role        : {label : "User", value: "User"},
        creatorId   : user1Id,
        creatorName : "Able Baker",
        created     : new Date(),
        lastModified: new Date()
    }
]


export const newUser : UserValues = { 
    id          : uuidv4(),
    name        : '',
    email       : '',
    password    : '',
    image       : '',
    role        : ROLES[0],
    creatorId   : USERS[0].id,
    creatorName : USERS[0].name,
    created     : new Date(),
    lastModified: new Date()
}


//INSURER---------------------------------------------------------------------
export const insurer1Id = uuidv4();
export const insurer2Id = uuidv4();

export interface InsurerStatusValues {
    label: string;
    value: string;
}

export const INSURERSTATUSES : Array<InsurerStatusValues> = [
    {label: 'Prospect', value: 'Prospect'},
    {label: 'Pending', value: 'Pending'},
    {label: 'Active', value: 'Active'},
    {label: 'Suspended', value: 'Suspended'}, 
]

export interface InsurerValues {
    id                      : string;
    name                    : string;
    FEIN                    : string;
    legacyId?               : string;
    status                  : InsurerStatusValues;
    domicileState           : USPSStateAbbreviationValues;
    phone?                  : string;
    principalEmail?         : string;
    URL?                    : string;
    mailingAddress          : MailingAddressValues;
    NAICGroup?              : string;
    NAICCode?               : string;
    NAICGroupName?          : string;
    AMBestID?               : string;
    AMBestRating?           : string;
    creatorId               : string;
    creatorName             : string;
    created                 : Date;
    lastModified            : Date;
}

export interface InsurerItemValues {
    insurer? : InsurerValues;
}

export const newInsurer : InsurerValues = {
    id                      : uuidv4(),
    FEIN                    : '',
    legacyId                : '',
    status                  : INSURERSTATUSES[2],
    name                    : '',
    domicileState           : USPSSTATEABBREVIATIONS[0],
    phone                   : '',
    principalEmail          : '',
    URL                     : '',
    mailingAddress          : {
        id              : uuidv4(),
        name            : '',
        streetAddress   : '',
        city            : '',
        state           : USPSSTATEABBREVIATIONS[0],
        zip             : ''
    },
    NAICGroup               : '',
    NAICCode                : '',
    NAICGroupName           : '',
    AMBestID                : '',
    AMBestRating            : '',
    creatorId               : user1Id,
    creatorName             : USERS[0].name,
    created                 : new Date(),
    lastModified            : new Date()
}

export const initialInsurerFormErrors = {
    id                      : '',
    FEIN                    : '',
    legacyId                : '',
    status                  : '',
    name                    : '',
    domicileState           : '',
    phone                   : '',
    principalEmail          : '',
    URL                     : '',
    mailingAddress          : {
        id              : '',
        name            : '',
        streetAddress   : '',
        city            : '',
        state           : '',
        zip             : ''
    },
    NAICGroup               : '',
    NAICCode                : '',
    NAICGroupName           : '',
    AMBestID                : '',
    AMBestRating            : '',
    creatorId               : '',
    creatorName             : '',
    created                 : '',
    lastModified            : ''
}

export const initialInsurerFormTouches = {
    id                      : false,
    FEIN                    : false,
    legacyId                : false,
    status                  : false,
    name                    : false,
    domicileState           : false,
    phone                   : false,
    principalEmail          : false,
    URL                     : false,
    mailingAddress          : {
        id              : false,
        name            : false,
        streetAddress   : false,
        city            : false,
        state           : false,
        zip             : false
    },
    NAICGroup               : false,
    NAICCode                : false,
    NAICGroupName           : false,
    AMBestID                : false,
    AMBestRating            : false,
    creatorId               : false,
    creatorName             : false,
    created                 : false,
    lastModified            : false
}

export const initialInsurerFormValid = {
    id                      : true,
    FEIN                    : true,
    legacyId                : true,
    status                  : true,
    name                    : true,
    domicileState           : true,
    phone                   : true,
    principalEmail          : true,
    URL                     : true,
    mailingAddress          : {
        id              : true,
        name            : true,
        streetAddress   : true,
        city            : true,
        state           : true,
        zip             : true
    },
    NAICGroup               : true,
    NAICCode                : true,
    NAICGroupName           : true,
    AMBestID                : true,
    AMBestRating            : true,
    creatorId               : true,
    creatorName             : true,
    created                 : true,
    lastModified            : true
}

export const INSURERS   : InsurerValues[] = [
    {   
        id              : insurer1Id,
        FEIN            : '36-2222222',
        legacyId        : '00225',
        status          : INSURERSTATUSES[2],
        name            : 'United Equitable Insurance Company',
        phone           : '800-234-6926',
        principalEmail  : 'service@ueilink.com',
        mailingAddress: {
                id              : uuidv4(),
                name            : "UEIC Headquarters",
                streetAddress   : "9040 Waukegan Road, Suite 100",
                city            : "Morton Grove",
                state           : USPSSTATEABBREVIATIONS[17],
                zip             : "60053"
            },
        domicileState   : USPSSTATEABBREVIATIONS[17],
        NAICGroup       : '167',
        NAICCode        : '24910',
        NAICGroupName   : 'United Equitable Group',
        AMBestID        : '12345',
        AMBestRating    : 'A+',
        creatorId       : user1Id,
        creatorName     : USERS[0].name,
        created         : new Date(),
        lastModified    : new Date()
    },
    {   
        id              : insurer2Id,
        FEIN            : '36-11111111',
        legacyId        : '20228',
        status          : INSURERSTATUSES[2],
        name            : 'American Heartland Insurance Company',
        phone           : '847-583-4800',
        principalEmail  : 'service@ahiclink.com',
        mailingAddress: {
                id              : uuidv4(),
                name            : "AHIC Headquarters",
                streetAddress   : "9040 Waukegan Road, Suite 200",
                city            : "Morton Grove",
                state           : USPSSTATEABBREVIATIONS[17],
                zip             : "60053"
            },
        domicileState   : USPSSTATEABBREVIATIONS[17],
        NAICGroup       : '167',
        NAICCode        : '24910',
        NAICGroupName   : 'United Equitable Group',
        AMBestID        : 'A+',
        AMBestRating    : 'A+',
        creatorId       : user1Id,
        creatorName     : USERS[0].name,
        created         : new Date(),
        lastModified    : new Date()
    }
]


//----------------  AGENCY ------------ AGENCY -----------------
export const agency1Id = uuidv4();
export const agency2Id = uuidv4();
export const agency3Id = uuidv4();
export const agency4Id = uuidv4();

export interface AgencyStatusValues {
    label: string;
    value: string;
}

export const AGENCYSTATUSES : Array<AgencyStatusValues> = [
    {label: 'Prospect', value: 'Prospect'},
    {label: 'Pending', value: 'Pending'},
    {label: 'Active', value: 'Active'},
    {label: 'Suspended', value: 'Suspended'}, 
]

export interface AgencyValues {
    id                  : string;
    astecNumber         : string;
    name                : string;
    irsName?            : string; //Company name for Corp, personal name for individual agent
    taxId               : string; //FEIN or SSN
    phone?              : string;
    principalEmail?     : string;
    documentEmail?      : string;
    website?            : string;
    mailingAddress      : MailingAddressValues;
    contact             : PersonValues;
    status              : AgencyStatusValues;
    licenseNumber?      : string;
    licenseDate?        : Date;
    licenseExpirationDate?  : Date;
    prscmp?             : string;
    appointmentStatus?  : string;
    agentGrade?         : string;
    headquarterAgent?   : string;
    locationCode?       : string;
    commissionType?     : string;
    creatorId           : string;
    creatorName         : string;
    created             : Date;
    lastModified        : Date;
}

export interface AgencyItemValues {
    agency? : AgencyValues;
}

export const newAgency : AgencyValues = {
    id                  : uuidv4(),
    astecNumber         : '',
    name                : '',
    taxId               : '',
    phone               : '',
    principalEmail      : '',
    documentEmail       : '',
    website             : '',
    mailingAddress      : {
        id              : uuidv4(),
        streetAddress   : '',
        city            : '',
        state           : USPSSTATEABBREVIATIONS[0],
        zip             : ''
    },
    contact             : {
        id              : uuidv4(),
        name      : {
            first   : '',
            last    : ''
        },
        phone           : '',
        email           : ''
    },
    status              : AGENCYSTATUSES[0],
    creatorId           : user1Id,
    creatorName         : USERS[0].name,
    created             : new Date(),
    lastModified        : new Date()
}


export const AGENCIES : AgencyValues[] = [
    {
        id              : agency1Id,
        astecNumber     : "123456",
        name            : "Insure On The Spot Agency",
        taxId           : "36-1111111",
        phone           : "1-773-202-45060",
        principalEmail  : "support@iots.com",
        documentEmail   : "documents@iots.com",
        website         : "https://www.insuranceonthespot.com",
        status          : AGENCYSTATUSES[2],
        mailingAddress  : {
            id              : uuidv4(),
            streetAddress   : "5485 N Elston Ave",
            city            : "Chicago",
            state           : USPSSTATEABBREVIATIONS[17],
            zip             : "60630"
        },
        contact         : {
            id      : uuidv4(),
            name    : {
                first   : "John",
                last    : "Doe"
            },
            phone     : "1-773-202-45060",
            email     : "j@iots.com"
        },
        creatorId       : user1Id,
        creatorName     : USERS[0].name,
        created         : new Date(),
        lastModified    : new Date()
    },
    {
        id              : agency2Id,
        astecNumber     : "027034",
        name            : "Freeway Insurance Serv Amercia LLC",
        taxId           : "22-1234567",
        phone           : "(312) 517-9046",
        principalEmail  : "support@freewayinsure.com",
        documentEmail   : "documents@freewayinsure.com",
        website         : "https://www.freewayinsurance.com",
        status          : AGENCYSTATUSES[2],
        mailingAddress : {
            id              : uuidv4(),
            streetAddress   : "4712 W Cermak Rd",
            city            : "Cicero",
            state           : USPSSTATEABBREVIATIONS[17],
            zip             : "60804"
        },
        contact : {
            id              : uuidv4(),
            name    : {
                first   : "Golf",
                last    : "Hotel"
            },
            phone       : "1-770-202-45060",
            email       : "golf@freewayinsure.com"
        },
        creatorId       : user1Id,
        creatorName     : USERS[0].name,
        created         : new Date(),
        lastModified    : new Date()
    },
    {
        id              : agency3Id,
        astecNumber     : "000224",
        name            : "CRC Insurance Services",
        taxId           : "33-1234567",
        phone           : "770-392-2700",
        principalEmail  : "support@crcis.com",
        documentEmail   : "docs@crcis.com",
        website         : "https://www.crcinsurance.com",
        status          : AGENCYSTATUSES[2],
        mailingAddress : {
            id              : uuidv4(),
            streetAddress   : "5485 N Elston Ave",
            city            : "Atlanta",
            state           : USPSSTATEABBREVIATIONS[11],
            zip             : "60630"
        },
        contact : {
            id              : uuidv4(),
            name    : {
                first   : "Echo",
                last    : "Foxtrot"
            },
            phone     : "1-770-202-45060",
            email     : "e@crcinsurance.com"
        },
        creatorId       : user1Id,
        creatorName     : USERS[0].name,
        created         : new Date(),
        lastModified    : new Date()
    },
]


//------------  PRODUCT   ------------ PRODUCT -------------------------//
export interface ProductValues {
    name            : string;
    insuranceType   : string;
    insurer         : InsurerValues
}


//------------ POLICY --------------- POLICY ----------------------------------------//
export const policy1Id = uuidv4();
export const policy2Id = uuidv4();

export interface OperatorValues extends PersonValues {
    operatorType                    : "ADDL" | "PRIN" | "EXCL";
    sr22                            : "N" | "Y";
    operatorLicenseNumber           : string;
    operatorLicenseState            : USPSStateAbbreviationValues;
    operatorLicenseExpirationDate   : Date;
    operatorCoverageStatus          : string; 
    operatorAccidentsViolations     : string;
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
    id              : string;
    policyNumber    : string;
    periodStartDate : Date;
    periodEndDate   : Date;
    endorsementDate : Date;
    creatorId       : string;
    creatorName     : string;
    created         : Date;
    lastModified    : Date;
    product         : ProductValues;
    agency          : AgencyValues;
    insured         : InsuredValues;
    operators       : OperatorValues[];
    autoUnits       : AutoValues[];
    endorsements?   : string[];
}

export interface PolicyItemValues {
    policy? : PolicyValues
}

export const POLICIES : Array<PolicyValues> = [
    {
        id              : policy1Id,
        policyNumber    : "PPW1303522",
        periodStartDate : new Date("01-01-2020"),
        periodEndDate   : new Date("12-31-2020"),
        endorsementDate : new Date("12-21-2019"),
        creatorId       : USERS[0].id,
        creatorName     : USERS[0].name,
        created         : new Date(),
        lastModified    : new Date(),
        product         : {
            name            : "Personal Automobile Insurance Policy",
            insuranceType   : "Personal Automobile Insurance",
            insurer         : INSURERS[0],
        },
        agency        : AGENCIES[0],
        insured        : {
            id        : uuidv4(),
            name     : {
                first   : "Esmeralda",
                last    : "Zavala"
            },
            mailingAddress   : {
                id              : uuidv4(),
                streetAddress   : "714 Lenox Ave",
                city            : "Waukegan",
                state           : USPSSTATEABBREVIATIONS[17],
                zip             : "60085"
            },
            phone    : "1-847-123-1234",
            email :   "esmazavala@gmail.com"
        },
        operators       : [
            {
                id                          : uuidv4(),
                operatorType                : "PRIN",
                sr22                        : "N",
                operatorLicenseNumber       : "A1234567",
                operatorLicenseState        : USPSSTATEABBREVIATIONS[17],
                operatorLicenseExpirationDate : new Date("12-31-2020"),
                operatorCoverageStatus      : "COV",
                name     : {
                    first   : "Esmeralda",
                    middle  : '',
                    last    : "Zavala"
                },
                dateOfBirth           : new Date("02-19-1976"),
                operatorAccidentsViolations : "09/01/18(V) 08/01/20(V) 11/01/20(V)",
            },
            {
                id                      : uuidv4(),
                operatorType            : "ADDL",
                sr22                    : "N",
                operatorLicenseNumber   : "A1234567",
                operatorLicenseState    : USPSSTATEABBREVIATIONS[17],
                operatorLicenseExpirationDate : new Date("12-31-2025"),
                operatorCoverageStatus  : "COV",
                name              : {
                    first   : "Yasmeen",
                    middle  : '',
                    last    : "Lopez"
                },
                dateOfBirth : new Date("02-19-1999"),
                operatorAccidentsViolations : ""
            },
            {
                id                      : uuidv4(),
                operatorType            : "EXCL",
                sr22                    : "N",
                operatorLicenseNumber   : "A1234567",
                operatorLicenseState    : USPSSTATEABBREVIATIONS[17],
                operatorLicenseExpirationDate : new Date("01-31-2025"),
                operatorCoverageStatus  : "NONE",
                name              : {
                    first   : "Fernando",
                    middle  : '',
                    last    : "Sanchez"
                },
                dateOfBirth : new Date("06-19-1975"),
                operatorAccidentsViolations : ""
            },
            {
                id                      : uuidv4(),
                operatorType            : "EXCL",
                sr22                    : "N",
                operatorLicenseNumber   : "A7654321",
                operatorLicenseState    : USPSSTATEABBREVIATIONS[17],
                operatorLicenseExpirationDate : new Date("12-31-2023"),
                operatorCoverageStatus  : "NONE",
                name              : {
                    first   : "Janette",
                    middle  : '',
                    last    : "Lopez"
                },
                dateOfBirth : new Date("06-19-2004"),
                operatorAccidentsViolations : ""
            }

        ],
        autoUnits        : [
            {
                unit            : 1,
                autoMake        : "Honda",
                autoModel       : "Odyssey",
                autoYear        : 2006,
                autoVIN         : "5FNRL38436B082307",
                autoSYM         : "10",
                autoAGE         : 16,
                autoTERR        : "40",
                autoCLASS       : "4T",
                autoPTS         : 0,
                autoATF         : "1",
                autoFLCV        : "Y",
                autoMC         : "Y",
                coverages       : [
                    {
                        coverageType    : "A. Bodily Injury",
                        coverageLimit   : "$25,000 each person, $50,000 each accident",
                        coverageDeductible : " ",
                        coveragePremium : 82.00
                    },
                    {
                        coverageType    : "B. Porperty Damage",
                        coverageLimit   : "$20,000 each accident",
                        coverageDeductible : " ",
                        coveragePremium : 80.00
                    },
                    {
                        coverageType    : "C. Automobile Medical Payments",
                        coverageLimit   : "$- per person",
                        coverageDeductible : " ",
                        coveragePremium : 0.00
                    },
                    {
                        coverageType    : "D. Comprehensive",
                        coverageLimit   : "Actual Cash Value less deductible",
                        coverageDeductible : "$500",
                        coveragePremium : 183.00
                    },
                    {
                        coverageType    : "E. Collision",
                        coverageLimit   : "Actual Cash Value less deductible",
                        coverageDeductible : "$500",
                        coveragePremium : 0
                    },
                    {
                        coverageType    : "J. Uninsured Motorist Bodily Injury",
                        coverageLimit   : "$25,000 each person, $50,000 each accident",
                        coverageDeductible : " ",
                        coveragePremium : 42.00
                    },
                    {
                        coverageType    : "K. Underinsured Motorist Property Damage",
                        coverageLimit   : " ",
                        coverageDeductible : "$250 per accident",
                        coveragePremium : 0.00
                    },
                    {
                        coverageType    : "Towing",
                        coverageLimit   : " ",
                        coverageDeductible : " ",
                        coveragePremium : 0.00
                    },
                    {
                        coverageType    : "Rental",
                        coverageLimit   : " ",
                        coverageDeductible : " ",
                        coveragePremium : 20.00
                    },
                    {
                        coverageType    : "Additonal Coverages",
                        coverageLimit   : " ",
                        coverageDeductible : " ",
                        coveragePremium : 0
                    }
                ],
                lienholders     : [
                    {
                        lienholderName  : "Bank of America",
                        lienholderMailingAddress : {
                            id              : uuidv4(),
                            streetAddress   : "123 Main Street",
                            city            : "Chicago",
                            state           : USPSSTATEABBREVIATIONS[17],
                            zip             : "60606"
                        }
                    }
                ]
            },
            {
                unit            : 2,
                autoMake        : "BMW",
                autoModel       : "328XI",
                autoYear        : 2007,
                autoVIN         : "WBAVB735X7PZ12345",
                autoSYM         : "10",
                autoAGE         : 15,
                autoTERR        : "40",
                autoCLASS       : "4T",
                autoPTS         : 7,
                autoATF         : "1",
                autoFLCV        : "Y",
                autoMC         : "Y",
                coverages       : [
                    {
                        coverageType    : "A. Bodily Injury",
                        coverageLimit   : "$25,000 each person, $50,000 each accident",
                        coverageDeductible : " ",
                        coveragePremium : 89.00
                    },
                    {
                        coverageType    : "B. Porperty Damage",
                        coverageLimit   : "$20,000 each accident",
                        coverageDeductible : " ",
                        coveragePremium : 92.00
                    },
                    {
                        coverageType    : "C. Automobile Medical Payments",
                        coverageLimit   : "$- per person",
                        coverageDeductible : " ",
                        coveragePremium : 0.00
                    },
                    {
                        coverageType    : "D. Comprehensive",
                        coverageLimit   : " ",
                        coverageDeductible : "$500",
                        coveragePremium : 332.00
                    },
                    {
                        coverageType    : "E. Collision",
                        coverageLimit   : " ",
                        coverageDeductible : "$500",
                        coveragePremium : 0.00
                    },
                    {
                        coverageType    : "J. Uninsured Motorist Bodily Injury",
                        coverageLimit   : "$25,000 each person, $50,000 each accident",
                        coverageDeductible : " ",
                        coveragePremium : 62.00
                    },
                    {
                        coverageType    : "K. Underinsured Motorist Property Damage",
                        coverageLimit   : " ",
                        coverageDeductible : "$250 each accident",
                        coveragePremium : 0.00
                    },
                    {
                        coverageType    : "Towing",
                        coverageLimit   : " ",
                        coverageDeductible : " ",
                        coveragePremium : 0.00
                    },
                    {
                        coverageType    : "Rental",
                        coverageLimit   : " ",
                        coverageDeductible : " ",
                        coveragePremium : 20.00
                    },
                    {
                        coverageType    : "Additonal Coverages",
                        coverageLimit   : " ",
                        coverageDeductible : " ",
                        coveragePremium : 0.00
                    }
                ] 
            }
        ],
        endorsements        : [ "IL01264A", "IL01-001", "IL01-003" ],
    }
]

export const newPolicy : PolicyValues = {
        id              : uuidv4(),
        policyNumber    : "",
        periodStartDate : new Date(),
        periodEndDate   : new Date(),
        endorsementDate : new Date(),
        creatorId       : user1Id,
        creatorName     : USERS[0].name,
        created         : new Date(),
        lastModified    : new Date(),
        product         : {
            name            : "",
            insuranceType   : "",
            insurer         : INSURERS[0],
        },
        agency        : AGENCIES[0],
        insured        : {
            id        : uuidv4(),
            name     : {
                first   : "",
                last    : ""
            },
            mailingAddress   : {
                id              : uuidv4(),
                streetAddress   : "",
                city            : "",
                state           : USPSSTATEABBREVIATIONS[0],
                zip             : ""
            },
            phone    : "",
            email :   ""
        },
        operators       : [
            {
                id                          : uuidv4(),
                operatorType                : "PRIN",
                sr22                        : "N",
                operatorLicenseNumber       : "",
                operatorLicenseState        : USPSSTATEABBREVIATIONS[17],
                operatorLicenseExpirationDate : new Date(),
                operatorCoverageStatus      : "COV",
                name     : {
                    first   : "",
                    middle  : '',
                    last    : ""
                },
                dateOfBirth           : new Date(),
                operatorAccidentsViolations : "",
            }
        ],
        autoUnits        : [
            {
                unit            : 1,
                autoMake        : "",
                autoModel       : "",
                autoYear        : 0,
                autoVIN         : "",
                autoSYM         : "",
                autoAGE         : 0,
                autoTERR        : "",
                autoCLASS       : "",
                autoPTS         : 0,
                autoATF         : "",
                autoFLCV        : "",
                autoMC         : "",
                coverages       : [
                    {
                        coverageType    : "A. Bodily Injury",
                        coverageLimit   : "$25,000 each person, $50,000 each accident",
                        coverageDeductible : " ",
                        coveragePremium : 0
                    },
                    {
                        coverageType    : "B. Porperty Damage",
                        coverageLimit   : "$20,000 each accident",
                        coverageDeductible : " ",
                        coveragePremium : 0
                    },
                    {
                        coverageType    : "C. Automobile Medical Payments",
                        coverageLimit   : "$- per person",
                        coverageDeductible : " ",
                        coveragePremium : 0.00
                    },
                    {
                        coverageType    : "D. Comprehensive",
                        coverageLimit   : "Actual Cash Value less deductible",
                        coverageDeductible : "",
                        coveragePremium : 0
                    },
                    {
                        coverageType    : "E. Collision",
                        coverageLimit   : "Actual Cash Value less deductible",
                        coverageDeductible : "",
                        coveragePremium : 0
                    },
                    {
                        coverageType    : "J. Uninsured Motorist Bodily Injury",
                        coverageLimit   : "$25,000 each person, $50,000 each accident",
                        coverageDeductible : " ",
                        coveragePremium : 0
                    },
                    {
                        coverageType    : "K. Underinsured Motorist Property Damage",
                        coverageLimit   : " ",
                        coverageDeductible : "",
                        coveragePremium : 0.00
                    },
                    {
                        coverageType    : "Towing",
                        coverageLimit   : " ",
                        coverageDeductible : " ",
                        coveragePremium : 0.00
                    },
                    {
                        coverageType    : "Rental",
                        coverageLimit   : " ",
                        coverageDeductible : " ",
                        coveragePremium : 0
                    },
                    {
                        coverageType    : "Additonal Coverages",
                        coverageLimit   : " ",
                        coverageDeductible : " ",
                        coveragePremium : 0
                    }
                ],
                lienholders     : [
                    {
                        lienholderName  : "",
                        lienholderMailingAddress : {
                            id              : uuidv4(),
                            streetAddress   : "",
                            city            : "",
                            state           : USPSSTATEABBREVIATIONS[17],
                            zip             : ""
                        }
                    }
                ]
            }            
        ],
        endorsements        : [ "IL01264A", "IL01-001", "IL01-003" ],
    }
