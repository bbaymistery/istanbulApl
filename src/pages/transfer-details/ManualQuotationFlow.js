import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../components/elements/Button/Button';
import { BUTTON_TYPES } from '../../components/elements/Button/ButtonTypes';
import SelectedPointsOnTransferDetails from '../../components/elements/SelectedPointsOnTransferDetails';
import Textarea from '../../components/elements/Textarea';
import TransferJourneySummaryPanel from '../../components/elements/TransferJourneySummaryPanel';
import { ifHasUnwantedCharacters } from '../../helpers/ifHasUnwantedCharacters';
import { reservationSchemeValidator } from '../../helpers/reservationSchemeValidator';
import { splitDateTimeStringIntoDate, splitDateTimeStringIntoHourAndMinute } from '../../helpers/splitHelper';
import CheckBox from './CheckBox';
import HandlePassengerDetailsTransferForm from './HandlePassengerDetailsTransferForm';
import styles from "./styles.module.scss";

const ManualQuotationFlow = (props) => {


  let { quotations, appData, env, language, reservations, direction, journeyType, passengerDetailsStatus } = props
  const dispatch = useDispatch()
  const router = useRouter()


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



  return (
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

                <HandlePassengerDetailsTransferForm
                  passengerDetailsStatus={passengerDetailsStatus}
                  index={index}
                  appData={appData}
                  reservationError={reservationError}
                  email={email}
                  firstname={firstname}
                  phone={phone}
                  passengersNumber={passengersNumber}
                  quotation={quotation}
                  direction={direction}

                />

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
  )
}

export default ManualQuotationFlow