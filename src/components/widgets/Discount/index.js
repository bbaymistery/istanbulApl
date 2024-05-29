import React from 'react'
import { useSelector } from 'react-redux';
import { useVisibility } from '../../../hooks/useVisibility';
import styles from "./styles.module.scss"
import Image from 'next/image';
import Button from '../../elements/Button/Button';
import { BUTTON_TYPES } from '../../elements/Button/ButtonTypes';
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
    const scrollToTop = () => {
        console.log("s");
        
        window.scrollTo({
          top: 0,
          behavior: 'smooth' // This makes the scroll smooth
        });
      };
    return (
        <div className={`${styles.discount} ${direction} page`} >
            <div className={`${styles.discount_section} page_section`}>
                <div className={`${styles.discount_section_container} page_section_container`}>
                    <div className={styles.type}>
                        <div className={styles.bg_image}>
                            <Image priority className={styles.landing_image} fill style={{ objectFit: "cover", objectPosition: "CENTER" }} src={"/images/bgDiscount.webp"} alt="Image" sizes="100vw" />
                        </div>
                        <div className={styles.content}>
                            <div className={styles.left}>
                                <div className={styles.title}>
                                    <h1 ref={ref} className={` ${isVisible ? styles.fade_bottom_to_top : ''}`}>   Grab up to 35% off
                                        <br />
                                        on your favorite
                                        <br />
                                        Destination</h1>
                                    <p ref={ref} className={` ${isVisible ? styles.fade_bottom_to_top : ''}`}>Limited time offer, don't miss the opportunity</p>
                                </div>

                                <div ref={ref}  className={ `${styles.btn_div} ${isVisible ? styles.faderight : ''}`}>
                                    <Button   onBtnClick={scrollToTop} type={BUTTON_TYPES.PRIMARY_OUTLINE} style={{ padding: "10px 17.5px", width: '100%' }} btnText={"Book Now"} />
                                </div>
                            </div>
                            <div className={`${styles.right} `}>
                                <Image priority className={styles.landing_image} fill style={{ objectFit: "cover", objectPosition: "center" }} src={"/images/750600.webp"} alt="Image" sizes="100vw" />
                            </div>


                            <div className={styles.svgs}>
                                <Image
                                    width="40"
                                    height="600"
                                    src="/images/svgs/shape.svg"
                                    alt="image"
                                />
                                {/* <Image
                                    width="390"
                                    height="35"
                                    src="/images/svgs/shape2.svg"
                                    alt="image"
                                /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Discount