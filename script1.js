// Adding the entire table to the body tag
var dataItems = [{
        "id": "000001",
        "name": "Cafe Nervosa",
        "address1": "2115 E 3rd St.",
        "address2": "",
        "city": "Ocean City",
        "state": "NJ.",
        "zip": "17740"
    },
    {
        "id": "000002",
        "name": "The Indigo Tea Shop",
        "address1": "1501 Riverwood Dr.",
        "address2": "",
        "city": "Burnsville",
        "state": "MN.",
        "zip": "55337"
    },
    {
        "id": "000003",
        "name": "Pizza Planet",
        "address1": "745 Anchor Ave.",
        "address2": "",
        "city": "Orange Cove",
        "state": "CA.",
        "zip": "93646"
    },
    {
        "id": "000004",
        "name": "Bob's Burgers",
        "address1": "115 W Ocean Dr.",
        "address2": "",
        "city": "Ocean City",
        "state": "NJ.",
        "zip": "17740"
    },
    {
        "id": "000005",
        "name": "Arnold's Drive In",
        "address1": "488 W East St.",
        "address2": "",
        "city": "Riverside",
        "state": "CA.",
        "zip": "93723"
    },
    {
        "id": "000006",
        "name": "Paunch Burger",
        "address1": "565 North Clinton Dr.",
        "address2": "",
        "city": "Pawnee",
        "state": "IN.",
        "zip": "56100"
    },
    {
        "id": "000007",
        "name": "Central Perk",
        "address1": "565 5th Ave.",
        "address2": "",
        "city": "New York City",
        "state": "NY.",
        "zip": "10001"
    },
    {
        "id": "000008",
        "name": "Cheer's",
        "address1": "1501 Riverwood Dr.",
        "address2": "",
        "city": "Burnsville",
        "state": "MN.",
        "zip": "55337"
    },
    {
        "id": "000009",
        "name": "Joe's Bar",
        "address1": "940 W Weed St.",
        "address2": "",
        "city": "Chicago",
        "state": "IL.",
        "zip": "60642"
    },
    {
        "id": "000010",
        "name": "Three Broomsticks",
        "address1": "100 Universal Plaza",
        "address2": "",
        "city": "Universal City",
        "state": "CA.",
        "zip": "91608"
    },
    {
        "id": "000011",
        "name": "Mos Eisley Cantina",
        "address1": "Tattoine",
        "address2": "",
        "city": "Outer Rim Territories",
        "state": "",
        "zip": ""
    },
    {
        "id": "000012",
        "name": "Krusty Crab",
        "address1": "Bikini Atoll",
        "address2": "",
        "city": "Pacific Ocean",
        "state": "",
        "zip": ""
    },
    {
        "id": "000013",
        "name": "La Ratatouille",
        "address1": "234 Main St.",
        "address2": "",
        "city": "Villanueve",
        "state": "France",
        "zip": ""
    },
    {
        "id": "000014",
        "name": "Frozen Banana",
        "address1": "565 Ocean Wharf Blvd.",
        "address2": "",
        "city": "Oceanside",
        "state": "CA.",
        "zip": "92003"
    },
    {
        "id": "000015",
        "name": "Monk's Cafe",
        "address1": "555 W. 122th St.",
        "address2": "",
        "city": "New York",
        "state": "NY.",
        "zip": "10001"
    },
    {
        "id": "000016",
        "name": "Los Pollos Hermano's",
        "address1": "9358 Eagle Ranch Rd.",
        "address2": "",
        "city": "Albuqueqe",
        "state": "NM.",
        "zip": "87114"
    },
    {
        "id": "000017",
        "name": "Whistle Stop Cafe",
        "address1": "443 Mc Cracken St.",
        "address2": "",
        "city": "Juliette",
        "state": "GA.",
        "zip": "31046"
    },
    {
        "id": "000018",
        "name": "Vesuvio",
        "address1": "91 Elizabeth Ave.",
        "address2": "",
        "city": "Elizabeth",
        "state": "NJ.",
        "zip": "07206"
    },
    {
        "id": "000019",
        "name": "The Pie Pole",
        "address1": "714 Traction Ave.",
        "address2": "",
        "city": "Los Angeles",
        "state": "CA.",
        "zip": "90013"
    },
    {
        "id": "000020",
        "name": "Louie's Italian Restaurant",
        "address1": "115 W Ocean Dr.",
        "address2": "",
        "city": "Ocean City",
        "state": "NJ.",
        "zip": "17740"
    },
    {
        "id": "000021",
        "name": "Chocolate Factory",
        "address1": "Munich",
        "address2": "",
        "city": "Bavaria",
        "state": "West Germany",
        "zip": ""

    }

]

