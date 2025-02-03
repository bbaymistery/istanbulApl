import React, { useEffect, useState } from 'react'
import { urlWithLangAtribute } from '../../helpers/urlWithLangAtrribute'
import { Router, useRouter } from "next/router";
import { useSelector } from 'react-redux'
import store from '../../store/store';
import { createWrapper } from 'next-redux-wrapper';
import styles from "./styles.module.scss"
import GlobalLayout from '../../components/layouts/GlobalLayout';
import PaymentPageSummary from '../../components/elements/PaymentPageSummary'
import PaymentMethods from '../../components/elements/PaymentMethods'
import { splitDateTimeStringIntoDate, splitDateTimeStringIntoHourAndMinute } from '../../helpers/splitHelper';
import { quotationImagesObjWebp } from '../../constants/quotationImages';
import Image from 'next/image';
import { useWindowSize } from '../../hooks/useWindowSize';
let title = ""
let keywords = ""
let description = ""
const PaymentDetails = (props) => {
    let { env } = props

    const router = useRouter()
    let state = useSelector((state) => state.pickUpDropOffActions)
    let { reservations, params: { tokenForArchieve, direction, quotations, language } } = state


    const { appData } = useSelector(state => state.initialReducer)
    const carObject = appData?.carsTypes?.reduce((obj, item) => ({ ...obj, [item.id]: item, }), {});

    const tourActionState = useSelector(state => state.tourActions) || {}; // Add a fallback to an empty object
    let { selectedTour, seatLists, seatListPrice } = tourActionState;
    const numberOfAdults = seatLists[0].minNum
    const numberOfChildren = seatLists[1].minNum
    const numberOfInfants = seatLists[2].minNum

    const { nexturls, previousUrls, currentUrls } = urlWithLangAtribute({ languages: appData.languages, previousUrl: "/transfer-details", nextUrl: "/reservations-document", currentUrl: router.asPath })
    // const confirmationAlert = useConfirm({ previousUrl: previousUrls, nextUrl: nexturls, currentUrls, message: "If you refresh the page, all data will be deleted." })

    const [confirmation, setConfirmation] = useState(true);

    //passenger landing payment page We need archieveToken
    const fetchArchieveToken = async (params = {}) => {
        let { stage, } = params

        const method = "POST"
        const reservationObj = reservations
        const url = `${env.apiDomain}/api/v1/sessions/add`;
        const headers = { "Content-Type": "application/json" }
        const body = JSON.stringify({ token: tokenForArchieve, details: reservationObj, stage })
        const response = await fetch(url, { method, body, headers, });
        const data = await response.json();


    };

    let size = useWindowSize();
    let { width } = size
    // prompt the user if they try and leave with unsaved changes
    useEffect(() => {
        const confirmationMessage = "If you leave the page, all data will be deleted.";
        // This function will be triggered when the user tries to leave the page
        const beforeUnloadHandler = async (e) => {
            // When we click to close the browser
            // setTimeout(() => { fetchArchieveToken({ stage: "PLAN_TO_CLOSE_PAYMENT_PAGE" }) }, 10);

            // In case it is cancelled
            if (window.event.cancelable) {
                // setTimeout(() => { fetchArchieveToken({ stage: "PAYMENT_PAGE_NOT_CLOSED" }) }, 450);
            }

            if (confirmation) {
                (e || window.event).returnValue = confirmationMessage;
                return confirmationMessage;
            }
        };

        // This function will be triggered when the user tries to navigate to another page
        const beforeRouteHandler = (url) => {

            if (confirmation) {
                if (nexturls.includes(url) || previousUrls.includes(url) || currentUrls.includes(url)) {
                    setConfirmation(false);
                    return;
                } else {
                    setConfirmation(true);
                }

                if (Router.pathname !== url && !confirm(confirmationMessage)) {
                    Router.events.emit("routeChangeError");
                    throw `Route change to "${url}" was aborted (this error can be safely ignored). See https://github.com/zeit/next.js/issues/2476.`;
                }
            }
        };

        // This function is triggered when the user closes the browser or reloads the page
        const handleEndConcert = async () => {
            const headers = new Headers();
            headers.append("Content-Type", "application/json");
            const method = "POST";
            const reservationObj = reservations;
            const url = `${env.apiDomain}/api/v1/sessions/add`;
            const body = JSON.stringify({ token: tokenForArchieve, details: reservationObj, stage: "PAYMENT_PAGE_IS_CLOSED" });
            const response = await fetch(url, { method, body, headers, keepalive: true });
            const data = await response.json();
        };
        // Add event listeners to handle the above functions
        window.addEventListener("beforeunload", beforeUnloadHandler);
        window.addEventListener('unload', handleEndConcert);
        Router.events.on("routeChangeStart", beforeRouteHandler);

        // Remove the event listeners when the component is unmounted
        return () => {
            window.removeEventListener("beforeunload", beforeUnloadHandler);
            window.removeEventListener('unload', handleEndConcert);
            Router.events.off("routeChangeStart", beforeRouteHandler);
        };
    }, [confirmation]);



    return (
        <GlobalLayout keywords={keywords} title={title} description={description} >
            <div className={`${styles.payment_details} page`}>
                <div className={`${styles.payment_details_section} page_section`}>
                    <div className={`${styles.payment_details_section_container} page_section_container`}>
                        {/* strTotalPrice */}
                        <div className={styles.payment_details_section} >
                            {reservations.map((obj, index) => {
                                let { transferDetails, quotation, selectedPickupPoints, selectedDropoffPoints, passengerDetails } = obj
                                let { transferDateTimeString, passengersNumber, specialRequests } = transferDetails
                                const [splitedHour, splitedMinute] = splitDateTimeStringIntoHourAndMinute(transferDateTimeString) || []
                                const [splitedDate] = splitDateTimeStringIntoDate(transferDateTimeString) || []
                                //here will be visible when passenger comes from home page
                                const passengerDetailsConfig = [
                                    {
                                        icon: "fas fa-user",
                                        label: appData.words["appContactUsFormFullname"],
                                        value: passengerDetails.firstname,
                                    },
                                    {
                                        icon: "fas fa-at",
                                        label: appData.words["strEmailAddress"],
                                        value: passengerDetails.email,
                                    },
                                    {
                                        icon: "fas fa-phone",
                                        label: appData.words["appContactUsFormPhone"],
                                        value: `+${passengerDetails.phone}`,
                                    },
                                    {
                                        icon: "fas fa-users",
                                        label: appData.words["strPassengers"],
                                        value: passengersNumber,
                                    },
                                    {
                                        icon: "fas fa-calendar-alt",
                                        label: appData.words["strOn"],
                                        value: splitedDate.split(" ")[0].replace(/(\d+)\-(\d+)-(\d+)/, "$3-$2-$1"),
                                    },
                                    {
                                        icon: "fas fa-clock",
                                        label: appData.words["strTime"],
                                        value: `${splitedHour} : ${splitedMinute}`,
                                    },
                                    {
                                        icon: "fa-solid fa-road",
                                        label: appData.words["strDistance"],
                                        value: quotations[index]?.distance,
                                    },
                                    {
                                        icon: "fa-solid fa-clock-rotate-left",
                                        label: appData.words["strDuration"],
                                        value: quotations[index]?.duration,
                                    },
                                    {
                                        icon: "fas fa-car",
                                        label: appData.words["carsTransferType"],
                                        value: carObject[quotation.carId]?.name,
                                    },
                                    {
                                        icon: "fa-solid fa-comment",
                                        label: appData.words["strNotes"],
                                        value: specialRequests,
                                    },
                                ];
                                const toursPassengerDetailsConfig = [
                                    {
                                        icon: "fas fa-user",
                                        label: appData.words["appContactUsFormFullname"],
                                        value: passengerDetails.firstname,
                                    },
                                    {
                                        icon: "fas fa-at",
                                        label: appData.words["strEmailAddress"],
                                        value: passengerDetails.email,
                                    },
                                    {
                                        icon: "fas fa-phone",
                                        label: appData.words["appContactUsFormPhone"],
                                        value: `+${passengerDetails.phone}`,
                                    },
                                    {
                                        icon: "fas fa-calendar-alt",
                                        label: appData.words["strOn"],
                                        value: splitedDate.split(" ")[0].replace(/(\d+)\-(\d+)-(\d+)/, "$3-$2-$1"),
                                    },
                                    {
                                        icon: "fas fa-clock",
                                        label: appData.words["strTime"],
                                        value: `${splitedHour} : ${splitedMinute}`,
                                    },
                                    {
                                        icon: "fa-solid fa-comment",
                                        label: appData.words["strNotes"],
                                        value: specialRequests,
                                    },
                                    {
                                        icon: "fa-solid fa-landmark",
                                        label: appData.words["strYouSelected"],
                                        value: selectedTour[0]?.pageTitle[language] ? selectedTour[0]?.pageTitle[language] : "",
                                    },
                                    {
                                        icon: "fa-solid fa-user",
                                        label: appData.words["strAdults"],
                                        value: numberOfAdults,
                                    },
                                    {
                                        icon: "fa-solid fa-child",
                                        label: appData.words["strChildren"],
                                        value: numberOfChildren,
                                    },
                                    {
                                        icon: "fa-solid fa-baby",
                                        label: appData.words["strInfants"],
                                        value: numberOfInfants,
                                    }
                                ];
                                return (
                                    <div key={index}>
                                        <div className={`${styles.main_container}`} >
                                            <div className={styles.left}>
                                                <div className={styles.left_top_title}>
                                                    {index === 0 ? appData?.words["strYourBookingDetails"] : appData?.words["strReturnJourneyDetails"]}
                                                </div>
                                                <div className={styles.left_content_of_card}>
                                                    <div className={styles.show_ondestkop}>
                                                        <PaymentPageSummary selectedPickupPoints={selectedPickupPoints} selectedDropoffPoints={selectedDropoffPoints} />
                                                    </div>
                                                    {selectedTour?.length > 0 ? <></> :
                                                        (<div className={styles.image_div}>
                                                            <div className={styles.names}>
                                                                <div className={styles.text_1} style={{ textTransform: 'capitalize' }}>
                                                                    {appData?.words["strYouSelected"]}
                                                                </div>
                                                                <div className={styles.text_2} style={{ textTransform: 'capitalize' }}>
                                                                    {carObject[quotation.carId]?.name}
                                                                </div>
                                                            </div>
                                                            <div className={styles.image}>
                                                                <img src={`${quotationImagesObjWebp[quotation?.carId]?.image}`} alt="" />
                                                            </div>
                                                        </div>
                                                        )}
                                                    {selectedTour?.length > 0 ? <></> :
                                                        (<div className={styles.car_info}>
                                                            <div className={styles.type}>
                                                                {carObject[quotation.carId]?.transferType}
                                                            </div>
                                                            <div className={styles.icons}>
                                                                <div className={styles.icon_div}>
                                                                    <i className="fa-solid fa-user"></i>
                                                                    {carObject[quotation.carId].pax}

                                                                </div>
                                                                <div className={styles.icon_div}>
                                                                    <i className="fa-solid fa-suitcase"></i>
                                                                    {carObject[quotation.carId].suitcases}
                                                                </div>
                                                                <div className={styles.icon_div}>
                                                                    <i className="fa-solid fa-door-open"></i>
                                                                    4
                                                                </div>
                                                                <div className={styles.icon_div}>
                                                                    <i className="fa-solid fa-gear"></i>
                                                                    A
                                                                </div>
                                                            </div>
                                                        </div>
                                                        )}

                                                    {/* we r adding manually tour imagebut it willbe dynamic when we select selected tour */}
                                                    {selectedTour?.length > 0 ?
                                                        <div className={styles.tour_image_div}  >
                                                            <Image
                                                                src={selectedTour[0]?.images[0]}
                                                                className={styles.img}
                                                                fill
                                                                alt={"tem.headTitle"}
                                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                            />
                                                        </div> : <></>}
                                                </div>
                                            </div>
                                            <div className={styles.right}>
                                                <div className={styles.right_top_title}>
                                                    {index === 0 ? appData?.words["strPassengerDetails"] : appData?.words["strReturnJourneyPassengerDetails"]}
                                                </div>

                                                <div className={styles.passenger_details}>
                                                    <div className={styles.card_info}>
                                                        <div className={styles.info}>
                                                            <ul>
                                                                {/* name email phone and passengers  here visible if u come from home page 
                                                                but for tours all are togther
                                                                */}
                                                                {
                                                                    (selectedTour?.length > 0 ? toursPassengerDetailsConfig.slice(0, 4) : passengerDetailsConfig.slice(0, 4)).map((detail, idx) => (
                                                                        // simply we dont add boder bottom for last element of toursPassengerDetailsConfig
                                                                        <li key={idx} >
                                                                            <div className={styles.details}>
                                                                                <div className={`${styles.details_headerr_li} ${direction}`}>
                                                                                    <div className={styles.li_info}>
                                                                                        <i className={detail.icon} aria-hidden="true"></i>
                                                                                        <p className={styles.property}>{detail.label}</p>
                                                                                    </div>
                                                                                    <p className={styles.value}>:{detail.value}</p>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                    ))
                                                                }
                                                                {width <= 990 ? <li className={styles.show_onmobile}>
                                                                    <PaymentPageSummary selectedPickupPoints={selectedPickupPoints} selectedDropoffPoints={selectedDropoffPoints} showIcon={true} />
                                                                </li> : <></>}

                                                                {/* name email phone and passengers  here visible */}
                                                                {
                                                                    (selectedTour?.length > 0 ? toursPassengerDetailsConfig : passengerDetailsConfig)
                                                                        .slice(4).map((detail, idx) => (
                                                                            <li key={idx}>
                                                                                <div className={styles.details}>
                                                                                    <div className={`${styles.details_headerr_li} ${direction}`}>
                                                                                        <div className={styles.li_info}>
                                                                                            <i className={detail.icon} aria-hidden="true"></i>
                                                                                            <p className={styles.property}>{detail.label}</p>
                                                                                        </div>
                                                                                        <p className={styles.value}>{`:${detail.value}`}</p>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                        ))
                                                                }



                                                            </ul>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                            <PaymentMethods env={env} seatListPrice={seatListPrice} />
                        </div>
                    </div>
                </div>
            </div>
        </GlobalLayout>
    )
}

export default PaymentDetails
const makestore = () => store;
const wrapper = createWrapper(makestore);

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req, res, ...etc }) => {
    const initialLanguages = store.getState().initialReducer?.appData?.languages
    const langs = initialLanguages.map((lang) => lang.value)

    for (let i = 0; i < langs.length; i++) {
        const lang = langs[i]
        const langUrl = lang === 'en' ? '/payment-details' : `/${lang}/payment-details`
        if (req.url === langUrl) {
            return {
                redirect: {
                    destination: lang === 'en' ? "/" : `/${lang}`,
                    permanent: false
                }
            }
        }
    }


    return {
        props: {
            data: ''
        }
    }


});