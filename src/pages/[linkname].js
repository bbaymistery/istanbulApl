import { createWrapper } from "next-redux-wrapper";
import GlobalLayout from "../components/layouts/GlobalLayout";
import CarsSlider from "../components/widgets/CarsSlider";
import Hero from "../components/widgets/Hero";
import { fetchConfig } from "../resources/getEnvConfig";
import store from "../store/store";
import { useSelector } from "react-redux";

const NavbarLinkName = (props) => {

    const { env = "", mainCanonicalUrl = "" } = props
    const { params: { language, hasTaxiDeals } } = useSelector(state => state.pickUpDropOffActions)
    console.log({ hasTaxiDeals });

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