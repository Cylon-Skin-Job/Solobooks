// Adding the entire table to the body tag

var dataCustomers = [{
        "id": "00001",
        "name": "Cafe Nervosa",
        "address1": "2115 E 3rd St.",
        "address2": "",
        "city": "Ocean City",
        "state": "NJ.",
        "zip": "17740"
    },
    {
        "id": "00002",
        "name": "The Indigo Tea Shop",
        "address1": "1501 Riverwood Dr.",
        "address2": "",
        "city": "Burnsville",
        "state": "MN.",
        "zip": "55337"
    },
    {
        "id": "00003",
        "name": "Pizza Planet",
        "address1": "745 Anchor Ave.",
        "address2": "",
        "city": "Orange Cove",
        "state": "CA.",
        "zip": "93646"
    },
    {
        "id": "00004",
        "name": "Bob's Burgers",
        "address1": "115 W Ocean Dr.",
        "address2": "",
        "city": "Ocean City",
        "state": "NJ.",
        "zip": "17740"
    },
    {
        "id": "00005",
        "name": "Arnold's Drive In",
        "address1": "488 W East St.",
        "address2": "",
        "city": "Riverside",
        "state": "CA.",
        "zip": "93723"
    },
    {
        "id": "00006",
        "name": "Paunch Burger",
        "address1": "565 North Clinton Dr.",
        "address2": "",
        "city": "Pawnee",
        "state": "IN.",
        "zip": "56100"
    },
    {
        "id": "00007",
        "name": "Central Perk",
        "address1": "565 5th Ave.",
        "address2": "",
        "city": "New York City",
        "state": "NY.",
        "zip": "10001"
    },
    {
        "id": "00008",
        "name": "Cheer's",
        "address1": "1501 Riverwood Dr.",
        "address2": "",
        "city": "Burnsville",
        "state": "MN.",
        "zip": "55337"
    },
    {
        "id": "00009",
        "name": "Joe's Bar",
        "address1": "940 W Weed St.",
        "address2": "",
        "city": "Chicago",
        "state": "IL.",
        "zip": "60642"
    },
    {
        "id": "00010",
        "name": "Three Broomsticks",
        "address1": "100 Universal Plaza",
        "address2": "",
        "city": "Universal City",
        "state": "CA.",
        "zip": "91608"
    },
    {
        "id": "00011",
        "name": "Mos Eisley Cantina",
        "address1": "Tattoine",
        "address2": "",
        "city": "Outer Rim Territories",
        "state": "",
        "zip": ""
    },
    {
        "id": "00012",
        "name": "Krusty Crab",
        "address1": "Bikini Atoll",
        "address2": "",
        "city": "Pacific Ocean",
        "state": "",
        "zip": ""
    },
    {
        "id": "00013",
        "name": "La Ratatouille",
        "address1": "234 Main St.",
        "address2": "",
        "city": "Villanueve",
        "state": "France",
        "zip": ""
    },
    {
        "id": "00014",
        "name": "Frozen Banana",
        "address1": "565 Ocean Wharf Blvd.",
        "address2": "",
        "city": "Oceanside",
        "state": "CA.",
        "zip": "92003"
    },
    {
        "id": "00015",
        "name": "Monk's Cafe",
        "address1": "555 W. 122th St.",
        "address2": "",
        "city": "New York",
        "state": "NY.",
        "zip": "10001"
    },
    {
        "id": "00016",
        "name": "Los Pollos Hermano's",
        "address1": "9358 Eagle Ranch Rd.",
        "address2": "",
        "city": "Albuqueqe",
        "state": "NM.",
        "zip": "87114"
    },
    {
        "id": "00017",
        "name": "Whistle Stop Cafe",
        "address1": "443 Mc Cracken St.",
        "address2": "",
        "city": "Juliette",
        "state": "GA.",
        "zip": "31046"
    },
    {
        "id": "00018",
        "name": "Vesuvio",
        "address1": "91 Elizabeth Ave.",
        "address2": "",
        "city": "Elizabeth",
        "state": "NJ.",
        "zip": "07206"
    },
    {
        "id": "00019",
        "name": "The Pie Pole",
        "address1": "714 Traction Ave.",
        "address2": "",
        "city": "Los Angeles",
        "state": "CA.",
        "zip": "90013"
    },
    {
        "id": "00020",
        "name": "Louie's Italian Restaurant",
        "address1": "115 W Ocean Dr.",
        "address2": "",
        "city": "Ocean City",
        "state": "NJ.",
        "zip": "17740"
    },
    {
        "id": "00021",
        "name": "Chocolate Factory",
        "address1": "Munich",
        "address2": "",
        "city": "Bavaria",
        "state": "West Germany",
        "zip": ""

    }

]


