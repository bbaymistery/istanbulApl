import React from 'react'
import styles from "./singletour.module.scss"
/**
 * MobileSingleTourTitle Component
 *
 * This component displays the title of the tour along with the review rating on mobile screens.
 *
 * Props:
 * @param {Object} tourDetails - Contains details about the selected tour.
 * @param {number} review - Number of reviews for the tour.
 * @param {Object} appData - Contains UI translations and other app-wide data.
 * @param {string} language - Current language for translation.
 *
 * Features:
 * - Displays the tour title dynamically based on the selected language.
 * - Shows a 5-star rating representation along with the total number of reviews.
 * - The review section is linked to an external review site.
 *

 * Functionality:
 * - The title is extracted from `tourDetails[0]?.pageTitle[language]`.
 * - The review count is dynamically displayed with localized text.
 * - The review section provides a link to an external review platform.
 */

const MobileSingleTourTitle = ({ tourDetails, review, appData, language }) => {
    const pageTitle = tourDetails[0]?.pageTitle[language]
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