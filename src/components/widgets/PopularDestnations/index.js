import React, { useState } from 'react';
import styles from "./styles.module.scss";
import { useDispatch, useSelector } from 'react-redux';
import { useVisibility } from '../../../hooks/useVisibility';
import Image from 'next/image';
import airportTranslations, { allTranslations } from '../../../constants/generalTranslataions';
import { navigator } from '../../../constants/navigatior';
import dynamic from 'next/dynamic'
const PointsModal = dynamic(() => import('../../elements/PointsModal'));

const icons = [
    {
        image: "",
        altName: "Paris France",
        location: "Paris France",
        p: "Centipede Tour - Guided Arizona Desert Tour by ATV",
        rate: "4.8 (243)",
        price: "$189.25"
    },
    {
        image: "",
        altName: "New York USA",
        location: "New York USA",
        p: "Molokini and Turtle Town Snorkeling Adventure Aboard",
        rate: "4.8 (243)",
        price: "$225.25"
    },
    {
        image: "",
        altName: "London UK",
        location: "London UK",
        p: "Westminster Walking Tour & Westminster Abbey Entry",
        rate: "4.8 (243)",
        price: "$189.25"
    },
    {
        image: "",
        altName: "New York USA",
        location: "New York USA",
        p: "All Inclusive Ultimate Circle Island Day Tour with Lunch",
        rate: "4.8 (243)",
        price: "$943.25"
    },
    {
        image: "",
        altName: "Paris France",
        location: "Paris France",
        p: "Space Center Houston Admission Ticket",
        rate: "4.8 (243)",
        price: "$235"
    },
    {
        image: "",
        altName: "New York",
        location: "New York",
        p: "Clear Kayak Tour of Shell Key Preserve and Tampa Bay Area",
        rate: "4.8 (243)",
        price: "$235"
    },
    {
        image: "",
        altName: "London UK",
        location: "London UK",
        p: "Westminster Walking Tour & Westminster Abbey Entry",
        rate: "4.8 (243)",
        price: "$189.25"
    },
    {
        image: "",
        altName: "Paris France",
        location: "Paris France",
        p: "Centipede Tour - Guided Arizona Desert Tour by ATV",
        rate: "4.8 (243)",
        price: "$189.25"
    },

]

const tabsBttons = navigator[1].list
const PopularDestinations = (props) => {
    const { showTabs = true, } = props

    const dispatch = useDispatch();
    const state = useSelector(state => state.pickUpDropOffActions);
    const { params: { direction, language, pointsModalStatus, hasTaxiDeals } } = state;
    const { appData } = useSelector(state => state.initialReducer)

    const [tabs, setTabs] = useState(0)
    const [fromAirportToLondon, setFromAirportToLondon] = useState([])
    const [fromLondonToAirport, setfromLondonToAirport] = useState([])
    const [isVisible, ref] = useVisibility();

    const tabsHandler = async (params = {}) => {
        let { index, dealsNameProp } = params
        setTabs(index)
        // fecthPoints({ dealsNameProp, language })
        dispatch({ type: "SET_NAVBAR_TAXI_DEALS", data: { hasTaxiDeals: dealsNameProp } });
    }


    return (
        <div className={`${styles.populardestination} ${direction} page`} >
            {pointsModalStatus && <PointsModal dealsName={hasTaxiDeals} fromLondonToAirport={fromLondonToAirport} fromAirportToLondon={fromAirportToLondon} points={[]} title={"Salam"} />}

            <div className={`${styles.populardestination_section} page_section`}>
                <div className={`${styles.populardestination_section_container} page_section_container`}>
                    {showTabs ?
                        <div className={`${styles.tabs} `}>
                            {tabsBttons.map((btn, index) => {
                                return <button onClick={() => tabsHandler({ index, dealsNameProp: btn.hasTaxiDeals })} className={`${tabs === index ? styles.active : ""} btn`} key={btn.hasTaxiDeals} >
                                    {airportTranslations[language][btn.strInnerText].split("(")[0]}
                                </button>
                            })}
                        </div>
                        : <></>}
                    <div className={styles.title_div}>
                        <h2 ref={ref} className={` ${isVisible ? styles.faderight : ''}`} >
                            {allTranslations["strPopularTours"][language]}
                        </h2>
                        <a href="#" ref={ref} className={` ${isVisible ? styles.fadeleft : ''}`}>
                            <span>{appData.words["strViewAll"]}</span>
                            <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>

                    <div ref={ref} className={`${styles.featureIcons} ${isVisible ? styles.fade_bottom_to_top : ''}`}>
                        {icons.map((icon, idx) => {
                            return (
                                <div className={styles.featureIcon} key={idx}>
                                    <a href="#">
                                        <div className={styles.tourcard_header}>
                                            <div className={styles.tourcard_image}>
                                                <Image src="/images/default.webp" width={250} height={198} style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" alt={icon.altName} />
                                            </div>
                                        </div>
                                        <div className={styles.tourcard_content}>
                                            <div className={styles.location}>
                                                <i className="fa-solid fa-location-dot"></i>
                                                {icon.location}
                                            </div>
                                            <h3 className={styles.title}>
                                                <span>{icon.p}</span>
                                            </h3>
                                            <div className={styles.tourcard_rating}>
                                                <div className={styles.stars}>
                                                    <div><i className="fa-solid fa-star "></i></div>
                                                    <div><i className="fa-solid fa-star "></i></div>
                                                    <div><i className="fa-solid fa-star "></i></div>
                                                    <div><i className="fa-solid fa-star "></i></div>
                                                    <div><i className="fa-solid fa-star "></i></div>
                                                </div>
                                                <span>4.8 (243)</span>
                                            </div>
                                            <div className={styles.tourcard_bottom}>
                                                <div>
                                                    <i className={"fa-solid fa-clock"}></i>
                                                </div>
                                                <div className={styles.price}>
                                                    From <span>{icon.price}</span>
                                                </div>
                                            </div>
                                        </div>

                                    </a>

                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopularDestinations;
