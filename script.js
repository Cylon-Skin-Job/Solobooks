let db = [{
        // BBB [0] dbInvoices
        "invoices": [

            {
                "customerName": "Cafe Nervosa",
                "customerId": 1666430128801,
                "address1": "2115 E 3rd St.",
                "address2": false,
                "city": "Ocean City",
                "state": "NJ",
                "zip": "17740",
                "invoiceDate": "2021-09-28",
                "invoiceNumber": 5225,
                "invoiceItem1": "Single System Service; Downstairs hood, duct & fan pressure washed",
                "invoiceItem2": "Second Upstairs System Cleaned on Same visit",
                "invoiceItem3": false,
                "invoiceItem4": false,
                "invoiceItem5": false,
                "invoiceItem6": false,
                "invoiceAmount1": 390,
                "invoiceAmount2": 200,
                "invoiceAmount3": false,
                "invoiceAmount4": false,
                "invoiceAmount5": false,
                "invoiceAmount6": false,
                "invoicePayment": true,
                "paymentDate": "2021-09-29",
                "paymentMethod": "Credit Card",
                "paymentNotes": ""

            },
            {
                "customerName": "Cafe Nervosa",
                "customerId": 1666430128801,
                "address1": "2115 E 3rd St.",
                "address2": false,
                "city": "Ocean City",
                "state": "NJ",
                "zip": "17740",
                "invoiceDate": "2021-08-22",
                "invoiceNumber": 5229,
                "invoicePayment": false,
                "invoiceItem1": "Single System Service; Downstairs hood, duct & fan pressure washed",
                "invoiceItem2": "Second Upstairs System Cleaned on Same visit",
                "invoiceItem3": false,
                "invoiceItem4": false,
                "invoiceItem5": false,
                "invoiceItem6": false,
                "invoiceAmount1": 390,
                "invoiceAmount2": 200,
                "invoiceAmount3": false,
                "invoiceAmount4": false,
                "invoiceAmount5": false,
                "invoiceAmount6": false,
                "paymentDate": false,
                "paymentMethod": false,
                "paymentNotes": ""

            },
            {
                "customerId": 1666430128802,
                "customerName": "The Indigo Tea Shop",
                "address1": "1501 Riverwood Dr.",
                "address2": false,
                "city": "Burnsville",
                "state": "MN",
                "zip": "55337",
                "invoiceDate": "2021-09-25",
                "invoiceNumber": 5141,
                "invoicePayment": true,
                "invoiceItem1": "Main Cookline System Serviced; Downstairs hood, duct & fan pressure washed",
                "invoiceItem2": false,
                "invoiceItem3": false,
                "invoiceItem4": false,
                "invoiceItem5": false,
                "invoiceItem6": false,
                "invoiceAmount1": 565.00,
                "invoiceAmount2": false,
                "invoiceAmount3": false,
                "invoiceAmount4": false,
                "invoiceAmount5": false,
                "invoiceAmount6": false,
                "paymentDate": "2021-09-25",
                "paymentMethod": "Cash",
                "paymentNotes": ""
            },
            {
                "customerId": 1666430128803,
                "customerName": "Pizza Planet",
                "address1": "745 Anchor Ave.",
                "address2": false,
                "city": "Orange Cove",
                "state": "CA",
                "zip": "93646",
                "invoiceDate": "2021-10-19",
                "invoiceNumber": 5142,
                "invoicePayment": true,
                "invoiceItem1": "Main Cookline System Serviced; Downstairs hood, duct & fan pressure washed",
                "invoiceItem2": "Pizza Oven Hood Serviced",
                "invoiceItem3": false,
                "invoiceItem4": false,
                "invoiceItem5": false,
                "invoiceItem6": false,
                "invoiceAmount1": 475.00,
                "invoiceAmount2": 110.00,
                "invoiceAmount3": false,
                "invoiceAmount4": false,
                "invoiceAmount5": false,
                "invoiceAmount6": false,
                "paymentDate": "2021-10-20",
                "paymentMethod": false,
                "paymentNotes": ""
            },
            {
                "customerId": 1666430128804,
                "customerName": "Bob's Burgers",
                "address1": "115 W Ocean Dr.",
                "address2": false,
                "city": "Ocean City",
                "state": "NJ",
                "zip": "17740",
                "invoiceDate": "2021-08-12",
                "invoiceNumber": 5127,
                "invoicePayment": true,
                "invoiceItem1": "Main Carbroiler System Serviced; Downstairs hood, duct & fan pressure washed",
                "invoiceItem2": "Fryer System Cleaned",
                "invoiceItem3": false,
                "invoiceItem4": false,
                "invoiceItem5": false,
                "invoiceItem6": false,
                "invoiceAmount1": 350.00,
                "invoiceAmount2": 200.00,
                "invoiceAmount3": false,
                "invoiceAmount4": false,
                "invoiceAmount5": false,
                "invoiceAmount6": false,
                "paymentDate": "2021-08-20",
                "paymentMethod": "Cash",
                "paymentNotes": ""
            },
            {
                "customerId": 1666430128805,
                "customerName": "Arnold's Drive In",
                "address1": "488 W East St.",
                "address2": false,
                "city": "Riverside",
                "state": "CA",
                "zip": "93723",
                "invoiceDate": "2021-08-11",
                "invoiceNumber": 5104,
                "invoicePayment": true,
                "invoiceItem1": "Cookline Kitchen Exhaust System Cleaned",
                "invoiceItem2": false,
                "invoiceItem3": false,
                "invoiceItem4": false,
                "invoiceItem5": false,
                "invoiceItem6": false,
                "invoiceAmount1": 485.00,
                "invoiceAmount2": false,
                "invoiceAmount3": false,
                "invoiceAmount4": false,
                "invoiceAmount5": false,
                "invoiceAmount6": false,
                "paymentDate": "2021-08-29",
                "paymentMethod": false,
                "paymentNotes": ""
            },
            {
                "customerId": 1666430128806,
                "customerName": "Paunch Burger",
                "address1": "565 North Clinton Dr.",
                "address2": false,
                "city": "Pawnee",
                "state": "IN",
                "zip": "56100",
                "invoiceDate": "2021-08-11",
                "invoiceNumber": 5126,
                "invoicePayment": true,
                "invoiceItem1": "Main Carbroiler System Serviced; Downstairs hood, duct & fan pressure washed",
                "invoiceItem2": "Fryer System Cleaned",
                "invoiceItem3": false,
                "invoiceItem4": false,
                "invoiceItem5": false,
                "invoiceItem6": false,
                "invoiceAmount1": 425.00,
                "invoiceAmount2": 200.00,
                "invoiceAmount3": false,
                "invoiceAmount4": false,
                "invoiceAmount5": false,
                "invoiceAmount6": false,
                "paymentDate": "2021-09-11",
                "paymentMethod": false,
                "paymentNotes": ""
            },
            {
                "customerId": 1666430128807,
                "customerName": "Central Perk",
                "address1": "565 5th Ave.",
                "address2": false,
                "city": "New York City",
                "state": "NY",
                "zip": "10001",
                "invoiceDate": "2021-08-03",
                "invoiceNumber": 5138,
                "invoicePayment": false,
                "invoiceItem1": "Bakery/Griddle Oven Hood serviced",
                "invoiceItem2": false,
                "invoiceItem3": false,
                "invoiceItem4": false,
                "invoiceItem5": false,
                "invoiceItem6": false,
                "invoiceAmount1": 385.00,
                "invoiceAmount2": false,
                "invoiceAmount3": false,
                "invoiceAmount4": false,
                "invoiceAmount5": false,
                "invoiceAmount6": false,
                "paymentDate": false,
                "paymentMethod": false,
                "paymentNotes": ""
            },
            {
                "customerId": 1666430128808,
                "customerName": "Cheer's",
                "address1": "1501 Riverwood Dr.",
                "address2": false,
                "city": "Burnsville",
                "state": "MN",
                "zip": "55337",
                "invoiceDate": "2021-09-25",
                "invoiceNumber": 5121,
                "invoicePayment": false,
                "invoiceItem1": "Main Carbroiler System Serviced; Downstairs hood, duct & fan pressure washed",
                "invoiceItem2": "Fryer System Cleaned",
                "invoiceItem3": false,
                "invoiceItem4": false,
                "invoiceItem5": false,
                "invoiceItem6": false,
                "invoiceAmount1": 350.00,
                "invoiceAmount2": 115.00,
                "invoiceAmount3": false,
                "invoiceAmount4": false,
                "invoiceAmount5": false,
                "invoiceAmount6": false,
                "paymentDate": false,
                "paymentMethod": false,
                "paymentNotes": ""
            },
            {
                "customerId": 1666430128809,
                "customerName": "Joe's Bar",
                "address1": "940 W Weed St.",
                "address2": false,
                "city": "Chicago",
                "state": "IL",
                "zip": "60642",
                "invoiceDate": "2021-07-23",
                "invoiceNumber": 5120,
                "invoicePayment": true,
                "invoiceItem1": "Single Small System Service; Downstairs hood, duct & fan pressure washed",
                "invoiceItem2": false,
                "invoiceItem3": false,
                "invoiceItem4": false,
                "invoiceItem5": false,
                "invoiceItem6": false,
                "invoiceAmount1": 385.00,
                "invoiceAmount2": false,
                "invoiceAmount3": false,
                "invoiceAmount4": false,
                "invoiceAmount5": false,
                "invoiceAmount6": false,
                "paymentDate": "2021-07-25",
                "paymentMethod": "Check",
                "paymentNotes": "# 7809",
            },
            {
                "customerId": 1666430128810,
                "customerName": "Three Broomsticks",
                "address1": "100 Universal Plaza",
                "address2": false,
                "city": "Universal City",
                "state": "CA",
                "zip": "91608",
                "invoiceDate": "2021-07-22",
                "invoiceNumber": 5119,
                "invoicePayment": true,
                "invoiceItem1": "Fryer System and Cookline Serviced: Hood, Ducts & Fans",
                "invoiceItem2": false,
                "invoiceItem3": false,
                "invoiceItem4": false,
                "invoiceItem5": false,
                "invoiceItem6": false,
                "invoiceAmount1": 625.00,
                "invoiceAmount2": false,
                "invoiceAmount3": false,
                "invoiceAmount4": false,
                "invoiceAmount5": false,
                "invoiceAmount6": false,
                "paymentDate": "2021-07-25",
                "paymentMethod": "Check",
                "paymentNotes": "Held for 2 weeks check # 555"
            },
            {
                "customerId": 1666430128811,
                "customerName": "Mos Eisley Cantina",
                "address1": "Tattoine",
                "address2": false,
                "city": "Outer Rim Territories",
                "state": false,
                "zip": false,
                "invoiceDate": "2021-07-18",
                "invoiceNumber": 5118,
                "invoicePayment": true,
                "invoiceItem1": "Rear kitchen system serviced.",
                "invoiceItem2": "Discount for assistance from in house droid staff.",
                "invoiceItem3": false,
                "invoiceItem4": false,
                "invoiceItem5": false,
                "invoiceItem6": false,
                "invoiceAmount1": 585.00,
                "invoiceAmount2": -100.00,
                "invoiceAmount3": false,
                "invoiceAmount4": false,
                "invoiceAmount5": false,
                "invoiceAmount6": false,
                "paymentDate": "2021-07-29",
                "paymentMethod": "Check",
                "paymentNotes": "Rebel scum tried to pay with federation credits"
            },
            {
                "customerId": 1666430128812,
                "customerName": "Krusty Crab",
                "address1": "Bikini Atoll",
                "address2": "Ocean Floor",
                "city": "Pacific Ocean",
                "state": false,
                "zip": false,
                "invoiceDate": "2021-07-16",
                "invoiceNumber": 5116,
                "invoicePayment": true,
                "invoiceItem1": "Single System Service",
                "invoiceItem2": false,
                "invoiceItem3": false,
                "invoiceItem4": false,
                "invoiceItem5": false,
                "invoiceItem6": false,
                "invoiceAmount1": 385.00,
                "invoiceAmount2": false,
                "invoiceAmount3": false,
                "invoiceAmount4": false,
                "invoiceAmount5": false,
                "invoiceAmount6": false,
                "paymentDate": "2021-07-20",
                "paymentMethod": "Check",
                "paymentNotes": "Check reaks of fish smell"
            },
            {
                "customerId": 1666430128813,
                "customerName": "La Ratatouille",
                "address1": "234 Main St.",
                "address2": false,
                "city": "Villanueve",
                "state": "France",
                "zip": false,
                "invoiceDate": "2021-07-11",
                "invoiceNumber": 5114,
                "invoicePayment": true,
                "invoiceItem1": "Main Cookline Kitchen Exhaust Cleaning",
                "invoiceItem2": false,
                "invoiceItem3": false,
                "invoiceItem4": false,
                "invoiceItem5": false,
                "invoiceItem6": false,
                "invoiceAmount1": 485.00,
                "invoiceAmount2": false,
                "invoiceAmount3": false,
                "invoiceAmount4": false,
                "invoiceAmount5": false,
                "invoiceAmount6": false,
                "paymentDate": "2021-06-19",
                "paymentMethod": "Cash",
                "paymentNotes": "Think I saw a rat in the kitchen"
            },
            {
                "customerId": 1666430128814,
                "customerName": "Frozen Banana",
                "address1": "565 Ocean Wharf Blvd.",
                "address2": false,
                "city": "Oceanside",
                "state": "CA",
                "zip": "92003",
                "invoiceDate": "2021-06-23",
                "invoiceNumber": 5112,
                "invoicePayment": true,
                "invoiceItem1": "Hood vent over cornballer machine serviced",
                "invoiceItem2": false,
                "invoiceItem3": false,
                "invoiceItem4": false,
                "invoiceItem5": false,
                "invoiceItem6": false,
                "invoiceAmount1": 385.00,
                "invoiceAmount2": false,
                "invoiceAmount3": false,
                "invoiceAmount4": false,
                "invoiceAmount5": false,
                "invoiceAmount6": false,
                "paymentDate": "2021-07-01",
                "paymentMethod": "Cash",
                "paymentNotes": ""
            },
            {
                "customerId": 1666430128815,
                "customerName": "Monk's Cafe",
                "address1": "555 W. 122th St.",
                "address2": false,
                "city": "New York",
                "state": "NY",
                "zip": "10001",
                "invoiceDate": "2021-06-22",
                "invoiceNumber": 5111,
                "invoicePayment": true,
                "invoiceItem1": "Main Carbroiler System Serviced; Downstairs hood, duct & fan pressure washed",
                "invoiceItem2": "Fryer System Cleaned",
                "invoiceItem3": false,
                "invoiceItem4": false,
                "invoiceItem5": false,
                "invoiceItem6": false,
                "invoiceAmount1": 425.00,
                "invoiceAmount2": 200.00,
                "invoiceAmount3": false,
                "invoiceAmount4": false,
                "invoiceAmount5": false,
                "invoiceAmount6": false,
                "paymentDate": "2021-06-23",
                "paymentMethod": "Cash",
                "paymentNotes": ""
            },
            {
                "customerId": 1666430128816,
                "customerName": "Los Pollos Hermano's",
                "address1": "9358 Eagle Ranch Rd.",
                "address2": false,
                "city": "Albuqueqe",
                "state": "NM",
                "zip": "87114",
                "invoiceDate": "2021-06-18",
                "invoiceNumber": 5110,
                "invoicePayment": true,
                "invoiceItem1": "Ventilation ducts over underground meth lab cleaned",
                "invoiceItem2": false,
                "invoiceItem3": false,
                "invoiceItem4": false,
                "invoiceItem5": false,
                "invoiceItem6": false,
                "invoiceAmount1": 525.00,
                "invoiceAmount2": false,
                "invoiceAmount3": false,
                "invoiceAmount4": false,
                "invoiceAmount5": false,
                "invoiceAmount6": false,
                "paymentDate": "2021-06-29",
                "paymentMethod": "Cash",
                "paymentNotes": "I think I saw some drug dealers hanging around the office"
            },
            {
                "customerId": 1666430128817,
                "customerName": "Whistle Stop Cafe",
                "address1": "443 Mc Cracken St.",
                "address2": false,
                "city": "Juliette",
                "state": "GA",
                "zip": "31046",
                "invoiceDate": "2021-07-17",
                "invoiceNumber": 5109,
                "invoicePayment": true,
                "invoiceItem1": "Single Large System Serviced",
                "invoiceItem2": false,
                "invoiceItem3": false,
                "invoiceItem4": false,
                "invoiceItem5": false,
                "invoiceItem6": false,
                "invoiceAmount1": 555.00,
                "invoiceAmount2": false,
                "invoiceAmount3": false,
                "invoiceAmount4": false,
                "invoiceAmount5": false,
                "invoiceAmount6": false,
                "paymentDate": "2021-06-01",
                "paymentMethod": "Check",
                "paymentNotes": ""
            },
            {
                "customerId": 1666430128818,
                "customerName": "Vesuvio",
                "address1": "91 Elizabeth Ave.",
                "address2": false,
                "city": "Elizabeth",
                "state": "NJ",
                "zip": "07206",
                "invoiceDate": "2021-06-15",
                "invoiceNumber": "5108",
                "invoicePayment": true,
                "invoiceItem1": "Main Carbroiler System Serviced; hood, duct & fan pressure washed",
                "invoiceItem2": "Fryer System Cleaned",
                "invoiceItem3": false,
                "invoiceItem4": false,
                "invoiceItem5": false,
                "invoiceItem6": false,
                "invoiceItem7": false,
                "invoiceItem8": false,
                "invoiceItem9": false,
                "invoiceAmount1": 425.00,
                "invoiceAmount2": 200.00,
                "invoiceAmount3": false,
                "invoiceAmount4": false,
                "invoiceAmount5": false,
                "invoiceAmount6": false,
                "paymentDate": "2021-06-15",
                "paymentMethod": "Check",
                "paymentNotes": ""
            },
            {
                "customerId": 1666430128819,
                "customerName": "The Pie Pole",
                "address1": "714 Traction Ave.",
                "address2": false,
                "city": "Los Angeles",
                "state": "CA",
                "zip": "90013",
                "invoiceDate": "2021-06-15",
                "invoiceNumber": "5107",
                "invoicePayment": true,
                "invoiceItem1": "Main Cookline System Serviced; hood, duct & fan pressure washed",
                "invoiceItem2": "Bakery Hood Cleaned",
                "invoiceItem3": false,
                "invoiceItem4": false,
                "invoiceItem5": false,
                "invoiceItem6": false,
                "invoiceAmount1": 425.00,
                "invoiceAmount2": 200.00,
                "invoiceAmount3": false,
                "invoiceAmount4": false,
                "invoiceAmount5": false,
                "invoiceAmount6": false,
                "paymentDate": "2021-06-20",
                "paymentMethod": "Cash",
                "paymentNotes": ""
            },
            {
                "customerId": 1666430128820,
                "customerName": "Louie's Italian Restaurant",
                "address1": "115 W Ocean Dr.",
                "address2": false,
                "city": "Ocean City",
                "state": "NJ",
                "zip": "17740",
                "invoiceDate": "2021-06-11",
                "invoiceNumber": 5106,
                "invoicePayment": true,
                "invoiceItem1": "Main Cookline System Serviced; hood, duct & fan pressure washed",
                "invoiceItem2": false,
                "invoiceItem3": false,
                "invoiceItem4": false,
                "invoiceItem5": false,
                "invoiceItem6": false,
                "invoiceAmount1": 490.00,
                "invoiceAmount2": false,
                "invoiceAmount3": false,
                "invoiceAmount4": false,
                "invoiceAmount5": false,
                "invoiceAmount6": false,
                "paymentDate": "2021-06-12",
                "paymentMethod": "Check",
                "paymentNotes": ""
            },
            {
                "customerId": 1666430128821,
                "customerName": "Chocolate Factory",
                "address1": "Munich",
                "address2": false,
                "city": "Bavaria",
                "state": "West Germany",
                "zip": false,
                "invoiceDate": "2021-06-20",
                "invoiceNumber": 5104,
                "invoicePayment": true,
                "invoiceItem1": "Corpse of bratty teen removed from ductwork",
                "invoiceItem2": false,
                "invoiceItem3": false,
                "invoiceItem4": false,
                "invoiceItem5": false,
                "invoiceItem6": false,
                "invoiceAmount1": 590.00,
                "invoiceAmount2": false,
                "invoiceAmount3": false,
                "invoiceAmount4": false,
                "invoiceAmount5": false,
                "invoiceAmount6": false,
                "paymentDate": "2021-06-30",
                "paymentMethod": "Credit",
                "paymentNotes": "Unsafe work conditions, not worth the money"
            }
        ]
    },

    // BBB [1] dbCustomers
    {
        "customers": [

            {
                "customerId": 1666430128801,
                "customerName": "Cafe Nervosa",
                "address1": "2115 E 3rd St.",
                "address2": false,
                "city": "Ocean City",
                "state": "NJ",
                "zip": "17740"
            },
            {
                "customerId": 1666430128802,
                "customerName": "The Indigo Tea Shop",
                "address1": "1501 Riverwood Dr.",
                "address2": false,
                "city": "Burnsville",
                "state": "MN",
                "zip": "55337"
            },
            {
                "customerId": 1666430128803,
                "customerName": "Pizza Planet",
                "address1": "745 Anchor Ave.",
                "address2": false,
                "city": "Orange Cove",
                "state": "CA",
                "zip": "93646"
            },
            {
                "customerId": 1666430128804,
                "customerName": "Bob's Burgers",
                "address1": "115 W Ocean Dr.",
                "address2": false,
                "city": "Ocean City",
                "state": "NJ",
                "zip": "17740"
            },
            {
                "customerId": 1666430128805,
                "customerName": "Arnold's Drive In",
                "address1": "488 W East St.",
                "address2": "Unit # 555",
                "city": "Riverside",
                "state": "CA",
                "zip": "93723"
            },
            {
                "customerId": 1666430128806,
                "customerName": "Paunch Burger",
                "address1": "565 North Clinton Dr.",
                "address2": false,
                "city": "Pawnee",
                "state": "IN",
                "zip": "56100"
            },
            {
                "customerId": 1666430128807,
                "customerName": "Central Perk",
                "address1": "565 5th Ave.",
                "address2": false,
                "city": "New York City",
                "state": "NY",
                "zip": "10001"
            },
            {
                "customerId": 1666430128808,
                "customerName": "Cheer's",
                "address1": "1501 Riverwood Dr.",
                "address2": false,
                "city": "Burnsville",
                "state": "MN",
                "zip": "55337"
            },
            {
                "customerId": 1666430128809,
                "customerName": "Joe's Bar",
                "address1": "940 W Weed St.",
                "address2": false,
                "city": "Chicago",
                "state": "IL",
                "zip": "60642"
            },
            {
                "customerId": 1666430128810,
                "customerName": "Three Broomsticks",
                "address1": "100 Universal Plaza",
                "address2": false,
                "city": "Universal City",
                "state": "CA",
                "zip": "91608"
            },
            {
                "customerId": 1666430128811,
                "customerName": "Mos Eisley Cantina",
                "address1": "Tattoine",
                "address2": false,
                "city": "Outer Rim Territories",
                "state": "",
                "zip": ""
            },
            {
                "customerId": 1666430128812,
                "customerName": "Krusty Crab",
                "address1": "Bikini Atoll",
                "address2": false,
                "city": "Pacific Ocean",
                "state": "",
                "zip": ""
            },
            {
                "customerId": 1666430128813,
                "customerName": "La Ratatouille",
                "address1": "234 Main St.",
                "address2": false,
                "city": "Villanueve",
                "state": "France",
                "zip": ""
            },
            {
                "customerId": 1666430128814,
                "customerName": "Frozen Banana",
                "address1": "565 Ocean Wharf Blvd.",
                "address2": false,
                "city": "Oceanside",
                "state": "CA",
                "zip": "92003"
            },
            {
                "customerId": 1666430128815,
                "customerName": "Monk's Cafe",
                "address1": "555 W. 122th St.",
                "address2": false,
                "city": "New York",
                "state": "NY",
                "zip": "10001"
            },
            {
                "customerId": 1666430128816,
                "customerName": "Los Pollos Hermano's",
                "address1": "9358 Eagle Ranch Rd.",
                "address2": false,
                "city": "Albuqueqe",
                "state": "NM",
                "zip": "87114"
            },
            {
                "customerId": 1666430128817,
                "customerName": "Whistle Stop Cafe",
                "address1": "443 Mc Cracken St.",
                "address2": false,
                "city": "Juliette",
                "state": "GA",
                "zip": "31046"
            },
            {
                "customerId": 1666430128818,
                "customerName": "Vesuvio",
                "address1": "91 Elizabeth Ave.",
                "address2": false,
                "city": "Elizabeth",
                "state": "NJ",
                "zip": "07206"
            },
            {
                "customerId": 1666430128819,
                "customerName": "The Pie Pole",
                "address1": "714 Traction Ave.",
                "address2": false,
                "city": "Los Angeles",
                "state": "CA",
                "zip": "90013"
            },
            {
                "customerId": 1666430128820,
                "customerName": "Louie's Italian Restaurant",
                "address1": "115 W Ocean Dr.",
                "address2": false,
                "city": "Ocean City",
                "state": "NJ",
                "zip": "17740"
            },
            {
                "customerId": 1666430128821,
                "customerName": "Chocolate Factory",
                "address1": "Munich",
                "address2": false,
                "city": "Bavaria",
                "state": "West Germany",
                "zip": ""

            }
        ]
    },
    {

        // BBB [2] listItems
        "listItems": [

            {
                "itemName": "Single System Small",
                "itemDescription": "Single Small System Service: Kitchen Exhaust Cleaning, hoods, ducts & fans",
                "itemAmount": 385.00
            },
            {
                "itemName": "Single System Large",
                "itemDescription": "Single Large System Service: Kitchen Exhaust Cleaning, hoods, ducts & fans",
                "itemAmount": 585.00
            },
            {
                "itemName": "Second System Small",
                "itemDescription": "Second System Serviced on Same Visit",
                "itemAmount": 200.00
            },
            {
                "itemName": "Second System Large",
                "itemDescription": "Second System Serviced on Same Visit",
                "itemAmount": 300.00
            }
        ]
    },
    {
        // BBB [3] expenses
        "expenses": [{
                "expenseCategory": "Supplies",
                "expenseDate": "2021-09-28",
                "expenseAmount": 69.58,
                "expenseNotes": "Acme Supply Shop",
                "expenseId": 1669514751416
            },
            {
                "expenseCategory": "Supplies",
                "expenseDate": "2021-09-02",
                "expenseAmount": 19.78,
                "expenseNotes": "Acme Supply Shop",
                "expenseId": 1669514751417
            },
            {
                "expenseCategory": "Supplies",
                "expenseDate": "2021-06-28",
                "expenseAmount": 189.34,
                "expenseNotes": "Acme Supply Shop",
                "expenseId": 1669514751418
            },
            {
                "expenseCategory": "Supplies",
                "expenseDate": "2021-07-22",
                "expenseAmount": 29.78,
                "expenseNotes": "Local Hardware",
                "expenseId": 1669514751419
            },
            {
                "expenseCategory": "Supplies",
                "expenseDate": "2021-08-03",
                "expenseAmount": 107.37,
                "expenseNotes": "Local Hardware",
                "expenseId": 1669514751420
            },
            {
                "expenseCategory": "Supplies",
                "expenseDate": "2021-06-20",
                "expenseAmount": 99.34,
                "expenseNotes": "bigriver.com",
                "expenseId": 1669514751421
            },
            {
                "expenseCategory": "Supplies",
                "expenseDate": "2021-08-19",
                "expenseAmount": 19.78,
                "expenseNotes": "bigriver.com",
                "expenseId": 1669514751422
            },
            {
                "expenseCategory": "Supplies",
                "expenseDate": "2021-06-13",
                "expenseAmount": 127.37,
                "expenseNotes": "bigriver.com",
                "expenseId": 1669514751423
            },
            {
                "expenseCategory": "Fuel",
                "expenseDate": "2021-09-27",
                "expenseAmount": 11.58,
                "expenseNotes": "24/7 Pump-N-Go",
                "expenseId": 1669514751424
            },
            {
                "expenseCategory": "Insurance",
                "expenseDate": "2021-09-26",
                "expenseAmount": 102.38,
                "expenseNotes": "Regressive",
                "expenseId": 1669514751425
            },
            {
                "expenseCategory": "Fuel",
                "expenseDate": "2021-09-15",
                "expenseAmount": 44.37,
                "expenseNotes": "Hwy 1 Gas Station",
                "expenseId": 1669514751426
            },
            {
                "expenseCategory": "Advertising",
                "expenseDate": "2021-09-26",
                "expenseAmount": 73.01,
                "expenseNotes": "XP Printers",
                "expenseId": 1669514751427
            },
            {
                "expenseCategory": "Utilities & Phone",
                "expenseDate": "2021-09-21",
                "expenseAmount": 95.58,
                "expenseNotes": "Mountain Communications",
                "expenseId": 1669514751428
            },
            {
                "expenseCategory": "Insurance",
                "expenseDate": "2021-08-26",
                "expenseAmount": 102.38,
                "expenseNotes": "Regressive",
                "expenseId": 1669514751429
            },
            {
                "expenseCategory": "Fuel",
                "expenseDate": "2021-08-12",
                "expenseAmount": 41.58,
                "expenseNotes": "Hwy 1 Gas Station",
                "expenseId": 1669514751430
            },
            {
                "expenseCategory": "Utilities & Phone",
                "expenseDate": "2021-08-21",
                "expenseAmount": 95.58,
                "expenseNotes": "Mountain Communications",
                "expenseId": 1669514751431
            },
            {
                "expenseCategory": "Insurance",
                "expenseDate": "2021-07-26",
                "expenseAmount": 102.38,
                "expenseNotes": "Regressive",
                "expenseId": 1669514751432
            },
            {
                "expenseCategory": "Fuel",
                "expenseDate": "2021-07-20",
                "expenseAmount": 11.58,
                "expenseNotes": "24/7 Pump-N-Go",
                "expenseId": 1669514751433
            },
            {
                "expenseCategory": "Advertising",
                "expenseDate": "2021-07-25",
                "expenseAmount": 73.01,
                "expenseNotes": "XP Printers",
                "expenseId": 1669514751434
            },
            {
                "expenseCategory": "Utilities & Phone",
                "expenseDate": "2021-07-21",
                "expenseAmount": 95.58,
                "expenseNotes": "Mountain Communications",
                "expenseId": 1669514751435
            },
            {
                "expenseCategory": "Fuel",
                "expenseDate": "2021-07-01",
                "expenseAmount": 31.58,
                "expenseNotes": "Hwy 1 Gas Station",
                "expenseId": 1669514751436
            },
            {
                "expenseCategory": "Insurance",
                "expenseDate": "2021-06-26",
                "expenseAmount": 102.38,
                "expenseNotes": "Regressive",
                "expenseId": 1669514751437
            },
            {
                "expenseCategory": "Utilities & Phone",
                "expenseDate": "2021-06-21",
                "expenseAmount": 95.58,
                "expenseNotes": "Mountain Communications",
                "expenseId": 1669514751438
            },
            {
                "expenseCategory": "Fuel",
                "expenseDate": "2021-06-20",
                "expenseAmount": 18.92,
                "expenseNotes": "24/7 Pump-N-Go",
                "expenseId": 1669514751439
            },
            {
                "expenseCategory": "Fuel",
                "expenseDate": "2021-06-10",
                "expenseAmount": 21.76,
                "expenseNotes": "Hwy 1 Gas Station",
                "expenseId": 1669514751440
            },
            {
                "expenseCategory": "Repairs",
                "expenseDate": "2021-08-04",
                "expenseAmount": 92.38,
                "expenseNotes": "Jimmies Industrial",
                "expenseId": 1669514751441
            },
            {
                "expenseCategory": "Repairs",
                "expenseDate": "2021-07-06",
                "expenseAmount": 135.58,
                "expenseNotes": "Highlands Hose Supply",
                "expenseId": 1669514751442
            }, {
                "expenseCategory": "Repairs",
                "expenseDate": "2021-08-09",
                "expenseAmount": 128.92,
                "expenseNotes": "Small Engine Supply",
                "expenseId": 1669514751443
            },
            {
                "expenseCategory": "Travel",
                "expenseDate": "2021-06-12",
                "expenseAmount": 702.38,
                "expenseNotes": "Beach Inn",
                "expenseId": 1669514751444
            }, {
                "expenseCategory": "Office Supplies",
                "expenseDate": "2021-08-21",
                "expenseAmount": 75.48,
                "expenseNotes": "",
                "expenseId": 1669514751445
            }, {
                "expenseCategory": "Training",
                "expenseDate": "2021-06-01",
                "expenseAmount": 28.92,
                "expenseNotes": "",
                "expenseId": 1669514751446
            }, {
                "expenseCategory": "Meals",
                "expenseDate": "2021-07-10",
                "expenseAmount": 21.76,
                "expenseNotes": "Golden Arches",
                "expenseId": 1669514751447
            }, {
                "expenseCategory": "Consultant",
                "expenseDate": "2021-08-04",
                "expenseAmount": 192.38,
                "expenseNotes": "A+ Knowledge",
                "expenseId": 1669514751448
            }, {
                "expenseCategory": "Uniforms",
                "expenseDate": "2021-07-06",
                "expenseAmount": 125.58,
                "expenseNotes": "",
                "expenseId": 1669514751449
            }, {
                "expenseCategory": "Legal",
                "expenseDate": "2021-08-09",
                "expenseAmount": 600.92,
                "expenseNotes": "",
                "expenseId": 1669514751450
            }
        ]
    },
    {
        // BBB [4] expense categories
        "categories": [{
                "category": "Supplies"
            },
            {
                "category": "Fuel"
            },
            {
                "category": "Insurance"
            },
            {
                "category": "Advertising"
            },
            {
                "category": "Utilities & Phone"
            },
            {
                "category": "Repairs"
            },
            {
                "category": "Travel"
            },
            {
                "category": "Office Supplies"
            },
            {
                "category": "Training"
            },
            {
                "category": "Meals"
            },
            {
                "category": "Consultant"
            },
            {
                "category": "Uniforms"
            },
            {
                "category": "Legal"
            }
        ]
    },
    {
        // BBB [5] company info
        "company": [{
                "companyName": "RC Exhaust",
                "address1": "PO Box 287",
                "address2": false,
                "city": "Bishop",
                "state": "CA",
                "zip": "93515",
                "phone": "760-447-0492",
                "email": "rc@rcexhaust.com"
            }
        ]
    }
]

