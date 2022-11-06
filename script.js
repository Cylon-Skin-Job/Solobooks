let db = [{
        // [0] dbInvoices
        "invoices": [

            {
                "customerName": "Cafe Nervosa",
                "customerId": 1666430128801,
                "address1": "2115 E 3rd St.",
                "address2": false,
                "city": "Ocean City",
                "state": "NJ.",
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
                "state": "NJ.",
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
                "state": "MN.",
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
                "state": "CA.",
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
                "state": "NJ.",
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
                "state": "CA.",
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
                "state": "IN.",
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
                "state": "NY.",
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
                "state": "MN.",
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
                "state": "IL.",
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
                "state": "CA.",
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
                "state": "CA.",
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
                "state": "NY.",
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
                "state": "NM.",
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
                "state": "GA.",
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
                "state": "NJ.",
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
                "state": "CA.",
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
                "state": "NJ.",
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

    // [1] dbCustomers
    {
        "customers": [

            {
                "customerId": 1666430128801,
                "customerName": "Cafe Nervosa",
                "address1": "2115 E 3rd St.",
                "address2": false,
                "city": "Ocean City",
                "state": "NJ.",
                "zip": "17740"
            },
            {
                "customerId": 1666430128802,
                "customerName": "The Indigo Tea Shop",
                "address1": "1501 Riverwood Dr.",
                "address2": false,
                "city": "Burnsville",
                "state": "MN.",
                "zip": "55337"
            },
            {
                "customerId": 1666430128803,
                "customerName": "Pizza Planet",
                "address1": "745 Anchor Ave.",
                "address2": false,
                "city": "Orange Cove",
                "state": "CA.",
                "zip": "93646"
            },
            {
                "customerId": 1666430128804,
                "customerName": "Bob's Burgers",
                "address1": "115 W Ocean Dr.",
                "address2": false,
                "city": "Ocean City",
                "state": "NJ.",
                "zip": "17740"
            },
            {
                "customerId": 1666430128805,
                "customerName": "Arnold's Drive In",
                "address1": "488 W East St.",
                "address2": "Unit # 555",
                "city": "Riverside",
                "state": "CA.",
                "zip": "93723"
            },
            {
                "customerId": 1666430128806,
                "customerName": "Paunch Burger",
                "address1": "565 North Clinton Dr.",
                "address2": false,
                "city": "Pawnee",
                "state": "IN.",
                "zip": "56100"
            },
            {
                "customerId": 1666430128807,
                "customerName": "Central Perk",
                "address1": "565 5th Ave.",
                "address2": false,
                "city": "New York City",
                "state": "NY.",
                "zip": "10001"
            },
            {
                "customerId": 1666430128808,
                "customerName": "Cheer's",
                "address1": "1501 Riverwood Dr.",
                "address2": false,
                "city": "Burnsville",
                "state": "MN.",
                "zip": "55337"
            },
            {
                "customerId": 1666430128809,
                "customerName": "Joe's Bar",
                "address1": "940 W Weed St.",
                "address2": false,
                "city": "Chicago",
                "state": "IL.",
                "zip": "60642"
            },
            {
                "customerId": 1666430128810,
                "customerName": "Three Broomsticks",
                "address1": "100 Universal Plaza",
                "address2": false,
                "city": "Universal City",
                "state": "CA.",
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
                "state": "CA.",
                "zip": "92003"
            },
            {
                "customerId": 1666430128815,
                "customerName": "Monk's Cafe",
                "address1": "555 W. 122th St.",
                "address2": false,
                "city": "New York",
                "state": "NY.",
                "zip": "10001"
            },
            {
                "customerId": 1666430128816,
                "customerName": "Los Pollos Hermano's",
                "address1": "9358 Eagle Ranch Rd.",
                "address2": false,
                "city": "Albuqueqe",
                "state": "NM.",
                "zip": "87114"
            },
            {
                "customerId": 1666430128817,
                "customerName": "Whistle Stop Cafe",
                "address1": "443 Mc Cracken St.",
                "address2": false,
                "city": "Juliette",
                "state": "GA.",
                "zip": "31046"
            },
            {
                "customerId": 1666430128818,
                "customerName": "Vesuvio",
                "address1": "91 Elizabeth Ave.",
                "address2": false,
                "city": "Elizabeth",
                "state": "NJ.",
                "zip": "07206"
            },
            {
                "customerId": 1666430128819,
                "customerName": "The Pie Pole",
                "address1": "714 Traction Ave.",
                "address2": false,
                "city": "Los Angeles",
                "state": "CA.",
                "zip": "90013"
            },
            {
                "customerId": 1666430128820,
                "customerName": "Louie's Italian Restaurant",
                "address1": "115 W Ocean Dr.",
                "address2": false,
                "city": "Ocean City",
                "state": "NJ.",
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

        // [2] listItems
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
        // [3] expenses
        "expenses": [{
                "expenseCategory": "Supplies",
                "expenseDate": "2021-09-28",
                "expenseAmount": 69.58,
                "expenseNotes": "Acme Supply Shop"
            },
            {
                "expenseCategory": "Supplies",
                "expenseDate": "2021-09-02",
                "expenseAmount": 19.78,
                "expenseNotes": "Acme Supply Shop"
            },
            {
                "expenseCategory": "Supplies",
                "expenseDate": "2021-06-28",
                "expenseAmount": 189.34,
                "expenseNotes": "Acme Supply Shop"
            },
            {
                "expenseCategory": "Supplies",
                "expenseDate": "2021-07-22",
                "expenseAmount": 29.78,
                "expenseNotes": "Local Hardware"
            },
            {
                "expenseCategory": "Supplies",
                "expenseDate": "2021-08-03",
                "expenseAmount": 107.37,
                "expenseNotes": "Local Hardware"
            },
            {
                "expenseCategory": "Supplies",
                "expenseDate": "2021-06-20",
                "expenseAmount": 99.34,
                "expenseNotes": "bigriver.com"
            },
            {
                "expenseCategory": "Supplies",
                "expenseDate": "2021-08-19",
                "expenseAmount": 19.78,
                "expenseNotes": "bigriver.com"
            },
            {
                "expenseCategory": "Supplies",
                "expenseDate": "2021-06-13",
                "expenseAmount": 127.37,
                "expenseNotes": "bigriver.com"
            },
            {
                "expenseCategory": "Fuel",
                "expenseDate": "2021-09-27",
                "expenseAmount": 11.58,
                "expenseNotes": "24/7 Pump-N-Go"
            },
            {
                "expenseCategory": "Insurance",
                "expenseDate": "2021-09-26",
                "expenseAmount": 102.38,
                "expenseNotes": "Regressive"
            },
            {
                "expenseCategory": "Fuel",
                "expenseDate": "2021-09-15",
                "expenseAmount": 44.37,
                "expenseNotes": "Hwy 1 Gas Station"
            },
            {
                "expenseCategory": "Advertising",
                "expenseDate": "2021-09-26",
                "expenseAmount": 73.01,
                "expenseNotes": "XP Printers"
            },
            {
                "expenseCategory": "Utilities & Phone",
                "expenseDate": "2021-09-21",
                "expenseAmount": 95.58,
                "expenseNotes": "Mountain Communications"
            },
            {
                "expenseCategory": "Insurance",
                "expenseDate": "2021-08-26",
                "expenseAmount": 102.38,
                "expenseNotes": "Regressive"
            },
            {
                "expenseCategory": "Fuel",
                "expenseDate": "2021-08-12",
                "expenseAmount": 41.58,
                "expenseNotes": "Hwy 1 Gas Station"
            },
            {
                "expenseCategory": "Utilities & Phone",
                "expenseDate": "2021-08-21",
                "expenseAmount": 95.58,
                "expenseNotes": "Mountain Communications"
            },
            {
                "expenseCategory": "Insurance",
                "expenseDate": "2021-07-26",
                "expenseAmount": 102.38,
                "expenseNotes": "Regressive"
            },
            {
                "expenseCategory": "Fuel",
                "expenseDate": "2021-07-20",
                "expenseAmount": 11.58,
                "expenseNotes": "24/7 Pump-N-Go"
            },
            {
                "expenseCategory": "Advertising",
                "expenseDate": "2021-07-25",
                "expenseAmount": 73.01,
                "expenseNotes": "XP Printers"
            },
            {
                "expenseCategory": "Utilities & Phone",
                "expenseDate": "2021-07-21",
                "expenseAmount": 95.58,
                "expenseNotes": "Mountain Communications"
            },
            {
                "expenseCategory": "Fuel",
                "expenseDate": "2021-07-01",
                "expenseAmount": 31.58,
                "expenseNotes": "Hwy 1 Gas Station"
            },
            {
                "expenseCategory": "Insurance",
                "expenseDate": "2021-06-26",
                "expenseAmount": 102.38,
                "expenseNotes": "Regressive"
            },
            {
                "expenseCategory": "Utilities & Phone",
                "expenseDate": "2021-06-21",
                "expenseAmount": 95.58,
                "expenseNotes": "Mountain Communications"
            },
            {
                "expenseCategory": "Fuel",
                "expenseDate": "2021-06-20",
                "expenseAmount": 18.92,
                "expenseNotes": "24/7 Pump-N-Go"
            },
            {
                "expenseCategory": "Fuel",
                "expenseDate": "2021-06-10",
                "expenseAmount": 21.76,
                "expenseNotes": "Hwy 1 Gas Station"
            },
            {
                "expenseCategory": "Repairs",
                "expenseDate": "2021-08-04",
                "expenseAmount": 92.38,
                "expenseNotes": "Jimmies Industrial"
            },
            {
                "expenseCategory": "Repairs",
                "expenseDate": "2021-07-06",
                "expenseAmount": 135.58,
                "expenseNotes": "Highlands Hose Supply"
            }, {
                "expenseCategory": "Repairs",
                "expenseDate": "2021-08-09",
                "expenseAmount": 128.92,
                "expenseNotes": "Small Engine Supply"
            },
            {
                "expenseCategory": "Travel",
                "expenseDate": "2021-06-12",
                "expenseAmount": 702.38,
                "expenseNotes": "Beach Inn"
            }, {
                "expenseCategory": "Office Supplies",
                "expenseDate": "2021-08-21",
                "expenseAmount": 75.48,
                "expenseNotes": ""
            }, {
                "expenseCategory": "Training",
                "expenseDate": "2021-06-01",
                "expenseAmount": 28.92,
                "expenseNotes": ""
            }, {
                "expenseCategory": "Meals",
                "expenseDate": "2021-07-10",
                "expenseAmount": 21.76,
                "expenseNotes": "Golden Arches"
            }, {
                "expenseCategory": "Consultant",
                "expenseDate": "2021-08-04",
                "expenseAmount": 192.38,
                "expenseNotes": "A+ Knowledge"
            }, {
                "expenseCategory": "Uniforms",
                "expenseDate": "2021-07-06",
                "expenseAmount": 125.58,
                "expenseNotes": ""
            }, {
                "expenseCategory": "Legal",
                "expenseDate": "2021-08-09",
                "expenseAmount": 600.92,
                "expenseNotes": ""
            }
        ]
    },
    {
        // [4] expense categories
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
    }
]

//Global Variables

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
let paymentNotes = false;
let itemName = false;
let itemDescription = false;
let itemAmount = false;
let expenseCategory = false;
let expenseDate = false;
let expenseAmount = false;
let expenseNotes = false;

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
    paymentNotes = false;
    itemName = false;
    itemDescription = false;
    itemAmount = false;
    expenseCategory = false;
    expenseDate = false;
    expenseAmount = false;
    expenseNotes = false;
}




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










// Event Listener Hash Change

window.addEventListener('load', function () {
    alert("It's loaded!");
    buildOverview()
    location.hash = "#overview";
    siteHash = "#overview";
})

window.addEventListener('resize', function () {
    location.reload()
}, true);

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
    }
}

function buildPreview() {
    let preview = location.hash.slice(0, 11);
    if (preview === "#previewInv") {
        invoiceNumber = location.hash.slice(11);
        buildInvoicePreview();
    }
}

/* function getIdFromHash() {
    return location.hash.slice(11);
}

function removeIdFromHash() {
    return location.hash.slice(0, -14);
} */

function killPages() {
    document.getElementById('siteContentOverview').style.display = 'none';
    document.getElementById('navOverview').className = 'off';
    document.getElementById('siteContentInvoices').style.display = 'none';
    document.getElementById('navInvoices').className = 'off';
    document.getElementById('siteContentExpenses').style.display = 'none';
    document.getElementById('navExpenses').className = 'off';
    document.getElementById('siteContentCustomers').style.display = 'none';
    document.getElementById('navCustomers').className = 'off';
    document.getElementById('previewInvoiceSlider').style.height = '0px';
    document.getElementById('previewInv').style.display = 'none';
    document.getElementById('modalBackground').style.display = 'none';
    document.getElementById('modalWrapperEdit').style.width = '0px';
    document.getElementById('invoiceEdit').style.display = 'none';
    document.getElementById('invoiceNew').style.display = 'none';
}



// Overview Build Page

function buildOverview() {
    document.getElementById('siteH3').innerText = 'Overview';
    document.getElementById('navOverview').className = 'active'; // set navigation to light purple
    document.getElementById('siteContentOverview').style.display = 'flex'; // set the Overview div to show content;

    let paid = invoicesTotalPaid();
    document.getElementById('overviewPaidTotal').innerText = `${paid.toFixed(2)}`;

    let unpaid = invoicesTotalUnpaid();
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

// Overview Invoice Totals

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

function invoicesTotalPaid() { // checks invoice section of db for paid invoices and returns a total which is passed to invoicesPaidTotal above
    var counter = 0; // counter is placeholder for the amount to be returned after loop finishes

    for (var i = 0; i < db[0].invoices.length; i++) {

        if (db[0].invoices[i].invoicePayment === true) { // loop checks each invoices for "true" and if so adds that invoice total to the counter

            let newTotal = invoiceTotalFromLocation(i);
            counter += newTotal;
        }
    }
    return counter;
}

function invoicesTotalUnpaid() { // checks invoice section of db for paid invoices and returns a total which is passed to invoicesPaidTotal above
    var counter = 0; // counter is placeholder for the amount to be returned after loop finishes

    for (var i = 0; i < db[0].invoices.length; i++) {

        if (db[0].invoices[i].invoicePayment === false) { // loop checks each invoices for "true" and if so adds that invoice total to the counter

            let newTotal = invoiceTotalFromLocation(i);
            counter += newTotal;
        }
    }
    return counter;
}

// Overview Expenses

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
    let total = data[0].expenseAmount; // Amount at data.[0] is added to "total" which will be incremented in the loop and inserted each time category changes

    // First li drawn before loop.

    document.getElementById('overviewExpenseList').innerHTML = `
            <li><span class="overviewExpenseListBold" id="overview${preCat}"></span>
                                <br>
                                <span class="overviewExpenseListSmall">${preCat}</span>
                            </li>`
    counter = 0;

    for (var i = 1; i < data.length; i++) { // i starts at 1 so 'if' statement can compare category name to previous including the one above

        let cat = data[i].expenseCategory;
        let amount = data[i].expenseAmount;

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

// Invoices

function buildInvoices() {
    document.getElementById('siteH3').innerText = 'Invoices';
    document.getElementById('tbodyInvoicesPaid').innerHTML = "";
    document.getElementById('tbodyInvoicesUnpaid').innerHTML = "";
    document.getElementById('navInvoices').className = 'active';
    document.getElementById('siteContentInvoices').style.display = 'block'; // set the Invoices div to show content;
    buildRowInvoices();

    document.getElementById('plusButton').innerHTML = `
    <button class = "plusButton button" onclick = "newInvoice()">
        <span class = "iconPlusButton"></span>
        <span class = "buttonText" id = "plusButtonText">Invoice</span> 
    </button> `;

    let paid = invoicesTotalPaid();
    let unpaid = invoicesTotalUnpaid();
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
            return compareStrings(b.number, a.number);
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

// Invoice Preview 


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


function getInvoiceLocation() {
    let data = db[0].invoices;
    for (var i = 0; i < data.length; i++) {
        number = invoiceNumber * 1;
        let currentNumber = data[i].invoiceNumber;
        if (currentNumber === number) {
            return i;
        }
    }
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
    if (location.hash.charAt(1) !== "p") {
        newInvoiceNumberDate();
    } else {

        n = getInvoiceLocation();
        customerName = db[0].invoices[n].customerName;
        customerId = db[0].invoices[n].customerId;
        address1 = db[0].invoices[n].address1;
        address2 = db[0].invoices[n].address2;
        city = db[0].invoices[n].city;
        state = db[0].invoices[n].state;
        zip = db[0].invoices[n].zip;
        invoiceDate = db[0].invoices[n].invoiceDate;
        invoiceNumber = db[0].invoices[n].invoiceNumber;
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


function drawInvoice() {

    document.getElementById('invoiceNum').innerText = invoiceNumber;
    document.getElementById('previewInvoiceH3').innerText = `Invoice No. ${invoiceNumber}`;
    document.getElementById('invoiceDate').innerText = `${formatDate(invoiceDate)}`;
    document.getElementById('invoiceEditDatepicker').value = invoiceDate;
    document.getElementById('invoiceSummaryDate').innerText = `${formatDate(invoiceDate)}`;



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

// Invoice Preview Buttons

function killPreviewInvoice() {
    document.getElementById('previewInvoiceSlider').style.height = '0px';
    setTimeout(function () {
        document.getElementById('previewInv').style.display = 'none';
    }, 300);
    window.location.hash = siteHash;
    resetDataVariables();
}

// Invoice Edit

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

// Get Customer Name

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

// Invoice Edit Listeners

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
            AddItem()
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
            AddItem()
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
            AddItem()
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
            AddItem()
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
            AddItem()
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
            AddItem()
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
            drawModalNewInvoiceAddCustomer()
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

// Invoice Edit Buttons

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
    } else {
        if (confirm("Leave without saving changes?") == true) {
            killInvoiceEdit();
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
        drawInvoice();
        alertVal = false;
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

// New Invoice 

function newInvoice() {
    document.getElementById('previewInvoiceSlider').style.height = '100%';
    var tablet = window.matchMedia("(max-width: 1024px)");
    if (tablet.matches) { // If media query matches
        document.getElementById('previewInv').style.display = 'flex';
    } else {
        document.getElementById('previewInv').style.display = 'grid';
    }
    newInvoiceNumberDate();
    location.hash = `#newInvoice${invoiceNumber}`;
    buildInvoicePreview();
    buildInvoiceEdit();
}





function drawNewInvoice(number) {

    let currentDate = new Date().toJSON().slice(0, 10);

    document.getElementById('invoiceNum').innerText = `${number}`;
    document.getElementById('invoiceSummaryNumber').innerText = `Invoice No. ${invoiceNumber}`;

    document.getElementById('invoiceDate').innerText = `${formatDate(currentDate)}`;
    document.getElementById('invoiceSummaryDate').innerText = `${formatDate(currentDate)}`;
    document.getElementById('invoiceNewDatepicker').value = currentDate;
    document.getElementById('invoiceName').innerText = "";
    document.getElementById('invoiceAddress').innerHTML = "";

    document.getElementById('invoiceNewItem1').value = "";
    document.getElementById('invoiceNewAmount1').value = "";
    document.getElementById('invoiceTableItem1').innerText = "";
    document.getElementById('invoiceTableAmount1').innerText = "";


    document.getElementById('invoiceNewItem2').value = "";
    document.getElementById('invoiceNewAmount2').value = "";
    document.getElementById('invoiceTableItem2').innerText = "";
    document.getElementById('invoiceTableAmount2').innerText = "";

    document.getElementById('invoiceNewItem3').value = "";
    document.getElementById('invoiceNewAmount3').value = "";
    document.getElementById('invoiceTableItem3').innerText = "";
    document.getElementById('invoiceTableAmount3').innerText = "";

    document.getElementById('invoiceNewItem4').value = "";
    document.getElementById('invoiceNewAmount4').value = "";
    document.getElementById('invoiceTableItem4').innerText = "";
    document.getElementById('invoiceTableAmount4').innerText = "";


    document.getElementById('invoiceNewItem5').value = "";
    document.getElementById('invoiceNewAmount5').value = "";
    document.getElementById('invoiceTableItem5').innerText = "";
    document.getElementById('invoiceTableAmount5').innerText = "";

    document.getElementById('invoiceNewItem6').value = "";
    document.getElementById('invoiceNewAmount6').value = "";
    document.getElementById('invoiceTableItem6').innerText = "";
    document.getElementById('invoiceTableAmount6').innerText = "";

    calcInvoiceTotalNew();
}

function buildInvoiceNew() {
    window.location.hash = `#newInvoice${invoiceNumber}`;
    var tablet = window.matchMedia("(max-width: 1024px)");
    if (tablet.matches) { // If media query matches
        document.getElementById('modalWrapperEdit').style.width = '1024px';
        setTimeout(function () {
            document.getElementById('invoiceNew').style.display = 'block';
        }, 100);
    } else {
        document.getElementById('modalBackground').style.display = 'block';
        document.getElementById('modalWrapperEdit').style.width = '1024px';
        setTimeout(function () {
            document.getElementById('invoiceNew').style.display = 'block';
        }, 100);
    }
    buildItemSelectNew();
    buildCustomerSelectNew();
    addEventListenerItemSelectorNew(db[2].items);
    addEventListenerItemTextAreaNew();
}

function buildCustomerSelectNew() {


    let data = db[1].customers;

    function compareStrings(a, b) {
        return (a < b) ? -1 : (a > b) ? 1 : 0;
    }
    data.sort(function (a, b) {
        return compareStrings(a.name, b.name);
    })

    document.getElementById('invoiceNewCustomerSelect').innerHTML = `<option selected disabled hidden value="blank"></option>
                                                                <option class="invoiceItemOption" value="new">+ -- Add New Customer -- +</option>`;

    for (var i = 0; i < data.length; i++) {

        let newCusId = data[i].id;
        let newName = data[i].name;
        let newOption = `<option value = "${newCusId}">${newName}</option>`;

        document.getElementById('invoiceNewCustomerSelect').innerHTML += newOption;

    }
}

function buildItemSelectNew(data = db[2].items) {

    document.getElementById('invoiceNewItemSelect1').innerHTML = `<option selected disabled hidden value="blank"></option>
                                                                <option class="invoiceItemOption" value="new">  + -- Add New List Item -- +  </option>`;

    document.getElementById('invoiceNewItemSelect2').innerHTML = `<option selected disabled hidden  value="blank"></option>
                                                                <option class="invoiceItemOption" value="new">  + -- Add New List Item -- +  </option>`;

    document.getElementById('invoiceNewItemSelect3').innerHTML = `<option selected disabled hidden  value="blank"></option>
                                                                <option class="invoiceItemOption" value="new">  + -- Add New List Item -- +  </option>`;

    document.getElementById('invoiceNewItemSelect4').innerHTML = `<option selected disabled hidden  value="blank"></option>
                                                                <option class="invoiceItemOption" value="new">  + -- Add New List Item -- +  </option>`;

    document.getElementById('invoiceNewItemSelect5').innerHTML = `<option selected disabled hidden  value="blank"></option>
                                                                <option class="invoiceItemOption" value="new">  + -- Add New List Item -- +  </option>`;

    document.getElementById('invoiceNewItemSelect6').innerHTML = `<option selected disabled hidden  value="blank"></option>
                                                                <option class="invoiceItemOption" value="new">  + -- Add New List Item -- +  </option>`;

    function compareStrings(a, b) {
        return (a < b) ? -1 : (a > b) ? 1 : 0;
    }
    data.sort(function (a, b) {
        return compareStrings(a.name, b.name);
    })

    for (var i = 0; i < data.length; i++) {

        let newOption = `<option class="invoiceItemOption" value="${i}">${data[i].name}</option>`;

        document.getElementById('invoiceNewItemSelect1').innerHTML += newOption;
        document.getElementById('invoiceNewItemSelect2').innerHTML += newOption;
        document.getElementById('invoiceNewItemSelect3').innerHTML += newOption;
        document.getElementById('invoiceNewItemSelect4').innerHTML += newOption;
        document.getElementById('invoiceNewItemSelect5').innerHTML += newOption;
        document.getElementById('invoiceNewItemSelect6').innerHTML += newOption;
    }

}

// Add Item



function addEventListenerItemSelectorNew(data) {

    let itemSelect1 = document.getElementById('invoiceNewItemSelect1');
    let itemSelect2 = document.getElementById('invoiceNewItemSelect2');
    let itemSelect3 = document.getElementById('invoiceNewItemSelect3');
    let itemSelect4 = document.getElementById('invoiceNewItemSelect4');
    let itemSelect5 = document.getElementById('invoiceNewItemSelect5');
    let itemSelect6 = document.getElementById('invoiceNewItemSelect6');
    let dateSelect = document.getElementById('invoiceNewDatepicker');
    let customerSelect = document.getElementById('invoiceNewCustomerSelect');


    itemSelect1.addEventListener('change', function () {
        let i = itemSelect1.value;
        if (i === "new") {
            drawModalNewInvoiceAddItem(1)
        } else {
            document.getElementById('invoiceNewItem1').value = `${data[i].desc}`;
            document.getElementById('invoiceNewAmount1').value = data[i].amount.toFixed(2);
            document.getElementById('invoiceTableItem1').innerText = `${data[i].desc}`;
            document.getElementById('invoiceTableAmount1').innerText = data[i].amount.toFixed(2);
            alertVal = true;
            calcInvoiceTotalNew();
        }
    })


    itemSelect2.addEventListener('change', function () {
        let i = itemSelect2.value;
        if (i === "new") {
            drawModalNewInvoiceAddItem(2)
        } else {
            document.getElementById('invoiceNewItem2').value = `${data[i].desc}`;
            document.getElementById('invoiceNewAmount2').value = data[i].amount.toFixed(2);
            document.getElementById('invoiceTableItem2').innerText = `${data[i].desc}`;
            document.getElementById('invoiceTableAmount2').innerText = data[i].amount.toFixed(2);
            alertVal = true;
            calcInvoiceTotalNew();
        }
    })

    itemSelect3.addEventListener('change', function () {
        let i = itemSelect3.value;
        if (i === "new") {
            drawModalNewInvoiceAddItem(3)
        } else {
            document.getElementById('invoiceNewItem3').value = `${data[i].desc}`;
            document.getElementById('invoiceNewAmount3').value = data[i].amount.toFixed(2);
            document.getElementById('invoiceTableItem3').innerText = `${data[i].desc}`;
            document.getElementById('invoiceTableAmount3').innerText = data[i].amount.toFixed(2);
            alertVal = true;
            calcInvoiceTotalNew();
        }
    })

    itemSelect4.addEventListener('change', function () {
        let i = itemSelect4.value;
        if (i === "new") {
            drawModalNewInvoiceAddItem(4)
        } else {
            document.getElementById('invoiceNewItem4').value = `${data[i].desc}`;
            document.getElementById('invoiceNewAmount4').value = data[i].amount.toFixed(2);
            document.getElementById('invoiceTableItem4').innerText = `${data[i].desc}`;
            document.getElementById('invoiceTableAmount4').innerText = data[i].amount.toFixed(2);
            alertVal = true;
            calcInvoiceTotalNew();
        }
    })

    itemSelect5.addEventListener('change', function () {
        let i = itemSelect5.value;
        if (i === "new") {
            drawModalNewInvoiceAddItem(5)
        } else {
            document.getElementById('invoiceNewItem5').value = `${data[i].desc}`;
            document.getElementById('invoiceNewAmount5').value = data[i].amount.toFixed(2);
            document.getElementById('invoiceTableItem5').innerText = `${data[i].desc}`;
            document.getElementById('invoiceTableAmount5').innerText = data[i].amount.toFixed(2);
            alertVal = true;
            calcInvoiceTotalNew();
        }
    })

    itemSelect6.addEventListener('change', function () {
        let i = itemSelect6.value;
        if (i === "new") {
            drawModalNewInvoiceAddItem(6)
        } else {
            document.getElementById('invoiceNewItem6').value = `${data[i].desc}`;
            document.getElementById('invoiceNewAmount6').value = data[i].amount.toFixed(2);
            document.getElementById('invoiceTableItem6').innerText = `${data[i].desc}`;
            document.getElementById('invoiceTableAmount6').innerText = data[i].amount.toFixed(2);
            alertVal = true;
            calcInvoiceTotalNew();
        }
    })

    dateSelect.addEventListener('change', (event) => {

        document.getElementById('invoiceDate').innerText = `${formatDate(event.target.value)}`;
        alertVal = true;
    });

    customerSelect.addEventListener('change', (event) => {
        i = event.target.value;

        if (i === "new") {
            drawModalNewInvoiceAddCustomer()
        } else {
            let location = getCustomerLocationById(i);
            let name = getCustomerNameById(i);
            let address = formatAddressStacked(location, db[1].customers);
            document.getElementById('invoiceName').innerText = `${name}`;
            document.getElementById('invoiceAddress').innerHTML = address;
            alertVal = true;
            customerAlert = false;
        }
    });

}

function addEventListenerItemTextAreaNew() {

    let item1 = document.getElementById('invoiceNewItem1');
    let item2 = document.getElementById('invoiceNewItem2');
    let item3 = document.getElementById('invoiceNewItem3');
    let item4 = document.getElementById('invoiceNewItem4');
    let item5 = document.getElementById('invoiceNewItem5');
    let item6 = document.getElementById('invoiceNewItem6');
    let amount1 = document.getElementById('invoiceNewAmount1');
    let amount2 = document.getElementById('invoiceNewAmount2');
    let amount3 = document.getElementById('invoiceNewAmount3');
    let amount4 = document.getElementById('invoiceNewAmount4');
    let amount5 = document.getElementById('invoiceNewAmount5');
    let amount6 = document.getElementById('invoiceNewAmount6');

    item1.addEventListener('input', function (event) {
        document.getElementById('invoiceTableItem1').innerText = event.target.value;;
        alertVal = true;
    });

    amount1.addEventListener('input', function (event) {
        document.getElementById('invoiceTableAmount1').innerText = event.target.value;;
        calcInvoiceTotalNew()
        alertVal = true;
    });

    item2.addEventListener('input', function (event) {
        document.getElementById('invoiceTableItem2').innerText = event.target.value;;
        alertVal = true;
    });

    amount2.addEventListener('input', function (event) {
        document.getElementById('invoiceTableAmount2').innerText = event.target.value;;
        calcInvoiceTotalNew()
        alertVal = true;
    });

    item3.addEventListener('input', function (event) {
        document.getElementById('invoiceTableItem3').innerText = event.target.value;;
        alertVal = true;
    });

    amount3.addEventListener('input', function (event) {
        document.getElementById('invoiceTableAmount3').innerText = event.target.value;;
        calcInvoiceTotaNewl()
        alertVal = true;
    });

    item4.addEventListener('input', function (event) {
        document.getElementById('invoiceTableItem4').innerText = event.target.value;;
        alertVal = true;
    });

    amount4.addEventListener('input', function (event) {
        document.getElementById('invoiceTableAmount4').innerText = event.target.value;;
        calcInvoiceTotalNew()
        alertVal = true;
    });

    item5.addEventListener('input', function (event) {
        document.getElementById('invoiceTableItem5').innerText = event.target.value;;
        alertVal = true;
    });

    amount5.addEventListener('input', function (event) {
        document.getElementById('invoiceTableAmount5').innerText = event.target.value;;
        calcInvoiceTotalNew()
        alertVal = true;
    });

    item6.addEventListener('input', function (event) {
        document.getElementById('invoiceTableItem6').innerText = event.target.value;;
        alertVal = true;
    });

    amount6.addEventListener('input', function (event) {
        document.getElementById('invoiceTableAmount6').innerText = event.target.value;;
        calcInvoiceTotalNew()
        alertVal = true;
    });
}

function calcInvoiceTotalNew() {
    let invoiceTotal = 0;

    let num1 = document.getElementById('invoiceNewAmount1').value;
    if (num1 !== '') {
        invoiceTotal += (num1 * 1);
    }

    let num2 = document.getElementById('invoiceNewAmount2').value;
    if (num2 !== '') {
        invoiceTotal += (num2 * 1);
    }

    let num3 = document.getElementById('invoiceNewAmount3').value;
    if (num3 !== '') {
        invoiceTotal += num3 * 1;
    }

    let num4 = document.getElementById('invoiceNewAmount4').value;
    if (num4 !== '') {
        invoiceTotal += num4 * 1;
    }

    let num5 = document.getElementById('invoiceNewAmount5').value;
    if (num5 !== '') {
        invoiceTotal += num5 * 1;
    }

    let num6 = document.getElementById('invoiceNewAmount6').value;
    if (num6 !== '') {
        invoiceTotal += num6 * 1;
    }

    if (invoiceTotal === NaN) {
        invoiceTotal = 0;
    }

    document.getElementById('invoiceTotal').innerText = `${invoiceTotal.toFixed(2)}`;
    document.getElementById('invoiceSummaryTotal').innerText = `$ ${invoiceTotal.toFixed(2)}`;

}

// Invoice Add Item

function AddItem() {

    let modal = document.getElementById('modalWrapperNewInvoiceItem');
    modal.style.width = "1024px";
    modal.innerHTML =
        `<h4 class="modalH4 newItemH4">Add New List Item</h4>
            <label for="invoiceNewItemName" class="label itemLabel">Item Name</label>
            <input type="text" id="invoiceNewItemName" name="invoiceNewItemName" class="input itemName" value="">

            <label for="invoiceNewItemAmount" class="label itemLabel">Item Amount</label>
            <input type="invoiceNumber" rows="1" cols="10" id="invoiceNewItemAmount" inputtype="decimal" name="invoiceNewItemAmount" class="input itemAmount" value="">
            
            <textarea id="invoiceNewItemDescription" name="invoiceNewItemDescription" class="input itemDescription" maxlength="240" placeholder="Type item description here..." value=""></textarea>
            
            <div class = "modalFooter">
                <button class = "button modalFooterButton" id = "cancelButtonNewInvoiceAddItem" value="${number}"  onclick = "cancelButtonNewInvoiceAddItem()">Cancel</button>

                <button class = "button modalFooterButton" id = "saveButtonNewInvoiceAddItem" value="${number}" onclick = "saveButtonNewInvoiceAddItem()">Save</button>
            </div>`
}

function saveButtonNewInvoiceAddItem() {

    let modal = document.getElementById('modalWrapperNewInvoiceItem');
    let i = document.getElementById('saveButtonNewInvoiceAddItem').value;
    let amountVal = document.getElementById('invoiceNewItemAmount').value;
    amountVal = amountVal * 1;
    let descVal = document.getElementById('invoiceNewItemDescription').value;
    let nameNew = document.getElementById('invoiceNewItemName').value;

    let newData = {
        "customerName": nameNew,
        "invoiceAmount": amountVal,
        "desc": descVal
    }

    if (nameNew.replace(/\s/g, '') === "") {
        alert("Please enter a name for this item before saving.");
    } else if (nameNew.replace(/\s/g, '') !== "" && amountVal < 0.01) {
        alert("Please enter an amount before saving.")
    } else {

        document.getElementById(`invoiceNewItem${i}`).value = descVal;
        document.getElementById(`invoiceNewAmount${i}`).value = amountVal.toFixed(2);
        document.getElementById(`invoiceTableItem${i}`).innerText = descVal;
        document.getElementById(`invoiceTableAmount${i}`).innerText = amountVal.toFixed(2);

        document.getElementById('modalWrapperNewInvoiceItem').style.width = "0px";
        document.getElementById('modalWrapperNewInvoiceItem').innerHTML = "";

        db[2].items.push(newData);

        modal.style.width = "0px";
        modal.innerHTML = "";
        buildItemSelectNew()
    }

}

// Add Customer

function drawModalNewInvoiceAddCustomer() {

    let modal = document.getElementById('modalWrapperNewInvoiceItem');
    modal.style.width = "1024px";
    modal.innerHTML =
        `<h4 class="modalH4 newItemH4">Add New Customer</h4>
            <label for="invoiceNewAddCustomerName" class="label itemLabel">Customer Name</label>
            <input type="text" id = "invoiceNewAddCustomerName" name="invoiceNewCustomerName" class="input newInvoiceAddCustomer" value="">

            <label for="invoiceNewAddCustomerAddress1" class="label itemLabel">Address Line 1</label> 
            <input type="text" id ="invoiceNewAddCustomerAddress1" name = "invoiceNewCustomerAddress1" class="input newInvoiceAddCustomer" value="">
            
            <label for="invoiceNewAddCustomerAddress2" class="label itemLabel">Address Line 2</label>
            <input type="text" id ="invoiceNewAddCustomerAddress2" name="invoiceNewCustomerAddress2" class="input newInvoiceAddCustomer" value="bitch">

            <label for="invoiceNewAddCustomerCity" class="label itemLabel">City</label>
            <input type="text" id ="invoiceNewAddCustomerCity" name="invoiceNewCustomerCity" class="input newInvoiceAddCustomer" value="">

            <label for ="invoiceNewAddCustomerState" class = "label itemLabel">State</label>
            <select class = "input newInvoiceAddCustomerSmall" id="invoiceNewAddCustomerState">
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

            <label for="invoiceNewAddCustomerZip" class="label itemLabel">Zip Code</label>
            <input type="invoiceNumber" rows = "1" cols = "12" id = "invoiceNewAddCustomerZip" name = "invoiceNewCustomerZip" class = "input newInvoiceAddCustomerSmall" value = "">
            
            <div class = "modalFooter">
                <button class = "button modalFooterButton" id = "cancelButtonNewInvoiceAddCustomer"  onclick = "cancelButtonNewInvoiceAddCustomer()">Cancel</button>
                <button class = "button modalFooterButton" id = "saveButtonNewInvoiceAddCustomer" onclick = "saveButtonNewInvoiceAddCustomer()">Save</button>
            </div>`;
}

function saveButtonNewInvoiceAddCustomer() {

    let modal = document.getElementById('modalWrapperNewInvoiceItem');

    if (document.getElementById('invoiceNewAddCustomerName').value.replace(/\s/g, '') !== "") {
        customerName = document.getElementById('invoiceNewAddCustomerName').value;
    } else {
        alert("Please enter a name for this customer before saving.");
    }

    if (document.getElementById('invoiceNewAddCustomerAddress1').value.replace(/\s/g, '') !== "") {
        address1 = document.getElementById('invoiceNewAddCustomerAddress1').value;
    } else {
        address1 = false;
    }

    if (document.getElementById('invoiceNewAddCustomerAddress2').value.replace(/\s/g, '') !== "") {
        address2 = document.getElementById('invoiceNewAddCustomerAddress2').value;
    } else {
        address2 = false;
    }

    if (document.getElementById('invoiceNewAddCustomerCity').value.replace(/\s/g, '') !== "") {
        city = document.getElementById('invoiceNewAddCustomerCity').value;
    } else {
        city = false;
    }

    if (document.getElementById('invoiceNewAddCustomerState').value.replace(/\s/g, '') !== "blank") {
        state = document.getElementById('invoiceNewAddCustomerState').value;
    } else {
        state = false;
    }

    if (document.getElementById('invoiceNewAddCustomerZip').value.replace(/\s/g, '') !== "") {
        zip = document.getElementById('invoiceNewAddCustomerZip').value;
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
    modal.style.width = "0px";
    modal.innerHTML = "";
    buildCustomerSelect();
    drawInvoice();
}

// Payment


function buildInvoicePayment() {
    let modal = document.getElementById('modalWrapperNewInvoiceItem');
    let total = invoiceTotalFromMemory();
    if (paymentDate === false) {
        paymentDate = new Date().toJSON().slice(0, 10);
    }
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
        <input type="date" id="paymentDatepicker" name ="date" class="input" min="1997-01-01" max="2030-12-31" value ="${paymentDate}">

        <label for="paymentSelect" class="label itemLabel">Payment Type</label>
            <select class = "input newInvoiceAddCustomerSmall" id="paymentSelect" name="paymentSelect">
            </select>

            <label for = "paymentNotes" class = "textareaLabel">Notes</label>
            <textarea id = "paymentNotes" name = "paymentNotes" class = "input itemDescription" maxlength = "240" placeholder = "Notes...">${paymentNotes}</textarea>
            
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
        let modal = document.getElementById('modalWrapperNewInvoiceItem');
        modal.style.width = "0px";
        modal.innerHTML = '';
        buildInvoicePreview();
    }



    // Expenses

    function buildExpenses() {
        document.getElementById('siteH3').innerText = 'Expenses';
        document.getElementById('plusButton').innerHTML = `
    <button class = "plusButton button" onclick = "buildExpenseEdit('new')">
        <span class = "iconPlusButton"></span>
        <span class = "buttonText" id = "plusButtonText">Expense</span> 
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

        function buildTable(i, data) {
            let month = getExpenseMonth(i, data);
            let year = getExpenseYear(i, data);
            let expenseAmount = data[i].expenseAmount * 1;
            let div =
                `<div class="contentDiv">
                <div class = "ribbon ribbonTop">
                    <span class ="expenseMonth">${month}</span><span class="expenseYear"> ${year}</span><span class ="ribbonTotal" id ="eTotal${month}${year}"></span>
                    </div>
                    <table id="tableExpenses${month}${year}">
                    <tbody id="tbodyExpenses${month}${year}" class="tbodyExpenses">
                        <tr id = "row${i}">
                            <td class="tdExpensesDate">${formatDate(data[i].expenseDate)}</td>
                            <td class="tdExpensesCategory">${data[i].expenseCategory}</td> 
                            <td class="tdExpensesNotes">${data[i].expenseNotes}</td> 
                            <td class="tdExpensesAmount">$ ${expenseAmount.toFixed(2)}</td> 
                        </tr>
                    </tbody></table>               
            </div>`;
            document.getElementById('siteContentExpenses').innerHTML += div;
            total = expenseAmount;
        }

        buildTable(0, data);

        let preMonth = getExpenseMonth(0, data);
        let preYear = getExpenseYear(0, data);
        
        document.getElementById(`tableExpenses${preMonth}${preYear}`).className = 'topTable';


        for (var i = 1; i < data.length; i++) { // i starts at 1 so 'if' statement can compare month name to previous including the one above

            let newYear = getExpenseYear(i, data);
            let newMonth = getExpenseMonth(i, data);
            let date = data[i].expenseDate;
            let cat = data[i].expenseCategory;
            let notes = data[i].expenseNotes;
            let amount = data[i].expenseAmount * 1;

            if (newMonth === preMonth && newYear === preYear) { // if same month as last, total is updated and loop repeats
                let row = `
                        <tr id = "row${i}">
                            <td class = "tdExpensesDate">${formatDate(date)}</td>
                            <td class = "tdExpensesCategory">${cat}</td>
                            <td class = "tdExpensesNotes">${notes}</td>
                            <td class = "tdExpensesAmount">$ ${amount.toFixed(2)}</td>
                        </tr>`
                document.getElementById(`tbodyExpenses${newMonth}${newYear}`).innerHTML += row;
                total = total + amount;
            }

            if (newMonth !== preMonth || newYear !== preYear) { // if new category, new li is drawn then ....

                buildTable(i, data);
                document.getElementById(`eTotal${preMonth}${preYear}`).innerText = `$ ${total.toFixed(2)}`; // PREVIOUS total added to its span
                total = 0; // total is reset
                total = total + amount; // amount from CURRENT category is added to total
                preMonth = newMonth;
                preYear = newYear;
            }
            if (i % 2 !== 0) {
                document.getElementById(`row${i}`).className = 'lightgrey';
            }
        }
        document.getElementById(`eTotal${preMonth}${preYear}`).innerText = `$ ${total.toFixed(2)}`; // when loop finishes, last total is added to it's span
    }

    function buildExpenseEdit(val) {
        let modal = document.getElementById('modalWrapperNewInvoiceItem');
         document.getElementById('modalBackground').style.display = 'block';
        modal.style.width = "1024px";
        if (val === 'new') {
            modal.innerHTML =
                `<h4 class="modalH4">New Expense</h4>

            <label for="expenseAmount" class="label itemLabel">Item Amount</label>
            <input type="invoiceNumber" rows="1" cols="10" id="expenseAmount" inputtype="decimal" name="invoiceNewItemAmount" class="input itemAmount" value="">

            <label for="date" class="label">Date</label> 
            <input type="date" id="expenseDatepicker" name ="date" class="input" min="1997-01-01" max="2030-12-31" value ="${new Date().toJSON().slice(0, 10)}">

            <label for="paymentSelect" class="label itemLabel">Expense Category</label>
            <select class = "input newInvoiceAddCustomerSmall" id="expenseSelect" name="paymentSelect">
            </select>

            <label for = "paymentNotes" class = "textareaLabel">Notes</label>
            <textarea id = "expenseNotes" name = "paymentNotes" class = "input itemDescription" maxlength = "240" placeholder = "Notes..."></textarea>
        
        <div class = "modalFooter" >
            <button class = "button modalFooterButton" id = "cancelButtonExpense" onclick = "cancelButtonExpense()">Cancel</button> 
            <button class = "button modalFooterButton" id = "saveButtonExpense" onclick = "saveButtonExpense()">Save</button></div>`
            buildExpenseSelect();
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
        <input type="date" id="paymentDatepicker" name ="date" class="input" min="1997-01-01" max="2030-12-31" value ="${paymentDate}">

        <label for="paymentSelect" class="label itemLabel">Payment Type</label>
            <select class = "input newInvoiceAddCustomerSmall" id="expenseSelect" name="paymentSelect">
            </select>

            <label for = "paymentNotes" class = "textareaLabel">Notes</label>
            <textarea id = "paymentNotes" name = "paymentNotes" class = "input itemDescription" maxlength = "240" placeholder = "Notes...">${paymentNotes}</textarea>
            
            <div class = "modalFooter">
                <button class = "button modalFooterButton" id = "cancelButtonExpense" onclick="cancelButtonInvoicePayment()">Cancel</button>
                <button class = "button modalFooterButton" id = "saveButtonExpense" onclick="saveButtonInvoicePayment()">Save</button>
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
                <option value = "false" selected hidden disabled>Choose Payment Method</option>   
                <option value = "Credit">Credit</option>   
                <option value = "Check">Check</option>   
                <option value = "Transfer">Transfer</option>   
                <option value = "Cash">Cash</option>`
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
            return compareStrings(a.category, b.category);
        })
        document.getElementById('expenseSelect').innerHTML = `<option selected disabled hidden>Choose Category</option>`;
        document.getElementById('expenseSelect').innerHTML += `<option class = "invoiceItemOption" value = "new"> + -- New Category -- + </option>`;

        for (var i = 0; i < data.length; i++) {

            let newCategory = data[i].category;
            let newOption = `<option value ="${newCategory}">${newCategory}</option>`;

            
                document.getElementById('expenseSelect').innerHTML += newOption;
           
        }
    }

   function saveButtonExpense() {
        let modal = document.getElementById('modalWrapperNewInvoiceItem');
        let expenseCategory = document.getElementById('expenseSelect').value;
        let expenseDate = document.getElementById('expenseDatepicker').value;
        let expenseAmount = document.getElementById('expenseAmount').value;
        let expenseNotes = document.getElementById('expenseNotes').value;

       
       let newData = {
                "expenseCategory": expenseCategory,
                "expenseDate": expenseDate,
                "expenseAmount": expenseAmount,
                "expenseNotes": expenseNotes
            }

       db[3].expenses.push(newData);
       modal.style.width = "0px";
       modal.innerHTML = "";
        document.getElementById('modalBackground').style.display = 'none';
        buildExpenses();
   }

    

    // Customers

    function buildCustomers() {
        document.getElementById('plusButtonText').innerText = 'Customer';
        document.getElementById('plusButton').style.display = 'block';
        document.getElementById('navCustomers').className = 'active';
        document.getElementById('siteContentCustomers').innerHTML = "";
        document.getElementById('siteContentCustomers').style.display = 'block';
        buildTableCustomers();
    }

    function customerBalance(id) {
        let data = db[0].invoices;
        let balance = 0;

        for (var i = 0; i < data.length; i++) {
            let customerId = data[i].customerId;
            let total = data[i].total;
            let stat = data[i].stat;
            if (id === customerId && stat === false) {
                balance = balance + total;
            }
        }
        if (balance > 0) {
            return '$ ' + balance;
        } else {
            return '---'
        }
    }

    function getFirstLetter(i, data) {
        return data[i].name.charAt(0);
    }


    function buildTableCustomers() {

        let data = db[1].customers;

        function compareStrings(a, b) {
            return (a < b) ? -1 : (a > b) ? 1 : 0;
        }

        data.sort(function (a, b) {
            return compareStrings(a.name, b.name);
        })

        function buildTable(i, data) {
            let id = data[i].id;
            let name = data[i].name;
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
                    <tr id="row${i}">
                        <td>${name}</td>
                        <td>${address}</td>
                        <td> ${balance}</td>
                    </tr>
                    </tbody>
                    </table>               
            </div>`;
            document.getElementById('siteContentCustomers').innerHTML += div;
        }
        buildTable(0, data);

        let preLetter = getFirstLetter(0, data);
        let preName = data[0].name;

        document.getElementById(`tableCustomers${preLetter}`).className = 'topTable';

        for (var i = 1; i < data.length; i++) { // i starts at 1 so 'if' statement can compare month name to previous including the one above

            let id = data[i].id;
            let newName = data[i].name;
            let balance = customerBalance(id);
            let newLetter = getFirstLetter(i, data);
            let address = formatAddressLine(i, data);
            if (newLetter === preLetter && newName !== preName) { // if same month as last, total is updated and loop repeats
                let row =
                    `<tr id="row${i}">
                            <td>${newName}</td>
                            <td>${address}</td>  
                            <td>${balance}</td> 
                        </tr>`
                document.getElementById(`tbodyCustomers${newLetter}`).innerHTML += row;
            }

            if (newLetter !== preLetter) { // if new category, new li is drawn then ....
                buildTable(i, data);
                preLetter = newLetter;
                preName = newName;
            }
        }
    }