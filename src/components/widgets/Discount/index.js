import React from 'react'
import { useSelector } from 'react-redux';
import { useVisibility } from '../../../hooks/useVisibility';
import styles from "./styles.module.scss"
import Image from 'next/image';
import Button from '../../elements/Button/Button';
import { BUTTON_TYPES } from '../../elements/Button/ButtonTypes';
import { useWindowSize } from '../../../hooks/useWindowSize';
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
    const { width } = useWindowSize()
    const [isVisible, ref] = useVisibility();
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    console.log(width);

    return (
        <div className={`${styles.discount} ${direction} page`} >
            <div className={`${styles.discount_section} page_section`}>
                <div className={`${styles.discount_section_container} page_section_container`}>
                    <div className={styles.type}>
                        <div className={styles.bg_image}>
                            {/* <Image className={styles.landing_image} fill style={{ objectFit: "cover", objectPosition: "center" }} src={"/images/bgDiscount.webp"} alt="Image"
                                sizes="(max-width: 600px) 100vw, 
               (max-width: 1280px) 100vw, 
               (max-width: 1440px) 1539px, 
               100vw" /> */}
                            <Image
                                className={styles.landing_image}
                                fill
                                style={{ objectFit: "cover", objectPosition: "center" }}
                                src="/images/bgDiscount.webp"
                                alt="Image"
                                sizes="(max-width: 600px) 100vw,(max-width: 1280px) 100vw,(max-width: 1440px) 1533px,100vw"
                            />

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

                                <div ref={ref} className={`${styles.btn_div} ${isVisible ? styles.faderight : ''}`}>
                                    <Button onBtnClick={scrollToTop} type={BUTTON_TYPES.PRIMARY_OUTLINE} style={{ padding: "10px 17.5px", width: '100%' }} btnText={"Book Now"} />
                                </div>
                            </div>
                            <div className={`${styles.right} `}>
                                <Image className={styles.landing_image} src={"/images/750600.webp"} alt="Image" width={width < 990 ? 350 : 700} height={width < 990 ? 350 : 600} />
                            </div>


                            <div className={styles.svgs}>
                                <div className={styles.img_one_div}>
                                    {width > 990 ? <Image width="100" height="600" src={`/images/svgs/shape.svg`} alt="image" /> : <></>}
                                </div>
                                <div className={styles.img_two_div}>
                                    {width < 750 ? <Image width="300" height="56" src={`/images/svgs/shape4.svg`} alt="image" /> : <></>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Discount