import React, { useEffect, useState } from 'react';
import styles from "./styles.module.scss";
import { useDispatch, useSelector } from 'react-redux';
import { useVisibility } from '../../../hooks/useVisibility';
import Image from 'next/image';
import airportTranslations, { allTranslations } from '../../../constants/generalTranslataions';
import { navigator } from '../../../constants/navigatior';
import dynamic from 'next/dynamic'
import airportPoints from '../../../constants/popularDestinations';
import { getTitleStringOfHastaxiDeals } from '../../../helpers/splitHelper';
const PointsModal = dynamic(() => import('../../elements/PointsModal'));



const tabsBttons = navigator[1].list
const PopularDestinations = (props) => {
    const { showTabs = true, islinknamecomponent = false } = props

    const dispatch = useDispatch();
    const state = useSelector(state => state.pickUpDropOffActions);
    const { params: { direction, language, pointsModalStatus, hasTaxiDeals } } = state;
    const { appData } = useSelector(state => state.initialReducer)

    const [points, setPoints] = useState(airportPoints[hasTaxiDeals])

    const [tabs, setTabs] = useState(0)
    const [isVisible, ref] = useVisibility();

    const tabsHandler = async (params = {}) => {
        let { index, dealsNameProp } = params
        setTabs(index)
        // fecthPoints({ dealsNameProp, language })
        dispatch({ type: "SET_NAVBAR_TAXI_DEALS", data: { hasTaxiDeals: dealsNameProp } });
    }
    const setModal = () => {
        dispatch({ type: "SET_POINTS_MODAL", data: { trueOrFalse: true } })
        document.body.style.overflow = "hidden";
    }
    useEffect(() => {
        setPoints(airportPoints[hasTaxiDeals])
    }, [hasTaxiDeals, language])

    return (
        <div className={`${styles.populardestination} ${direction} page`} >
            {pointsModalStatus && <PointsModal dealsName={hasTaxiDeals} points={points} title={getTitleStringOfHastaxiDeals(hasTaxiDeals, language)} language={language} />}

            <div className={`${styles.populardestination_section} page_section`}>
                <div className={`${styles.populardestination_section_container} page_section_container`}>
                    {!islinknamecomponent && showTabs ?
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
                            {islinknamecomponent ? getTitleStringOfHastaxiDeals(hasTaxiDeals, language) : allTranslations["strPopularTours"][language]}
                        </h2>
                        <p ref={ref} className={` ${isVisible ? styles.fadeleft : ''}`} onClick={() => { setModal() }}>
                            <span style={{ paddingRight: "10px" }}>{appData.words["strViewAll"]}</span>
                            <i className="fa-solid fa-arrow-right"></i>
                        </p>
                    </div>

                    <div ref={ref} className={`${styles.featureIcons} ${isVisible ? styles.fade_bottom_to_top : ''}`}>
                        {points.slice(0, 8).map((item, idx) => {
                            let path = language === 'en' ? `/${item.linkUrl}` : `/${language}/${item.linkUrl}`
                            return (
                                <div className={styles.featureIcon} key={idx}>
                                    <a href={path}>
                                        <div className={styles.tourcard_header}>
                                            <div className={styles.tourcard_image}>
                                                <Image style={{ height: "auto", width: "100%", objectFit: 'cover' }} src={item.imageUrl ? item.imageUrl : "/images/default.webp"} width={250} height={198} alt={item[language]} />
                                            </div>
                                        </div>
                                        <div className={styles.tourcard_content}>
                                            <div className={styles.location}>
                                                <i className="fa-solid fa-location-dot"></i>
                                                {item.location}
                                            </div>
                                            <h3 className={styles.title}>
                                                <span>{item[language]}</span>
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
                                                    From <span>£ {item.price} </span>
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
