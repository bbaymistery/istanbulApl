
import React from "react";
import { useSelector } from "react-redux";
import GlobalLayout from "../../components/layouts/GlobalLayout";
import styles from "./styles.module.scss";
import { allTranslations } from "../../constants/generalTranslataions";
import { htmlContentsPrivacy, privacyKeywords } from "./htmlContentsPrivacy";
import DangerouslyInnerHtml from "../../components/elements/DangerouslyInnerHtml";
import { checkLanguageAttributeOntheUrl } from "../../helpers/checkLanguageAttributeOntheUrl";
import { parseCookies } from "../../helpers/cokieesFunc";
import { parse } from 'url';

const PrivacyPolicy = (props) => {
    let { metaDescription, keywords, headTitle } = props
    const state = useSelector(state => state.pickUpDropOffActions)
    let { params: { direction, language } } = state

    console.log({
        metaDescription, keywords, headTitle
    });

    return (
        <GlobalLayout title={headTitle} keywords={keywords} description={metaDescription} >
            <div className={`${styles.privacy} ${direction} page`} >
                <div className={`${styles.privacy_section} page_section`}>
                    <div className={`${styles.privacy_section_container} page_section_container`}>
                        <div className={styles.breadcrumb}>
                            <span><a href="/">{allTranslations.strHome[language]}</a></span>
                            <span>{">"}</span>
                            <span><a href="/terms">{allTranslations.strPrivacyPolicy[language]} </a> </span>
                        </div>
                        <div className={styles.terms_container}>
                            <DangerouslyInnerHtml htmContent={htmlContentsPrivacy} language={language} />
                        </div>
                    </div>
                </div>
            </div>
        </GlobalLayout>
    );
}

export default PrivacyPolicy
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

    let metaDescription = privacyKeywords.metaDescription[pageStartLanguage]
    let keywords = privacyKeywords.keywords[pageStartLanguage];
    let headTitle = privacyKeywords.headTitle[pageStartLanguage];




    return {
        //we pass tourdetails fot adding inside redux generally all together
        props: { metaDescription, keywords, headTitle }
    };


}