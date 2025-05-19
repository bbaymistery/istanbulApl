import GlobalLayout from '../../components/layouts/GlobalLayout';
import { checkLanguageAttributeOntheUrl } from '../../helpers/checkLanguageAttributeOntheUrl';
import { isUrlLoverCase } from '../../helpers/isUrlLoverCase';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import { parse } from 'url';
import { driversWantedKeywords, getMetaTagsDriversWanted, getSingleDriverWantedSchema } from '../../constants/keywordsAndContents/sofor-araniyor/keywordsAndContent';
import { adjustPathnameForLanguage } from '../../helpers/adjustedPageLanguage';
import { parseCookies } from '../../helpers/cokieesFunc';
import { createMetaTagElementsClientSide, renderSchemaScriptsClientSide } from '../../helpers/schemaMetaTagHelper';
import { setNoCacheHeader } from '../../helpers/setNoCacheHeader';
import { fetchConfig } from '../../resources/getEnvConfig';
import styles from "./styles.module.scss";
import BreadCrumb from './breadCrubm';
import Alert from '../../components/elements/alert/Alert';
import AdressInformations from '../../components/elements/AdressInformations';
import TextInput from '../../components/elements/TextInput';
import { currentDate } from '../../helpers/getDates';
import React from 'react';
import DriverPersonalInfoForm from './DriverPersonalInfoForm';
import DriverVehicleInfoForm from './DriverVehicleInfoForm';
import Button from '../../components/elements/Button/Button';
import { BUTTON_TYPES } from '../../components/elements/Button/ButtonTypes';
import DriverPreferredLocationForm from './DriverPreferredLocationForm';
import DriverDocumentsUploadForm from './DriverDocumentsUploadForm';
const validateForm = (formState) => {
  const errors = {};

  // Driver Personal Info
  if (!formState.fullname.trim()) {
    errors.fullname = "Lütfen ad soyad girin.";
  }

  if (!formState.birthdate) {
    errors.birthdate = "Doğum tarihi boş bırakılamaz.";
  }

  if (!formState.phone.trim()) {
    errors.phone = "Telefon numarası gerekli.";
  }

  if (!formState.email.trim()) {
    errors.email = "E-posta adresi gerekli.";
  } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
    errors.email = "Geçerli bir e-posta girin.";
  }

  if (!formState.address.trim()) {
    errors.address = "Adres gerekli.";
  }

  // Driver Vehicle Info
  if (!formState.isOwner || (formState.isOwner !== 'yes' && formState.isOwner !== 'no')) {
    errors.isOwner = "Araç sahibi olup olmadığınızı seçin.";
  }

  if (!formState.vehicleMakeModel.trim()) {
    errors.vehicleMakeModel = "Araç marka ve model bilgisi gerekli.";
  }

  if (!formState.vehicleYear.trim()) {
    errors.vehicleYear = "Model yılı gerekli.";
  } else if (!/^\d{4}$/.test(formState.vehicleYear)) {
    errors.vehicleYear = "Model yılı 4 haneli bir sayı olmalıdır.";
  }

  if (!formState.licensePlate.trim()) {
    errors.licensePlate = "Plaka numarası gerekli.";
  }

  if (!formState.passengerCapacity.trim()) {
    errors.passengerCapacity = "Yolcu kapasitesi gerekli.";
  }
  //  else if (isNaN(formState.passengerCapacity)) {
  //   errors.passengerCapacity = "Yolcu kapasitesi sayı olmalıdır.";
  // }
  if (!formState.driverLicense) {
    errors.driverLicense = "Ehliyet fotokopisi yüklenmeli.";
  }
  if (!formState.vehicleRegistration) {
    errors.vehicleRegistration = "Araç ruhsatı yüklenmeli.";
  }
  if (!formState.profilePhoto) {
    errors.profilePhoto = "Profil fotoğrafı yüklenmeli.";
  }
  return errors;
};


