//for footer
export const Airports = [
    {
        innerText: "Heathrow Airport Transfer",
        path: "/heathrow-taxi-prices",
        title: "London Heathrow Transfer",
        type: "cell",
        hasTaxiDeals: "heathrow",
        id: 1,
        translateTitle: "strHeathrowTaxiPrices",

    },
    {
        innerText: "Gatwick Airport Transfer",
        path: "/gatwick-taxi-prices",
        title: "London Gatwick Transfer",
        type: "cell",
        hasTaxiDeals: "gatwick",
        id: 2,
        translateTitle: "strGatwickTaxiPrices",
    }
    ,
    {
        innerText: "City Airport Transfer",
        path: "/london-city-taxi-prices",
        title: "London City Airport Transfer",
        type: "cell",
        hasTaxiDeals: "city",
        id: 3,
        translateTitle: "strLCYTaxiPrices",

    }
    ,
    {
        innerText: "Luton Airport Transfer",
        path: "/luton-taxi-prices",
        title: "Luton Airport Transfer",
        type: "cell",
        hasTaxiDeals: "luton",
        id: 4,
        translateTitle: "strLutonTaxiPrices",
    },
    {
        innerText: "Stansted Airport Transfer",
        path: "/stansted-taxi-prices",
        title: "London Stansted Airport Transfer",
        type: "cell",
        hasTaxiDeals: "stansted",
        id: 5,
        translateTitle: "strStanstedTaxiPrices",
    }
]


