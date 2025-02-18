import { useDispatch, useSelector } from "react-redux"
import styles from "./styles.module.scss"
import Image from "next/image"
import fbImage from '../../../../public/images/social/fb.gif';
import twImage from '../../../../public/images/social/tw.gif';
import srImage from '../../../../public/images/social/rss.png';
import instaIamge from '../../../../public/images/social/Instigram.gif';
import appleIcon from '../../../../public/images/icons/apple-icon.webp'
import androidIcon from '../../../../public/images/icons/android.webp'
import airportTranslations, { allTranslations } from "../../../constants/generalTranslataions";
import { airportTaxiLinks } from "../../../constants/navigatior";
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

const Footer = () => {

    const state = useSelector(state => state.pickUpDropOffActions)
    let { params: { direction, language, journeyType } } = state
    const { appData } = useSelector(state => state.initialReducer)
    const dispatch = useDispatch()
    return (
        <div className={`${styles.footer} ${direction} page`} >
            <div className={`${styles.footer_section} page_section`}>
                <Image className={styles.landing_image} fill style={{ objectFit: "cover", objectPosition: "center" }} src={"/images/svgs/footerbg.svg"} alt="Heathrow Gatwick Transfers Hero Image" sizes="100vw" />
                <div className={`${styles.footer_section_container} page_section_container`}>
                    <div className={styles.footer_content}>
                        <div className={`${styles.column} ${styles.numbers_column}`}>
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
                        <div className={`${styles.column} ${styles.office_column}`}>
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
                        <div className={`${styles.column}`}>
                            <p>{allTranslations.strQuickLinks[language]}</p>
                            <div>
                                <a href={`${language === 'en' ? `/about-us` : `/${language}/about-us`}`} title={(appData || {}).words["strAboutUs"]}>
                                    {(appData || {}).words["strAboutUs"]}
                                </a>
                                <a href={`${language === 'en' ? `/contact-us` : `/${language}/contact-us`}`} title={(appData || {}).words["appContactUsHeader"]} >
                                    {(appData || {}).words["appContactUsHeader"]}
                                </a>
                                <a href={`${language === 'en' ? `/terms` : `/${language}/terms`}`} title={(appData || {}).words["strTermsOfUse"]}  >
                                    {(appData || {}).words["strTermsOfUse"]}
                                </a>
                                <a href={`${language === 'en' ? `/privacy-policy` : `/${language}/privacy-policy`}`} title={(appData || {}).words["strPrivacyPolicy"]}  >
                                    {(appData || {}).words["strPrivacyPolicy"]}
                                </a>
                                <a href={`${language === 'en' ? `/fleet` : `/${language}/fleet`}`} title={(appData || {}).words["strOurFleet"]}  >
                                    {(appData || {}).words["strOurFleet"]}
                                </a>
                            </div>
                        </div>
                        <div className={`${styles.column} `}>
                            <p>{appData.words["strAirportTaxi"]}</p>
                            <div>
                                {
                                    airportTaxiLinks
                                        .filter((item) => item.hasTaxiDeals !== "ADB" && item.hasTaxiDeals !== "GZP") // Exclude ADB & GZP
                                        .map((item) => {
                                            let { strInnerText, path: listPath, hasTaxiDeals } = item;

                                            return (
                                                <a
                                                    href={`${language === 'en' ? `${listPath}` : `/${language}${listPath}`}`}
                                                    key={strInnerText}
                                                    onClick={() => {
                                                        dispatch({ type: "SET_NAVBAR_TAXI_DEALS", data: { hasTaxiDeals } });
                                                        dispatch({ type: "RESET_SELECTED_POINTS", data: { journeyType } });
                                                    }}
                                                    title={airportTranslations[language][strInnerText]}
                                                >
                                                    <span>{airportTranslations[language][strInnerText]}</span>
                                                </a>
                                            );
                                        })
                                }
                            </div>
                        </div>
                        <div className={`${styles.column} `}>
                            <div className={styles.social_icons}>
                                <a href="#" target={"_blank"} title={"APL Transfers Facebook"}>
                                    <Image src={fbImage} alt="APL Transfers Facebook" width={25} height={25} />
                                </a>
                                <a href="#" target={"_blank"} title="APL Transfers Twitters">
                                    <Image src={twImage} alt="APL Transfers Twitters" width={25} height={25} />
                                </a>
                                <a href="#" target="_blank" title="APL Transfers News RSS">
                                    <Image src={srImage} alt="APL Transfers News RSS" width={25} height={25} />
                                </a>
                                <a href="#" target="_blank" title="APL Transfers Instigram page">
                                    <Image src={instaIamge} alt="APL Transfers Instigram page" width={25} height={25} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${styles.footer_section_container2} page_section_container`}>
                    <div className={styles.footer_bottom}>
                        <div className={styles.social_icons}>
                            <a href="#" target={"_blank"} title={"APL Transfers Facebook"}>
                                <Image src={fbImage} alt="APL Transfers Facebook" width={25} height={25} />
                            </a>
                            <a href="#" target={"_blank"} title="APL Transfers Twitters">
                                <Image src={twImage} alt="APL Transfers Twitters" width={25} height={25} />
                            </a>
                            <a href="#" target="_blank" title="APL Transfers News RSS">
                                <Image src={srImage} alt="APL Transfers News RSS" width={25} height={25} />
                            </a>
                            <a href="#" target="_blank" title="APL Transfers Instigram page">
                                <Image src={instaIamge} alt="APL Transfers Instigram page" width={25} height={25} />
                            </a>
                        </div>
                        <p className={styles.allrights}>{new Date().getFullYear()} APLTransfers.com All Rights Reserved</p>
                        <div className={styles.footer_bottom_images}>
                            <div>
                                <Image src={"/images/visa.webp"} alt="APL Transfer Visa" style={{ objectFit: "contain" }} width={48} height={24} />
                            </div>
                            <div>
                                <Image src={"/images/master.webp"} alt="APL Transfer Master" style={{ objectFit: "contain" }} width={48} height={24} />
                            </div>
                            <div>
                                <Image src={"/images/applePay.webp"} alt="APL Transfer Apple" style={{ objectFit: "contain" }} width={48} height={24} />
                            </div>
                            <div>
                                <Image src={"/images/paypal.webp"} alt="APL Transfer Paypal" style={{ objectFit: "contain" }} width={48} height={24} />
                            </div>
                            <div>
                                <Image src={"/images/amex.webp"} alt="APL Transfer Amex" style={{ objectFit: "contain" }} width={48} height={24} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer