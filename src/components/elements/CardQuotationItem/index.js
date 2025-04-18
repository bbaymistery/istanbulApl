import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { quotationImagesObjWebp } from '../../../constants/quotationImages';
import styles from "./styles.module.scss";
import meetAndGret from '../../../../public/images/icons/blackMeetAndGreet.svg'
import Image from 'next/image';
import WaveLoading from '../LoadingWave';
import HeaderOfResults from './HeaderOfResults';
import { BUTTON_TYPES } from '../Button/ButtonTypes';
import Button from '../Button/Button';
import { splitAndTranslateDuration } from '../../../helpers/splitHelper';
  // let finalPrice=`£${item?.price.split(".")[0]}.`
  const currencySymbols = {
    1: "€", // EUR
    2: "$", // USD
    3: "£", // GBP
    4: "₺"  // TRY
  };
const checkJourneyTypeAndAddQuotationToReducer = (params = {}) => {
  //by this index  we r gonna assure in which journey we should add quotation
  //by journey type we r gonn assure should we directly pass to next page or not
  let { journeyType, quotation, index, router, dispatch, language, isTaxiDeal, quotations } = params

  //if it is both way journey then do not push directly to other page
  if (parseInt(journeyType) === 1) {
    dispatch({ type: "SET_QUOTATION", data: { quotation, journeyType: index } })
  } else {
    dispatch({ type: "SET_QUOTATION", data: { quotation, journeyType: index } })
    //if is taxi deal tru it means we should remove selected point from redux (because someofthem can be with  --select--)
    if (isTaxiDeal) {
      if (quotations[0]?.taxiDeal?.pickupPoints.length > 1) {

        dispatch({ type: "RESELECT_POINTS_FROM_STORE", data: { type: "pickup" } })
      }
      if (quotations[0]?.taxiDeal?.dropoffPoints.length > 1) {
        dispatch({ type: "RESELECT_POINTS_FROM_STORE", data: { type: "dropoff" } })
      }
      router.push(`${language === 'en' ? "/transfer-details" : `${language}/transfer-details`}`)
    } else {
      router.push(`${language === 'en' ? "/transfer-details" : `${language}/transfer-details`}`)

    }
  }
}
const CardQuotationItem = (params = {}) => {

  //by this index  we r gonna assure in which journey we should add quotation
  let {
    quotationOptions: datas,
    selectedQuotation,
    index,
    quotationLoading,
    duration,
    distance,
    isTaxiDeal = false,
    previousUrl,
    objectDetailss,
    gotoTransferDetailsClick = () => { },
    setShowMapOneWay = () => { },
    setShowMapReturn = () => { },
    showMapReturn = false,
    showMapOneWay = false,
    currencyId

  } = params

  const router = useRouter();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.pickUpDropOffActions)
  let { params: { journeyType, direction, language, quotations } } = state
  const { appData } = useSelector(state => state.initialReducer)
  //cartypes object for card item as {1:{image:'sds, name:Economy}}
  const carObject = appData?.carsTypes?.reduce((obj, item) => ({ ...obj, [item.id]: item, }), {});
  const [journeyAccrodionStatus, setJourneyAccrodionStatus] = useState(true)
  const [returnJourneyAccordionStatus, setReturnJourneyAccordionStatus] = useState(true)


  // Format the duration based on the language
  const formattedDuration = splitAndTranslateDuration(duration, language, appData);


  useEffect(() => {
    // This code runs only in the browser, as useEffect is a browser-only lifecycle method
    localStorage.setItem("journeyQuotation", JSON.stringify(datas[0]))
    localStorage.setItem("returnJourneyQuotation", JSON.stringify(datas[0]))
  }, []);



  const setQuotationHandleClick = async (params = {}) => {
    let { quotation } = params
    checkJourneyTypeAndAddQuotationToReducer({ journeyType, quotation, index, router, dispatch, language, isTaxiDeal, quotations })
    if (journeyType === 1) {
      if (index === 0) {
        localStorage.setItem("journeyQuotation", JSON.stringify(quotation));
        setJourneyAccrodionStatus(true)
      }
      if (index === 1) {
        localStorage.setItem("returnJourneyQuotation", JSON.stringify(quotation));
        setReturnJourneyAccordionStatus(localStorage?.getItem("returnJourneyQuotation") ? true : false)
      }
    }
  };

  const handleClickForMobile = ({ e, quotation }) => {
    if (451 > document.documentElement.clientWidth)
      checkJourneyTypeAndAddQuotationToReducer({ journeyType, quotation, index, router, dispatch, language, isTaxiDeal, quotations })

  };

  const changeCar = () => {
    if (journeyType === 1) {
      if (index === 0) {
        localStorage.removeItem("journeyQuotation");
        setJourneyAccrodionStatus(false)
      }
      if (index === 1) {
        localStorage.removeItem("returnJourneyQuotation");
        setReturnJourneyAccordionStatus(false)
      }
    }
  }


  return (
    <div style={{ display: 'flex', flexDirection: "column", }}>
      {journeyType === 1 && index === 0 ?
        <h2 className={`${styles.title} ${direction}`}>
          <span onClick={() => setShowMapOneWay(!showMapOneWay)}>
            {!showMapOneWay ? "Show Map" : "Hide Map"}
          </span>
          <span>
            {appData?.words["seGoingDetails"]}
          </span>
        </h2>
        : <React.Fragment></React.Fragment>}



      {journeyType === 1 && index === 1 ?
        <h2 className={`${styles.title} ${direction}`}>
          <span onClick={() => setShowMapReturn(!showMapReturn)}>
            {!showMapReturn ? "Show Map" : "Hide Map"}
          </span>
          <span>
            {appData?.words["seReturnDetails"]}
          </span>
        </h2>
        : <React.Fragment></React.Fragment>}

      <div className={`${styles.result_container}`}>
        <HeaderOfResults duration={duration} distance={distance} />
        {/* make visible for selected item  go journey*/}
        {journeyType === 1 && index === 0 && <div>
          {datas.map((item, index) => {
            let selected = Number(selectedQuotation?.carId) === Number(carObject[item?.carId].id)
            const price = currencyId === 3 ? item?.price : item?.exchangedPrice;
            const finalPrice = `${currencySymbols[item?.exchangedCurrencyId] || "£"}${price.split(".")[0]}.`;
  
            const renderSelectedItem = Number(JSON.parse(localStorage?.getItem("journeyQuotation"))?.carId) === Number(quotationImagesObjWebp[item?.carId]?.id)
            if (renderSelectedItem && journeyAccrodionStatus) {
              return <div
                dataid={index === 0 ? "first_car" : ""}
                key={index + 50}
                className={`${styles.card_item} ${Number(selectedQuotation?.carId) === Number(quotationImagesObjWebp[item?.carId].id) ? styles.selectedCard : ""}`}
              >
                <div data={quotationImagesObjWebp[item?.carId].id} className={styles.column_first} style={{ backgroundImage: `url(${quotationImagesObjWebp[item?.carId]?.image})` }}> </div>
                <div className={styles.column_second}>
                  <div className={styles.column_second_flex_column}>
                    <div className={styles.name_and_postcode_div}>
                      <div className={styles.postcode}>
                        <p className={styles.type}>  {carObject[item?.carId]?.transferType}</p>
                        <p className={styles.durationn}><i className="fa-solid fa-clock"></i>  <span>{formattedDuration}</span></p>
                        <div className={styles.feature_column}> <i className="fa-solid fa-suitcase"></i><span>{carObject[item?.carId]?.suitcases}</span></div>
                      </div>
                      <h3 className={styles.name}>
                        {carObject[item?.carId]?.name}
                        <span className={styles.type}>{carObject[item?.carId]?.transferType}</span>
                        <div className={styles.feature_column}> <i className="fa-solid fa-user"></i> <span>{carObject[item?.carId]?.pax}</span>  </div>
                      </h3>
                    </div>
                    <div className={styles.car_features}>
                      <div className={styles.feature_column}> <i className="fa-solid fa-user"></i> <span>{carObject[item?.carId]?.pax}</span>  </div>
                      <div className={styles.feature_column}> <i className="fa-solid fa-suitcase"></i><span>{carObject[item?.carId]?.suitcases}</span></div>

                    </div>
                    <div className={styles.apl_features}>
                      <p className={`${styles.apl_feature} ${styles.show_more_than360}`}> <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i> <span>{appData?.words["strCarFeatureFreeMeetAndGreet"]}</span></p>
                      <p className={`${styles.apl_feature} ${styles.show_more_than360}`}>  <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strCarFeatureNoCharge4Delay"]}</span></p>
                      <p className={`${styles.apl_feature} ${styles.show_more_than360}`}> <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strCarFeatureFreeWaitingTime"]}</span> </p>
                      <p className={`${styles.apl_feature} ${styles.show_more_than360}`}> <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strFreeCancellation24h"]}</span> </p>
                      <p className={`${styles.apl_feature} ${styles.show_more_than360}`}><i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strCarFeatureFlightTracking"]}</span></p>
                      <p className={`${styles.apl_feature} ${styles.show_more_than360}`}> <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strComfortableVehicles"]}</span> </p>
                      <p className={`${styles.apl_feature} ${styles.show_less_than360}`}><i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strCarFeatureFlightTracking"]}</span></p>
                      <p className={`${styles.apl_feature} ${styles.show_less_than360}`}>  <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strCarFeatureFreeMeetAndGreet"]}</span></p>
                      <p className={`${styles.apl_feature} ${styles.show_less_than360} ${styles.show_less_than360_with_price}`}>
                        <span>
                          <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}>
                          </i>
                          <span>{appData?.words["strFreeCancellation24h"]}</span>
                        </span>

                        <span className={`${styles.price_span}`} >
                          {quotationLoading ? "..." : finalPrice}
                          <span>00</span>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className={`${direction === 'rtl' ? styles.thirdcolumnDirection : ""} ${styles.column_third}`}>
                  <div className={styles.duration_price}>
                    {/* <span>
                      <i className="fa-solid fa-location-dot"></i>
                      {distanceInKm} km
                      <br />

                      {distanceInMiles} {appData?.words["strMiles"]}
                    </span> */}
                    <div className={styles.price}>{quotationLoading ? "..." : `£${item?.price.split(".")[0]}.`} <span>{quotationLoading ? "" : "00"}</span> </div>
                  </div>

                  <div className={`${styles.btn_div} ${styles.selectedBtnDiv}`}>
                    <Button
                      type={BUTTON_TYPES.PRIMARY_OUTLINE}
                      onBtnClick={changeCar}
                      style={{ padding: "10px 17.5px", width: '100%' }}
                      btnText={!selectedQuotation?.carId ? appData?.words["strSeeAllCars"] : appData?.words["strYouSelected"]}
                    />
                  </div>
                </div>
              </div>
            }
          })}

        </div>}
        {/* make visible for selected item return */}
        {journeyType === 1 && index === 1 && <div>
          {datas.map((item, index) => {
            let selected = Number(selectedQuotation?.carId) === Number(carObject[item?.carId].id)
            const price = currencyId === 3 ? item?.price : item?.exchangedPrice;
            const finalPrice = `${currencySymbols[item?.exchangedCurrencyId] || "£"}${price.split(".")[0]}.`;
  
            const renderSelectedItem = Number(JSON.parse(localStorage?.getItem("returnJourneyQuotation"))?.carId) === Number(quotationImagesObjWebp[item?.carId]?.id)
            if (renderSelectedItem && returnJourneyAccordionStatus) {
              return <div
                dataid={index === 0 ? "first_car" : ""}
                key={index + 100}
                className={`${styles.card_item} ${Number(selectedQuotation?.carId) === Number(quotationImagesObjWebp[item?.carId].id) ? styles.selectedCard : ""}`}
              >
                <div data={quotationImagesObjWebp[item?.carId].id} className={styles.column_first} style={{ backgroundImage: `url(${quotationImagesObjWebp[item?.carId]?.image})` }}> </div>
                <div className={styles.column_second}>
                  <div className={styles.column_second_flex_column}>
                    <div className={styles.name_and_postcode_div}>
                      <div className={styles.postcode}>
                        <p className={styles.type}>  {carObject[item?.carId]?.transferType}</p>
                        <p className={styles.durationn}><i className="fa-solid fa-clock"></i>  <span>{formattedDuration}</span></p>
                        <div className={styles.feature_column}> <i className="fa-solid fa-suitcase"></i><span>{carObject[item?.carId]?.suitcases}</span></div>
                      </div>
                      <h3 className={styles.name}>
                        {carObject[item?.carId]?.name}
                        <span className={styles.type}>{carObject[item?.carId]?.transferType}</span>
                        <div className={styles.feature_column}> <i className="fa-solid fa-user"></i> <span>{carObject[item?.carId]?.pax}</span>  </div>
                      </h3>
                    </div>
                    <div className={styles.car_features}>
                      <div className={styles.feature_column}> <i className="fa-solid fa-user"></i> <span>{carObject[item?.carId]?.pax}</span>  </div>
                      <div className={styles.feature_column}> <i className="fa-solid fa-suitcase"></i><span>{carObject[item?.carId]?.suitcases}</span></div>
           

                    </div>
                    <div className={styles.apl_features}>
                      <p className={`${styles.apl_feature} ${styles.show_more_than360}`}> <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i> <span>{appData?.words["strCarFeatureFreeMeetAndGreet"]}</span></p>
                      <p className={`${styles.apl_feature} ${styles.show_more_than360}`}>  <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strCarFeatureNoCharge4Delay"]}</span></p>
                      <p className={`${styles.apl_feature} ${styles.show_more_than360}`}> <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strCarFeatureFreeWaitingTime"]}</span> </p>
                      <p className={`${styles.apl_feature} ${styles.show_more_than360}`}> <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strFreeCancellation24h"]}</span> </p>
                      <p className={`${styles.apl_feature} ${styles.show_more_than360}`}><i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strCarFeatureFlightTracking"]}</span></p>
                      <p className={`${styles.apl_feature} ${styles.show_more_than360}`}> <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strComfortableVehicles"]}</span> </p>



                      <p className={`${styles.apl_feature} ${styles.show_less_than360}`}><i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strCarFeatureFlightTracking"]}</span></p>
                      <p className={`${styles.apl_feature} ${styles.show_less_than360}`}>  <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strCarFeatureFreeMeetAndGreet"]}</span></p>
                      <p className={`${styles.apl_feature} ${styles.show_less_than360} ${styles.show_less_than360_with_price}`}>
                        <span>
                          <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}>
                          </i>
                          <span>{appData?.words["strFreeCancellation24h"]}</span>
                        </span>

                        <span className={`${styles.price_span}`} >
                          {quotationLoading ? "..." : finalPrice}
                          <span>00</span>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className={`${direction === 'rtl' ? styles.thirdcolumnDirection : ""} ${styles.column_third}`}>
                  <div className={styles.duration_price}>
                    {/* <span>
                      <i className="fa-solid fa-location-dot"></i>
                      {distanceInKm} km
                      <br />
                      {distanceInMiles} {appData?.words["strMiles"]}

                    </span> */}
                    <div className={styles.price}>{quotationLoading ? "..." : `£${item?.price.split(".")[0]}.`} <span>{quotationLoading ? "" : "00"}</span> </div>
                  </div>

                  <div className={`${styles.btn_div} ${selected ? styles.selectedBtnDiv : ""}`}>
                    <Button
                      type={BUTTON_TYPES.PRIMARY_OUTLINE}
                      onBtnClick={changeCar}
                      style={{ padding: "10px 17.5px", width: '100%' }}
                      btnText={!selectedQuotation?.carId ? appData?.words["strSeeAllCars"] : appData?.words["strYouSelected"]}
                    />
                  </div>
                </div>
              </div>
            }
          })}

        </div>}
        {(!journeyAccrodionStatus && index === 0 && journeyType === 1 || !returnJourneyAccordionStatus && index === 1 && journeyType === 1) && datas?.map((item, index) => {
          let selected = Number(selectedQuotation?.carId) === Number(carObject[item?.carId].id)
          const price = currencyId === 3 ? item?.price : item?.exchangedPrice;
          const finalPrice = `${currencySymbols[item?.exchangedCurrencyId] || "£"}${price.split(".")[0]}.`;

          return (
            <div id="main_container">
              <div
                dataid={index === 0 ? "first_car" : ""}
                key={index + 10000}
                className={`${styles.card_item} ${Number(selectedQuotation?.carId) === Number(quotationImagesObjWebp[item?.carId].id) ? styles.selectedCard : ""}`}
                onClick={(e) => handleClickForMobile({ e, quotation: item })} >
                <div data={quotationImagesObjWebp[item?.carId].id} className={styles.column_first} style={{ backgroundImage: `url(${quotationImagesObjWebp[item?.carId]?.image})` }}> </div>
                <div className={styles.column_second}>
                  <div className={styles.column_second_flex_column}>
                    <div className={styles.name_and_postcode_div}>
                      <div className={styles.postcode}>
                        <p className={styles.type}>  {carObject[item?.carId]?.transferType}</p>
                        <p className={styles.durationn}><i className="fa-solid fa-clock"></i>  <span>{formattedDuration}</span></p>
                        <div className={styles.feature_column}> <i className="fa-solid fa-suitcase"></i><span>{carObject[item?.carId]?.suitcases}</span></div>
                      </div>
                      <h3 className={styles.name}>
                        {carObject[item?.carId]?.name}
                        <span className={styles.type}>{carObject[item?.carId]?.transferType}</span>
                        <div className={styles.feature_column}> <i className="fa-solid fa-user"></i> <span>{carObject[item?.carId]?.pax}</span>  </div>
                      </h3>
                    </div>
                    <div className={styles.car_features}>
                      <div className={styles.feature_column}> <i className="fa-solid fa-user"></i> <span>{carObject[item?.carId]?.pax}</span>  </div>
                      <div className={styles.feature_column}> <i className="fa-solid fa-suitcase"></i><span>{carObject[item?.carId]?.suitcases}</span></div>
                      {/* <div className={`${styles.feature_column} ${styles.meet_greet_icon}`} direction={String(direction === 'rtl')}>
                        <Image src={meetAndGret} width="18" height="20" alt="" />
                        <span style={{ paddingLeft: "5px", fontWeight: '500' }}>Meet & Greet</span>
                      </div> */}

                    </div>
                    <div className={styles.apl_features}>
                      <p className={`${styles.apl_feature} ${styles.show_more_than360}`}> <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i> <span>{appData?.words["strCarFeatureFreeMeetAndGreet"]}</span></p>
                      <p className={`${styles.apl_feature} ${styles.show_more_than360}`}>  <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strCarFeatureNoCharge4Delay"]}</span></p>
                      <p className={`${styles.apl_feature} ${styles.show_more_than360}`}> <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strCarFeatureFreeWaitingTime"]}</span> </p>
                      <p className={`${styles.apl_feature} ${styles.show_more_than360}`}> <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strFreeCancellation24h"]}</span> </p>
                      <p className={`${styles.apl_feature} ${styles.show_more_than360}`}><i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strCarFeatureFlightTracking"]}</span></p>
                      <p className={`${styles.apl_feature} ${styles.show_more_than360}`}> <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strComfortableVehicles"]}</span> </p>



                      <p className={`${styles.apl_feature} ${styles.show_less_than360}`}><i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strCarFeatureFlightTracking"]}</span></p>
                      <p className={`${styles.apl_feature} ${styles.show_less_than360}`}>  <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strCarFeatureFreeMeetAndGreet"]}</span></p>
                      <p className={`${styles.apl_feature} ${styles.show_less_than360} ${styles.show_less_than360_with_price}`}>
                        <span>
                          <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}>
                          </i>
                          <span>{appData?.words["strFreeCancellation24h"]}</span>
                        </span>

                        <span className={`${styles.price_span}`} >
                          {quotationLoading ? "..." : finalPrice}
                          <span>00</span>
                        </span>
                      </p>




                    </div>
                  </div>
                </div>

                <div className={`${direction === 'rtl' ? styles.thirdcolumnDirection : ""} ${styles.column_third}`}>
                  <div className={styles.duration_price}>
                    {/* <span>
                      <i className="fa-solid fa-location-dot"></i>
                      {distanceInKm} km
                      <br />
                      {distanceInMiles} {appData?.words["strMiles"]}

                    </span> */}
                    <div className={styles.price}>{quotationLoading ? "..." : `£${item?.price.split(".")[0]}.`} <span>{quotationLoading ? "" : "00"}</span> </div>
                  </div>

                  <div className={`${styles.btn_div} ${selected ? styles.selectedBtnDiv : ""}`}>
                    <Button
                      type={BUTTON_TYPES.PRIMARY_OUTLINE}
                      onBtnClick={() => setQuotationHandleClick({ quotation: item })}
                      style={{ padding: "10px 38.5px", width: '100%' }}
                      btnText={
                        quotationLoading ? <WaveLoading /> : selected
                          ? `${appData?.words["quSelectedButton"]}` : `${appData?.words["quSelectButton"]}`
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          )
        })}

        {(+journeyType === 0) && datas?.map((item, index) => {
          let selected = Number(selectedQuotation?.carId) === Number(carObject[item?.carId].id)
          const price = currencyId === 3 ? item?.price : item?.exchangedPrice;
          const finalPrice = `${currencySymbols[item?.exchangedCurrencyId] || "£"}${price.split(".")[0]}.`;

          return (
            <div id="main_container">
              <div
                dataid={index === 0 ? "first_car" : ""}
                key={index + 100000}
                className={`${styles.card_item} ${Number(selectedQuotation?.carId) === Number(quotationImagesObjWebp[item?.carId].id) ? styles.selectedCard : ""}`}
                onClick={(e) => handleClickForMobile({ e, quotation: item })} >
                <div data={quotationImagesObjWebp[item?.carId].id} className={styles.column_first} style={{ backgroundImage: `url(${quotationImagesObjWebp[item?.carId]?.image})` }}> </div>
                <div className={styles.column_second}>
                  <div className={styles.column_second_flex_column}>
                    <div className={styles.name_and_postcode_div}>
                      <div className={styles.postcode}>
                        <p className={styles.type}>  {carObject[item?.carId]?.transferType}</p>
                        <p className={styles.durationn}><i className="fa-solid fa-clock"></i>  <span>{formattedDuration}</span></p>
                        <div className={styles.feature_column}> <i className="fa-solid fa-suitcase"></i><span>{carObject[item?.carId]?.suitcases}</span></div>
                      </div>
                      <h3 className={styles.name}>
                        {carObject[item?.carId]?.name}
                        <span className={styles.type}>{carObject[item?.carId]?.transferType}</span>
                        <div className={styles.feature_column}> <i className="fa-solid fa-user"></i> <span>{carObject[item?.carId]?.pax}</span>  </div>
                      </h3>
                    </div>
                    <div className={styles.car_features}>
                      <div className={styles.feature_column}> <i className="fa-solid fa-user"></i> <span>{carObject[item?.carId]?.pax}</span>  </div>
                      <div className={styles.feature_column}> <i className="fa-solid fa-suitcase"></i><span>{carObject[item?.carId]?.suitcases}</span></div>
                    </div>
                    <div className={styles.apl_features}>
                      <p className={`${styles.apl_feature} ${styles.show_more_than360}`}> <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i> <span>{appData?.words["strCarFeatureFreeMeetAndGreet"]}</span></p>
                      <p className={`${styles.apl_feature} ${styles.show_more_than360}`}>  <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strCarFeatureNoCharge4Delay"]}</span></p>
                      <p className={`${styles.apl_feature} ${styles.show_more_than360}`}> <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strCarFeatureFreeWaitingTime"]}</span> </p>
                      <p className={`${styles.apl_feature} ${styles.show_more_than360}`}> <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strFreeCancellation24h"]}</span> </p>
                      <p className={`${styles.apl_feature} ${styles.show_more_than360}`}><i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strCarFeatureFlightTracking"]}</span></p>
                      <p className={`${styles.apl_feature} ${styles.show_more_than360}`}> <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strComfortableVehicles"]}</span> </p>



                      <p className={`${styles.apl_feature} ${styles.show_less_than360}`}><i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strCarFeatureFlightTracking"]}</span></p>
                      <p className={`${styles.apl_feature} ${styles.show_less_than360}`}>  <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strCarFeatureFreeMeetAndGreet"]}</span></p>
                      <p className={`${styles.apl_feature} ${styles.show_less_than360} ${styles.show_less_than360_with_price}`}>
                        <span>
                          <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}>
                          </i>
                          <span>{appData?.words["strFreeCancellation24h"]}</span>
                        </span>

                        <span className={`${styles.price_span}`} >
                          {quotationLoading ? "..." : `£${item?.price.split(".")[0]}.`}
                          <span>00</span>
                        </span>
                      </p>




                    </div>
                  </div>
                </div>

                <div className={` ${styles.column_third}`}>
                  <div className={styles.duration_price}>
                    {/* <span className={styles.distance}>
                      <i className="fa-solid fa-location-dot"></i>
                      {distanceInKm} km
                      <br />
                      {distanceInMiles} {appData?.words["strMiles"]}
                    </span> */}
                    <div className={styles.price}>{quotationLoading ? "..." : finalPrice} <span>{quotationLoading ? "" : "00"}</span> </div>
                  </div>
                  <div className={`${styles.btn_div} ${selected ? styles.selectedBtnDiv : ""}`}>
                    <Button
                      type={BUTTON_TYPES.PRIMARY_OUTLINE}
                      onBtnClick={() => setQuotationHandleClick({ quotation: item })}
                      style={{ padding: "10px 38.5px", width: '100%' }}
                      btnText={
                        quotationLoading ? <WaveLoading /> : selected
                          ? `${appData?.words["quSelectedButton"]}` : `${appData?.words["quSelectButton"]}`
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          )
        })}

      </div>
      {index === 1 &&
        <div className={styles.result_container}>
          <div className={`${styles.items_buttons}`}>
            <div>
              <div onClick={() => router.back()}>
                <Button type={BUTTON_TYPES.PRIMARY_OUTLINE} style={{ padding: "10px 28.5px", }} btnText={`${appData?.words["strGoBack"]}`} />
              </div>
            </div>
            <div>
              <div onClick={gotoTransferDetailsClick}>
                <Button type={BUTTON_TYPES.PRIMARY_OUTLINE} style={{ padding: "10px 28.5px", }} btnText={`${appData?.words["strContinue"]}`} />
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default CardQuotationItem