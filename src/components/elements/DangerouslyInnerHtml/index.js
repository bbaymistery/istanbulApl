import React from 'react'
import styles from "./styles.module.scss"
const DangerouslyInnerHtml = ({ htmContent, language }) => {
    return (
        <div className={styles.dangerous_div} dangerouslySetInnerHTML={{ __html: htmContent[language] || htmContent.en }}></div>
    )
}

export default DangerouslyInnerHtml