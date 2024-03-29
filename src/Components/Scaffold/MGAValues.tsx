import { v4 as uuidv4 } from 'uuid';
import * as yup from 'yup';

// ------  Some Regex Validations -------
const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
const zipRegex = /^\d{5}(?:[-\s]\d{4})?$/;
// const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
// const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;

// --------------------- Some Values for the MGA Form --

const TODAY = new Date();
const TOMORROW = new Date(TODAY);
TOMORROW.setDate(TOMORROW.getDate() + 1);
const SIXMONTHS = new Date(TOMORROW);
SIXMONTHS.setMonth(SIXMONTHS.getMonth() + 6);


export interface GenderValues {
    label: string;
    value: string;
}

export const GENDERS : Array<GenderValues> = [
    {label:'M', value:'Male'},
    {label:'F', value:'Female'}
]

export interface MaritalStatusValues {
    label: string;
    value: string;
}

export const MARITALSTATUSES : Array<MaritalStatusValues> = [
    {label:'S', value:'Single'},
    {label:'M', value:'Married'},
    {label:'W', value:'Widowed'},
    {label:'D', value:'Divorced'},
]

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

// ---------- MAILING ADDRESS  ----------  MAILING ADDRESS  -----------

export interface USPSStateAbbreviationValues {
    label: string;
    value: string;
}

export interface MailingAddressValues {
    name?           : string;
    initial?        : string;
    streetAddress1  : string;
    streetAddress2? : string;
    city            : string;
    state           : USPSStateAbbreviationValues;
    zip             : string;
}

export interface MailingAddressItemValues {
    mailingAddress  : MailingAddressValues;
}

export const MailingAddressSchema = yup.object().shape({
    name                    : yup.string(),
    initial                 : yup.string(),
    streetAddress1          : yup.string().required('Street Required'),
    streetAddress2          : yup.string(),
    city                    : yup.string().required('City Required'),
    state                   :  yup.object().shape({
        label: yup.string().required('State Required'),
        value: yup.string().required('State Required'),
    }),
    zip: yup.string().required('Zip Required').matches(zipRegex, 'Invalid Zip'),
});

const newMailingAddress : MailingAddressValues = {
    name: '',
    initial: '',
    streetAddress1: '',
    streetAddress2: '',
    city: '',
    state: USPSSTATEABBREVIATIONS[0],
    zip: ''
}

//---------------  USERS  ----------------- USERS  -----------------

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

export interface UserTableRowValues {
    id          : string;
    name        : string;
    email       : string;
    image       : string;
    roleValue   : string;
}

export interface UserTableProps {
    userRows: Array<UserTableRowValues>; 
}

// IMPROVEMENT: Remove creatorName from these records.  Instead, use a join to get the creatorName from the users table.
const userId0 = uuidv4();
export const USERS : Array<UserValues> = [
    {
        id          : userId0,
        name        : "Able Baker",
        email       : "able@baker.com",
        password    : "passwordAB",
        image       : "https://this-person-does-not-exist.com",
        role        : {label: "Administrator", value: "Administrator"},
        creatorId   : userId0,
        creatorName : "Able Baker",
        created     : new Date(),
        lastModified: new Date()
    },
    {
        id          : uuidv4(),
        name        : "Charlie Dog",
        email       :   "charlie@dog.com",
        password    : "passwordCD",
        image       : "https://this-person-does-not-exist.com/de",
        role        : {label : "User", value: "User"},
        creatorId   : userId0,
        creatorName : "Able Baker",
        created     : new Date(),
        lastModified: new Date()
    },
    {
        id          : uuidv4(),
        name        : "Easy Fox",
        email       : "easy@fox.com",
        password    : "passwordEF",
        image       : "https://this-person-does-not-exist.com/cn",
        role        : {label : "User", value: "User"},
        creatorId   : userId0,
        creatorName : "Able Baker",
        created     : new Date(),
        lastModified: new Date()
    },
    {
        id          : uuidv4(),
        name        : "Golf Hotel",
        email       : "golf@hotel.com",
        password    : "passwordGH",
        image       : "https://this-person-does-not-exist.com/de",
        role        : {label : "User", value: "User"},
        creatorId   : userId0,
        creatorName : "Able Baker",
        created     : new Date(),
        lastModified: new Date()
    },
    {
        id          : uuidv4(),
        name        : "India Juliet",
        email       : "india@juliet.com",
        password    : "passwordIJ",
        image       : "https://this-person-does-not-exist.com/de",
        role        : {label : "User", value: "User"},
        creatorId   : userId0,
        creatorName : "Able Baker",
        created     : new Date(),
        lastModified: new Date()
    }

]

export const UserSchema = yup.object().shape({
    name        : yup.string().required('Name Required'),
    email       : yup.string().email('Invalid Email'),
    password    : yup.string().required('Password Required'),
    role        : yup.object().shape({
        label: yup.string().required('Required'),
        value: yup.string().required('Required')
    }).required('Required'),
});

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


//----------INSURER----------------------------------- INSURER -----------------

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
    //Identifiers
    id                      : string;
    name                    : string;
    FEIN                    : string;
    legacyId?               : string;
    status                  : InsurerStatusValues;
    domicileState           : USPSStateAbbreviationValues;
    //Policy Terms
    maxPolicyTerm           : number;
    minPolicyTerm           : number;
    renewalDaysAgent?       : number;
    renewalDaysDirectBill?  : number;    
    statementType?          : string;
    //Contact Info
    contactName?            : string;
    phone?                  : string;
    principalEmail?         : string;
    website?                : string;
    mailingAddress          : MailingAddressValues;
    //Rating Info
    NAICGroup?              : string;
    NAICCode?               : string;
    NAICGroupName?          : string;
    AMBestID?               : string;
    AMBestRating?           : string;
    //Record stamps
    creatorId               : string;
    creatorName             : string;
    created                 : Date;
    lastModified            : Date;
}

export interface InsurerItemValues {
    insurer? : InsurerValues;
}

export interface InsurerProductTableValues {
    insurerId   : string | undefined;
}

export interface InsurerRowValues {
    //Identifiers
    id                      : string;
    name                    : string;
    FEIN                    : string;
    legacyId                : string;
    status                  : string;
    domicileState           : string;
    //Policy Terms
    maxPolicyTerm           : number;
    minPolicyTerm           : number;
    renewalDaysAgent        : number;
    renewalDaysDirectBill   : number;    
    statementType           : string;
    //Contact Info
    contactName             : string;
    phone                   : string;
    principalEmail          : string;
    website                 : string;
    mailingAddress          : string;
    //Rating Info
    NAICGroup               : string;
    NAICCode                : string;
    NAICGroupName           : string;
    AMBestID                : string;
    AMBestRating            : string;
}

export interface InsurerTableProps {
    insurerRows: Array<InsurerRowValues>;
}

export const InsurerSchema = yup.object().shape({
    name: yup.string().required('Name Required'),
    FEIN: yup.string().required('FEIN Required'),
    legacyId: yup.string(),
    status: yup.object().shape({
        label: yup.string().required('Status Required'),
        value: yup.string().required('Status Required'),
    }),
    domicileState: yup.object().shape({
        label: yup.string().required('Domicile State Required'),
        value: yup.string().required('Domicile State Required'),
    }),
    maxPolicyTerm: yup.number().required('Required').integer("Must be an integer").min(1, "Must be greater than 0"),
    minPolicyTerm: yup.number().required('Required').integer("Must be an integer").min(1, "Must be greater than 0"),
    renewalDaysAgent: yup.number().integer().min(1, "Must be greater than 0"),
    renewalDaysDirectBill: yup.number().integer("Must be an integer").min(1, "Must be greater than 0"),
    statementType: yup.string().required('Required'),
    
    contactName: yup.string(),
    phone: yup.string().matches(phoneRegex, 'Invalid Phone'),
    principalEmail: yup.string().email('Invalid Email'),
    website: yup.string().url('Invalid URL'),
    mailingAddress: MailingAddressSchema,
    NAICGroup: yup.string(),
    NAICCode: yup.string(),
    NAICGroupName: yup.string(),
    AMBestID: yup.string(),
    AMBestRating: yup.string(),
});

export const newInsurer : InsurerValues = {
    //Identifiers
    id                      : uuidv4(),
    name                    : '',
    FEIN                    : '',
    legacyId                : '',
    status                  : INSURERSTATUSES[0],
    domicileState           : USPSSTATEABBREVIATIONS[0],
    //Policy Terms
    maxPolicyTerm           : 0,
    minPolicyTerm           : 0,
    renewalDaysAgent        : 0,
    renewalDaysDirectBill   : 0,
    statementType           : '',
    //Contact Info
    contactName             : '',
    phone                   : '',
    principalEmail          : '',
    website                     : '',
    mailingAddress          : {
        name            : '',
        streetAddress1  : '',
        streetAddress2  : '',
        city            : '',
        state           : USPSSTATEABBREVIATIONS[0],
        zip             : ''
    },
    NAICGroup               : '',
    NAICCode                : '',
    NAICGroupName           : '',
    AMBestID                : '',
    AMBestRating            : '',
    creatorId               : userId0,
    creatorName             : USERS[0].name,
    created                 : new Date(),
    lastModified            : new Date()
}

