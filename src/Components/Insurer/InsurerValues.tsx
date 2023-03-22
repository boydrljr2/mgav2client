import { v4 as uuidv4 } from 'uuid';
import { MailingAddressValues } from '../Scaffold/MGAValues';

export interface InsurerValues {
    id                      : string;
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

export interface InsurerItemValues {
    insurer? : InsurerValues;
}

export const newInsurer : InsurerValues = {
    id                      : uuidv4(),
    insurerFEIN             : '',
    insurerStatus           : '',
    insurerName             : '',
    insurerDomicileState    : '',
    insurerPhone            : '',
    insurerEmail            : '',
    insurerURL              : '',
    insurerMailingAddress   : {
        id              : uuidv4(),
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
    creatorId               : 1,
    creatorName             : 'Able Baker',
    created                 : new Date(),
    lastModified            : new Date()
}


export const INSURERS   : InsurerValues[] = [
    {   
        id              : uuidv4(),
        insurerFEIN     : '36-2222222',
        insurerStatus   : "Active",
        insurerName     : 'United Equitable Insurance Company',
        insurerPhone    : '800-234-6926',
        insurerEmail    : 'service@ueilink.com',
        insurerMailingAddress: {
                id              : uuidv4(),
                name            : "UEIC Headquarters",
                streetAddress   : "9040 Waukegan Road, Suite 100",
                city            : "Morton Grove",
                state           : "IL",
                zip             : "60053"
            },
        insurerDomicileState: 'IL',
        NAICGroup       : '167',
        NAICCode        : '24910',
        NAICGroupName   : 'United Equitable Group',
        AMBestID        : '12345',
        AMBestRating    : 'A+',
        creatorId       : 1,
        creatorName     : 'Able Baker',
        created         : new Date(),
        lastModified    : new Date()
    },
    {   
        id              : uuidv4(),
        insurerFEIN     : '36-11111111',
        insurerStatus   : "Active",
        insurerName     : 'American Heartland Insurance Company',
        insurerPhone: '847-583-4800',
        insurerEmail: 'service@ahiclink.com',
        insurerMailingAddress: {
                id              : uuidv4(),
                name            : "AHIC Headquarters",
                streetAddress   : "9040 Waukegan Road, Suite 200",
                city            : "Morton Grove",
                state           : "IL",
                zip             : "60053"
            },
        insurerDomicileState: 'IL',
        NAICGroup: '167',
        NAICCode: '24910',
        NAICGroupName: 'United Equitable Group',
        AMBestID: 'A+',
        AMBestRating: 'A+',
        creatorId       : 1,
        creatorName     : 'Able Baker',
        created         : new Date(),
        lastModified    : new Date()
    }
]