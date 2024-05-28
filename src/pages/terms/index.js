
import React, { useEffect, useState } from "react";
import GlobalLayout from "../../components/layouts/GlobalLayout";
import styles from "./styles.module.scss"
import { useSelector } from "react-redux";
const tabs = [
    "Account & Payments",
    "Manage Orders",
    "Returns & Refunds",
];
const Terms = () => {
    const [currentTab, setCurrentTab] = useState("Account & Payments");
    const state = useSelector(state => state.pickUpDropOffActions)
    let { params: { direction, language } } = state
    const { appData } = useSelector(state => state.initialReducer)
    useEffect(() => {
        const termsContainer = document.getElementById("termsContainer");
        if (termsContainer) {
            termsContainer.style.opacity = 0;
            setTimeout(() => {
                termsContainer.style.opacity = 1;
            }, 300); // Change the time (in milliseconds) as needed
        }
    }, [currentTab]);

    return (
        <GlobalLayout title="Terms" keywords="Terms" description="Terms" >
            <div className={`${styles.terms} ${direction} page`} >
                <div className={`${styles.terms_section} page_section`}>
                    <div className={`${styles.terms_section_container} page_section_container`}>
                        <div>
                            <span><a href="/">Home</a></span>
                            <span>{">"}</span>
                            <span><a href="#">Terms</a> </span>
                        </div>
                        <div className={styles.terms_container}>
                            <div className={styles.terms_container_left}>
                                {tabs.map((elm, i) => (
                                    <div key={i}  onClick={() => setCurrentTab(elm)}   >
                                        <button className={` ${elm == currentTab ? styles.active : ""} `} data-tab-target=".-tab-item-1">
                                            {elm}
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <div className={styles.terms_container_right}>
                                <div id="termsContainer" style={{ transition: "0.1s" }}   >
                                    <h2 >1. Introduction</h2>
                                    <p >
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Risus nascetur morbi nisl, mi, in semper metus porttitor
                                        non. Augue nunc amet fringilla sit. Fringilla eget arcu
                                        sodales sed a, parturient fermentum amet scelerisque. Amet
                                        purus urna, dictumst aliquet aliquam natoque non, morbi
                                        pretium. Integer amet fermentum nibh viverra mollis
                                        consectetur arcu, ultrices dolor. Gravida purus arcu viverra
                                        eget. Aliquet tincidunt dignissim aliquam tempor nec id.
                                        Habitant suscipit sit semper duis odio amet, at.
                                        <br />
                                        <br />
                                        Massa ultricies a arcu velit eget gravida purus ultrices
                                        eget. Orci, fames eu facilisi justo. Lacus netus a at sed
                                        justo vel leo leo pellentesque. Nulla ut laoreet luctus cum
                                        turpis et amet ac viverra. Vitae neque orci dui eu ac
                                        tincidunt. Egestas placerat egestas netus nec velit gravida
                                        consectetur laoreet vitae. Velit sed enim habitant habitant
                                        non diam. Semper tellus turpis tempus ac leo tempor.
                                        Ultricies amet, habitasse adipiscing bibendum consequat
                                        amet, sed. Id convallis suspendisse vitae, lacinia mattis
                                        cursus montes, dui. Tortor lobortis dignissim eget egestas.
                                        Eget enim auctor nunc eget mattis sollicitudin senectus
                                        diam. Tincidunt morbi egestas dignissim eget id aliquam.
                                    </p>

                                    <h2 >
                                        2. Your Use of the Zenmart Sites
                                    </h2>
                                    <p >
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Risus nascetur morbi nisl, mi, in semper metus porttitor
                                        non. Augue nunc amet fringilla sit. Fringilla eget arcu
                                        sodales sed a, parturient fermentum amet scelerisque. Amet
                                        purus urna, dictumst aliquet aliquam natoque non, morbi
                                        pretium. Integer amet fermentum nibh viverra mollis
                                        consectetur arcu, ultrices dolor. Gravida purus arcu viverra
                                        eget. Aliquet tincidunt dignissim aliquam tempor nec id.
                                        Habitant suscipit sit semper duis odio amet, at.
                                        <br />
                                        <br />
                                        Massa ultricies a arcu velit eget gravida purus ultrices
                                        eget. Orci, fames eu facilisi justo. Lacus netus a at sed
                                        justo vel leo leo pellentesque. Nulla ut laoreet luctus cum
                                        turpis et amet ac viverra. Vitae neque orci dui eu ac
                                        tincidunt. Egestas placerat egestas netus nec velit gravida
                                        consectetur laoreet vitae. Velit sed enim habitant habitant
                                        non diam. Semper tellus turpis tempus ac leo tempor.
                                        Ultricies amet, habitasse adipiscing bibendum consequat
                                        amet, sed. Id convallis suspendisse vitae, lacinia mattis
                                        cursus montes, dui. Tortor lobortis dignissim eget egestas.
                                        Eget enim auctor nunc eget mattis sollicitudin senectus
                                        diam. Tincidunt morbi egestas dignissim eget id aliquam.
                                    </p>

                                    <h2 >
                                        3. Content and Ideas
                                    </h2>
                                    <p >
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Risus nascetur morbi nisl, mi, in semper metus porttitor
                                        non. Augue nunc amet fringilla sit. Fringilla eget arcu
                                        sodales sed a, parturient fermentum amet scelerisque. Amet
                                        purus urna, dictumst aliquet aliquam natoque non, morbi
                                        pretium. Integer amet fermentum nibh viverra mollis
                                        consectetur arcu, ultrices dolor. Gravida purus arcu viverra
                                        eget. Aliquet tincidunt dignissim aliquam tempor nec id.
                                        Habitant suscipit sit semper duis odio amet, at.
                                        <br />
                                        <br />
                                        Massa ultricies a arcu velit eget gravida purus ultrices
                                        eget. Orci, fames eu facilisi justo. Lacus netus a at sed
                                        justo vel leo leo pellentesque. Nulla ut laoreet luctus cum
                                        turpis et amet ac viverra. Vitae neque orci dui eu ac
                                        tincidunt. Egestas placerat egestas netus nec velit gravida
                                        consectetur laoreet vitae. Velit sed enim habitant habitant
                                        non diam. Semper tellus turpis tempus ac leo tempor.
                                        Ultricies amet, habitasse adipiscing bibendum consequat
                                        amet, sed. Id convallis suspendisse vitae, lacinia mattis
                                        cursus montes, dui. Tortor lobortis dignissim eget egestas.
                                        Eget enim auctor nunc eget mattis sollicitudin senectus
                                        diam. Tincidunt morbi egestas dignissim eget id aliquam.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </GlobalLayout>
    );
}

export default Terms