var dataInvoices = [{
        "id": "20210928005225",
        "name": "Cafe Nervosa",
        "cusId": "000001",
        "address1": "2115 E 3rd St.",
        "address2": "",
        "city": "Ocean City",
        "state": "NJ.",
        "zip": "17740",
        "date": "09/28/2021",
        "number": "5225",
        "total": 690.00,
        "status": "Unpaid",
        "item1": false,
        "item2": false,
        "item3": false,
        "item4": false,
        "item5": false,
        "item6": false,
        "item7": false,
        "item8": false,
        "item9": false,
        "amount1": false,
        "amount2": false,
        "amount3": false,
        "amount4": false,
        "amount5": false,
        "amount6": false,
        "amount7": false,
        "amount8": false,
        "amount9": false,
        "payment": {
            "id": "",
            "date": "",
            "method": "",
            "reference": "",
            "notes": ""
        }
    },
    {
        "id": "20211028005224",
        "name": "Cafe Nervosa",
        "cusId": "000001",
        "address1": "2115 E 3rd St.",
        "address2": "",
        "city": "Ocean City",
        "state": "NJ.",
        "zip": "17740",
        "date": "10/22/2021",
        "number": "5224",
        "total": 690.00,
        "status": "Unpaid",
        "item1": false,
        "item2": false,
        "item3": false,
        "item4": false,
        "item5": false,
        "item6": false,
        "item7": false,
        "item8": false,
        "item9": false,
        "amount1": false,
        "amount2": false,
        "amount3": false,
        "amount4": false,
        "amount5": false,
        "amount6": false,
        "amount7": false,
        "amount8": false,
        "amount9": false,
        "payment": {
            "id": "",
            "date": "",
            "method": "",
            "reference": "",
            "notes": ""
        }
    },
    {
        "id": "20210925005141",
        "cusId": "00002",
        "name": "The Indigo Tea Shop",
        "address1": "1501 Riverwood Dr.",
        "address2": "",
        "city": "Burnsville",
        "state": "MN.",
        "zip": "55337",
        "date": "09/25/2021",
        "number": "5141",
        "total": 565.00,
        "status": "Unpaid",
        "item1": false,
        "item2": false,
        "item3": false,
        "item4": false,
        "item5": false,
        "item6": false,
        "item7": false,
        "item8": false,
        "item9": false,
        "amount1": false,
        "amount2": false,
        "amount3": false,
        "amount4": false,
        "amount5": false,
        "amount6": false,
        "amount7": false,
        "amount8": false,
        "amount9": false,
        "payment": {
            "id": "",
            "date": "",
            "method": "",
            "reference": "",
            "notes": ""
        }
    },
    {
        "id": "20210919005138",
        "CusId": "00003",
        "name": "Pizza Planet",
        "address1": "745 Anchor Ave.",
        "address2": "",
        "city": "Orange Cove",
        "state": "CA.",
        "zip": "93646",
        "date": "09/19/2021",
        "number": "5138",
        "total": 585.00,
        "status": "Unpaid",
        "item1": false,
        "item2": false,
        "item3": false,
        "item4": false,
        "item5": false,
        "item6": false,
        "item7": false,
        "item8": false,
        "item9": false,
        "amount1": false,
        "amount2": false,
        "amount3": false,
        "amount4": false,
        "amount5": false,
        "amount6": false,
        "amount7": false,
        "amount8": false,
        "amount9": false,
        "payment": {
            "id": "",
            "date": "",
            "method": "",
            "reference": "",
            "notes": ""
        }
    },
    {
        "id": "20210812005127",
        "cusId": "00004",
        "name": "Bob's Burgers",
        "address1": "115 W Ocean Dr.",
        "address2": "",
        "city": "Ocean City",
        "state": "NJ.",
        "zip": "17740",
        "date": "08/12/2021",
        "number": "5127",
        "total": 550.00,
        "status": "Unpaid",
        "item1": false,
        "item2": false,
        "item3": false,
        "item4": false,
        "item5": false,
        "item6": false,
        "item7": false,
        "item8": false,
        "item9": false,
        "amount1": false,
        "amount2": false,
        "amount3": false,
        "amount4": false,
        "amount5": false,
        "amount6": false,
        "amount7": false,
        "amount8": false,
        "amount9": false,
        "payment": {
            "id": "",
            "date": "",
            "method": "",
            "reference": "",
            "notes": ""
        }
    },
    {
        "id": "2021081100005",
        "cusId": "00005",
        "name": "Arnold's Drive In",
        "address1": "488 W East St.",
        "address2": "",
        "city": "Riverside",
        "state": "CA.",
        "zip": "93723",
        "date": "08/11/2021",
        "number": "5126",
        "total": 485.00,
        "status": "Unpaid",
        "item1": false,
        "item2": false,
        "item3": false,
        "item4": false,
        "item5": false,
        "item6": false,
        "item7": false,
        "item8": false,
        "item9": false,
        "amount1": false,
        "amount2": false,
        "amount3": false,
        "amount4": false,
        "amount5": false,
        "amount6": false,
        "amount7": false,
        "amount8": false,
        "amount9": false,
        "payment": {
            "id": "",
            "date": "",
            "method": "",
            "reference": "",
            "notes": ""
        }
    },
    {
        "id": "20210811",
        "cusId": "00006",
        "name": "Paunch Burger",
        "address1": "565 North Clinton Dr.",
        "address2": "",
        "city": "Pawnee",
        "state": "IN.",
        "zip": "56100",
        "date": "08/11/2021",
        "number": "5126",
        "total": 625.00,
        "status": "Unpaid",
        "item1": false,
        "item2": false,
        "item3": false,
        "item4": false,
        "item5": false,
        "item6": false,
        "item7": false,
        "item8": false,
        "item9": false,
        "amount1": false,
        "amount2": false,
        "amount3": false,
        "amount4": false,
        "amount5": false,
        "amount6": false,
        "amount7": false,
        "amount8": false,
        "amount9": false,
        "payment": {
            "id": "",
            "date": "",
            "method": "",
            "reference": "",
            "notes": ""
        }
    },
    {
        "id": "20210803005138",
        "cusId": "00007",
        "name": "Central Perk",
        "address1": "565 5th Ave.",
        "address2": "",
        "city": "New York City",
        "state": "NY.",
        "zip": "10001",
        "date": "08/03/2021",
        "number": 5138,
        "total": 385.00,
        "status": "Paid",
        "item1": false,
        "item2": false,
        "item3": false,
        "item4": false,
        "item5": false,
        "item6": false,
        "item7": false,
        "item8": false,
        "item9": false,
        "amount1": false,
        "amount2": false,
        "amount3": false,
        "amount4": false,
        "amount5": false,
        "amount6": false,
        "amount7": false,
        "amount8": false,
        "amount9": false,
        "payment": {
            "id": "20210804005138",
            "date": "08/04/2021",
            "method": "Check",
            "reference": "56KGH0P",
            "notes": "Deposited Same Day"
        }
    },
    {
        "id": "20210925005141",
        "cusId": "00008",
        "name": "Cheer's",
        "address1": "1501 Riverwood Dr.",
        "address2": "",
        "city": "Burnsville",
        "state": "MN.",
        "zip": "55337",
        "date": "09/25/2021",
        "number": "5141",
        "total": 565.00,
        "status": "Unpaid",
        "item1": false,
        "item2": false,
        "item3": false,
        "item4": false,
        "item5": false,
        "item6": false,
        "item7": false,
        "item8": false,
        "item9": false,
        "amount1": false,
        "amount2": false,
        "amount3": false,
        "amount4": false,
        "amount5": false,
        "amount6": false,
        "amount7": false,
        "amount8": false,
        "amount9": false,
        "payment": {
            "id": "",
            "date": "",
            "method": "",
            "reference": "",
            "notes": ""
        }
    },
    {
        "CusId": "00009",
        "name": "Joe's Bar",
        "address1": "940 W Weed St.",
        "address2": "",
        "city": "Chicago",
        "state": "IL.",
        "zip": "60642",
        "date": "07/23/2021",
        "number": "5120",
        "total": 385.00,
        "status": "Paid",
        "item1": false,
        "item2": false,
        "item3": false,
        "item4": false,
        "item5": false,
        "item6": false,
        "item7": false,
        "item8": false,
        "item9": false,
        "amount1": false,
        "amount2": false,
        "amount3": false,
        "amount4": false,
        "amount5": false,
        "amount6": false,
        "amount7": false,
        "amount8": false,
        "amount9": false,
        "payment": {
            "id": "20210725005120",
            "date": "07/25/2021",
            "method": "Check",
            "reference": "7809",
            "notes": ""
        }
    },
    {
        "id": "20210722005119",
        "cusId": "00010",
        "name": "Three Broomsticks",
        "address1": "100 Universal Plaza",
        "address2": "",
        "city": "Universal City",
        "state": "CA.",
        "zip": "91608",
        "date": "07/22/2021",
        "number": "5119",
        "total": 625.00,
        "status": "Paid",
        "item1": false,
        "item2": false,
        "item3": false,
        "item4": false,
        "item5": false,
        "item6": false,
        "item7": false,
        "item8": false,
        "item9": false,
        "amount1": false,
        "amount2": false,
        "amount3": false,
        "amount4": false,
        "amount5": false,
        "amount6": false,
        "amount7": false,
        "amount8": false,
        "amount9": false,
        "payment": {
            "id": "20210725005119",
            "date": "07/25/2021",
            "method": "Check",
            "reference": "555",
            "notes": "Held for 2 weeks"
        }
    },
    {
        "id": "20210718005118",
        "cusId": "00011",
        "name": "Mos Eisley Cantina",
        "address1": "Tattoine",
        "address2": "",
        "city": "Outer Rim Territories",
        "state": "",
        "zip": "",
        "date": "07/18/2021",
        "number": "5118",
        "total": 485.00,
        "status": "Paid",
        "item1": false,
        "item2": false,
        "item3": false,
        "item4": false,
        "item5": false,
        "item6": false,
        "item7": false,
        "item8": false,
        "item9": false,
        "amount1": false,
        "amount2": false,
        "amount3": false,
        "amount4": false,
        "amount5": false,
        "amount6": false,
        "amount7": false,
        "amount8": false,
        "amount9": false,
        "payment": {
            "id": "20210729005118",
            "date": "07/29/2021",
            "method": "Check",
            "reference": "ZP56H",
            "notes": "Rebel scum tried to pay with federation credits"
        }
    },
    {
        "id": "20210716",
        "cusId": "00012",
        "name": "Krusty Crab",
        "address1": "Bikini Atoll",
        "address2": "",
        "city": "Pacific Ocean",
        "state": "",
        "zip": "",
        "date": "07/16/2021",
        "number": "5116",
        "total": 385.00,
        "status": "Paid",
        "item1": false,
        "item2": false,
        "item3": false,
        "item4": false,
        "item5": false,
        "item6": false,
        "item7": false,
        "item8": false,
        "item9": false,
        "amount1": false,
        "amount2": false,
        "amount3": false,
        "amount4": false,
        "amount5": false,
        "amount6": false,
        "amount7": false,
        "amount8": false,
        "amount9": false,
        "payment": {
            "id": "20210720005116",
            "date": "07/20/2021",
            "method": "Check",
            "reference": "",
            "notes": "Check reaks of fish smell"
        }
    },
    {
        "id": "20210711005114",
        "cusId": "00013",
        "name": "La Ratatouille",
        "address1": "234 Main St.",
        "address2": "",
        "city": "Villanueve",
        "state": "France",
        "zip": "",
        "date": "07/11/2021",
        "number": "5114",
        "total": 485.00,
        "status": "Paid",
        "item1": false,
        "item2": false,
        "item3": false,
        "item4": false,
        "item5": false,
        "item6": false,
        "item7": false,
        "item8": false,
        "item9": false,
        "amount1": false,
        "amount2": false,
        "amount3": false,
        "amount4": false,
        "amount5": false,
        "amount6": false,
        "amount7": false,
        "amount8": false,
        "amount9": false,
        "payment": {
            "id": "20210720005114",
            "date": "07/20/2021",
            "method": "Cash",
            "reference": "",
            "notes": "Think I saw a rat in the kitchen"
        }
    },
    {
        "id": "20210623005112",
        "cusId": "00014",
        "name": "Frozen Banana",
        "address1": "565 Ocean Wharf Blvd.",
        "address2": "",
        "city": "Oceanside",
        "state": "CA.",
        "zip": "92003",
        "date": "06/23/2021",
        "number": "5112",
        "total": 385.00,
        "status": "Paid",
        "item1": false,
        "item2": false,
        "item3": false,
        "item4": false,
        "item5": false,
        "item6": false,
        "item7": false,
        "item8": false,
        "item9": false,
        "amount1": false,
        "amount2": false,
        "amount3": false,
        "amount4": false,
        "amount5": false,
        "amount6": false,
        "amount7": false,
        "amount8": false,
        "amount9": false,
        "payment": {
            "id": "20210701005112",
            "date": "07/01/2021",
            "method": "Cash",
            "reference": "",
            "notes": ""
        }
    },
    {
        "id": "20210622005111",
        "cusId": "00015",
        "name": "Monk's Cafe",
        "address1": "555 W. 122th St.",
        "address2": "",
        "city": "New York",
        "state": "NY.",
        "zip": "10001",
        "date": "06/22/2021",
        "number": "5111",
        "total": 625.00,
        "status": "Paid",
        "item1": false,
        "item2": false,
        "item3": false,
        "item4": false,
        "item5": false,
        "item6": false,
        "item7": false,
        "item8": false,
        "item9": false,
        "amount1": false,
        "amount2": false,
        "amount3": false,
        "amount4": false,
        "amount5": false,
        "amount6": false,
        "amount7": false,
        "amount8": false,
        "amount9": false,
        "payment": {
            "id": "20210623005111",
            "date": "06/23/2021",
            "method": "Cash",
            "reference": "",
            "notes": ""
        }
    },
    {
        "id": "20210618005110",
        "cusId": "00016",
        "name": "Los Pollos Hermano's",
        "address1": "9358 Eagle Ranch Rd.",
        "address2": "",
        "city": "Albuqueqe",
        "state": "NM.",
        "zip": "87114",
        "date": "06/18/2021",
        "number": "5110",
        "total": 525.00,
        "status": "Paid",
        "item1": false,
        "item2": false,
        "item3": false,
        "item4": false,
        "item5": false,
        "item6": false,
        "item7": false,
        "item8": false,
        "item9": false,
        "amount1": false,
        "amount2": false,
        "amount3": false,
        "amount4": false,
        "amount5": false,
        "amount6": false,
        "amount7": false,
        "amount8": false,
        "amount9": false,
        "payment": {
            "id": "20210623005110",
            "date": "06/23/2021",
            "method": "Cash",
            "reference": "",
            "notes": "I think I saw some drug dealers hanging around the office"
        }
    },
    {
        "id": "20210717005109",
        "cusId": "00017",
        "name": "Whistle Stop Cafe",
        "address1": "443 Mc Cracken St.",
        "address2": "",
        "city": "Juliette",
        "state": "GA.",
        "zip": "31046",
        "date": "06/17/2021",
        "number": "5109",
        "total": 555.00,
        "status": "Paid",
        "item1": false,
        "item2": false,
        "item3": false,
        "item4": false,
        "item5": false,
        "item6": false,
        "item7": false,
        "item8": false,
        "item9": false,
        "amount1": false,
        "amount2": false,
        "amount3": false,
        "amount4": false,
        "amount5": false,
        "amount6": false,
        "amount7": false,
        "amount8": false,
        "amount9": false,
        "payment": {
            "id": "20210629005109",
            "date": "06/29/2021",
            "method": "Check",
            "reference": "",
            "notes": ""
        }
    },
    {
        "id": "20210615005108",
        "cusId": "00018",
        "name": "Vesuvio",
        "address1": "91 Elizabeth Ave.",
        "address2": "",
        "city": "Elizabeth",
        "state": "NJ.",
        "zip": "07206",
        "date": "06/15/2021",
        "number": "5108",
        "total": 625.00,
        "status": "Paid",
        "item1": false,
        "item2": false,
        "item3": false,
        "item4": false,
        "item5": false,
        "item6": false,
        "item7": false,
        "item8": false,
        "item9": false,
        "amount1": false,
        "amount2": false,
        "amount3": false,
        "amount4": false,
        "amount5": false,
        "amount6": false,
        "amount7": false,
        "amount8": false,
        "amount9": false,
        "payment": {
            "id": "20210615005108",
            "date": "06/15/2021",
            "method": "Cash",
            "reference": "54",
            "notes": ""
        }
    },
    {
        "id": "20210615005107",
        "cusId": "00019",
        "name": "The Pie Pole",
        "address1": "714 Traction Ave.",
        "address2": "",
        "city": "Los Angeles",
        "state": "CA.",
        "zip": "90013",
        "date": "06/15/2021",
        "number": "5107",
        "total": 625.00,
        "status": "Paid",
        "item1": false,
        "item2": false,
        "item3": false,
        "item4": false,
        "item5": false,
        "item6": false,
        "item7": false,
        "item8": false,
        "item9": false,
        "amount1": false,
        "amount2": false,
        "amount3": false,
        "amount4": false,
        "amount5": false,
        "amount6": false,
        "amount7": false,
        "amount8": false,
        "amount9": false,
        "payment": {
            "id": "20210620005107",
            "date": "06/20/2021",
            "method": "Cash",
            "reference": "",
            "notes": ""
        }
    },
    {
        "id": "20210611005106",
        "cusId": "00020",
        "name": "Louie's Italian Restaurant",
        "address1": "115 W Ocean Dr.",
        "address2": "",
        "city": "Ocean City",
        "state": "NJ.",
        "zip": "17740",
        "date": "06/11/2021",
        "number": "5106",
        "total": 490.00,
        "status": "Paid",
        "item1": false,
        "item2": false,
        "item3": false,
        "item4": false,
        "item5": false,
        "item6": false,
        "item7": false,
        "item8": false,
        "item9": false,
        "amount1": false,
        "amount2": false,
        "amount3": false,
        "amount4": false,
        "amount5": false,
        "amount6": false,
        "amount7": false,
        "amount8": false,
        "amount9": false,
        "payment": {
            "id": "20210612005106",
            "date": "06/12/2021",
            "method": "Check",
            "reference": "",
            "notes": ""
        }


    },
    {
        "id": "20210620005104",
        "cusId": "00021",
        "name": "Chocolate Factory",
        "address1": "Munich",
        "address2": "",
        "city": "Bavaria",
        "state": "West Germany",
        "zip": "",
        "date": "06/20/2021",
        "number": "5104",
        "total": 590.00,
        "status": "Paid",
        "item1": false,
        "item2": false,
        "item3": false,
        "item4": false,
        "item5": false,
        "item6": false,
        "item7": false,
        "item8": false,
        "item9": false,
        "amount1": false,
        "amount2": false,
        "amount3": false,
        "amount4": false,
        "amount5": false,
        "amount6": false,
        "amount7": false,
        "amount8": false,
        "amount9": false,
        "payment": {
            "id": "20210628005104",
            "date": "06/28/2021",
            "method": "Credit",
            "reference": "00938476",
            "notes": "Unsafe work conditions, not worth the money"
        }
    }
]