export const INSURERS   : InsurerValues[] = [
    {   
        id              : uuidv4(),
        name            : 'United Equitable Insurance Company',
        FEIN            : '36-2222222',
        legacyId        : '00225',
        status          : INSURERSTATUSES[1],

        domicileState   : USPSSTATEABBREVIATIONS[17],
        maxPolicyTerm   : 84,
        minPolicyTerm   : 1,
        renewalDaysAgent: 90,
        renewalDaysDirectBill: 45,
        statementType   : 'A',
        contactName     : 'John Doe',
        phone           : '800-234-6926',
        principalEmail  : 'service@ueilink.com',
        website         : 'https://www.ueic.com',
        mailingAddress: {
                name            : "UEIC Headquarters",
                streetAddress1  : "9040 Waukegan Road, Suite 100",
                streetAddress2  : "",
                city            : "Morton Grove",
                state           : USPSSTATEABBREVIATIONS[17],
                zip             : "60053"
            },
        NAICGroup       : '167',
        NAICCode        : '24910',
        NAICGroupName   : 'United Equitable Group',
        AMBestID        : '12345',
        AMBestRating    : 'A+',
        creatorId       : userId0,
        creatorName     : USERS[0].name,
        created         : new Date(),
        lastModified    : new Date()
    },
    {   
        id              : uuidv4(),
        name            : 'American Heartland Insurance Company',
        FEIN            : '36-11111111',
        legacyId        : '20228',
        status          : INSURERSTATUSES[2],
        domicileState   : USPSSTATEABBREVIATIONS[17],
        maxPolicyTerm   : 84,
        minPolicyTerm   : 1,
        renewalDaysAgent: 90,
        renewalDaysDirectBill: 65,
        statementType   : 'B',
        contactName     : 'Jane Doe',
        phone           : '847-583-4800',
        principalEmail  : 'service@ahiclink.com',
        website         : 'https://www.ahic.com',
        mailingAddress: {
                name            : "AHIC Headquarters",
                streetAddress1  : "9040 Waukegan Road, Suite 200",
                streetAddress2  : "",
                city            : "Morton Grove",
                state           : USPSSTATEABBREVIATIONS[17],
                zip             : "60053"
            },

        NAICGroup       : '167',
        NAICCode        : '24910',
        NAICGroupName   : 'United Equitable Group',
        AMBestID        : 'A+',
        AMBestRating    : 'A+',
        creatorId       : userId0,
        creatorName     : USERS[0].name,
        created         : new Date(),
        lastModified    : new Date()
    },
    {   
        id              : uuidv4(),
        name            : 'Harley Heaven Motorcycle Insurance Co.',
        FEIN            : '13-13131313',
        legacyId        : '666',
        status          : INSURERSTATUSES[2],
        domicileState   : USPSSTATEABBREVIATIONS[17],
        maxPolicyTerm   : 84,
        minPolicyTerm   : 1,
        renewalDaysAgent: 90,
        renewalDaysDirectBill: 65,
        statementType   : 'B',
        contactName     : 'Jane Doe',
        phone           : '847-583-4800',
        principalEmail  : 'service@ahiclink.com',
        website         : 'https://www.hhmi.com',
        mailingAddress: {
                name            : "Harley Heaven Headquarters",
                streetAddress1  : "9040 Waukegan Road, Suite 200",
                streetAddress2  : "",
                city            : "Milwaukee",
                state           : USPSSTATEABBREVIATIONS[22],
                zip             : "65053"
            },

        NAICGroup       : '167',
        NAICCode        : '24910',
        NAICGroupName   : 'United Equitable Group',
        AMBestID        : 'A+',
        AMBestRating    : 'A+',
        creatorId       : userId0,
        creatorName     : USERS[0].name,
        created         : new Date(),
        lastModified    : new Date()
    }
]


//----------------  AGENCY ------------ AGENCY -----------------

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
    //Identifiers
    id                  : string;
    legacyId?           : string;
    name                : string;
    avatar?             : string;
    irsName?            : string; //Company name for Corp, personal name for individual agent
    taxId               : string; //FEIN or SSN
    status              : AgencyStatusValues;
    //Contact Info
    contactName?        : string;
    phone?              : string;
    principalEmail?     : string;
    documentEmail?      : string;
    website?            : string;
    mailingAddress      : MailingAddressValues;
    //License Info
    licenseNumber       : string;
    licenseDate         : Date;
    licenseExpirationDate?  : Date;
    appointmentStatus?  : string;
    agentGrade?         : string;
    headquarterAgent?   : string;
    locationCode?       : string;
    commissionType?     : string;  
    //Record stamps
    creatorId           : string;
    creatorName         : string;
    created             : Date;
    lastModified        : Date;
}

export interface AgencyItemValues {
    agency? : AgencyValues;
}

export const AgencySchema = yup.object().shape({
    //Identifiers
    id                  : yup.string().required(),
    legacyId            : yup.string(),
    name                : yup.string().required(),
    irsName             : yup.string(),
    taxId               : yup.string().required(),
    status              : yup.object().shape({
        label: yup.string().required(),
        value: yup.string().required()
    }),
    //Contact Info
    contactName         : yup.string(),
    phone               : yup.string().matches(phoneRegex, 'Phone number is not valid'),
    principalEmail      : yup.string().email('Email is not valid'),
    documentEmail       : yup.string().email('Email is not valid'),
    website             : yup.string().url('Website is not valid'),
    mailingAddress      : MailingAddressSchema,
    //License Info
    licenseNumber       : yup.string(),
    licenseDate         : yup.date(),
    licenseExpirationDate: yup.date(),
    appointmentStatus   : yup.string(),
    agentGrade          : yup.string(),
    headquarterAgent    : yup.string(),
    locationCode        : yup.string(),
    commissionType      : yup.string(),
})

export interface AgencyRowValues {
    //Identifiers
    id                  : string;
    legacyId            : string;
    name                : string;
    irsName             : string;
    taxId               : string;
    status              : string;
    //Contact Info
    contactName         : string;
    phone               : string;
    principalEmail      : string;
    documentEmail       : string;
    website             : string;
    mailingAddress      : string
    //License Info
    licenseNumber       : string;
    licenseDate         : string;
    licenseExpirationDate   : string;
    appointmentStatus   : string;
    agentGrade          : string;
    headquarterAgent    : string;
    locationCode        : string;
    commissionType      : string;  
}

export interface AgencyTableProps {
    agencyRows          : Array<AgencyRowValues>;
}

export const newAgency : AgencyValues = {
    //Identifiers
    id                  : uuidv4(),
    legacyId            : '',
    name                : '',
    avatar              : '',
    irsName             : '',
    taxId               : '',
    status              : AGENCYSTATUSES[0],
    //Contact Info
    contactName         : "",
    phone               : '',
    principalEmail      : '',
    documentEmail       : '',
    website             : '',
    mailingAddress      : {
        streetAddress1  : '',
        streetAddress2  : '',
        city            : '',
        state           : USPSSTATEABBREVIATIONS[0],
        zip             : ''
    },
    //License Info
    licenseNumber       : '',
    licenseDate         : new Date(),
    licenseExpirationDate: new Date(),
    appointmentStatus   : '',
    agentGrade          : '',
    headquarterAgent    : '',
    locationCode        : '',
    commissionType      : '',
    //Record stamps
    creatorId           : USERS[0].id,
    creatorName         : USERS[0].name,
    created             : new Date(),
    lastModified        : new Date()
}

