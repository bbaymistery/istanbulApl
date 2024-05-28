import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import styles from "./styles.module.scss"
import DropOffPoints from './DropOffPoints'
import PickUpPoints from './PickUpPoints'
const PaymentPageSummary = (props) => {
  let { index, selectedPickupPoints, selectedDropoffPoints, firstname, email, phone, passengersNumber, specialRequests, showIcon = false } = props
  let state = useSelector((state) => state.pickUpDropOffActions)
  let { params: { direction, language } } = state

  const { appData } = useSelector(state => state.initialReducer)

  return (
    <div className={styles.journey_summary_panel}>
      <div className={styles.content}>
        <div className={styles.journey_card} direction={String(direction === 'rtl')}>
          <div className={styles.details_div}>
            {!showIcon ? <h5 className={`${direction}`}>{appData?.words["sePickUpLocation"]}</h5> : <></>}
            {showIcon ? <div className={styles.details_headerr_li}>
              <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
              <h5 className={`${direction}`}>{appData?.words["sePickUpLocation"]}</h5>
            </div> : <></>}
            <PickUpPoints showIcon={showIcon} selectedPickupPoints={selectedPickupPoints} direction={direction} language={language} />
            <div className={styles.space}> </div>
            {selectedDropoffPoints.length > 0 && !showIcon ? <h5 className={`${direction}`}>{appData?.words["seDropOffLocation"]}</h5> : <></>}
            {showIcon ? <div className={styles.details_headerr_li}>
              <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
              <h5 className={`${direction}`}>{appData?.words["sePickUpLocation"]}</h5>
            </div> : <></>}
            {selectedDropoffPoints.length > 0 ? <DropOffPoints showIcon={showIcon} selectedDropoffPoints={selectedDropoffPoints} direction={direction} language={language} /> : <></>}
          </div>
        </div>

      </div>
    </div>
  )
}

export default PaymentPageSummary