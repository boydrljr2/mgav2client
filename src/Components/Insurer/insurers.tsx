import {InsurerValues} from '../../Scaffold/MGAValues';

export const insurers: InsurerValues[] = [
    {   
        id: 1,
        insurerFEIN: '36-2222222',
        insurerActive: true,
        insurerName: 'United Equitable Insurance Company',
        insurerPhone: '800-234-6926',
        insurerEmail: 'service@ueilink.com',
        insurerMailingAddress: {
            id: 1,
            streetAddress: "9040 Waukegan Road",
            city: "Morton Grove",
            state: "IL",
            zip: "60053"
        },
        insurerDomicileState: 'IL',
        NAICGroup: '167',
        NAICCode: '24910',
        NAICGroupName: 'United Equitable Group',
        AMBestID: 'A+',
        AMBestRating: 'A+',
        dateEntered: new Date(),
        dateLastModified: new Date()
    },
    {   
        id: 2,
        insurerFEIN: '36-11111111',
        insurerActive: true,
        insurerName: 'American Heartland Insurance Company',
        insurerPhone: '847-583-4800',
        insurerEmail: 'service@ahiclink.com',
        insurerMailingAddress: {
            id: 1,
            streetAddress: "9040 Waukegan Road",
            city: "Morton Grove",
            state: "IL",
            zip: "60053"
        },
        insurerDomicileState: 'IL',
        NAICGroup: '167',
        NAICCode: '24910',
        NAICGroupName: 'United Equitable Group',
        AMBestID: 'A+',
        AMBestRating: 'A+',
        dateEntered: new Date(),
        dateLastModified: new Date()
    }
]