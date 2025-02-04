/**
 * Renders a breadcrumb navigation component for a single tour page.
 *
 * @param {Object} finalTourDetails - An object containing details about the tour, including the breadcrumb title and thumbnail title.
 * @param {boolean} loadAlert - A flag indicating whether to show a loading alert.
 * @param {Object} appData - An object containing application data, including the localized text for the "Home" navigation link.
 * @returns {JSX.Element} - The rendered breadcrumb navigation component.
 */
import React from 'react'
import styles from "./singletour.module.scss"
const SingleTourBreadCrumb = ({ finalTourDetails, loadAlert, appData }) => {

  let { breadcrumbTitle, thumbnailTitle } = finalTourDetails
  return (
    <div className={`${styles.descriptions}`}>
      <div className={`page_section`}>
        <div className={`page_section_container ${styles.page_section_container}`} >
          <div className={styles.links}>
            <p><a href="/">{appData?.words["strNavHome"]}</a></p>
            <p> {`>`} </p>
            <p> <a href="/tours">{breadcrumbTitle}</a></p>
            {loadAlert ? <></> : <p > {`>`} </p>}
            {loadAlert ? "..." : <p >{thumbnailTitle} </p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleTourBreadCrumb