import { v4 as uuidv4 } from 'uuid';

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
    creatorId   : number;
    creatorName : string;
    created     : Date;
    lastModified: Date;
}

export const newUser : UserValues = { 
        id          : uuidv4(),
        name        : '',
        email       : '',
        password    : '',
        image       : '',
        role        : ROLES[0],
        creatorId   : 1,
        creatorName : 'Able Baker',
        created     : new Date(),
        lastModified: new Date()
}

export interface UserItemValues {
    user? : UserValues;
}

export interface UserErrors {
    id          : string;
    name        : string;
    email       : string;
    password    : string;
    image       : string;
    role        : string;
    creatorId   : string;
    creatorName : string;
    created     : string;
    lastModified: string;
}

export const USERS : Array<UserValues> = [
    {
        id: uuidv4(),
        name: "Able Baker",
        email: "able@baker.com",
        password: "passwordAB",
        image: "https://this-person-does-not-exist.com/fr",
        role: {label: "Administrator", value: "Administrator"},
        creatorId: 1,
        creatorName: "Able Baker",
        created: new Date("2023-03-08T19:56:54.874Z"),
        lastModified: new Date("2023-03-08T19:56:54.874Z")
    },
    {
        id: uuidv4(),
        name: "Charlie Dog",
        email: "charlie@dog.com",
        password: "passwordCD",
        image: "https://this-person-does-not-exist.com/de",
        role: {label : "User", value: "User"},
        creatorId: 1,
        creatorName: "Able Baker",
        created: new Date("2023-03-08T19:56:54.874Z"),
        lastModified: new Date("2023-03-08T19:56:54.874Z")
    }
]

//@ts-ignore
export const userValidation = values => {

    console.log("userValidation values: ", values);
    console.log("userValidation values.role.value: ", values.role.value);

    const errors = {
        name: '',
        role: '',
        email: '',
        password: ''
    };
    
    if (!values.name) {
        errors.name='Required';
    } else if (values.name.length < 8) {    
        errors.name='Must be 8 characters or more';
    }

   if (values.role !== 'Administrator' && values.role !== 'User') { errors.role='Select One'; }


    if (!values.email) {
        errors.email='Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email='Invalid email address';
    }

    if (!values.password) {
        errors.password='Required';
    } else if (values.password.length < 8) {
        errors.email='Must be 8 characters or more';
    }

    console.log("userValidation errors: ", errors);

    return errors;
        
};
    