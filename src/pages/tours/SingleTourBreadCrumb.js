import React from 'react'
import styles from "./singletour.module.scss"
const SingleTourBreadCrumb = ({ tourDetails, loadAlert, appData, language }) => {
  const breadcrumbTitle = tourDetails[0].breadcrumbTitle[language]
  const thumbnailTitle = tourDetails[0].thumbnailTitle
  return (
    <div className={`${styles.descriptions}`}>
      <div className={`page_section`}>
        <div className={`page_section_container ${styles.page_section_container}`} >
          <div className={styles.links}>
            <p>  <a href="/">{appData?.words["strNavHome"]}</a>    </p>
            <p> {`>`} </p>
            <p> <a href="/tours">  {breadcrumbTitle}   </a>   </p>
            {loadAlert ? <></> : <p > {`>`} </p>}
            {loadAlert ? "..." : <p >{thumbnailTitle} </p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleTourBreadCrumb