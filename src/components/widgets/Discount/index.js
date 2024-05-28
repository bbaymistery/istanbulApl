import React from 'react'
import { useSelector } from 'react-redux';
import { useVisibility } from '../../../hooks/useVisibility';
import styles from  "./styles.module.scss"
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
const Discount = () => {
    const state = useSelector(state => state.pickUpDropOffActions);
    const { params: { direction } } = state;

    const [isVisible, ref] = useVisibility();

    // <h2 ref={ref} className={` ${isVisible ? styles.fade_bottom_to_top : ''}`}>Why choose Tourz</h2>
    return (
        <div className={`${styles.discount} ${direction} page`} >
            <div className={`${styles.discount_section} page_section`}>
                <div className={`${styles.discount_section_container} page_section_container`}>
                 sadlam
                </div>
            </div>
        </div>
    );
}

export default Discount