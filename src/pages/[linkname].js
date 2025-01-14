import { createWrapper } from "next-redux-wrapper";
import GlobalLayout from "../components/layouts/GlobalLayout";
import CarsSlider from "../components/widgets/CarsSlider";
import Hero from "../components/widgets/Hero";
import { fetchConfig } from "../resources/getEnvConfig";
import store from "../store/store";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Error404 from './404/index'

const navigator = [
    { path: "/" },
    { path: "/istanbul-airport-taxi-prices" },
    { path: "/sabiha-gokcen-airport-taxi-prices" },
    { path: "/dalaman-airport-taxi-prices" },
    { path: "/antalya-airport-taxi-prices" },
    { path: "/bodrum-milas-airport-taxi-prices" },
    { path: "/terms" },
    { path: "/fleet" },
    { path: "/manage-booking.html" },
    { path: "/contact-us" },
];
const NavbarLinkName = (props) => {

    const { env } = props
    const { params: { language, hasTaxiDeals } } = useSelector(state => state.pickUpDropOffActions)
    const router = useRouter();

    const isValidPath = navigator.some((route) =>
        router.pathname.includes(route.path)
    );

    if (!isValidPath) {
        return <Error404 />;
    }

    return (
        <GlobalLayout >
            <Hero islinknamecomponent={true} env={env} />
            <CarsSlider bggray={true} />
        </GlobalLayout>

    )
}

export default NavbarLinkName
const makestore = () => store;
const wrapper = createWrapper(makestore);
export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req, res, ...etc }) => {
    const env = await fetchConfig();
    return { props: { data: "not found", env } }
});