function display(pageName) {

    if (pageName === "overview") {
        document.getElementById('siteContentOverview').style.display = 'block';
        document.getElementById('siteContentInvoices').style.display = 'none';
    } else if (pageName === "invoices") {
        document.getElementById('siteContentOverview').style.display = 'none';
        document.getElementById('siteContentInvoices').style.display = 'block';
    }   
}


function loadH3(pageName) {
    let h3 = document.getElementById('siteSection');
    h3.innerHTML = `<h3>${pageName}</h3>`;
}


function buildRowPayments(data) {

    function compareStrings(a, b) {
        return (a < b) ? -1 : (a > b) ? 1 : 0;
    }

    data.sort(function (a, b) {
        return compareStrings(b.payment.id, a.payment.id);
    })

    for (var i = 0; i < 20; i++) {

        var row = `<tr>
							<td class = "tdDate">${data[i].payment.date}</td>
							<td class = "tdDescription1">${data[i].name}</td>
							<td class= "tdTotal">$ ${data[i].total}</td>
					</tr>`;
        if (data[i].status === "Paid") {
            document.getElementById('tbodyPayments').innerHTML += row;
        }
    }
}



function buildRowInvoices(data) {

    function compareStrings(a, b) {
        return (a < b) ? -1 : (a > b) ? 1 : 0;
    }

    data.sort(function (a, b) {
        return compareStrings(b.id, a.id);
    })

    for (var i = 0; i < data.length; i++) {

        let paymentStatus = data[i].status;

        var row = `<tr>
							<td class = "td-order-3">${data[i].date}</td>
							<td class = "td-order-4">${data[i].number}</td>
							<td class= "td-order-1">${data[i].name}</td>
                            <td class= "td-order-5">${data[i].status}</td>
                            <td class= "td-order-2">${data[i].total.toFixed(2)}</td>
					</tr>`;

        document.getElementById(`tbodyInvoices${paymentStatus}`).innerHTML += row;
    }
}