export const AGENCIES : AgencyValues[] = [
    {
        //Identifiers ----------------
        id              : uuidv4(),
        legacyId        : "123456",
        name            : "Insure On The Spot Agency",
        avatar          : "/static/images/UnitedEquitableAvatar.jpg",
        irsName         : "Insure On The Spot Agency",
        taxId           : "36-1111111",
        status          : AGENCYSTATUSES[2],
        //Contact Info ----------------
        contactName     : "John Doe",
        phone           : "1-773-202-4506",
        principalEmail  : "support@iots.com",
        documentEmail   : "documents@iots.com",
        website         : "https://www.insuranceonthespot.com",
        mailingAddress  : {
            streetAddress1  : "5485 N Elston Ave",
            streetAddress2  : "",
            city            : "Chicago",
            state           : USPSSTATEABBREVIATIONS[17],
            zip             : "60630"
        },
        //License Info ----------------
        licenseNumber       : "123456",
        //set licenseDate to January 1 2020
        licenseDate         : new Date(2020, 0, 1),
        //set licenseExpirationDate to January 1 2031
        licenseExpirationDate: new Date(2031, 0, 1),
        appointmentStatus   : "Active",
        agentGrade          : "A",
        headquarterAgent    : "Yes",
        locationCode        : "123456",
        commissionType      : "C",
        //Record stamps
        creatorId           : USERS[0].id,
        creatorName         : USERS[0].name,
        created             : new Date(),
        lastModified        : new Date()
    },
    {
        //Identifiers ----------------
        id              : uuidv4(),
        legacyId         : "008164",
        name            : "Freeway Insurance Serv America LLC",
        avatar          : "/static/images/UnitedEquitableAvatar.jpg",
        irsName         : "Freeway Insurance Serv Amercia LLC",
        taxId           : "22-1234567",
        status          : AGENCYSTATUSES[2],
        //Contact Info
        contactName     : "Lima Mike",
        phone           : "(312) 517-9046",
        principalEmail  : "support@freewayinsure.com",
        documentEmail   : "documents@freewayinsure.com",
        website         : "https://www.freewayinsurance.com",
        mailingAddress : {
            streetAddress1  : "4712 W Cermak Rd",
            streetAddress2  : "",
            city            : "Cicero",
            state           : USPSSTATEABBREVIATIONS[17],
            zip             : "60804"
        },
        //License Info
        licenseNumber   : "123456",
        //set licenseDate to January 29, 2010 11:13:00 AM
        licenseDate     : new Date(2010, 0, 29, 11, 13, 0),
        //set licenseExpirationDate to January 29, 2030 11:13:00 AM
        licenseExpirationDate: new Date(2030, 0, 29, 11, 13, 0),
        appointmentStatus   : "Active",
        agentGrade          : "A",
        headquarterAgent    : "Yes",
        locationCode    : "123456",
        commissionType  : "C",
        //Record stamps
        creatorId       : USERS[0].id,
        creatorName     : USERS[0].name,
        created         : new Date(),
        lastModified    : new Date()
    },
    {
        //Identifiers ----------------
        id                  : uuidv4(),
        legacyId            : "000224",
        name                : "CRC Insurance Services",
        avatar              : "/static/images/UnitedEquitableAvatar.jpg",
        irsName             : "CRC Insurance Services",
        taxId               : "33-1234567",
        status              : AGENCYSTATUSES[2],
        //Contact Info
        contactName         : "Sierra Tango",
        phone               : "770-392-2700",
        principalEmail      : "support@crcis.com",
        documentEmail       : "docs@crcis.com",
        website             : "https://www.crcinsurance.com",
        mailingAddress : {
            streetAddress1  : "5485 N Elston Ave",
            streetAddress2  : "",
            city            : "Atlanta",
            state           : USPSSTATEABBREVIATIONS[11],
            zip             : "60630"
        },
        //License Info
        licenseNumber       : "123456",
        //set licenseDate to 5 years ago
        licenseDate         : new Date(new Date().setFullYear(new Date().getFullYear() - 5)),
        //set licenseExpirationDate to 5 years from now
        licenseExpirationDate: new Date(new Date().setFullYear(new Date().getFullYear() + 5)),
        appointmentStatus   : "Active",
        agentGrade          : "A",
        headquarterAgent    : "Yes",
        locationCode        : "123456",
        commissionType      : "C",
        //Record stamps
        creatorId           : USERS[0].id,
        creatorName         : USERS[0].name,
        created             : new Date(),
        lastModified        : new Date()
    },
    //add one more agency record with all the fields
    {
        //Identifiers ----------------
        id              : uuidv4(),
        legacyId        : "000225",
        name            : "Secret Agency Insurance",
        avatar          : "/static/images/UnitedEquitableAvatar.jpg",
        irsName         : "Secret Agency Insurance",
        taxId           : "44-1234567",
        status          : AGENCYSTATUSES[2],
        //Contact Info
        contactName     : "Delta Echo",
        phone           : "1-773-202-4506",
        principalEmail  : "secret@shush.hmm",
        documentEmail   : "dox@shush.mmm",
        website         : "https://www.secretagencyinsurance.com",
        mailingAddress : {
            streetAddress1  : "Quiet Alley",
            streetAddress2  : "",
            city            : "Chicago",
            state           : USPSSTATEABBREVIATIONS[17],
            zip             : "60630"
        },
        //License Info
        licenseNumber           : "123456",
        licenseDate             : new Date(new Date().setFullYear(new Date().getFullYear() - 5)),
        licenseExpirationDate   : new Date(new Date().setFullYear(new Date().getFullYear() + 5)),
        appointmentStatus       : "Active",
        agentGrade              : "A",
        headquarterAgent            : "Yes",
        locationCode        : "123456",
        commissionType      : "C",
        //Record stamps
        creatorId           : USERS[0].id,
        creatorName         : USERS[0].name,
        created             : new Date(),
        lastModified        : new Date()
    },
    {
        //Identifiers ----------------
        id              : uuidv4(),
        legacyId        : "000225",
        name            : "Assured Insurance",
        avatar          : "/static/images/UnitedEquitableAvatar.jpg",
        irsName         : "Assured Insurance",
        taxId           : "55-1234567",
        status          : AGENCYSTATUSES[2],
        //Contact Info
        contactName     : "Sally Certain",
        phone           : "1-773-202-9999",
        principalEmail  : "assured@insurance.ins",
        documentEmail   : "dox@insurance.ins",
        website         : "https://www.assuredinsurance.ins",
        mailingAddress : {
            streetAddress1  : "Granite Tower",
            streetAddress2  : "Apt 13",
            city            : "Milwaukee",
            state           : USPSSTATEABBREVIATIONS[48],
            zip             : "60999"
        },
        //License Info
        licenseNumber   : "1027483",
        licenseDate     : new Date(new Date().setFullYear(new Date().getFullYear() - 100)),
        //set licenseExpirationDate to 5 years from now
        licenseExpirationDate: new Date(new Date().setFullYear(new Date().getFullYear() + 5)),
        appointmentStatus   : "Active",
        agentGrade          : "A",
        headquarterAgent    : "Yes",
        locationCode    : "123456",
        commissionType  : "C",
        //Record stamps
        creatorId       : USERS[0].id,
        creatorName     : USERS[0].name,
        created         : new Date(),
        lastModified    : new Date()
    }
]


//------------  PRODUCT   ------------ PRODUCT -------------------------//
export interface ProductAssetTypeValues {
    label   : string;
    value   : string;
}

export const PRODUCTASSETTYPES : Array<ProductAssetTypeValues> = [
    {label: 'Automobile', value: 'Automobile'},
    {label: 'Motorcycle', value: 'Motorcycle'},
    {label: 'Homeowners', value: 'Homeowners'},
    {label: 'Commercial', value: 'Commercial'},
]

export interface ProductStatusValues {
    label   : string;
    value   : string;
}

export const PRODUCTSTATUSES : Array<ProductStatusValues> = [
    {label: 'Draft', value: 'Draft'},
    {label: 'Pending', value: 'Pending'},
    {label: 'Active', value: 'Active'},
    {label: 'Inactive', value: 'Inactive'},
]

export interface ProductValues {
    //Identifiers
    id                      : string;
    name                    : string;
    status                  : ProductStatusValues;
    assetType               : ProductAssetTypeValues;
    state                   : USPSStateAbbreviationValues;
    defaultRatingTerritory  : USPSStateAbbreviationValues;
    effectiveDate           : Date;
    sr22                    : boolean;
    insurer                 : InsurerValues
    //Record timestamps
    creatorId           : string;
    creatorName         : string;
    created             : Date;
    lastModified        : Date;
}

export interface ProductItemValues {
    product?         : ProductValues;
}

export interface ProductRowValues {
    //Identifiers
    id                      : string;
    name                    : string;
    status                  : string;
    assetType               : string;
    state                   : string;
    defaultRatingTerritory  : string;
    effectiveDate           : string;
    sr22                    : string;
    insurerName             : string;
    insurerContactName      : string;
    insurerPhone            : string;
    insurerEmail            : string;
    insurerAddress          : string;
}

export interface ProductTableProps {
    productRows          : Array<ProductRowValues>;
}

export const ProductSchema = yup.object().shape({
    id              : yup.string().required(),
    name            : yup.string().required('Required'),
    status          : yup.object().shape({
        label:  yup.string().required('Required'),
        value:  yup.string().required('Required'),
    }).required('Required'),
    assetType       : yup.object().shape({
        label:  yup.string().required('Required'),
        value:  yup.string().required('Required'),
    }).required('Required'),
    state        : yup.object().shape({
        label:  yup.string().required('Required'),
        value:  yup.string().required('Required'),
    }).required('Required'),
    defaultRatingTerritory : yup.object().shape({
        label:  yup.string().required('Required'),
        value:  yup.string().required('Required'),
    }).required('Required'),
    effectiveDate   : yup.date().required('Required'),
    insurer         : yup.object().shape({
        id              : yup.string().required(),
    })
})