// normal list
//hasTaxideals=>when we select any link we store that name of
//..hasTaxideals to redux then When we get from that redux and use it inside  Heathrow Airport Transfer|| Gatwick Airport Transfer
//+
export const navigator = [
    {
        innerText: "home",
        path: "/",
        title: "strNavHome",
        type: "cell",
        hasTaxiDeals: "",
        strInnerText: "strNavHome",
    },
    {
        innerText: "airports",
        path: "/Airports",
        type: "list",
        hasTaxiDeals: "",
        strInnerText: "strAirportTaxi",
        list: [
            {
                innerText: "Istanbul Airport (IST)",
                path: "/istanbul-airport-taxi-prices",
                title: "strIstanbulAirportPrices",
                type: "cell",
                hasTaxiDeals: "IST",
                strInnerText: "strIstanbulAirportPrices",
            },
            {
                innerText: "Sabiha Gokcen Airport (SAW)",
                path: "/sabiha-gokcen-airport-taxi-prices",
                title: "strSabihaGokcenAirportPrices",
                type: "cell",
                hasTaxiDeals: "SAW",
                strInnerText: "strSabihaGokcenAirportPrices",
            },
            {
                innerText: "Dalaman Airport (DLM)",
                path: "/dalaman-airport-taxi-prices",
                title: "strDalamanAirportPrices",
                type: "cell",
                hasTaxiDeals: "DLM",
                strInnerText: "strDalamanAirportPrices",
            },
            {
                innerText: "Antalya Airport (AYT)",
                path: "/antalya-airport-taxi-prices",
                title: "strAntalyaAirportPrices",
                type: "cell",
                hasTaxiDeals: "AYT",
                strInnerText: "strAntalyaAirportPrices",
            },
            {
                innerText: "Bodrum-Milas Airport (BJV)",
                path: "/bodrum-milas-airport-taxi-prices",
                title: "strBodrumMilasAirportPrices",
                type: "cell",
                hasTaxiDeals: "BJV",
                strInnerText: "strBodrumMilasAirportPrices",
            },
            // {
            //     innerText: "Izmir Adnan Menderes Airport (ADB)",
            //     path: "/izmir-adnan-menderes-airport-taxi-prices",
            //     title: "strIzmirAdnanMenderesAirportPrices",
            //     type: "cell",
            //     hasTaxiDeals: "ADB",
            //     strInnerText: "strIzmirAdnanMenderesAirportPrices",
            // },
            // {
            //     innerText: "Gazipasha-Alanya Airport (GZP)",
            //     path: "/gazipasha-alanya-airport-taxi-prices",
            //     title: "strGazipashaAlanyaAirportPrices",
            //     type: "cell",
            //     hasTaxiDeals: "GZP",
            //     strInnerText: "strGazipashaAlanyaAirportPrices",
            // },
        ]
    },
    {
        innerText: "Terms",
        path: "/terms",
        type: "cell",
        hasTaxiDeals: "",
        title: "strTerms",
        strInnerText: "strTerms"
    },
    {
        innerText: "Our Fleet",
        path: "/fleet",
        type: "cell",
        hasTaxiDeals: "",
        title: "strOurFleet",
        strInnerText: "strOurFleet"
    },
    {
        innerText: "Manage Booking ",
        path: "/manage-booking.html",
        title: "appContactUsHeader",
        type: "cell",
        hasTaxiDeals: "",
        strInnerText: "strManageBooking"

    },
    {
        innerText: "Contact Us ",
        path: "/contact-us",
        title: "appContactUsHeader",
        type: "cell",
        hasTaxiDeals: "",
        strInnerText: "appContactUsHeader"

    },

]
//+
export const navigatorMobile = [
    {
        innerText: "home",
        path: "/",
        title: "strNavHome",
        type: "cell",
        hasTaxiDeals: "",
        strInnerText: "strNavHome",
        firstChild: false,
    },
    {
        innerText: "airports",
        path: "",
        type: "list",
        hasTaxiDeals: "IST",
        strInnerText: "strAirportTaxi",
        firstChild: true,

        list: [
            {
                innerText: "Istanbul Airport (IST)",
                path: "/istanbul-airport-taxi-prices",
                title: "strIstanbulAirportPrices",
                type: "cell",
                hasTaxiDeals: "IST",
                strInnerText: "strIstanbulAirportPrices",
            },
            {
                innerText: "Sabiha Gokcen Airport (SAW)",
                path: "/sabiha-gokcen-airport-taxi-prices",
                title: "strSabihaGokcenAirportPrices",
                type: "cell",
                hasTaxiDeals: "SAW",
                strInnerText: "strSabihaGokcenAirportPrices",
            },
            {
                innerText: "Dalaman Airport (DLM)",
                path: "/dalaman-airport-taxi-prices",
                title: "strDalamanAirportPrices",
                type: "cell",
                hasTaxiDeals: "DLM",
                strInnerText: "strDalamanAirportPrices",
            },
            {
                innerText: "Antalya Airport (AYT)",
                path: "/antalya-airport-taxi-prices",
                title: "strAntalyaAirportPrices",
                type: "cell",
                hasTaxiDeals: "AYT",
                strInnerText: "strAntalyaAirportPrices",
            },
            {
                innerText: "Bodrum-Milas Airport (BJV)",
                path: "/bodrum-milas-airport-taxi-prices",
                title: "strBodrumMilasAirportPrices",
                type: "cell",
                hasTaxiDeals: "BJV",
                strInnerText: "strBodrumMilasAirportPrices",
            },
            // {
            //     innerText: "Izmir Adnan Menderes Airport (ADB)",
            //     path: "/izmir-adnan-menderes-airport-taxi-prices",
            //     title: "strIzmirAdnanMenderesAirportPrices",
            //     type: "cell",
            //     hasTaxiDeals: "ADB",
            //     strInnerText: "strIzmirAdnanMenderesAirportPrices",
            // },
            // {
            //     innerText: "Gazipasha-Alanya Airport (GZP)",
            //     path: "/gazipasha-alanya-airport-taxi-prices",
            //     title: "strGazipashaAlanyaAirportPrices",
            //     type: "cell",
            //     hasTaxiDeals: "GZP",
            //     strInnerText: "strGazipashaAlanyaAirportPrices",
            // },
        ]
    },
    {
        innerText: "Terms",
        path: "/terms",
        type: "cell",
        hasTaxiDeals: "",
        strInnerText: "strTerms",
        title: "strTerms",
        firstChild: false

    },
    {
        innerText: "Contact Us ",
        path: "/contact-us",
        title: "appContactUsHeader",
        strInnerText: "appContactUsHeader",
        type: "cell",
        hasTaxiDeals: "",
        firstChild: false
    },

    {
        innerText: "Our Fleet",
        path: "/fleet",
        type: "cell",
        hasTaxiDeals: "",
        title: "strOurFleet",
        strInnerText: "strOurFleet"
    },
    {
        innerText: "managebooking",
        path: "/manage-booking.html",
        type: "cell",
        hasTaxiDeals: "",

        title: "strManageBooking",
        strInnerText: "strManageBooking",
        firstChild: false

    }
]
