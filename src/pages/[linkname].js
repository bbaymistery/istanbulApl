import { createWrapper } from "next-redux-wrapper";
import GlobalLayout from "../components/layouts/GlobalLayout";
import CarsSlider from "../components/widgets/CarsSlider";
import Hero from "../components/widgets/Hero";
import { parse } from 'url';
import { fetchConfig } from "../resources/getEnvConfig";
import store from "../store/store";
import { useDispatch, } from "react-redux";
import { useRouter } from "next/router";
import { useEffect, } from "react";
import Error404 from './404/index';
import { findMatchingItem, ifItIsQuotationLink, ISvalidPath } from "../constants/popularDestinations";
import PopularDestinations from "../components/widgets/PopularDestnations";
import { isUrlLoverCase } from "../helpers/isUrlLoverCase";
import { parseCookies } from "../helpers/cokieesFunc";
import { checkLanguageAttributeOntheUrl } from "../helpers/checkLanguageAttributeOntheUrl";
import { adjustPathnameForLanguage } from "../helpers/adjustedPageLanguage";
import LinkNameDescription from "../components/elements/LinkNameDescription";
import { getAirportPageContentByPathname, getMetaTagSingleAirportPage, getSingleAirportSchemaByPathname, getSinglekeywordsTitleAirportPage } from "../constants/keywordsAndContents/airportsKeywordsContentSchema";
import Head from "next/head";
import { createMetaTagElementsClientSide, renderSchemaScriptsClientSide } from "../helpers/schemaMetaTagHelper";
import { getMetaTagPopularDestinationPage, getPopularDestinationsPageContentByPathname, getSinglekeywordsTitlePopularDestinationPage, getSinglePopularDestinationSchemaByPathname } from "../constants/keywordsAndContents/popularDestinationsKeywordsContents/popularKeywordsContents";
import DangerouslyInnerHtml from "../components/elements/DangerouslyInnerHtml";



const NavbarLinkName = (props) => {
    // Destructure props passed from getServerSideProps
    const { env, isItQuationLink = false, data } = props;
    const dispatch = useDispatch();
    const router = useRouter();
    const { linkname } = router.query; // Get the linkname parameter from the query string

    // If server-side validation fails (data is "not found"), render the 404 page
    if (data === "not found") return <Error404 />;
    let { pageContent, schemas, metaTags, keywords, headTitle, metaDescription, } = data

    useEffect(() => {
        // If not a "Quotation" link, find the matching item and update Redux state
        if (!isItQuationLink) {
            const result = findMatchingItem(linkname);
            dispatch({ type: "SET_NAVBAR_TAXI_DEALS", data: { hasTaxiDeals: result.hasTaxiDeals } });
        }
    }, [linkname, dispatch]);



    // Render the main layout and components if validation passes
    return (isItQuationLink ?
        <GlobalLayout title={headTitle} keywords={keywords} description={metaDescription} >
            <Head>
                {createMetaTagElementsClientSide(metaTags)}
                {renderSchemaScriptsClientSide(schemas)}
            </Head>
            <DangerouslyInnerHtml htmContent={pageContent} />
        </GlobalLayout>
        :
        <GlobalLayout title={headTitle} keywords={keywords} description={metaDescription} >
            <Head>
                {createMetaTagElementsClientSide(metaTags)}
                {renderSchemaScriptsClientSide(schemas)}
            </Head>
            <Hero islinknamecomponent={true} env={env} />
            <PopularDestinations islinknamecomponent={true} />
            {pageContent.length > 0 && <LinkNameDescription pageContent={pageContent} />}
            <CarsSlider bggray={true} />
        </GlobalLayout>
    );
};

export default NavbarLinkName;

// Create the Redux store wrapper
const makestore = () => store;
const wrapper = createWrapper(makestore);

const handleStandartContent = (params = {}) => {

    let { isItQuationLink = false, pageStartLanguage: language, pathname, env } = params

    const pageContent = getAirportPageContentByPathname(pathname, language);
    const schemas = [getSingleAirportSchemaByPathname(pathname, language)]
    const metaTags = getMetaTagSingleAirportPage(pathname, language, env);
    const { keywords, headTitle, metaDescription } = getSinglekeywordsTitleAirportPage(pathname, language);

    let data = { pageContent, schemas, metaTags, keywords, headTitle, metaDescription }
    return { props: { data, isItQuationLink, } }
}


const handleQuotationLink = (params = {}) => {

    let { isItQuationLink = true, pageStartLanguage: language, pathname, env, hasTaxiDeals } = params

    const pageContent = getPopularDestinationsPageContentByPathname(pathname, language, hasTaxiDeals);
    const metaTags = getMetaTagPopularDestinationPage(pathname, language, env, hasTaxiDeals);
    const { keywords, headTitle, metaDescription } = getSinglekeywordsTitlePopularDestinationPage(pathname, language, hasTaxiDeals);
    let schemas = getSinglePopularDestinationSchemaByPathname(env, hasTaxiDeals, pathname, language);

    if (schemas) {
        schemas = Object.keys(schemas).map(key => ({ [key]: schemas[key] }));//array of objects [b:{ab:"1"},c:{ab:"2"},d:{ab:"3"}]
        schemas = schemas.map(obj => Object.values(obj)[0]);//Output: ["1", "2", "3"]
    }

    let data = { pageContent, metaTags, keywords, headTitle, metaDescription, schemas }
    return { props: { data, isItQuationLink } }
}


// Server-side props function
export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req, res, query, resolvedUrl }) => {
    const { linkname } = query; // Extract the linkname parameter from the query string
    const env = await fetchConfig(); // Fetch environment-specific configuration (e.g., API keys)

    // Disable caching for dynamic responses
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');

    isUrlLoverCase(resolvedUrl, res);

    // Get cookies and pathnames
    let cookies = parseCookies(req.headers.cookie);
    let { pathname } = parse(req.url, true);

    let pageStartLanguage = checkLanguageAttributeOntheUrl(req?.url);
    const adjusted = adjustPathnameForLanguage(pathname, pageStartLanguage, cookies);

    pageStartLanguage = adjusted.pageStartLanguage;
    pathname = adjusted.pathname;

    // Validate if the path exists on the server
    const isValid = ISvalidPath(`/${linkname}`);
    if (!isValid) {
        // If the path is invalid, return a "not found" response
        return { props: { data: "not found", env } };
    }

    // Determine hasTaxiDeals based on linkname prefix
    let hasTaxiDeals = "IST"; // Default value

    if (linkname.startsWith("istanbul")) hasTaxiDeals = "IST";
    else if (linkname.startsWith("sabiha-")) hasTaxiDeals = "SAW";
    else if (linkname.startsWith("antalya-")) hasTaxiDeals = "AYT";
    else if (linkname.startsWith("dalaman-")) hasTaxiDeals = "DLM";
    else if (linkname.startsWith("bodrum-")) hasTaxiDeals = "BJY";
    else if (linkname.startsWith("izmir-adnan-")) hasTaxiDeals = "ADB";
    else if (linkname.startsWith("gazipasa-")) hasTaxiDeals = "GZP";

    let isItQuationLink = ifItIsQuotationLink(`/${linkname}`);

    if (isItQuationLink) {
        return handleQuotationLink({ isItQuationLink, pageStartLanguage, pathname, env, hasTaxiDeals });
    } else {
        return handleStandartContent({ isItQuationLink, pageStartLanguage, pathname, env });
    }
});