var dataCustomers = [{
        "id": "000001",
        "name": "Cafe Nervosa",
        "address1": "2115 E 3rd St.",
        "address2": "",
        "city": "Ocean City",
        "state": "NJ.",
        "zip": "17740"
    },
    {
        "id": "000002",
        "name": "The Indigo Tea Shop",
        "address1": "1501 Riverwood Dr.",
        "address2": "",
        "city": "Burnsville",
        "state": "MN.",
        "zip": "55337"
    },
    {
        "id": "000003",
        "name": "Pizza Planet",
        "address1": "745 Anchor Ave.",
        "address2": "",
        "city": "Orange Cove",
        "state": "CA.",
        "zip": "93646"
    },
    {
        "id": "000004",
        "name": "Bob's Burgers",
        "address1": "115 W Ocean Dr.",
        "address2": "",
        "city": "Ocean City",
        "state": "NJ.",
        "zip": "17740"
    },
    {
        "id": "000005",
        "name": "Arnold's Drive In",
        "address1": "488 W East St.",
        "address2": "",
        "city": "Riverside",
        "state": "CA.",
        "zip": "93723"
    },
    {
        "id": "000006",
        "name": "Paunch Burger",
        "address1": "565 North Clinton Dr.",
        "address2": "",
        "city": "Pawnee",
        "state": "IN.",
        "zip": "56100"
    },
    {
        "id": "000007",
        "name": "Central Perk",
        "address1": "565 5th Ave.",
        "address2": "",
        "city": "New York City",
        "state": "NY.",
        "zip": "10001"
    },
    {
        "id": "000008",
        "name": "Cheer's",
        "address1": "1501 Riverwood Dr.",
        "address2": "",
        "city": "Burnsville",
        "state": "MN.",
        "zip": "55337"
    },
    {
        "id": "000009",
        "name": "Joe's Bar",
        "address1": "940 W Weed St.",
        "address2": "",
        "city": "Chicago",
        "state": "IL.",
        "zip": "60642"
    },
    {
        "id": "000010",
        "name": "Three Broomsticks",
        "address1": "100 Universal Plaza",
        "address2": "",
        "city": "Universal City",
        "state": "CA.",
        "zip": "91608"
    },
    {
        "id": "000011",
        "name": "Mos Eisley Cantina",
        "address1": "Tattoine",
        "address2": "",
        "city": "Outer Rim Territories",
        "state": "",
        "zip": ""
    },
    {
        "id": "000012",
        "name": "Krusty Crab",
        "address1": "Bikini Atoll",
        "address2": "",
        "city": "Pacific Ocean",
        "state": "",
        "zip": ""
    },
    {
        "id": "000013",
        "name": "La Ratatouille",
        "address1": "234 Main St.",
        "address2": "",
        "city": "Villanueve",
        "state": "France",
        "zip": ""
    },
    {
        "id": "000014",
        "name": "Frozen Banana",
        "address1": "565 Ocean Wharf Blvd.",
        "address2": "",
        "city": "Oceanside",
        "state": "CA.",
        "zip": "92003"
    },
    {
        "id": "000015",
        "name": "Monk's Cafe",
        "address1": "555 W. 122th St.",
        "address2": "",
        "city": "New York",
        "state": "NY.",
        "zip": "10001"
    },
    {
        "id": "000016",
        "name": "Los Pollos Hermano's",
        "address1": "9358 Eagle Ranch Rd.",
        "address2": "",
        "city": "Albuqueqe",
        "state": "NM.",
        "zip": "87114"
    },
    {
        "id": "000017",
        "name": "Whistle Stop Cafe",
        "address1": "443 Mc Cracken St.",
        "address2": "",
        "city": "Juliette",
        "state": "GA.",
        "zip": "31046"
    },
    {
        "id": "000018",
        "name": "Vesuvio",
        "address1": "91 Elizabeth Ave.",
        "address2": "",
        "city": "Elizabeth",
        "state": "NJ.",
        "zip": "07206"
    },
    {
        "id": "000019",
        "name": "The Pie Pole",
        "address1": "714 Traction Ave.",
        "address2": "",
        "city": "Los Angeles",
        "state": "CA.",
        "zip": "90013"
    },
    {
        "id": "000020",
        "name": "Louie's Italian Restaurant",
        "address1": "115 W Ocean Dr.",
        "address2": "",
        "city": "Ocean City",
        "state": "NJ.",
        "zip": "17740"
    },
    {
        "id": "000021",
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
        "address2": false,
        "city": "Ocean City",
        "state": "NJ.",
        "zip": "17740",
        "date": "2021-09-28",
        "number": "5225",
        "total": 690.00,
        "status": "Unpaid",
        "item1": "Single System Service; Downstairs hood, duct & fan pressure washed",
        "item2": "Second Upstairs System Cleaned on Same visit",
        "item3": false,
        "item4": false,
        "item5": false,
        "item6": false,
        "amount1": 390,
        "amount2": 200,
        "amount3": false,
        "amount4": false,
        "amount5": false,
        "amount6": false,
        "payment": {
            "id": "",
            "date": "",
            "method": "",
            "reference": "",
            "notes": ""
        }
    },
    {
        "id": "20210822005229",
        "name": "Cafe Nervosa",
        "cusId": "000001",
        "address1": "2115 E 3rd St.",
        "address2": false,
        "city": "Ocean City",
        "state": "NJ.",
        "zip": "17740",
        "date": "2021-08-22",
        "number": "5229",
        "total": 690.00,
        "status": "Unpaid",
        "item1": "Single System Service; Downstairs hood, duct & fan pressure washed",
        "item2": "Second Upstairs System Cleaned on Same visit",
        "item3": false,
        "item4": false,
        "item5": false,
        "item6": false,
        "amount1": 390,
        "amount2": 200,
        "amount3": false,
        "amount4": false,
        "amount5": false,
        "amount6": false,
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
        "cusId": "000002",
        "name": "The Indigo Tea Shop",
        "address1": "1501 Riverwood Dr.",
        "address2": false,
        "city": "Burnsville",
        "state": "MN.",
        "zip": "55337",
        "date": "2021-09-25",
        "number": "5141",
        "total": 565.00,
        "status": "Unpaid",
        "item1": "Main Cookline System Serviced; Downstairs hood, duct & fan pressure washed",
        "item2": false,
        "item3": false,
        "item4": false,
        "item5": false,
        "item6": false,
        "amount1": 565.00,
        "amount2": false,
        "amount3": false,
        "amount4": false,
        "amount5": false,
        "amount6": false,
        "payment": {
            "id": "",
            "date": "",
            "method": "",
            "reference": "",
            "notes": ""
        }
    },
    {
        "id": "20211019005138",
        "cusId": "000003",
        "name": "Pizza Planet",
        "address1": "745 Anchor Ave.",
        "address2": false,
        "city": "Orange Cove",
        "state": "CA.",
        "zip": "93646",
        "date": "2021-10-19",
        "number": "5138",
        "total": 585.00,
        "status": "Unpaid",
        "item1": "Main Cookline System Serviced; Downstairs hood, duct & fan pressure washed",
        "item2": "Pizza Oven Hood Serviced",
        "item3": false,
        "item4": false,
        "item5": false,
        "item6": false,
        "amount1": 475.00,
        "amount2": 110.00,
        "amount3": false,
        "amount4": false,
        "amount5": false,
        "amount6": false,
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
        "cusId": "000004",
        "name": "Bob's Burgers",
        "address1": "115 W Ocean Dr.",
        "address2": false,
        "city": "Ocean City",
        "state": "NJ.",
        "zip": "17740",
        "date": "2021-08-12",
        "number": "5127",
        "total": 550.00,
        "status": "Unpaid",
        "item1": "Main Carbroiler System Serviced; Downstairs hood, duct & fan pressure washed",
        "item2": "Fryer System Cleaned",
        "item3": false,
        "item4": false,
        "item5": false,
        "item6": false,
        "amount1": 350.00,
        "amount2": 200.00,
        "amount3": false,
        "amount4": false,
        "amount5": false,
        "amount6": false,
        "payment": {
            "id": "",
            "date": "",
            "method": "",
            "reference": "",
            "notes": ""
        }
    },
    {
        "id": "20210811005126",
        "cusId": "000005",
        "name": "Arnold's Drive In",
        "address1": "488 W East St.",
        "address2": false,
        "city": "Riverside",
        "state": "CA.",
        "zip": "93723",
        "date": "2021-08-11",
        "number": "5126",
        "total": 485.00,
        "status": "Unpaid",
        "item1": "Cookline Kitchen Exhaust System Cleaned",
        "item2": false,
        "item3": false,
        "item4": false,
        "item5": false,
        "item6": false,
        "amount1": 485.00,
        "amount2": false,
        "amount3": false,
        "amount4": false,
        "amount5": false,
        "amount6": false,
        "payment": {
            "id": "",
            "date": "",
            "method": "",
            "reference": "",
            "notes": ""
        }
    },
    {
        "id": "20210811005126",
        "cusId": "000006",
        "name": "Paunch Burger",
        "address1": "565 North Clinton Dr.",
        "address2": false,
        "city": "Pawnee",
        "state": "IN.",
        "zip": "56100",
        "date": "2021-08-11",
        "number": "5126",
        "total": 625.00,
        "status": "Unpaid",
        "item1": "Main Carbroiler System Serviced; Downstairs hood, duct & fan pressure washed",
        "item2": "Fryer System Cleaned",
        "item3": false,
        "item4": false,
        "item5": false,
        "item6": false,
        "amount1": 425.00,
        "amount2": 200.00,
        "amount3": false,
        "amount4": false,
        "amount5": false,
        "amount6": false,
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
        "cusId": "000007",
        "name": "Central Perk",
        "address1": "565 5th Ave.",
        "address2": false,
        "city": "New York City",
        "state": "NY.",
        "zip": "10001",
        "date": "2021-08-03",
        "number": 5138,
        "total": 385.00,
        "status": "Paid",
        "item1": "Bakery/Griddle Oven Hood serviced",
        "item2": false,
        "item3": false,
        "item4": false,
        "item5": false,
        "item6": false,
        "amount1": 385.00,
        "amount2": false,
        "amount3": false,
        "amount4": false,
        "amount5": false,
        "amount6": false,
        "payment": {
            "id": "20210804005138",
            "date": "08/04/2021",
            "method": "Check",
            "reference": "56KGH0P",
            "notes": "Deposited Same Day"
        }
    },
    {
        "id": "20210925005121",
        "cusId": "000008",
        "name": "Cheer's",
        "address1": "1501 Riverwood Dr.",
        "address2": false,
        "city": "Burnsville",
        "state": "MN.",
        "zip": "55337",
        "date": "2021-09-25",
        "number": "5121",
        "total": 565.00,
        "status": "Unpaid",
        "item1": "Main Carbroiler System Serviced; Downstairs hood, duct & fan pressure washed",
        "item2": "Fryer System Cleaned",
        "item3": false,
        "item4": false,
        "item5": false,
        "item6": false,
        "amount1": 350.00,
        "amount2": 115.00,
        "amount3": false,
        "amount4": false,
        "amount5": false,
        "amount6": false,
        "payment": {
            "id": "",
            "date": "",
            "method": "",
            "reference": "",
            "notes": ""
        }
    },
    {
        "id": "20210723005120",
        "CusId": "000009",
        "name": "Joe's Bar",
        "address1": "940 W Weed St.",
        "address2": false,
        "city": "Chicago",
        "state": "IL.",
        "zip": "60642",
        "date": "2021-07-23",
        "number": "5120",
        "total": 385.00,
        "status": "Paid",
        "item1": "Single Small System Service; Downstairs hood, duct & fan pressure washed",
        "item2": false,
        "item3": false,
        "item4": false,
        "item5": false,
        "item6": false,
        "amount1": 385.00,
        "amount2": false,
        "amount3": false,
        "amount4": false,
        "amount5": false,
        "amount6": false,
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
        "cusId": "000010",
        "name": "Three Broomsticks",
        "address1": "100 Universal Plaza",
        "address2": false,
        "city": "Universal City",
        "state": "CA.",
        "zip": "91608",
        "date": "2021-07-22",
        "number": "5119",
        "total": 625.00,
        "status": "Paid",
        "item1": "Fryer System and Cookline Serviced: Hood, Ducts & Fans",
        "item2": false,
        "item3": false,
        "item4": false,
        "item5": false,
        "item6": false,
        "amount1": 625.00,
        "amount2": false,
        "amount3": false,
        "amount4": false,
        "amount5": false,
        "amount6": false,
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
        "cusId": "000011",
        "name": "Mos Eisley Cantina",
        "address1": "Tattoine",
        "address2": false,
        "city": "Outer Rim Territories",
        "state": false,
        "zip": false,
        "date": "2021-07-18",
        "number": "5118",
        "total": 485.00,
        "status": "Paid",
        "item1": "Rear kitchen system serviced.",
        "item2": "Discount for assistance from in house droid staff.",
        "item3": false,
        "item4": false,
        "item5": false,
        "item6": false,
        "amount1": 585.00,
        "amount2": -100.00,
        "amount3": false,
        "amount4": false,
        "amount5": false,
        "amount6": false,
        "payment": {
            "id": "20210729005118",
            "date": "07/29/2021",
            "method": "Check",
            "reference": "ZP56H",
            "notes": "Rebel scum tried to pay with federation credits"
        }
    },
    {
        "id": "20210716005116",
        "cusId": "000012",
        "name": "Krusty Crab",
        "address1": "Bikini Atoll",
        "address2": "Ocean Floor",
        "city": "Pacific Ocean",
        "state": false,
        "zip": false,
        "date": "2021-07-16",
        "number": "5116",
        "total": 385.00,
        "status": "Paid",
        "item1": "Single System Service",
        "item2": false,
        "item3": false,
        "item4": false,
        "item5": false,
        "item6": false,
        "amount1": 385.00,
        "amount2": false,
        "amount3": false,
        "amount4": false,
        "amount5": false,
        "amount6": false,
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
        "cusId": "000013",
        "name": "La Ratatouille",
        "address1": "234 Main St.",
        "address2": false,
        "city": "Villanueve",
        "state": "France",
        "zip": false,
        "date": "2021-07-11",
        "number": "5114",
        "total": 485.00,
        "status": "Paid",
        "item1": "Main Cookline Kitchen Exhaust Cleaning",
        "item2": false,
        "item3": false,
        "item4": false,
        "item5": false,
        "item6": false,
        "amount1": 485.00,
        "amount2": false,
        "amount3": false,
        "amount4": false,
        "amount5": false,
        "amount6": false,
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
        "cusId": "000014",
        "name": "Frozen Banana",
        "address1": "565 Ocean Wharf Blvd.",
        "address2": false,
        "city": "Oceanside",
        "state": "CA.",
        "zip": "92003",
        "date": "2021-06-23",
        "number": "5112",
        "total": 385.00,
        "status": "Paid",
        "item1": "Hood vent over cornballer machine serviced",
        "item2": false,
        "item3": false,
        "item4": false,
        "item5": false,
        "item6": false,
        "amount1": 385.00,
        "amount2": false,
        "amount3": false,
        "amount4": false,
        "amount5": false,
        "amount6": false,
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
        "cusId": "000015",
        "name": "Monk's Cafe",
        "address1": "555 W. 122th St.",
        "address2": false,
        "city": "New York",
        "state": "NY.",
        "zip": "10001",
        "date": "2021-06-22",
        "number": "5111",
        "total": 625.00,
        "status": "Paid",
        "item1": "Main Carbroiler System Serviced; Downstairs hood, duct & fan pressure washed",
        "item2": "Fryer System Cleaned",
        "item3": false,
        "item4": false,
        "item5": false,
        "item6": false,
        "amount1": 425.00,
        "amount2": 200.00,
        "amount3": false,
        "amount4": false,
        "amount5": false,
        "amount6": false,
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
        "cusId": "000016",
        "name": "Los Pollos Hermano's",
        "address1": "9358 Eagle Ranch Rd.",
        "address2": false,
        "city": "Albuqueqe",
        "state": "NM.",
        "zip": "87114",
        "date": "2021-06-18",
        "number": "5110",
        "total": 525.00,
        "status": "Paid",
        "item1": "Ventilation ducts over underground meth lab cleaned",
        "item2": false,
        "item3": false,
        "item4": false,
        "item5": false,
        "item6": false,
        "amount1": 525.00,
        "amount2": false,
        "amount3": false,
        "amount4": false,
        "amount5": false,
        "amount6": false,
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
        "cusId": "000017",
        "name": "Whistle Stop Cafe",
        "address1": "443 Mc Cracken St.",
        "address2": false,
        "city": "Juliette",
        "state": "GA.",
        "zip": "31046",
        "date": "2021-07-17",
        "number": "5109",
        "total": 555.00,
        "status": "Paid",
        "item1": "Single Large System Serviced",
        "item2": false,
        "item3": false,
        "item4": false,
        "item5": false,
        "item6": false,
        "amount1": 555.00,
        "amount2": false,
        "amount3": false,
        "amount4": false,
        "amount5": false,
        "amount6": false,
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
        "cusId": "000018",
        "name": "Vesuvio",
        "address1": "91 Elizabeth Ave.",
        "address2": false,
        "city": "Elizabeth",
        "state": "NJ.",
        "zip": "07206",
        "date": "2021-06-15",
        "number": "5108",
        "total": 625.00,
        "status": "Paid",
        "item1": "Main Carbroiler System Serviced; hood, duct & fan pressure washed",
        "item2": "Fryer System Cleaned",
        "item3": false,
        "item4": false,
        "item5": false,
        "item6": false,
        "item7": false,
        "item8": false,
        "item9": false,
        "amount1": 425.00,
        "amount2": 200.00,
        "amount3": false,
        "amount4": false,
        "amount5": false,
        "amount6": false,
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
        "cusId": "000019",
        "name": "The Pie Pole",
        "address1": "714 Traction Ave.",
        "address2": false,
        "city": "Los Angeles",
        "state": "CA.",
        "zip": "90013",
        "date": "2021-06-15",
        "number": "5107",
        "total": 625.00,
        "status": "Paid",
        "item1": "Main Cookline System Serviced; hood, duct & fan pressure washed",
        "item2": "Bakery Hood Cleaned",
        "item3": false,
        "item4": false,
        "item5": false,
        "item6": false,
        "amount1": 425.00,
        "amount2": 200.00,
        "amount3": false,
        "amount4": false,
        "amount5": false,
        "amount6": false,
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
        "cusId": "000020",
        "name": "Louie's Italian Restaurant",
        "address1": "115 W Ocean Dr.",
        "address2": false,
        "city": "Ocean City",
        "state": "NJ.",
        "zip": "17740",
        "date": "2021-06-11",
        "number": "5106",
        "total": 490.00,
        "status": "Paid",
        "item1": "Main Cookline System Serviced; hood, duct & fan pressure washed",
        "item2": false,
        "item3": false,
        "item4": false,
        "item5": false,
        "item6": false,
        "amount1": 490.00,
        "amount2": false,
        "amount3": false,
        "amount4": false,
        "amount5": false,
        "amount6": false,
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
        "cusId": "000021",
        "name": "Chocolate Factory",
        "address1": "Munich",
        "address2": false,
        "city": "Bavaria",
        "state": "West Germany",
        "zip": false,
        "date": "2021-06-20",
        "number": "5104",
        "total": 590.00,
        "status": "Paid",
        "item1": "Corpse of bratty teen removed from ductwork",
        "item2": false,
        "item3": false,
        "item4": false,
        "item5": false,
        "item6": false,
        "amount1": 590.00,
        "amount2": false,
        "amount3": false,
        "amount4": false,
        "amount5": false,
        "amount6": false,
        "payment": {
            "id": "20210628005104",
            "date": "06/28/2021",
            "method": "Credit",
            "reference": "00938476",
            "notes": "Unsafe work conditions, not worth the money"
        }
    }
]


