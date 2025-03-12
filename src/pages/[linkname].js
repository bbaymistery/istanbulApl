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
import { getAirportPageContentByPathname, getMetaTagSingleAirportPage, getSingleAirportSchemaByPathname } from "../constants/keywordsAndContents/airportsKeywordsContentSchema";
import Head from "next/head";
import { createMetaTagElementsClientSide, renderSchemaScriptsClientSide } from "../helpers/schemaMetaTagHelper";



const NavbarLinkName = (props) => {
    // Destructure props passed from getServerSideProps
    const { env, isItQuationLink = false, data } = props;
    const dispatch = useDispatch();
    const router = useRouter();
    const { linkname } = router.query; // Get the linkname parameter from the query string

    // If server-side validation fails (data is "not found"), render the 404 page
    if (data === "not found") return <Error404 />;
    let { pageContent, schemas, metaTags } = data

    useEffect(() => {
        // If not a "Quotation" link, find the matching item and update Redux state
        if (!isItQuationLink) {
            const result = findMatchingItem(linkname);
            dispatch({ type: "SET_NAVBAR_TAXI_DEALS", data: { hasTaxiDeals: result.hasTaxiDeals } });
        }
    }, [linkname, dispatch]);


    // Render the main layout and components if validation passes
    return (isItQuationLink ? <>Quotation Link </> :
        <GlobalLayout>
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


    let data = { pageContent, schemas, metaTags }
    return { props: { data, isItQuationLink, } }
}
const handleQuotationLink = (params = {}) => {
    let { isItQuationLink = true, } = params
    return { props: { data: "found", isItQuationLink } }
}


// Server-side props function
export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req, res, query, resolvedUrl }) => {
    const { linkname } = query; // Extract the linkname parameter from the query string
    const env = await fetchConfig(); // Fetch environment-specific configuration (e.g., API keys)

    // Disable caching for dynamic responses
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');

    isUrlLoverCase(resolvedUrl, res)

    //get cookie and pathnames
    let cookies = parseCookies(req.headers.cookie);
    let { pathname } = parse(req.url, true)

    let pageStartLanguage = checkLanguageAttributeOntheUrl(req?.url)
    const adjusted = adjustPathnameForLanguage(pathname, pageStartLanguage, cookies);

    pageStartLanguage = adjusted.pageStartLanguage;
    pathname = adjusted.pathname;

    // Validate if the path exists on the server
    const isValid = ISvalidPath(`/${linkname}`);
    if (!isValid) {
        // If the path is invalid, return a "not found" response
        return { props: { data: "not found", env } };
    }

    let isItQuationLink = ifItIsQuotationLink(`/${linkname}`);

    if (isItQuationLink) {
        return handleQuotationLink({ isItQuationLink, pageStartLanguage, pathname, env })
    } else {
        return handleStandartContent({ isItQuationLink, pageStartLanguage, pathname, env });
    }
});
