import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import styles from "./styles.module.scss"
import DropOffPoints from './DropOffPoints'
import PickUpPoints from './PickUpPoints'
const PaymentPageSummary = (props) => {
  let { index, selectedPickupPoints, selectedDropoffPoints, firstname, email, phone, passengersNumber, specialRequests } = props
  let state = useSelector((state) => state.pickUpDropOffActions)
  let { params: { direction, language } } = state

  const { appData } = useSelector(state => state.initialReducer)

  return (
    <div className={styles.journey_summary_panel}>
      <div className={styles.content}>
        <div className={styles.journey_card} direction={String(direction === 'rtl')}>
          <div className={styles.details_div}>
            <h5 className={`${direction}`}>{appData?.words["sePickUpLocation"]}</h5>
            <PickUpPoints selectedPickupPoints={selectedPickupPoints} direction={direction} language={language} />
            <div className={styles.space}> </div>
            {selectedDropoffPoints.length > 0 ? <h5 className={`${direction}`}>{appData?.words["seDropOffLocation"]}</h5> : <></>}
            {selectedDropoffPoints.length > 0 ? <DropOffPoints selectedDropoffPoints={selectedDropoffPoints} direction={direction} language={language} /> : <></>}
          </div>
        </div>

      </div>
    </div>
  )
}

export default PaymentPageSummary