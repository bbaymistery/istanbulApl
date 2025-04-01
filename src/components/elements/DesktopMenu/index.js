import React from 'react'
import { navigator } from '../../../constants/navigatior'
import { useDispatch } from 'react-redux'
import styles from "./styles.module.scss";
import { useRouter } from 'next/router';
import { generalAllTranslations } from '../../../constants/generalTranslataions';
import Link from 'next/link';
const DesktopMenu = ({ language, journeyType, airportTranslations }) => {
    const dispatch = useDispatch()
    const router = useRouter()
    return (
        <div className={styles.header_menu_content}>
            <ul>
                {navigator.map((item, index) => {
                    let { path, innerText, list, type, title, strInnerText } = item

                    return (
                        // as={`${path==='/'?"/":""}`}
                        <li key={innerText} className={`${styles.li_item} ${type === "list" ? styles.has_children : ""}`}>
                            {index === 0 ?
                                <a href={language === 'en' ? '/' : `/${language}`} title={generalAllTranslations?.[strInnerText]?.[language]} className={`${path.length ? styles.nocursor : ""} ${router.pathname === path ? styles.active : ""}`} >
                                    <span>{generalAllTranslations?.[strInnerText]?.[language]}</span>
                                    <br />
                                </a>
                                :
                                <Link href={`${language === 'en' ? `${path}` : `/${language}${path}`}`}
                                    title={title}
                                    className={`${path.length ? styles.nocursor : ""}  ${router.pathname === path ? styles.active : ""}`}
                                    target={index === 4 ? "_blank" : ""}
                                >
                                    <span>{generalAllTranslations?.[strInnerText]?.[language]}</span>
                                    {type === "list" ? <i className="fa-solid fa-angle-down"></i> : ""}
                                </Link>
                            }

                            {type === "list" ?
                                <ul className={styles.hoverUl}>
                                    {list.map((item) => {
                                        //hasTaxideals setting taxiDealsName to redux
                                        let { path: listPath, hasTaxiDeals, strInnerText } = item
                                        //!

                                        return (
                                            <li key={strInnerText} className={`${styles.li_item}`} onClick={
                                                () => {
                                                    dispatch({ type: "SET_NAVBAR_TAXI_DEALS", data: { hasTaxiDeals } });
                                                    dispatch({ type: "RESET_SELECTED_POINTS", data: { journeyType } });
                                                    router.push(`${language === 'en' ? `${listPath}` : `${language}${listPath}`}`)
                                                }}>
                                                <p title={airportTranslations[language][strInnerText]}>
                                                    <span>{airportTranslations[language][strInnerText]}</span>
                                                </p>
                                            </li>
                                        )
                                    })
                                    }
                                </ul> : <></>}
                        </li>)
                })}
            </ul>
        </div>
    )
}

export default DesktopMenu