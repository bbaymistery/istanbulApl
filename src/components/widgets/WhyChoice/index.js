import React from 'react';
import styles from "./styles.module.scss";
import { useSelector } from 'react-redux';
import { useVisibility } from '../../../hooks/useVisibility';
import translations from './translations';
const icons = [
    {
        image: "/images/icons/ticket.webp",
        altName: "icon",
        i: "fa-solid fa-ticket"
    },
    {
        image: "/images/icons/hot-air-balloon.webp",
        altName: "icon",
        i: "fa-solid fa-plane-departure"
    },
    {
        image: "/images/icons/diamond.webp",
        altName: "icon",
        i: "fa-solid fa-gem"
    },
    {
        image: "/images/icons/medal.webp",
        altName: "icon",
        i: "fa-solid fa-award"
    },
]
const WhyChoice = () => {
    const state = useSelector(state => state.pickUpDropOffActions);
    const { params: { direction, language } } = state;

    const [isVisible, ref] = useVisibility();
    const translation = translations[language] || translations.en;
    return (
        <div className={`${styles.whychoice} ${direction} page`} >
            <div className={`${styles.whychoice_section} page_section`}>
                <div className={`${styles.whychoice_section_container} page_section_container`}>
                    {/* <h2 ref={ref} className={`${isVisible ? styles.fade_bottom_to_top : ''}`}>
                        {translation.title}
                    </h2> */}
                    <div ref={ref} className={`${styles.featureIcons} ${isVisible ? styles.fade_bottom_to_top : ''}`}>
                        {icons.map((icon, idx) => {
                            const content = translation.icons[idx];
                            return (
                                <div className={styles.featureIcon} key={idx}>
                                    <div className={styles.featureIcon_icon}>
                                        <i className={icon.i}></i>
                                    </div>
                                    <h2>{content.mainTitle}</h2>
                                    <p className={styles.featureIcon__text}>{content.subtitle}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyChoice;
