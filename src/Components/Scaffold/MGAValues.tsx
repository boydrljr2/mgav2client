import { v4 as uuidv4 } from 'uuid';
import { yupResolver }  from '@hookform/resolvers/yup';
import * as yup from 'yup';

// ------  Some Regex Validations -------
const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
const zipRegex = /^\d{5}(?:[-\s]\d{4})?$/;
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;

export interface GenderValues {
    label: string;
    value: string;
}

export const GENDERS : Array<GenderValues> = [
    {label:'M', value:'Male'},
    {label:'F', value:'Female'}
]

// ---------- MAILING ADDRESS  ----------  MAILING ADDRESS  -----------

export interface USPSStateAbbreviationValues {
    label: string;
    value: string;
}

export interface MailingAddressValues {
    id              : string;
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
    name : yup.string(),
    initial : yup.string(),
    streetAddress1: yup.string().required('Street Required'),
    streetAddress2: yup.string(),
    city: yup.string().required('City Required'),
    state:  yup.object().shape({
        label: yup.string().required('State Required'),
        value: yup.string().required('State Required'),
    }),
    zip: yup.string().required('Zip Required').matches(zipRegex, 'Invalid Zip'),
});

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

//--------------   PERSON CONTACT ----------------- PERSON CONTACT -----------------
export interface PersonValues {
    name            : string;
    mailingAddress? : MailingAddressValues;
    phone?          : string;
    email?          : string;
}

export const PersonSchema = yup.object().shape({
    name: yup.string().required('Name Required'),
    mailingAddress: MailingAddressSchema,
    phone: yup.string().matches(phoneRegex, 'Invalid Phone'),
    email: yup.string().email('Invalid Email'),
});

//---------------  USERS  ----------------- USERS  -----------------
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
    avatar?                 : string;
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
    avatar                  : '',
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
        id              : uuidv4(),
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
    creatorId               : user1Id,
    creatorName             : USERS[0].name,
    created                 : new Date(),
    lastModified            : new Date()
}

export const INSURERS   : InsurerValues[] = [
    {   
        id              : uuidv4(),
        name            : 'United Equitable Insurance Company',
        avatar          : '/static/images/UnitedEquitableAvatar.jpg',
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
                id              : uuidv4(),
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
        creatorId       : user1Id,
        creatorName     : USERS[0].name,
        created         : new Date(),
        lastModified    : new Date()
    },
    {   
        id              : uuidv4(),
        name            : 'American Heartland Insurance Company',
        avatar          : '/static/images/AmericanHeartlandAvatar.jpg',
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
                id              : uuidv4(),
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
        creatorId       : user1Id,
        creatorName     : USERS[0].name,
        created         : new Date(),
        lastModified    : new Date()
    },
    {   
        id              : uuidv4(),
        name            : 'Harley Heaven Motorcycle Insurance Co.',
        avatar          : '/static/images/AmericanHeartlandAvatar.jpg',
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
                id              : uuidv4(),
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
        creatorId       : user1Id,
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
    id                  : string;
    legacyId            : string;
    name                : string;
    taxId               : string;
    status              : string;
    contactName         : string;
    phone               : string;
    principalEmail      : string;
    website             : string;
    mailingAddress      : string;
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
        id              : uuidv4(),
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
            id              : uuidv4(),
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
            id              : uuidv4(),
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
        id              : uuidv4(),
        legacyId     : "000224",
        name            : "CRC Insurance Services",
        avatar          : "/static/images/UnitedEquitableAvatar.jpg",
        irsName         : "CRC Insurance Services",
        taxId           : "33-1234567",
        status          : AGENCYSTATUSES[2],
        //Contact Info
        contactName     : "Sierra Tango",
        phone           : "770-392-2700",
        principalEmail  : "support@crcis.com",
        documentEmail   : "docs@crcis.com",
        website         : "https://www.crcinsurance.com",
        mailingAddress : {
            id              : uuidv4(),
            streetAddress1  : "5485 N Elston Ave",
            streetAddress2  : "",
            city            : "Atlanta",
            state           : USPSSTATEABBREVIATIONS[11],
            zip             : "60630"
        },
        //License Info
        licenseNumber   : "123456",
        //set licenseDate to 5 years ago
        licenseDate     : new Date(new Date().setFullYear(new Date().getFullYear() - 5)),
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
    },
    //add one more agency record with all the fields
    {
        //Identifiers ----------------
        id              : uuidv4(),
        legacyId     : "000225",
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
            id              : uuidv4(),
            streetAddress1  : "Quiet Alley",
            streetAddress2  : "",
            city            : "Chicago",
            state           : USPSSTATEABBREVIATIONS[17],
            zip             : "60630"
        },
        //License Info
        licenseNumber   : "123456",
        //set licenseDate to 5 years ago
        licenseDate     : new Date(new Date().setFullYear(new Date().getFullYear() - 5)),
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
    },
    {
        //Identifiers ----------------
        id              : uuidv4(),
        legacyId     : "000225",
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
            id              : uuidv4(),
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
    //Record stamps
    creatorId           : string;
    creatorName         : string;
    created             : Date;
    lastModified        : Date;
}

