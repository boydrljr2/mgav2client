export const RoleValues = ['Administrator', 'User']

export interface UserValues {
    id          : number;
    name        : string;
    email       : string;
    password    : string;
    image       : string;
    role        : string;
    creatorId   : number;
    creatorName : string;
    created     : Date;
    lastModified: Date;
}

export interface UserItemValues {
    user? : UserValues;
}

export const USERS : Array<UserValues> = [
    {
        id: 1,
        name: "Able Baker",
        email: "able@baker.com",
        password: "passwordAB",
        image: "https://this-person-does-not-exist.com/fr",
        role: "Administrator",
        creatorId: 1,
        creatorName: "Able Baker",
        created: new Date("2023-03-08T19:56:54.874Z"),
        lastModified: new Date("2023-03-08T19:56:54.874Z")
    },
    {
        id: 2,
        name: "Charlie Dog",
        email: "charlie@dog.com",
        password: "passwordCD",
        image: "https://this-person-does-not-exist.com/de",
        role: "User",
        creatorId: 1,
        creatorName: "Able Baker",
        created: new Date("2023-03-08T19:56:54.874Z"),
        lastModified: new Date("2023-03-08T19:56:54.874Z")
    }
]
    