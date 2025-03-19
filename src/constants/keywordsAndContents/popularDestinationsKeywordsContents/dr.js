/**
 * Retrieves the airport page content for the given pathname and language.
 *
 * @param {string} pathname - The pathname of the airport page.
 * @param {string} [language="en"] - The language of the airport page content.
 * @returns {string} The airport page content for the given pathname and language.
 */
// export const getAirportPageContentByPathname = (pathname, language = "en") => {
//     return airportPageContents[pathname][language]
// }
// const airportPageContents = {
//     "/istanbul-airport-to-taksim": {
//         en: ``,
//         tr: ``,
//         ar: ``,
//         es: ``,
//         it: ``,
//         ru: ``,
//         zh: ``,
//     },
//     "/istanbul-airport-to-sultanahmet": {
//         en: ``,
//         tr: ``,
//         ar: ``,
//         es: ``,
//         it: ``,
//         ru: ``,
//         zh: ``,
//     },
//     "/istanbul-airport-to-kadikoy": {
//         en: ``,
//         tr: ``,
//         ar: ``,
//         es: ``,
//         it: ``,
//         ru: ``,
//         zh: ``,
//     },
//     "/istanbul-airport-to-beyoglu": {
//         en: ``,
//         tr: ``,
//         ar: ``,
//         es: ``,
//         it: ``,
//         ru: ``,
//         zh: ``,
//     },
//     "/istanbul-airport-to-besiktas": {
//         en: ``,
//         tr: ``,
//         ar: ``,
//         es: ``,
//         it: ``,
//         ru: ``,
//         zh: ``,
//     },
//     "/istanbul-airport-to-nisantasi": {
//         en: ``,
//         tr: ``,
//         ar: ``,
//         es: ``,
//         it: ``,
//         ru: ``,
//         zh: ``,
//     },
//     "/istanbul-airport-to-eminonu": {
//         en: ``,
//         tr: ``,
//         ar: ``,
//         es: ``,
//         it: ``,
//         ru: ``,
//         zh: ``,
//     },
//     "/istanbul-airport-to-uskudar-asian-side": {
//         en: ``,
//         tr: ``,
//         ar: ``,
//         es: ``,
//         it: ``,
//         ru: ``,
//         zh: ``,
//     },
//     "/istanbul-airport-to-levent-maslak": {
//         en: ``,
//         tr: ``,
//         ar: ``,
//         es: ``,
//         it: ``,
//         ru: ``,
//         zh: ``,
//     },
//     "/istanbul-airport-to-ortakoy": {
//         en: ``,
//         tr: ``,
//         ar: ``,
//         es: ``,
//         it: ``,
//         ru: ``,
//         zh: ``,
//     },
//     "/istanbul-airport-to-sapanca": {
//         en: ``,
//         tr: ``,
//         ar: ``,
//         es: ``,
//         it: ``,
//         ru: ``,
//         zh: ``,
//     },
//     "/istanbul-airport-to-bursa": {
//         en: ``,
//         tr: ``,
//         ar: ``,
//         es: ``,
//         it: ``,
//         ru: ``,
//         zh: ``,
//     },
//     "/istanbul-airport-to-yalova": {
//         en: ``,
//         tr: ``,
//         ar: ``,
//         es: ``,
//         it: ``,
//         ru: ``,
//         zh: ``,
//     },
//     "/istanbul-airport-to-kocaeli-izmit": {
//         en: ``,
//         tr: ``,
//         ar: ``,
//         es: ``,
//         it: ``,
//         ru: ``,
//         zh: ``,
//     },
//     "/istanbul-airport-to-sile-and-agva": {
//         en: ``,
//         tr: ``,
//         ar: ``,
//         es: ``,
//         it: ``,
//         ru: ``,
//         zh: ``,
//     },
//     "/istanbul-airport-to-edirne": {
//         en: ``,
//         tr: ``,
//         ar: ``,
//         es: ``,
//         it: ``,
//         ru: ``,
//         zh: ``,
//     },
//     "/istanbul-airport-to-tekirdag": {
//         en: ``,
//         tr: ``,
//         ar: ``,
//         es: ``,
//         it: ``,
//         ru: ``,
//         zh: ``,
//     },
//     "/istanbul-airport-to-canakkale": {
//         en: ``,
//         tr: ``,
//         ar: ``,
//         es: ``,
//         it: ``,
//         ru: ``,
//         zh: ``,
//     }
// }


//*****************************************
//*****************************************
export const getPopularDestinationSchemaByPathname = (pathname, language) => {
    return popularDestinationSchema[pathname]?.[language] || null;
}
const popularDestinationSchema = {
    IST: {
        "/istanbul-airport-to-taksim": {
            en: {
                "LocalBusiness": {
                    "@context": "https://schema.org/",
                    "@type": "LocalBusiness",
                    "name": "APL Transfers",
                    "image": "https://www.apltransfers.com/assets/taxi-istanbul.jpg",
                    "@id": "33",
                    "url": "https://www.apltransfers.com/istanbul-airport-to-taksim-transfer",
                    "telephone": "+90 212 123 4567",
                    "priceRange": "35",
                    "address": {
                        "@type": "PostalAddress",
                        "postalCode": "34435",
                        "streetAddress": "Taksim Square, Beyoglu",
                        "addressCountry": "TR",
                        "addressLocality": "Istanbul"
                    },
                    "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": 41.0082,
                        "longitude": 28.9784
                    },
                    "openingHoursSpecification": {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": [
                            "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                        ],
                        "opens": "00:00",
                        "closes": "23:59"
                    },
                    "sameAs": [
                        "https://www.facebook.com/APLTransfers",
                        "https://twitter.com/APLTransfers",
                        "https://www.instagram.com/APLTransfers"
                    ]
                },
                "Product": {

                },
                "Organization": {

                }
            },
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        },
        "/istanbul-airport-to-sultanahmet": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        },
        "/istanbul-airport-to-kadikoy": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        },
        "/istanbul-airport-to-beyoglu": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        },
        "/istanbul-airport-to-besiktas": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        },
        "/istanbul-airport-to-nisantasi": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        },
        "/istanbul-airport-to-eminonu": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        },
        "/istanbul-airport-to-uskudar-asian-side": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        },
        "/istanbul-airport-to-levent-maslak": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        },
        "/istanbul-airport-to-ortakoy": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        },
        "/istanbul-airport-to-sapanca": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        },
        "/istanbul-airport-to-bursa": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        },
        "/istanbul-airport-to-yalova": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        },
        "/istanbul-airport-to-kocaeli-izmit": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        },
        "/istanbul-airport-to-sile-and-agva": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        },
        "/istanbul-airport-to-edirne": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        },
        "/istanbul-airport-to-tekirdag": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        },
        "/istanbul-airport-to-canakkale": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        }
    },
    SAW: {},
    AYT: {},
    DLM: {},
    BJY: {},
    ADB: {},
    GZP: {}
}