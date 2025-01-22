import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styles from "./styles.module.scss"
import Image from 'next/image'
import Button from '../../components/elements/Button/Button'
import { BUTTON_TYPES } from '../../components/elements/Button/ButtonTypes'
let datas = [
    {
        "tourDealId": 1,
        "images": [
            "https://api.london-tech.com/files/randoms/483ee713fb10490ad27c3036179610ff85274865ca35b1384fe9170db4937a1d.jpg",
            "https://api.london-tech.com/files/randoms/e194f767e2acc9f24ba61ee0a55e3c41b7ade1c19d7470b4aec840c38b162536.jpg",
            "https://api.london-tech.com/files/randoms/90e2f29e1cb03b8ff1742fea6998022258ff26da7f0a77c015f70749af83b57f.jpg",
            "https://api.london-tech.com/files/randoms/967fac771d0645fe354ca710df54afdafb4a3ed61abef1a8fb739d75021e161b.jpg"
        ],
        "sequenceNumber": 1,
        "pathname": "/tours/cambridge-daily-tour",
        "pageTitle": "Cambridge Tour",
        "headTitle": "Cambridge Tour | Explore Historic Cambridge with Our Guided Trips",
        "price": "£ 399.00"
    },
    {
        "tourDealId": 2,
        "images": [
            "https://api.london-tech.com/files/randoms/a5255c17728f131e1d7852cf0eda3ee5147ccafd25c5841ef957a2525f2fe8f4.jpg",
            "https://api.london-tech.com/files/randoms/d9f713a016419488fc28252817304bbcc738d4d5abf3463ebe8edac5e220edbe.jpg",
            "https://api.london-tech.com/files/randoms/d14072a3a91da95afdd81457893d7c76ae03d22e3e0e6bf508f3a027146fa6fb.jpg",
            "https://api.london-tech.com/files/randoms/644f9809d83fc6fe7c31c2abc3375c2d5117520cb6b5571b7c5cba4d464b64b6.jpg"
        ],
        "sequenceNumber": 2,
        "pathname": "/tours/windsor-and-london-tour",
        "pageTitle": "Windsor Castle & London Tour",
        "headTitle": "Windsor Castle & London Tour | Half-Day Royal & City Exploration",
        "price": "£ 390.00"
    },
    {
        "tourDealId": 3,
        "images": [
            "https://api.london-tech.com/files/randoms/55e068e60ac71401e5e38da369fbfdad0a3040f695c8bf12f5bd7bd16fa464a3.jpg",
            "https://api.london-tech.com/files/randoms/69e77fffe8408fcc5e20f9b87fe47a862d07674577f203429ec80cbdd105e5c0.jpg",
            "https://api.london-tech.com/files/randoms/efdf26f7a759ef42ddcbc6ecfccbfb741fa1b2483c6fc7b66818fa41ad2ec194.jpg",
            "https://api.london-tech.com/files/randoms/199c9fe69e4c516f021e07a55073d5c2c1d38808ab5126043905a110fcafc076.jpg"
        ],
        "sequenceNumber": 1,
        "pathname": "/tours/bicester-village-tour",
        "pageTitle": "Bicester Village Shopping Tour",
        "headTitle": "Bicester Village Shopping Tour | Luxury Round Trip from London",
        "price": "£ 285.00"
    },
    {
        "tourDealId": 4,
        "images": [
            "https://api.london-tech.com/files/randoms/78543031fb788ccebeffdf86024bd4938e66d46d6a0b82cf190b6719d8635865.jpg",
            "https://api.london-tech.com/files/randoms/54633cb8ceca37159260e6d61b8d3311d9ba481db88509bb5c7d6d9c03ad6767.jpg",
            "https://api.london-tech.com/files/randoms/f2afa92e811c88aaf7bd41ae9412e0f5f9e70d0ef7489b922a8e3f19e44c2f93.jpg",
            "https://api.london-tech.com/files/randoms/80efa76439a189bdd3afa961090af0def73f0243964c4a93dc1ca99b746ca396.jpg"
        ],
        "sequenceNumber": 3,
        "pathname": "/tours/oxford-and-blenheim-palace-tour",
        "pageTitle": "Oxford and Blenheim Palace Tour",
        "headTitle": "Oxford and Blenheim Palace Private Tour | Luxury Transport from London",
        "price": "£ 399.00"
    },
    {
        "tourDealId": 5,
        "images": [
            "https://api.london-tech.com/files/randoms/d8dc2d7857ecd0985b936bea37139709848ff92151e9d185b041b83a0d59e723.jpg",
            "https://api.london-tech.com/files/randoms/6349b2d3dffc43b3f7c7c17b673fecbc39a13c4f0c5b6e0175a446aa71a42cb8.jpg",
            "https://api.london-tech.com/files/randoms/644f9809d83fc6fe7c31c2abc3375c2d5117520cb6b5571b7c5cba4d464b64b6.jpg",
            "https://api.london-tech.com/files/randoms/d272ef6e2c33fb824a13c38bf2b38d877b585aab625a41f841761a631248f3b3.jpg"
        ],
        "sequenceNumber": 4,
        "pathname": "/tours/london-tour-half-day",
        "pageTitle": "London Tour - Half Day",
        "headTitle": "London Half-Day Private Tour | Quick & Comprehensive City Highlights",
        "price": "£ 190.00"
    },
    {
        "tourDealId": 6,
        "images": [
            "https://api.london-tech.com/files/randoms/bdbe91417b168e28ccfc1924b75a826dc07f4a234ee3f8c78626f20c643a0aa8.jpg",
            "https://api.london-tech.com/files/randoms/710adcbd379d1cef8d56ee6f820ea202d404779fea5633a5c365aca6e68fda7e.png",
            "https://api.london-tech.com/files/randoms/5cc96fb4f532670f28ab5a63b38e3e64aef168210ce22da51237904cc1b742b1.jpg",
            "https://api.london-tech.com/files/randoms/ce602b2ca669c77b0b195d3518e06c4ee191891b7cd7daa398803d0c271a9c88.jpg"
        ],
        "sequenceNumber": 5,
        "pathname": "/tours/canterbury-and-leeds-castle-tour",
        "pageTitle": "Canterbury and Leeds Castle Tour",
        "headTitle": "Canterbury & Leeds Castle Tour from London | Private 8-Hour Journey",
        "price": "£ 450.00"
    },
    {
        "tourDealId": 7,
        "images": [
            "https://api.london-tech.com/files/randoms/79833b55e8228ee1845bb9765f7ac0ae14d16b6206609329a43fc4f0f9b3de84.jpg",
            "https://api.london-tech.com/files/randoms/6349b2d3dffc43b3f7c7c17b673fecbc39a13c4f0c5b6e0175a446aa71a42cb8.jpg",
            "https://api.london-tech.com/files/randoms/644f9809d83fc6fe7c31c2abc3375c2d5117520cb6b5571b7c5cba4d464b64b6.jpg",
            "https://api.london-tech.com/files/randoms/d272ef6e2c33fb824a13c38bf2b38d877b585aab625a41f841761a631248f3b3.jpg"
        ],
        "sequenceNumber": 6,
        "pathname": "/tours/london-tour-full-day",
        "pageTitle": "London Tour-Full Day",
        "headTitle": "London Full-Day Private Tour | Luxury Sedan to Mercedes 8-Seater",
        "price": "£ 360.00"
    },
    {
        "tourDealId": 8,
        "images": [
            "https://api.london-tech.com/files/randoms/b3de5fe0056954b327e91cf75ccf2e101aa610f6e2d023531a8a02cedf14a0c4.jpg",
            "https://api.london-tech.com/files/randoms/af7b2be798c46cc258f32fe31c47b35d1ad763ff07e3a762a5ead30933b927fe.jpg",
            "https://api.london-tech.com/files/randoms/00925855c3ff16881ce413419b0538acec01add763a8937e5390f27195086eea.jpg",
            "https://api.london-tech.com/files/randoms/a4bbf0cf2004cdfa2d1771c71cebb2b4fa2a8a3f3d852286cbaa4fc3a6ac03d1.jpg"
        ],
        "sequenceNumber": 8,
        "pathname": "/tours/stonehenge-and-bath",
        "pageTitle": "Stonehenge & Bath Tour",
        "headTitle": "Stonehenge & Bath Tour from London | Full-Day Private Excursion",
        "price": "£ 450.00"
    }
]

const Tours = (props) => {
    let { bggray = false, insideGlobalLayout = true, env, mainCanonicalUrl } = props
    const state = useSelector(state => state.pickUpDropOffActions)
    let { params: { direction, language } } = state
    const { appData } = useSelector(state => state.initialReducer)
    let description = "Daily Tours and excursions for London. London to Bath-Stonehenge-Cambridge-Oxford daily tours."
    let title = "Tour-Airport Pickups London"
    let keywords = "Travel tour,airport pickups Tour"
    // useState to control "View All" state
    const [viewAll, setViewAll] = useState(false);
    const [toursData, setToursData] = useState(datas)
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
                                                <h3>{item.pageTitle}</h3>
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