export interface ProductItemValues {
    product?         : ProductValues;
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
        name            : "Illinois Auto Insurance 2020",
        status          : PRODUCTSTATUSES[2],
        assetType       : PRODUCTASSETTYPES[0],
        state           : USPSSTATEABBREVIATIONS[17],
        defaultRatingTerritory : USPSSTATEABBREVIATIONS[17],
        //set effectiveDate to January 1, 2020 at 12:00:00 AM
        effectiveDate   : new Date(2020, 0, 1),
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
        name            : "Indiana Auto Insurance 2020",
        status          : PRODUCTSTATUSES[1],
        assetType       : PRODUCTASSETTYPES[0],
        state           : USPSSTATEABBREVIATIONS[18],
        defaultRatingTerritory : USPSSTATEABBREVIATIONS[18],
        //set effectiveDate to January 1, 2010 at 12:00:00 AM
        effectiveDate   : new Date(2010, 0, 1),
        sr22            : false,
        insurer         : INSURERS[1],
        //Record stamps
        creatorId       : USERS[0].id,
        creatorName     : USERS[0].name,
        created         : new Date(),
        lastModified    : new Date()
    },
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
]

export interface PolicyAsInterestMayAppearValues {
    label   : string;
    value   : string;
}

export const POLICYASINTERESTMAYAPPEAR : Array<PolicyAsInterestMayAppearValues> = [
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

export interface OperatorValues extends PersonValues {
    dateOfBirth                     : Date;
    operatorType                    : "ADDL" | "PRIN" | "EXCL";
    sr22                            : "N" | "Y";
    operatorLicenseNumber           : string;
    operatorLicenseState            : USPSStateAbbreviationValues;
    operatorLicenseExpirationDate   : Date;
    operatorCoverageStatus          : string; 
    operatorAccidentsViolations     : string;
    //Record stamps
    creatorId       : string;
    creatorName     : string;
    created         : Date;
    lastModified    : Date;
}

export interface InsuredValues {
    id                              : string;
    name                            : string;
    phone?                           : string;
    email?                          : string;
    mailingAddress                  : MailingAddressValues;
    dateOfBirth                     : Date;
    effectiveDate                   : Date;
    gender                          : "M" | "F";
    maritalStatus                   : "M" | "S" | "D" | "W";
    occupation                      : string;
    spouseOccupation                : string;
    asInterestMayAppear             : PolicyAsInterestMayAppearValues;
    //Record stamps
    creatorId       : string;
    creatorName     : string;
    created         : Date;
    lastModified    : Date;
}

export const InsuredSchema = yup.object().shape({ 
    id                              : yup.string().required(),
    name                            : yup.string().required(),
    phone                           : yup.string().matches(phoneRegex, 'Phone number is not valid'),
    email                           : yup.string().email('Invalid email address'),
    mailingAddress                  : MailingAddressSchema,
    dateOfBirth                     : yup.date().required('Required'),
    effectiveDate                   : yup.date().required('Required'),
    gender                          : yup.string().required('Required'),
})

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
    //Record stamps
    creatorId       : string;
    creatorName     : string;
    created         : Date;
    lastModified    : Date;
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
    //Identifiers
    id                      : string;
    policyNumber            : string;
    status                  : PolicyStatusValues;
    applicationDate         : Date;
    periodStartDate         : Date;
    periodEndDate           : Date;
    policyState             : USPSStateAbbreviationValues;
    product                 : ProductValues;
    agency                  : AgencyValues;
    insured                 : InsuredValues;
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
    endorsementStatus       : string;
    endorsementEffectiveDate: Date;
    //Operator details
    operators               : OperatorValues[];
    //Auto details
    autoUnits               : AutoValues[];
    //Policy document endorsements -- awkwardly overridden term 'endorsements'
    documentEndorsements    : string[];
    //Record stamps
    creatorId       : string;
    creatorName     : string;
    created         : Date;
    lastModified    : Date;
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
    product                     : ProductSchema,
    agency                      : AgencySchema,
    insured                     : PersonSchema,
    //Contact Info
    contactName                 : yup.string(),
    phone                       : yup.string().matches(phoneRegex, 'Phone number is not valid'),
    principalEmail              : yup.string().email('Email is not valid'),
    documentEmail               : yup.string().email('Email is not valid'),
    website                     : yup.string().url('Website is not valid'),
    mailingAddress              : MailingAddressSchema,
    //License Info
    licenseNumber               : yup.string(),
    licenseDate                 : yup.date(),
    licenseExpirationDate       : yup.date(),
    appointmentStatus           : yup.string(),
    agentGrade                  : yup.string(),
    headquarterAgent            : yup.string(),
    locationCode                : yup.string(),
    commissionType              : yup.string(),
})