// BBB Global Variables

let newInvoicePreview = false;
let alertVal = false;
let siteHash;

let n = false;
let customerName = false;
let customerId = false;
let address1 = false;
let address2 = false;
let city = false;
let state = false;
let zip = false;
let invoiceDate = false;
let invoiceNumber = false;
let invoiceItem1 = false;
let invoiceItem2 = false;
let invoiceItem3 = false;
let invoiceItem4 = false;
let invoiceItem5 = false;
let invoiceItem6 = false;
let invoiceAmount1 = false;
let invoiceAmount2 = false;
let invoiceAmount3 = false;
let invoiceAmount4 = false;
let invoiceAmount5 = false;
let invoiceAmount6 = false;
let invoicePayment = false;
let paymentDate = false;
let paymentMethod = false;
let paymentNotes = "";
let itemName = false;
let itemDescription = false;
let itemAmount = false;
let expenseCategory = false;
let expenseDate = false;
let expenseAmount = false;
let expenseNotes = false;

let companyName = db[5].company[0].companyName;
let companyAddress1 = db[5].company[0].address1;
let companyAddress2 = db[5].company[0].address2;
let companyCity = db[5].company[0].city;
let companyState = db[5].company[0].state;
let companyZip = db[5].company[0].zip;
let companyPhone = db[5].company[0].phone;
let companyEmail = db[5].company[0].email;

let invoicesTotalPaid = 0;
let invoicesTotalUnpaid = 0;

function resetDataVariables() {
    n = false;
    customerName = false;
    customerId = false;
    address1 = false;
    address2 = false;
    city = false;
    state = false;
    zip = false;
    invoiceDate = false;
    invoiceNumber = false;
    invoiceItem1 = false;
    invoiceItem2 = false;
    invoiceItem3 = false;
    invoiceItem4 = false;
    invoiceItem5 = false;
    invoiceItem6 = false;
    invoiceAmount1 = false;
    invoiceAmount2 = false;
    invoiceAmount3 = false;
    invoiceAmount4 = false;
    invoiceAmount5 = false;
    invoiceAmount6 = false;
    invoicePayment = false;
    paymentDate = false;
    paymentMethod = false;
    paymentNotes = "";
    itemName = false;
    itemDescription = false;
    itemAmount = false;
    expenseCategory = false;
    expenseDate = false;
    expenseAmount = false;
    expenseNotes = false;
}

function resetInvoiceVariables() {

invoiceDate = false;
invoiceNumber = false;
invoiceItem1 = false;
invoiceItem2 = false;
invoiceItem3 = false;
invoiceItem4 = false;
invoiceItem5 = false;
invoiceItem6 = false;
invoiceAmount1 = false;
invoiceAmount2 = false;
invoiceAmount3 = false;
invoiceAmount4 = false;
invoiceAmount5 = false;
invoiceAmount6 = false;
invoicePayment = false;
paymentDate = false;
paymentMethod = false;
paymentNotes = "";
itemName = false;
itemDescription = false;
itemAmount = false;
expenseCategory = false;
expenseDate = false;
expenseAmount = false;
expenseNotes = false;

}

// BBB Global Functions


function formatAddressLine(i, data) {
    let address1 = data[i].address1;
    let address2 = data[i].address2;
    let city = data[i].city;
    let state = data[i].state;
    let zip = data[i].zip;
    let address = "";

    if (address1 !== false) {
        address = `${address1},`;
    }

    if (address2 !== false) {
        address = `${address} ${address2},`;
    }

    if (city !== false) {
        address = `${address} ${city},`;
    }

    if (state !== false) {
        address = `${address} ${state}`;
    }

    if (zip !== false) {
        address = `${address} ${zip}`;
    }
    return address;
}