let unpaid = 0;
let paidInvoices = 0;


function invoiceTotal() {
    var table1 = document.getElementById('tbodyInvoicesPaid'),
        sumVal1 = 0;
    for (var i = 1; i < table1.rows.length; i++) {
        sumVal1 = sumVal1 + parseFloat(table1.rows[i].cells[4].innerHTML);
    }
    document.getElementById('totalSpanPaid').innerHTML = "Total: $" + sumVal1.toFixed(2);
    document.getElementById(`overviewChartInvoicePaidSpan`).innerHTML = "$" + sumVal1.toFixed(2);
    document.getElementById('overveiwProfitPayments').innerHTML = "$" + sumVal1.toFixed(2);

    var table2 = document.getElementById('tbodyInvoicesUnpaid'),
        sumVal2 = 0;
    for (var i = 1; i < table2.rows.length; i++) {
        sumVal2 = sumVal2 + parseFloat(table2.rows[i].cells[4].innerHTML);
    }
    document.getElementById('totalSpanUnpaid').innerHTML = "Total: $" + sumVal2.toFixed(2);
    document.getElementById(`overviewChartInvoiceUnpaidSpan`).innerHTML = "$" + sumVal2.toFixed(2);
    

    let sumVal3 = Math.floor((sumVal1 + sumVal2) / 100);
    let paidPercent = Math.floor(sumVal1 / sumVal3);
    let unpaidPercent = Math.floor(sumVal2 / sumVal3);

    document.getElementById('invoiceBarPaid').style.width = `${paidPercent}%`;
    document.getElementById('invoiceBarUnpaid').style.width = `${unpaidPercent}%`;
    
} 


    window.addEventListener('load', function () {
        alert("It's loaded!");
    loadH3('Overview');
    buildRowPayments(dataInvoices);
    buildRowInvoices(dataInvoices);
    invoiceTotal(); // Initial call
    display('overview');
    location.hash = "#overview";
    })

    function navigation(pageName) {
        loadH3(pageName);
    }

    window.addEventListener("hashchange", () => {
        let newPage = location.hash.substring(1);
        display(newPage);
    }, false);