function changeButtonValues(type, value, location) {
    let buttonCancel = document.getElementById(`modalFooterCancel${type}Button`);
    buttonCancel.value = value;
    let buttonSave = document.getElementById(`modalFooterSave${type}Button`);
    buttonSave.value = location;
}

let alertVal = false;

function makeAlertValTrue() {
    alertVal = true;
}

function formatDate(date) {
    return `${date.charAt(5)}${date.charAt(6)}/${date.charAt(8)}${date.charAt(9)}/${date.charAt(0)}${date.charAt(1)}${date.charAt(2)}${date.charAt(3)}`;
}

function formatNewId(date, number) {
    let first = `${date.charAt(0)}${date.charAt(1)}${date.charAt(2)}${date.charAt(3)}${date.charAt(5)}${date.charAt(6)}${date.charAt(8)}${date.charAt(9)}`;
    if (number.length === 4) {
        number = `00${number}`;
    }
    if (number.length === 5) {
        number = `0${number}`;
    }
    return `${first}${number}`;
}

function setH3(pageName) {
    let h3 = document.getElementById('siteH3');
    let newHeader = pageName.charAt(0).toUpperCase() + pageName.slice(1);
    h3.innerText = `${newHeader}`;
}

function display(pageName) {

    alertVal = false;

    if (pageName === "overview") {
        document.getElementById('siteContentOverview').style.display = 'block';
        document.getElementById('navOverview').className = 'active';
        document.getElementById('siteContentInvoices').style.display = 'none';
        document.getElementById('navInvoices').className = 'inactive';
        document.getElementById('previewInv').style.height = '0%';
        document.getElementById('modalBackground').style.display = 'none';
        document.getElementById('modalInvoiceEdit').style.display = 'none';
        setH3(pageName);
    } else if (pageName === "invoices") {
        document.getElementById('siteContentOverview').style.display = 'none';
        document.getElementById('navOverview').className = 'inactive';
        document.getElementById('siteContentInvoices').style.display = 'block';
        document.getElementById('navInvoices').className = 'active';
        document.getElementById('previewInv').style.height = '0%';
        document.getElementById('modalBackground').style.display = 'none';
        document.getElementById('modalInvoiceEdit').style.display = 'none';
        setH3(pageName);
    } else if (pageName === "Preview Invoice") {
        document.getElementById('previewInv').style.height = '100%';
        document.getElementById('modalBackground').style.display = 'none';
        document.getElementById('modalInvoiceEdit').style.display = 'none';
    } else if (pageName === "invoiceEdit") {
        document.getElementById('modalBackground').style.display = 'block';
        document.getElementById('modalInvoiceEdit').style.display = 'block';
        buildCustomerSelector(dataCustomers);
    }
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
							<td class = "tdDate">${formatDate(data[i].payment.date)}</td>
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
							<td class = "tdOrder3">${formatDate(data[i].date)}
                            <a href = "#previewInv${data[i].id}"
                            class = "rowLink" ></a></td >
							<td class = "tdOrder4">${data[i].number}</td>
							<td class= "tdOrder1">${data[i].name}</td>
                            <td class= "tdOrder5">${data[i].status}</td>
                            <td class= "tdOrder2">${data[i].total.toFixed(2)}</td>
					</tr>`;

        document.getElementById(`tbodyInvoices${paymentStatus}`).innerHTML += row;
    }
}

function findCustomerIndexById(id) {

    for (var i = 0; i < dataCustomers.length; i++) {

        let newCusId = dataCustomers[i].id;

        if (id === newCusId) {
            return i;
        }
    }
}


function buildCustomerSelect(cusId, data = dataCustomers) {

    document.getElementById('invoiceEditCustomerSelector').innerHTML = "";

    function compareStrings(a, b) {
        return (a < b) ? -1 : (a > b) ? 1 : 0;
    }
    data.sort(function (a, b) {
        return compareStrings(a.name, b.name);
    })

    for (var i = 0; i < data.length; i++) {

        let newCusId = data[i].id;
        let newName = data[i].name;
        let newOption = `<option value = "${newCusId}">${newName}</option>`;
        let newOptionSelected = `<option value = "${newCusId}" selected>${newName}</option>`

        if (cusId === newCusId) {
            document.getElementById('invoiceEditCustomerSelector').innerHTML += newOptionSelected;
        }
        if (cusId !== newCusId) {
            document.getElementById('invoiceEditCustomerSelector').innerHTML += newOption;
        }
    }
}

function insertDate(date, type) {
    document.getElementById(`${type}EditDatepicker`).value = date;
}

function insertItems(item1, item2, item3, item4, item5, item6, amount1, amount2, amount3, amount4, amount5, amount6) {
    if (item1 !== false) {
        document.getElementById('invoiceEditItem1').value = `${item1}`;
    }
    if (amount1 !== false) {
        document.getElementById('invoiceEditAmount1').value = amount1.toFixed(2);
    }
    if (item2 !== false) {
        document.getElementById('invoiceEditItem2').value = `${item2}`;
    }
    if (amount2 !== false) {
        document.getElementById('invoiceEditAmount2').value = amount2.toFixed(2);
    }
    if (item3 !== false) {
        document.getElementById('invoiceEditItem3').value = `${item3}`;
    }
    if (amount3 !== false) {
        document.getElementById('invoiceEditAmount3').value = amount3.toFixed(2);
    }
    if (item4 !== false) {
        document.getElementById('invoiceEditItem4').value = `${item4}`;
    }
    if (amount4 !== false) {
        document.getElementById('invoiceEditAmount4').value = amount4.toFixed(2);
    }
    if (item5 !== false) {
        document.getElementById('invoiceEditItem5').value = `${item5}`;
    }
    if (amount5 !== false) {
        document.getElementById('invoiceEditAmount5').value = amount5.toFixed(2);
    }
    if (item6 !== false) {
        document.getElementById('invoiceEditItem6').value = `${item6}`;
    }
    if (amount6 !== false) {
        document.getElementById('invoiceEditAmount6').value = amount6.toFixed(2);
    }
}

function buildItemSelect(data = dataItems) {

    let empty = `<option class="itemOption" selected> </option>`;

    document.getElementById('invoiceEditItemSelect1').innerHTML = "";
    document.getElementById('invoiceEditItemSelect2').innerHTML = "";
    document.getElementById('invoiceEditItemSelect3').innerHTML = "";
    document.getElementById('invoiceEditItemSelect4').innerHTML = "";
    document.getElementById('invoiceEditItemSelect5').innerHTML = "";
    document.getElementById('invoiceEditItemSelect6').innerHTML = "";

    document.getElementById('invoiceEditItemSelect1').innerHTML = empty;
    document.getElementById('invoiceEditItemSelect2').innerHTML = empty;
    document.getElementById('invoiceEditItemSelect3').innerHTML = empty;
    document.getElementById('invoiceEditItemSelect4').innerHTML = empty;
    document.getElementById('invoiceEditItemSelect5').innerHTML = empty;
    document.getElementById('invoiceEditItemSelect6').innerHTML = empty;

    function compareStrings(a, b) {
        return (a < b) ? -1 : (a > b) ? 1 : 0;
    }
    data.sort(function (a, b) {
        return compareStrings(a.name, b.name);
    })

    for (var i = 0; i < data.length; i++) {

        let newOption = `<option class="itemOption" value="${i}">${data[i].name}</option>`;

        document.getElementById('invoiceEditItemSelect1').innerHTML += newOption;
        document.getElementById('invoiceEditItemSelect2').innerHTML += newOption;
        document.getElementById('invoiceEditItemSelect3').innerHTML += newOption;
        document.getElementById('invoiceEditItemSelect4').innerHTML += newOption;
        document.getElementById('invoiceEditItemSelect5').innerHTML += newOption;
        document.getElementById('invoiceEditItemSelect6').innerHTML += newOption;
    }

    addEventListenerItemSelector();
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
    buildRowPayments(dataInvoices);
    buildRowInvoices(dataInvoices);
    invoiceTotal(); // Initial call
    display('overview');
    location.hash = "#overview";
})

function navigation(pageName) {
    loadH3(pageName);
}

function drawInvoice(data, invoiceId) {

    for (var i = 0; i < data.length; i++) {

        let currentId = data[i].id;
        let name = data[i].name;
        let cusId = data[i].cusId;
        let date = data[i].date;
        let number = data[i].number;
        let total = data[i].total;
        let status = data[i].status;
        let item1 = data[i].item1;
        let item2 = data[i].item2;
        let item3 = data[i].item3;
        let item4 = data[i].item4;
        let item5 = data[i].item5;
        let item6 = data[i].item6;
        let amount1 = data[i].amount1;
        let amount2 = data[i].amount2;
        let amount3 = data[i].amount3;
        let amount4 = data[i].amount4;
        let amount5 = data[i].amount5;
        let amount6 = data[i].amount6;
        let address1 = data[i].address1;
        let address2 = data[i].address2;
        let city = data[i].city;
        let state = data[i].state;
        let zip = data[i].zip;
        let addressCustomer = 'Your Mom';

        if (invoiceId === currentId) {
            document.getElementById('invoiceName').innerText = `${name}`;
            document.getElementById('invoiceSummaryName').innerText = `${name}`;
            document.getElementById('invoiceNum').innerText = `${number}`;
            document.getElementById('invoiceSummaryNumber').innerText = `${number}`;
            document.getElementById('invoiceDate').innerText = `${formatDate(date)}`;
            document.getElementById('invoiceSummaryDate').innerText = `${formatDate(date)}`;
            document.getElementById('invoiceSummaryTotal').innerText = `$ ${total.toFixed(2)}`;
            document.getElementById('invoiceTotal').innerText = `$ ${total.toFixed(2)}`;
            document.getElementById('invoiceSummaryStatus').innerText = `${status}`;

            if (address1 !== false) {
                addressCustomer = `${address1} <br>`;
            }

            if (address2 !== false) {
                addressCustomer = `${addressCustomer}${address2} <br>`;
            }

            if (city !== false) {
                addressCustomer = `${addressCustomer}${city}, `;
            }

            if (state !== false) {
                addressCustomer = `${addressCustomer}${state} `;
            }

            if (zip !== false) {
                addressCustomer = `${addressCustomer}${zip}`;
            }
            document.getElementById('invoiceAddress').innerHTML = addressCustomer;

            if (item1 !== false) {
                document.getElementById('invoiceTableItem1').innerHTML = "";
                document.getElementById('invoiceTableItem1').innerHTML = `${item1}`;
            } else {
                document.getElementById('invoiceTableItem1').innerHTML = "";
            }

            if (amount1 !== false) {
                document.getElementById('invoiceTableAmount1').innerHTML = "";
                document.getElementById('invoiceTableAmount1').innerHTML = `$ ${amount1.toFixed(2)}`;
            } else {
                document.getElementById('invoiceTableAmount1').innerHTML = "";
            }

            if (item2 !== false) {
                document.getElementById('invoiceTableItem2').innerHTML = `${item2}`;
                document.getElementById('invoiceTableItem2').innerHTML = `${item2}`;
            } else {
                document.getElementById('invoiceTableItem2').innerHTML = "";
            }

            if (amount2 !== false) {
                document.getElementById('invoiceTableAmount2').innerHTML = "";
                document.getElementById('invoiceTableAmount2').innerHTML = `$ ${amount2.toFixed(2)}`;
            } else {
                document.getElementById('invoiceTableAmount2').innerHTML = "";
            }

            if (item3 !== false) {
                document.getElementById('invoiceTableItem3').innerHTML = "";
                document.getElementById('invoiceTableItem3').innerHTML = `${item3}`;
            } else {
                document.getElementById('invoiceTableItem3').innerHTML = "";
            }

            if (amount3 !== false) {
                document.getElementById('invoiceTableAmount3').innerHTML = "";
                document.getElementById('invoiceTableAmount3').innerHTML = `$ ${amount3.toFixed(2)}`;
            } else {
                document.getElementById('invoiceTableAmount3').innerHTML = "";
            }

            if (item4 !== false) {
                document.getElementById('invoiceTableItem4').innerHTML = "";
                document.getElementById('invoiceTableItem4').innerHTML = `${item4}`;
            } else {
                document.getElementById('invoiceTableItem4').innerHTML = "";
            }

            if (amount4 !== false) {
                document.getElementById('invoiceTableAmount4').innerHTML = "";
                document.getElementById('invoiceTableAmount4').innerHTML = `$ ${amount4.toFixed(2)}`;
            } else {
                document.getElementById('invoiceTableAmount4').innerHTML = "";
            }

            if (item5 !== false) {
                document.getElementById('invoiceTableItem5').innerHTML = "";
                document.getElementById('invoiceTableItem5').innerHTML = `${item5}`;
            } else {
                document.getElementById('invoiceTableItem5').innerHTML = "";
            }

            if (amount5 !== false) {
                document.getElementById('invoiceTableAmount5').innerHTML = "";
                document.getElementById('invoiceTableAmount5').innerHTML = `$ ${amount5.toFixed(2)}`;
            } else {
                document.getElementById('invoiceTableAmount5').innerHTML = "";
            }

            if (item6 !== false) {
                document.getElementById('invoiceTableItem4').innerHTML = "";
                document.getElementById('invoiceTableItem6').innerHTML = `${item6}`;
            } else {
                document.getElementById('invoiceTableItem6').innerHTML = "";
            }

            if (amount6 !== false) {
                document.getElementById('invoiceTableAmount6').innerHTML = "";
                document.getElementById('invoiceTableAmount6').innerHTML = `$ ${amount6.toFixed(2)}`;
            } else {
                document.getElementById('invoiceTableAmount6').innerHTML = "";
            }

            buildCustomerSelect(cusId);
            insertDate(date, "invoice");
            insertItems(item1, item2, item3, item4, item5, item6, amount1, amount2, amount3, amount4, amount5, amount6)
            buildItemSelect();
            changeButtonValues('Invoice', `#previewInv${currentId}`, i);
        }


    }
}


