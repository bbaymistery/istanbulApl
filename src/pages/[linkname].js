import { createWrapper } from "next-redux-wrapper";
import GlobalLayout from "../components/layouts/GlobalLayout";
import CarsSlider from "../components/widgets/CarsSlider";
import Hero from "../components/widgets/Hero";
import { fetchConfig } from "../resources/getEnvConfig";
import store from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Error404 from './404/index'
import { findMatchingItem, ISvalidPath } from "../constants/popularDestinations";


const NavbarLinkName = (props) => {

    const { env, isItQuationLink = false } = props
    const { params: { language } } = useSelector(state => state.pickUpDropOffActions)
    const dispatch = useDispatch();
    const router = useRouter();
    const { linkname } = router.query;



    useEffect(() => {
        if (!isItQuationLink) {
            const result = findMatchingItem(linkname);
            dispatch({ type: "SET_NAVBAR_TAXI_DEALS", data: { hasTaxiDeals: result.hasTaxiDeals } });
        }
    }, [linkname, dispatch,]);


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