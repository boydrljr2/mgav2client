import { PolicyValues } from '../Scaffold/MGAValues';

export const policies : Array<PolicyValues> = [
    {
        id: 1,
        policyNumber    : "PPW1303522",
        periodStartDate : new Date("01-01-2020"),
        periodEndDate   : new Date("12-31-2020"),
        endorsementDate : new Date("12-21-2019"),
        product         : {
            productName     : "Personal Automobile Insurance Policy",
            insuranceType   : "Personal Automobile Insurance",
            insurer         : {
                id              : 1,
                insurerFEIN     : "36-2222222",
                insurerStatus   : "Active",
                insurerName     : "United Equitable Insurance Company",
                insurerEmail    : "service@ueilink.com",
                insurerPhone    : "1-847-583-4600",
                insurerMailingAddress : {
                        id: 1,
                        streetAddress: "9040 Waukegan Road",
                        city: "Morton Grove",
                        state: "IL",
                        zip: "60053"
                    },
                insurerDomicileState: "IL",
                creatorId       : 1,
                creatorName     : "Able Baker",
                created         : new Date("01-01-2001"),
                lastModified    : new Date("01-11-2023")
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
            },
            personPhone    : "1-847-123-1234",
            personEmail :   "esmazavala@gmail.com"
        },
        operators       : [
            {
                id                          : 1,
                operatorType                : "PRIN",
                sr22                        : "N",
                operatorLicenseNumber       : "A1234567",
                operatorLicenseState        : "IL",
                operatorLicenseExpirationDate : new Date("12-31-2020"),
                operatorCoverageStatus      : "COV",
                personName     : {
                    firstName   : "Esmeralda",
                    middleName  : '',
                    lastName    : "Zavala"
                },
                personDateOfBirth           : new Date("02-19-1976"),
                operatorAccidentsViolations : "09/01/18(V) 08/01/20(V) 11/01/20(V)",
            },
            {
                id                      : 2,
                operatorType            : "ADDL",
                sr22                    : "N",
                operatorLicenseNumber   : "A1234567",
                operatorLicenseState    : "IL",
                operatorLicenseExpirationDate : new Date("12-31-2025"),
                operatorCoverageStatus  : "COV",
                personName              : {
                                            firstName   : "Yasmeen",
                                            middleName  : '',
                                            lastName    : "Lopez"
                },
                personDateOfBirth : new Date("02-19-1999"),
                operatorAccidentsViolations : ""
            },
            {
                id                      : 3,
                operatorType            : "EXCL",
                sr22                    : "N",
                operatorLicenseNumber   : "A1234567",
                operatorLicenseState    : "IL",
                operatorLicenseExpirationDate : new Date("01-31-2025"),
                operatorCoverageStatus  : "NONE",
                personName              : {
                            firstName   : "Fernando",
                            middleName  : '',
                            lastName    : "Sanchez"
                },
                personDateOfBirth : new Date("06-19-1975"),
                operatorAccidentsViolations : ""
            },
            {
                id                      : 4,
                operatorType            : "EXCL",
                sr22                    : "N",
                operatorLicenseNumber   : "A7654321",
                operatorLicenseState    : "IL",
                operatorLicenseExpirationDate : new Date("12-31-2023"),
                operatorCoverageStatus  : "NONE",
                personName              : {
                            firstName   : "Janette",
                            middleName  : '',
                            lastName    : "Lopez"
                },
                personDateOfBirth : new Date("06-19-2004"),
                operatorAccidentsViolations : ""
            }

        ],
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
                            id : 1,
                            streetAddress   : "123 Main Street",
                            city            : "Chicago",
                            state           : "IL",
                            zip         : "60606"
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
        endorsements        : [ "IL01264A", "IL01-001", "IL01-003" ],
        created             : new Date("12-15-2019"),
        lastModified        : new Date("01-01-2020"),
    }
]