export const newProduct : ProductValues = {
    id              : uuidv4(),
    name            : "",
    status          : PRODUCTSTATUSES[2],
    assetType       : PRODUCTASSETTYPES[0],
    state           : USPSSTATEABBREVIATIONS[0],
    defaultRatingTerritory : USPSSTATEABBREVIATIONS[0],
    effectiveDate   : new Date(),
    sr22            : true,
    insurer         : INSURERS[0],
    //Record stamps
    creatorId           : USERS[0].id,
    creatorName         : USERS[0].name,
    created             : new Date(),
    lastModified        : new Date()
}

export const PRODUCTS : ProductValues[] = [
    {
        id              : uuidv4(),
        name            : "Illinois Auto Insurance 2023",
        status          : PRODUCTSTATUSES[2],
        assetType       : PRODUCTASSETTYPES[0],
        state           : USPSSTATEABBREVIATIONS[17],
        defaultRatingTerritory : USPSSTATEABBREVIATIONS[17],
        //set effectiveDate to January 1, 2023 at 12:00:00 AM
        effectiveDate   : new Date(2023, 0, 1),
        sr22            : true,
        insurer         : INSURERS[0],
        //Record stamps
        creatorId       : USERS[0].id,
        creatorName     : USERS[0].name,
        created         : new Date(),
        lastModified    : new Date()
    },
    {
        id              : uuidv4(),
        name            : "Indiana Auto Insurance 2023",
        status          : PRODUCTSTATUSES[0],
        assetType       : PRODUCTASSETTYPES[0],
        state           : USPSSTATEABBREVIATIONS[18],
        defaultRatingTerritory : USPSSTATEABBREVIATIONS[18],
        //set effectiveDate to January 1, 2023 at 12:00:00 AM
        effectiveDate   : new Date(2023, 0, 1),
        sr22            : false,
        insurer         : INSURERS[1],
        //Record stamps
        creatorId       : USERS[1].id,
        creatorName     : USERS[1].name,
        created         : new Date(),
        lastModified    : new Date()
    },
    {
        id              : uuidv4(),
        name            : "Illinois Motorcycle Insurance 2023",
        status          : PRODUCTSTATUSES[2],
        assetType       : PRODUCTASSETTYPES[1],
        state           : USPSSTATEABBREVIATIONS[17],
        defaultRatingTerritory : USPSSTATEABBREVIATIONS[17],
        //set effectiveDate to January 1, 2023 at 12:00:00 AM
        effectiveDate   : new Date(2023, 0, 1),
        sr22            : false,
        insurer         : INSURERS[2],
        //Record stamps
        creatorId       : USERS[1].id,
        creatorName     : USERS[1].name,
        created         : new Date(),
        lastModified    : new Date()
    },
    {
        id              : uuidv4(),
        name            : "Indiana Motorcycle Insurance 2023",
        status          : PRODUCTSTATUSES[2],
        assetType       : PRODUCTASSETTYPES[1],
        state           : USPSSTATEABBREVIATIONS[18],
        defaultRatingTerritory : USPSSTATEABBREVIATIONS[17],
        //set effectiveDate to January 1, 2023 at 12:00:00 AM
        effectiveDate   : new Date(2023, 0, 1),
        sr22            : false,
        insurer         : INSURERS[2],
        //Record stamps
        creatorId       : USERS[2].id,
        creatorName     : USERS[2].name,
        created         : new Date(),
        lastModified    : new Date()
    }
]


//------------ POLICY --------------- POLICY ----------------------------------------//

export interface PolicyStatusValues {
    label   : string;
    value   : string;
}

export const POLICYSTATUSES : Array<ProductStatusValues> = [
    {label: 'Draft', value: 'Draft'},
    {label: 'Bound', value: 'Bound'},
    {label: 'Inforce', value: 'Inforce'},
    {label: 'Cancelled', value: 'Cancelled'},
    {label: 'Expired', value: 'Expired'},
    {label: 'Non-Renewed', value: 'Non-Renewed'},
    {label: 'Reinstated', value: 'Reinstated'},
    {label: 'Terminated', value: 'Terminated'},
]

export interface EndorsementStatusValues {
    label   : string;
    value   : string;
}

export const ENDORSEMENTSTATUSES : Array<ProductStatusValues> = [
    {label: 'Draft', value: 'Draft'},
    {label: 'Bound', value: 'Bound'},
    {label: 'Inforce', value: 'Inforce'},
    {label: 'Cancelled', value: 'Cancelled'},
    {label: 'Expired', value: 'Expired'},
    {label: 'Non-Renewed', value: 'Non-Renewed'},
    {label: 'Reinstated', value: 'Reinstated'},
    {label: 'Terminated', value: 'Terminated'},
]

export interface AsInterestMayAppearValues {
    label   : string;
    value   : string;
}

export const ASINTERESTMAYAPPEAR : Array<AsInterestMayAppearValues> = [
    { label: 'A', value: "And"},
    { label: 'H', value: "His Wife"},
    { label: 'W', value: "And Wife"},
    { label: 'R', value: "As Respective Interest May Appear"},
    { label: 'M', value: "Unmarried Man"},
    { label: 'F', value: 'Female' },
    { label: 'J', value: 'Husband and Wife - Joint Tenants' },
    { label: 'X', value: 'A Married Mas as His Sole and Seprate Property' },
    { label: 'Z', value: 'a Married Woman as Her Sole and Separate Property'}
]

export interface OperatorTypeValues {
    label   : string;
    value   : string;
}

export const OPERATORTYPES : Array<OperatorTypeValues> = [
    { label: 'Principal', value: 'PRIN'},
    { label: 'Additional', value: 'ADDL'},
    { label: 'Excluded', value: 'EXCL'},
]

export interface SR22Values {
    label   : string;
    value   : string;
}

export const SR22S : Array<SR22Values> = [
    { label: 'Required', value: 'Y'},
    { label: 'Not Required', value: 'N'},
]

export interface RelationToInsuredValues {
    label   : string;
    value   : string;
}

export const RELATIONTOINSURED : Array<RelationToInsuredValues> = [
    { label: 'Self', value: 'Self'},
    { label: 'Spouse', value: 'Spouse'},
    { label: 'Child', value: 'Child'},
    { label: 'Parent', value: 'Parent'},
    { label: 'Non-relative', value: 'Non-relative'},
]

export interface OperatorValues {
    number                          : number;
    name                            : string;
    phone?                          : string;
    email?                          : string;
    mailingAddress                  : MailingAddressValues;
    dateOfBirth                     : Date;
    type                            : OperatorTypeValues;
    sr22                            : SR22Values;
    licenseNumber                   : string;
    licenseState                    : USPSStateAbbreviationValues;
    licenseExpirationDate           : Date;
    relationToInsured               : RelationToInsuredValues; 
    accidentsViolations             : string;
    effectiveDate                   : Date;
    removedDate?                    : Date;
    //Record stamps
    creatorId                       : string;
    creatorName                     : string;
    created                         : Date;
    lastModified                    : Date;
}

export interface OperatorTableProps {
    operatorRows          : Array<OperatorValues>;
} 

export const OperatorSchema = yup.object().shape({
    number                          : yup.number().required('Required'),
    name                            : yup.string().required('Required'),
    phone                           : yup.string().matches(phoneRegex, 'Phone number is not valid'),
    email                           : yup.string().email('Invalid email address'),
    mailingAddress                  : MailingAddressSchema,
    dateOfBirth                     : yup.date().required('Required'),
    type                            : yup.object().shape({
        label   : yup.string().required(),
        value   : yup.string().required()
    }).required('Required'),
    sr22                            : yup.object().shape({
        label   : yup.string().required(),
        value   : yup.string().required()
    }).required('Required'),
    licenseNumber                   : yup.string().required('Required'),
    licenseState                   : yup.object().shape({
        label   : yup.string().required('Required'),
        value   : yup.string().required('Required')
    }).required('Required'),
    licenseExpirationDate           : yup.date().required('Required'),
    relationToInsured               : yup.object().shape({
        label   : yup.string().required('Required'),
        value   : yup.string().required('Required')
    }).required('Required'),
    accidentsViolations             : yup.string().required('Required'),
    effectiveDate                   : yup.date().required('Required'),
    removedDate                     : yup.date(),
})


export interface InsuredValues {
    id                              : string;
    name                            : string;
    phone?                          : string;
    email?                          : string;
    mailingAddress                  : MailingAddressValues;
    dateOfBirth                     : Date;
    effectiveDate                   : Date;
    gender                          : GenderValues;
    maritalStatus                   : MaritalStatusValues;
    occupation                      : string;
    spouseOccupation?               : string;
    asInterestMayAppear             : AsInterestMayAppearValues;
    //Record stamps
    creatorId                       : string;
    creatorName                     : string;
    created                         : Date;
    lastModified                    : Date;
}

export const InsuredSchema = yup.object().shape({ 
    id                              : yup.string().required(),
    name                            : yup.string().required(),
    phone                           : yup.string().matches(phoneRegex, 'Phone number is not valid'),
    email                           : yup.string().email('Invalid email address'),
    mailingAddress                  : MailingAddressSchema,
    dateOfBirth                     : yup.date().required('Required'),
    effectiveDate                   : yup.date().required('Required'),
    gender                          : yup.object().shape({
        label   : yup.string().required('Required'),
        value   : yup.string().required('Required')
    }).required('Required'),
    maritalStatus                   : yup.object().shape({
        label   : yup.string().required('Required'),
        value   : yup.string().required('Required')
    }).required('Required'),
    occupation                      : yup.string().required('Required'),
})

