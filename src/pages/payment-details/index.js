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
let title = ""
let keywords = ""
let description = ""
const PaymentDetails = () => {
    const router = useRouter()
    let state = useSelector((state) => state.pickUpDropOffActions)
    let { reservations, params: { tokenForArchieve, direction,quotations } } = state
    const { appData } = useSelector(state => state.initialReducer)
    const carObject = appData?.carsTypes?.reduce((obj, item) => ({ ...obj, [item.id]: item, }), {});


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
        console.log({ data, stage });


    };
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

                                return (
                                    <div key={index}>
                                        <div className={`${styles.main_container}`} >
                                            <div className={styles.left}>
                                                <div className={styles.left_top_title}>
                                                    Transfer Details
                                                </div>
                                                <div className={styles.left_content_of_card}>
                                                    <PaymentPageSummary
                                                        index={index}
                                                        email={passengerDetails.email}
                                                        phone={passengerDetails.phone}
                                                        specialRequests={specialRequests}
                                                        passengersNumber={passengersNumber}
                                                        firstname={passengerDetails.firstname}
                                                        selectedPickupPoints={selectedPickupPoints}
                                                        selectedDropoffPoints={selectedDropoffPoints}
                                                    />

                                                    <div className={styles.image_div}>
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
                                                    <div className={styles.car_info}>
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
                                                </div>
                                            </div>
                                            <div className={styles.right}>
                                                <div className={styles.right_top_title}>
                                                    Passenger details
                                                </div>

                                                <div className={styles.passenger_details}>
                                                    <div className={styles.card_info}>
                                                        <div className={styles.info}>
                                                            <ul>
                                                                <li>
                                                                    <div className={styles.details}>
                                                                        <div className={styles.details_headerr_li}>
                                                                            <div className={styles.li_info}>
                                                                                <i className="fas fa-user" aria-hidden="true"></i>
                                                                                <p className={styles.property}>Full Name</p>
                                                                            </div>
                                                                            <p className={styles.value}>:{passengerDetails.firstname}</p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className={styles.details}>
                                                                        <div className={styles.details_headerr_li}>
                                                                            <div className={styles.li_info}>
                                                                                <i className="fas fa-at" aria-hidden="true"></i>
                                                                                <p className={styles.property}>Email Address</p>
                                                                            </div>
                                                                            <p className={styles.value}>:{passengerDetails.email}</p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className={styles.details}>
                                                                        <div className={styles.details_headerr_li}>
                                                                            <div className={styles.li_info}>
                                                                                <i className="fas fa-phone" aria-hidden="true"></i>
                                                                                <p className={styles.property}>Phone Number</p>
                                                                            </div>
                                                                            <p className={styles.value}>:+{passengerDetails.phone}</p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className={styles.details}>
                                                                        <div className={styles.details_headerr_li}>
                                                                            <div className={styles.li_info}>
                                                                                <i className="fas fa-users" aria-hidden="true"></i>
                                                                                <p className={styles.property}>Passengers</p>
                                                                            </div>
                                                                            <p className={styles.value}>:{passengersNumber}</p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                    

                                                                <li>
                                                                    <div className={`${styles.details} `}>
                                                                        <div className={styles.details_headerr_li}>
                                                                            <div className={styles.li_info}>
                                                                                <i className="fas fa-calendar-alt" aria-hidden="true" ></i>
                                                                                <p className={styles.property}>Landing Date :</p>
                                                                            </div>
                                                                            <p className={styles.value}>:{`${splitedDate.split(" ")[0].replace(/(\d+)\-(\d+)-(\d+)/, "$3-$2-$1")} `}</p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className={`${styles.details} `}>
                                                                        <div className={styles.details_headerr_li}>
                                                                            <div className={styles.li_info}>
                                                                                <i className="fas fa-clock" aria-hidden="true"></i>
                                                                                <p className={styles.property}>Landing Time :</p>
                                                                            </div>
                                                                            <div className={styles.value}>{`${splitedHour} : ${splitedMinute}`}</div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                         
                                                                <li>
                                                                    <div className={`${styles.details} `}>
                                                                        <div className={styles.details_headerr_li}>
                                                                            <div className={styles.li_info}>
                                                                            <i className="fa-solid fa-road"></i>
                                                                                <p className={styles.property}>Distance :</p>
                                                                            </div>
                                                                            <div className={styles.value}>{quotations[index].distance}</div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className={`${styles.details} `}>
                                                                        <div className={styles.details_headerr_li}>
                                                                            <div className={styles.li_info}>
                                                                            <i className="fa-solid fa-clock-rotate-left"></i>
                                                                                <p className={styles.property}>Duration :</p>
                                                                            </div>
                                                                            <div className={styles.value}>{quotations[index].duration}</div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className={`${styles.details} `}>
                                                                        <div className={styles.details_headerr_li}>
                                                                            <div className={styles.li_info}>
                                                                                <i className="fas fa-car" aria-hidden="true"></i>
                                                                                <p className={styles.property}>Transfer Type :</p>
                                                                            </div>
                                                                            <div className={styles.value}>{carObject[quotation.carId]?.name}</div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                              
                                                                    <li>
                                                                        <div className={styles.details}>
                                                                            <div className={styles.details_headerr_li}>
                                                                                <div className={styles.li_info}>
                                                                                    <i className="fa-solid fa-comment"></i>
                                                                                    <p className={styles.property}>Notes</p>
                                                                                </div>
                                                                                <p className={styles.value}>:{specialRequests}</p>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                
                                                            </ul>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                            <PaymentMethods />
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