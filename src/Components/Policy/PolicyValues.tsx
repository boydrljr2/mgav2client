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

export interface InsuredValues {
    insuredName     : string;
    insuredMailingAddress : MailingAddressValues
}

export interface PolicyValues {
    id: number;
    policyNumber    : string;
    periodBeginsDate: Date;
    periodEndsDate  : Date
    product         : ProductValues;
    agency          : AgencyValues;
    insured         : InsuredValues;
}

export const policies : Array<PolicyValues> = [
    {
        id: 1,
        policyNumber    : "PPW1303522",
        periodBeginsDate: new Date("2020-01-01"),
        periodEndsDate  : new Date("2020-12-31"),
        product        : {
            productName     : "Personal Automobile Insurance Policy",
            insuranceType     : "Personal Automobile Insurance",
            insurer         : {
                insurerName     : "United Equitable Insurance Company",
                insurerEmail    : "www.ueilink.com",
                insurerPhone    : "1-847-583-4600",
                insurerMailingAddress : {
                    id: 1,
                    streetAddress: "9040 Waukegant Road",
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
            insuredName     : "Esmeralda Zavala",
            insuredMailingAddress : {
                id: 3,
                streetAddress: "714 Lenox Ave",
                city: "Waukegan",
                state: "IL",
                zip: "60085"
            }
        },
    }
]
