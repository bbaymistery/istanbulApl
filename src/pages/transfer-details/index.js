import React, { useState } from 'react';
import styles from "./styles.module.scss";
import { currentDate } from '../../helpers/getDates'
import store from '../../store/store';
import PhoneInput from 'react-phone-input-2';
import InfoModal from '../../components/elements/InfoModal/InfoModal'
import FlightWaitingTimeContent from '../../components/elements/FlightWaitingTimeContent';

import 'react-phone-input-2/lib/style.css'
import { useRouter } from 'next/router';
import { urlWithLangAtribute } from '../../helpers/urlWithLangAtrribute'
import SelectedPointsOnHomePage from '../../components/elements/SelectedPointsOnHomePage'
import { useDispatch, useSelector } from 'react-redux';
import { reservationSchemeValidator } from '../../helpers/reservationSchemeValidator';
import { ifHasUnwantedCharacters } from '../../helpers/ifHasUnwantedCharacters';
import GlobalLayout from '../../components/layouts/GlobalLayout';
import { createWrapper } from 'next-redux-wrapper';
let description = "We specialize in airport transfer shuttle service. We can provide you with a chauffeur driven car to and from all major London airports. The airports include Heathrow, Gatwick, Stanstead, Luton and City airport.!"
let title = "Results Airport Transfers London Airport Pickups"
let keywords = " London airport transfers, London airport transfer, heathrow airport transfer, Gatwick airport transfer, stansted airport transfer, luton airport transfer, shuttle service, shuttle services, airport shuttle services, airport transfer shuttle service,  airport taxi service, taxi services, cab services, airport taxi service, London airport, airport transport, luton airport transport, London airport transportation, London shuttle services, Gatwick airport shuttle service, Heathrow airport shuttle service, Luton airport shuttle service, Stansted airport shuttle service, London airport taxi transfer, London airport shuttle, airport transfers London, airport transfers, chauffeur driven car, chauffeur driven cars, airport pick up and drop."
const collectPoints = (params = {}, callback = () => { }) => {

    let { value = '', reducerSessionToken = "", language = "" } = params;
    const url = `${env.apiDomain}/api/v1/suggestions`;
    const method = "POST"
    const headers = { "Content-Type": "application/json" }
    const body = JSON.stringify({ value, "session-token": reducerSessionToken, language })
    const config = { method, headers, body }

    fetch(url, config)
        .then((res) => res.json())
        .then((res) => { callback(res) })
        .catch((error) => {
            let message = "APL   Hero component _collectPoints()  function catch blog "
            window.handelErrorLogs(error, message, { config })
        });
}
const collectPointsAsync = params => new Promise((resolve, reject) => collectPoints(params, log => resolve(log)))

const TransferDetails = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    let state = useSelector((state) => state.pickUpDropOffActions)
    let { reservations, params: { passengerDetailsStatus, modalInfo, direction, quotations, sessionToken: reducerSessionToken, language, journeyType } } = state

    const { appData } = useSelector(state => state.initialReducer)
    //we use it to render paxs inside select component
    const carObject = appData?.carsTypes?.reduce((obj, item) => ({ ...obj, [item.id]: item, }), {});

    const objectDetailss = appData?.pointTypeCategories?.reduce((obj, item) => ({ ...obj, [item.id]: JSON.parse(item.objectDetails), }), {});
    const imageObjects = appData?.pointTypeCategories?.reduce((obj, item) => ({ ...obj, [item.id]: item.image, }), {});
    const { nexturls, previousUrls, currentUrls } = urlWithLangAtribute({ languages: appData.languages, previousUrl: localStorage.getItem("path"), nextUrl: "/payment-details", currentUrl: router.asPath })
    const [pickupIdForImage, setpickupIdForImage] = useState(null)
    const [dropoffIdFormImage, setdropoffIdFormImage] = useState(null)
    const [errorDropoffSelectBox, setErrorDropoffSelectBox] = useState(false)
    const [errorPickUpSelectBox, setErrorPickUpSelectBox] = useState(false)
    let [internalState, setInternalState] = React.useReducer((s, o) => ({ ...s, ...o }), {
        'errorHolder': [],
        'pickup-search-value-0': '',
        'dropoff-search-value-0': '',
        'collecting-pickup-points-0': [],
        'collecting-dropoff-points-0': [],
        //focus
        'pickup-search-focus-0': false,//it is for modal
        'dropoff-search-focus-0': false,//it is for modal

        'pickup-search-loading-0': false,
        'dropoff-search-loading-0': false,

        //quotation loading
        "quotation-loading": false,
    })
    let { errorHolder } = internalState;


    const checkValidation = (e) => {
        let errorHolder = reservationSchemeValidator({ reservations, appData }, { checkTransferDetails: true });
        setInternalState({ errorHolder })
        if (errorHolder.status === 200) router.push(`${language === 'en' ? "/payment-details" : `${language}/payment-details`}`)
    }
    //for passengers information
    const onchangeHandler = (e, index) => {
        let { name, value } = e.target;
        //hinder user  to add some Characters
        if (ifHasUnwantedCharacters(value)) return

        if (['firstname', 'email',].includes(name))
            dispatch({ type: 'SET_PASSEGER_DETAILS', data: { name, value, index, updateBothJourneyCheckBox: passengerDetailsStatus } })

        if (['passengersNumber', "specialRequests"].includes(name))
            dispatch({ type: 'SET_TRANSFER_DETAILS', data: { name, value, index, updateBothJourneyCheckBox: passengerDetailsStatus } })

    }
    const onChangeSetDateTimeHandler = (params = {}) => {
        let { value, hourOrMinute, journeyType } = params
        dispatch({ type: 'SET_JOURNEY_DATETIME', data: { journeyType, hourOrMinute, value } })
    }
    return (
        <GlobalLayout keywords={keywords} title={title} description={description} >
            <div className={`${styles.tr_details} page`}>
                <div className={`${styles.tr_details_section} page_section`}>
                    <div className={`${styles.tr_details_section_container} page_section_container`}>
                        salam
                        \
                        {modalInfo ? <InfoModal content={<FlightWaitingTimeContent />} /> : <React.Fragment></React.Fragment>}

                    </div>
                </div>
            </div>
        </GlobalLayout>
    )
}

export default TransferDetails
const makestore = () => store;
const wrapper = createWrapper(makestore);

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req, res, ...etc }) => {
    const initialLanguages = store.getState().initialReducer?.appData?.languages
    const langs = initialLanguages.map((lang) => lang.value)

    // for (let i = 0; i < langs.length; i++) {
    //     const lang = langs[i]
    //     const langUrl = lang === 'en' ? '/transfer-details' : `/${lang}/transfer-details`
    //     if (req.url === langUrl) {
    //         return {
    //             redirect: {
    //                 destination: lang === 'en' ? "/" : `/${lang}`,
    //                 permanent: false
    //             }
    //         }
    //     }
    // }
    // const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    // const geo = geoip.lookup(ip);

    return {
        props: {
            data: ""
        }
    }


});