import React from 'react'
import styles from "./styles.module.scss"
import { useSelector } from 'react-redux'
const DropDownAllCurrencies = ({ currencyStatus, handleCurrency }) => {
    // const { appData } = useSelector(state => state.initialReducer)
    const appData = [
        { currencyId: 1, currency: "EUR" },
        { currencyId: 2, currency: "USD" },
        { currencyId: 3, currency: "GBP" },
        { currencyId: 4, currency: "TRY" }
    ]

    return (
        <div className={styles.all_currrencies} style={{ opacity: `${currencyStatus ? 1 : 0}`, visibility: `${currencyStatus ? "visible" : "hidden"}` }} >
            {appData.map((item, _) => {
                let { currency: text, currencyId } = item
                return (
                    <div className={styles.content} name={text} key={currencyId} onClick={(e) => handleCurrency({ e, text, currencyId })}>
                        <span>{text}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default DropDownAllCurrencies