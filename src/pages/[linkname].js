import { createWrapper } from "next-redux-wrapper";
import GlobalLayout from "../components/layouts/GlobalLayout";
import CarsSlider from "../components/widgets/CarsSlider";
import Hero from "../components/widgets/Hero";
import { fetchConfig } from "../resources/getEnvConfig";
import store from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect, } from "react";
import Error404 from './404/index';
import { findMatchingItem, ISvalidPath } from "../constants/popularDestinations";
import PopularDestinations from "../components/widgets/PopularDestnations";

const NavbarLinkName = (props) => {
    // Destructure props passed from getServerSideProps
    const { env, isItQuationLink = false, data } = props;

    // Get language from Redux state
    const { params: { language } } = useSelector(state => state.pickUpDropOffActions);
    const dispatch = useDispatch();
    const router = useRouter();
    const { linkname } = router.query; // Get the linkname parameter from the query string

    // If server-side validation fails (data is "not found"), render the 404 page
    if (data === "not found") return <Error404 />;


    useEffect(() => {
        // If not a "Quotation" link, find the matching item and update Redux state
        if (!isItQuationLink) {
            const result = findMatchingItem(linkname);
            dispatch({ type: "SET_NAVBAR_TAXI_DEALS", data: { hasTaxiDeals: result.hasTaxiDeals } });
        }
    }, [linkname, dispatch]);



    // Render the main layout and components if validation passes
    return (
        <GlobalLayout>
            <Hero islinknamecomponent={true} env={env} />
            <PopularDestinations islinknamecomponent={true} />
            <CarsSlider bggray={true} />
        </GlobalLayout>
    );
};

export default NavbarLinkName;

// Create the Redux store wrapper
const makestore = () => store;
const wrapper = createWrapper(makestore);

// Server-side props function
export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req, res, query, resolvedUrl }) => {
    const { linkname } = query; // Extract the linkname parameter from the query string
    const env = await fetchConfig(); // Fetch environment-specific configuration (e.g., API keys)


    // Disable caching for dynamic responses
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');

    // Ensure URLs are lowercase to avoid case mismatches and enforce SEO best practices
    const lowerCaseUrl = resolvedUrl.toLowerCase();
    if (resolvedUrl !== lowerCaseUrl) {
        // Redirect to the lowercase version if the URL isn't already lowercase
        res.setHeader('Location', lowerCaseUrl);
        res.statusCode = 301;
        res.end();
        return { props: { data: "not found" } };
    }

    // Validate if the path exists on the server
    const isValid = ISvalidPath(`/${linkname}`);
    if (!isValid) {
        // If the path is invalid, return a "not found" response
        return { props: { data: "not found", env } };
    }

    // If the path is valid, return the data and environment config
    return { props: { data: "found", env } };
});
