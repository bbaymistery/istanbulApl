import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState, } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardQuotationItem from '../../components/elements/CardQuotationItem'
import GlobalLayout from '../../components/layouts/GlobalLayout'
import { ifHasUnwantedCharacters } from '../../helpers/ifHasUnwantedCharacters'
import { reservationSchemeValidator } from '../../helpers/reservationSchemeValidator'
import { splitDateTimeStringIntoDate, splitDateTimeStringIntoHourAndMinute } from '../../helpers/splitHelper'
import Map from "./Map.js"
import QuotatıonInputHandleComponent from './QuotatıonInputHandler.js'
import styles from "./styles.module.scss"

import { createWrapper } from 'next-redux-wrapper'
import Button from '../../components/elements/Button/Button.js'
import { BUTTON_TYPES } from '../../components/elements/Button/ButtonTypes.js'
import store from '../../store/store'
import QuotationHourMinute from './QuotationHourMinute.js'
import QuotationInputDate from './QuotationInputDate.js'
import { readyToCollectQuotationOptions } from '../../helpers/readyToCollectQuotationOptions.js'
import { normalizeReservations } from '../../helpers/normalizeReservations.js'
let description = ""
let title = "Quotation Results APL Transfer"
let keywords = " "

const collectPoints = (params = {}, callback = () => { }) => {

    let { value = '', reducerSessionToken = "", language = "", env } = params;
    const url = `${env.apiDomain}/api/v1/suggestions`;
    const method = "POST"
    const headers = { "Content-Type": "application/json" }
    const body = JSON.stringify({ value, "session-token": reducerSessionToken, language: "en", "countryId": 203 })
    const config = { method, headers, body }

    fetch(url, config)
        .then((res) => res.json())
        .then((res) => { callback(res) })
        .catch((error) => {
            let message = "ISTANBUL Quotation result component _collectPoints()  function catch blog "
            window.handelErrorLogs(error, message, { config })
        });
}
const collectPointsAsync = params => new Promise((resolve, reject) => collectPoints(params, log => resolve(log)))
//when we click getQuotations there we check fields .If fields not empty then it will be triggering
const readyToCollectQuotations = (params = {}) => {

    (async () => {
        const startTime = performance.now(); // Start timing

        let { dispatch, setInternalState, router, journeyType, reservations, env, currencyId } = params

        setInternalState({ ["quotation-loading"]: true })
        let log = await collectQuotationsAsync({ reservations, journeyType, env, currencyId })

        //if our journey both way
        if (parseInt(journeyType) === 1) {
            let { status: status1 } = log[0]
            let { status: status2 } = log[1]
            if (status1 !== 200 && log[0]?.error?.global?.[0]) {
                setInternalState({ ["error-booking-message-0"]: log[0]?.error?.global[0] })
            }
            if (status2 !== 200 && log[1]?.error?.global?.[0]) {
                setInternalState({ ["error-booking-message-1"]: log[1]?.error?.global[0] })
            }
            if (status1 === 200 && status2 === 200) {
                pushToQuotationsResultPage({ dispatch, router, log, journeyType })
                setInternalState({ ["error-booking-message-1"]: "" })
                setInternalState({ ["error-booking-message-0"]: "" })

            }
        } else {

            let { status } = log

            if (status === 200) {
                pushToQuotationsResultPage({ dispatch, router, log, journeyType })
                setInternalState({ ["error-booking-message-0"]: "" })
            }
            if (log?.error?.global?.[0]) {
                setInternalState({ ["error-booking-message-0"]: log?.error?.global[0] })
            }
        }

        setInternalState({ ["quotation-loading"]: false })


        const endTime = performance.now(); // End timing
        console.log(`Execution time: ${(endTime - startTime).toFixed(2)} ms`);
    })()





}
//getting quotations
const collectQuotations = (params = {}, callback = () => { }) => {

    let { reservations, journeyType, env, currencyId } = params

    //transfer
    let trSelectedPickPoints = reservations[0]?.selectedPickupPoints;
    let trSelectedDroppPoints = reservations[0]?.selectedDropoffPoints;
    let transferDAteTimeString = reservations[0]?.transferDetails?.transferDateTimeString;
    //return
    let returnPickPoints = reservations[1]?.selectedPickupPoints;
    let returnDroppPoints = reservations[1]?.selectedDropoffPoints;
    let returnDAteTimeString = reservations[1]?.transferDetails?.transferDateTimeString;

    const url = `${env.apiDomain}/api/v1/quotation`;
    const method = "POST"
    const headers = { "Content-Type": "application/json" }

    const configTransfer = {
        method,
        headers,
        body: JSON.stringify({
            selectedPickupPoints: trSelectedPickPoints,
            selectedDropoffPoints: trSelectedDroppPoints,
            transferDateTimeString: transferDAteTimeString,
            "accountId": 2964,
            "currencyId": currencyId
        }),
    };


    const configReturn = {
        method,
        headers,
        body: JSON.stringify({
            selectedPickupPoints: returnPickPoints,
            selectedDropoffPoints: returnDroppPoints,
            transferDateTimeString: returnDAteTimeString,
            "accountId": 2964,
            "currencyId": currencyId
        }),
    };
    // console.log(JSON.stringify({
    //     selectedPickupPoints: trSelectedPickPoints,
    //     selectedDropoffPoints: trSelectedDroppPoints,
    //     transferDateTimeString: transferDAteTimeString,
    //     "accountId": 2964,
    //     "currencyId": currencyId
    // }));

    //check if tru then get oneway guotations
    if (parseInt(journeyType) === 0) {
        fetch(url, configTransfer)
            .then((res) => res.json())
            .then((data) => {
                callback(data, "data");

            })
            .catch((error) => {
                let message = "Istanbul  Quotation Result component _collectQuotations()  function catch blog  parseInt(journeyType) === 0"
                window.handelErrorLogs(error, message, { configTransfer })
            });
    } else {
        Promise.all([fetch(url, configTransfer), fetch(url, configReturn)])
            .then(function (responses) { return Promise.all(responses.map(function (response) { return response.json() })) })
            .then(function (data) {
                callback(data, "data");
            })
            .catch(function (error) {
                let message = "Istanbul Quotation Result  _collectQuotations()  function catch blog  else part of>> parseInt(journeyType) === 0"
                window.handelErrorLogs(error, message, { configReturn })
            });
    }
}
const collectQuotationsAsync = params => new Promise((resolve, reject) => collectQuotations(params, log => resolve(log)))
const pushToQuotationsResultPage = (params = {}) => {
    let { dispatch, router, log, journeyType } = params
    dispatch({ type: "GET_QUOTATION", data: { results: log, journeyType } })
}
const QuotationResults = (props) => {
    let { isTaxiDeal = false, env } = props
    const router = useRouter()
    const dispatch = useDispatch()
    const didMountRef = useRef(false);

    const state = useSelector(state => state.pickUpDropOffActions)
    let { reservations, params } = state
    let { sessionToken: reducerSessionToken, journeyType, direction, language, quotations, selectedCurrency } = params

    const reservationsRef = useRef(reservations);
    const { appData } = useSelector(state => state.initialReducer)



    let [internalState, setInternalState] = React.useReducer((s, o) => ({ ...s, ...o }), {
        'pickup-search-value-0': '',
        'dropoff-search-value-0': '',
        'pickup-search-value-1': '',
        'dropoff-search-value-1': '',
        'collecting-pickup-points-0': [],
        'collecting-dropoff-points-0': [],
        'collecting-pickup-points-1': [],
        'collecting-dropoff-points-1': [],
        'pickup-search-loading-0': false,
        'dropoff-search-loading-0': false,
        'pickup-search-loading-1': false,
        'dropoff-search-loading-1': false,
        'show-pickup-extra-point-0': true,
        'show-dropoff-extra-point-0': true,
        'show-pickup-extra-point-1': true,
        'show-dropoff-extra-point-1': true,
        //quotation loading
        "quotation-loading": false,
        'errorHolder': [],
        "error-booking-message-0": "",
        "error-booking-message-1": "",

    })

    //it is valid when our journey is both way
    const gotoTransferDetailsClick = () => {
        let { quotation: transferQuotation } = reservations[0]
        let { quotation: returnQuotation } = reservations[1]
        //if quotation token doesnt exist ,it means he /she can go to next page

        if (!returnQuotation.token && !transferQuotation.token) {
            alert(appData?.words["strPleaseSelectaCarTypeFor"]);
            return
        }

        if (!returnQuotation.token) {
            alert(appData?.words["strPleaseSelectYourCarTypeForYour"]);
            return
        }
        if (!transferQuotation.token) {
            alert(appData?.words["strPleaseSelectaCarTypeFor"]);
            return
        }

        // router.replace("/transfer-details");
        router.push(`${language === 'en' ? "/transfer-details" : `${language}/transfer-details`}`)


    };
    const onChangeSetDateTimeHandler = (params = {}) => {
        let { value, hourOrMinute, journeyType } = params
        dispatch({ type: 'SET_JOURNEY_DATETIME', data: { journeyType, hourOrMinute, value } })
        // getQuotations()
    }

    const getQuotations = (params = {}) => {

        const checkedReservations = normalizeReservations(reservations);
        console.log("cals");

        let errorHolder = reservationSchemeValidator({ reservations: checkedReservations });

        setInternalState({ errorHolder })
        let propsReadyToCollectQuotationOptions = {
            dispatch,
            setInternalState,
            router,
            journeyType,
            reservations: checkedReservations,
            language,
            shouldNavigate: false, env, currencyId: selectedCurrency.currencyId
        }
        if (errorHolder.status === 200) readyToCollectQuotationOptions(propsReadyToCollectQuotationOptions)
    }

    const [showMapOneWay, setShowMapOneWay] = useState(false)
    const [showMapReturn, setShowMapReturn] = useState(false)

    useEffect(() => {
        //for mobile scrolling
        const container = document?.querySelector("#main_container");
        if (990 > document?.documentElement?.clientWidth) {
            window.scroll({
                top: container?.getBoundingClientRect()?.top - 82,
                left: 0,
                behavior: "smooth",
            });
        }
        localStorage.setItem("path", router.asPath);
    }, [])


    useEffect(() => {
        if (didMountRef.current) {
            if (
                reservations?.[0]?.transferDetails?.transferDateTimeString ||
                reservations?.[1]?.transferDetails?.transferDateTimeString
            ) {
                getQuotations();
            }
        } else {
            // İlk render'da çalışmaz ama flag setlenir
            didMountRef.current = true;
        }
    }, [
        reservations?.[0]?.transferDetails?.transferDateTimeString,
        reservations?.[1]?.transferDetails?.transferDateTimeString,
        selectedCurrency.currencyId
    ]);

    useEffect(() => {
        reservationsRef.current = reservations;
    }, [reservations]);

    const didmountRefStorage = useRef(false);

    useEffect(() => {
        if (!didmountRefStorage.current) {
            didMountRef.current = true;

            if (+journeyType === 1) {
                if (reservations[0].quotation.carId && reservations[1].quotation.carId) {
                    localStorage.setItem("journeyQuotation", JSON.stringify(reservations[0].quotation));
                    localStorage.setItem("returnJourneyQuotation", JSON.stringify(reservations[1].quotation));
                } else {
                    localStorage.setItem("journeyQuotation", JSON.stringify(quotations[0].quotationOptions[0]));
                    localStorage.setItem("returnJourneyQuotation", JSON.stringify(quotations[0].quotationOptions[0]));
                }
            }
        }
    }, []);


    return (
        <GlobalLayout keywords={keywords} title={title} description={description} footerbggray={true} >
            <div className={`${styles.quotation} page`}>
                <div className={`${styles.quotation_section} page_section`}>
                    <div className={`${styles.quotation_section_container} page_section_container`}>
                        {
                            reservations.map((obj, index) => {
                                let reservationError = (internalState.errorHolder.status === 403 && Array.isArray(internalState.errorHolder.reservations)) ? internalState.errorHolder.reservations?.[index] : {};

                                let { transferDetails, selectedPickupPoints, selectedDropoffPoints } = obj
                                let { transferDateTimeString } = transferDetails

                                const [splitedHour, splitedMinute] = splitDateTimeStringIntoHourAndMinute(transferDateTimeString) || []
                                const [splitedDate] = splitDateTimeStringIntoDate(transferDateTimeString) || []

                                return (
                                    <div key={index} style={{ marginBottom: `${index === 0 ? "1rem" : "0"}` }}>
                                        {+journeyType === 0 && index === 0 ? <h2 className={`${styles.title} ${direction}`}>{appData?.words["seGoingDetails"]}</h2> : <React.Fragment></React.Fragment>}
                                        {/* {index === 1 ? <h2 className={`${styles.title} ${direction}`}>{appData?.words["seReturnDetails"]}</h2> : <React.Fragment></React.Fragment>} */}
                                        <div className={`${styles.main_container} ${direction} `}>
                                            <div className={`${styles.quotation_panel}`} style={{ height: +journeyType === 0 ? "800px" : "" }}>
                                                <div className={styles.form_div} action="">
                                                    {
                                                        ["pickup", "dropoff"].map((destination) => (
                                                            <QuotatıonInputHandleComponent
                                                                key={destination}
                                                                destination={destination}
                                                                selectedPoints={destination === "pickup" ? selectedPickupPoints : selectedDropoffPoints}
                                                                direction={direction}
                                                                index={index}
                                                                reservationError={reservationError}
                                                                internalState={internalState}
                                                                env={env}
                                                                language={language}
                                                                appData={appData}
                                                                setInternalState={setInternalState}
                                                                reservationsRef={reservationsRef}
                                                                reservations={reservations}
                                                                reducerSessionToken={reducerSessionToken}
                                                                getQuotations={getQuotations}
                                                            />
                                                        ))
                                                    }
                                                    <QuotationInputDate
                                                        appData={appData}
                                                        index={index}
                                                        splitedDate={splitedDate}
                                                        direction={direction}
                                                        reservations={reservations}
                                                        onChangeSetDateTimeHandler={onChangeSetDateTimeHandler}
                                                        selectedPickupPoints={selectedPickupPoints}
                                                    />

                                                    <QuotationHourMinute
                                                        appData={appData}
                                                        env={env}
                                                        language={language}
                                                        splitedMinute={splitedMinute}
                                                        selectedPickupPoints={selectedPickupPoints}
                                                        splitedHour={splitedHour}
                                                        index={index}
                                                        onChangeSetDateTimeHandler={onChangeSetDateTimeHandler}
                                                    />
                                                    {internalState[`error-booking-message-${index}`] ?
                                                        <div className={styles.errorBookedMessage}>
                                                            <p>{internalState[`error-booking-message-${index}`]}</p>
                                                        </div>
                                                        : <></>}
                                                    <Button
                                                        disabled={internalState[`quotation-loading`]}
                                                        onBtnClick={(e) => getQuotations(e)}
                                                        type={BUTTON_TYPES.PRIMARY_OUTLINE}
                                                        style={{ marginTop: "1rem", padding: `${"10px"}`, width: '100%', }}
                                                        btnText={`${appData?.words["seUpdateQuotation"]}`}
                                                    />
                                                </div>


                                                {(() => {
                                                    const showMap =
                                                        ((selectedDropoffPoints.length > 0 && index === 1) && showMapReturn) ||
                                                        ((selectedPickupPoints.length > 0 && index === 0) && showMapOneWay) ||
                                                        ((selectedDropoffPoints.length > 0 && selectedPickupPoints.length > 0) && +journeyType === 0);

                                                    return showMap ? (
                                                        <div className={styles.map_direction}>
                                                            <Map env={env} datas={quotations[index]} selectedPickPoints={selectedPickupPoints} selectedDroppOfPoints={selectedDropoffPoints} />
                                                        </div>
                                                    ) : null;
                                                })()}
                                            </div>
                                            {/* //*Card item of results */}

                                            <div  >
                                                {!internalState[`error-booking-message-${index}`] && selectedPickupPoints.length > 0 && selectedDropoffPoints.length > 0 &&
                                                    <CardQuotationItem
                                                        index={index}
                                                        isTaxiDeal={isTaxiDeal}
                                                        distance={quotations[index].distance}
                                                        duration={quotations[index].duration}
                                                        selectedQuotation={reservations[index]?.quotation}
                                                        quotationOptions={quotations[index].quotationOptions}
                                                        quotationLoading={internalState[`quotation-loading`]}
                                                        gotoTransferDetailsClick={gotoTransferDetailsClick}
                                                        journeyType={journeyType}
                                                        setShowMapOneWay={setShowMapOneWay}
                                                        setShowMapReturn={setShowMapReturn}
                                                        showMapOneWay={showMapOneWay}
                                                        showMapReturn={showMapReturn}
                                                        currencyId={selectedCurrency.currencyId}
                                                    />
                                                }
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </GlobalLayout>
    )
}

export default QuotationResults



const makestore = () => store;
const wrapper = createWrapper(makestore);

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req, res, ...etc }) => {

    const initialLanguages = store.getState().initialReducer?.appData?.languages
    const langs = initialLanguages.map((lang) => lang.value)

    for (let i = 0; i < langs.length; i++) {
        const lang = langs[i]
        const langUrl = lang === 'en' ? '/quotation-results' : `/${lang}/quotation-results`
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
