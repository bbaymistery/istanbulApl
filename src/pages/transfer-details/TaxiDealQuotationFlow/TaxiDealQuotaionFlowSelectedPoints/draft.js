import React from 'react'
import styles from  "./styles.module.scss"
const TaxiDealQuotaionFlowSelectedPoints = ({}) => {
  return (
    <div className={`${styles.points} ${direction}`} direction={String(direction === 'rtl')}>
    <h2>{appData?.words["seGoingDetails"]}</h2>
    <div className={`${styles.search_menu} ${styles.first_column}`}>
        {/* Pick up location text */}
        {!selectedPickupPoints.length > 0 ? <p className={direction}>{`${appData?.words["strPickupAddress"]}: ${quotations[0].taxiDeal.pickup}`}</p> : <React.Fragment></React.Fragment>}
        {/* Pick Points text */}
        {selectedPickupPoints.length > 0 ? <p className={` ${direction}`} >{appData?.words["strPickupPoints"]}</p> : <React.Fragment></React.Fragment>}
        {/* selectedPoints */}
        {/* //!case 1 => if quotations.points has only one item  =>show selected point*/}

        {!(hasSinglePickupfPoint && hasOneSelectedPointPickup) && hasNoPickupPoints && hasOneSelectedPointPickup && <SelectedPointsOnHomePage env={env} hasOneItem={hasSinglePickupfPoint} isTaxiDeal={true} index={index} destination="pickup" points={selectedPickupPoints} />}

        {/* //!case 2 => if quotations.points has more than 1  item  =>show select box*/}
        {quotations[index]?.taxiDeal?.pickupPoints.length ?
            <div style={{ border: (errorPickUpSelectBox) ? "1px solid red" : "" }} className={styles.taxideals_select_div} direction={String(direction === 'rtl')} title={selectedPickupPoints[0]?.address}>
                {/* //we r getting value by   >  quotations[index]?.taxiDeal?.pickupPoints <this  useing selectedIndex*/}
                {imageObjects && pickupIdForImage &&
                    <img className={styles.point_image} src={`${env.apiDomain}${imageObjects[pickupIdForImage]}`} alt={selectedPickupPoints[0]?.address} />}
                <select
                    className={styles.taxideals_select}
                    defaultValue={`${selectedPickupPoints?.[index]?.address ? `${selectedPickupPoints?.[index]?.address}` : `--- ${appData?.words["quSelectButton"]} ---`}`}
                    disabled={internalState[`quotation-loading`]}
                    onChange={(e) => handleSelectTaxiDeals({ e, destination: "pickup", index, items: [language === "en" ? { address: `--- ${appData?.words["quSelectButton"]} ---` } : { translatedAddress: `--- ${appData?.words["quSelectButton"]} ---` }, ...quotations[index]?.taxiDeal?.pickupPoints] })}
                >
                    {/* //!  */}
                    {[language === "en" ? { address: `--- ${appData?.words["quSelectButton"]} ---` } : { address: `--- ${appData?.words["quSelectButton"]} ---` },
                    ...quotations[index]?.taxiDeal?.pickupPoints].map((point, index) => {
                        return <option key={index} value={point.adress}> {point.address}</option>
                    }
                    )}
                </select>
            </div>
            : <></>}
        {/* //it means by default we dont have selected so he should select sth in order to see flight number waiting time  */}
        {/* {pickupIdForImage ? */}
        <SelectedPointsOnTransferDetails env={env} isTaxiDeal={true} pointsError={reservationError['selectedPickupPoints']} selectedPoints={selectedPickupPoints} journeyType={index} type='pickup' language={language} />
        {/* : <></>} */}
        <OutsideClickAlert onOutsideClick={(e) => outsideClick({ destination: "pickup", index })}>
            <div className={`${styles.input_div} ${styles['search-input-container']}`} f={String(internalState[`pickup-search-focus-${index}`])} >
                <div className={`${styles.popup_header} ${direction}`} f={String(internalState[`pickup-search-focus-${index}`])}>
                    <i className={`fa-solid fa-xmark ${styles.close_icon}`} onClick={(e) => closeModal({ index, destination: "pickup" })}></i>
                    <p className={direction}>{appData?.words["strFromWithQuestionMark"]} </p>
                </div>
                {selectedPickupPoints.length === 0 && quotations[0]?.taxiDeal?.pickupPoints?.length === 0 ?
                    <input
                        type="text"
                        autoComplete="off"
                        id="input_focused"//this is for scrolling top when ever we focus on mobile
                        placeholder={"Please type the pickup address"}
                        value={internalState[`pickup-search-value-${index}`]}
                        autoFocus={internalState[`pickup-search-focus-${index}`]}
                        f={String(internalState[`pickup-search-focus-${index}`])} //giving a style if we focused
                        onFocus={e => setFocusToInput({ e, destination: "pickup", index })}
                        onChange={(e) => onSelectingPointHandler({ index, destination: 'pickup', value: e.target.value })}
                        className={`${direction} ${reservationError?.selectedPickupPoints?.length > 0 && !internalState[`pickup-search-value-${index}`] && selectedPickupPoints.length === 0 ? styles.error_input : ""}`}
                    /> : <React.Fragment></React.Fragment>}
                {/* loading icon inside input */}
                {internalState[`pickup-search-loading-${index}`] ? <div className={styles.loading_div} popupp={String(internalState[`pickup-search-focus-${index}`])} direction={String(direction === "rtl")} >  <SearchInputLoading />  </div> : <React.Fragment></React.Fragment>}


                {/* if !internalState[`pickup-search-value-${index}`] then our handleSearchResults will be belong to styles.book.input */}
                {!Array.isArray(internalState[`collecting-pickup-points-${index}`]) ?
                    //setInternalState>>>after adding item we set input field  to empty and add extradiv to true
                    <HandleSearchResults env={env} isTaxiDeal={true} language={language} index={index} destination="pickup" setInternalState={setInternalState} collectingPoints={internalState[`collecting-pickup-points-${index}`]} /> : <React.Fragment></React.Fragment>}

            </div>

        </OutsideClickAlert>

    </div>
    <div className={`${styles.search_menu} ${styles.second_column}`}>
        {/* Pick up location text */}
        {!selectedDropoffPoints.length > 0 ? <p className={direction}>{`${appData?.words["strDropoffAddress"]}: ${quotations[0].taxiDeal.dropoff}`}</p> : <React.Fragment></React.Fragment>}
        {/* Pick Points text */}
        {selectedDropoffPoints.length > 0 ? <p className={`${styles.point_title} ${direction}`} >{appData?.words["strDropoffPoints"]}</p> : <React.Fragment></React.Fragment>}
        {/* selectedPoints */}
        {/* //!case 1 => if quotations.points has only one item  =>show selected point*/}
        {/* {quotations[index]?.taxiDeal?.dropoffPoints?.length <= 1 &&
        selectedDropoffPoints.length === 1 && <SelectedPointsOnHomePage env={env} hasOneItem={quotations[index]?.taxiDeal?.dropoffPoints?.length === 1} isTaxiDeal={true} index={index} destination="dropoff" points={selectedDropoffPoints} />} */}
        {
            !(hasSingleDropoffPoint && hasOneSelectedPointDropOff) && hasNoDropoffPoints && hasOneSelectedPointDropOff && (<SelectedPointsOnHomePage env={env} hasOneItem={hasSingleDropoffPoint} isTaxiDeal={true} index={index} destination="dropoff" points={selectedDropoffPoints} />)
        }
        {/* //!case 2 => if quotations.points has more than 1  item  =>show select box*/}
        {quotations[index]?.taxiDeal?.dropoffPoints.length ?
            <div style={{ border: (errorDropoffSelectBox) ? "1px solid red" : "" }} className={styles.taxideals_select_div} direction={String(direction === 'rtl')}>
                {imageObjects && dropoffIdFormImage &&
                    <img className={styles.point_image} src={`${env.apiDomain}${imageObjects[dropoffIdFormImage]}`} alt={selectedDropoffPoints[0]?.address} />}
                <select

                    className={styles.taxideals_select}
                    defaultValue={`${selectedDropoffPoints?.[index]?.address ? `${selectedDropoffPoints?.[index]?.address}` : "--- select dropoff point ---`"}`}
                    disabled={internalState[`quotation-loading`]}
                    onChange={(e) => handleSelectTaxiDeals({ e, destination: "dropoff", index, items: [{ address: `--- select dropoff point ---` }, ...quotations[index]?.taxiDeal?.dropoffPoints] })}
                >
                    {[{ address: `--- select dropoff point ---` }, ...quotations[index]?.taxiDeal?.dropoffPoints].map((point, index) => {
                        return <option key={index} value={point.adress}> {point.address}</option>
                    }
                    )}
                </select>
            </div>
            : <></>}
        <SelectedPointsOnTransferDetails env={env} isTaxiDeal={true} pointsError={reservationError['selectedDropoffPoints']} selectedPoints={selectedDropoffPoints} journeyType={index} type='dropoff' language={language} />
        <OutsideClickAlert onOutsideClick={(e) => outsideClick({ destination: "dropoff", index })}>
            <div className={`${styles.input_div} ${styles['search-input-container']}`} f={String(internalState[`dropoff-search-focus-${index}`])} >
                <div className={`${styles.popup_header} ${direction}`} f={String(internalState[`dropoff-search-focus-${index}`])}>
                    <i className={`fa-solid fa-xmark ${styles.close_icon}`} onClick={(e) => closeModal({ index, destination: "dropoff" })}></i>
                    <p className={direction}>{appData?.words["strWhereWithQuestionMark"]} </p>
                </div>
                {/* //!case 3 => if quotations.points has not has   item  =>show input field */}
                {selectedDropoffPoints.length === 0 && quotations[0]?.taxiDeal?.dropoffPoints?.length === 0 ?
                    <input
                        type="text"
                        autoComplete="off"
                        id="input_focused"//this is for scrolling top when ever we focus on mobile
                        placeholder={appData?.words["strPleaseTypeInTheDropOffAddress"]}
                        value={internalState[`dropoff-search-value-${index}`]}
                        autoFocus={internalState[`dropoff-search-focus-${index}`]}
                        f={String(internalState[`dropoff-search-focus-${index}`])} //giving a style if we focused
                        onFocus={e => setFocusToInput({ e, destination: "dropoff", index })}
                        onChange={(e) => onSelectingPointHandler({ index, destination: 'dropoff', value: e.target.value })}
                        className={`${direction} ${reservationError?.selectedDropoffPoints?.length > 0 && !internalState[`dropoff-search-value-${index}`] && selectedDropoffPoints.length === 0 ? styles.error_input : ""}`}
                    /> : <React.Fragment></React.Fragment>}
                {/* loading icon inside input */}
                {internalState[`dropoff-search-loading-${index}`] ? <div className={styles.loading_div} popupp={String(internalState[`dropoff-search-focus-${index}`])} direction={String(direction === "rtl")}>  <SearchInputLoading />  </div> : <React.Fragment></React.Fragment>}




                {/* results when we get points */}
                {!Array.isArray(internalState[`collecting-dropoff-points-${index}`]) ?
                    <HandleSearchResults env={env} isTaxiDeal={true} language={language} index={index} destination="dropoff" setInternalState={setInternalState} collectingPoints={internalState[`collecting-dropoff-points-${index}`]} /> : <React.Fragment></React.Fragment>}
            </div>
        </OutsideClickAlert>
    </div>
    <div className={styles.date_time_together}>
        <div className={` ${styles.search_menu} ${styles.book_input_date} ${styles.third_column}`}>
            <p className={direction}>{selectedPickupPoints[0]?.pcatId === 1 ? appData?.words["seLandingDate"] : appData?.words["sePickUpDate"]}</p>
            <div className={`${styles.date_div} ${direction === 'rtl' && styles.date_div_rtl}`}>
                <input
                    type="date"
                    name="pickup-date"
                    className={direction === "rtl" ? styles.rtl : ""}
                    value={splitedDate}
                    min={index === 0 ? currentDate() : reservations[0].transferDetails.transferDateTimeString.split(" ")[0]}
                    onChange={(e) => onChangeSetDateTimeHandler({ value: e.target.value, hourOrMinute: "date", journeyType: index })}
                />
            </div>
            <i className={`fa-solid fa-calendar-days ${styles.date_picker_icon}`}></i>
        </div>
        <div className={` ${styles.search_menu} ${styles.hours_minutes} ${styles.fourth_column}`}>
            <p className={direction}>{selectedPickupPoints[0]?.pcatId === 1 ? appData?.words["seLandingTime"] : appData?.words["sePickUpTime"]}</p>
            <div className={`${styles.select_time_div} ${direction}`}>
                {Array.from(new Array(2)).map((arr, i) => {
                    return (
                        <div key={i} className={styles.booking_form_hour_minute_wrapper}>
                            <i className={`fa-sharp fa-solid fa-angle-down ${direction === "rtl" ? styles.left : ""}`}></i>
                            <select
                                defaultValue={i === 0 ? splitedHour : splitedMinute}
                                onChange={(e) => onChangeSetDateTimeHandler({ value: e.target.value, hourOrMinute: i === 0 ? "hour" : "minute", journeyType: index })} >
                                {/* //if index==0 thenhours will show up if not then minutes show up */}
                                {i === 0
                                    ? hours.map((hour) => (<option key={hour.id} id={hour.id} value={hour.value}> {hour.value} </option>))
                                    : minutes.map((minute) => (<option key={minute.id} id={minute.id} value={minute.value}  > {minute.value} </option>))}
                            </select>
                        </div>)
                })}
            </div>
        </div>
    </div>
</div>
  )
}

export default TaxiDealQuotaionFlowSelectedPoints