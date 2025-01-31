import React, {  useState } from 'react'
import { useSelector } from 'react-redux'
import styles from "./styles.module.scss"
import Image from 'next/image'
import Button from '../../components/elements/Button/Button'
import { BUTTON_TYPES } from '../../components/elements/Button/ButtonTypes'
import { tourDatasTranslated } from './transltatedTourDatas'


const  Tours = (props) => {
    let { bggray = false, insideGlobalLayout = true, env, mainCanonicalUrl } = props
    const state = useSelector(state => state.pickUpDropOffActions)
    let { params: { direction, language } } = state
    const { appData } = useSelector(state => state.initialReducer)

    // useState to control "View All" state
    const [viewAll, setViewAll] = useState(false);
    const [toursData, setToursData] = useState(tourDatasTranslated)
    const displayedTours = viewAll ? toursData : toursData.slice(0, 4);

   
    const handleViewAllClick = () => setViewAll(!viewAll);





    return (
        <div className={`${styles.tours} ${direction} page`}>
            <div className={`${styles.tours_section} page_section`}>
                <div className={`${styles.tours_section_container} page_section_container`} >
                    <div className={styles.title}>
                        <h2>{appData.words["strDailyTours"]}</h2>
                    </div>

                    <div className={styles.cards_content}>
                        <div className={styles.cards}>
                            {
                                displayedTours.map((item, _) => {
                                    return (
                                        <a href={`${language === "en" ? "" : `${language}`}${item.pathname}`} title={item?.pageTitle} className={`${styles.card}`} key={item.tourDealId}>
                                            <div className={styles.card_image_div}>
                                                <Image src={`${item.images[0]}`} className={styles.img} fill alt={item.headTitle} sizes="(max-width: 768px) 100vw, 50vw" />
                                            </div>
                                            <div className={styles.card_body}>
                                                <h3>{item.pageTitle[language]}</h3>
                                                <div className={styles.card_desc}>
                                                    <div className={styles.card_desc_subtitle}>
                                                        <div className={styles.card_detail_btn_box}>
                                                            <div className={styles.detail_btn}>{(appData || {})?.words["strReadMore"]}</div>
                                                            <p className={styles.detail_arrow_icon}>
                                                                <i className="fa-solid fa-angle-right"></i>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </a>
                                    )
                                })
                            }
                        </div>

                        <div className={styles.btn_div}>
                            <Button
                                type={BUTTON_TYPES.TERTIARY}
                                onBtnClick={handleViewAllClick}
                                style={{ width: '100%' }}
                                btnText={viewAll ? appData?.words["strViewLess"] || "View Less" : appData?.words["strViewAll"] || "View All"}
                                iconPos='RIGHT'
                                icon={<i className="fa-solid fa-arrow-right"></i>}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Tours
export async function getServerSideProps({ req, res }) {
    // let firstLoadLangauge = checkLanguageAttributeOntheUrl(req?.url)
    // const { cookie } = req.headers;
    // let { pathname } = parse(req?.url, true)
    // let pathnameUrlWHenChangeByTopbar = pathname
    // let pathNameUrlCanonical = "/tours"
    // let { canonicalUrl: mainCanonicalUrl } =
    //     await fetchContent("/", cookie, firstLoadLangauge, pathnameUrlWHenChangeByTopbar, pathNameUrlCanonical)

    return {
        props: {}
    }
}