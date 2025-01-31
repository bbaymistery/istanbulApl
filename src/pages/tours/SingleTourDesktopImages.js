import React from 'react'
import styles from "./singletour.module.scss"
import Button from '../../components/elements/Button/Button'
import { BUTTON_TYPES } from '../../components/elements/Button/ButtonTypes'
import { Skeleton } from '../../components/elements/Skeleton'

/**
 * SingleTourDesktopImages Component
 *
 * This component is responsible for displaying tour images in a grid format on desktop screens.
 * It shows up to four images and provides a button to view all images in a modal.
 *
 * Props:
 * @param {boolean} loadAlert - Indicates whether the data is still loading.
 * @param {Function} setshouldShowModal - Function to open the image modal.
 * @param {Object} appData - Contains UI translations and other app-wide data.
 * @param {Object} tourDetails - Tour details, including images.
 *
 * Features:
 * - Displays up to 4 images in a grid format.
 * - Shows a skeleton loader while images are being fetched.
 * - The last image slot contains a button to open the modal for all images.
 *
 * UI Components:
 * - `Skeleton` - Displays a placeholder while loading images.
 * - `Button` - Allows users to open the image modal.
 *
 * Functionality:
 * - If `loadAlert` is true, a skeleton loader is displayed.
 * - Images are displayed dynamically from `tourDetails[0]?.images`.
 * - When the fourth image is reached, a button is rendered to show all images in a modal.
 */

const SingleTourDesktopImages = ({  loadAlert, setshouldShowModal, appData ,tourDetails}) => {
    
    const images = tourDetails[0]?.images
    
    return (
        <div className={styles.images}>
            <div className={styles.images_content}>
                {Array.isArray(images) && images.slice(0, 4).map((item, index) => (
                    <div key={index} className={styles.gallery_grid}>
                        {loadAlert ? (
                            <div style={{ height: index === 0 ? "100%" : "200px", background: "#eae6e6" }}>
                                <Skeleton width={"100%"} height="100%" />
                            </div>)
                            :
                            (<img src={item} alt={item} />)}
                        {/* If it's the last item, render the button */}
                        {index === 3 && (
                            <div className={styles.container_auto_center}>
                                <div className={styles.intro}>
                                    <Button type={BUTTON_TYPES.PRIMARY} onBtnClick={() => setshouldShowModal(true)} style={{ padding: '8px 14px' }} btnText={appData?.words["strSeeAllPhotos"]} />
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SingleTourDesktopImages