const newInsured : InsuredValues = {
    id                              : '',
    name                            : '',
    phone                           : '',
    email                           : '',
    mailingAddress                  : newMailingAddress,
    dateOfBirth                     : new Date(),
    effectiveDate                   : new Date(),
    gender                          : GENDERS[0],
    maritalStatus                   : MARITALSTATUSES[0],
    occupation                      : '',
    spouseOccupation                : '',
    asInterestMayAppear             : ASINTERESTMAYAPPEAR[0],
    creatorId                       : USERS[0].id,
    creatorName                     : USERS[0].name,
    created                         : new Date(),
    lastModified                    : new Date(),
}

export interface CoverageValues {
    coverageType        : string;
    coverageLimit       : string;
    coverageDeductible  : string;
    coveragePremium     : number;
}   

const CoverageSchema = yup.object().shape({
    coverageType        : yup.string().required(),
    coveragePremium     : yup.number().required(),
})

export interface LienholderValues {
    name          : string;
    mailingAddress: MailingAddressValues;
}


export interface AutoValues {
    id              : string;
    unit            : number;
    make            : string;
    model           : string;
    year            : number;
    vin             : string;
    sym             : string;
    age             : number;
    terr            : string;
    class           : string;
    pts             : number;
    safe?           : string;
    trns?           : string;
    ren?            : string;
    atf?            : string;
    flcv?           : string;
    vsrc?           : string;
    nown?           : string;
    defd?           : string;
    mc?             : string;
    av?             : string;
    sm?             : string;
    lgl?            : string;
    ers?            : string;
    effectiveDate   : Date;
    removedDate?    : Date;
    coverages       : CoverageValues[];
    lienholders?    : LienholderValues[];
    //Record stamps
    creatorId       : string;
    creatorName     : string;
    created         : Date;
    lastModified    : Date;
}

const AutoSchema = yup.object().shape({
    id              : yup.string().required(),
    unit            : yup.number().required('Required'),
    autoMake        : yup.string().required('Required'),
    autoModel       : yup.string().required('Required'),
    autoYear        : yup.number().required('Required'),
    autoVIN         : yup.string().required('Required'),
    autoSYM         : yup.string().required('Required'),
    autoAGE         : yup.number().required('Required'),
    autoTERR        : yup.string().required('Required'),
    autoCLASS       : yup.string().required('Required'),
    autoPTS         : yup.number().required('Required'),
    effectiveDate   : yup.date().required('Required'),
    coverages       : yup.array().of(CoverageSchema).required('Required'),
})

export interface AutoRowValues {
    id              : string;
    unit            : number;
    make            : string;
    model           : string;
    year            : number;
    vin             : string;
    sym             : string;
    age             : number;
    terr            : string;
    class           : string;
    pts             : number;
    safe           : string;
    trns           : string;
    ren            : string;
    atf            : string;
    flcv           : string;
    vsrc           : string;
    nown           : string;
    defd           : string;
    mc             : string;
    av             : string;
    sm             : string;
    lgl            : string;
    ers            : string;
}

export interface AutoTableProps {
    autoRows          : Array<AutoRowValues>;
}

export interface PolicyValues {
    //Identifiers
    id                      : string;
    policyNumber            : string;
    status                  : PolicyStatusValues;
    applicationDate         : Date;
    periodStartDate         : Date;
    periodEndDate           : Date;
    policyState             : USPSStateAbbreviationValues;
    //Policy Details
    billType                : string;
    netGross                : string;
    paymentOption           : string;
    claimCount              : number;
    binderNumber            : string;
    binderTimestamp         : Date;
    policyRateType          : string;
    policyTerm              : number;
    premiumInforce          : number;
    premiumWritten          : number;
    statementDate           : number;
    territory               : string;
    yearsRenewed            : number;
    //Endorsement details
    endorsementNumber       : number;
    endorsementAmount       : number;
    endorsementStatus       : EndorsementStatusValues;
    endorsementEffectiveDate: Date;
    //Related objects
    insured                 : InsuredValues;
    agency                  : AgencyValues;
    product                 : ProductValues;
    //Operator details
    operators               : OperatorValues[];
    //Auto details
    autoUnits               : AutoValues[];
    //Policy document endorsements -- awkwardly overridden term 'endorsements'
    documentEndorsements    : string[];
    //Record stamps
    creatorId               : string;
    creatorName             : string;
    created                 : Date;
    lastModified            : Date;
}

export const newPolicy: PolicyValues = {
    id                    : uuidv4(),
    policyNumber          : '',
    status                : POLICYSTATUSES[0],
    applicationDate       : new Date(),
    periodStartDate       : new Date(),
    periodEndDate         : new Date(),
    policyState           : USPSSTATEABBREVIATIONS[0],
    product               : PRODUCTS[0],
    agency                : AGENCIES[0],
    insured               : newInsured,
    billType              : '',
    netGross              : '',
    paymentOption         : '',
    claimCount            : 0,
    binderNumber          : '',
    binderTimestamp       : new Date(),
    policyRateType        : '',
    policyTerm            : 0,
    premiumInforce        : 0,
    premiumWritten        : 0,
    statementDate         : 0,
    territory             : '',
    yearsRenewed          : 0,
    endorsementNumber     : 0,
    endorsementAmount     : 0,
    endorsementStatus     : ENDORSEMENTSTATUSES[0],
    endorsementEffectiveDate: new Date(),
    operators             : [],
    autoUnits             : [],
    documentEndorsements  : [' '],
    creatorId             : USERS[0].id,
    creatorName           : USERS[0].name,
    created               : new Date(),
    lastModified          : new Date(),
}

export interface PolicyItemProps {
    policy? : PolicyValues
}

export interface PolicyRowValues {
    id              : string;
    policyNumber    : string;
    status          : string;
    periodStartDate : string;
    periodEndDate   : string;
    insuredName     : string;
    insuredAddress  : string;
    insuredPhone    : string;
    insuredEmail    : string;
    agencyName      : string;
    agencyAddress   : string;
    agencyPhone     : string;
    agencyEmail     : string;
    insurerName     : string;
    insurerAddress  : string;
    insurerPhone    : string;
    insurerEmail    : string;
    productName     : string;
}

export interface PolicyTableProps {
    policyRows      : Array<PolicyRowValues>
}

export const PolicySchema = yup.object().shape({
    //Identifiers
    id                          : yup.string().required(),
    policyNumber                : yup.string().required(),
    status                      : yup.object().shape({
        label: yup.string().required(),
        value: yup.string().required()
    }).required('Required'),
    applicationDate             : yup.date().required('Required'),
    periodStartDate             : yup.date().required('Required'),
    periodEndDate               : yup.date().required('Required'),
    policyState                 : yup.object().shape({
        label: yup.string().required('Required'),
        value: yup.string().required('Required')
    }).required('Required'),
    //Policy Details
    billType                    : yup.string().required('Required'),
    netGross                    : yup.string().required('Required'),
    paymentOption               : yup.string().required('Required'),
    claimCount                  : yup.number().required('Number Required'),
    binderNumber                : yup.string().required('Required'),
    binderTimestamp             : yup.date().required('Date Required'),  
    policyRateType              : yup.string().required('Required'),
    policyTerm                  : yup.number().required('Number Required'),
    product                     : ProductSchema,
    agency                      : AgencySchema,
    insured                     : InsuredSchema,
    autoUnits                   : yup.array().of(AutoSchema),
})