window.addEventListener("hashchange", () => {
    let previewId = location.hash.slice(11);
    let previewTest = location.hash.slice(0, -14);
    if (previewTest === "#previewInv") {
        display("Preview Invoice");
        drawInvoice(dataInvoices, previewId);
    } else if (previewTest !== "previewInv") {
        let newPage = location.hash.substring(1);
        display(newPage);
    }
}, false);


function addEventListenerItemSelector() {

    let itemSelect1 = document.getElementById('invoiceEditItemSelect1');
    let itemSelect2 = document.getElementById('invoiceEditItemSelect2');
    let itemSelect3 = document.getElementById('invoiceEditItemSelect3');
    let itemSelect4 = document.getElementById('invoiceEditItemSelect4');
    let itemSelect5 = document.getElementById('invoiceEditItemSelect5');
    let itemSelect6 = document.getElementById('invoiceEditItemSelect6');
    let datepicker = document.getElementById('invoiceEditDatepicker');
    let customerSelect = document.getElementById('invoiceEditCustomerSelector');


    itemSelect1.addEventListener('change', function () {
        let i = itemSelect1.value;
        if (i === 0) {
        document.getElementById('invoiceEditItem1').value = "";
        document.getElementById('invoiceEditAmount1').value = "";
        } else {
        document.getElementById('invoiceEditItem1').value = `${dataItems[i].desc}`;
        document.getElementById('invoiceEditAmount1').value = dataItems[i].amount.toFixed(2);
        }
        alertVal = true;
    })

    itemSelect2.addEventListener('change', function () {
        let i = itemSelect2.value;
        if (i === 0) {
        document.getElementById('invoiceEditItem2').value = "";
        document.getElementById('invoiceEditAmount2').value = "";
        } else {
        document.getElementById('invoiceEditItem2').value = `${dataItems[i].desc}`;
        document.getElementById('invoiceEditAmount2').value = dataItems[i].amount.toFixed(2);
        }
        alertVal = true;
    })

    itemSelect3.addEventListener('change', function () {
        let i = itemSelect3.value;
        if (i = 0) {
        document.getElementById('invoiceEditItem3').value = "";
        document.getElementById('invoiceEditAmount3').value = "";
        } else {
        document.getElementById('invoiceEditItem3').value = `${dataItems[i].desc}`;
        document.getElementById('invoiceEditAmount3').value = dataItems[i].amount.toFixed(2);
        }
        alertVal = true;
    })

    itemSelect4.addEventListener('change', function () {
        let i = itemSelect4.value;
        if (i = 0) {
        document.getElementById('invoiceEditItem4').value = "";
        document.getElementById('invoiceEditAmount4').value = "";
        } else {
        document.getElementById('invoiceEditItem4').value = `${dataItems[i].desc}`;
        document.getElementById('invoiceEditAmount4').value = dataItems[i].amount.toFixed(2);
        }
        alertVal = true;
    })

    itemSelect5.addEventListener('change', function () {
        let i = itemSelect5.value;
        if (i = 0) {
        document.getElementById('invoiceEditItem5').value = "";
        document.getElementById('invoiceEditAmount5').value = "";
        } else {
        document.getElementById('invoiceEditItem5').value = `${dataItems[i].desc}`;
        document.getElementById('invoiceEditAmount5').value = dataItems[i].amount.toFixed(2);
        }
        alertVal = true;
    })

    itemSelect6.addEventListener('change', function () {
        let i = itemSelect6.value;
        if (i = 0) {
        document.getElementById('invoiceEditItem6').value = "";
        document.getElementById('invoiceEditAmount6').value = "";
        } else {
        document.getElementById('invoiceEditItem6').value = `${dataItems[i].desc}`;
        document.getElementById('invoiceEditAmount6').value = dataItems[i].amount.toFixed(2);
        }
        alertVal = true;
    })

    datepicker.addEventListener('change', function () {
        alertVal = true;
    })

    customerSelect.addEventListener('change', function () {
        alertVal = true;
    })
}

