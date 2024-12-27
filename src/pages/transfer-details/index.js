import React from 'react';
import styles from "./styles.module.scss";
import store from '../../store/store';
import PhoneInput from 'react-phone-input-2';
import InfoModal from '../../components/elements/InfoModal/InfoModal'
import FlightWaitingTimeContent from '../../components/elements/FlightWaitingTimeContent';
import TextInput from '../../components/elements/TextInput';
import Textarea from '../../components/elements/Textarea';
import Select from '../../components/elements/Select';
import 'react-phone-input-2/lib/style.css'
import { useRouter } from 'next/router';
import { useUserIp } from '../../hooks/userIp'
import { urlWithLangAtribute } from '../../helpers/urlWithLangAtrribute'
import { useDispatch, useSelector } from 'react-redux';
import { reservationSchemeValidator } from '../../helpers/reservationSchemeValidator';
import { ifHasUnwantedCharacters } from '../../helpers/ifHasUnwantedCharacters';
import GlobalLayout from '../../components/layouts/GlobalLayout';
import { createWrapper } from 'next-redux-wrapper';
import { splitDateTimeStringIntoDate, splitDateTimeStringIntoHourAndMinute } from '../../helpers/splitHelper';
import CheckBox from './CheckBox';
import TransferJourneySummaryPanel from '../../components/elements/TransferJourneySummaryPanel';
import Button from '../../components/elements/Button/Button';
import { BUTTON_TYPES } from '../../components/elements/Button/ButtonTypes';
let description = "We specialize in airport transfer shuttle service. We can provide you with a chauffeur driven car to and from all major London airports. The airports include Heathrow, Gatwick, Stanstead, Luton and City airport.!"
let title = "Results Airport Transfers London Airport Pickups"
let keywords = " London airport transfers, London airport transfer, heathrow airport transfer, Gatwick airport transfer, stansted airport transfer, luton airport transfer, shuttle service, shuttle services, airport shuttle services, airport transfer shuttle service,  airport taxi service, taxi services, cab services, airport taxi service, London airport, airport transport, luton airport transport, London airport transportation, London shuttle services, Gatwick airport shuttle service, Heathrow airport shuttle service, Luton airport shuttle service, Stansted airport shuttle service, London airport taxi transfer, London airport shuttle, airport transfers London, airport transfers, chauffeur driven car, chauffeur driven cars, airport pick up and drop."
import SelectedPointsOnTransferDetails from '../../components/elements/SelectedPointsOnTransferDetails'

