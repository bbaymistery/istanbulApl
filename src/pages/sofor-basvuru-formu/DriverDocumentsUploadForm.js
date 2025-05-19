import React, { useEffect } from 'react';
import styles from './styles.module.scss';

const FileUploadInput = ({ id, labelText, file, fileRef, error, onChange, onClear, previewUrl }) => {
    return (
        <div className={styles.input_box} style={{ flexDirection: "column" }}>
            <label htmlFor={id} className={styles.file_label}>
                <span className={styles["file-input__label"]}>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="upload"
                        className="svg-inline--fa fa-upload fa-w-16" role="img"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path>
                    </svg>
                    {labelText}
                </span>
            </label>
            <input id={id} ref={fileRef} type="file" name={id} accept=".pdf,.jpg,.jpeg,.png,.webp" onChange={onChange} className={styles.file_input} />
            {previewUrl && (
                <div className={styles.image_preview}>
                    <img src={previewUrl} alt={`${id} preview`} className={styles.preview_image} />
                </div>
            )}
            {file && (
                <button type="button" onClick={() => onClear(id)} className={styles.clear_file_btn}>
                    Kaldır
                </button>
            )}
            {error && <p className={styles.form_input_error}>{error}</p>}
        </div>
    );
};

const DriverDocumentsUploadForm = ({ internalState, onChangeHandler, error, clearFile, fileRefs }) => {


    const [previewUrls, setPreviewUrls] = React.useState({
        driverLicense: null,
        vehicleRegistration: null,
        profilePhoto: null
    });

    useEffect(() => {
        const newUrls = {};

        Object.entries(internalState).forEach(([key, file]) => {
            if (file && file.type?.startsWith("image/")) {
                newUrls[key] = URL.createObjectURL(file);
            }
        });

        setPreviewUrls((prev) => {
            Object.entries(prev).forEach(([key, url]) => {
                if (url && newUrls[key] && url !== newUrls[key]) {
                    URL.revokeObjectURL(url);
                }
            });

            return { ...prev, ...newUrls };
        });

        return () => {
            Object.values(newUrls).forEach((url) => URL.revokeObjectURL(url));
        };
    }, [internalState.driverLicense, internalState.vehicleRegistration, internalState.profilePhoto]);
    return (
        <div className={styles.form_card} >
            <h2>YÜKLENECEK BELGELER</h2>
            <div className={styles.form} boxtype={'file'} >
                <FileUploadInput
                    id="driverLicense"
                    labelText="Ehliyet Fotokopisi"
                    file={internalState.driverLicense}
                    fileRef={fileRefs.driverLicense}
                    previewUrl={previewUrls.driverLicense}
                    error={error.driverLicense}
                    onChange={onChangeHandler}
                    onClear={clearFile}
                />

                <FileUploadInput
                    id="vehicleRegistration"
                    labelText="Araç Ruhsatı"
                    file={internalState.vehicleRegistration}
                    fileRef={fileRefs.vehicleRegistration}
                    previewUrl={previewUrls.vehicleRegistration}
                    error={error.vehicleRegistration}
                    onChange={onChangeHandler}
                    onClear={clearFile}
                />

                <FileUploadInput
                    id="profilePhoto"
                    labelText="Profil Fotoğrafı"
                    file={internalState.profilePhoto}
                    fileRef={fileRefs.profilePhoto}
                    previewUrl={previewUrls.profilePhoto}
                    error={error.profilePhoto}
                    onChange={onChangeHandler}
                    onClear={clearFile}
                />
            </div>
        </div>
    );
};

export default DriverDocumentsUploadForm;
