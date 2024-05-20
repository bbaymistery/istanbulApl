import React from 'react';
import styles from "./styles.module.scss";
import { useSelector } from 'react-redux';
import { useVisibility } from '../../../hooks/useVisibility';
import Image from 'next/image';
const icons = [
    {
        image: "/images/icons/ticket.webp",
        altName: "icon",
        h3: "Ultimate flexibility",
        p: " You're in control, with free cancellation and payment options to satisfy any plan or budget."
    },
    {
        image: "/images/icons/hot-air-balloon.webp",
        altName: "icon",
        h3: "Memorable experiences",
        p: " Browse and book tours and activities so incredible, you'll want to tell your friends."
    },
    {
        image: "/images/icons/diamond.webp",
        altName: "icon",
        h3: "Quality at our core",
        p: " High-quality standards. Millions of reviews. A tourz company."
    },
    {
        image: "/images/icons/medal.webp",
        altName: "icon",
        h3: "Award-winning support",
        p: " New price? New plan? No problem. We're here to help, 24/7."
    },
]
const WhyChoice = () => {
    const state = useSelector(state => state.pickUpDropOffActions);
    const { params: { direction } } = state;

    const [isVisible, ref] = useVisibility();

    return (
        <div className={`${styles.whychoice} ${direction} page`} >
            <div className={`${styles.whychoice_section} page_section`}>
                <div className={`${styles.whychoice_section_container} page_section_container`}>
                    <h2 ref={ref} className={` ${isVisible ? styles.fade_bottom_to_top : ''}`}>Why choose Tourz</h2>
                    <div ref={ref} className={`${styles.featureIcons} ${isVisible ? styles.fade_bottom_to_top : ''}`}>
                        {icons.map((icon, idx) => {
                            return (
                                <div className={styles.featureIcon} key={idx}>
                                    <div className={styles.featureIcon_icon}>
                                        <Image src={icon.image} height={60} width={60} style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" alt={icon.altName} />
                                    </div>
                                    <h3>{icon.h3}</h3>
                                    <p className={styles.featureIcon__text}> {icon.p}  </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyChoice;
