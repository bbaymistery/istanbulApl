import { useSelector } from "react-redux"
import styles from "./styles.module.scss"
import Image from "next/image"
import fbImage from '../../../../public/images/social/fb.gif';
import twImage from '../../../../public/images/social/tw.gif';
import srImage from '../../../../public/images/social/rss.png';
import instaIamge from '../../../../public/images/social/Instigram.gif';
import appleIcon from '../../../../public/images/icons/apple-icon.webp'
import androidIcon from '../../../../public/images/icons/android.webp'
import { allTranslations } from "../../../constants/generalTranslataions";

const Footer = () => {
    const state = useSelector(state => state.pickUpDropOffActions)
    let { params: { direction, language } } = state
    const { appData } = useSelector(state => state.initialReducer)
    const officeLocations = [
        {
            id: "istanbul",
            city: "Istanbul",
            address: "Muhurdar Caddesi, No 14 D3 Kadikoy, Istanbul, Turkiye"
        },
        {
            id: "fethiye",
            city: "Fethiye",
            address: "Taşyaka Mah. Ölüdeniz Caddesi No:21/A D:1, Mugla, Turkiye"
        },
        {
            id: "london",
            city: "London",
            address: "APL Office, Novotel Cherry Lane, UB7 9HJ, UK"
        }
    ];

    return (
        <div className={`${styles.footer} ${direction} page`} >
            <div className={`${styles.footer_section} page_section`}>


                <Image className={styles.landing_image} fill style={{ objectFit: "cover", objectPosition: "center" }} src={"/images/svgs/footerbg.svg"} alt="Heathrow Gatwick Transfers Hero Image" sizes="100vw" />
                <div className={`${styles.footer_section_container} page_section_container`}>

                    {/* <div className={styles.footer_info}>
                        <div className={styles.left_info}>
                            <i className="fa-solid fa-headphones"></i>
                            <div>
                                Speak to our expert at
                                <span>
                                    <a href="tel:+1800453744" >1-800-453-76-44</a>
                                </span>
                            </div>
                        </div>
                        <div className={styles.right_info}>
                            <p >
                                Follow Us
                            </p>
                            <div className={styles.social_icons}>
                                <a href="#" target={"_blank"} title={"Airport Pickups London Facebook"}>
                                    <Image src={fbImage} alt="Airport Pickups London Facebook" width={25} height={25}  />
                                </a>
                                <a href="#" target={"_blank"} title="Airport Pickups London Twitters">
                                    <Image src={twImage} alt="Airport Pickups London Twitters" width={25} height={25}  />
                                </a>
                                <a href="#" target="_blank" title="Airport Pickups London News RSS">
                                    <Image src={srImage} alt="Airport Pickups London News RSS" width={25} height={25}  />
                                </a>
                                <a href="#" target="_blank" title="Airport Pickups London Instigram page">
                                    <Image src={instaIamge} alt="Airport Pickups London Instigram page" width={25} height={25}  />
                                </a>
                            </div>
                        </div>
                    </div> */}
                    <div className={styles.footer_content}>
                        <div className={`${styles.column} ${styles.first_column}`}>
                            <p>{appData?.words["strContactUs"]}</p>
                            <ul>
                                <li className={styles.phone}>
                                    <span>
                                        <img src="/images/others/tel.webp" alt="APL transfer hotline" />
                                        {appData?.words["appContactUsHotLine"]}:
                                    </span>
                                    <a href="tel:+902165503313">+90 216 550 3313</a>
                                </li>
                                <li className={styles.ep}>
                                    <span>
                                        <img src="/images/others/world.webp" alt="APL transfer  Support" />
                                        {allTranslations.strEurope[language]}:
                                    </span>
                                    <a href="tel:+442033259878">
                                        +44 203 325 9878
                                    </a>
                                </li>
                                <li className={styles.wp}>
                                    <span>
                                        <img src="/images/others/WhatsAppp.webp" alt="APL transfer WhatsApp" />
                                        {appData?.words["strWhatsAppUs"]}:
                                    </span>
                                    <a target="_blank" href="https://wa.me/447387901028">
                                        +44 738 790 1028
                                    </a>
                                </li>
                                <li className={styles.mail}>
                                    <span>
                                        <img border="0" alt="APL transfer Email" src="/images/others/mail.webp" />
                                        {appData.words["strEmail"]}:
                                    </span>
                                    <a href="mailto:info@aplcars.com" >info@aplcars.com</a>
                                </li>
                            </ul>
                        </div>

                        <div className={`${styles.column} ${styles.hidemobile}`}>
                            <p>{allTranslations.strOurOffices[language]}</p>
                            <ul className={styles.officeList}>
                                {officeLocations.map(({ id, city, address }) => (
                                    <li key={id} className={styles.officeItem}>
                                        <span className={styles.icon}>📍</span>
                                        <strong>{city}:</strong> {address}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={`${styles.column} ${styles.hidemobile}`}>
                            <p>Support</p>
                            <div >
                                <a>Get in Touch</a>
                                <a>Help center</a>
                                <a>Live chat</a>
                                <a>How it works</a>
                            </div>
                        </div>

                        {/* <div className={styles.mobilevisible}>
                            <div className={`${styles.column} `}>
                                <p>Company</p>
                                <div >
                                    <a href="#">About Us</a>
                                    <a href="#">Tourz Reviews</a>
                                    <a href="#">Contact Us</a>
                                    <a href="#">Travel Guides</a>
                                    <a href="#">Data Policy</a>
                                    <a href="#">Cookie Policy</a>
                                    <a href="#">Legal</a>
                                    <a href="#">Sitemap</a>
                                </div>
                            </div>
                            <div className={`${styles.column} `}>
                                <p>Support</p>
                                <div >
                                    <a>Get in Touch</a>
                                    <a>Help center</a>
                                    <a>Live chat</a>
                                    <a>How it works</a>
                                </div>
                            </div>
                        </div> */}
                        <div className={`${styles.column} ${styles.last_column}`}>
                            <p>Newsletter</p>
                            <p>Subscribe to the free newsletter and stay up to date</p>
                            <div className={styles.footer__newsletter}>
                                <input type="Email" placeholder="Your email address" />
                                <button>Send</button>
                            </div>
                            <h4 className={styles.mobile_app_h4}>Mobile Apps</h4>

                            <div className={styles.icons_app}>
                                <a href="#">
                                    <Image src={appleIcon} alt="Apple" width={15} height={15} />
                                    Apple
                                </a>
                                <a href="#">
                                    <Image src={androidIcon} alt="Android" width={15} height={15} />
                                    Android
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${styles.footer_section_container2} page_section_container`}>
                    <div className={styles.footer_bottom}>
                        
                        <div>© Copyright Viatours 2024</div>
                        <div className={styles.footer_bottom_images}>
                            <div>
                                <Image src={"/images/visa.webp"} alt="Airport Pickups London Facebook" style={{ objectFit: "contain" }} width={48} height={24} />
                            </div>
                            <div>
                                <Image src={"/images/master.webp"} alt="Airport Pickups London Facebook" style={{ objectFit: "contain" }} width={48} height={24} />
                            </div>
                            <div>
                                <Image src={"/images/applePay.webp"} alt="Airport Pickups London Facebook" style={{ objectFit: "contain" }} width={48} height={24} />
                            </div>
                            <div>
                                <Image src={"/images/paypal.webp"} alt="Airport Pickups London Facebook" style={{ objectFit: "contain" }} width={48} height={24} />
                            </div>
                            <div>
                                <Image src={"/images/amex.webp"} alt="Airport Pickups London Facebook" style={{ objectFit: "contain" }} width={48} height={24} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer