/**
 * Renders a mobile-optimized title section for a single tour page, including the tour title and a review summary.
 *
 * @param {Object} finalTourDetails - An object containing the final tour details, including the `pageTitle` property.
 * @param {string} review - The review rating for the tour, displayed as a star rating.
 * @param {Object} appData - An object containing app-wide data, including the "strReviews" string.
 * @returns {JSX.Element} - The rendered mobile single tour title section.
 */
import React from 'react'
import styles from "./singletour.module.scss"


const MobileSingleTourTitle = ({ finalTourDetails, review, appData }) => {

    let {pageTitle}=finalTourDetails
    return (
        <div className={`${styles.title_div_mobile}`}>
            <h1>{pageTitle} </h1>
            <div className={styles.title_div_mobile_description}>
                <a href="https://www.reviews.co.uk/company-reviews/store/airport-pickups-london-com" target={"_blank"} title="Airport Pickups London Reviews" className={styles.reviews} rel="noreferrer"   >
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star-half-stroke"></i>
                    <span>{review} {appData?.words["strReviews"]}</span>
                </a>
            </div>
        </div>
    )
}

export default MobileSingleTourTitle