function formatDate(date) {
    return `${date.charAt(5)}${date.charAt(6)}/${date.charAt(8)}${date.charAt(9)}/${date.charAt(0)}${date.charAt(1)}${date.charAt(2)}${date.charAt(3)}`;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// BBB New Customer Modal

function newCustomer() {

    document.getElementById('modalPopUpBackground').style.display = 'flex';
    document.getElementById('modalPopUpCenterBox').style.display = 'block';
    document.getElementById('modalPopUpCenterBox').innerHTML =
        `<h4 class="modalPopUpH4">Add New Customer</h4>
            <label for="newCustomerName" class="label">Customer Name</label>
            <input type="text" id = "newCustomerName" name="newCustomerName" class="input" value="">

            <label for="newCustomerAddress1" class="label">Address Line 1</label> 
            <input type="text" id ="newCustomerAddress1" name = "newCustomerAddress1" class="input" value="">
            
            <label for="newCustomerAddress2" class="label">Address Line 2</label>
            <input type="text" id ="newCustomerAddress2" name="newCustomerAddress2" class="input" value="">

            <label for="newCustomerCity" class="label">City</label>
            <input type="text" id ="newCustomerCity" name="newCustomerCity" class="input" value="">

            <label for ="newCustomerState" class = "label">State</label>
            <select class = "input" id="newCustomerState">
                <option selected disabled hidden value="blank"></option> 
                <option value = "AL">Alabama</option> 
                <option value = "AK">Alaska</option> 
                <option value = "AZ">Arizona</option> 
                <option value = "AR">Arkansas</option> 
                <option value = "CA">California</option> 
                <option value = "CO">Colorado</option> 
                <option value = "CT">Connecticut</option> 
                <option value = "DE">Delaware</option> 
                <option value = "DC">District Of Columbia</option> 
                <option value = "FL">Florida</option> 
                <option value = "GA">Georgia</option>
                <option value = "HI">Hawaii</option> 
                <option value = "ID">Idaho</option>
                <option value = "IL">Illinois</option> 
                <option value = "IN">Indiana</option> 
                <option value = "IA">Iowa</option> 
                <option value = "KS">Kansas</option> 
                <option value = "KY">Kentucky</option> 
                <option value = "LA">Louisiana</option> 
                <option value = "ME">Maine</option>
                <option value = "MD">Maryland</option> 
                <option value = "MA">Massachusetts</option> 
                <option value = "MI">Michigan</option> 
                <option value = "MN">Minnesota</option>
                <option value = "MS">Mississippi</option> 
                <option value = "MO">Missouri</option> 
                <option value = "MT">Montana</option> 
                <option value = "NE">Nebraska</option> 
                <option value = "NV">Nevada</option> 
                <option value = "NH">New Hampshire</option> 
                <option value = "NJ">New Jersey</option> 
                <option value = "NM">New Mexico</option> 
                <option value = "NY">New York</option> 
                <option value = "NC">North Carolina</option> 
                <option value = "ND">North Dakota</option> 
                <option value = "OH">Ohio</option> 
                <option value = "OK">Oklahoma</option> 
                <option value = "OR">Oregon</option> 
                <option value = "PA">Pennsylvania</option> 
                <option value = "RI">Rhode Island</option> 
                <option value = "SC">South Carolina</option> 
                <option value = "SD">South Dakota</option> 
                <option value = "TN">Tennessee</option> 
                <option value = "TX">Texas</option> 
                <option value = "UT">Utah</option> 
                <option value = "VT">Vermont</option> 
                <option value = "VA">Virginia</option> 
                <option value = "WA">Washington</option>
                <option value = "WV">West Virginia</option> 
                <option value = "WI">Wisconsin</option> 
                <option value = "WY">Wyoming</option> 
            </select>

            <label for="newCustomerZip" class="label">Zip Code</label>
            <input type="number" rows = "1" cols = "12" id = "newCustomerZip" name = "newCustomerZip" class = "input" value = "">
            
            <div class = "modalFooterPopUp">
                <button class = "button modalFooterButton" id = "cancelButtonNewCustomer"  onclick = "cancelButtonNewCustomer()">Cancel</button>
                <button class = "button modalFooterButton" id = "saveButtonNewCustomer" onclick = "saveButtonNewCustomer()">Save</button>
            </div>`;
}

// BBB New Customer Buttons

function saveButtonNewCustomer() {

    if (document.getElementById('newCustomerName').value.replace(/\s/g, '') === "") {
        alert("Please enter a name for this customer before saving.");   
    } else {
        customerName = document.getElementById('newCustomerName').value;
    

    if (document.getElementById('newCustomerAddress1').value.replace(/\s/g, '') !== "") {
        address1 = document.getElementById('newCustomerAddress1').value;
    } else {
        address1 = false;
    }

    if (document.getElementById('newCustomerAddress2').value.replace(/\s/g, '') !== "") {
        address2 = document.getElementById('newCustomerAddress2').value;
    } else {
        address2 = false;
    }

    if (document.getElementById('newCustomerCity').value.replace(/\s/g, '') !== "") {
        city = document.getElementById('newCustomerCity').value;
    } else {
        city = false;
    }

    if (document.getElementById('newCustomerState').value.replace(/\s/g, '') !== "blank") {
        state = document.getElementById('newCustomerState').value;
    } else {
        state = false;
    }

    if (document.getElementById('newCustomerZip').value.replace(/\s/g, '') !== "") {
        zip = document.getElementById('newCustomerZip').value;
    } else {
        zip = false;
    }

    const d = new Date();
    customerId = d.getTime();

    let newData = {
        "customerId": customerId,
        "customerName": customerName,
        "address1": address1,
        "address2": address2,
        "city": city,
        "state": state,
        "zip": zip
    }

    db[1].customers.push(newData);
    document.getElementById('modalPopUpBackground').style.display = 'none';
    document.getElementById('modalPopUpCenterBox').style.display = 'none';
    document.getElementById('modalPopUpCenterBox').innerHTML = '';

    if (location.hash.charAt(1) !== "c") {
        buildCustomerSelect();
        drawInvoice();
    } else {
        buildCustomers()
    }
}
}

function cancelButtonNewCustomer() {
    document.getElementById('modalPopUpBackground').style.display = 'none';
    document.getElementById('modalPopUpCenterBox').style.display = 'none';
    document.getElementById('modalPopUpCenterBox').innerHTML = '';
}



// BBB Hash Change

window.addEventListener('load', function () {
    alert("Version 12.15");
    buildOverview()
    location.hash = "#overview";
    siteHash = "#overview";
})

/* window.addEventListener('resize', function () {
    location.reload()
}, true); */

window.addEventListener("hashchange", () => {
    let newPage = location.hash.substring(1);
    previewCheck(newPage);
}, false);

function previewCheck(page) {
    if (page.length < 12) {
        killPages();
        siteHash = location.hash;
        buildPage(page);
    } else {
        buildPreview();
    }
}

function buildPage(page) {
    if (page === "overview") {
        buildOverview();
    } else if (page === "invoices") {
        buildInvoices();
    } else if (page === "expenses") {
        buildExpenses();
    } else if (page === "customers") {
        buildCustomers();
    } else if (page === "settings") {
        buildSettings();
    }
}

function buildPreview() {
    let preview = location.hash.slice(0, 11);
    if (preview === "#previewInv") {
        invoiceNumber = location.hash.slice(11);
        buildInvoicePreview();
    }
}


function killPages() {
    document.getElementById('siteContentOverview').style.display = 'none';
    document.getElementById('navOverview').className = 'off';
    document.getElementById('siteContentInvoices').style.display = 'none';
    document.getElementById('navInvoices').className = 'off';
    document.getElementById('siteContentExpenses').style.display = 'none';
    document.getElementById('navExpenses').className = 'off';
    document.getElementById('siteContentCustomers').style.display = 'none';
    document.getElementById('navCustomers').className = 'off';
    document.getElementById('siteContentSettings').style.display = 'none';
    document.getElementById('navSettings').className = 'off';
    document.getElementById('previewInvoiceSlider').style.height = '0px';
    document.getElementById('previewInv').style.display = 'none';
    document.getElementById('modalBackground').style.display = 'none';
    document.getElementById('modalWrapperEdit').style.width = '0px';
    document.getElementById('invoiceEdit').style.display = 'none';
    document.getElementById('invoiceNew').style.display = 'none';

    document.getElementById('plusButton').style.display = 'none';
}



// BBB Overview Build Page

function buildOverview() {
    document.getElementById('siteH3').innerText = 'Overview';
    document.getElementById('navOverview').className = 'active'; // set navigation to light purple
    document.getElementById('siteContentOverview').style.display = 'flex'; // set the Overview div to show content;

    updateInvoiceTotals();
    let paid = invoicesTotalPaid;
    document.getElementById('overviewPaidTotal').innerText = `${paid.toFixed(2)}`;

    let unpaid = invoicesTotalUnpaid;
    document.getElementById('overviewUnpaidTotal').innerText = `${unpaid.toFixed(2)}`; //Invoice card total

    let expenses = expenseTotalFromDatabase();
    let profit = paid - expenses;

    if (paid > expenses) {
        document.getElementById('overviewBarPayments').style.height = '200px'; // Payments set to full height
        let expenseBar = expenses / (paid / 200) + "px"; // Math to determine what portion of 200px is proportional
        document.getElementById('overviewBarExpenses').style.height = expenseBar;
        let profitBar = profit / (paid / 200) + "px"; // Math to determine what portion of 200px is proportional
        document.getElementById('overviewBarProfit').style.height = profitBar;
    } else {
        document.getElementById('overviewBarExpenses').style.height = '200px';
        let paymentBar = paid / (expenses / 200) + "px";
        document.getElementById('overviewBarPayments').style.height = paymentBar;
        document.getElementById('overviewBarProfit').style.height = '0px'; // if expenses are higher than payments, profit bar set to 0px;
    }

    let increment = Math.floor((paid + unpaid) / 100);
    let paidPercent = Math.floor(paid / increment);
    let unpaidPercent = Math.floor(unpaid / increment);

    document.getElementById('invoiceBarPaid').style.width = `${paidPercent}%`;
    document.getElementById('invoiceBarUnpaid').style.width = `${unpaidPercent}%`;
    document.getElementById('overviewPayments').innerHTML = paid.toFixed(2);
    document.getElementById('overviewExpenses').innerHTML = expenses.toFixed(2);
    document.getElementById('overviewProfit').innerHTML = profit.toFixed(2);

    expensesCard(db[3].expenses); // adds data to Expense Card
    paymentRows();
}

// BBB Overview Invoice Totals

function invoiceTotalFromLocation(location) {

    let invoiceTotal = 0;

    let sum1 = db[0].invoices[location].invoiceAmount1;
    if (sum1 !== false) {
        sum1 = sum1 * 1;
        invoiceTotal += sum1;
    }

    let sum2 = db[0].invoices[location].invoiceAmount2;
    if (sum2 !== false) {
        sum2 = sum2 * 1;
        invoiceTotal += sum2;
    }

    let sum3 = db[0].invoices[location].invoiceAmount3;
    if (sum3 !== false) {
        sum3 = sum3 * 1;
        invoiceTotal += sum3;
    }

    let sum4 = db[0].invoices[location].invoiceAmount4;
    if (sum4 !== false) {
        sum4 = sum4 * 1;
        invoiceTotal += sum4;
    }

    let sum5 = db[0].invoices[location].invoiceAmount5;
    if (sum5 !== false) {
        sum5 = sum5 * 1;
        invoiceTotal += sum5;
    }

    let sum6 = db[0].invoices[location].invoiceAmount6;
    if (sum6 !== false) {
        sum6 = sum6 * 1;
        invoiceTotal += sum6;
    }

    return invoiceTotal;

}

function updateInvoiceTotals() { // checks invoice section of db for paid invoices and returns a total which is passed to invoicesPaidTotal above
    var counterPaid = 0;
    var counterUnpaid = 0; // counter is placeholder for the amount to be returned after loop finishes

    for (var i = 0; i < db[0].invoices.length; i++) {

        if (db[0].invoices[i].invoicePayment === true) { // loop checks each invoices for "true" and if so adds that invoice total to the counter

            let newPaid = invoiceTotalFromLocation(i);
            counterPaid += newPaid;
        } else {
             let newUnpaid = invoiceTotalFromLocation(i);
             counterUnpaid += newUnpaid;
        }
    }
    invoicesTotalPaid = counterPaid;
    invoicesTotalUnpaid = counterUnpaid;
}

// BBB Overview Expenses

function expenseTotalFromDatabase() { // Same as documented above but for "expenses"
    var counter = 0;
    for (var i = 0; i < db[3].expenses.length; i++) {
        let total = db[3].expenses[i].expenseAmount;
        total = total * 1;
        counter += total;
    }
    return counter;
}

function expensesCard(data) {

    function compareStrings(a, b) {
        return (a < b) ? -1 : (a > b) ? 1 : 0;
    }
    data.sort(function (a, b) {
        return compareStrings(a.expenseCategory, b.expenseCategory); // sorts expense data alphabetically by category 
    })

    let preCat = data[0].expenseCategory; // "Starts with 0, loop starts at 1"
    let total = data[0].expenseAmount * 1; // Amount at data.[0] is added to "total" which will be incremented in the loop and inserted each time category changes

    // First li drawn before loop.

    document.getElementById('overviewExpenseList').innerHTML = `
            <li><span class="overviewExpenseListBold" id="overview${preCat}"></span>
                                <br>
                                <span class="overviewExpenseListSmall">${preCat}</span>
                            </li>`
    counter = 0;

    for (var i = 1; i < data.length; i++) { // i starts at 1 so 'if' statement can compare category name to previous including the one above

        let cat = data[i].expenseCategory;
        let amount = data[i].expenseAmount * 1;

        if (cat === preCat) { // if same category as last, total is updated and loop repeats
            total = total + amount;
        }

        if (cat !== preCat) { // if new category, new li is drawn then ....

            document.getElementById('overviewExpenseList').innerHTML += `         
            <li><span class="overviewExpenseListBold" id="overview${cat}"></span>
                                <br>
                                <span class="overviewExpenseListSmall">${cat}</span>
                            </li>`

            document.getElementById(`overview${preCat}`).innerText = total.toFixed(2); // PREVIOUS total added to its span
            total = 0; // total is reset
            total = total + amount; // amount from CURRENT category is added to total
            preCat = cat;
            counter += 1;
            if (counter > 10) {
                document.getElementById('overviewExpenseList').style.columns = '3'; // extra columns for more than 10 li
            }
        }

        document.getElementById(`overview${cat}`).innerText = total.toFixed(2); // when loop finishes, last total is added to it's span
    }
}



function paymentRows() {

    let data = db[0].invoices;
    document.getElementById('tbodyPayments').innerHTML = "";

    function compareStrings(a, b) {
        return (a < b) ? -1 : (a > b) ? 1 : 0;
    }

    data.sort(function (a, b) {
        return compareStrings(b.paymentDate, a.paymentDate);
    })

    counter = 0;

    for (var i = 0; i < data.length; i++) {


        if (data[i].invoicePayment === true && counter < 19) { // Max of 20 rows

            let paymentTotal = invoiceTotalFromLocation(i);
            var row = `<tr>
							<td class = "tdPayDate">${formatDate(data[i].paymentDate)}</td>
							<td class = "tdPayName">${data[i].customerName}</td>
							<td class= "tdPayTotal">$ ${paymentTotal.toFixed(2)}</td>
					</tr>`;
            document.getElementById('tbodyPayments').innerHTML += row;
            counter += 1;
        }
    }
}

// BBB Invoices

function buildInvoices() {
    document.getElementById('siteH3').innerText = 'Invoices';
    document.getElementById('tbodyInvoicesPaid').innerHTML = "";
    document.getElementById('tbodyInvoicesUnpaid').innerHTML = "";
    document.getElementById('navInvoices').className = 'active';
    document.getElementById('siteContentInvoices').style.display = 'block'; // set the Invoices div to show content;
    buildRowInvoices();

    document.getElementById('plusButton').style.display = 'block';
    document.getElementById('plusButton').innerHTML = `
    <button class = "plusButton button" onclick = "newInvoice()">
        <span class = "iconPlusButton"></span>
        <span class = "buttonText">Invoice</span> 
    </button> `;

    updateInvoiceTotals();
    let paid = invoicesTotalPaid;
    let unpaid = invoicesTotalUnpaid;
    document.getElementById('totalSpanPaid').innerText = `$ ${paid.toFixed(2)}`; //Invoice card total
    document.getElementById('totalSpanUnpaid').innerText = `$ ${unpaid.toFixed(2)}`;
}

function buildRowInvoices() {

    let data = db[0].invoices;

    function compareStrings(a, b) {
        return (a < b) ? -1 : (a > b) ? 1 : 0;
    }

    data.sort(function (a, b) {
        return compareStrings(b.invoiceDate, a.invoiceDate);
    })

    data.sort(function (a, b) {
        if (a.date === b.date) {
            return compareStrings(b.invoiceNumber, a.invoiceNumber);
        }
    })

    for (var i = 0; i < data.length; i++) {

        let paymentStatus = data[i].invoicePayment;
        let invoiceTotal = invoiceTotalFromLocation(i);

        if (paymentStatus === true) {
            var row = `<tr>
							<td class = "tdOrder3">${formatDate(data[i].invoiceDate)}
                            <a href = "#previewInv${data[i].invoiceNumber}"
                            class = "rowLink" ></a></td >
							<td class = "tdOrder4">${data[i].invoiceNumber}</td>
							<td class= "tdOrder1">${data[i].customerName}</td>
                            <td class= "tdOrder5">Paid</td>
                            <td class= "tdOrder2">$ ${invoiceTotal.toFixed(2)}</td>
					</tr>`;
            document.getElementById('tbodyInvoicesPaid').innerHTML += row;
        } else {
            var row = `<tr>
							<td class = "tdOrder3">${formatDate(data[i].invoiceDate)}
                            <a href = "#previewInv${data[i].invoiceNumber}"
                            class = "rowLink" ></a></td >
							<td class = "tdOrder4">${data[i].invoiceNumber}</td>
							<td class= "tdOrder1">${data[i].customerName}</td>
                            <td class= "tdOrder5">Unpaid</td>
                            <td class= "tdOrder2">$ ${invoiceTotal.toFixed(2)}</td>
					</tr>`;
            document.getElementById('tbodyInvoicesUnpaid').innerHTML += row;
        }
    }
}

// BBB Invoice Preview 


function buildInvoicePreview() {
    document.getElementById('previewInvoiceSlider').style.height = '100%';
    var tablet = window.matchMedia("(max-width: 1024px)");
    if (tablet.matches) { // If media query matches
        document.getElementById('previewInv').style.display = 'flex';
    } else {
        document.getElementById('previewInv').style.display = 'grid';
    }
    setInvoiceVariables();
    drawInvoice();
}




function newInvoiceNumberDate() {
    let data = db[0].invoices;

    function compareStrings(a, b) {
        return (a < b) ? -1 : (a > b) ? 1 : 0;
    }
    data.sort(function (a, b) {
        return compareStrings(b.invoiceNumber, a.invoiceNumber);
    })
    let currentTopNumber = data[0].invoiceNumber;
    currentTopNumber = (currentTopNumber * 1) + 1;
    invoiceNumber = currentTopNumber;
    let currentDate = new Date().toJSON().slice(0, 10);
    invoiceDate = currentDate;
}

function setInvoiceVariables() {
    if (newInvoicePreview === true) {
        newInvoiceNumberDate();
    } else {

        for (var i = 0; i < db[0].invoices.length; i++) {
            invoiceNumber = invoiceNumber * 1;
            let tempNumber = db[0].invoices[i].invoiceNumber;
            if (tempNumber === invoiceNumber) {
                n = i;
            }
        }
        customerName = db[0].invoices[n].customerName;
        customerId = db[0].invoices[n].customerId;
        address1 = db[0].invoices[n].address1;
        address2 = db[0].invoices[n].address2;
        city = db[0].invoices[n].city;
        state = db[0].invoices[n].state;
        zip = db[0].invoices[n].zip;
        invoiceDate = db[0].invoices[n].invoiceDate;
        invoiceItem1 = db[0].invoices[n].invoiceItem1;
        invoiceItem2 = db[0].invoices[n].invoiceItem2;
        invoiceItem3 = db[0].invoices[n].invoiceItem3;
        invoiceItem4 = db[0].invoices[n].invoiceItem4;
        invoiceItem5 = db[0].invoices[n].invoiceItem5;
        invoiceItem6 = db[0].invoices[n].invoiceItem6;
        invoiceAmount1 = db[0].invoices[n].invoiceAmount1;
        invoiceAmount2 = db[0].invoices[n].invoiceAmount2;
        invoiceAmount3 = db[0].invoices[n].invoiceAmount3;
        invoiceAmount4 = db[0].invoices[n].invoiceAmount4;
        invoiceAmount5 = db[0].invoices[n].invoiceAmount5;
        invoiceAmount6 = db[0].invoices[n].invoiceAmount6;
        invoicePayment = db[0].invoices[n].invoicePayment;
        paymentDate = db[0].invoices[n].paymentDate;
        paymentMethod = db[0].invoices[n].paymentMethod;
        paymentNotes = db[0].invoices[n].paymentNotes;
   }
}

function formatAddressStacked() {

    let newAddress;
    if (address1 !== false) {
        newAddress = `${address1}<br>`;
    }
    if (address2 !== false) {
        newAddress = `${newAddress}${address2}<br>`;
    }
    if (city !== false) {
        newAddress = `${newAddress}${city}, `;
    }
    if (state !== false) {
        newAddress = `${newAddress}${state} `;
    }
    if (zip !== false) {
        newAddress = `${newAddress}${zip}`;
    }
    return newAddress;

}

function companyAddressStacked() {

    let newAddress;
    if (companyAddress1 !== false) {
        newAddress = `${companyAddress1}<br>`;
    }
    if (companyAddress2 !== false) {
        newAddress = `${newAddress}${companyAddress2}<br>`;
    }
    if (companyCity !== false) {
        newAddress = `${newAddress}${companyCity}, `;
    }
    if (companyState !== false) {
        newAddress = `${newAddress}${companyState} `;
    }
    if (companyZip !== false) {
        newAddress = `${newAddress}${companyZip}`;
    }
    return newAddress;

}


function drawInvoice() {

    document.getElementById('invoiceNum').innerText = invoiceNumber;
    document.getElementById('previewInvoiceH3').innerText = `Invoice No. ${invoiceNumber}`;
    document.getElementById('invoiceDate').innerText = `${formatDate(invoiceDate)}`;
    document.getElementById('invoiceEditDatepicker').value = invoiceDate;
    document.getElementById('invoiceSummaryDate').innerText = `${formatDate(invoiceDate)}`;
    document.getElementById('invoicePageWrapper').className = "invoicePageWrapper";



    if (address1 === false && address2 === false && city === false && state === false && zip === false) {
        document.getElementById('invoiceAddress').innerHTML = "";
    } else {
        let addressCustomer = formatAddressStacked()
        document.getElementById('invoiceAddress').innerHTML = addressCustomer;
    }
    if (customerName === false) {
        document.getElementById('invoiceName').innerText = "";
        document.getElementById('invoiceSummaryName').innerText = "";
    } else {
        document.getElementById('invoiceName').innerText = customerName;
        document.getElementById('invoiceSummaryName').innerText = customerName;
    }
    if (invoicePayment === true) {
        document.getElementById('invoiceSummaryStatus').innerText = 'Paid';
    } else {
        document.getElementById('invoiceSummaryStatus').innerText = 'Unpaid';
    }

    if (invoiceItem1 !== false) {
        document.getElementById('invoiceTableItem1').innerText = `${invoiceItem1}`;
        document.getElementById('invoiceEditItem1').value = `${invoiceItem1}`;
    } else {
        document.getElementById('invoiceTableItem1').innerText = "";
        document.getElementById('invoiceEditItem1').value = "";
    }

    if (invoiceAmount1 !== false) {
        invoiceAmount1 = invoiceAmount1 * 1;
        document.getElementById('invoiceTableAmount1').innerText = `${invoiceAmount1.toFixed(2)}`;
        document.getElementById('invoiceEditAmount1').value = invoiceAmount1.toFixed(2);
    } else {
        document.getElementById('invoiceTableAmount1').innerText = "";
        document.getElementById('invoiceEditAmount1').value = "";
    }

    if (invoiceItem2 !== false) {

        document.getElementById('invoiceTableItem2').innerText = `${invoiceItem2}`;
        document.getElementById('invoiceEditItem2').value = `${invoiceItem2}`;
    } else {
        document.getElementById('invoiceTableItem2').innerText = "";
        document.getElementById('invoiceEditItem2').value = "";
    }


    if (invoiceAmount2 !== false) {
        invoiceAmount2 = invoiceAmount2 * 1;
        document.getElementById('invoiceTableAmount2').innerText = `${invoiceAmount2.toFixed(2)}`;
        document.getElementById('invoiceEditAmount2').value = invoiceAmount2.toFixed(2);
    } else {
        document.getElementById('invoiceTableAmount2').innerText = "";
        document.getElementById('invoiceEditAmount2').value = "";
    }

    if (invoiceItem3 !== false) {
        document.getElementById('invoiceTableItem3').innerText = `${invoiceItem3}`;
        document.getElementById('invoiceEditItem3').value = `${invoiceItem3}`;
    } else {
        document.getElementById('invoiceTableItem3').innerText = "";
        document.getElementById('invoiceEditItem3').value = "";
    }

    if (invoiceAmount3 !== false) {
        invoiceAmount3 = invoiceAmount3 * 1;
        document.getElementById('invoiceTableAmount3').innerText = `${invoiceAmount3.toFixed(2)}`;
        document.getElementById('invoiceEditAmount3').value = invoiceAmount3.toFixed(2);
    } else {
        document.getElementById('invoiceTableAmount3').innerText = "";
        document.getElementById('invoiceEditAmount3').value = "";
    }

    if (invoiceItem4 !== false) {
        document.getElementById('invoiceTableItem4').innerText = `${invoiceItem4}`;
        document.getElementById('invoiceEditItem4').value = `${invoiceItem4}`;
    } else {
        document.getElementById('invoiceTableItem4').innerText = "";
        document.getElementById('invoiceEditItem4').value = "";
    }

    if (invoiceAmount4 !== false) {
        invoiceAmount4 = invoiceAmount4 * 1;
        document.getElementById('invoiceTableAmount4').innerText = `${invoiceAmount4.toFixed(2)}`;
        document.getElementById('invoiceEditAmount4').value = invoiceAmount4.toFixed(2);
    } else {
        document.getElementById('invoiceTableAmount4').innerText = "";
        document.getElementById('invoiceEditAmount4').value = "";
    }

    if (invoiceItem5 !== false) {
        document.getElementById('invoiceTableItem5').innerText = `${invoiceItem5}`;
        document.getElementById('invoiceEditItem5').value = `${invoiceItem5}`;
    } else {
        document.getElementById('invoiceTableItem5').innerText = "";
        document.getElementById('invoiceEditItem5').value = "";
    }

    if (invoiceAmount5 !== false) {
        invoiceAmount5 = invoiceAmount5 * 1;
        document.getElementById('invoiceTableAmount5').innerText = `${invoiceAmount5.toFixed(2)}`;
        document.getElementById('invoiceEditAmount5').value = invoiceAmount5.toFixed(2);
    } else {
        document.getElementById('invoiceTableAmount5').innerText = "";
        document.getElementById('invoiceEditAmount5').value = "";
    }

    if (invoiceItem6 !== false) {
        document.getElementById('invoiceTableItem6').innerText = `${invoiceItem6}`;
        document.getElementById('invoiceEditItem6').value = `${invoiceItem6}`;
    } else {
        document.getElementById('invoiceTableItem6').innerText = "";
        document.getElementById('invoiceEditItem6').value = "";
    }

    if (invoiceAmount6 !== false) {
        invoiceAmount6 = invoiceAmount6 * 1;
        document.getElementById('invoiceTableAmount6').innerText = `${invoiceAmount6.toFixed(2)}`;
        document.getElementById('invoiceEditAmount6').value = invoiceAmount6.toFixed(2);
    } else {
        document.getElementById('invoiceTableAmount6').innerText = "";
        document.getElementById('invoiceEditAmount6').value = "";
    }
    updateInvoiceTotal()
}

function invoiceTotalFromMemory() {
    let invoiceTotal = 0;
    if (invoiceAmount1 !== false) {
        invoiceTotal = invoiceTotal + (invoiceAmount1 * 1);
    }
    if (invoiceAmount2 !== false) {
        invoiceTotal = invoiceTotal + (invoiceAmount2 * 1);
    }
    if (invoiceAmount3 !== false) {
        invoiceTotal = invoiceTotal + (invoiceAmount3 * 1);
    }
    if (invoiceAmount4 !== false) {
        invoiceTotal = invoiceTotal + (invoiceAmount4 * 1);
    }
    if (invoiceAmount5 !== false) {
        invoiceTotal = invoiceTotal + (invoiceAmount5 * 1);
    }
    if (invoiceAmount6 !== false) {
        invoiceTotal = invoiceTotal + (invoiceAmount6 * 1);
    }
    return invoiceTotal;
}


function updateInvoiceTotal() {
    let invoiceTotal = invoiceTotalFromMemory();
    document.getElementById('invoiceTotal').innerText = `${invoiceTotal.toFixed(2)}`;
    document.getElementById('invoiceSummaryTotal').innerText = `$ ${invoiceTotal.toFixed(2)}`;
}

// BBB Invoice Preview Buttons

function killPreviewInvoice() {
    document.getElementById('previewInvoiceSlider').style.height = '0px';
    setTimeout(function () {
        document.getElementById('previewInv').style.display = 'none';
    }, 300);
    window.location.hash = siteHash;
    if (siteHash === "#customers") {
        setTimeout(() => {
            buildCustomerView(customerId);
        }, 300)
        
        resetInvoiceVariables();
    } else {
        resetDataVariables();
    }
    
}

function deleteInvoice() {

    for (var i = 0; i < db[0].invoices.length; i++) {
        
        invoiceNumber = invoiceNumber * 1;
        let tempNumber = db[0].invoices[i].invoiceNumber;
        tempNumber = tempNumber * 1;
        if (tempNumber === invoiceNumber) {
            n = i;
        }
}
if (confirm(`Permanently delete invoice number ${invoiceNumber}?`) === true) {
        db[0].invoices.splice(n, 1);
        killPreviewInvoice();
}
}


// BBB Invoice Edit

function buildInvoiceEdit() {
    var tablet = window.matchMedia("(max-width: 1024px)");
    if (tablet.matches) { // If media query matches
        document.getElementById('modalWrapperEdit').style.width = '1024px';
        setTimeout(function () {
            document.getElementById('invoiceEdit').style.display = 'block';
        }, 100);
    } else {
        document.getElementById('modalBackground').style.display = 'block';
        document.getElementById('modalWrapperEdit').style.width = '1024px';
        setTimeout(function () {
            document.getElementById('invoiceEdit').style.display = 'block';
        }, 100);
    }
    buildItemSelect();
    buildCustomerSelect();
    addEventListenerItemSelectorEdit();
    addEventListenerItemTextArea();
}

function buildItemSelect() {

    document.getElementById('invoiceEditItemSelect1').innerHTML = `<option selected disabled hidden value="blank"></option>
                                                                <option class="itemOption" value="new">  + -- Add New List Item -- +  </option>`;
    document.getElementById('invoiceEditItemSelect2').innerHTML = `<option selected disabled hidden  value="blank"></option>
                                                                <option class="itemOption" value="new">  + -- Add New List Item -- +  </option>`;
    document.getElementById('invoiceEditItemSelect3').innerHTML = `<option selected disabled hidden  value="blank"></option>
                                                                <option class="itemOption" value="new">  + -- Add New List Item -- +  </option>`;
    document.getElementById('invoiceEditItemSelect4').innerHTML = `<option selected disabled hidden  value="blank"></option>
                                                                <option class="itemOption" value="new">  + -- Add New List Item -- +  </option>`;
    document.getElementById('invoiceEditItemSelect5').innerHTML = `<option selected disabled hidden  value="blank"></option>
                                                                <option class="itemOption" value="new">  + -- Add New List Item -- +  </option>`;
    document.getElementById('invoiceEditItemSelect6').innerHTML = `<option selected disabled hidden  value="blank"></option>
                                                                <option class="itemOption" value="new">  + -- Add New List Item -- +  </option>`;

    data = db[2].listItems

    function compareStrings(a, b) {
        return (a < b) ? -1 : (a > b) ? 1 : 0;
    }
    data.sort(function (a, b) {
        return compareStrings(a.itemName, b.itemName);
    })

    for (var i = 0; i < data.length; i++) {

        let newOption = `<option class="itemOption" value="${i}">${data[i].itemName}</option>`;

        document.getElementById('invoiceEditItemSelect1').innerHTML += newOption;
        document.getElementById('invoiceEditItemSelect2').innerHTML += newOption;
        document.getElementById('invoiceEditItemSelect3').innerHTML += newOption;
        document.getElementById('invoiceEditItemSelect4').innerHTML += newOption;
        document.getElementById('invoiceEditItemSelect5').innerHTML += newOption;
        document.getElementById('invoiceEditItemSelect6').innerHTML += newOption;
    }
}

function buildCustomerSelect() {

    document.getElementById('invoiceEditCustomerSelect').innerHTML = "";

    let data = db[1].customers;

    function compareStrings(a, b) {
        return (a < b) ? -1 : (a > b) ? 1 : 0;
    }
    data.sort(function (a, b) {
        return compareStrings(a.customerName, b.customerName);
    })

    document.getElementById('invoiceEditCustomerSelect').innerHTML = `<option class = "invoiceItemOption" value = "new"> + --Add New Customer-- + </option>`;

    if (customerId === false) {
        document.getElementById('invoiceEditCustomerSelect').innerHTML += `<option selected disabled hidden>Choose Customer ... </option>`;
    }

    for (var i = 0; i < data.length; i++) {

        let newCustomerId = data[i].customerId;
        let newCustomerName = data[i].customerName;
        let newOption = `<option value ="${newCustomerId}">${newCustomerName}</option>`;
        let newOptionSelected = `<option value ="${newCustomerId}" selected>${newCustomerName}</option>`;

        if (customerId === newCustomerId) {
            document.getElementById('invoiceEditCustomerSelect').innerHTML += newOptionSelected;
        }
        if (customerId !== newCustomerId) {
            document.getElementById('invoiceEditCustomerSelect').innerHTML += newOption;
        }
    }
}

// BBB Get Customer Name

function getCustomerNameById(id) {
    for (var i = 0; i < db[1].customers.length; i++) {
        let currentId = db[1].customers[i].id;
        if (currentId === id) {
            return db[1].customers[i].name;
        }
    }
}

function getCustomerLocation() {
    let data = db[1].customers;
    customerId = customerId * 1;
    for (var i = 0; i < data.length; i++) {
        let currentId = data[i].customerId;
        if (currentId === customerId) {
            return i;
        }
    }
}

// BBB Invoice Edit Listeners

function addEventListenerItemSelectorEdit() {
    data = db[2].listItems

    let itemSelect1 = document.getElementById('invoiceEditItemSelect1');
    let itemSelect2 = document.getElementById('invoiceEditItemSelect2');
    let itemSelect3 = document.getElementById('invoiceEditItemSelect3');
    let itemSelect4 = document.getElementById('invoiceEditItemSelect4');
    let itemSelect5 = document.getElementById('invoiceEditItemSelect5');
    let itemSelect6 = document.getElementById('invoiceEditItemSelect6');
    let dateSelect = document.getElementById('invoiceEditDatepicker');
    let customerSelect = document.getElementById('invoiceEditCustomerSelect');


    itemSelect1.addEventListener('change', function () {
        let i = itemSelect1.value;
        if (i === "new") {
            AddItem(1)
        } else {
            document.getElementById('invoiceEditItem1').value = `${data[i].itemDescription}`;
            document.getElementById('invoiceEditAmount1').value = data[i].itemAmount.toFixed(2);
            document.getElementById('invoiceTableItem1').innerText = `${data[i].itemDescription}`;
            document.getElementById('invoiceTableAmount1').innerText = data[i].itemAmount.toFixed(2);
            invoiceItem1 = data[i].itemDescription;
            invoiceAmount1 = data[i].itemAmount;
            alertVal = true;
            updateInvoiceTotal();
        }
    })


    itemSelect2.addEventListener('change', function () {
        let i = itemSelect2.value;
        if (i === "new") {
            AddItem(2)
        } else {
            document.getElementById('invoiceEditItem2').value = `${data[i].itemDescription}`;
            document.getElementById('invoiceEditAmount2').value = data[i].itemAmount.toFixed(2);
            document.getElementById('invoiceTableItem2').innerText = `${data[i].itemDescription}`;
            document.getElementById('invoiceTableAmount2').innerText = data[i].itemAmount.toFixed(2);
            invoiceItem2 = data[i].itemDescription;
            invoiceAmount2 = data[i].itemAmount;
            alertVal = true;
            updateInvoiceTotal();
        }
    })

    itemSelect3.addEventListener('change', function () {
        let i = itemSelect3.value;
        if (i === "new") {
            AddItem(3)
        } else {
            document.getElementById('invoiceEditItem3').value = `${data[i].itemDescription}`;
            document.getElementById('invoiceEditAmount3').value = data[i].itemAmount.toFixed(2);
            document.getElementById('invoiceTableItem3').innerText = `${data[i].itemDescription}`;
            document.getElementById('invoiceTableAmount3').innerText = data[i].itemAmount.toFixed(2);
            invoiceItem3 = data[i].itemDescription;
            invoiceAmount3 = data[i].itemAmount;
            alertVal = true;
            updateInvoiceTotal();
        }
    })

    itemSelect4.addEventListener('change', function () {
        let i = itemSelect4.value;
        if (i === "new") {
            AddItem(4)
        } else {
            document.getElementById('invoiceEditItem4').value = `${data[i].itemDescription}`;
            document.getElementById('invoiceEditAmount4').value = data[i].itemAmount.toFixed(2);
            document.getElementById('invoiceTableItem4').innerText = `${data[i].itemDescription}`;
            document.getElementById('invoiceTableAmount4').innerText = data[i].itemAmount.toFixed(2);
            invoiceItem4 = data[i].itemDescription;
            invoiceAmount4 = data[i].itemAmount;
            alertVal = true;
            updateInvoiceTotal();
        }
    })

    itemSelect5.addEventListener('change', function () {
        let i = itemSelect5.value;
        if (i === "new") {
            AddItem(5)
        } else {
            document.getElementById('invoiceEditItem5').value = `${data[i].itemDescription}`;
            document.getElementById('invoiceEditAmount5').value = data[i].itemAmount.toFixed(2);
            document.getElementById('invoiceTableItem5').innerText = `${data[i].itemDescription}`;
            document.getElementById('invoiceTableAmount5').innerText = data[i].itemAmount.toFixed(2);
            invoiceItem5 = data[i].itemDescription;
            invoiceAmount5 = data[i].itemAmount;
            alertVal = true;
            updateInvoiceTotal();
        }
    })

    itemSelect6.addEventListener('change', function () {
        let i = itemSelect6.value;
        if (i === "new") {
            AddItem(6)
        } else {
            document.getElementById('invoiceEditItem6').value = `${data[i].itemDescription}`;
            document.getElementById('invoiceEditAmount6').value = data[i].itemAmount.toFixed(2);
            document.getElementById('invoiceTableItem6').innerText = `${data[i].itemDescription}`;
            document.getElementById('invoiceTableAmount6').innerText = data[i].itemAmount.toFixed(2);
            invoiceItem6 = data[i].itemDescription;
            invoiceAmount6 = data[i].itemAmount;
            alertVal = true;
            updateInvoiceTotal();
        }
    })

    dateSelect.addEventListener('change', (event) => {

        document.getElementById('invoiceDate').innerText = `${formatDate(event.target.value)}`;
        invoiceDate = event.target.value;
        alertVal = true;
    });

    customerSelect.addEventListener('change', (event) => {
        customerId = event.target.value;

        if (customerId === "new") {
            newCustomer()
        } else {
            let i = getCustomerLocation();
            customerName = db[1].customers[i].customerName;
            address1 = db[1].customers[i].address1;
            address2 = db[1].customers[i].address2;
            city = db[1].customers[i].city;
            state = db[1].customers[i].state;
            zip = db[1].customers[i].zip;

            let address = formatAddressStacked();

            document.getElementById('invoiceName').innerText = `${customerName}`;
            document.getElementById('invoiceAddress').innerHTML = address;
            alertVal = true;
        }
    });
}

function addEventListenerItemTextArea() {

    let item1 = document.getElementById('invoiceEditItem1');
    let item2 = document.getElementById('invoiceEditItem2');
    let item3 = document.getElementById('invoiceEditItem3');
    let item4 = document.getElementById('invoiceEditItem4');
    let item5 = document.getElementById('invoiceEditItem5');
    let item6 = document.getElementById('invoiceEditItem6');
    let amount1 = document.getElementById('invoiceEditAmount1');
    let amount2 = document.getElementById('invoiceEditAmount2');
    let amount3 = document.getElementById('invoiceEditAmount3');
    let amount4 = document.getElementById('invoiceEditAmount4');
    let amount5 = document.getElementById('invoiceEditAmount5');
    let amount6 = document.getElementById('invoiceEditAmount6');

    item1.addEventListener('input', function (event) {
        document.getElementById('invoiceTableItem1').innerText = event.target.value;
        if (event.target.value.replace(/\s/g, '') === "") {
            invoiceItem1 = false;
        } else {
            invoiceItem1 = event.target.value;
        }
        alertVal = true;
    });

    amount1.addEventListener('input', function (event) {
        document.getElementById('invoiceTableAmount1').innerText = event.target.value;
        if (event.target.value.replace(/\s/g, '') === "") {
            invoiceAmount1 = false;
        } else {
            invoiceAmount1 = event.target.value;
        }
        updateInvoiceTotal()
        alertVal = true;
    });

    item2.addEventListener('input', function (event) {
        document.getElementById('invoiceTableItem2').innerText = event.target.value;
        if (event.target.value.replace(/\s/g, '') === "") {
            invoiceItem2 = false;
        } else {
            invoiceItem2 = event.target.value;
        }
        alertVal = true;
    });

    amount2.addEventListener('input', function (event) {
        document.getElementById('invoiceTableAmount2').innerText = event.target.value;
        if (event.target.value.replace(/\s/g, '') === "") {
            invoiceAmount2 = false;
        } else {
            invoiceAmount2 = event.target.value;
        }
        updateInvoiceTotal()
        alertVal = true;
    });

    item3.addEventListener('input', function (event) {
        document.getElementById('invoiceTableItem3').innerText = event.target.value;
        if (event.target.value.replace(/\s/g, '') === "") {
            invoiceItem3 = false;
        } else {
            invoiceItem3 = event.target.value;
        }
        alertVal = true;
    });

    amount3.addEventListener('input', function (event) {
        document.getElementById('invoiceTableAmount3').innerText = event.target.value;
        if (event.target.value.replace(/\s/g, '') === "") {
            invoiceAmount3 = false;
        } else {
            invoiceAmount3 = event.target.value;
        }
        updateInvoiceTotal()
        alertVal = true;
    });

    item4.addEventListener('input', function (event) {
        document.getElementById('invoiceTableItem4').innerText = event.target.value;
        if (event.target.value.replace(/\s/g, '') === "") {
            invoiceItem4 = false;
        } else {
            invoiceItem4 = event.target.value;
        }
        alertVal = true;
    });

    amount4.addEventListener('input', function (event) {
        document.getElementById('invoiceTableAmount4').innerText = event.target.value;
        if (event.target.value.replace(/\s/g, '') === "") {
            invoiceAmount4 = false;
        } else {
            invoiceAmount4 = event.target.value;
        }
        updateInvoiceTotal()
        alertVal = true;
    });

    item5.addEventListener('input', function (event) {
        document.getElementById('invoiceTableItem5').innerText = event.target.value;
        if (event.target.value.replace(/\s/g, '') === "") {
            invoiceItem5 = false;
        } else {
            invoiceItem5 = event.target.value;
        }
        alertVal = true;
    });

    amount5.addEventListener('input', function (event) {
        document.getElementById('invoiceTableAmount5').innerText = event.target.value;
        if (event.target.value.replace(/\s/g, '') === "") {
            invoiceAmount5 = false;
        } else {
            invoiceAmount5 = event.target.value;
        }
        updateInvoiceTotal()
        alertVal = true;
    });

    item6.addEventListener('input', function (event) {
        document.getElementById('invoiceTableItem6').innerText = event.target.value;
        if (event.target.value.replace(/\s/g, '') === "") {
            invoiceItem6 = false;
        } else {
            invoiceItem6 = event.target.value;
        }
        alertVal = true;
    });

    amount6.addEventListener('input', function (event) {
        document.getElementById('invoiceTableAmount6').innerText = event.target.value;
        if (event.target.value.replace(/\s/g, '') === "") {
            invoiceAmount6 = false;
        } else {
            invoiceAmount6 = event.target.value;
        }
        updateInvoiceTotal()
        alertVal = true;
    });
}

// BBB Invoice Edit Buttons

function killInvoiceEdit() {
    document.getElementById('modalBackground').style.display = 'none';
    document.getElementById('modalWrapperEdit').style.width = '0px';
    setTimeout(function () {
        document.getElementById('invoiceEdit').style.display = 'none';
    }, 200);
}

function cancelButtonEditInvoice() {

    if (alertVal === false) {
        killInvoiceEdit();
        if (newInvoicePreview === true) {
            killPreviewInvoice()
        }
    } else {
        if (confirm("Leave without saving changes?") === true) {
            killInvoiceEdit();
            if (newInvoicePreview === true) {
                killPreviewInvoice()
            }
            alertVal = false;
        }
    }
}


function saveButtonEditInvoice() {

    if (customerName === false) {
        alert("Please select a customer before saving invoice.")
    } else if (invoiceTotalFromMemory() < 0.01) {
        alert("Please enter a dollar amount before saving invoice.")
    } else if (customerName !== false && invoiceTotalFromMemory() > 0 && location.hash.charAt(1) === "p") {

        db[0].invoices[n].customerName = customerName;
        db[0].invoices[n].customerId = customerId;
        db[0].invoices[n].address1 = address1;
        db[0].invoices[n].address2 = address2;
        db[0].invoices[n].city = city;
        db[0].invoices[n].state = state;
        db[0].invoices[n].zip = zip;
        db[0].invoices[n].invoiceDate = invoiceDate;
        db[0].invoices[n].invoiceNumber = invoiceNumber;
        db[0].invoices[n].invoiceItem1 = invoiceItem1;
        db[0].invoices[n].invoiceItem2 = invoiceItem2;
        db[0].invoices[n].invoiceItem3 = invoiceItem3;
        db[0].invoices[n].invoiceItem4 = invoiceItem4;
        db[0].invoices[n].invoiceItem5 = invoiceItem5;
        db[0].invoices[n].invoiceItem6 = invoiceItem6;
        db[0].invoices[n].invoiceAmount1 = invoiceAmount1;
        db[0].invoices[n].invoiceAmount2 = invoiceAmount2;
        db[0].invoices[n].invoiceAmount3 = invoiceAmount3;
        db[0].invoices[n].invoiceAmount4 = invoiceAmount4;
        db[0].invoices[n].invoiceAmount5 = invoiceAmount5;
        db[0].invoices[n].invoiceAmount6 = invoiceAmount6;
        db[0].invoices[n].invoicePayment = invoicePayment;
        db[0].invoices[n].paymentDate = paymentDate;
        db[0].invoices[n].paymentMethod = paymentMethod;
        db[0].invoices[n].paymentNotes = paymentNotes;
        killInvoiceEdit();
        drawInvoice();
        alertVal = false;
    } else if (customerName !== false && invoiceTotalFromMemory() > 0 && location.hash.charAt(1) === "n") {
        let newData = {
            "customerName": customerName,
            "customerId": customerId,
            "invoiceDate": invoiceDate,
            "invoiceNumber": invoiceNumber,
            "address1": address1,
            "address2": address2,
            "city": city,
            "state": state,
            "zip": zip,
            "invoicePayment": invoicePayment,
            "invoiceItem1": invoiceItem1,
            "invoiceItem2": invoiceItem2,
            "invoiceItem3": invoiceItem3,
            "invoiceItem4": invoiceItem4,
            "invoiceItem5": invoiceItem5,
            "invoiceItem6": invoiceItem6,
            "invoiceAmount1": invoiceAmount1,
            "invoiceAmount2": invoiceAmount2,
            "invoiceAmount3": invoiceAmount3,
            "invoiceAmount4": invoiceAmount4,
            "invoiceAmount5": invoiceAmount5,
            "invoiceAmount6": invoiceAmount6,
            "paymentDate": paymentDate,
            "paymentMethod": paymentMethod,
            "paymentNotes": paymentNotes
        }
        db[0].invoices.push(newData);
        killInvoiceEdit();
        alertVal = false;
        newInvoicePreview = false;
        window.location.hash = `#previewInv${invoiceNumber}`;
    }
}


function getCustomerIdByNumber(number) {

    let data = db[0].invoices;
    for (var i = 0; i < data.length; i++) {
        let currentNumber = data[i].number;
        if (currentNumber === number) {
            return data[i].customerId;
        }
    }
}

// BBB New Invoice 

function newInvoice() {
    document.getElementById('previewInvoiceSlider').style.height = '100%';
    var tablet = window.matchMedia("(max-width: 1024px)");
    if (tablet.matches) { // If media query matches
        document.getElementById('previewInv').style.display = 'flex';
    } else {
        document.getElementById('previewInv').style.display = 'grid';
    }
    if (location.hash.charAt(1) === "i") {
        resetDataVariables();
    }
    newInvoicePreview = true;
    buildInvoicePreview();
    buildInvoiceEdit();
    location.hash = `#newInvoice${invoiceNumber}`;
}


// BBB Invoice Add Item

function AddItem(numVal) {

    let i = numVal;
    document.getElementById('modalPopUpBackground').style.display = 'flex';
    document.getElementById('modalPopUpCenterBox').style.display = 'block';
    document.getElementById('modalPopUpCenterBox').innerHTML =
        `<h4 class="modalPopUpH4">Add New Item Template</h4>
            <label for="invoiceNewItemName" class="label">Item Name</label>
            <input type="text" id="invoiceNewItemName" name="invoiceNewItemName" class="input" value="">
            
            <label for="invoiceNewItemDescription" class="labelTextarea">Description</label>
            <textarea id="invoiceNewItemDescription" name="invoiceNewItemDescription" class="inputTextarea" maxlength="240" placeholder="Type item description here..." value=""></textarea>
            
            <label for="invoiceNewItemAmount" class="label">Amount</label>
            <input type="invoiceNumber" rows="1" cols="10" id="invoiceNewItemAmount" inputtype="decimal" name="invoiceNewItemAmount" class="inputSmall" value="">
            <div class = "modalFooterPopUp">
                <button class = "button modalFooterButton" id = "cancelButtonNewInvoiceAddItem"  onclick = "cancelButtonNewInvoiceAddItem()">Cancel</button>
                <button class = "button modalFooterButton" id = "saveButtonNewInvoiceAddItem" onclick = "saveButtonNewInvoiceAddItem(${i})">Save</button>
            </div>`
}

function saveButtonNewInvoiceAddItem(i) {
    let amountVal = document.getElementById('invoiceNewItemAmount').value;
    amountVal = amountVal * 1;
    let descVal = document.getElementById('invoiceNewItemDescription').value;
    let nameNew = document.getElementById('invoiceNewItemName').value;

    let newData = {
        "itemName": nameNew,
        "itemAmount": amountVal,
        "itemDescription": descVal
    }

    if (nameNew.replace(/\s/g, '') === "") {
        alert("Please enter a name for this item before saving.");
    } else if (nameNew.replace(/\s/g, '') !== "" && amountVal < 0.01) {
        alert("Please enter an amount before saving.")
    } else { 

        db[2].listItems.push(newData);

        if (location.hash.charAt(1) !== "i") {

        document.getElementById(`invoiceEditItem${i}`).value = descVal;
        document.getElementById(`invoiceEditAmount${i}`).value = amountVal.toFixed(2);
        document.getElementById(`invoiceTableItem${i}`).innerText = descVal;
        document.getElementById(`invoiceTableAmount${i}`).innerText = amountVal.toFixed(2);

        if (i === 1) {
            invoiceItem1 = descVal;
            invoiceAmount1 = amountVal;
        }
        
        if (i === 2) {
            invoiceItem2 = descVal;
            invoiceAmount2 = amountVal;
        }

        if (i === 3) {
            invoiceItem3 = descVal;
            invoiceAmount3 = amountVal;
        }

        if (i === 4) {
            invoiceItem4 = descVal;
            invoiceAmount4 = amountVal;
        }

        if (i === 5) {
            invoiceItem5 = descVal;
            invoiceAmount5 = amountVal;
        }

        if (i === 6) {
            invoiceItem6 = descVal;
            invoiceAmount6 = amountVal;
        }

        buildItemSelect()

        }

        document.getElementById('modalPopUpBackground').style.display = 'none';
        document.getElementById('modalPopUpCenterBox').style.display = 'none';
        document.getElementById('modalPopUpCenterBox').innerHTML = '';
        
    }

}

// BBB Add Customer

function drawModalNewInvoiceAddCustomer() {

    document.getElementById('modalPopUpBackground').style.display = 'flex';
    document.getElementById('modalPopUpCenterBox').style.display = 'block';
    document.getElementById('modalPopUpCenterBox').innerHTML =
        `<h4 class="modalPopUpH4">Add New Customer</h4>
            <label for="invoiceNewAddCustomerName" class="label">Customer Name</label>
            <input type="text" id = "invoiceNewAddCustomerName" name="invoiceNewCustomerName" class="input" value="">

            <label for="invoiceNewAddCustomerAddress1" class="label">Address Line 1</label> 
            <input type="text" id ="invoiceNewAddCustomerAddress1" name = "invoiceNewCustomerAddress1" class="input" value="">
            
            <label for="invoiceNewAddCustomerAddress2" class="label">Address Line 2</label>
            <input type="text" id ="invoiceNewAddCustomerAddress2" name="invoiceNewCustomerAddress2" class="input" value="">

            <label for="invoiceNewAddCustomerCity" class="label">City</label>
            <input type="text" id ="invoiceNewAddCustomerCity" name="invoiceNewCustomerCity" class="input" value="">

            <label for ="invoiceNewAddCustomerState" class = "label">State</label>
            <select class = "input" id="invoiceNewAddCustomerState">
                <option selected disabled hidden value="blank"></option> 
                <option value = "AL">Alabama</option> 
                <option value = "AK">Alaska</option> 
                <option value = "AZ">Arizona</option> 
                <option value = "AR">Arkansas</option> 
                <option value = "CA">California</option> 
                <option value = "CO">Colorado</option> 
                <option value = "CT">Connecticut</option> 
                <option value = "DE">Delaware</option> 
                <option value = "DC">District Of Columbia</option> 
                <option value = "FL">Florida</option> 
                <option value = "GA">Georgia</option>
                <option value = "HI">Hawaii</option> 
                <option value = "ID">Idaho</option>
                <option value = "IL">Illinois</option> 
                <option value = "IN">Indiana</option> 
                <option value = "IA">Iowa</option> 
                <option value = "KS">Kansas</option> 
                <option value = "KY">Kentucky</option> 
                <option value = "LA">Louisiana</option> 
                <option value = "ME">Maine</option>
                <option value = "MD">Maryland</option> 
                <option value = "MA">Massachusetts</option> 
                <option value = "MI">Michigan</option> 
                <option value = "MN">Minnesota</option>
                <option value = "MS">Mississippi</option> 
                <option value = "MO">Missouri</option> 
                <option value = "MT">Montana</option> 
                <option value = "NE">Nebraska</option> 
                <option value = "NV">Nevada</option> 
                <option value = "NH">New Hampshire</option> 
                <option value = "NJ">New Jersey</option> 
                <option value = "NM">New Mexico</option> 
                <option value = "NY">New York</option> 
                <option value = "NC">North Carolina</option> 
                <option value = "ND">North Dakota</option> 
                <option value = "OH">Ohio</option> 
                <option value = "OK">Oklahoma</option> 
                <option value = "OR">Oregon</option> 
                <option value = "PA">Pennsylvania</option> 
                <option value = "RI">Rhode Island</option> 
                <option value = "SC">South Carolina</option> 
                <option value = "SD">South Dakota</option> 
                <option value = "TN">Tennessee</option> 
                <option value = "TX">Texas</option> 
                <option value = "UT">Utah</option> 
                <option value = "VT">Vermont</option> 
                <option value = "VA">Virginia</option> 
                <option value = "WA">Washington</option>
                <option value = "WV">West Virginia</option> 
                <option value = "WI">Wisconsin</option> 
                <option value = "WY">Wyoming</option> 
            </select>

            <label for="invoiceNewAddCustomerZip" class="label">Zip Code</label>
            <input type="invoiceNumber" rows = "1" cols = "12" id = "invoiceNewAddCustomerZip" name = "invoiceNewCustomerZip" class = "input" value = "">
            
            <div class = "modalFooterPopUp">
                <button class = "button modalFooterButton" id = "cancelButtonNewInvoiceAddCustomer"  onclick = "cancelButtonAddCustomer()">Cancel</button>
                <button class = "button modalFooterButton" id = "saveButtonNewInvoiceAddCustomer" onclick = "saveButtonAddCustomer()">Save</button>
            </div>`;
}

// BBB Print Invoice

function printPDF() {
        // Choose the element that your content will be rendered to.
        const element = document.getElementById('invoicePageWrapper');

        // Choose the element and save the PDF for your user..
        document.getElementById('loadScreen').style.display = "flex";
        setTimeout(() => {
            element.className = "printInvoice";
            html2pdf().from(element).toPdf().get('pdf').then(function (pdf) {
                window.open(pdf.output('bloburl'), '_blank').then(element.className = "invoicePageWrapper");
            });
        }, 100)
        
        setTimeout(() => {
             document.getElementById('loadScreen').style.display = "none";
        }, 1000) 
}

function dlPDF() {
    var element = document.getElementById('invoicePageWrapper');

     document.getElementById('loadScreen').style.display = "flex";
     setTimeout(() => {
         element.className = "printInvoice";
     }, 50) 
     
     setTimeout(() => {
    html2pdf(element)
     }, 100)

     setTimeout(() => {
        element.className = "invoicePageWrapper";
         document.getElementById('loadScreen').style.display = "none";
     }, 1000)
}


// BBB Payment


function buildInvoicePayment() {
    let modal = document.getElementById('modalWrapperNewInvoiceItem');
    let total = invoiceTotalFromMemory();
    if (paymentDate === false) {
        paymentDate = new Date().toJSON().slice(0, 10);
    }
    document.getElementById('modalBackground').style.display = 'block';
    modal.style.display = "block";
    modal.style.width = "1024px";
    if (invoicePayment === false) {
        modal.innerHTML =
            `<h4 class="modalH4">Payment Record</h4>
        <span class = "modalSpan">Invoice No. ${invoiceNumber}</span>
        <span class = "modalSpan">$ ${total}</span>

        <div class="paymentRadioDiv">
        <input type = "radio" id = "paymentRadioFalse" name = "unpaid" value = "false" class = "paymentRadioLeft" checked>
        <label for = "unpaid">Unpaid</label> 
        <input type = "radio" id = "paymentRadioTrue" name = "paid" value = "true" class = "paymentRadioRight" onclick="markInvoicePaid()">
        <label for = "paid">Paid</label>
        </div>
        
        <div class = "modalFooter" >
            <button class = "button modalFooterButton" id = "cancelButtonInvoicePayment" onclick = "cancelButtonInvoicePayment()">Cancel</button> 
            <button class = "button modalFooterButton" id = "saveButtonInvoicePayment" onclick = "saveButtonInvoicePayment()">Save</button></div>`
    } else {
        modal.innerHTML =
            `<h4 class="modalH4">Payment Record</h4>
        <span class = "modalSpan">Invoice No. ${invoiceNumber}</span>
        <span class = "modalSpan">$ ${total}</span>

        <div class="paymentRadioDiv">
        <input type = "radio" id = "paymentRadioFalse" name = "unpaid" value = "false" class = "paymentRadioLeft" onclick="markInvoiceUnpaid()">
        <label for = "unpaid">Unpaid</label> 
        <input type = "radio" id = "paymentRadioTrue" name = "paid" value = "true" class = "paymentRadioRight" checked>
        <label for = "paid">Paid</label>
        </div>

        <label for="date" class="label">Date</label> 
        <input type="date" id="paymentDatepicker" name ="date" class="inputSmall" min="1997-01-01" max="2030-12-31" value ="${paymentDate}">

        <label for="paymentSelect" class="label">Payment Type</label>
            <select class = "input" id="paymentSelect" name="paymentSelect">
            </select>

            <label for = "paymentNotes" class = "labelTextarea">Notes</label>
            <textarea id = "paymentNotes" name = "paymentNotes" class = "inputTextarea" maxlength = "240" placeholder = "Notes...">${paymentNotes}</textarea>
            
            <div class = "modalFooter">
                <button class = "button modalFooterButton" id = "cancelButtonInvoicePayment"  onclick="cancelButtonInvoicePayment()">Cancel</button>
                <button class = "button modalFooterButton" id = "saveButtonInvoicePayment" onclick="saveButtonInvoicePayment()">Save</button>
            </div>`;

        let pSelect = document.getElementById('paymentSelect');
        if (paymentMethod === "Credit") {
            pSelect.innerHTML = `  
                <option value = "Credit" selected>Credit</option>   
                <option value = "Check">Check</option>   
                <option value = "Transfer">Transfer</option>   
                <option value = "Cash">Cash</option>`
        } else if (paymentMethod === "Check") {
            pSelect.innerHTML = `  
                <option value = "Credit">Credit</option>   
                <option value = "Check" selected >Check</option>   
                <option value = "Transfer">Transfer</option>   
                <option value = "Cash">Cash</option>`
        } else if (paymentMethod === "Transfer") {
            pSelect.innerHTML = `  
                <option value = "Credit">Credit</option>   
                <option value = "Check">Check</option>   
                <option value = "Transfer" selected>Transfer</option>   
                <option value = "Cash">Cash</option>`
        } else if (paymentMethod === "Cash") {
            pSelect.innerHTML = `  
                <option value="Credit">Credit</option>   
                <option value="Check">Check</option>   
                <option value="Transfer">Transfer</option>   
                <option value="Cash" selected>Cash</option>`
        } else {
            pSelect.innerHTML = `
                <option value = "false" selected hidden disabled> </option>   
                <option value = "Credit">Credit</option>   
                <option value = "Check">Check</option>   
                <option value = "Transfer">Transfer</option>   
                <option value = "Cash">Cash</option>`
        }
    }
}

function markInvoicePaid() {
    invoicePayment = true;
    buildInvoicePayment();
}

function markInvoiceUnpaid() {
    invoicePayment = false;
    buildInvoicePayment();
}

function saveButtonInvoicePayment() {

    if (invoicePayment === false) {
        db[0].invoices[n].invoicePayment = false;
        db[0].invoices[n].paymentDate = false;
        db[0].invoices[n].paymentMethod = false;
        db[0].invoices[n].paymentNotes = "";
    } else {
        db[0].invoices[n].invoicePayment = invoicePayment;
        db[0].invoices[n].paymentDate = document.getElementById('paymentDatepicker').value;
        db[0].invoices[n].paymentMethod = document.getElementById('paymentSelect').value;
        db[0].invoices[n].paymentNotes = document.getElementById('paymentNotes').value;
    }
    document.getElementById('modalBackground').style.display = 'none';
    let modal = document.getElementById('modalWrapperNewInvoiceItem');
    modal.style.width = "0px";
    modal.style.display = "none";
    modal.innerHTML = '';
    buildInvoicePreview();
}

function cancelButtonInvoicePayment() {

    if (invoicePayment !== db[0].invoices[n].invoicePayment) {
        if (confirm("Leave without saving changes?") === true) {
        document.getElementById('modalBackground').style.display = 'none';
        let modal = document.getElementById('modalWrapperNewInvoiceItem');
        modal.style.width = "0px";
        modal.style.display = "none";
        modal.innerHTML = '';
        invoicePayment = db[0].invoices[n].invoicePayment;
        }
    } else {
        document.getElementById('modalBackground').style.display = 'none';
        let modal = document.getElementById('modalWrapperNewInvoiceItem');
        modal.style.width = "0px";
        modal.style.display = "none";
        modal.innerHTML = '';
        invoicePayment = db[0].invoices[n].invoicePayment;
    }
}



// BBB Expenses

function buildExpenses() {
    document.getElementById('siteH3').innerText = 'Expenses';
    document.getElementById('plusButton').style.display = 'block';
    document.getElementById('plusButton').innerHTML = `
    <button class = "plusButton button" onclick = "buildExpenseEdit('new')">
        <span class = "iconPlusButton"></span>
        <span class = "buttonText">Expense</span> 
    </button>`
    document.getElementById('navExpenses').className = 'active';
    document.getElementById('siteContentExpenses').innerHTML = "";
    document.getElementById('siteContentExpenses').style.display = 'block';
    buildTableExpenses();
}

function getExpenseMonth(i, data) {
    let date = data[i].expenseDate;
    let monthNumber = date.charAt(5) + date.charAt(6);
    if (monthNumber === '01') {
        return "Jan"
    }
    if (monthNumber === '02') {
        return "Feb"
    }
    if (monthNumber === '03') {
        return "Mar"
    }
    if (monthNumber === '04') {
        return "Apr"
    }
    if (monthNumber === '05') {
        return "May"
    }
    if (monthNumber === '06') {
        return "June"
    }
    if (monthNumber === '07') {
        return "July"
    }
    if (monthNumber === '08') {
        return "Aug"
    }
    if (monthNumber === '09') {
        return "Sep"
    }
    if (monthNumber === '10') {
        return "Oct"
    }
    if (monthNumber === '11') {
        return "Nov"
    }
    if (monthNumber === '12') {
        return "Dec"
    }
}

function getExpenseYear(i, data) {
    let date = data[i].expenseDate;
    let year = date.charAt(0) + date.charAt(1) + date.charAt(2) + date.charAt(3);
    return year;
}


function buildTableExpenses() {

    let data = db[3].expenses;

    function compareStrings(a, b) {
        return (a < b) ? -1 : (a > b) ? 1 : 0;
    }

    data.sort(function (a, b) {
        return compareStrings(b.expenseDate, a.expenseDate);
    })

    data.sort(function (a, b) {
        if (a.expenseDate === b.expenseDate) {
            return compareStrings(b.expenseAmount, a.expenseAmount);
        }
    })

    let total = 0;
    let preMonth;
    let preYear;

    function buildTable(i, data) {
        preMonth = getExpenseMonth(i, data);
        preYear = getExpenseYear(i, data);
        let amount = data[i].expenseAmount * 1;
        expenseId = data[i].expenseId;

        let div =
            `<div class="contentDiv">
                <div class = "ribbon ribbonTop">
                    <span class ="expenseMonth">${preMonth}</span><span class="expenseYear"> ${preYear}</span><span class ="ribbonTotal" id ="eTotal${preMonth}${preYear}"></span>
                    </div>
                    <table id="tableExpenses${preMonth}${preYear}">
                    <tbody id="tbodyExpenses${preMonth}${preYear}" class="tbodyExpenses">
                        <tr id = "row${i}" class = "rowHover" onclick = "buildExpenseEdit(${expenseId})">
                            <td class="tdExpensesDate">${formatDate(data[i].expenseDate)}</td>
                            <td class="tdExpensesCategory">${data[i].expenseCategory}</td> 
                            <td class="tdExpensesNotes">${data[i].expenseNotes}</td> 
                            <td class="tdExpensesAmount">$ ${amount.toFixed(2)}</td> 
                        </tr>
                    </tbody></table>               
            </div>`;
        document.getElementById('siteContentExpenses').innerHTML += div;
        total += amount;
    }



    buildTable(0, data);

    document.getElementById(`tableExpenses${preMonth}${preYear}`).className = 'topTable';


    for (var i = 1; i < data.length; i++) { // i starts at 1 so 'if' statement can compare month name to previous including the one above

        let newYear = getExpenseYear(i, data);
        let newMonth = getExpenseMonth(i, data);
        let date = data[i].expenseDate;
        let cat = data[i].expenseCategory;
        let notes = data[i].expenseNotes;
        let amount = data[i].expenseAmount * 1;
        expenseId = data[i].expenseId;

        if (newMonth === preMonth && newYear === preYear) { // if same month as last, total is updated and loop repeats
            let row = `
                        <tr id = "row${i}" class = "rowHover" onclick = "buildExpenseEdit(${expenseId})">
                            <td class = "tdExpensesDate">${formatDate(date)}</td>
                            <td class = "tdExpensesCategory">${cat}</td>
                            <td class = "tdExpensesNotes">${notes}</td>
                            <td class = "tdExpensesAmount">$ ${amount.toFixed(2)}</td>
                        </tr>`
            document.getElementById(`tbodyExpenses${newMonth}${newYear}`).innerHTML += row;
            total += amount;
        }

        if (newMonth !== preMonth || newYear !== preYear) { // if new category, new li is drawn then ....

            document.getElementById(`eTotal${preMonth}${preYear}`).innerText = `$ ${total.toFixed(2)}`;
            buildTable(i, data);
            total = 0; // total is reset
            total = total + amount; // amount from CURRENT category is added to total
        }
        if (i % 2 !== 0) {
            document.getElementById(`row${i}`).className = 'lightgrey';
        }
    }
    document.getElementById(`eTotal${preMonth}${preYear}`).innerText = `$ ${total.toFixed(2)}`; // when loop finishes, last total is added to it's span
}


// BBB Expense Edit

function buildExpenseEdit(val) {
    let modal = document.getElementById('modalWrapperNewInvoiceItem');
    document.getElementById('modalBackground').style.display = 'block';
    modal.style.display = "block";
    modal.style.width = "1024px";
    expenseId = val;
    if (expenseId === 'new') {
        modal.innerHTML =
            `<h4 class="modalH4 modalH4Gap">New Expense</h4>

            <label for="expenseAmount" class="label">Amount</label>
            <input type="number" rows="1" cols="10" id="expenseAmount" inputtype="decimal" name="invoiceNewItemAmount" class="inputSmall" value="">

            <label for="date" class="label">Date</label> 
            <input type="date" id="expenseDatepicker" name ="date" class="inputSmall" min="1997-01-01" max="2030-12-31" value ="${new Date().toJSON().slice(0, 10)}">

            <label for="expenseSelect" class="label">Expense Category</label>
            <select class = "input" id="expenseSelect" name="paymentSelect">
            </select>

            <label for = "paymentNotes" class = "labelTextarea">Notes</label>
            <textarea id = "expenseNotes" name = "paymentNotes" class = "inputTextarea" maxlength = "240" placeholder = "Notes..."></textarea>
        
        <div class = "modalFooter" >
            <button class = "button modalFooterButton" id = "cancelButtonExpense" onclick = "cancelButtonExpense()">Cancel</button> 
            <button class = "button modalFooterButton" id = "saveButtonExpense" onclick = "saveButtonExpense()">Save</button></div>`
        buildExpenseSelect();

    } else {

                for (var i = 0; i < db[3].expenses.length; i++) {
                    let id = db[3].expenses[i].expenseId;
                    if (expenseId === id) {

             expenseCategory = db[3].expenses[i].expenseCategory;
             expenseDate = db[3].expenses[i].expenseDate;
             expenseAmount = db[3].expenses[i].expenseAmount * 1;
             expenseNotes = db[3].expenses[i].expenseNotes;

        modal.innerHTML =
            `<h4 class="modalH4 modalH4Gap">Edit Expense</h4>

            <label for="expenseAmount" class="label">Amount</label>
            <input type="number" rows="1" cols="10" id="expenseAmount" inputtype="decimal" name="invoiceNewItemAmount" class="inputSmall" value="${expenseAmount}">

            <label for="date" class="label">Date</label> 
            <input type="date" id="expenseDatepicker" name ="date" class="inputSmall" min="1997-01-01" max="2030-12-31" value ="${expenseDate}">

            <label for="expenseSelect" class="label">Expense Category</label>
            <select class = "input" id="expenseSelect" name="expenseSelect">
            </select>

            <label for = "paymentNotes" class = "labelTextarea">Notes</label>
            <textarea id = "expenseNotes" name = "paymentNotes" class = "inputTextarea" maxlength = "240" placeholder = "Notes..." value="">${expenseNotes}</textarea>
        
        <div class = "modalFooter" >
            <button class = "button modalFooterButton" id = "cancelButtonExpense" onclick = "cancelButtonExpense()">Cancel</button> 
            <button class = "button modalFooterButton" id = "saveButtonExpense" onclick = "saveButtonExpense()">Save</button></div>`
        buildExpenseSelect(); 
        }
        }
        
    }

}

function buildExpenseSelect() {

    document.getElementById('expenseSelect').innerHTML = "";

    let data = db[4].categories;

    function compareStrings(a, b) {
        return (a < b) ? -1 : (a > b) ? 1 : 0;
    }
    data.sort(function (a, b) {
        return compareStrings(a.expenseCategory, b.expenseCategory);
    })

    if (expenseCategory === false) {
        document.getElementById('expenseSelect').innerHTML = `<option selected disabled hidden value = "">Choose Category</option>`;
    }

    document.getElementById('expenseSelect').innerHTML += `<option class = "invoiceItemOption" value = "new"> + -- New Category -- + </option>`;

    for (var i = 0; i < data.length; i++) {

        let newCategory = data[i].category;
        let newOption = `<option value ="${newCategory}">${newCategory}</option>`;
        let optionSelected = `<option value ="${newCategory}" selected>${newCategory}</option>`;
        if (newCategory === expenseCategory) {
            document.getElementById('expenseSelect').innerHTML += optionSelected;
        } else {
            document.getElementById('expenseSelect').innerHTML += newOption;
        }

        let expenseSelect = document.getElementById('expenseSelect');
        expenseSelect.addEventListener('change', (event) => {
            i = event.target.value;

            if (i === "new") {
                drawExpensePopUp()
            }
        });
    }
}

function drawExpensePopUp() {
    document.getElementById('modalPopUpBackground').style.display = 'flex';
    document.getElementById('modalPopUpCenterBox').style.display = 'block';
    document.getElementById('modalPopUpCenterBox').innerHTML = `
    <h4 class="modalPopUpH4">New Expense Category</h4> 
    <input type="text" id ="newExpenseCategory" name = "invoiceNewCustomerAddress1" class="input inputCentered" value="">
    <div class = "modalFooterPopUp">
                <button class = "button modalFooterButton" id = "cancelButtonNewInvoiceAddCustomer"  onclick = "cancelNewExpenseCategory()">Cancel</button>
                <button class = "button modalFooterButton" id = "saveButtonNewInvoiceAddCustomer" onclick = "saveNewExpenseCategory()">Save</button>
            </div>`;
}

function saveNewExpenseCategory() {
    let newCategory = document.getElementById('newExpenseCategory').value;
    expenseCategory = newCategory;
    let newData = {
        "category": newCategory
    }

    db[4].categories.push(newData);
    document.getElementById('modalPopUpBackground').style.display = 'none';
    document.getElementById('modalPopUpCenterBox').style.display = 'none';
    document.getElementById('modalPopUpCenterBox').innerHTML = '';

    buildExpenseSelect()
}

function saveButtonExpense() {
    let modal = document.getElementById('modalWrapperNewInvoiceItem');
    let expenseCategory = document.getElementById('expenseSelect').value;
    let expenseDate = document.getElementById('expenseDatepicker').value;
    let expenseAmount = document.getElementById('expenseAmount').value;
    let expenseNotes = document.getElementById('expenseNotes').value;

    if (expenseId === "new") {
        if (expenseAmount < .01) {
            alert("Please enter an amount before saving.")
        } else if (expenseCategory === "") {
            alert("Please select a category before saving.")
        } else {

        const d = new Date();
        expenseId = d.getTime();
        let newData = {
            "expenseCategory": expenseCategory,
            "expenseDate": expenseDate,
            "expenseAmount": expenseAmount,
            "expenseNotes": expenseNotes,
            "expenseId": expenseId
        }
        db[3].expenses.push(newData);

        modal.style.width = "0px";
        modal.style.display = "none";
        modal.innerHTML = "";
        document.getElementById('modalBackground').style.display = 'none';
        resetDataVariables();
        buildExpenses();
    }
    } else {

        for (var i = 0; i < db[3].expenses.length; i++) {
            let id = db[3].expenses[i].expenseId;
            if (expenseId === id) {

                db[3].expenses[i].expenseCategory = expenseCategory;
                db[3].expenses[i].expenseDate = expenseDate;
                db[3].expenses[i].expenseAmount = expenseAmount;
                db[3].expenses[i].expenseNotes = expenseNotes;
    }   
    }
    modal.style.width = "0px";
    modal.style.display = "none";
    modal.innerHTML = "";
    document.getElementById('modalBackground').style.display = 'none';
    resetDataVariables();
    buildExpenses();
    }      
}

function cancelButtonExpense() {

    let modal = document.getElementById('modalWrapperNewInvoiceItem');
    modal.style.width = "0px";
    modal.style.display = "none";
    modal.innerHTML = "";
    document.getElementById('modalBackground').style.display = 'none';
}



// BBB Customers

function buildCustomers() {

    document.getElementById('siteH3').innerText = 'Customers';
    document.getElementById('plusButton').style.display = 'block';
    document.getElementById('plusButton').innerHTML = `
    <button class = "plusButton button" onclick = "newCustomer()">
        <span class = "iconPlusButton"></span>
        <span class = "buttonText">Customer</span> 
    </button>`

    document.getElementById('navCustomers').className = 'active';
    document.getElementById('siteContentCustomers').innerHTML = "";
    document.getElementById('siteContentCustomers').style.display = 'block';
    buildTableCustomers();
}

function customerBalance(cusId) {
    let data = db[0].invoices;
    let balance = 0;

    for (var i = 0; i < data.length; i++) {
        let newId = data[i].customerId;
        let total = 0;

        if (newId === cusId) {

        
            if (data[i].invoiceAmount1 !== false) {
            total = data[i].invoiceAmount1 * 1;
            }
            if (data[i].invoiceAmount2 !== false) {
            total += data[i].invoiceAmount2 * 1;
            }
            if (data[i].invoiceAmount3 !== false) {
            total += data[i].invoiceAmount3 * 1;
            }
            if (data[i].invoiceAmount4 !== false) {
            total += data[i].invoiceAmount4 * 1;
            }
            if (data[i].invoiceAmount5 !== false) {
            total += data[i].invoiceAmount5 * 1;
            }
            if (data[i].invoiceAmount6 !== false) {
            total += data[i].invoiceAmount6 * 1;
            }
            balance = balance + total;
        }       
        }
    
    if (balance > 0) {
        return '$ ' + balance.toFixed(2);
    } else {
        return '---'
    }
}

function getFirstLetter(i, data) {
    return data[i].customerName.charAt(0);
}


function buildTableCustomers() {

    let data = db[1].customers;

    function compareStrings(a, b) {
        return (a < b) ? -1 : (a > b) ? 1 : 0;
    }

    data.sort(function (a, b) {
        return compareStrings(a.customerName, b.customerName);
    })

    function buildTable(i, data) {
        let id = data[i].customerId;
        let name = data[i].customerName;
        let balance = customerBalance(id);
        let letter = getFirstLetter(i, data);
        let address = formatAddressLine(i, data);
        let div =
            `<div class="contentDiv">
                <div class = "ribbon ribbonTop">
                    <h4>${letter}</h4>
                </div>
                    <table class="tableCustomers" id="tableCustomers${letter}">
                    <tbody id="tbodyCustomers${letter}">
                    <tr id="row${letter}${i}" onclick = "buildCustomerView(${id})">
                        <td>${name}</td>
                        <td>${address}</td>
                        <td> ${balance}</td>
                    </tr>
                    </tbody>
                    </table>               
            </div>`;
        document.getElementById('siteContentCustomers').innerHTML += div;
        if (i % 2 !== 0) {
            document.getElementById(`row${letter}${i}`).className = 'lightgrey';
        }
    }
    buildTable(0, data);

    let preLetter = getFirstLetter(0, data);
    let preName = data[0].customerName;

    document.getElementById(`tableCustomers${preLetter}`).className = 'topTable';

    for (var i = 1; i < data.length; i++) { // i starts at 1 so 'if' statement can compare month name to previous including the one above

        let id = data[i].customerId;
        let newName = data[i].customerName;
        let balance = customerBalance(id);
        let newLetter = getFirstLetter(i, data);
        let address = formatAddressLine(i, data);
        if (newLetter === preLetter && newName !== preName) { // if same month as last, total is updated and loop repeats
            let row =
                `<tr id="row${newLetter}${i}" onclick = "buildCustomerView(${id})">
                            <td>${newName}</td>
                            <td>${address}</td>  
                            <td>${balance}</td> 
                        </tr>`
            document.getElementById(`tbodyCustomers${newLetter}`).innerHTML += row;
            if (i % 2 !== 0) {
                document.getElementById(`row${newLetter}${i}`).className = 'lightgrey';
            }
        }

        if (newLetter !== preLetter) { // if new category, new li is drawn then ....
            buildTable(i, data);
            preLetter = newLetter;
            preName = newName;
        }
    }
}



// BBB Customer View

function buildCustomerView(val) {
    let modal = document.getElementById('modalWrapperNewInvoiceItem');
    document.getElementById('modalBackground').style.display = 'block';
    modal.style.display = "block";
    setTimeout(() => {
        modal.style.width = "768px";
    }, 10)
    customerId = val;


    let address;
    for (var i = 0; i < db[1].customers.length; i++) {
        let currentId = db[1].customers[i].customerId;
        if (currentId === customerId) {
            customerName = db[1].customers[i].customerName;
            address1 = db[1].customers[i].address1;
            address2 = db[1].customers[i].address2;
            city = db[1].customers[i].city;
            state = db[1].customers[i].state;
            zip = db[1].customers[i].zip;
            address = formatAddressStacked()
            n = i;
        }
    }

        modal.innerHTML =
            `<div class = "customerViewTopDiv">
                <div class = "customerViewCardDiv">
                    <h4>${customerName}</h4>
                    <address>${address}</address>
                    <button class = "customerEditButton" id = "cancelButtonExpense" onclick = "editCustomer()">
                    <span class="material-symbols-outlined">edit</span></button>
                    
                </div>
                <span class = "customerTotalSpan" id="customerBalanceSpan"></span>
                <span class ="customerBalanceSpan">Balance</span>

                <button class = "plusButton button" onclick = "newInvoiceFromCustomer()">
                    <span class = "iconPlusButton"></span>
                    <span class = "buttonText">Invoice</span> 
                </button>
            </div>
            <div class = "customerViewInvoicesDiv">
            <table>
                <tbody id = "customerViewTable">
                    
                </tbody>
            </table>
            
            
            </div>
        
        <div class = "modalFooter" >
            <button class = "button modalFooterButton" id = "cancelButtonExpense" onclick = "closeButtonCustomer()">Close</button> 
        </div>`

        let balance = customerBalance(customerId);
        document.getElementById('customerBalanceSpan').innerText = `${balance}`;

        let data = db[0].invoices;

        function compareStrings(a, b) {
            return (a < b) ? -1 : (a > b) ? 1 : 0;
        }

        data.sort(function (a, b) {
            return compareStrings(b.invoiceDate, a.invoiceDate);
        })

        data.sort(function (a, b) {
            if (a.invoiceDate === b.invoiceDate) {
                return compareStrings(b.invoiceNumber, a.invoiceNumber);
            }
        })

            for (var i = 0; i < data.length; i++) {

                let newId = data[i].customerId;
                let invoiceTotal = invoiceTotalFromLocation(i);

                if (newId === customerId) {
                    var row = `<tr>
                            <td class = "tdOrder1"><strong>Invoice No. ${data[i].invoiceNumber}</strong></td>
							<td class = "tdOrder3">${formatDate(data[i].invoiceDate)}
                            <a href = "#previewInv${data[i].invoiceNumber}"
                            class = "rowLink" ></a></td >
                            <td class= "tdOrder5">Paid</td>
                            <td class= "tdOrder2">$ ${invoiceTotal.toFixed(2)}</td>
					</tr>`;
                    document.getElementById('customerViewTable').innerHTML += row;
                } 
            }
}

function closeButtonCustomer() {
    document.getElementById('modalBackground').style.display = 'none';
    let modal = document.getElementById('modalWrapperNewInvoiceItem');
    modal.style.width = "0px";
    setTimeout(() => {
        modal.style.display = "none";
    }, 220)
}

function editCustomer() {

    document.getElementById('modalPopUpBackground').style.display = 'flex';
    document.getElementById('modalPopUpCenterBox').style.display = 'block';
    document.getElementById('modalPopUpCenterBox').innerHTML =
        `<h4 class="modalPopUpH4">Edit Customer</h4>
            <label for="invoiceNewAddCustomerName" class="label">Customer Name</label>
            <input type="text" id = "editCustomerName" name="invoiceNewCustomerName" class="input" value="${customerName}">

            <label for="invoiceNewAddCustomerAddress1" class="label">Address Line 1</label> 
            <input type="text" id ="editCustomerAddress1" name = "invoiceNewCustomerAddress1" class="input" value="${address1}">
            
            <label for="invoiceNewAddCustomerAddress2" class="label">Address Line 2</label>
            <input type="text" id ="editCustomerAddress2" name="invoiceNewCustomerAddress2" class="input" value="${address2}">

            <label for="invoiceNewAddCustomerCity" class="label">City</label>
            <input type="text" id ="editCustomerCity" name="invoiceNewCustomerCity" class="input" value="${city}">

            <label for ="invoiceNewAddCustomerState" class = "label">State</label>
            <select class = "input" id="editCustomerState">
            </select>

            <label for="invoiceNewAddCustomerZip" class="label">Zip Code</label>
            <input type="invoiceNumber" rows = "1" cols = "12" id = "editCustomerZip" name = "invoiceNewCustomerZip" class = "input" value = "${zip}">
            
            <div class = "modalFooterPopUp">
                <button class = "button modalFooterButton" id = "cancelButtonCustomerEdit"  onclick = "cancelButtonAddCustomer()">Cancel</button>
                <button class = "button modalFooterButton" id = "saveButtonCustomerEdit" onclick = "saveButtonAddCustomer()">Save</button>
            </div>`;


            if (state === "AL") {
                          document.getElementById('editCustomerState').innerHTML += '<option value = "AL" selected>Alabama</option>';
            } else {
                document.getElementById('editCustomerState').innerHTML += '<option value = "AL">Alabama</option>';
            }
            
            if (state === "AK") {
                document.getElementById('editCustomerState').innerHTML += '<option value = "AK" selected>Alaska</option>'
            } else {
                document.getElementById('editCustomerState').innerHTML += '<option value = "AK">Alaska</option>'
            }

             if (state === "AZ") {
                 document.getElementById('editCustomerState').innerHTML += '<option value = "AZ" selected>Arizona</option>'
             } else {
                 document.getElementById('editCustomerState').innerHTML += '<option value = "AZ">Arizona</option>'
             }

             if (state === "CA") {
                 document.getElementById('editCustomerState').innerHTML += '<option value = "CA" selected>California</option>'
             } else {
                 document.getElementById('editCustomerState').innerHTML += '<option value = "CA">California</option>'
             }

             if (state === "CO") {
                 document.getElementById('editCustomerState').innerHTML += '<option value = "CO" selected>Colorado</option>'
             } else {
                 document.getElementById('editCustomerState').innerHTML += '<option value = "CO">Colorado</option>'
             }

             if (state === "CT") {
                 document.getElementById('editCustomerState').innerHTML += '<option value = "CT" selected>Connecticut</option>'
             } else {
                 document.getElementById('editCustomerState').innerHTML += '<option value = "CT">Connecticut</option>'
             }

             if (state === "DE") {
                 document.getElementById('editCustomerState').innerHTML += '<option value = "DE" selected>Delaware</option>'
             } else {
                 document.getElementById('editCustomerState').innerHTML += '<option value = "DE">Delaware</option>'
             }

              if (state === "DC") {
                  document.getElementById('editCustomerState').innerHTML += '<option value = "DC" selected>District Of Columbia</option>'
              } else {
                  document.getElementById('editCustomerState').innerHTML += '<option value = "DC">District Of Columbia</option>'
              }

              if (state === "FL") {
                  document.getElementById('editCustomerState').innerHTML += '<option value = "FL" selected>Florida</option>'
              } else {
                 document.getElementById('editCustomerState').innerHTML += '<option value = "FL">Florida</option>'
              }

              if (state === "GA") {
                  document.getElementById('editCustomerState').innerHTML += '<option value = "GA" selected>Georgia</option>'
              } else {
                  document.getElementById('editCustomerState').innerHTML += '<option value = "GA">Georgia</option>'
              }
            
              if (state === "HI") {
                  document.getElementById('editCustomerState').innerHTML += '<option value = "HI" selected>Hawaii</option>'
              } else {
                  document.getElementById('editCustomerState').innerHTML += '<option value = "HI">Hawaii</option>'
              }
        
                if (state === "ID") {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "ID" selected>Idaho</option>'
                } else {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "ID">Idaho</option>'
                }

                if (state === "IL") {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "IL" selected>Illinois</option>'
                } else {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "IL">Illinois</option>'
                }

                if (state === "IN") {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "IN" selected>Indiana</option>'
                } else {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "IN">Indiana</option>'
                }

                if (state === "IA") {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "IA" selected>Iowa</option>'
                } else {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "IA">Iowa</option>'
                }

                if (state === "KS") {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "KS" selected>Kansas</option>'
                } else {
                   document.getElementById('editCustomerState').innerHTML += '<option value = "KS">Kansas</option>'
                }

                if (state === "KY") {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "KY" selected>Kentucky</option>'
                } else {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "KY">Kentucky</option>'
                }
               
                if (state === "LA") {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "LA" selected>Louisiana</option>'
                } else {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "LA">Louisiana</option>'
                }

                if (state === "ME") {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "ME" selected>Maine</option>'
                } else {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "ME">Maine</option>'
                }

                if (state === "MD") {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "MD" selected>Maryland</option>'
                } else {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "MD">Maryland</option>'
                }

                if (state === "MA") {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "MA" selected>Massachusetts</option>'
                } else {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "MA">Massachusetts</option>'
                }
                
                if (state === "MI") {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "MI" selected>Michigan</option>'
                } else {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "MI">Michigan</option>'
                }

                if (state === "MN") {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "MN" selected>Minnesota</option>'
                } else {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "MN">Minnesota</option>'
                }

                if (state === "MS") {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "MS" selected>Mississippi</option>'
                } else {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "MS">Mississippi</option>'
                }

                if (state === "MO") {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "MO" selected>Missouri</option>'
                } else {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "MO">Missouri</option>'
                }
                
                if (state === "MT") {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "MT" selected>Montana</option>'
                } else {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "MT">Montana</option>'
                }
                
                if (state === "NE") {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "NE" selected>Nebraska</option>'
                } else {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "NE">Nebraska</option>'
                }

                if (state === "NV") {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "NV" selected>Nevada</option>'
                } else {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "NV">Nevada</option>'
                }

                if (state === "NH") {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "NH" selected>New Hampshire</option>'
                } else {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "NH">New Hampshire</option>'
                }
                
                if (state === "NJ") {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "NJ" selected>New Jersey</option>'
                } else {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "NJ">New Jersey</option>'
                }

                if (state === "NM") {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "NM" selected>New Mexico</option>'
                } else {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "NM">New Mexico</option>'
                }

                if (state === "NY") {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "NY" selected>New York</option>'
                } else {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "NY">New York</option>'
                }

                if (state === "NC") {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "NC" selected>North Carolina</option>'
                } else {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "NC">North Carolina</option>'
                }

                if (state === "ND") {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "ND" selected>North Dakota</option>'
                } else {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "ND">North Dakota</option>'
                }
                
                if (state === "OH") {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "OH" selected>Ohio</option>'
                } else {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "OH">Ohio</option>'
                }

                if (state === "OK") {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "OK" selected>Oklahoma</option>'
                } else {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "OK">Oklahoma</option>'
                }
                
                if (state === "OR") {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "OR" selected>Oregon</option>'
                } else {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "OR">Oregon</option>'
                }
                
                if (state === "PA") {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "PA" selected>Pennsylvania</option>'
                } else {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "PA">Pennsylvania</option>'
                }

                if (state === "RI") {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "RI" selected>Rhode Island</option>'
                } else {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "RI">Rhode Island</option>'
                }

                if (state === "SC") {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "SC" selected>South Carolina</option>'
                } else {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "SC">South Carolina</option>'
                }

                if (state === "SD") {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "SD" selected>South Dakota</option>'
                } else {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "SD">South Dakota</option>'
                }

                if (state === "TN") {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "TN" selected>Tennessee</option>'
                } else {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "TN">Tennessee</option>'
                }

                if (state === "TX") {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "TX" selected>Texas</option>'
                } else {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "TX">Texas</option>'
                }

                if (state === "UT") {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "UT" selected>Utah</option>'
                } else {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "UT">Utah</option>'
                }
                
                if (state === "VT") {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "VT" selected>Vermont</option>'
                } else {
                    document.getElementById('editCustomerState').innerHTML += '<option value = "VT">Vermont</option>'
                }
                
                 if (state === "VA") {
                     document.getElementById('editCustomerState').innerHTML += '<option value = "VA" selected>Virginia</option>'
                 } else {
                     document.getElementById('editCustomerState').innerHTML += '<option value = "VA">Virginia</option>'
                 }
                
                 if (state === "WA") {
                     document.getElementById('editCustomerState').innerHTML += '<option value = "WA" selected>Washington</option>'
                 } else {
                     document.getElementById('editCustomerState').innerHTML += '<option value = "WA">Washington</option>'
                 }
                
                 if (state === "WV") {
                     document.getElementById('editCustomerState').innerHTML += '<option value = "WV" selected>West Virginia</option>'
                 } else {
                     document.getElementById('editCustomerState').innerHTML += '<option value = "WV">West Virginia</option>'
                 }

                 if (state === "WI") {
                     document.getElementById('editCustomerState').innerHTML += '<option value = "WI" selected>Wisconsin</option>'
                 } else {
                     document.getElementById('editCustomerState').innerHTML += '<option value = "WI">Wisconsin</option>'
                 }
                
                 if (state === "WY") {
                     document.getElementById('editCustomerState').innerHTML += '<option value = "WY" selected>Wyoming</option>'
                 } else {
                     document.getElementById('editCustomerState').innerHTML += '<option value = "WY">Wyoming</option>'
                 }
}

function saveButtonAddCustomer() {

    if (document.getElementById('editCustomerName').value.replace(/\s/g, '') !== "") {
        customerName = document.getElementById('editCustomerName').value;
    } else {
        alert("Please enter a name for this customer before saving.");
    }

    if (document.getElementById('editCustomerAddress1').value.replace(/\s/g, '') !== "") {
        address1 = document.getElementById('editCustomerAddress1').value;
    } else {
        address1 = false;
    }

    if (document.getElementById('editCustomerAddress2').value.replace(/\s/g, '') !== "") {
        address2 = document.getElementById('editCustomerAddress2').value;
    } else {
        address2 = false;
    }

    if (document.getElementById('editCustomerCity').value.replace(/\s/g, '') !== "") {
        city = document.getElementById('editCustomerCity').value;
    } else {
        city = false;
    }

    if (document.getElementById('editCustomerState').value.replace(/\s/g, '') !== "blank") {
        state = document.getElementById('editCustomerState').value;
    } else {
        state = false;
    }

    if (document.getElementById('editCustomerZip').value.replace(/\s/g, '') !== "") {
        zip = document.getElementById('editCustomerZip').value;
    } else {
        zip = false;
    }

     for (var i = 0; i < db[1].customers.length; i++) {
         let currentId = db[1].customers[i].customerId;
         if (currentId === customerId) {
             db[1].customers[i].customerName = customerName;
             db[1].customers[i].address1 = address1;
             db[1].customers[i].address2 = address2;
             db[1].customers[i].city = city;
             db[1].customers[i].state = state;
             db[1].customers[i].zip = zip;
         }
     }

    document.getElementById('modalPopUpBackground').style.display = 'none';
    document.getElementById('modalPopUpCenterBox').style.display = 'none';
    document.getElementById('modalPopUpCenterBox').innerHTML = '';

    buildCustomers();
    buildCustomerView(customerId);
   
}

function newInvoiceFromCustomer() {
    let modal = document.getElementById('modalWrapperNewInvoiceItem');
    document.getElementById('modalBackground').style.display = 'none';
    modal.style.display = "none";
    modal.style.width = "0px";
    modal.innerHTML = "";
    newInvoice();
}

// BBB Settings

function buildSettings() {

    document.getElementById('siteH3').innerText = 'Settings';

    document.getElementById('navSettings').className = 'active';
    document.getElementById('siteContentSettings').style.display = 'block';
    document.getElementById('siteContentSettings').innerHTML = '';
            address = companyAddressStacked()
            if (companyPhone === false) {
                companyPhone = '';
            }
            if (companyEmail === false) {
                companyEmail = '';
            }
        
    document.getElementById('siteContentSettings').innerHTML = `
    <div class="settingsViewCardDiv">
                        <h4>Company Info</h4>
                        <p>${companyName}</p>
                        <address>${address}</address>
                        <p>Phone: ${companyPhone}<br>
                        Email: ${companyEmail} </p>
                        <button class="customerEditButton" id="cancelButtonExpense" onclick="editCompany()">
                            <span class="material-symbols-outlined">edit</span></button>
                    </div>

                    <div class="settingsViewCardDiv">
                        <h4>Logo</h4>
                        <div class="logoWidth">
                        <div class= "logoHeight">
                            <img src="https://rc-resume.neocities.org/companyLogo.png" alt="Company Logo"
                                class="logo">
                        </div>
                    </div>
                        <button button class = "customerEditButton" id = "cancelButtonExpense" onclick = "editCustomer()">
                            <span class="material-symbols-outlined">edit</span></button>
                    </div>
    `;
}

function editCompany() {

    document.getElementById('modalPopUpBackground').style.display = 'flex';
    document.getElementById('modalPopUpCenterBox').style.display = 'block';

    if (companyAddress2 === false) {
        companyAddress2 = "";
    }
    document.getElementById('modalPopUpCenterBox').innerHTML =
        `<h4 class="modalPopUpH4">Edit Customer</h4>
            <label for="editCompanyName" class="label">Customer Name</label>
            <input type="text" id = "editCompanyName" name="editCompanyName" class="input" value="${companyName}">

            <label for="editCompanyAddress1" class="label">Address Line 1</label> 
            <input type="text" id ="editCompanyAddress1" name = "editCompanyAddress1" class="input" value="${companyAddress1}">
            
            <label for="editCompanyAddress2" class="label">Address Line 2</label>
            <input type="text" id ="editCompanyAddress2" name="editCompanyAddress2" class="input" value="${companyAddress2}">

            <label for="editCompanyCity" class="label">City</label>
            <input type="text" id ="editCompanyCity" name="editCompanyCity" class="input" value="${companyCity}">

            <label for ="editCompanyState" class = "label">State</label>
            <select class = "input" id="editCompanyState">
            </select>

            <label for="editCompanyZip" class="label">Zip Code</label>
            <input type="number" rows = "1" cols = "12" id = "editCompanyZip" name = "editCompanyZip" class = "input" value = "${companyZip}">


            <label for="editCompanyPhone" class="label">Phone</label>
            <input type="tel" rows = "1" cols = "12" id = "editCompanyPhone" name = "editCompanyPhoone" class = "input" value = "${companyPhone}">

            <label for="editCompanyEmail" class="label">=Email</label>
            <input type="email" id ="editCompanyEmail" name="editCompanyEmail" class="input" value="${companyEmail}">
            
            <div class = "modalFooterPopUp">
                <button class = "button modalFooterButton" id = "cancelButtonCustomerEdit"  onclick = "cancelButtonCompany()">Cancel</button>
                <button class = "button modalFooterButton" id = "saveButtonCustomerEdit" onclick = "saveButtonCompany()">Save</button>
            </div>`;


    if (companyState === "AL") {
        document.getElementById('editCompanyState').innerHTML += '<option value = "AL" selected>Alabama</option>';
    } else {
        document.getElementById('editCompanyState').innerHTML += '<option value = "AL">Alabama</option>';
    }

    if (companyState === "AK") {
        document.getElementById('editCompanyState').innerHTML += '<option value = "AK" selected>Alaska</option>'
    } else {
        document.getElementById('editCompanyState').innerHTML += '<option value = "AK">Alaska</option>'
    }

    if (companyState === "AZ") {
        document.getElementById('editCompanyState').innerHTML += '<option value = "AZ" selected>Arizona</option>'
    } else {
        document.getElementById('editCompanyState').innerHTML += '<option value = "AZ">Arizona</option>'
    }

    if (companyState === "CA") {
        document.getElementById('editCompanyState').innerHTML += '<option value = "CA" selected>California</option>'
    } else {
        document.getElementById('editCompanyState').innerHTML += '<option value = "CA">California</option>'
    }

    if (companyState === "CO") {
        document.getElementById('editCompanyState').innerHTML += '<option value = "CO" selected>Colorado</option>'
    } else {
        document.getElementById('editCompanyState').innerHTML += '<option value = "CO">Colorado</option>'
    }

    if (companyState === "CT") {
        document.getElementById('editCompanyState').innerHTML += '<option value = "CT" selected>Connecticut</option>'
    } else {
        document.getElementById('editCompanyState').innerHTML += '<option value = "CT">Connecticut</option>'
    }

    if (companyState === "DE") {
        document.getElementById('editCompanyState').innerHTML += '<option value = "DE" selected>Delaware</option>'
    } else {
        document.getElementById('editCompanyState').innerHTML += '<option value = "DE">Delaware</option>'
    }

    if (companyState === "DC") {
        document.getElementById('editCompanyState').innerHTML += '<option value = "DC" selected>District Of Columbia</option>'
    } else {
        document.getElementById('editCompanyState').innerHTML += '<option value = "DC">District Of Columbia</option>'
    }

    if (companyState === "FL") {
        document.getElementById('editCompanyState').innerHTML += '<option value = "FL" selected>Florida</option>'
    } else {
        document.getElementById('editCompanyState').innerHTML += '<option value = "FL">Florida</option>'
    }

    if (companyState === "GA") {
        document.getElementById('editCompanyState').innerHTML += '<option value = "GA" selected>Georgia</option>'
    } else {
        document.getElementById('editCompanyState').innerHTML += '<option value = "GA">Georgia</option>'
    }

    if (companyState === "HI") {
        document.getElementById('editCompanyState').innerHTML += '<option value = "HI" selected>Hawaii</option>'
    } else {
        document.getElementById('editCompanyState').innerHTML += '<option value = "HI">Hawaii</option>'
    }

    if (companyState === "ID") {
        document.getElementById('editCompanyState').innerHTML += '<option value = "ID" selected>Idaho</option>'
    } else {
        document.getElementById('editCompanyState').innerHTML += '<option value = "ID">Idaho</option>'
    }

    if (companyState === "IL") {
        document.getElementById('editCompanyState').innerHTML += '<option value = "IL" selected>Illinois</option>'
    } else {
        document.getElementById('editCompanyState').innerHTML += '<option value = "IL">Illinois</option>'
    }

    if (companyState === "IN") {
        document.getElementById('editCompanyState').innerHTML += '<option value = "IN" selected>Indiana</option>'
    } else {
        document.getElementById('editCompanyState').innerHTML += '<option value = "IN">Indiana</option>'
    }

    if (companyState === "IA") {
        document.getElementById('editCompanyState').innerHTML += '<option value = "IA" selected>Iowa</option>'
    } else {
        document.getElementById('editCompanyState').innerHTML += '<option value = "IA">Iowa</option>'
    }

    if (companyState === "KS") {
        document.getElementById('editCompanyState').innerHTML += '<option value = "KS" selected>Kansas</option>'
    } else {
        document.getElementById('editCompanyState').innerHTML += '<option value = "KS">Kansas</option>'
    }

    if (companyState === "KY") {
        document.getElementById('editCompanyState').innerHTML += '<option value = "KY" selected>Kentucky</option>'
    } else {
        document.getElementById('editCompanyState').innerHTML += '<option value = "KY">Kentucky</option>'
    }

    if (companyState === "LA") {
        document.getElementById('editCompanyState').innerHTML += '<option value = "LA" selected>Louisiana</option>'
    } else {
        document.getElementById('editCompanyState').innerHTML += '<option value = "LA">Louisiana</option>'
    }

    if (companyState === "ME") {
        document.getElementById('editCompanyState').innerHTML += '<option value = "ME" selected>Maine</option>'
    } else {
        document.getElementById('editCompanyState').innerHTML += '<option value = "ME">Maine</option>'
    }

    if (companyState === "MD") {
        document.getElementById('editCompanyState').innerHTML += '<option value = "MD" selected>Maryland</option>'
    } else {
        document.getElementById('editCompanyState').innerHTML += '<option value = "MD">Maryland</option>'
    }

    if (companyState === "MA") {
        document.getElementById('editCompanyState').innerHTML += '<option value = "MA" selected>Massachusetts</option>'
    } else {
        document.getElementById('editCompanyState').innerHTML += '<option value = "MA">Massachusetts</option>'
    }

    if (companyState === "MI") {
        document.getElementById('editCompanyState').innerHTML += '<option value = "MI" selected>Michigan</option>'
    } else {
        document.getElementById('editCompanyState').innerHTML += '<option value = "MI">Michigan</option>'
    }

    if (companyState === "MN") {
        document.getElementById('editCompanyState').innerHTML += '<option value = "MN" selected>Minnesota</option>'
    } else {
        document.getElementById('editCompanyState').innerHTML += '<option value = "MN">Minnesota</option>'
    }

    if (companyState === "MS") {
        document.getElementById('editCompanyState').innerHTML += '<option value = "MS" selected>Mississippi</option>'
    } else {
        document.getElementById('editCompanyState').innerHTML += '<option value = "MS">Mississippi</option>'
    }

    if (companyState === "MO") {
        document.getElementById('editCompanyState').innerHTML += '<option value = "MO" selected>Missouri</option>'
    } else {
        document.getElementById('editCompanyState').innerHTML += '<option value = "MO">Missouri</option>'
    }

    if (companyState === "MT") {
        document.getElementById('editCompanyState').innerHTML += '<option value = "MT" selected>Montana</option>'
    } else {
        document.getElementById('editCompanyState').innerHTML += '<option value = "MT">Montana</option>'
    }

    if (companyState === "NE") {
        document.getElementById('editCompanyState').innerHTML += '<option value = "NE" selected>Nebraska</option>'
    } else {
        document.getElementById('editCompanyState').innerHTML += '<option value = "NE">Nebraska</option>'
    }

    if (companyState === "NV") {
        document.getElementById('editCompanyState').innerHTML += '<option value = "NV" selected>Nevada</option>'
    } else {
        document.getElementById('editCompanyState').innerHTML += '<option value = "NV">Nevada</option>'
    }

    if (companyState === "NH") {
        document.getElementById('editCompanyState').innerHTML += '<option value = "NH" selected>New Hampshire</option>'
    } else {
        document.getElementById('editCompanyState').innerHTML += '<option value = "NH">New Hampshire</option>'
    }

    if (companyState === "NJ") {
        document.getElementById('editCompanyState').innerHTML += '<option value = "NJ" selected>New Jersey</option>'
    } else {
        document.getElementById('editCompanyState').innerHTML += '<option value = "NJ">New Jersey</option>'
    }

    if (companyState === "NM") {
        document.getElementById('editCompanyState').innerHTML += '<option value = "NM" selected>New Mexico</option>'
    } else {
        document.getElementById('editCompanyState').innerHTML += '<option value = "NM">New Mexico</option>'
    }

    if (companyState === "NY") {
        document.getElementById('editCompanyState').innerHTML += '<option value = "NY" selected>New York</option>'
    } else {
        document.getElementById('editCompanyState').innerHTML += '<option value = "NY">New York</option>'
    }

    if (companyState === "NC") {
        document.getElementById('editCompanyState').innerHTML += '<option value = "NC" selected>North Carolina</option>'
    } else {
        document.getElementById('editCompanyState').innerHTML += '<option value = "NC">North Carolina</option>'
    }

    if (companyState === "ND") {
        document.getElementById('editCompanyState').innerHTML += '<option value = "ND" selected>North Dakota</option>'
    } else {
        document.getElementById('editCompanyState').innerHTML += '<option value = "ND">North Dakota</option>'
    }

    if (companyState === "OH") {
        document.getElementById('editCompanyState').innerHTML += '<option value = "OH" selected>Ohio</option>'
    } else {
        document.getElementById('editCompanyState').innerHTML += '<option value = "OH">Ohio</option>'
    }

    if (companyState === "OK") {
        document.getElementById('editCompanyState').innerHTML += '<option value = "OK" selected>Oklahoma</option>'
    } else {
        document.getElementById('editCompanyState').innerHTML += '<option value = "OK">Oklahoma</option>'
    }

    if (companyState === "OR") {
        document.getElementById('editCompanyState').innerHTML += '<option value = "OR" selected>Oregon</option>'
    } else {
        document.getElementById('editCompanyState').innerHTML += '<option value = "OR">Oregon</option>'
    }

    if (companyState === "PA") {
        document.getElementById('editCompanyState').innerHTML += '<option value = "PA" selected>Pennsylvania</option>'
    } else {
        document.getElementById('editCompanyState').innerHTML += '<option value = "PA">Pennsylvania</option>'
    }

    if (companyState === "RI") {
        document.getElementById('editCompanyState').innerHTML += '<option value = "RI" selected>Rhode Island</option>'
    } else {
        document.getElementById('editCompanyState').innerHTML += '<option value = "RI">Rhode Island</option>'
    }

    if (companyState === "SC") {
        document.getElementById('editCompanyState').innerHTML += '<option value = "SC" selected>South Carolina</option>'
    } else {
        document.getElementById('editCompanyState').innerHTML += '<option value = "SC">South Carolina</option>'
    }

    if (companyState === "SD") {
        document.getElementById('editCompanyState').innerHTML += '<option value = "SD" selected>South Dakota</option>'
    } else {
        document.getElementById('editCompanyState').innerHTML += '<option value = "SD">South Dakota</option>'
    }

    if (companyState === "TN") {
        document.getElementById('editCompanyState').innerHTML += '<option value = "TN" selected>Tennessee</option>'
    } else {
        document.getElementById('editCompanyState').innerHTML += '<option value = "TN">Tennessee</option>'
    }

    if (companyState === "TX") {
        document.getElementById('editCompanyState').innerHTML += '<option value = "TX" selected>Texas</option>'
    } else {
        document.getElementById('editCompanyState').innerHTML += '<option value = "TX">Texas</option>'
    }

    if (companyState === "UT") {
        document.getElementById('editCompanyState').innerHTML += '<option value = "UT" selected>Utah</option>'
    } else {
        document.getElementById('editCompanyState').innerHTML += '<option value = "UT">Utah</option>'
    }

    if (companyState === "VT") {
        document.getElementById('editCompanyState').innerHTML += '<option value = "VT" selected>Vermont</option>'
    } else {
        document.getElementById('editCompanyState').innerHTML += '<option value = "VT">Vermont</option>'
    }

    if (companyState === "VA") {
        document.getElementById('editCompanyState').innerHTML += '<option value = "VA" selected>Virginia</option>'
    } else {
        document.getElementById('editCompanyState').innerHTML += '<option value = "VA">Virginia</option>'
    }

    if (companyState === "WA") {
        document.getElementById('editCompanyState').innerHTML += '<option value = "WA" selected>Washington</option>'
    } else {
        document.getElementById('editCompanyState').innerHTML += '<option value = "WA">Washington</option>'
    }

    if (companyState === "WV") {
        document.getElementById('editCompanyState').innerHTML += '<option value = "WV" selected>West Virginia</option>'
    } else {
        document.getElementById('editCompanyState').innerHTML += '<option value = "WV">West Virginia</option>'
    }

    if (companyState === "WI") {
        document.getElementById('editCompanyState').innerHTML += '<option value = "WI" selected>Wisconsin</option>'
    } else {
        document.getElementById('editCompanyState').innerHTML += '<option value = "WI">Wisconsin</option>'
    }

    if (companyState === "WY") {
        document.getElementById('editCompanyState').innerHTML += '<option value = "WY" selected>Wyoming</option>'
    } else {
        document.getElementById('editCompanyState').innerHTML += '<option value = "WY">Wyoming</option>'
    }
}

function saveButtonCompany() {

    if (document.getElementById('editCompanyName').value.replace(/\s/g, '') !== "") {
        companyName = document.getElementById('editCompanyName').value;
    } else {
        alert("Please enter a new company name before saving.");
    }

    if (document.getElementById('editCompanyAddress1').value.replace(/\s/g, '') !== "") {
        companyAddress1 = document.getElementById('editCompanyAddress1').value;
    } else {
        alert("Please enter company address on line 1 before saving.");
    }

    if (document.getElementById('editCompanyAddress2').value.replace(/\s/g, '') !== "") {
        companyAddress2 = document.getElementById('editCompanyAddress2').value;
    } else {
        companyAddress2 = false;
    }

    if (document.getElementById('editCompanyCity').value.replace(/\s/g, '') !== "") {
        companyCity = document.getElementById('editCompanyCity').value;
    } else {
        alert("Please enter city before saving.");
    }

    if (document.getElementById('editCompanyState').value.replace(/\s/g, '') !== "blank") {
        state = document.getElementById('editCompanyState').value;
    } else {
        alert("Please enter state before saving.");
    }

    if (document.getElementById('editCompanyZip').value.replace(/\s/g, '') !== "") {
        companyZip = document.getElementById('editCompanyZip').value;
    } else {
        alert("Please enter zip code before saving.");
    }

    if (document.getElementById('editCompanyPhone').value.replace(/\s/g, '') !== "blank") {
        companyPhone = document.getElementById('editCompanyPhone').value;
    } else {
        companyPhone = false;
    }

    if (document.getElementById('editCompanyEmail').value.replace(/\s/g, '') !== "") {
        companyEmail = document.getElementById('editCompanyEmail').value;
    } else {
        companyEmail = false;
    }

    db[5].company[0].companyName = companyName;
    db[5].company[0].companyAddress1 = companyAddress1;
    db[5].company[0].companyAddress2 = companyAddress2;
    db[5].company[0].companyCity = companyCity;
    db[5].company[0].companyState = companyState;
    db[5].company[0].companyZip = companyZip;
    db[5].company[0].companyPhone = companyPhone;
    db[5].company[0].companyEmail = companyEmail;

    document.getElementById('modalPopUpBackground').style.display = 'none';
    document.getElementById('modalPopUpCenterBox').style.display = 'none';
    document.getElementById('modalPopUpCenterBox').innerHTML = '';

    buildSettings();
}

function cancelButtonCompany() {

    document.getElementById('modalPopUpBackground').style.display = 'none';
    document.getElementById('modalPopUpCenterBox').style.display = 'none';
    document.getElementById('modalPopUpCenterBox').innerHTML = '';
}




