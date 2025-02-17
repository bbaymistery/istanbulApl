import React from 'react'
import { navigator } from '../../../constants/navigatior'
import { useDispatch } from 'react-redux'
import styles from "./styles.module.scss";
import { useRouter } from 'next/router';
const DesktopMenu = ({ language, journeyType, appData, airportTranslations }) => {
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
                                <a href={language === 'en' ? '/' : `/${language}`} title={appData?.words[title]} className={`${path.length ? styles.nocursor : ""} ${router.pathname === path ? styles.active : ""}`} >
                                    <span>{appData?.words[strInnerText]}</span>
                                </a>
                                :
                                <a href={`${language === 'en' ? `${path}` : `/${language}${path}`}`}
                                    title={appData?.words[title]}
                                    className={`${path.length ? styles.nocursor : ""}  ${router.pathname === path ? styles.active : ""}`}
                                    target={index === 4 ? "_blank" : ""}
                                >
                                    <span>{appData?.words[strInnerText]}</span>
                                    {type === "list" ? <i className="fa-solid fa-angle-down"></i> : ""}
                                </a>
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