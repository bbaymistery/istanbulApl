import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { navigator } from '../../../constants/navigatior';
import styles from './styles.module.scss';

const MobileMenu = ({ handleClickNavLinkMobileMenuNotList, language, handleClickNavLinkMobileMenuList, openMenu, appData, airportTranslations }) => {
    const router = useRouter();
    const isEnglish = language === 'en';

    const handleSubLinkClick = (listPath, hasTaxiDeals) => {
        const targetPath = isEnglish ? listPath : `/${language}${listPath}`;

        if (router.asPath !== targetPath) {
            handleClickNavLinkMobileMenuList({ hasTaxiDeals });
            router.push(targetPath);
        }
    };

    return (
        <div className={`${styles.header_content_menu_mobile} ${openMenu ? styles.active_header_content_menu_mobile : ''}`}>
            <ul className={styles.menu_content_ul}>
                {navigator.map(({ path, innerText, list, type, title, firstChild, strInnerText }, index) => {
                    const fullPath = isEnglish ? path : `/${language}${path}`;
                    const showDropdown = type === 'list';
                    const hasNoCursor = !path.length;
                    const isFirstChild = firstChild;
                    const isExternal = index === 4;

                    return (
                        <li key={innerText} className={`${styles.li_item} ${showDropdown ? styles.has_children : ''}`} id="navLink"   >
                            <Link href={fullPath} onClick={() => handleClickNavLinkMobileMenuNotList({ index })} title={appData?.words[title]} className={`${hasNoCursor ? styles.nocursor : ''} ${isFirstChild ? styles.first_child_a : ''}`} target={isExternal ? '_blank' : ''}>
                                <span>{appData?.words[strInnerText]}</span>
                                {showDropdown && <i className="fa-solid fa-angle-down"></i>}
                            </Link>

                            {showDropdown && (
                                <ul className={styles.hoverUl}>
                                    {list.map(({ path: listPath, hasTaxiDeals, strInnerText }) => {
                                        const translation = airportTranslations?.[language]?.[strInnerText];

                                        return (
                                            <li key={strInnerText} onClick={() => handleSubLinkClick(listPath, hasTaxiDeals)} className={`  ${styles.li_item} ${!listPath.length ? styles.nocursor : ''}  `}   >
                                                <p title={translation}>
                                                    <span>{translation}</span>
                                                </p>
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div >
    );
};

export default MobileMenu;