function cancelInvoice() {
    let buttonVal = document.getElementById(`modalFooterCancelInvoiceButton`).value;
    if (alertVal === false) {
        window.location.hash = buttonVal;
    } else {
        if (confirm("Leave without saving changes?") == true) {
            window.location.hash = buttonVal;
            alertVal = false;
        } else {}
    }
}

function saveInvoice() {
    let i = document.getElementById(`modalFooterSaveInvoiceButton`).value;
    let date = document.getElementById(`invoiceEditDatepicker`).value;
    let cusId = document.getElementById(`invoiceEditCustomerSelector`).value;
    let c = findCustomerIndexById(cusId);
    let name = dataCustomers[c].name;
    let address1 = dataCustomers[c].address1;
    if (address1.length < 1) {
        address1 = false;
    }
    let address2 = dataCustomers[c].address2;
    if (address2.length < 1) {
        address2 = false;
    }
    let city = dataCustomers[c].city;
    if (city.length < 1) {
        city = false;
    }
    let state = dataCustomers[c].state;
    if (state.length < 1) {
        state = false;
    }
    let zip = dataCustomers[c].zip;
    if (zip.length < 1) {
        zip = false;
    }
    let item1 = document.getElementById(`invoiceEditItem1`).value;
    if (item1.length < 1) {
        item1 = false;
    }
    let amount1 = parseInt(document.getElementById(`invoiceEditAmount1`).value);
    let item2 = document.getElementById(`invoiceEditItem2`).value;
    if (item2.length < 1) {
        item2 = false;
    }
    let amount2 = parseInt(document.getElementById(`invoiceEditAmount2`).value);
    let item3 = document.getElementById(`invoiceEditItem3`).value;
    if (item3.length < 1) {
        item3 = false;
    }
    let amount3 = parseInt(document.getElementById(`invoiceEditAmount3`).value);
    let item4 = document.getElementById(`invoiceEditItem4`).value;
    if (item4.length < 1) {
        item4 = false;
    }
    let amount4 = parseInt(document.getElementById(`invoiceEditAmount4`).value);
    let item5 = document.getElementById(`invoiceEditItem5`).value;
    if (item5.length < 1) {
        item5 = false;
    }
    let amount5 = parseInt(document.getElementById(`invoiceEditAmount5`).value);
    let item6 = document.getElementById(`invoiceEditItem6`).value;
    if (item6.length < 1) {
        item6 = false;
    }
    let amount6 = parseInt(document.getElementById(`invoiceEditAmount6`).value);
    let total = 0;
    if (amount1 > 0 || amount1 < 0) {
        total += amount1;
        dataInvoices[i].amount1 = amount1;
    } else {
        dataInvoices[i].amount1 = false;
    }
    if (amount2 > 0 || amount2 < 0) {
        total += amount2;
        dataInvoices[i].amount2 = amount2;
    } else {
        dataInvoices[i].amount2 = false;
    }
    if (amount3 > 0 || amount3 < 0) {
        total += amount3;
        dataInvoices[i].amount3 = amount3;
    } else {
        dataInvoices[i].amount3 = false;
    }
    if (amount4 > 0 || amount4 < 0) {
        total += amount4;
        dataInvoices[i].amount4 = amount4;
    } else {
        dataInvoices[i].amount4 = false;
    }
    if (amount5 > 0 || amount5 < 0) {
        total += amount5;
        dataInvoices[i].amount5 = amount5;
    } else {
        dataInvoices[i].amount6 = false;
    }
    if (amount6 > 0 || amount6 < 0) {
        total += amount6;
        dataInvoices[i].amount6 = amount6;
    } else {
        dataInvoices[i].amount6 = false;
    }

    let number = dataInvoices[i].number;
    let newId = formatNewId(date, number);
    dataInvoices[i].cusId = cusId;
    dataInvoices[i].id = newId;
    dataInvoices[i].date = date;
    dataInvoices[i].name = name;
    dataInvoices[i].address1 = address1;
    dataInvoices[i].address2 = address2;
    dataInvoices[i].city = city;
    dataInvoices[i].state = state;
    dataInvoices[i].zip = zip;

    if (item1.length > 0) {
        dataInvoices[i].item1 = item1;
    }
    if (item2.length > 0) {
        dataInvoices[i].item2 = item2;
    }
    if (item3.length > 0) {
        dataInvoices[i].item3 = item3;
    }
    if (item4.length > 0) {
        dataInvoices[i].item4 = item4;
    }
    if (item4.length > 0) {
        dataInvoices[i].item5 = item5;
    }
    if (item4.length > 0) {
        dataInvoices[i].item6 = item6;
    }
    dataInvoices[i].total = total;
    window.location.hash = `#previewInv${newId}`;
}