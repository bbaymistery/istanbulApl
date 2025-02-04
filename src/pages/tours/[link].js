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
import SeatlistAdults from './SeatlistAdults';
import { getTourByPathname, getTourPageContentByPathname } from '../../constants/transltatedTourDatas';
import { parseCookies } from '../../helpers/cokieesFunc';
import { parse } from 'url';
import { checkLanguageAttributeOntheUrl } from '../../helpers/checkLanguageAttributeOntheUrl';

const TourContentDetails = (props) => {

    let { data } = props
    if (data === 'not found') {
        return <Error404 />
    }

    let { finalTourDetails, pageContent, tourDetails } = data
    let { headTitle, keywords, metaDescription } = finalTourDetails


    const [loadAlert, setLoadAlert] = useState(true);
    const initialReducer = useSelector(state => (state.initialReducer));
    const { appData } = initialReducer;

    const pickUpDropOffActions = useSelector(state => (state.pickUpDropOffActions));
    const { params: { language, direction }, reservations } = pickUpDropOffActions;
    let transferDate = reservations[0]?.transferDetails?.transferDateTimeString;

    // Loading animation delay
    useEffect(() => {
        if (loadAlert) setTimeout(() => setLoadAlert(false), 550);
    }, [language]);


    return (
        <GlobalLayout title={headTitle} keywords={keywords} description={metaDescription}>
            <div className={`page ${styles.page} `}>
                <SingleTourBreadCrumb finalTourDetails={finalTourDetails} appData={appData} loadAlert={loadAlert} />
                <div className={`page_section ${styles.page_section} `}  >
                    <div className={`page_section_container ${styles.page_section_container} `} style={{ display: "flex", flexDirection: "column" }} >
                        <div className={styles.wrapper}>
                            {/*visible on mobile*/}
                            <MobileSingleTourTitle finalTourDetails={finalTourDetails} appData={appData} loadAlert={loadAlert} />
                            {/*visible on desktop not mobile */}
                            <SingleTourDesktopImages finalTourDetails={finalTourDetails} appData={appData} loadAlert={loadAlert} />
                            {/*display block at the 700px =>for mobile visible*/}
                            <MobileSnapshhotAndSlider finalTourDetails={finalTourDetails} appData={appData} loadAlert={loadAlert} language={language} />
                            {/* adults children infants count component */}
                            <SeatlistAdults language={language} appData={appData} transferDate={transferDate} direction={direction} tourDetails={tourDetails} />
                            <div className={`${styles.page_content} `} dangerouslySetInnerHTML={{ __html: pageContent }} />
                        </div>
                    </div>
                </div>
            </div>
        </GlobalLayout>

    )
}
function adjustPathnameForLanguage(pathname, pageStartLanguage, cookies) {
    if (pageStartLanguage === 'en') {
        pathname = pathname.replace(/^\/_next\/data\/[^/]+\//, '/').replace(/\.[^/.]+$/, '').replace(/\.json$/, '');
        pageStartLanguage = cookies['lang'] || 'en';  // Default to 'en' if no lang cookie is present
    } else {
        //let pathname ='/tr/tours/cambridge-daily-tour'  let pagestartLanguage="tr"
        pathname = pathname.replace(`/${pageStartLanguage}`, '');

    }
    return { pathname, pageStartLanguage };
}
export async function getServerSideProps({ req, res, query }) {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate'); // Cache'i kapat

    // URL'yi al ve küçük harfe çevirerek kontrol et
    const resolvedUrl = req.url || '';
    const lowerCaseUrl = resolvedUrl.toLowerCase();

    if (resolvedUrl !== lowerCaseUrl) {
        res.setHeader('Location', lowerCaseUrl); // Yeni URL'yi ayarla
        res.statusCode = 301; // 301 yönlendirme kodu
        res.end(); // Yanıtı bitir
        return { props: { data: "not found" } }; // Props döndür
    }

    //get cookie and pathnames
    let cookies = parseCookies(req.headers.cookie);
    let language = cookies["lang"] || "en"
    let { pathname } = parse(req.url, true)
    let pageStartLanguage = checkLanguageAttributeOntheUrl(req?.url)

    // Adjust pathname and language based on initial language
    const adjusted = adjustPathnameForLanguage(pathname, pageStartLanguage, cookies);
    pathname = adjusted.pathname;
    pageStartLanguage = adjusted.pageStartLanguage;

    const tourDetails = getTourByPathname(`${pathname}`);
    const pageContent = getTourPageContentByPathname(`${pathname}`, language);

    if (tourDetails.length !== 1) {
        return {
            props: { data: "not found" }
        };
    } else {

        if (pageContent && tourDetails.length === 1) {
            const headTitle = tourDetails[0].headTitle[language]
            const keywords = tourDetails[0].keywords
            const metaDescription = tourDetails[0].metaDescription
            const breadcrumbTitle = tourDetails[0].breadcrumbTitle[language]
            const thumbnailTitle = tourDetails[0].thumbnailTitle
            const pageTitle = tourDetails[0]?.pageTitle[language]
            const images = tourDetails[0]?.images

            //destructuring tourDetails
            const duration = tourDetails[0].duration[language]
            const snapshots = tourDetails[0]?.snapshots
            const review = 2000
            const price = tourDetails[0].price

            //this is where we destruct for the sake of ceo  
            let finalTourDetails = { headTitle, keywords, metaDescription, breadcrumbTitle, thumbnailTitle, pageTitle, images, duration, snapshots, review, price }
            return {
                //we pass tourdetails fot adding inside redux generally all together
                props: { data: { tourDetails, pageContent, finalTourDetails } }
            };
        }
    }
}


export default TourContentDetails;
