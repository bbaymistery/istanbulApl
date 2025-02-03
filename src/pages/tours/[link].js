import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import GlobalLayout from "../../components/layouts/GlobalLayout";
import Error404 from '../404/index';
import MobileSingleTourTitle from './MobileSingleTourTitle';
import MobileSnapshhotAndSlider from './MobileSnapshhotAndSlider';
import styles from "./singletour.module.scss";
import SingleTourBreadCrumb from './SingleTourBreadCrumb';
import SingleTourDesktopImages from './SingleTourDesktopImages';
import { getTourByPathname, getTourPageContentByPathname } from './transltatedTourDatas';
import SeatlistAdults from './SeatlistAdults';

const TourContentDetails = () => {

    const router = useRouter()
    const [loadAlert, setLoadAlert] = useState(true);


    const  initialReducer= useSelector(state => ( state.initialReducer));
    const { appData } = initialReducer;

    const  pickUpDropOffActions= useSelector(state => ( state.pickUpDropOffActions));
    const { params: { language, direction }, reservations } = pickUpDropOffActions;
    let transferDate = reservations[0]?.transferDetails?.transferDateTimeString;


    const tourDetails = getTourByPathname(`/tours/${router.query.link}`);
    if (tourDetails.length !== 1) {
        return <Error404 />
    }
    const pageContent = getTourPageContentByPathname(`/tours/${router.query.link}`, language);
    const headTitle = tourDetails[0].headTitle[language]
    const keywords = tourDetails[0].keywords
    const metaDescription = tourDetails[0].metaDescription

    // Loading animation delay
    useEffect(() => {
        if (loadAlert) setTimeout(() => setLoadAlert(false), 550);
    }, [language]);


    return (
        <GlobalLayout title={headTitle} keywords={keywords} description={metaDescription}>
            <div className={`page ${styles.page} `}>
                <SingleTourBreadCrumb tourDetails={tourDetails} appData={appData} loadAlert={loadAlert} language={language} />
                <div className={`page_section ${styles.page_section} `}  >
                    <div className={`page_section_container ${styles.page_section_container} `} style={{ display: "flex", flexDirection: "column" }} >
                        <div className={styles.wrapper}>
                            {/*visible on mobile*/}
                            <MobileSingleTourTitle tourDetails={tourDetails} appData={appData} loadAlert={loadAlert} language={language} />
                            {/*visible on desktop not mobile */}
                            <SingleTourDesktopImages tourDetails={tourDetails} appData={appData} loadAlert={loadAlert} />
                            {/*display block at the 700px =>for mobile visible*/}
                            <MobileSnapshhotAndSlider tourDetails={tourDetails} appData={appData} loadAlert={loadAlert} language={language} />
                            {/* adults children infants count component */}
                            <SeatlistAdults language={language} appData={appData} transferDate={transferDate} direction={direction}  tourDetails={tourDetails}/>
                            <div className={`${styles.page_content} `} dangerouslySetInnerHTML={{ __html: pageContent }} />
                        </div>
                    </div>
                </div>
            </div>
        </GlobalLayout>

    )
}




export default TourContentDetails;
