document.getElementById('submitButton').addEventListener('click', getData);

// Populate the dropdowns when the document is ready
document.addEventListener('DOMContentLoaded', populateDropdowns);

function getData(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    let masseinheit = document.getElementById('masseinheitInput').value;
    let kategorie = document.getElementById('kategorieInput').value;
    let gas = document.getElementById('gasInput').value;
    let jahr = document.getElementById('jahrInput').value;
    let answer = document.getElementById('answer');

    if (!masseinheit || !kategorie || !gas || !jahr) {
        answer.innerHTML = 'Please select all options.';
        return;
    }

    let requestBody = {
        "query": [
            {
                "code": "Masseinheit",
                "selection": {
                    "filter": "item",
                    "values": [masseinheit]
                }
            },
            {
                "code": "Wirtschaft und Haushalte",
                "selection": {
                    "filter": "item",
                    "values": [kategorie]
                }
            },
            {
                "code": "Gas",
                "selection": {
                    "filter": "item",
                    "values": [gas]
                }
            },
            {
                "code": "Jahr",
                "selection": {
                    "filter": "top", 
                    "values": [jahr]
                }
            }
        ],
        "response": {
            "format": "json-stat"
        }
    };

    fetch('/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    }).then(response => {
        if (response.ok) {
            window.location.href = '/table'; // Redirect to the table page on success
        } else {
            throw new Error('Failed to fetch data');
        }
    }).catch(error => {
        answer.innerHTML = `Error: ${error.message}`;
    });
}

