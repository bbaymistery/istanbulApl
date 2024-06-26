import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import { quotationImagesObjWebp } from '../../../constants/quotationImages'
import styles from "./styles.module.scss"
const TransferJourneySummaryPanel = (props) => {
    let { index, quotation, selectedPickupPoints, selectedDropoffPoints, splitedDate, splitedHour, splitedMinute, isTaxiDeal = false, journeyType } = props

    let state = useSelector((state) => state.pickUpDropOffActions)
    let { params: { quotations, direction } } = state

    const { appData } = useSelector(state => state.initialReducer)
    //cartypes object for card item as {1:{image:'sds, name:Economy}}
    const carObject = appData?.carsTypes?.reduce((obj, item) => ({ ...obj, [item.id]: item, }), {});
    //https://www.tripadvisor.co.uk/Attraction_Review-g186338-d11966434-Reviews-Airport_Pickups_London-London_England.html

    return (
        <div className={`${styles.journey_summary_panel}`}>
            <div className={styles.content}>
                <h3>{index === 0 ? appData?.words["strYourBookingDetails"] : appData?.words["strReturnJourneyDetails"]}</h3>
                <div className={`${styles.journey_card} ${direction === 'rtl' && styles.rtljourney_card}`}>

                    <div d={quotation.carId}
                        className={`${styles.img_div}
                          ${quotation.carId === 6 || quotation.carId === 5 ? styles.cardIdSix : ""} 
                          ${quotation.carId === 3 || quotation.carId === 3 ? styles.cardIdThree : ""} 
                          ${quotation.carId === 4 ? styles.carIdFour : ""}
                           ${quotation.carId === 2 ? styles.carIdTwo : ""}`}
                        style={{ backgroundImage: `url(${quotationImagesObjWebp[quotation?.carId]?.image})` }}>
                        <div className={styles.stars}>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star-half-stroke"></i>
                        </div>


                    </div>
                    <div className={styles.details_div}>
                        <div id="from to" className={styles.fromto}>
                            <h5> {appData?.words["strFrom2"]}:      </h5>
                            {selectedPickupPoints.map((pickup, i) => { return <li key={i}><span>{isTaxiDeal ? "" : `${i + 1}. `}  {pickup.address}</span></li> })}
                            <h5>{appData?.words["strTo"]}:</h5>
                            {selectedDropoffPoints.map((dropoff, i) => { return <li key={i + 15}><span>{isTaxiDeal ? "" : `${i + 1}. `} {dropoff.address}</span></li> })}
                            <h5>{appData?.words["strOn"]}:</h5>
                            <li>
                                <span>
                                    {direction === 'rtl'
                                        ? `${splitedDate.split(" ")[0].replace(/(\d+)\-(\d+)-(\d+)/, "$1-$2-$3")}`
                                        : `${splitedDate.split(" ")[0].replace(/(\d+)\-(\d+)-(\d+)/, "$3-$2-$1")}`}

                                    &nbsp;
                                    {`${splitedHour}:${splitedMinute}`}
                                </span>
                            </li>
                 
                        </div>
                    </div>
                </div>
                <div className={styles.total_journey}>
                    <div className={styles.text_1}>{appData?.words["strTotalLengthofJourney"]} </div>
                    <div className={styles.duration}>
                        <span>{appData?.words["strDistance"]}</span>
                        <span>{quotations[index].distance}</span>
                    </div>
                    <div className={styles.duration}>
                        <span>{appData?.words["strJourneyDurationTitle"]}</span>
                        <span>{quotations[index].duration}</span>
                    </div>
                </div>

                <div style={{ border: 'none' }} className={styles.total_journey}>
                    <div className={styles.text_1}>{appData?.words["strYourVehicleDetails"]}</div>
                    <div className={styles.duration}>
                        <span>{carObject[quotation.carId]?.transferType}</span>
                    </div>
                    <div className={styles.duration}>
                        <span>{appData?.words["strMax"]}</span>
                        <span>
                            {appData.words["strCarFeatureMaxSuitcases"].replace("{{}}", carObject[quotation.carId]?.suitcases)}
                        </span>
                    </div>
                    <div className={styles.duration}>
                        <span>{appData?.words["strMax"]}</span>
                        <span>
                            {appData.words["strCarFeatureMaxPassengers"].replace("{{}}", carObject[quotation.carId]?.pax)}
                        </span>
                    </div>
                    { <Link href="/quotation-results" style={{ textTransform: "capitalize" }}> {appData?.words["strChangeCar"]} </Link>}
                </div>
                <div className={styles.price_div}>
                    <div className={styles.text_1}>{appData?.words["strPriceTitle"]} </div>
                    <div className={styles.price}>£ {quotation.price}  </div>
                </div>
            </div>
        </div>
    )
}

export default TransferJourneySummaryPanel