const SoforBasvuruFormu = (props) => {
  let { metaDescription, keywords, headTitle } = props

  const state = useSelector(state => state.pickUpDropOffActions)
  let { params: { direction, language } } = state

  const { appData } = useSelector(state => state.initialReducer)
  const fileRefs = {
    driverLicense: React.useRef(null),
    vehicleRegistration: React.useRef(null),
    profilePhoto: React.useRef(null),
  };

  let [internalState, setInternalState] = React.useReducer((s, o) => ({ ...s, ...o }), {

    //Driver Personal Info
    "fullname": "",
    "birthdate": currentDate(),
    "phone": "",
    "email": "",
    "address": "",

    //Driver Car Info
    "isOwner": "yes", // veya "no"
    "vehicleMakeModel": "",
    "vehicleYear": "",
    "licensePlate": "",
    "passengerCapacity": "",

    "preferredLocation": "istanbul_european", // default seçili
    //belgeler resml;er
    "driverLicense": null,
    "vehicleRegistration": null,
    "profilePhoto": null,


  })
  console.log(internalState);

  const [error, setError] = React.useState({});

  const onChangeHandler = (e) => {
    const { name, value, files } = e.target;
    const newValue = files ? files[0] : value;
    setInternalState({ [name]: newValue });

    if (error[name]) {
      setError({ ...error, [name]: "" });
    }
  };
  const clearFile = (field) => {
    setInternalState({ [field]: null });
    if (fileRefs[field]?.current) {
      fileRefs[field].current.value = null; // input’u sıfırla
    }
    if (error[field]) {
      setError({ ...error, [field]: "" });
    }
  };

  const handleSend = () => {
    const validationErrors = validateForm(internalState);
    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
      return;
    }
  };
  return (
    <GlobalLayout title={headTitle} keywords={keywords} description={metaDescription} >
      <Head >
        <link rel="canonical" href={props.mainCanonical} />
        {createMetaTagElementsClientSide(props.metaTags)}
        {renderSchemaScriptsClientSide(props.schemas)}
      </Head>
      <div className={`${styles.sofor_basvuru_formu} ${direction} page`} >
        <BreadCrumb title="" />
        <div className={`${styles.sofor_basvuru_formu_section} page_section`}>
          <Alert />
          <div className={`${styles.sofor_basvuru_formu_section_container} page_section_container`}>
            <div className={styles.contact_area}>
              <div className={styles.forms}>
                <DriverPersonalInfoForm internalState={internalState} onChangeHandler={onChangeHandler} error={error} />
                <DriverVehicleInfoForm internalState={internalState} onChangeHandler={onChangeHandler} error={error} />
                <DriverPreferredLocationForm selectedLocation={internalState.preferredLocation} onChangeHandler={onChangeHandler} />
                <DriverDocumentsUploadForm internalState={internalState} onChangeHandler={onChangeHandler} error={error} clearFile={clearFile} fileRefs={fileRefs} />
                <div onClick={handleSend}>
                  <Button type={BUTTON_TYPES.PRIMARY} style={{ padding: "10px 28.5px", width: '100%' }} btnText={`Gönder`} />
                </div>
              </div>
            </div>
            <div className={styles.address_area}>
              <AdressInformations direction={direction} appData={appData} />
            </div>
          </div>
        </div>
      </div>
    </GlobalLayout>
  );
}
export async function getServerSideProps({ req, res, query, resolvedUrl }) {

  setNoCacheHeader(res, true);

  isUrlLoverCase(resolvedUrl, res)

  //get cookie and pathnames
  let cookies = parseCookies(req.headers.cookie);
  let { pathname } = parse(req.url, true)
  let pageStartLanguage = checkLanguageAttributeOntheUrl(req?.url)

  // Adjust pathname and language based on initial language
  const adjusted = adjustPathnameForLanguage(pathname, pageStartLanguage, cookies);
  pathname = adjusted.pathname;
  pageStartLanguage = adjusted.pageStartLanguage;

  if (pageStartLanguage !== 'tr') {
    return {
      redirect: {
        destination: '/tr/sofor-basvuru-formu',
        permanent: true, // SEO için
      },
    };
  }

  let metaDescription = driversWantedKeywords.metaDescription[pageStartLanguage]
  let keywords = driversWantedKeywords.keywords[pageStartLanguage];
  let headTitle = driversWantedKeywords.headTitle[pageStartLanguage];
  const env = await fetchConfig();
  const mainCanonical = `${env.websiteDomain}/tr/sofor-basvuru-formu`
  const schemas = [getSingleDriverWantedSchema(pathname, pageStartLanguage)]
  const metaTags = getMetaTagsDriversWanted(pathname, pageStartLanguage, env);
  return {
    //we pass tourdetails fot adding inside redux generally all together
    props: {
      metaDescription, keywords, headTitle, mainCanonical, schemas, metaTags
    }
  };


}
export default SoforBasvuruFormu