const TransferDetails = (props) => {
    const router = useRouter()
    const { ip, country } = useUserIp();
    let { env } = props
    const dispatch = useDispatch()
    let state = useSelector((state) => state.pickUpDropOffActions)
    let { reservations, params: { passengerDetailsStatus, modalInfo, direction, quotations, sessionToken: reducerSessionToken, language, journeyType } } = state

    const { appData } = useSelector(state => state.initialReducer)
    //we use it to render paxs inside select component
    const carObject = appData?.carsTypes?.reduce((obj, item) => ({ ...obj, [item.id]: item, }), {});
    const { nexturls, previousUrls, currentUrls } = urlWithLangAtribute({ languages: appData.languages, previousUrl: localStorage.getItem("path"), nextUrl: "/payment-details", currentUrl: router.asPath })

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

    const handleOnChangeNumberInput = (value, _country, index, name) => {
        dispatch({ type: 'SET_PASSEGER_DETAILS', data: { name, value, index, updateBothJourneyCheckBox: passengerDetailsStatus } })
    };
    const handleCountry = (country, countryData) => {

    }
    return (
        <GlobalLayout keywords={keywords} title={title} description={description} >
            <div className={`${styles.tr_details} page`}>
                <div className={`${styles.tr_details_section} page_section`}>
                    <div className={`${styles.tr_details_section_container} page_section_container`}>
                        <div className={styles.transferdetails_subcontainer} id="main_container">
                            {reservations.map((obj, index) => {
                                let reservationError = (errorHolder.status === 403 && Array.isArray(errorHolder.reservations)) ? errorHolder.reservations[index] : {};
                                let { transferDetails, passengerDetails, quotation, selectedPickupPoints, selectedDropoffPoints } = obj
                                let { transferDateTimeString, passengersNumber, specialRequests } = transferDetails
                                let { phone, email, firstname } = passengerDetails
                                const [splitedHour, splitedMinute] = splitDateTimeStringIntoHourAndMinute(transferDateTimeString) || []
                                const [splitedDate] = splitDateTimeStringIntoDate(transferDateTimeString) || []
                                //passenger details errors
                                return (
                                    <div key={index} >
                                        <div className={`${styles.transferdetails_subcontainer_content} ${direction}`}>
                                            <div className={`${styles.transferdetails_subcontainer_content_points_and_passengerdetails} ${quotations[0]?.taxiDeal ? styles.details_panel_taxideal : ""}`}>
                                                {/* //!passenger details for transfer journey */}
                                                {/* //!if client choise unchecked for input checkbox then it will show up  */}
                                                {index === 0 || (!passengerDetailsStatus && index === 1) ?
                                                    <div className={styles.passenger_details_div}>
                                                        {index === 0 ? <h2> {appData?.words['strPassengerDetails']}</h2> : <h2 className={styles.return_pas_details_header}>{appData?.words["strReturnJourneyPassengerDetails"]}</h2>}
                                                        <div className={styles.passenger_details}>
                                                            <div className={styles.input_div}>
                                                                <TextInput label={appData?.words["strFullName"]} type="text" name="firstname" onChange={e => onchangeHandler(e, index)} value={firstname} errorMessage={reservationError?.passengerDetails?.firstname} />
                                                            </div>
                                                            <div className={styles.input_div}>
                                                                <TextInput label={appData?.words["strEmail"]} type="text" name="email" onChange={e => onchangeHandler(e, index)} value={email} errorMessage={reservationError?.passengerDetails?.email} />
                                                            </div>
                                                            <div className={styles.input_div}>
                                                                <Select label={appData?.words["strNoofPassengers"]} name="passengersNumber" onChange={e => onchangeHandler(e, index)} value={passengersNumber} data={carObject[quotation.carId]?.pax} />
                                                            </div>
                                                            <div className={styles.input_div}>
                                                                <PhoneInput
                                                                    className={`phone_input ${direction === "rtl" ? "phone_input_direction" : ""}`}
                                                                    value={phone}
                                                                    onChange={(value, selectedCountry) => handleOnChangeNumberInput(value, selectedCountry, index, "phone")}
                                                                    country={country.toLowerCase()}
                                                                    inputProps={{
                                                                        name: 'phone',
                                                                        required: true,
                                                                        style: {
                                                                            border: reservationError?.passengerDetails?.phone ? '1px solid red' : ' 1px solid #ced4da',
                                                                        }
                                                                    }}
                                                                    onCountryChange={handleCountry}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div> : <React.Fragment></React.Fragment>}

                                                {/* if client come from taxi deal then here will not be visible */}
                                                <div className={styles.selected_points_details}>
                                                    <h2>   {index === 0 ? appData?.words["seGoingDetails"] : appData?.words["seReturnDetails"]}  </h2>
                                                    <div className={styles.selecteditems} >
                                                        <div className={`${styles.points} ${styles.selectedlist_points_left}`} >
                                                            <h3 className={styles.points_header}>{appData?.words["strSelectedPickUpPoint"]}</h3>
                                                            {/* //index =0 it is like destination pickup  */}
                                                            <SelectedPointsOnTransferDetails env={env} pointsError={reservationError['selectedPickupPoints']} selectedPoints={selectedPickupPoints} journeyType={index} type='pickup' language={language} />
                                                        </div>
                                                        {/* {  selectedlist_points_left     bunu aldk select komponentde kulandk} */}
                                                        <div className={`${styles.points} ${styles.selectedlist_points_right}`}>
                                                            <h3 className={styles.points_header}>{appData?.words["strSelectedDropOffPoint"]}</h3>
                                                            {/* //index =1 it is like destination dropoff */}
                                                            <SelectedPointsOnTransferDetails env={env} pointsError={reservationError['selectedDropoffPoints']} selectedPoints={selectedDropoffPoints} journeyType={index} type='dropoff' language={language} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={styles.textarea_div}>
                                                    <Textarea label={appData?.words["strSpecialRequestsTitle"]} name="specialRequests" value={specialRequests} onChange={(e) => onchangeHandler(e, index)} />
                                                </div>
                                                {index === 1 ? <CheckBox direction={direction} textSame={appData?.words["strPassengerDetailsCheckBox"]} textNotSame={appData?.words["strThePassengerDetailsAreNotSame"]} /> : <React.Fragment></React.Fragment>}
                                                {index === 1 || (index === 0 && +journeyType === 0) ?
                                                    <div className={` ${direction === 'rtl' ? styles.directionbuttons : styles.buttons}  ${quotations[0]?.taxiDeal ? styles.taxideal_buttons : ""}`} >
                                                        <div className={styles.left}>

                                                            <div onClick={() => router.back()}>
                                                                <Button type={BUTTON_TYPES.PRIMARY_OUTLINE} style={{ padding: "10px 38.5px", }} btnText={`${appData?.words["strGoBack"]}`} />
                                                            </div>


                                                            <div onClick={(e) => checkValidation(e)}>
                                                                <Button type={BUTTON_TYPES.PRIMARY_OUTLINE} style={{ padding: "10px 38.5px", }} btnText={`${appData?.words["strNext"]}`} />
                                                            </div>
                                                        </div>

                                                    </div>
                                                    : <></>}
                                            </div>
                                            <TransferJourneySummaryPanel language={language} journeyType={journeyType} index={index} splitedHour={splitedHour} splitedMinute={splitedMinute} splitedDate={splitedDate} quotation={quotation} selectedDropoffPoints={selectedDropoffPoints} selectedPickupPoints={selectedPickupPoints} />
                                        </div>

                                    </div>
                                )
                            })}
                        </div>
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

    for (let i = 0; i < langs.length; i++) {
        const lang = langs[i]
        const langUrl = lang === 'en' ? '/transfer-details' : `/${lang}/transfer-details`
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
            data: ""
        }
    }


});