export const POLICIES : Array<PolicyValues> = [
    // POLICY 0 --------------------------------------------
    {
        id                      : uuidv4(),
        policyNumber            : "PPW1303522",
        status                  : POLICYSTATUSES[1],
        applicationDate         : new Date(2023, 0, 19),
        periodStartDate         : new Date(2023, 1, 2),
        periodEndDate           : new Date(2023, 7, 1, 23, 59, 59),
        policyState             : USPSSTATEABBREVIATIONS[18],
        product                 : PRODUCTS[0],
        agency                  : AGENCIES[0],
        insured         : {
            id                  : uuidv4(),
            name                : "K Grosses Esmeralda",
            phone    : "1-847-123-1234",
            email :   "kggreen@gmail.com",
            mailingAddress      : {
                streetAddress1  : "714 Lenox Ave",
                streetAddress2  : "",
                city            : "Waukegan",
                state           : USPSSTATEABBREVIATIONS[17],
                zip             : "60085"
            },
            dateOfBirth         : new Date(1976, 1, 19),
            effectiveDate       : new Date(2023, 1, 2),
            gender              : GENDERS[1],
            maritalStatus       : MARITALSTATUSES[0],
            occupation          : "occupied",
            spouseOccupation    : "N/A",
            asInterestMayAppear : ASINTERESTMAYAPPEAR[4],
            //Record stamps
            creatorId           : USERS[0].id,
            creatorName         : USERS[0].name,
            created             : new Date(),
            lastModified        : new Date()
        },
        //Policy Details
        billType                : "Direct",
        netGross                : "Gross",
        paymentOption           : "Monthly",
        claimCount              : 2,
        binderNumber            : "PPW1303522",
        binderTimestamp         : new Date(2023, 0, 19),
        policyRateType          : "Standard",
        policyTerm              : 6,
        premiumInforce          : 397,
        premiumWritten          : 2400,
        statementDate           : 12,
        territory               : "IL-47",
        yearsRenewed            : 0,
        //Endorsement details
        endorsementNumber       : 0,
        endorsementAmount       : 0,
        endorsementStatus       : ENDORSEMENTSTATUSES[0],
        endorsementEffectiveDate: new Date(2023, 1, 2),

        //Operator details
        operators       : [
            {
                number                      : 1,
                name                        : "K. Grossen Esmeralda",
                phone                       : "1-847-123-1234",
                email                       : "",
                mailingAddress              : {
                    streetAddress1          : "714 Lenox Ave",
                    streetAddress2          : "",
                    city                    : "Waukegan",
                    state                   : USPSSTATEABBREVIATIONS[17],
                    zip                     : "60085"
                },
                dateOfBirth                 : new Date(1976, 1, 19),
                type                        : OPERATORTYPES[0],
                sr22                        : SR22S[0],
                licenseNumber               : "A1234567",
                licenseState                : USPSSTATEABBREVIATIONS[17],
                licenseExpirationDate       : new Date("12-31-2020"),
                relationToInsured           : RELATIONTOINSURED[0],
                accidentsViolations         : "09/01/18(V) 08/01/20(V) 11/01/20(V)",
                effectiveDate               : new Date(2023, 1, 2),
                creatorId                   : USERS[0].id,
                creatorName                 : USERS[0].name,
                created                     : new Date(),
                lastModified                : new Date()
},
            {
                number                  : 2,
                name                    : "Mysmeen Yoursmeen",
                phone                   : "1-847-123-1234",
                email                   : "",
                mailingAddress          : {
                    streetAddress1      : "714 Lenox Ave",
                    streetAddress2      : "",
                    city                : "Waukegan",
                    state               : USPSSTATEABBREVIATIONS[17],
                    zip                 : "60085"
                },
                dateOfBirth             : new Date(1999, 2, 13),
                type                    : OPERATORTYPES[1],
                sr22                    : SR22S[0],
                licenseNumber           : "A1234567",
                licenseState            : USPSSTATEABBREVIATIONS[17],
                licenseExpirationDate   : new Date("12-31-2025"),
                relationToInsured       : RELATIONTOINSURED[1],
                accidentsViolations     : "",
                effectiveDate           : new Date(2023, 1, 2),
                creatorId               : USERS[0].id,
                creatorName             : USERS[0].name,
                created                 : new Date(),
                lastModified            : new Date()
            },
            {
                number                  : 3,
                name                    : "Fernando Rey",
                phone                   : "1-847-123-1234",
                email                   : "",
                mailingAddress          : {
                    streetAddress1      : "714 Lenox Ave",
                    streetAddress2      : "",
                    city                : "Waukegan",
                    state               : USPSSTATEABBREVIATIONS[17],
                    zip                 : "60085"
                },
                dateOfBirth             : new Date(1975, 5, 19),
                type                    : OPERATORTYPES[2],
                sr22                    : SR22S[0],
                licenseNumber           : "A1234567",
                licenseState            : USPSSTATEABBREVIATIONS[17],
                licenseExpirationDate   : new Date(2025, 0, 25),
                relationToInsured       : RELATIONTOINSURED[2],
                accidentsViolations     : "",
                effectiveDate           : new Date(2023, 1, 2),
                creatorId               : USERS[0].id,
                creatorName             : USERS[0].name,
                created                 : new Date(2023, 0, 19),
                lastModified            : new Date()
            },
            {
                number                      : 4,
                name                        : "Carmen Mendez",
                phone                       : "1-847-123-1234",
                email                       : "",
                mailingAddress              : {
                    streetAddress1          : "714 Lenox Ave",
                    streetAddress2          : "",
                    city                    : "Waukegan",
                    state                   : USPSSTATEABBREVIATIONS[17],
                    zip                     : "60085"
                },
                dateOfBirth                 : new Date(2004, 10, 18),
                type                        : OPERATORTYPES[2],
                sr22                        : SR22S[1],
                licenseNumber               : "A7654321",
                licenseState                : USPSSTATEABBREVIATIONS[17],
                licenseExpirationDate       : new Date(2023, 11, 31),
                relationToInsured           : RELATIONTOINSURED[3],
                accidentsViolations         : "",
                effectiveDate               : new Date(2023, 1, 2),
                creatorId                   : USERS[0].id,
                creatorName                 : USERS[0].name,
                created                     : new Date(2023, 0, 19),
                lastModified                : new Date()
            }

        ],
        //Auto details
        autoUnits        : [
            {
                id              : uuidv4(),
                unit            : 1,
                make            : "Honda",
                model           : "Odyssey",
                year            : 2006,
                vin             : "5FNRL38436B082307",
                sym             : "10",
                age             : 16,
                terr            : "40",
                class           : "4T",
                pts             : 0,
                atf             : "1",
                flcv            : "Y",
                mc              : "Y",
                effectiveDate   : new Date(2023, 1, 2),
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
                creatorId               : USERS[0].id,
                creatorName             : USERS[0].name,
                created                 : new Date(),
                lastModified            : new Date()
            },
            {
                id              : uuidv4(),
                unit            : 2,
                make            : "BMW",
                model           : "328XI",
                year            : 2007,
                vin             : "WBAVB735X7PZ12345",
                sym             : "10",
                age             : 15,
                terr            : "40",
                class           : "4T",
                pts             : 7,
                atf             : "1",
                flcv            : "Y",
                mc              : "Y",
                effectiveDate   : new Date(2023, 1, 2),
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
                ], 
                creatorId              : USERS[0].id,
                creatorName            : USERS[0].name,
                created                : new Date(),
                lastModified           : new Date()
            }
        ],
        //Policy document endorsements
        documentEndorsements        : [ "IL01264A", "IL01-001", "IL01-003" ],
        //Record stamps
        creatorId       : USERS[0].id,
        creatorName     : USERS[0].name,
        created         : new Date(),
        lastModified    : new Date(),
    },
