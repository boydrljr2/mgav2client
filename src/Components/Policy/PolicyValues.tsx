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
        firstName : string;
        middleName? : string;
        lastName : string;
    }
    //Write a field definition for Social Security Number 
    //that enforces the format of 999-99-9999
    personSSN? : string;
    personMailingAddress? : MailingAddressValues;
    personPhone?    : string;
    personEmail?    : string;
    personDateOfBirth? : Date;
    personGender? : string;
    personMaritalStatus? : string;
}

export interface OperatorValues extends PersonValues {
    operatorType : "ADDL" | "PRIN" | "EXCL";
    operatorLicenseNumber : string;
    operatorLicenseState : string;
    operatorLicenseExpirationDate : Date;
    operatorCoverageStatus : string; 
}

export interface InsuredValues extends PersonValues {

}



export interface AutoValues {
    unit: number;
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
    autoUnits       : AutoValues[]
}

export const policies : Array<PolicyValues> = [
    {
        id: 1,
        policyNumber    : "PPW1303522",
        periodStartDate: new Date("01-01-2020"),
        periodEndDate  : new Date("12-31-2020"),
        product         : {
            productName     : "Personal Automobile Insurance Policy",
            insuranceType     : "Personal Automobile Insurance",
            insurer         : {
                insurerName     : "United Equitable Insurance Company",
                insurerEmail    : "www.ueilink.com",
                insurerPhone    : "1-847-583-4600",
                insurerMailingAddress : {
                    id: 1,
                    streetAddress: "9040 Waukegan Road",
                    city: "Morton Grove",
                    state: "IL",
                    zip: "60053"
                }
            }
        },
        agency        : {
            agencyName      : "Insure On The Spot Agency",
            agencyPhone    : "1-773-202-45060",
            agencyMailingAddress : {
                id: 2,
                streetAddress: "5485 N Elston Ave",
                city: "Chicago",
                state: "IL",
                zip: "60630"
            }
        },
        insured        : {
            personName     : {
                firstName   : "Esmeralda",
                lastName    : "Zavala"
            },
            personMailingAddress   : {
                id: 3,
                streetAddress: "714 Lenox Ave",
                city: "Waukegan",
                state: "IL",
                zip: "60085"
            }
        },
        autoUnits        : [
            {
                unit: 1,
                autoMake        : "Honda",
                autoModel       : "Odyssey",
                autoYear        : 2006,
                autoVIN         : "5FNRL38436B082307",
                autoSymbol      : "10"
            },
            {
                unit: 2,
                autoMake        : "BMW",
                autoModel       : "328XI",
                autoYear        : 2007,
                autoVIN         : "WBAVC93597K033082",
                autoSymbol      : "16"
            }       
        ]
    },
]