export const POLICIES : Array<PolicyValues> = [
    {
        id                      : uuidv4(),
        policyNumber            : "PPW1303522",
        status                  : "Inforce",
        applicationDate         : new Date(2023, 0, 19),
        //set periodStartDate to February 2, 2023 at 12:00:00 AM
        periodStartDate         : new Date(2023, 1, 2),
        //set periodEndDate to 6 months after periodStartDate at 11:59:59 PM
        periodEndDate           : new Date(2023, 7, 1, 23, 59, 59),
        policyState             : USPSSTATEABBREVIATIONS[18],
        product                 : PRODUCTS[0],
        agency                  : AGENCIES[0],
        insured        : {
            name     : "Esmeralda Zavala",
            mailingAddress   : {
                id              : uuidv4(),
                streetAddress1  : "714 Lenox Ave",
                streetAddress2  : "",
                city            : "Waukegan",
                state           : USPSSTATEABBREVIATIONS[17],
                zip             : "60085"
            },
            phone    : "1-847-123-1234",
            email :   "esmazavala@gmail.com"
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
        endorsementStatus       : "N/A",
        endorsementEffectiveDate: new Date(2023, 1, 2),

        //Operator details
        operators       : [
            {
                name                        : "Esmeralda Zavala",
                operatorType                : "PRIN",
                sr22                        : "N",
                operatorLicenseNumber       : "A1234567",
                operatorLicenseState        : USPSSTATEABBREVIATIONS[17],
                operatorLicenseExpirationDate : new Date("12-31-2020"),
                operatorCoverageStatus      : "COV",
                dateOfBirth           : new Date("02-19-1976"),
                operatorAccidentsViolations : "09/01/18(V) 08/01/20(V) 11/01/20(V)",
            },
            {
                name              : "Yasmeen Lopez",
                operatorType            : "ADDL",
                sr22                    : "N",
                operatorLicenseNumber   : "A1234567",
                operatorLicenseState    : USPSSTATEABBREVIATIONS[17],
                operatorLicenseExpirationDate : new Date("12-31-2025"),
                operatorCoverageStatus  : "COV",
                dateOfBirth : new Date("02-19-1999"),
                operatorAccidentsViolations : ""
            },
            {
                name                    : "Fernando Sanchez",
                operatorType            : "EXCL",
                sr22                    : "N",
                operatorLicenseNumber   : "A1234567",
                operatorLicenseState    : USPSSTATEABBREVIATIONS[17],
                operatorLicenseExpirationDate : new Date("01-31-2025"),
                operatorCoverageStatus  : "NONE",
                dateOfBirth : new Date("06-19-1975"),
                operatorAccidentsViolations : ""
            },
            {
                name                    : "Janette Lopez",
                operatorType            : "EXCL",
                sr22                    : "N",
                operatorLicenseNumber   : "A7654321",
                operatorLicenseState    : USPSSTATEABBREVIATIONS[17],
                operatorLicenseExpirationDate : new Date("12-31-2023"),
                operatorCoverageStatus  : "NONE",
                dateOfBirth : new Date("06-19-2004"),
                operatorAccidentsViolations : ""
            }

        ],
        //Auto details
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
                            streetAddress1  : "123 Main Street",
                            streetAddress2  : " ",
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
        //Policy document endorsements
        documentEndorsements        : [ "IL01264A", "IL01-001", "IL01-003" ],
        //Record stamps
        creatorId       : USERS[0].id,
        creatorName     : USERS[0].name,
        created         : new Date(),
        lastModified    : new Date(),
    },
    //Add one more policy here
    {
        id                      : uuidv4(),
        policyNumber            : "PPT3001906",
        status                  : "Inforce",
        applicationDate         : new Date(2023, 2, 27),
        //set periodStartDate to February 2, 2023 at 12:00:00 AM
        periodStartDate         : new Date(2023, 3, 2),
        //set periodEndDate to 6 months after periodStartDate at 11:59:59 PM
        periodEndDate           : new Date(2023, 10, 1, 23, 59, 59),
        policyState             : USPSSTATEABBREVIATIONS[17],
        product                 : PRODUCTS[1],
        agency                  : AGENCIES[1],
        insured                 : {
            name     : "Tyrice D Wilson",
            mailingAddress   : {
                id              : uuidv4(),
                streetAddress1  : "914 N Homan Ave",
                streetAddress2  : "",
                city            : "Chicago",
                state           : USPSSTATEABBREVIATIONS[17],
                zip             : "60651"
            },
            phone    : "1-847-123-1234",
            email :   "tdwilson99@gmail.com"
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
        endorsementNumber       : 1,
        endorsementAmount       : 0,
        endorsementStatus       : " ",
        endorsementEffectiveDate: new Date(2023, 3, 2),
        operators       : [
            {
                name                        : "Tyrice D Wilson",
                operatorType                : "PRIN",
                sr22                        : "N",
                operatorLicenseNumber       : "B1234567",
                operatorLicenseState        : USPSSTATEABBREVIATIONS[17],
                operatorLicenseExpirationDate : new Date("12-31-2020"),
                operatorCoverageStatus      : "COV",
                dateOfBirth           : new Date("02-19-1976"),
                operatorAccidentsViolations : "09/01/18(V) 08/01/20(V) 11/01/20(V)",
            }

        ],
        autoUnits        : [
            {
                unit            : 1,
                autoMake        : "Buick",
                autoModel       : "Lacrosse CX",
                autoYear        : 2006,
                autoVIN         : "5FNRL38436B082307",
                autoSYM         : "6",
                autoAGE         : 15,
                autoTERR        : "43",
                autoCLASS       : "2K",
                autoPTS         : 0,
                autoSAFE        : "Y",
                autoTRNS        : "",
                autoREN         : "",
                autoATF         : "1",
                autoFLCV        : "Y",
                autoVSRC        : "",
                autoNOWN        : "",                       
                autoMC          : "Y",
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
                lienholders     : []
            },

        ],
        documentEndorsements        : [ "IL01264A", "IL01-001", "IL01-003" ],
        //Record stamps
        creatorId       : USERS[0].id,
        creatorName     : USERS[0].name,
        created         : new Date(),
        lastModified    : new Date(),
    },
]

export const newPolicy : PolicyValues = {
        id                      : uuidv4(),
        policyNumber            : "",
        status                  : "NEW",
        applicationDate         : new Date(),
        periodStartDate         : new Date(),
        periodEndDate           : new Date(),
        policyState             : USPSSTATEABBREVIATIONS[0],
        product                 : PRODUCTS[0],
        agency                  : AGENCIES[0],
        insured        : {
            name     :  "",
            mailingAddress   : {
                id              : uuidv4(),
                streetAddress1  : "",
                streetAddress2  : "",
                city            : "",
                state           : USPSSTATEABBREVIATIONS[0],
                zip             : ""
            },
            phone    : "",
            email :   ""
        },
        //Policy Details
        billType                : "Agent Bill",
        netGross                : "Net",
        paymentOption           : "Monthly",
        claimCount              : 0,
        binderNumber            : "",
        binderTimestamp         : new Date(),
        policyRateType          : "",
        policyTerm              : 0,
        premiumInforce          : 0,
        premiumWritten         : 0,
        statementDate           : 0,
        territory               : "",
        yearsRenewed            : 0,
        //Endorsement details
        endorsementNumber       : 0,
        endorsementAmount       : 0,
        endorsementStatus       : " ",
        endorsementEffectiveDate: new Date(),
        //Operator details
        operators       : [
            {
                name     :  "",
                operatorType                : "PRIN",
                sr22                        : "N",
                operatorLicenseNumber       : "",
                operatorLicenseState        : USPSSTATEABBREVIATIONS[17],
                operatorLicenseExpirationDate : new Date(),
                operatorCoverageStatus      : "COV",

                dateOfBirth           : new Date(),
                operatorAccidentsViolations : "",
            }
        ],
        //Auto details
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
                            streetAddress1  : "",
                            streetAddress2  : "",
                            city            : "",
                            state           : USPSSTATEABBREVIATIONS[17],
                            zip             : ""
                        }
                    }
                ]
            }            
        ],
        documentEndorsements        : [ "IL01-001", "IL01-003" ],
        //Record stamps
        creatorId       : user1Id,
        creatorName     : USERS[0].name,
        created         : new Date(),
        lastModified    : new Date(),
    }
