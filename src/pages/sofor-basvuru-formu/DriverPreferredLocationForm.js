import React from 'react';
import styles from './styles.module.scss';

const LOCATION_OPTIONS = [
    { label: 'İstanbul Avrupa', value: 'istanbul_european' },
    { label: 'İstanbul Anadolu', value: 'istanbul_asian' },
    { label: 'Antalya', value: 'antalya' },
    { label: 'Bodrum', value: 'bodrum' },
    { label: 'Dalaman', value: 'dalaman' },
    { label: 'İzmir', value: 'izmir' }
];

const DriverPreferredLocationForm = ({ selectedLocation, onChangeHandler }) => {
    return (
        <div className={styles.form_card}>
            <h2>HİZMET VERMEK İSTEDİĞİNİZ BÖLGE</h2>
            <div className={styles.form}>
                <div className={styles.input_box}>
                    {LOCATION_OPTIONS.map((option) => (
                        <label key={option.value} className={styles.radio_option}>
                            <input type="radio" name="preferredLocation" value={option.value} checked={selectedLocation === option.value} onChange={onChangeHandler} />
                            {option.label}
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DriverPreferredLocationForm;