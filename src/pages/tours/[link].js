import React, { useEffect, useState } from 'react'
import GlobalLayout from "../../components/layouts/GlobalLayout";
import styles from "./singletour.module.scss"
import ReusableModal from "../../components/elements/ReusableModal";
import Slider from "../../components/elements/Slider";
import { useDispatch, useSelector } from "react-redux";
import store from "../../store/store";
import { tourActions } from '../../store/tourActions'
import { Skeleton } from "../../components/elements/Skeleton";
import Error404 from '../404/index'
import { fetchConfig } from '../../resources/getEnvConfig';
import Button from '../../components/elements/Button/Button';
import { BUTTON_TYPES } from '../../components/elements/Button/ButtonTypes';
import { currentDate } from '../../helpers/getDates';

import DateInput from '../../components/elements/DateInput';
import Loading from '../../components/elements/alert/Loading';
import { splitDateTimeStringIntoDate } from '../../helpers/splitHelper';
import { useRouter } from 'next/router';
import { allTranslations } from '../../constants/generalTranslataions';
import { hours, minutes } from '../../constants/minutesHours';


let data = {
    "tourDealId": 1,
    "snapshots": [
        {
            "icon": "fa-solid fa-clock",
            "alias": "strDurationNineHours",
            "innerText": "Duration : 9 hours"
        },
        {
            "icon": "fa-solid fa-user-group",
            "alias": "strCambridgePrivateTour",
            "innerText": "Private Tour"
        },
        {
            "icon": "fa-solid fa-route",
            "alias": "strFlexibleItinerary",
            "innerText": "Flexible Itinerary"
        },
        {
            "icon": "fa-solid fa-square-check",
            "alias": "strFreeCancellation24h",
            "innerText": "Free Cancellation (12hrs)"
        }
    ],
    "sequenceNumber": 1,
    "pathname": "/tours/cambridge-daily-tour",
    "pageTitle": "Cambridge Tour",
    "headTitle": "Cambridge Tour | Explore Historic Cambridge with Our Guided Trips",
    "metaDescription": "Join our guided Cambridge Tour for a journey through history. See the University, River Cam, and more. Ideal for educational and sightseeing trips. ",
    "shortDescription": "Discover the beauty and history of Cambridge with our guided tours. Experience the University, River Cam, and iconic sights in one unforgettable trip. ",
    "keywords": "Cambridge Tour, Historic Cambridge, Guided Tours, Cambridge University, River Cam, Sightseeing, Airport Pickups London, Educational Trips",
    "images": [
        "https://api.london-tech.com/files/randoms/483ee713fb10490ad27c3036179610ff85274865ca35b1384fe9170db4937a1d.jpg",
        "https://api.london-tech.com/files/randoms/e194f767e2acc9f24ba61ee0a55e3c41b7ade1c19d7470b4aec840c38b162536.jpg",
        "https://api.london-tech.com/files/randoms/90e2f29e1cb03b8ff1742fea6998022258ff26da7f0a77c015f70749af83b57f.jpg",
        "https://api.london-tech.com/files/randoms/967fac771d0645fe354ca710df54afdafb4a3ed61abef1a8fb739d75021e161b.jpg"
    ],
    "thumbnailTitle": "Cambridge Tour",
    "breadcrumbTitle": "Tours",
    "durationValue": 9,
    "schema": {
        "LocalBusiness": {
            "@context": "https://schema.org/",
            "@type": "LocalBusiness",
            "name": "Airport Pickups London",
            "image": "https://www.airport-pickups-london.com/images/airport-pickups-london-logo.png",
            "@id": "1",
            "url": "https://www.airport-pickups-london.com/tours/cambridge-daily-tour",
            "telephone": "+44 208 688 7744",
            "priceRange": "35",
            "address": {
                "@type": "PostalAddress",
                "postalCode": "UB7 9HJ",
                "fullDetails": [
                    "APL Office, ",
                    "Novotel Heathrow, ",
                    "Cherry Lane, ",
                    "West Drayton, London, ",
                    "UB7 9HJ"
                ],
                "streetAddress": "APL Office, Cherry Lane",
                "addressCountry": "GB",
                "addressLocality": "West Drayton"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": 51.49759087451854,
                "longitude": -0.455451293899482
            },
            "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
            },
            "sameAs": [
                "https://www.facebook.com/AirportPickupsLondon",
                "https://twitter.com/Airport_Pickups",
                "https://www.youtube.com/c/Airport-pickups-london"
            ]
        },
        "Product": {
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "Cambridge Tour",
            "image": "https://www.airport-pickups-london.com/images/airport-pickups-london-logo.png",
            "description": "Discover the beauty and history of Cambridge with our guided tours. Experience the University, River Cam, and iconic sights in one unforgettable trip. ",
            "brand": "https://www.airport-pickups-london.com/",
            "sku": "3804",
            "offers": {
                "@type": "Offer",
                "url": "https://www.airport-pickups-london.com/tours/cambridge-daily-tour",
                "priceCurrency": "GBP",
                "price": "129.00",
                "priceValidUntil": "2025-05-01",
                "availability": "https://schema.org/InStock",
                "itemCondition": "https://schema.org/NewCondition"
            },
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.94",
                "bestRating": "5",
                "worstRating": "1",
                "ratingCount": 3046,
                "reviewCount": 3046
            },
            "review": {
                "@type": "Review",
                "name": "Krishnan Chetty",
                "reviewBody": "Overall service was excellent. Office is extremely professional and helpful. 3 out of the 4 drivers were extremely good, friendly and helpful. Prices are very good.\n\n",
                "itemReviewed": {
                    "@type": "Thing",
                    "name": "Service provided by airport-pickups-london.com"
                },
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5",
                    "worstRating": "1"
                },
                "datePublished": "2025-01-20",
                "author": {
                    "@type": "Person",
                    "name": "Krishnan Chetty"
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "Reviews.io"
                }
            }
        },
        "Organization": {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Airport Pickups London",
            "url": "https://www.airport-pickups-london.com",
            "sameAs": [
                "https://x.com/Airport_Pickups",
                "https://www.instagram.com/airport_pickups_london",
                "https://www.facebook.com/AirportPickupsLondon"
            ],
            "inLanguage": "en"
        },
        "QAPage1": {
            "@context": "https://schema.org",
            "@type": "QAPage",
            "mainEntity": {
                "@type": "Question",
                "name": "How much does a tour at Cambridge Tour cost?",
                "text": "How much should I expect to pay for a tour at Cambridge Tour, including any extra fees or charges?",
                "answerCount": 1,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "upvoteCount": 0,
                    "url": "https://www.airport-pickups-london.com/tours/cambridge-daily-tour#acceptedAnswer",
                    "text": "The cost of the taxi is starting from £129.00 for standard class saloon/sedan car."
                }
            }
        },
        "QAPage2": {
            "@context": "https://schema.org",
            "@type": "QAPage",
            "mainEntity": {
                "@type": "Question",
                "name": "Where is the driver meeting point at airport?",
                "text": "What is the location of the driver meeting point at the airport?",
                "answerCount": 1,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "upvoteCount": 0,
                    "url": "https://www.airport-pickups-london.com/tours/cambridge-daily-tour#acceptedAnswer",
                    "text": "When you arrive at the airport, our driver will be waiting for you near the arrival gates, holding a name board with your name on it. For more details on the exact location of the meeting point, please refer to the confirmation email we sent you which includes an airport map and further instructions."
                }
            }
        },
        "QAPage3": {
            "@context": "https://schema.org",
            "@type": "QAPage",
            "mainEntity": {
                "@type": "Question",
                "name": "Can I pre-book a tour for Cambridge Tour?",
                "text": "Is pre-booking a tour for Cambridge Tour available and how can I do it?",
                "answerCount": 1,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "upvoteCount": 0,
                    "url": "https://www.airport-pickups-london.com/tours/cambridge-daily-tour#acceptedAnswer",
                    "text": "Yes, it's recommended to pre-book a taxi in advance to avoid any delays or waiting time at the airport. You can easily book a taxi online or by phone."
                }
            }
        },
        "QAPage4": {
            "@context": "https://schema.org",
            "@type": "QAPage",
            "mainEntity": {
                "@type": "Question",
                "name": "How many people can a tour for Cambridge Tour accommodate?",
                "text": "What is the maximum number of passengers a tour can accommodate for Cambridge Tour?",
                "answerCount": 1,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "upvoteCount": 0,
                    "url": "https://www.airport-pickups-london.com/tours/cambridge-daily-tour#acceptedAnswer",
                    "text": "Saloon/sedan car can accommodate 3 Passengers with 3 Suitcases. People Carrier can accommodate 5 passengers and 5 suitcases and Minibus can accommodate up to 8 passengers with 8 suitcases."
                }
            }
        },
        "QAPage5": {
            "@context": "https://schema.org",
            "@type": "QAPage",
            "mainEntity": {
                "@type": "Question",
                "name": "What should I do if my flight is delayed or cancelled?",
                "text": "If my flight is delayed or cancelled, what should I do about my pre-booked transportation from the airport to my destination?",
                "answerCount": 1,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "upvoteCount": 0,
                    "url": "https://www.airport-pickups-london.com/tours/cambridge-daily-tour#acceptedAnswer",
                    "text": "At our company, we continuously monitor your flight status in real-time, which allows us to adjust your pick-up time in case of any delays or cancellations. However, if your flight is cancelled, we kindly request that you inform us as soon as possible so we can reschedule your booking."
                }
            }
        },
        "QAPage6": {
            "@context": "https://schema.org",
            "@type": "QAPage",
            "mainEntity": {
                "@type": "Question",
                "name": "Are your drivers licensed and insured?",
                "text": "Is driver licensing and insurance information available for this transportation service?",
                "answerCount": 1,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "upvoteCount": 0,
                    "url": "https://www.airport-pickups-london.com/tours/cambridge-daily-tour#acceptedAnswer",
                    "text": "Yes, all of our drivers are licensed and insured to ensure your safety and peace of mind during your ride."
                }
            }
        },
        "QAPage7": {
            "@context": "https://schema.org",
            "@type": "QAPage",
            "mainEntity": {
                "@type": "Question",
                "name": "How to contact Airport Pickups London?",
                "text": "What is the contact information for Airport Pickups London, and how can I get in touch with them to inquire about their transportation services?",
                "answerCount": 1,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "upvoteCount": 0,
                    "url": "https://www.airport-pickups-london.com/tours/cambridge-daily-tour#acceptedAnswer",
                    "text": "Our 24/7 contact tel no is: +442086887744, Whatsapp: +447387901028 and email: info@aplcars.com"
                }
            }
        }
    },
    "metaTags": [
        "<link rel=\"canonical\"  href=\"https://www.airport-pickups-london.com/tours/cambridge-daily-tour\" />",
        "<link rel=\"alternate\" hreflang=\"tr\" href=\"https://www.airport-pickups-london.com/tr/tours/cambridge-daily-tour\" />",
        "<link rel=\"alternate\" hreflang=\"ar\" href=\"https://www.airport-pickups-london.com/ar/tours/cambridge-daily-tour\" />",
        "<link rel=\"alternate\" hreflang=\"es\" href=\"https://www.airport-pickups-london.com/es/tours/cambridge-daily-tour\" />",
        "<link rel=\"alternate\" hreflang=\"it\" href=\"https://www.airport-pickups-london.com/it/tours/cambridge-daily-tour\" />",
        "<link rel=\"alternate\" hreflang=\"ru\" href=\"https://www.airport-pickups-london.com/ru/tours/cambridge-daily-tour\" />",
        "<link rel=\"alternate\" hreflang=\"zh\" href=\"https://www.airport-pickups-london.com/zh/tours/cambridge-daily-tour\" />",
        "<link rel=\"alternate\" hreflang=\"x-default\" href=\"https://www.airport-pickups-london.com/tours/cambridge-daily-tour\" />",
        "<meta property=\"og:type\" content=\"website\">",
        "<meta property=\"og:title\" content=\"Cambridge Tour\">",
        "<meta property=\"og:description\" content=\"Discover the beauty and history of Cambridge with our guided tours. Experience the University, River Cam, and iconic sights in one unforgettable trip. \">",
        "<meta property=\"og:url\" content=\"https://www.airport-pickups-london.com/tours/cambridge-daily-tour\">",
        "<meta property=\"og:image\" content=\"https://api.london-tech.com/files/randoms/483ee713fb10490ad27c3036179610ff85274865ca35b1384fe9170db4937a1d.jpg?thumbnail=true\">",
        "<meta property=\"og:site_name\" content=\"Airport Pickups London\">",
        "<meta name=\"twitter:card\" content=\"summary_large_image\">",
        "<meta name=\"twitter:site\" content=\"@Airport_Pickups\">",
        "<meta name=\"twitter:title\" content=\"Cambridge Tour\">",
        "<meta name=\"twitter:description\" content=\"Discover the beauty and history of Cambridge with our guided tours. Experience the University, River Cam, and iconic sights in one unforgettable trip. \">",
        "<meta name=\"twitter:image\" content=\"https://api.london-tech.com/files/randoms/483ee713fb10490ad27c3036179610ff85274865ca35b1384fe9170db4937a1d.jpg?thumbnail=true\">",
        "<meta name=\"robots\" content=\"index, follow\">",
        "<meta name=\"google-site-verification\" content=\"_Cn8CYgXUWiRe05oCJj_l5OkyXza4K4nIuDWUPs8P2w\" />",
        "<meta name=\"msvalidate.01\" content=\"41FC097AFD6E06774C838AC3D486664F\" />",
        "<meta name=\"baidu-site-verification\" content=\"x5apENcEmp\" />",
        "<meta name=\"author\" content=\"Airport Pickups London\">",
        "<meta name=\"copyright\" content=\"Copyright © 2007-2025 Airport-pickups-london.com. All rights reserved.\">"
    ],
    "pageContent": "<h1><strong>Cambridge Tour: A Journey Through History and Beauty</strong><br></h1><p>Embark on an unforgettable full-day journey to explore the historic city of Cambridge with our daily tours, tailored for those eager to dive into the heart of English heritage. Our tours offer the flexibility to select your own pickup time from any London hotel, ensuring a personalized experience right from the start. Accompanied by our dedicated driver for the entire 8-hour tour, you'll enjoy a seamless and immersive exploration of Cambridge's most iconic sights.</p><p>The adventure begins at King’s Parade, where the tower of the University Church, also known as Great St. Mary’s, offers a panoramic view of the city. Nearby, the classical Senate House stands proudly next to Gonville and Caius College, affectionately known as 'Caius' and pronounced 'keys.'</p><p>Market Hill, with its bustling market, offers a glimpse into local life, while the renowned King’s College Chapel, famous for its Chapel Choir and Christmas Eve carol service, showcases the splendor of English late Gothic Perpendicular architecture. Marvel at the chapel's magnificent stained glass and the largest single-span vaulted roof of its time.</p><p>Discover Trinity College, the largest in Cambridge, founded by Henry VIII and home to the Great Court, the largest courtyard across Cambridge and Oxford universities. Continue your exploration with visits to Queens’ College, Emmanuel, Jesus College, and Clare College, each boasting unique architectural and historical treasures.</p><h2><strong>Your Day, Your Way</strong></h2><p>With the convenience of choosing your own pickup time and the comfort of a private driver, our Cambridge tour offers a fully customizable and intimate experience. Immerse yourself in the beauty and history of Cambridge without the hassle of navigating crowds or public transport. This 8-hour tour is not just a trip but a journey through time, offering insights into the rich tapestry of English history and academia.</p><p>Book your Cambridge tour today and experience the elegance and legacy of Cambridge at your own pace, with the luxury of personalized service that meets your every need.</p>",
    "distance": "540 mile",
    "duration": "9 hours",
    "quotationOptions": [
        {
            "token": "d515a8547c2c1c67dad38eda2b27280d3e768e1c2c1f4d38b3f9cc34093391a30d3f47d7cad0d76d37498a478b65c94235716a0464d54f05c9fd13cc028f118fd6f8eb53914bb6448a99692637fc4ae4a363bdc647f07a5ab16c77d742fc3560e076d645424831e5244f852217ae20274089f7f387adde89df93d71a3c95fe7fcaff9af0488eea713e9f289b1c3bdf04c87035f52295a66c6a2369222c6a5ff2c7851ceebf32bb4d1b67f912203e2486",
            "price": "129.00",
            "carId": 1
        },
        {
            "token": "d515a8547c2c1c67dad38eda2b27280d49857800b0770a9558895dd9bb800828f6a380dda1e611e82b24ef0abd0f12b0c8f497d97ed782b019823511124f38a1a38774df0df0bdc250aeb073599e2543be7ab32df23ec391f9e993494208101f6f9c5761c324ccb91349261fab0973e986dd26b1ec14ef23fbbfbe4733d9f1a9ba9da1602b868e21341b50591ece2f02c2c8d3d05b522fcd1fbce673b7f048dff3658d1e168d7510ea6b515e59294130",
            "price": "504.00",
            "carId": 2
        },
        {
            "token": "d515a8547c2c1c67dad38eda2b27280d521aef3de193b7b33ab1e5d4bdefd98d46ff6ff2bb387901a096eb41b434c0f96a18852694d3de085b21e7d01d5337bfd467a748f8144e9c5c2c73eecf043a41bbbcd22173dd66c98007e3a3f5cc5be3bdb409299c3c182b622edf60c57dc8bf195477723a527c1d59ac2da1777960cf975fa59b01554e01c890b636436e4f03defd0bd11c70662dec99d817456261e93a4d5d3c7d691dede66e991aa180c35c",
            "price": "604.00",
            "carId": 3
        },
        {
            "token": "d515a8547c2c1c67dad38eda2b27280dd81036aaf0a0e7cc307a5af8f04d7ebf45c2555d274d4e7db17e86bcf7edcf16a2d7b4ec0743e4d21e7d5fd64a4517431e96e6db472738930b665d37b90232ab326c79545b6d2dff453062d2b2ad331890286c963bcb4496406b95b4bc783ba6fa82620b9c9b190dbd3eeec324f44efb0d6570b0c95b5371401a0aa3418aa9d7b256fa80ca68e5065350498809db5bf2158243a7455bf17364a4894954c34f2918d4834e1c995f5bea447e9ebb83d75b",
            "price": "750.00",
            "carId": 18
        }
    ]
}
const TourContentDetails = (props) => {

    if (props.data === 'not found') {
        return <Error404 />
    }
    let { env } = props
    let {
        duration,
        headTitle,
        keywords,
        metaDescription,
        pageContent,
        breadcrumbTitle,
        thumbnailTitle,
        pageTitle,
        review,
        quotationOptions,
        images,
        snapshots,
        shortDescription
    } = data

    const [shouldShowModal, setshouldShowModal] = useState(false)
    const [index, setIndex] = React.useState(0);
    const [sliderItems, setsliderItems] = useState([])
    const [loadAlert, setLoadAlert] = useState(true)

    const tourActionState = useSelector(state => state.tourActions)
    let { seatLists, seatListPrice } = tourActionState

    const { appData } = useSelector(state => state.initialReducer)
    let { params: { language, direction }, reservations } = useSelector((state) => state.pickUpDropOffActions)
    let transferDate = reservations[0]?.transferDetails?.transferDateTimeString
    const dispatch = useDispatch()

    const router = useRouter()
    const gotoPreviousSlider = () => setIndex(index - 1)
    const gotoNextSlider = () => setIndex(index + 1)

    const onchangeDate = (params = {}) => {
        let { value, hourOrMinute, } = params
        dispatch({ type: 'SET_JOURNEY_DATETIME', data: { journeyType: 0, hourOrMinute, value } })
    }
    const handleDecrement = (idx, incordec) => dispatch({ type: 'SET_TOUR_SEATLISTS', data: { idx, incordec } })
    const handleIncrement = (idx, incordec) => dispatch({ type: 'SET_TOUR_SEATLISTS', data: { idx, incordec } })
    const handleBookNow = () => {

        let selectedTour = {
            quotationOptions,
            images,
            desc: shortDescription,
            duration,
            price: 124,
            // urlImage: quotationImagesObjWebp[quotation?.carId]?.image,  //!We can show here selected tpur image on the tour customer derails (OPTIONAL)
            title: pageTitle
        }
        if (+seatListPrice > 0) {
            dispatch({ type: "SET_TOUR_QUOTATION", data: { selectedTour } })
            router.push(`${language === 'en' ? "/tour_customer_details" : `${language}/tour_customer_details`}`)
        } else {
            alert('Please select adults')
        }
    }

    const onChangeSetDateTimeHandler = (params = {}) => {
        let { value, hourOrMinute, } = params
        // dispatch({ type: 'SET_TOUR_DATETIME', data: { hourOrMinute, value } })
        dispatch({ type: 'SET_JOURNEY_DATETIME', data: { journeyType: 0, hourOrMinute, value } })
    }

    useEffect(() => { setsliderItems(images) }, [])
    useEffect(() => {
        if (loadAlert) setTimeout(() => { setLoadAlert(false) }, 550);
    }, [language]);

    useEffect(() => {
        const lastIndex = sliderItems.length - 1;
        if (index < 0) setIndex(lastIndex);
        if (index > lastIndex) setIndex(0);
    }, [index, sliderItems]);

 

    return (
        <GlobalLayout >
            <div className={`page ${styles.page} `}>


                {/*//! for entry breadcrumb  starting*/}
                <div className={`${styles.descriptions}`}>
                    <div className={`page_section`}>
                        <div className={`page_section_container ${styles.page_section_container}`} >
                            <div className={styles.links}>
                                <p>
                                    <a href="/">{appData?.words["strNavHome"]}</a>
                                </p>
                                <p> {`>`} </p>
                                <p>
                                    <a href="/tours">
                                        {breadcrumbTitle}
                                    </a>
                                </p>
                                {loadAlert ? <></> : <p > {`>`} </p>}
                                {loadAlert ? "..." : <p >{thumbnailTitle} </p>}
                            </div>
                        </div>
                    </div>
                </div>
                {/*//! for entry breadcrumb  finishing*/}

                <div className={`page_section ${styles.page_section} `}  >
                    <div className={`page_section_container ${styles.page_section_container} `} style={{ display: "flex", flexDirection: "column" }} >
                        <div className={styles.wrapper}>

                            {/* //! for title_div_mobile  starting*/}
                            <div className={`${styles.title_div_mobile}`}>
                                <h1>{pageTitle} </h1>
                                <div className={styles.title_div_mobile_description}>
                                    <a href="https://www.reviews.co.uk/company-reviews/store/airport-pickups-london-com" target={"_blank"} title="Airport Pickups London Reviews" className={styles.reviews} rel="noreferrer"   >
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star-half-stroke"></i>
                                        <span>{review} {appData?.words["strReviews"]}</span>
                                    </a>
                                </div>
                            </div>
                            {/* //! for title_div_mobile  finishing*/}


                            {/* //! for images starting */}
                            {/* Slider images here  IT ISn ot gonna be visible on mobile*/}
                            <div className={styles.images}>
                                <div className={styles.images_content}>
                                    {Array.isArray(sliderItems) && sliderItems.slice(0, 4).map((item, index) => (
                                        <div key={index} className={styles.gallery_grid}>
                                            {loadAlert ? (
                                                <div style={{ height: index === 0 ? "100%" : "200px", background: "#eae6e6" }}>
                                                    <Skeleton width={"100%"} height="100%" />
                                                </div>)
                                                :
                                                (<img src={item} alt={item} />)}
                                            {/* If it's the last item, render the button */}
                                            {index === 3 && (
                                                <div className={styles.container_auto_center}>
                                                    <div className={styles.intro}>
                                                        <Button
                                                            type={BUTTON_TYPES.PRIMARY}
                                                            onBtnClick={() => setshouldShowModal(true)}
                                                            style={{ padding: '8px 14px' }}
                                                            btnText={appData?.words["strSeeAllPhotos"]}
                                                        />
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* //! for images finisng */}


                            {/* //! mobile  slider and snapshot contents starting  */}
                            {/*display block at the 700px =>for mobile visible*/}
                            <div className={styles.content} >
                                <div className={styles.slider_for_mobile}>
                                    {loadAlert ? <div style={{ width: "100%", height: "300px", background: "#eae6e6" }}>
                                        <Skeleton width={"100%"} height="100%" />
                                    </div> : <Slider appData={appData} setshouldShowModal={setshouldShowModal} index={index} gotoPreviousSlider={gotoPreviousSlider} gotoNextSlider={gotoNextSlider} sliderItems={sliderItems} />}
                                </div>
                                <ReusableModal shouldShowModal={shouldShowModal} onRequestClose={() => { setshouldShowModal(false) }} >
                                    <Slider appData={appData} gotoPreviousSlider={gotoPreviousSlider} gotoNextSlider={gotoNextSlider} insideModal={true} index={index} sliderItems={sliderItems} />
                                    <div className={styles.navigation_modal_slider}>
                                        <span className={styles.prev_btn} onClick={gotoPreviousSlider}>
                                            <i className="fa-solid fa-chevron-left"></i>
                                        </span>
                                        <span className={styles.next_btn} onClick={gotoNextSlider}>
                                            <i className="fa-solid fa-chevron-right"></i>
                                        </span>
                                    </div>
                                </ReusableModal>

                                <div className={styles.title_content_for_desktop}>
                                    <div className={styles.title_div}>
                                        {loadAlert ? <h1>
                                            <div style={{ width: "100%", height: "100%", background: "#eae6e6" }}>
                                                <Skeleton width={"100%"} height="100%" />
                                            </div>
                                        </h1> : <h1>{pageTitle} </h1>}
                                        <div className={styles.title_div_description}>
                                            <a href="https://www.reviews.co.uk/company-reviews/store/airport-pickups-london-com" target={"_blank"} title="Airport Pickups London Reviews" className={styles.reviews} rel="noreferrer"   >
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star-half-stroke"></i>
                                                <span>{review} {appData?.words["strReviews"]}</span>
                                            </a>

                                        </div>
                                    </div>
                                    <div className={styles.start_from_price_btn_div}>
                                        <div className={styles.start_from_price_btn_div_content}>
                                            {appData?.words["strStartFrom"]}
                                            {loadAlert ?
                                                <span style={{ width: "100%", height: "100%", background: "#eae6e6" }}>
                                                    <Skeleton width={"100%"} height="100%" />
                                                </span>
                                                : <span >£ {quotationOptions[0].price}</span>}
                                        </div>
                                        <Button
                                            type={BUTTON_TYPES.PRIMARY_OUTLINE}
                                            style={{ padding: '6px 5px' }}
                                            btnText={allTranslations.strPerPerson[language]}
                                            icon={<i className="fa-solid fa-arrow-down"></i>}
                                            iconPos='RIGHT' />
                                    </div>
                                </div>
                                <h3 className={styles.snapshot_title}>
                                    {appData?.words["strTourSnapshot"]}
                                </h3>
                                <div className={styles.snapshot_icons_content}>
                                    {Array.isArray(snapshots) && snapshots.slice(0, 4).map((snapshot, index) => (
                                        <div key={index} className={styles.snapshot_icons_div}>
                                            <i className={`${snapshot.icon}`}></i>
                                            <div className={styles.snapshot_icons_div_description}>
                                                {loadAlert ? "..." : index === 2 ? appData?.words["strLuxuryCars"] : appData?.words[snapshot.alias]}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                            {/* //! mobile  slider and snapshot contents finishing */}


                            {/* //!setlists staring */}
                            <div className={styles.form_div}>
                                <div className={styles.form_div_wrapper}>
                                    <div className={styles.adults_selection_div_columns}>
                                        {seatLists?.map((item, index) => {
                                            return <div key={index} className={styles.adults_selection_div_column}>
                                                <p className={styles.name}>
                                                    {appData?.words[item.strName]}
                                                    <span>£{item.price}</span>
                                                </p>
                                                <p className={styles.desc}>  {item.description}</p>

                                                <div className={styles.adults_selection_div_column_numbers_div} direction={String(direction === 'rtl')}>
                                                    <div className={styles.adults_selection_div_column_numbers_div_left}>
                                                        <p className={`${styles.left_arrow}`} onClick={() => handleDecrement(index, "dec")}>
                                                            <i className="fa-solid fa-chevron-left"></i>
                                                        </p>
                                                        <p className={styles.number}>  {item.minNum}  </p>
                                                        <p className={`${styles.right_arrow} `} onClick={() => handleIncrement(index, "inc")}>
                                                            <i className="fa-solid fa-chevron-right"></i>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        })}
                                    </div>
                                    <div className={styles.arrivaldate_div}>
                                        <DateInput
                                            form_control_input_div_style={{ width: "100%", maxWidth: "100%" }}
                                            showIcon={true}
                                            headingStyle={{ fontSize: "15px", }}
                                            value={splitDateTimeStringIntoDate(transferDate)[0]}
                                            min={currentDate()}
                                            title={appData?.words["strTourDate"]}
                                            onChange={(e) => onchangeDate({ value: e.target.value, hourOrMinute: "date", })}
                                        />
                                    </div>
                                    <div className={styles.time}>
                                        <div className={` ${styles.hours_minutes} `}>
                                            <p className={direction}>{appData?.words["sePickUpTime"]}</p>
                                            <div className={`${styles.select_time_div} ${direction}`}>
                                                {Array.from(new Array(2)).map((_, i) => {
                                                    return (
                                                        <div key={i} className={styles.booking_form_hour_minute_wrapper}>
                                                            <label htmlFor={i}></label>
                                                            <select
                                                                aria-label={i}
                                                                defaultValue={i === 0 ? transferDate?.split(" ")[1]?.split(":")[0] : transferDate?.split(" ")[1]?.split(":")[1]}
                                                                onChange={(e) => onChangeSetDateTimeHandler({ value: e.target.value, hourOrMinute: i === 0 ? "hour" : "minute", })}
                                                            >
                                                                {/* //if index==0 thenhours will show up if not then minutes show up */}
                                                                {i === 0
                                                                    ? hours.map((hour) => (<option key={hour.id} id={hour.id + 50} value={hour.value}> {hour.value} </option>))
                                                                    : minutes.map((minute) => (<option key={minute.id} id={minute.id} value={minute.value}  > {minute.value} </option>))}
                                                            </select>
                                                        </div>)
                                                })}
                                            </div>
                                        </div>
                                        <div className={styles.price}> {appData?.words["strTotalPrice"]}: £{seatListPrice} </div>

                                    </div>
                                </div>
                                <div className={styles.booknow_div}>
                                    <Button type={BUTTON_TYPES.PRIMARY} onBtnClick={handleBookNow} style={{ padding: '8px 24px' }} btnText={appData?.words["strBookNow"]} />
                                </div>
                            </div>
                            {/* //!setlists finisng */}

                            <div className={`${styles.page_content} `} dangerouslySetInnerHTML={{ __html: pageContent }} />
                        </div>
                    </div>
                </div>
            </div>
        </GlobalLayout>

    )
}



export async function getServerSideProps({ req, res, query }) {
    const env = await fetchConfig();
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate'); // Cache'i kapat


    // Return the object as props
    return {
        props: {

        }
    };


}

export default TourContentDetails;
