
import React from 'react'
import { useSelector } from 'react-redux'
import styles from "./styles.module.scss"
import DropOffPoints from './DropOffPoints'
import PickUpPoints from './PickUpPoints'
/**
 * Renders a payment page summary component that displays the selected pickup and drop-off points.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.selectedPickupPoints - The selected pickup points.
 * @param {Array} props.selectedDropoffPoints - The selected drop-off points.
 * @param {boolean} [props.showIcon=false] - Whether to show the location icon.
 * @returns {JSX.Element} - The payment page summary component.
 */
const PaymentPageSummary = (props) => {
  let { selectedPickupPoints, selectedDropoffPoints, showIcon = false } = props
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