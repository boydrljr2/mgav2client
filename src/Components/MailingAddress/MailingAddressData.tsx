import { MailingAddressValues, USPSSTATEABBREVIATIONS } from "../Scaffold/MGAValues";
import { v4 as uuidv4 } from "uuid";

export const mailingAddresses : Array<MailingAddressValues> = [
    {
        id              : uuidv4(),
        name            : "The White House",
        initial         : "W",
        streetAddress   : "1600 Pennsylvania Avenue NW",
        city            : "Washington",
        state           : USPSSTATEABBREVIATIONS[0],
        zip             : "20500"
    },
    {
        id              : uuidv4(),
        name            : "Disneyland",
        initial         : "D",
        streetAddress   : "1313 Disneyland Drive",
        city            : "Anaheim",
        state           : USPSSTATEABBREVIATIONS[1],
        zip             : "92802"
    },
    {
        id              : uuidv4(),
        name            : "The United States Capitol",
        initial         : "C",
        streetAddress   : "U.S. Capitol",
        city            : "Washington",
        state           : USPSSTATEABBREVIATIONS[0],
        zip             : "20510"
    },
    {
        id              : uuidv4(),
        name            : "Supreme Court of the United States",
        initial         : "S",
        streetAddress   : "1 First Street NE",
        city            : "Washington",
        state           : USPSSTATEABBREVIATIONS[0],
        zip             : "20543"
    },
    {
        id              : uuidv4(),
        name            : "Statue of Liberty",
        initial         : "L",
        streetAddress   : "Liberty Island",
        city            : "New York",
        state           : USPSSTATEABBREVIATIONS[2],
        zip             : "10004"
    },
    {
        id              : uuidv4(),
        name            : "Empire State Building",
        initial         : "E",
        streetAddress   : "350 5th Ave",
        city            : "New York",
        state           : USPSSTATEABBREVIATIONS[2],
        zip             : "10118"
    }
]
