import GlobalLayout from "../../components/layouts/GlobalLayout";
import { getTourByPathname, getTourMetaTagsByPathname, getTourPageContentByPathname } from '../../constants/transltatedTourDatas';
import { parseCookies } from '../../helpers/cokieesFunc';
import { parse } from 'url';
import { checkLanguageAttributeOntheUrl } from '../../helpers/checkLanguageAttributeOntheUrl';
import { fetchConfig } from '../../resources/getEnvConfig';
import { useWindowSize } from '../../hooks/useWindowSize';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Head from "next/head";
import SeatlistAdults from "./SeatlistAdults";
import MobileSnapshhotAndSlider from "./MobileSnapshhotAndSlider";
import SingleTourDesktopImages from "./SingleTourDesktopImages";
import MobileSingleTourTitle from "./MobileSingleTourTitle";
import SingleTourBreadCrumb from "./SingleTourBreadCrumb";
import styles from "./singletour.module.scss";
import { singleTourSchema, tourDescriptionName } from "./schema";

const TourContentDetails = (props) => {

    let { data } = props
    if (data === 'not found') {
        return <Error404 />
    }
    let { finalTourDetails, pageContent, tourDetails, } = props
    let { headTitle, keywords, metaDescription, metaTags } = finalTourDetails
    console.log(tourDetails);

    const [loadAlert, setLoadAlert] = useState(true);
    const initialReducer = useSelector(state => (state.initialReducer));
    const { appData } = initialReducer;

    const pickUpDropOffActions = useSelector(state => (state.pickUpDropOffActions));
    const { params: { language, direction }, reservations } = pickUpDropOffActions;
    let transferDate = reservations[0]?.transferDetails?.transferDateTimeString;


    const createMetaTagElements = (metaTags) => {
        if (metaTags.length > 0) {
            return metaTags.map((tagString, index) => {

                // Match meta tags in the provided strings
                const matches = tagString.match(/<meta [^>]+>/g);
                if (matches) {
                    return matches.map((metaTag, idx) => {
                        const props = {};
                        metaTag.replace(/(\w+)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/g, (m, key, value) => {
                            props[key] = value;
                            return m;
                        });
                        return <meta {...props} key={`meta-${index}-${idx}`} />;
                    });
                }
                // Match meta tags in the provided strings   For link tags  
                const linkMatches = tagString.match(/<link [^>]+>/g);
                if (linkMatches) {
                    return linkMatches.map((linkTag, idx) => {
                        const props = {};
                        linkTag.replace(/(\w+)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/g, (m, key, value) => {
                            props[key] = value;
                            return m;
                        });
                        return <link {...props} key={`link-${index}-${idx}`} />;
                    });
                }
                return null;
            });
        }
    }

    const { width } = useWindowSize();

    useEffect(() => {
        setLoadAlert(true);
        const timer = setTimeout(() => { setLoadAlert(false) }, 1200);
        return () => clearTimeout(timer);
    }, [language]);
    return (
        <GlobalLayout title={headTitle} keywords={keywords} description={metaDescription}>
            <Head>
                {createMetaTagElements(metaTags)}
            </Head>
            <div className={`page ${styles.page} `}>
                <SingleTourBreadCrumb finalTourDetails={finalTourDetails} appData={appData} loadAlert={loadAlert} />
                <div className={`page_section ${styles.page_section} `}  >
                    <div className={`page_section_container ${styles.page_section_container} `} style={{ display: "flex", flexDirection: "column" }} >
                        <div id="Wrapper" className={styles.wrapper}>
                            {/*visible on mobile*/}
                            {width <= 990 ? <MobileSingleTourTitle finalTourDetails={finalTourDetails} appData={appData} loadAlert={loadAlert} /> : null}
                            {/*visible on desktop not mobile */}
                            <SingleTourDesktopImages finalTourDetails={finalTourDetails} appData={appData} loadAlert={loadAlert} />
                            {/*display block at the 700px =>for mobile visible*/}
                            {<MobileSnapshhotAndSlider finalTourDetails={finalTourDetails} appData={appData} loadAlert={loadAlert} />}
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
export async function getServerSideProps({ req, res, query, resolvedUrl }) {

    const env = await fetchConfig(); // Fetch environment-specific configuration (e.g., API keys)
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate'); // Cache'i kapat

    // URL'yi al ve küçük harfe çevirerek kontrol et
    // const resolvedUrl = req.url || '';
    const lowerCaseUrl = resolvedUrl.toLowerCase();

    if (resolvedUrl !== lowerCaseUrl) {
        res.setHeader('Location', lowerCaseUrl); // Yeni URL'yi ayarla
        res.statusCode = 301; // 301 yönlendirme kodu
        res.end(); // Yanıtı bitir
        return { props: { data: "not found" } }; // Props döndür
    }

    //get cookie and pathnames
    let cookies = parseCookies(req.headers.cookie);
    let { pathname } = parse(req.url, true)
    let pageStartLanguage = checkLanguageAttributeOntheUrl(req?.url)

    // Adjust pathname and language based on initial language
    const adjusted = adjustPathnameForLanguage(pathname, pageStartLanguage, cookies);
    pathname = adjusted.pathname;
    pageStartLanguage = adjusted.pageStartLanguage;

    const tourDetails = getTourByPathname(`${pathname}`);

    if (tourDetails.length !== 1) {
        return {
            props: { data: "not found" }
        };
    } else {




        let language = pageStartLanguage;
        const pageContent = getTourPageContentByPathname(`${pathname}`, language);
        const metaTags = getTourMetaTagsByPathname(pathname, language, env);
        const headTitle = tourDetails[0].headTitle[language]
        const keywords = tourDetails[0].keywords[language]
        const metaDescription = tourDetails[0].metaDescription[language]
        const breadcrumbTitle = tourDetails[0].breadcrumbTitle[language]
        const thumbnailTitle = tourDetails[0].thumbnailTitle[language]
        const pageTitle = tourDetails[0]?.pageTitle[language]
        const images = tourDetails[0]?.images

        //destructuring tourDetails
        const duration = tourDetails[0].duration[language]
        const snapshots = tourDetails[0]?.snapshots
        const review = 2000
        const price = tourDetails[0].price


        //!Handling schema 
        const schemaData = singleTourSchema(
            env,
            pathname,
            language,
            200,
            tourDescriptionName[pathname].tourName[language],
            tourDescriptionName[pathname].description[language],
            new Date().toISOString()
        );
        let schemaOfTourDetails = schemaData || []
        schemaOfTourDetails = Object.keys(schemaOfTourDetails).map(key => ({ [key]: schemaOfTourDetails[key] }));//array of objects [b:{ab:"1"},c:{ab:"2"},d:{ab:"3"}]
        schemaOfTourDetails = schemaOfTourDetails.map(obj => Object.values(obj)[0]);//Output: ["1", "2", "3"]

        tourDetails[0].schema = schemaOfTourDetails;
        console.log(tourDetails);

        let finalTourDetails = {
            headTitle, keywords, metaDescription, breadcrumbTitle,
            thumbnailTitle, pageTitle, images, duration, snapshots,
            review, price, metaTags,
        }
        return {
            //we pass tourdetails fot adding inside redux generally all together
            props: { tourDetails, pageContent, finalTourDetails, }
        };
    }

}


export default TourContentDetails;