//POLICY 1 --------------------------------------------------
    {
        id                      : uuidv4(),
        policyNumber            : "PPT3001906",
        status                  : POLICYSTATUSES[2],
        applicationDate         : new Date(2023, 2, 27),
        //set periodStartDate to February 2, 2023 at 12:00:00 AM
        periodStartDate         : new Date(2023, 3, 2),
        //set periodEndDate to 6 months after periodStartDate at 11:59:59 PM
        periodEndDate           : new Date(2023, 10, 1, 23, 59, 59),
        policyState             : USPSSTATEABBREVIATIONS[17],
        product                 : PRODUCTS[1],
        agency                  : AGENCIES[1],
        insured                 : {
            id                  : uuidv4(),
            name                : "James D Wilson",
            phone               : "1-847-123-1234",
            email               : "tdwilson99@gmail.com",
            mailingAddress   : {
                streetAddress1  : "914 N Homan Ave",
                streetAddress2  : "",
                city            : "Chicago",
                state           : USPSSTATEABBREVIATIONS[17],
                zip             : "60651"
            },
            dateOfBirth         : new Date(1990, 2, 23),
            effectiveDate       : new Date(2023, 2, 27),
            gender              : GENDERS[0],
            maritalStatus       : MARITALSTATUSES[0],
            occupation          : "Unoccupied",
            spouseOccupation    : "N/A",
            asInterestMayAppear: ASINTERESTMAYAPPEAR[5],
            creatorId           : USERS[0].id,
            creatorName         : USERS[0].name,
            created             : new Date(),
            lastModified        : new Date()
        },
        //Policy Details
        billType                : "Agent",
        netGross                : "Net",
        paymentOption           : "Monthly",
        claimCount              : 0,
        binderNumber            : "PPT3001906",
        binderTimestamp         : new Date(2023, 2, 27),
        policyRateType          : "IL-Auto-Standard",
        policyTerm              : 6,
        premiumInforce          : 500,
        premiumWritten         : 1980,
        statementDate           : 22,
        territory               : "40",
        yearsRenewed            : 0,
        //Endorsement details
        endorsementNumber       : 0,
        endorsementAmount       : 0,
        endorsementStatus       : ENDORSEMENTSTATUSES[0],
        endorsementEffectiveDate: new Date(2023, 3, 2),
        operators       : [
            {
                number                      : 1,
                name                        : "James D Wilson",
                phone                       : "1-847-123-1234",
                email                       : "",
                mailingAddress              : {
                    streetAddress1  : "914 N Homan Ave",
                    streetAddress2  : "",
                    city            : "Chicago",
                    state           : USPSSTATEABBREVIATIONS[17],
                    zip             : "60651"
                },
                dateOfBirth                 : new Date(1976, 1, 19),
                type                        : OPERATORTYPES[0],
                sr22                        : SR22S[1],
                licenseNumber               : "B1234567",
                licenseState                : USPSSTATEABBREVIATIONS[17],
                licenseExpirationDate       : new Date(2020, 11, 31),
                relationToInsured           : RELATIONTOINSURED[0],
                accidentsViolations         : "09/01/18(V) 08/01/20(V) 11/01/20(V)",
                effectiveDate               : new Date(2023, 3, 2),
                creatorId                   : USERS[0].id,
                creatorName                 : USERS[0].name,
                created                     : new Date(),
                lastModified                : new Date()
            }
        ],
        autoUnits        : [
            {
                id             : uuidv4(),
                unit            : 1,
                make            : "Buick",
                model           : "Lacrosse CX",
                year            : 2006,
                vin             : "5FNRL38436B082307",
                sym             : "6",
                age             : 15,
                terr            : "43",
                class           : "2K",
                pts             : 0,
                safe            : "Y",
                trns            : "",
                ren             : "",
                atf             : "1",
                flcv            : "Y",
                vsrc            : "",
                nown            : "",                       
                mc              : "Y",
                effectiveDate   : new Date(2023, 3, 2),
                coverages       : [
                    {
                        coverageType    : "A. Bodily Injury",
                        coverageLimit   : "$25,000 each person, $50,000 each accident",
                        coverageDeductible : " ",
                        coveragePremium : 71.00
                    },
                    {
                        coverageType    : "B. Property Damage",
                        coverageLimit   : "$20,000 each accident",
                        coverageDeductible : " ",
                        coveragePremium : 117.00
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
                lienholders     : [],
                creatorId       : USERS[0].id,
                creatorName     : USERS[0].name,
                created         : new Date(),
                lastModified    : new Date()
            }
        ],
        documentEndorsements        : [ "IL01264A", "IL01-001", "IL01-003" ],
        //Record stamps
        creatorId       : USERS[0].id,
        creatorName     : USERS[0].name,
        created         : new Date(),
        lastModified    : new Date(),
    },
//----------- Policy 2  ------------------------------------------
        {
            id                      : uuidv4(),
            policyNumber            : "PPT0331906",
            status                  : POLICYSTATUSES[0],
            applicationDate         : TODAY,
            //set periodStartDate tomorrow
            periodStartDate         : new Date(TODAY.getDate() + 1),
            //set periodEndDate to 6 months after periodStartDate at 11:59:59 PM
            periodEndDate           : new Date(TODAY.getDate() + 180),
            policyState             : USPSSTATEABBREVIATIONS[17],
            product                 : PRODUCTS[3],
            agency                  : AGENCIES[2],
            insured                 : {
                id                  : uuidv4(),
                name                : "Gregory House",
                phone               : "1-847-123-1234",
                email               : "differentialdx@gmail.com",
                mailingAddress   : {
                    streetAddress1  : "1 MyHouse Lane",
                    streetAddress2  : "",
                    city            : "Plainseboro",
                    state           : USPSSTATEABBREVIATIONS[17],
                    zip             : "60651"
                },
                dateOfBirth         : new Date(1970, 2, 23),
                effectiveDate       : TOMORROW,
                gender              : GENDERS[0],
                maritalStatus       : MARITALSTATUSES[0],
                occupation          : "Doctor",
                spouseOccupation    : "N/A",
                asInterestMayAppear : ASINTERESTMAYAPPEAR[4],
                creatorId           : USERS[1].id,
                creatorName         : USERS[1].name,
                created             : new Date(),
                lastModified        : new Date()
            },
            //Policy Details
            billType                : "Agent",
            netGross                : "Net",
            paymentOption           : "Monthly",
            claimCount              : 0,
            binderNumber            : "PPT0331906",
            binderTimestamp         : new Date(),
            policyRateType          : "IL-Motorcycle-Standard",
            policyTerm              : 6,
            premiumInforce          : 500,
            premiumWritten          : 1980,
            statementDate           : TOMORROW.getDay(),
            territory               : "40",
            yearsRenewed            : 0,
            //Endorsement details
            endorsementNumber       : 0,
            endorsementAmount       : 0,
            endorsementStatus       : ENDORSEMENTSTATUSES[0],
            endorsementEffectiveDate: new Date(),
            operators       : [
                {
                    number                      : 1,
                    name                        : "Greg House",
                    phone                       : "1-847-123-1234",
                    email                       : "",
                    mailingAddress   : {
                        streetAddress1  : "1 MyHouse Lane",
                        streetAddress2  : "",
                        city            : "Plainseboro",
                        state           : USPSSTATEABBREVIATIONS[17],
                        zip             : "60651"
                    },
                    dateOfBirth         : new Date(1970, 2, 23),
                    type                : OPERATORTYPES[0],
                    sr22                        : SR22S[1],
                    licenseNumber               : "IL0295720",
                    licenseState                : USPSSTATEABBREVIATIONS[17],
                    licenseExpirationDate       : new Date(2020, 11, 31),
                    relationToInsured           : RELATIONTOINSURED[0],
                    accidentsViolations         : "09/01/18(V) 08/01/20(V) 11/01/22(V)",
                    effectiveDate               : new Date(TODAY.getDate() + 1),
                    creatorId                   : USERS[2].id,
                    creatorName                 : USERS[2].name,
                    created                     : new Date(),
                    lastModified                : new Date()
                }
            ],
            autoUnits        : [
                {
                    id             : uuidv4(),
                    unit            : 1,
                    make            : "Honda",
                    model           : "CRX",
                    year            : 2022,
                    vin             : "5JKL38436B082307",
                    sym             : "6",
                    age             : 15,
                    terr            : "43",
                    class           : "2K",
                    pts             : 0,
                    safe            : "Y",
                    trns            : "",
                    ren             : "",
                    atf             : "1",
                    flcv            : "Y",
                    vsrc            : "",
                    nown            : "",                       
                    mc              : "Y",
                    effectiveDate   : new Date(TODAY.getDate() + 1),
                    coverages       : [
                        {
                            coverageType    : "A. Bodily Injury",
                            coverageLimit   : "$25,000 each person, $50,000 each accident",
                            coverageDeductible : " ",
                            coveragePremium : 71.00
                        },
                        {
                            coverageType    : "B. Property Damage",
                            coverageLimit   : "$20,000 each accident",
                            coverageDeductible : " ",
                            coveragePremium : 117.00
                        },
                        {
                            coverageType    : "C. Medical Payments",
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
                        }
                    ],
                    lienholders     : [
                        {
                            name            : "Bobs Bail Bonds and Motorcylce Loans",
                            mailingAddress   : {
                                streetAddress1  : "13 Dank Alley",
                                streetAddress2  : "",
                                city            : "Plainsboro",
                                state           : USPSSTATEABBREVIATIONS[17],
                                zip             : "60651"
                            },
                        }    
                    ],
                    creatorId       : USERS[0].id,
                    creatorName     : USERS[0].name,
                    created         : new Date(),
                    lastModified    : new Date()
                }
            ],
            documentEndorsements        : [ "IL01264A", "IL01-001", "IL01-003" ],
            //Record stamps
            creatorId       : USERS[2].id,
            creatorName     : USERS[2].name,
            created         : new Date(),
            lastModified    : new Date(),
        },
        //----------- Policy 3  ------------------------------------------
        {
            id                      : uuidv4(),
            policyNumber            : "PPW0981976",
            status                  : POLICYSTATUSES[0],
// set applicationDate to 1 month before TODAY
            applicationDate         : new Date(TODAY.getDate() - 30),
            //set periodStartDate tomorrow
            periodStartDate         : new Date(TODAY.getDate() + 1),
            //set periodEndDate to 6 months after periodStartDate at 11:59:59 PM
            periodEndDate           : new Date(TODAY.getDate() + 183),
            policyState             : USPSSTATEABBREVIATIONS[17],
            product                 : PRODUCTS[3],
            agency                  : AGENCIES[2],
            insured                 : {
                id                  : uuidv4(),
                name                : "Lisa Cuddy",
                phone               : "1-415-321-1234",
                email               : "madgams@gmail.com",
                mailingAddress   : {
                    streetAddress1  : "92 Bush Lane",
                    streetAddress2  : "",
                    city            : "Plainsboro",
                    state           : USPSSTATEABBREVIATIONS[17],
                    zip             : "60651"
                },
                dateOfBirth         : new Date(1982, 2, 23),
                effectiveDate       : TOMORROW,
                gender              : GENDERS[1],
                maritalStatus       : MARITALSTATUSES[3],
                occupation          : "Hospital Dean",
                spouseOccupation    : "N/A",
                asInterestMayAppear : ASINTERESTMAYAPPEAR[5],
                creatorId           : USERS[1].id,
                creatorName         : USERS[1].name,
                created             : new Date(),
                lastModified        : new Date()
            },
            //Policy Details
            billType                : "Agent",
            netGross                : "Net",
            paymentOption           : "Monthly",
            claimCount              : 0,
            binderNumber            : "PPT0331906",
            binderTimestamp         : new Date(),
            policyRateType          : "IL-Auto-Standard",
            policyTerm              : 6,
            premiumInforce          : 500,
            premiumWritten          : 1980,
            statementDate           : TOMORROW.getDay(),
            territory               : "42",
            yearsRenewed            : 0,
            //Endorsement details
            endorsementNumber       : 0,
            endorsementAmount       : 0,
            endorsementStatus       : ENDORSEMENTSTATUSES[0],
            endorsementEffectiveDate: new Date(),
            operators       : [
                {
                    number                      : 1,
                    name                        : "Greg House",
                    phone                       : "1-847-123-1234",
                    email                       : "",
                    mailingAddress   : {
                        streetAddress1  : "1 MyHouse Lane",
                        streetAddress2  : "",
                        city            : "Plainseboro",
                        state           : USPSSTATEABBREVIATIONS[17],
                        zip             : "60651"
                    },
                    dateOfBirth         : new Date(1970, 2, 23),
                    type                : OPERATORTYPES[0],
                    sr22                        : SR22S[1],
                    licenseNumber               : "IL0295720",
                    licenseState                : USPSSTATEABBREVIATIONS[17],
                    licenseExpirationDate       : new Date(2023, 11, 31),
                    relationToInsured           : RELATIONTOINSURED[0],
                    accidentsViolations         : "09/01/18(V) 08/01/20(V) 11/01/22(V)",
                    effectiveDate               : TOMORROW,
                    creatorId                   : USERS[2].id,
                    creatorName                 : USERS[2].name,
                    created                     : new Date(),
                    lastModified                : new Date()
                }
            ],
            autoUnits        : [
                {
                    id             : uuidv4(),
                    unit            : 1,
                    make            : "Honda",
                    model           : "CRX",
                    year            : 2022,
                    vin             : "5JKL38436B082307",
                    sym             : "6",
                    age             : 15,
                    terr            : "43",
                    class           : "2K",
                    pts             : 0,
                    safe            : "Y",
                    trns            : "",
                    ren             : "",
                    atf             : "1",
                    flcv            : "Y",
                    vsrc            : "",
                    nown            : "",                       
                    mc              : "Y",
                    effectiveDate   : TOMORROW,
                    coverages       : [
                        {
                            coverageType    : "A. Bodily Injury",
                            coverageLimit   : "$25,000 each person, $50,000 each accident",
                            coverageDeductible : " ",
                            coveragePremium : 71.00
                        },
                        {
                            coverageType    : "B. Property Damage",
                            coverageLimit   : "$20,000 each accident",
                            coverageDeductible : " ",
                            coveragePremium : 117.00
                        },
                        {
                            coverageType    : "C. Medical Payments",
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
                        }
                    ],
                    lienholders     : [
                        {
                            name            : "Bobs Bail Bonds and Motorcylce Loans",
                            mailingAddress   : {
                                streetAddress1  : "13 Dank Alley",
                                streetAddress2  : "",
                                city            : "Plainsboro",
                                state           : USPSSTATEABBREVIATIONS[17],
                                zip             : "60651"
                            },
                        }    
                    ],
                    creatorId       : USERS[0].id,
                    creatorName     : USERS[0].name,
                    created         : new Date(),
                    lastModified    : new Date()
                }
            ],
            documentEndorsements        : [ "IL01264A", "IL01-001", "IL01-003" ],
            //Record stamps
            creatorId       : USERS[2].id,
            creatorName     : USERS[2].name,
            created         : new Date(),
            lastModified    : new Date(),
        },
//----------- Policy 4  ------------------------------------------
        {
            id                      : uuidv4(),
            policyNumber            : "PPX0981976",
            status                  : POLICYSTATUSES[0],
            applicationDate         : new Date(TODAY.getDate() - 30),
            //set periodStartDate tomorrow
            periodStartDate         : new Date(TODAY.getDate() + 1),
            //set periodEndDate to 6 months after periodStartDate at 11:59:59 PM
            periodEndDate           : new Date(TODAY.getDate() + 183),
            policyState             : USPSSTATEABBREVIATIONS[17],
            product                 : PRODUCTS[3],
            agency                  : AGENCIES[2],
            insured                 : {
                id                  : uuidv4(),
                name                : "Eric Foreman",
                phone               : "1-415-321-1234",
                email               : "drforeman@gmail.com",
                mailingAddress   : {
                    streetAddress1  : "1313 Mockingbird Lane",
                    streetAddress2  : "",
                    city            : "Plainsboro",
                    state           : USPSSTATEABBREVIATIONS[17],
                    zip             : "60651"
                },
                dateOfBirth         : new Date(1982, 2, 23),
                effectiveDate       : TOMORROW,
                gender              : GENDERS[0],
                maritalStatus       : MARITALSTATUSES[3],
                occupation          : "Neurologist",
                spouseOccupation    : "N/A",
                asInterestMayAppear : ASINTERESTMAYAPPEAR[5],
                creatorId           : USERS[0].id,
                creatorName         : USERS[0].name,
                created             : new Date(),
                lastModified        : new Date()
            },
            //Policy Details
            billType                : "Direct",
            netGross                : "Net",
            paymentOption           : "Monthly",
            claimCount              : 0,
            binderNumber            : "PPX0981976",
            binderTimestamp         : new Date(),
            policyRateType          : "IL-Auto-Standard",
            policyTerm              : 6,
            premiumInforce          : 500,
            premiumWritten          : 1980,
            statementDate           : TOMORROW.getDay(),
            territory               : "42",
            yearsRenewed            : 0,
            //Endorsement details
            endorsementNumber       : 0,
            endorsementAmount       : 0,
            endorsementStatus       : ENDORSEMENTSTATUSES[0],
            endorsementEffectiveDate: new Date(),
            operators       : [
                {
                    number                      : 1,
                    name                        : "Eric Foreman",
                    phone                       : "1-847-123-1234",
                    email                       : "",
                    mailingAddress   : {
                        streetAddress1  : "1313 Mockingbird Lane",
                        streetAddress2  : "",
                        city            : "Plainsboro",
                        state           : USPSSTATEABBREVIATIONS[17],
                        zip             : "60651"
                    },
                    dateOfBirth         : new Date(1970, 2, 23),
                    type                : OPERATORTYPES[0],
                    sr22                        : SR22S[1],
                    licenseNumber               : "IL0295720",
                    licenseState                : USPSSTATEABBREVIATIONS[17],
                    licenseExpirationDate       : new Date(2023, 11, 31),
                    relationToInsured           : RELATIONTOINSURED[0],
                    accidentsViolations         : "09/01/18(V) 08/01/20(V) 11/01/22(V)",
                    effectiveDate               : TOMORROW,
                    creatorId                   : USERS[2].id,
                    creatorName                 : USERS[2].name,
                    created                     : new Date(),
                    lastModified                : new Date()
                }
            ],
            autoUnits        : [
                {
                    id             : uuidv4(),
                    unit            : 1,
                    make            : "Buick",
                    model           : "Regal",
                    year            : 2005,
                    vin             : "6LKJUG436B082307",
                    sym             : "6",
                    age             : 15,
                    terr            : "43",
                    class           : "2K",
                    pts             : 0,
                    safe            : "Y",
                    trns            : "",
                    ren             : "",
                    atf             : "1",
                    flcv            : "Y",
                    vsrc            : "",
                    nown            : "",                       
                    mc              : "N",
                    effectiveDate   : TOMORROW,
                    coverages       : [
                        {
                            coverageType    : "A. Bodily Injury",
                            coverageLimit   : "$25,000 each person, $50,000 each accident",
                            coverageDeductible : " ",
                            coveragePremium : 71.00
                        },
                        {
                            coverageType    : "B. Property Damage",
                            coverageLimit   : "$20,000 each accident",
                            coverageDeductible : " ",
                            coveragePremium : 117.00
                        },
                        {
                            coverageType    : "C. Medical Payments",
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
                        }
                    ],
                    lienholders     : [
                        {
                            name: "",
                            mailingAddress   : {
                                streetAddress1  : "",
                                streetAddress2  : "",
                                city            : "",
                                state           : USPSSTATEABBREVIATIONS[17],
                                zip             : ""
                            },
                        }    
                    ],
                    creatorId       : USERS[0].id,
                    creatorName     : USERS[0].name,
                    created         : new Date(),
                    lastModified    : new Date()
                }
            ],
            documentEndorsements        : [ "IL01264A", "IL01-001", "IL01-003" ],
            //Record stamps
            creatorId       : USERS[2].id,
            creatorName     : USERS[2].name,
            created         : new Date(),
            lastModified    : new Date(),
        },

]
