import { MailingAddressValues, USPSSTATEABBREVIATIONS } from "../Scaffold/MGAValues";
import { v4 as uuidv4 } from "uuid";

export const mailingAddresses : Array<MailingAddressValues> = [
    {
        name            : "The White House",
        initial         : "W",
        streetAddress1   : "1600 Pennsylvania Avenue NW",
        city            : "Washington",
        state           : USPSSTATEABBREVIATIONS[0],
        zip             : "20500"
    },
    {
        name            : "Disneyland",
        initial         : "D",
        streetAddress1   : "1313 Disneyland Drive",
        city            : "Anaheim",
        state           : USPSSTATEABBREVIATIONS[1],
        zip             : "92802"
    },
    {
        name            : "The United States Capitol",
        initial         : "C",
        streetAddress1   : "U.S. Capitol",
        city            : "Washington",
        state           : USPSSTATEABBREVIATIONS[0],
        zip             : "20510"
    },
    {
        name            : "Supreme Court of the United States",
        initial         : "S",
        streetAddress1   : "1 First Street NE",
        city            : "Washington",
        state           : USPSSTATEABBREVIATIONS[0],
        zip             : "20543"
    },
    {
        name            : "Statue of Liberty",
        initial         : "L",
        streetAddress1   : "Liberty Island",
        city            : "New York",
        state           : USPSSTATEABBREVIATIONS[2],
        zip             : "10004"
    },
    {
        name            : "Empire State Building",
        initial         : "E",
        streetAddress1   : "350 5th Ave",
        city            : "New York",
        state           : USPSSTATEABBREVIATIONS[2],
        zip             : "10118"
    }
]