function populateDropdowns() {
    console.log("Populating dropdowns...");
    const variables = {
        "Masseinheit": {
            "values": [
                "MTONS",
                "MTEQCO2"
            ],
            "valueTexts": [
                "Thousand tonnes",
                "Thousand tonnes of CO2 equivalent"
            ]
        },
        "Kategorie": {
            "values": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
                "27",
                "28",
                "29",
                "30",
                "31",
                "32",
                "33",
                "34",
                "35",
                "36",
                "37",
                "38",
                "39",
                "40",
                "41",
                "42",
                "43",
                "44",
                "45",
                "46",
                "47",
                "48",
                "49",
                "50",
                "51",
                "52",
                "53",
                "54",
                "55",
                "56",
                "57",
                "58",
                "59",
                "60",
                "61",
                "62",
                "63",
                "64",
                "65",
                "66",
                "67",
                "68",
                "69",
                "70",
                "71",
                "72",
                "73",
                "74",
                "75",
                "76",
                "77",
                "78",
                "79",
                "80",
                "81",
                "82"
            ],
            "valueTexts": [
                "Economy and households - Total",
                "- Total economy",
                "-- Primary sector",
                "--- 01-03 Agriculture, forestry and fishing",
                "---- 01 Crop and animal production, hunting and related service activities",
                "---- 02 Forestry and logging",
                "---- 03 Fishing and aquaculture",
                "-- Secondary sector",
                "--- 05-09 Mining and quarrying",
                "--- 10-33 Manufacturing",
                "---- 10-12 Manufacture of food and tobacco products",
                "---- 13-15 Manufacture of textiles and apparel",
                "---- 16 Manufacture of wood and of products of wood and cork, except furniture",
                "---- 17 Manufacture of paper and paper products",
                "---- 18 Printing and reproduction of recorded media",
                "---- 19-20 Manufacture of coke, chemicals and chemical products",
                "---- 21 Manufacture of pharmaceutical products",
                "---- 22 Manufacture of rubber and plastic products",
                "---- 23 Manufacture of other non-metallic mineral products",
                "---- 24 Manufacture of basic metals",
                "---- 25 Manufacture of fabricated metal products, except machinery and equipment",
                "---- 26 Manufacture of computer, electronic and optical products; watches and clocks",
                "---- 27 Manufacture of electrical equipment",
                "---- 28 Manufacture of machinery and equipment n.e.c.",
                "---- 29 Manufacture of motor vehicles, trailers and semi-trailers",
                "---- 30 Manufacture of other transport equipment",
                "---- 31 Manufacture of furniture",
                "---- 32 Other manufacturing",
                "---- 33 Repair and installation of machinery and equipment",
                "--- 35 Energy production and distribution",
                "--- 36-39 Water supply; sewerage, waste management and remediation activities",
                "---- 36 Water supply",
                "---- 37-39 Sewerage, waste management and remediation activities",
                "--- 41-43 Construction",
                "-- Tertiary sector",
                "--- 45-47 Trade; repair of motor vehicles and motorcycles",
                "---- 45 Wholesale and retail trade and repair of motor vehicles and motorcycles",
                "---- 46 Wholesale trade",
                "---- 47 Retail trade",
                "--- 49-53 Transportation and storage",
                "---- 49 Land and pipeline transport",
                "---- 50-51 Water and air transport",
                "---- 52 Warehousing and support activities for transportation",
                "---- 53 Postal and courier activities",
                "--- 55-56 Accommodation and food service activities",
                "---- 55 Accommodation",
                "---- 56 Food and beverage service activities",
                "--- 58-63 Information and communication",
                "---- 58 Publishing activities",
                "---- 59-60 Audio and video production activities",
                "---- 61 Telecommunications",
                "---- 62-63 IT and other information services",
                "--- 64-66 Financial and insurance activities",
                "---- 64 Financial service activities",
                "---- 65 Insurance",
                "--- 68-75, 77-82 Scientific, technical and real state activities; administrative activities",
                "---- 68 Real estate activities",
                "---- 69-70 Legal and accounting activities; management",
                "---- 71 Architectural and engineering activities",
                "---- 72 Scientific research and development",
                "---- 73 Advertising and market research",
                "---- 74-75 Other professional, scientific and technical activities",
                "---- 77 Rental and leasing activities",
                "---- 78 Employment activities",
                "---- 79 Travel agency, tour operator reservation service and related activities",
                "---- 80-82 Administrative and support service activities",
                "--- 84 Public administration",
                "--- 85 Education",
                "--- 86-88 Human health and social work",
                "---- 86 Human health activities",
                "---- 87-88 Residential care and social work activities",
                "--- 90-96 Arts, entertainment and recreation; other services",
                "---- 90-92 Creative indurstry and arts",
                "---- 93 Sports and entertainment activities",
                "---- 94 Activities of membership organisations",
                "---- 95 Repair of computers and personal and household goods",
                "---- 96 Other service activities",
                "- Households",
                "-- Household transports",
                "-- Heating and other household emissions",
                "--- Household heating",
                "--- Other household emissions"
            ]
        },
        "Gas": {
            "values": [
                "01_TOT_CO2",
                "02_CO2_foss",
                "03_CO2_bio",
                "04_N2O",
                "05_CH4",
                "06_HFCs",
                "07_PFCs",
                "08_SF6",
                "09_Nox",
                "10_SO2",
                "11_NH3",
                "12_NMVOC",
                "13_CO",
                "14_PM10",
                "15_PM2_5",
                "16_Tot_CO2_equ",
                "17_Tot_CO2_equ_sans_bio"
            ],
            "valueTexts": [
                "Total CO2",
                "CO2 without biomass",
                "Biomass CO2",
                "N2O",
                "CH4",
                "HFCs",
                "PFCs",
                "SF6 and NF3",
                "NOx",
                "SO2",
                "NH3",
                "NMVOC",
                "CO",
                "PM10",
                "PM2.5",
                "Total greenhouse gases",
                "Total greenhouse gases without biomass"
            ]
        },
        "Jahr": {
            "values": [
                "32",
                "31",
                "30",
                "29",
                "28",
                "27",
                "26",
                "25",
                "24",
                "23",
                "22",
                "21",
                "20",
                "19",
                "18",
                "17",
                "16",
                "15",
                "14",
                "13",
                "12",
                "11",
                "10",
                "9",
                "8",
                "7",
                "6",
                "5",
                "4",
                "3",
                "2",
                "1"
            ],
            "valueTexts": [
                "1990",
                "1991",
                "1992",
                "1993",
                "1994",
                "1995",
                "1996",
                "1997",
                "1998",
                "1999",
                "2000",
                "2001",
                "2002",
                "2003",
                "2004",
                "2005",
                "2006",
                "2007",
                "2008",
                "2009",
                "2010",
                "2011",
                "2012",
                "2013",
                "2014",
                "2015",
                "2016",
                "2017",
                "2018",
                "2019",
                "2020",
                "2021"
            ]
        }
    };

    for (let key in variables) {
        let selectElement = document.getElementById(`${key.toLowerCase()}Input`);
        if (selectElement) {
            variables[key].values.forEach((value, index) => {
                let option = new Option(variables[key].valueTexts[index], value);
                selectElement.add(option);
            });
        } else {
            console.log(`${key} select not found!`);
        }
    }
}
