export interface UserValues {
    id: number;
    name: string;
    email: string;
    password: string;
    image: string;
    creator: string;
}

export const users : Array<UserValues> = [
    {
        id: 1,
        name: "Able Baker",
        email: "able@baker.com",
        password: "passwordAB",
        image: "https://this-person-does-not-exist.com/fr",
        creator: "Able Baker"
    },
    {
        id: 2,
        name: "Charlie Dog",
        email: "charlie@dog.com",
        password: "passwordCD",
        image: "https://this-person-does-not-exist.com/de",
        creator: "Able Baker"
    },
    {
        id: 3,
        name: "Easy Foxtrot",
        email: "easy@foxtrot.com",
        password: "passwordEF",
        image: "https://this-person-does-not-exist.com/it",
        creator: "Able Baker"
    },
    {
        id: 4,
        name: "Golf Hotel",
        email: "golf@hotel.com",
        password: "passwordGH",
        image: "https://this-person-does-not-exist.com/fr",
        creator: "Able Baker"
    },
    {
        id: 5,
        name: "India Juliet",
        email: "india@juliet.com",
        password: "passwordIJ",
        image: "https://this-person-does-not-exist.com/de",
        creator: "Able Baker"
    },
    {
        id: 6,
        name: "Kilo Lima",
        email: "kilo@lima.com",
        password: "passwordEF",
        image: "https://this-person-does-not-exist.com/it",
        creator: "Able Baker"
    }

]
    