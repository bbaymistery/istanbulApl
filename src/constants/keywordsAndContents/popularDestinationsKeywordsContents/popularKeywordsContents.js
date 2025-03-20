/**
 * Retrieves SEO metadata for a specific destination page based on pathname, language, and taxi deals.
 * 
 * @param {string} pathname - The route/path of the destination page
 * @param {string} language - The language code for localization
 * @param {string} hasTaxiDeals - The airport code or taxi deal identifier
 * @returns {Object} An object containing headTitle, keywords, and metaDescription for SEO
 */
export const getSinglekeywordsTitlePopularDestinationPage = (pathname, language, hasTaxiDeals) => {
    const headTitle = keywordsTitlePopularDestinationPage[hasTaxiDeals]?.[pathname]?.headTitle?.[language] || ""
    const keywords = keywordsTitlePopularDestinationPage[hasTaxiDeals]?.[pathname]?.keywords?.[language] || ""
    const metaDescription = keywordsTitlePopularDestinationPage[hasTaxiDeals]?.[pathname]?.metaDescription?.[language] || ""
    return { headTitle, keywords, metaDescription }
};
const keywordsTitlePopularDestinationPage = {
    IST: {
        "/istanbul-airport-to-taksim": {
            "headTitle": {
                "en": "Istanbul Airport to Taksim Taxi | Private Transfers 24/7",
                "zh": "伊斯坦布尔机场至塔克西姆出租车 | 24/7私人接送",
                "ru": "Такси из аэропорта Стамбула в Таксим | Частные трансферы 24/7",
                "es": "Taxi del Aeropuerto de Estambul a Taksim | Traslados Privados 24/7",
                "it": "Taxi Aeroporto Istanbul Taksim | Trasferimenti Privati 24/7",
                "ar": "تاكسي من مطار إسطنبول إلى تقسيم | انتقالات خاصة 24/7",
                "tr": "İstanbul Havalimanı Taksim Taksi | 7/24 Özel Transferler",
            },
            "keywords": {
                "en": "Istanbul Airport to Taksim taxi, IST airport transfer, Taksim airport taxi, private airport transfer Istanbul, Istanbul taxi service",
                "tr": "İstanbul havalimanı Taksim taksi, IST havalimanı transferi, Taksim havalimanı taksi, özel havalimanı transferi İstanbul, İstanbul taksi hizmeti",
                "zh": "伊斯坦布尔机场至塔克西姆出租车, IST机场接送, 塔克西姆机场出租车, 私人机场接送伊斯坦布尔, 伊斯坦布尔出租车服务",
                "ru": "Такси из аэропорта Стамбула в Таксим, трансфер из аэропорта IST, такси из аэропорта в Таксим, частный трансфер в аэропорт Стамбула, такси в Стамбуле",
                "es": "Taxi aeropuerto Estambul a Taksim, traslado aeropuerto IST, taxi aeropuerto Taksim, traslado privado aeropuerto Estambul, servicio de taxi Estambul",
                "it": "Taxi aeroporto Istanbul Taksim, trasferimento aeroporto IST, taxi aeroporto Taksim, trasferimento privato aeroporto Istanbul, servizio taxi Istanbul",
                "ar": "تاكسي مطار إسطنبول إلى تقسيم, نقل مطار IST, تاكسي مطار تقسيم, انتقال خاص من مطار إسطنبول, خدمة تاكسي إسطنبول"
            },
            "metaDescription": {
                "en": "Book a reliable Istanbul Airport to Taksim taxi transfer. Fixed prices, free meet & greet, & 24/7 service. Reserve your IST Airport taxi now!",
                "tr": "Güvenilir bir İstanbul Havalimanı Taksim taksi transferi rezerve edin. Sabit fiyatlar, ücretsiz karşılama ve 7/24 hizmet. IST Havalimanı taksinizi şimdi ayırtın!",
                "zh": "预订可靠的伊斯坦布尔机场至塔克西姆出租车接送。固定价格，免费接机，24/7服务。立即预订您的IST机场出租车！",
                "ru": "Забронируйте надежный трансфер такси из аэропорта Стамбула в Таксим. Фиксированные цены, бесплатная встреча и обслуживание 24/7. Забронируйте такси из аэропорта IST прямо сейчас!",
                "es": "Reserva un traslado en taxi confiable desde el Aeropuerto de Estambul a Taksim. Precios fijos, bienvenida gratuita y servicio 24/7. ¡Reserva ahora tu taxi en el Aeropuerto IST!",
                "it": "Prenota un trasferimento in taxi affidabile dall Aeroporto di Istanbul a Taksim. Prezzi fissi, accoglienza gratuita e servizio 24/7. Prenota ora il tuo taxi dall Aeroporto IST!",
                "ar": "احجز انتقال تاكسي موثوق من مطار إسطنبول إلى تقسيم. أسعار ثابتة، استقبال مجاني وخدمة 24/7. احجز تاكسي مطار IST الآن!"
            }
        },
        "/istanbul-airport-to-sultanahmet": {
            "headTitle": {
                "en": "Istanbul Airport to Sultanahmet Taxi | Private Transfers 24/7",
                "zh": "伊斯坦布尔机场至苏丹艾哈迈德出租车 | 24/7私人接送",
                "ru": "Такси из аэропорта Стамбула в Султанахмет | Частные трансферы 24/7",
                "es": "Taxi del Aeropuerto de Estambul a Sultanahmet | Traslados Privados 24/7",
                "it": "Taxi Aeroporto Istanbul Sultanahmet | Trasferimenti Privati 24/7",
                "ar": "تاكسي من مطار إسطنبول إلى السلطان أحمد | انتقالات خاصة 24/7",
                "tr": "İstanbul Havalimanı Sultanahmet Taksi | 7/24 Özel Transferler"
            },
            "keywords": {
                "en": "Istanbul Airport to Sultanahmet taxi, IST airport transfer, Sultanahmet taxi service, private airport transfer Istanbul, Istanbul taxi service",
                "tr": "İstanbul havalimanı Sultanahmet taksi, IST havalimanı transferi, Sultanahmet taksi hizmeti, özel havalimanı transferi İstanbul, İstanbul taksi hizmeti",
                "zh": "伊斯坦布尔机场至苏丹艾哈迈德出租车, IST机场接送, 苏丹艾哈迈德出租车服务, 私人机场接送伊斯坦布尔, 伊斯坦布尔出租车服务",
                "ru": "Такси из аэропорта Стамбула в Султанахмет, трансфер из аэропорта IST, такси в Султанахмет, частный трансфер в аэропорт Стамбула, такси в Стамбуле",
                "es": "Taxi aeropuerto Estambul a Sultanahmet, traslado aeropuerto IST, servicio de taxi Sultanahmet, traslado privado aeropuerto Estambul, servicio de taxi Estambul",
                "it": "Taxi aeroporto Istanbul Sultanahmet, trasferimento aeroporto IST, servizio taxi Sultanahmet, trasferimento privato aeroporto Istanbul, servizio taxi Istanbul",
                "ar": "تاكسي مطار إسطنبول إلى السلطان أحمد, نقل مطار IST, خدمة تاكسي السلطان أحمد, انتقال خاص من مطار إسطنبول, خدمة تاكسي إسطنبول"
            },
            "metaDescription": {
                "en": "Book a reliable Istanbul Airport to Sultanahmet taxi transfer. Fixed prices, free meet & greet, & 24/7 service. No extra charge for flight delays.",
                "tr": "Güvenilir bir İstanbul Havalimanı Sultanahmet taksi transferi rezerve edin. Sabit fiyatlar, ücretsiz karşılama ve 7/24 hizmet. Uçuş gecikmelerinde ek ücret yok.",
                "zh": "预订可靠的伊斯坦布尔机场至苏丹艾哈迈德出租车接送。固定价格，免费接机，24/7服务。航班延误无额外费用。",
                "ru": "Забронируйте надежный трансфер такси из аэропорта Стамбула в Султанахмет. Фиксированные цены, бесплатная встреча и обслуживание 24/7. Без доплат за задержку рейса.",
                "es": "Reserva un traslado en taxi confiable desde el Aeropuerto de Estambul a Sultanahmet. Precios fijos, bienvenida gratuita y servicio 24/7. Sin cargo extra por retrasos de vuelos.",
                "it": "Prenota un trasferimento in taxi affidabile dall Aeroporto di Istanbul a Sultanahmet. Prezzi fissi, accoglienza gratuita e servizio 24/7. Nessun costo aggiuntivo per ritardi dei voli.",
                "ar": "احجز انتقال تاكسي موثوق من مطار إسطنبول إلى السلطان أحمد. أسعار ثابتة، استقبال مجاني وخدمة 24/7. لا توجد رسوم إضافية لتأخير الرحلات."
            }
        },
        "/istanbul-airport-to-beyoglu": {
            "headTitle": {
                "en": "Istanbul Airport to Beyoğlu Taxi | Fast & Reliable Transfers",
                "zh": "伊斯坦布尔机场至贝尤格鲁出租车 | 快速可靠的接送服务",
                "ru": "Такси из аэропорта Стамбула в Бейоглу | Быстрые и Надежные Трансферы",
                "es": "Taxi del Aeropuerto de Estambul a Beyoğlu | Traslados Rápidos y Confiables",
                "it": "Taxi Aeroporto Istanbul Beyoğlu | Trasferimenti Veloci e Affidabili",
                "ar": "تاكسي من مطار إسطنبول إلى بيوغلو | انتقالات سريعة وموثوقة",
                "tr": "İstanbul Havalimanı Beyoğlu Taksi | Hızlı ve Güvenilir Transferler"
            },
            "keywords": {
                "en": "Istanbul Airport to Beyoğlu taxi, IST airport transfer, Beyoğlu taxi service, private airport transfer Istanbul, Istanbul taxi service",
                "tr": "İstanbul havalimanı Beyoğlu taksi, IST havalimanı transferi, Beyoğlu taksi hizmeti, özel havalimanı transferi İstanbul, İstanbul taksi hizmeti",
                "zh": "伊斯坦布尔机场至贝尤格鲁出租车, IST机场接送, 贝尤格鲁出租车服务, 私人机场接送伊斯坦布尔, 伊斯坦布尔出租车服务",
                "ru": "Такси из аэропорта Стамбула в Бейоглу, трансфер из аэропорта IST, такси в Бейоглу, частный трансфер в аэропорт Стамбула, такси в Стамбуле",
                "es": "Taxi aeropuerto Estambul a Beyoğlu, traslado aeropuerto IST, servicio de taxi Beyoğlu, traslado privado aeropuerto Estambul, servicio de taxi Estambul",
                "it": "Taxi aeroporto Istanbul Beyoğlu, trasferimento aeroporto IST, servizio taxi Beyoğlu, trasferimento privato aeroporto Istanbul, servizio taxi Istanbul",
                "ar": "تاكسي مطار إسطنبول إلى بيوغلو, نقل مطار IST, خدمة تاكسي بيوغلو, انتقال خاص من مطار إسطنبول, خدمة تاكسي إسطنبول"
            },
            "metaDescription": {
                "en": "Book a fast and reliable Istanbul Airport to Beyoğlu taxi transfer. Fixed prices, free meet & greet, and 24/7 service. No extra charge for flight delays.",
                "tr": "Hızlı ve güvenilir bir İstanbul Havalimanı Beyoğlu taksi transferi rezerve edin. Sabit fiyatlar, ücretsiz karşılama ve 7/24 hizmet. Uçuş gecikmelerinde ek ücret yok.",
                "zh": "预订快速可靠的伊斯坦布尔机场至贝尤格鲁出租车接送。固定价格，免费接机，24/7服务。航班延误无额外费用。",
                "ru": "Забронируйте быстрый и надежный трансфер такси из аэропорта Стамбула в Бейоглу. Фиксированные цены, бесплатная встреча и обслуживание 24/7. Без доплат за задержку рейса.",
                "es": "Reserva un traslado en taxi rápido y confiable desde el Aeropuerto de Estambul a Beyoğlu. Precios fijos, bienvenida gratuita y servicio 24/7. Sin cargo extra por retrasos de vuelos.",
                "it": "Prenota un trasferimento in taxi veloce e affidabile dall Aeroporto di Istanbul a Beyoğlu. Prezzi fissi, accoglienza gratuita e servizio 24/7. Nessun costo aggiuntivo per ritardi dei voli.",
                "ar": "احجز انتقال تاكسي سريع وموثوق من مطار إسطنبول إلى بيوغلو. أسعار ثابتة، استقبال مجاني وخدمة 24/7. لا توجد رسوم إضافية لتأخير الرحلات."
            }
        },
        "/istanbul-airport-to-kadikoy": {
            "headTitle": {
                "en": "Istanbul Airport to Kadıköy Taxi | Fast & Reliable Transfers",
                "zh": "伊斯坦布尔机场至卡德柯伊出租车 | 快速可靠的接送服务",
                "ru": "Такси из аэропорта Стамбула в Кадыкёй | Быстрые и Надежные Трансферы",
                "es": "Taxi del Aeropuerto de Estambul a Kadıköy | Traslados Rápidos y Confiables",
                "it": "Taxi Aeroporto Istanbul Kadıköy | Trasferimenti Veloci e Affidabili",
                "ar": "تاكسي من مطار إسطنبول إلى كاديكوي | انتقالات سريعة وموثوقة",
                "tr": "İstanbul Havalimanı Kadıköy Taksi | Hızlı ve Güvenilir Transferler"
            },
            "keywords": {
                "en": "Istanbul Airport to Kadıköy taxi, IST airport transfer, Kadıköy taxi service, private airport transfer Istanbul, Istanbul taxi service",
                "tr": "İstanbul havalimanı Kadıköy taksi, IST havalimanı transferi, Kadıköy taksi hizmeti, özel havalimanı transferi İstanbul, İstanbul taksi hizmeti",
                "zh": "伊斯坦布尔机场至卡德柯伊出租车, IST机场接送, 卡德柯伊出租车服务, 私人机场接送伊斯坦布尔, 伊斯坦布尔出租车服务",
                "ru": "Такси из аэропорта Стамбула в Кадыкёй, трансфер из аэропорта IST, такси в Кадыкёй, частный трансфер в аэропорт Стамбула, такси в Стамбуле",
                "es": "Taxi aeropuerto Estambul a Kadıköy, traslado aeropuerto IST, servicio de taxi Kadıköy, traslado privado aeropuerto Estambul, servicio de taxi Estambul",
                "it": "Taxi aeroporto Istanbul Kadıköy, trasferimento aeroporto IST, servizio taxi Kadıköy, trasferimento privato aeroporto Istanbul, servizio taxi Istanbul",
                "ar": "تاكسي مطار إسطنبول إلى كاديكوي, نقل مطار IST, خدمة تاكسي كاديكوي, انتقال خاص من مطار إسطنبول, خدمة تاكسي إسطنبول"
            },
            "metaDescription": {
                "en": "Book a reliable Istanbul Airport to Kadıköy taxi transfer. Fixed prices, free meet & greet, and 24/7 service. No extra charge for flight delays.",
                "tr": "Güvenilir bir İstanbul Havalimanı Kadıköy taksi transferi rezerve edin. Sabit fiyatlar, ücretsiz karşılama ve 7/24 hizmet. Uçuş gecikmelerinde ek ücret yok.",
                "zh": "预订可靠的伊斯坦布尔机场至卡德柯伊出租车接送。固定价格，免费接机，24/7服务。航班延误无额外费用。",
                "ru": "Забронируйте надежный трансфер такси из аэропорта Стамбула в Кадыкёй. Фиксированные цены, бесплатная встреча и обслуживание 24/7. Без доплат за задержку рейса.",
                "es": "Reserva un traslado en taxi confiable desde el Aeropuerto de Estambul a Kadıköy. Precios fijos, bienvenida gratuita y servicio 24/7. Sin cargo extra por retrasos de vuelos.",
                "it": "Prenota un trasferimento in taxi affidabile dall Aeroporto di Istanbul a Kadıköy. Prezzi fissi, accoglienza gratuita e servizio 24/7. Nessun costo aggiuntivo per ritardi dei voli.",
                "ar": "احجز انتقال تاكسي موثوق من مطار إسطنبول إلى كاديكوي. أسعار ثابتة، استقبال مجاني وخدمة 24/7. لا توجد رسوم إضافية لتأخير الرحلات."
            }
        },

        "/istanbul-airport-to-besiktas": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        },
        "/istanbul-airport-to-bursa": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        },
        "/istanbul-airport-to-eminonu": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        },
        "/istanbul-airport-to-uskudar-asian-side": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        },
        "/istanbul-airport-to-levent-maslak": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        },
        "/istanbul-airport-to-ortakoy": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        },
        "/istanbul-airport-to-sapanca": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        },

        "/istanbul-airport-to-nisantasi": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        },
        "/istanbul-airport-to-yalova": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        },
        "/istanbul-airport-to-kocaeli-izmit": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        },
        "/istanbul-airport-to-sile-and-agva": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        },
        "/istanbul-airport-to-edirne": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        },
        "/istanbul-airport-to-tekirdag": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        },
        "/istanbul-airport-to-canakkale": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        },
    },
    SAW: {},
    AYT: {},
    DLM: {},
    BJY: {},
    ADB: {},
    GZP: {}
}



/**
 * Retrieves meta tags for a specific popular destination page based on pathname, language, and environment.
 * @param {string} pathname - The URL path of the destination page
 * @param {string} language - The language code for the meta tags
 * @param {Object} env - Environment configuration object
 * @param {string} hasTaxiDeals - Identifier for taxi deals
 * @returns {string[]} An array of meta tag strings for the specified destination and language
 */
export const getMetaTagPopularDestinationPage = (pathname, language, env, hasTaxiDeals) => {
    const metaTagsData = metaTagPopularDestatinationPage(env); // Get all meta tag data
    return metaTagsData[hasTaxiDeals][pathname]?.[language] || []; // Return the meta tags for the specific pathname and language
};
const metaTagPopularDestatinationPage = (env) => ({
    IST: {
        "/istanbul-airport-to-taksim": {
            en: [
                `<link rel=\"canonical\" href=\"${env.websiteDomain}/istanbul-airport-to-taksim\" />`,
                `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/istanbul-airport-to-taksim\" />`,
                `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/istanbul-airport-to-taksim\" />`,
                `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/istanbul-airport-to-taksim\" />`,
                `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/istanbul-airport-to-taksim\" />`,
                `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/istanbul-airport-to-taksim\" />`,
                `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/istanbul-airport-to-taksim\" />`,
                `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/istanbul-airport-to-taksim\" />`,
                "<meta property=\"og:type\" content=\"website\">",
                "<meta property=\"og:title\" content=\"Istanbul Airport to Taksim Taxi | Private Transfers 24/7\">",
                "<meta property=\"og:description\" content=\"Need a taxi from Istanbul Airport to Taksim? APL Transfers offers fixed-price, 24/7 private transfers with meet & greet service. Book your ride now!\">",
                `<meta property=\"og:url\" content=\"${env.websiteDomain}/istanbul-airport-to-taksim\">`,
                `<meta property=\"og:image\"content=\"${env.websiteDomain}/images/popularDestinations/istanbul/taksim.webp\">`,
                "<meta name=\"twitter:card\" content=\"summary_large_image\">",
                "<meta name=\"twitter:title\" content=\"Istanbul Airport to Taksim Taxi | Private Transfers 24/7\">",
                "<meta name=\"twitter:description\" content=\"Book your Istanbul Airport to Taksim transfer with APL Transfers. Reliable, affordable, and available 24/7 with free cancellation\">",
                `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/popularDestinations/istanbul/taksim.webp\">`,
            ],
            tr: [
                `<link rel=\"canonical\" href=\"${env.websiteDomain}/istanbul-airport-to-taksim\" />`,
                `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/istanbul-airport-to-taksim\" />`,
                `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/istanbul-airport-to-taksim\" />`,
                `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/istanbul-airport-to-taksim\" />`,
                `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/istanbul-airport-to-taksim\" />`,
                `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/istanbul-airport-to-taksim\" />`,
                `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/istanbul-airport-to-taksim\" />`,
                `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/istanbul-airport-to-taksim\" />`,
                "<meta property=\"og:type\" content=\"website\">",
                "<meta property=\"og:title\" content=\"İstanbul Havalimanından Taksime Taksi | 7/24 Özel Transferler\">",
                "<meta property=\"og:description\" content=\"İstanbul Havalimanından Taksime taksiye mi ihtiyacınız var? APL Transfers sabit fiyatlı, 7/24 özel transfer hizmeti sunuyor. Karşılama hizmetiyle hemen rezervasyon yapın!\">",
                `<meta property=\"og:url\" content=\"${env.websiteDomain}/istanbul-airport-to-taksim\">`,
                `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/popularDestinations/istanbul/taksim.webp\">`,
                "<meta name=\"twitter:card\" content=\"summary_large_image\">",
                "<meta name=\"twitter:title\" content=\"İstanbul Havalimanından Taksime Taksi | 7/24 Özel Transferler\">",
                "<meta name=\"twitter:description\" content=\"İstanbul Havalimanından Taksime transferinizi APL Transfers ile rezerve edin. Güvenilir, uygun fiyatlı ve 7/24 hizmet, üstelik ücretsiz iptal seçeneğiyle!\">",
                `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/popularDestinations/istanbul/taksim.webp\">`,
            ],
            ar: [
                `<link rel=\"canonical\" href=\"${env.websiteDomain}/istanbul-airport-to-taksim\" />`,
                `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/istanbul-airport-to-taksim\" />`,
                `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/istanbul-airport-to-taksim\" />`,
                `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/istanbul-airport-to-taksim\" />`,
                `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/istanbul-airport-to-taksim\" />`,
                `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/istanbul-airport-to-taksim\" />`,
                `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/istanbul-airport-to-taksim\" />`,
                `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/istanbul-airport-to-taksim\" />`,
                "<meta property=\"og:type\" content=\"website\">",
                "<meta property=\"og:title\" content=\"تاكسي من مطار إسطنبول إلى تقسيم | خدمة النقل الخاص 24/7\">",
                "<meta property=\"og:description\" content=\"هل تحتاج إلى تاكسي من مطار إسطنبول إلى تقسيم؟ توفر APL Transfers خدمات نقل خاصة بأسعار ثابتة على مدار 24/7 مع خدمة استقبال. احجز رحلتك الآن!\">",
                `<meta property=\"og:url\" content=\"${env.websiteDomain}/istanbul-airport-to-taksim\">`,
                `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/popularDestinations/istanbul/taksim.webp\">`,
                "<meta name=\"twitter:card\" content=\"summary_large_image\">",
                "<meta name=\"twitter:title\" content=\"تاكسي من مطار إسطنبول إلى تقسيم | خدمة النقل الخاص 24/7\">",
                "<meta name=\"twitter:description\" content=\"احجز خدمة النقل من مطار إسطنبول إلى تقسيم مع APL Transfers. خدمة موثوقة وبأسعار معقولة ومتاحة 24/7 مع إمكانية الإلغاء المجاني\">",
                `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/popularDestinations/istanbul/taksim.webp\">`,
            ],
            es: [
                `<link rel=\"canonical\" href=\"${env.websiteDomain}/istanbul-airport-to-taksim\" />`,
                `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/istanbul-airport-to-taksim\" />`,
                `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/istanbul-airport-to-taksim\" />`,
                `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/istanbul-airport-to-taksim\" />`,
                `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/istanbul-airport-to-taksim\" />`,
                `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/istanbul-airport-to-taksim\" />`,
                `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/istanbul-airport-to-taksim\" />`,
                `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/istanbul-airport-to-taksim\" />`,
                "<meta property=\"og:type\" content=\"website\">",
                "<meta property=\"og:title\" content=\"Taxi del Aeropuerto de Estambul a Taksim | Traslados Privados 24/7\">",
                "<meta property=\"og:description\" content=\"¿Necesita un taxi del Aeropuerto de Estambul a Taksim? APL Transfers ofrece traslados privados 24/7 a precio fijo con servicio de bienvenida. ¡Reserve su viaje ahora!\">",
                `<meta property=\"og:url\" content=\"${env.websiteDomain}/istanbul-airport-to-taksim\">`,
                `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/popularDestinations/istanbul/taksim.webp\">`,
                "<meta name=\"twitter:card\" content=\"summary_large_image\">",
                "<meta name=\"twitter:title\" content=\"Taxi del Aeropuerto de Estambul a Taksim | Traslados Privados 24/7\">",
                "<meta name=\"twitter:description\" content=\"Reserve su traslado del Aeropuerto de Estambul a Taksim con APL Transfers. Seguro, asequible y disponible 24/7 con cancelación gratuita\">",
                `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/popularDestinations/istanbul/taksim.webp\">`,
            ],
            it: [
                `<link rel=\"canonical\" href=\"${env.websiteDomain}/istanbul-airport-to-taksim\" />`,
                `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/istanbul-airport-to-taksim\" />`,
                `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/istanbul-airport-to-taksim\" />`,
                `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/istanbul-airport-to-taksim\" />`,
                `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/istanbul-airport-to-taksim\" />`,
                `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/istanbul-airport-to-taksim\" />`,
                `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/istanbul-airport-to-taksim\" />`,
                `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/istanbul-airport-to-taksim\" />`,
                "<meta property=\"og:type\" content=\"website\">",
                "<meta property=\"og:title\" content=\"Taxi dall'Aeroporto di Istanbul a Taksim | Trasferimenti Privati 24/7\">",
                "<meta property=\"og:description\" content=\"Hai bisogno di un taxi dall Aeroporto di Istanbul a Taksim? APL Transfers offre trasferimenti privati a prezzo fisso, disponibili 24/7 con servizio di accoglienza. Prenota ora il tuo viaggio!\">",
                `<meta property=\"og:url\" content=\"${env.websiteDomain}/istanbul-airport-to-taksim\">`,
                `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/popularDestinations/istanbul/taksim.webp\">`,
                "<meta name=\"twitter:card\" content=\"summary_large_image\">",
                "<meta name=\"twitter:title\" content=\"Taxi dall'Aeroporto di Istanbul a Taksim | Trasferimenti Privati 24/7\">",
                "<meta name=\"twitter:description\" content=\"Prenota il tuo trasferimento dall Aeroporto di Istanbul a Taksim con APL Transfers. Affidabile, conveniente e disponibile 24/7 con cancellazione gratuita\">",
                `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/popularDestinations/istanbul/taksim.webp\">`,
            ],
            ru: [
                `<link rel=\"canonical\" href=\"${env.websiteDomain}/istanbul-airport-to-taksim\" />`,
                `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/istanbul-airport-to-taksim\" />`,
                `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/istanbul-airport-to-taksim\" />`,
                `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/istanbul-airport-to-taksim\" />`,
                `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/istanbul-airport-to-taksim\" />`,
                `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/istanbul-airport-to-taksim\" />`,
                `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/istanbul-airport-to-taksim\" />`,
                `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/istanbul-airport-to-taksim\" />`,
                "<meta property=\"og:type\" content=\"website\">",
                "<meta property=\"og:title\" content=\"Такси из аэропорта Стамбула в Таксим | Частные трансферы 24/7\">",
                "<meta property=\"og:description\" content=\"Нужен такси из аэропорта Стамбула в Таксим? APL Transfers предлагает фиксированные тарифы, частные трансферы 24/7 с услугой встречи и сопровождения. Забронируйте сейчас!\">",
                `<meta property=\"og:url\" content=\"${env.websiteDomain}/istanbul-airport-to-taksim\">`,
                `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/popularDestinations/istanbul/taksim.webp\">`,
                "<meta name=\"twitter:card\" content=\"summary_large_image\">",
                "<meta name=\"twitter:title\" content=\"Такси из аэропорта Стамбула в Таксим | Частные трансферы 24/7\">",
                "<meta name=\"twitter:description\" content=\"Забронируйте трансфер из аэропорта Стамбула в Таксим с APL Transfers. Надежно, доступно и круглосуточно с бесплатной отменой\">",
                `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/popularDestinations/istanbul/taksim.webp\">`,
            ],
            zh: [
                `<link rel=\"canonical\" href=\"${env.websiteDomain}/istanbul-airport-to-taksim\" />`,
                `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/istanbul-airport-to-taksim\" />`,
                `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/istanbul-airport-to-taksim\" />`,
                `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/istanbul-airport-to-taksim\" />`,
                `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/istanbul-airport-to-taksim\" />`,
                `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/istanbul-airport-to-taksim\" />`,
                `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/istanbul-airport-to-taksim\" />`,
                `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/istanbul-airport-to-taksim\" />`,
                "<meta property=\"og:type\" content=\"website\">",
                "<meta property=\"og:title\" content=\"伊斯坦布尔机场至塔克西姆出租车 | 24/7私人接送\">",
                "<meta property=\"og:description\" content=\"需要从伊斯坦布尔机场前往塔克西姆的出租车吗？APL Transfers 提供固定价格、24/7 全天候私人接送服务，并提供迎接服务。立即预订您的行程！\">",
                `<meta property=\"og:url\" content=\"${env.websiteDomain}/istanbul-airport-to-taksim\">`,
                `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/popularDestinations/istanbul/taksim.webp\">`,
                "<meta name=\"twitter:card\" content=\"summary_large_image\">",
                "<meta name=\"twitter:title\" content=\"伊斯坦布尔机场至塔克西姆出租车 | 24/7私人接送\">",
                "<meta name=\"twitter:description\" content=\"预订您的伊斯坦布尔机场至塔克西姆接送服务，选择 APL Transfers。可靠、实惠，全天候 24/7 提供，并支持免费取消\">",
                `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/popularDestinations/istanbul/taksim.webp\">`,
            ],
        },
        "/istanbul-airport-to-sultanahmet": {
            en: [
                `<link rel=\"canonical\" href=\"${env.websiteDomain}/istanbul-airport-to-sultanahmet\" />`,
                `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/istanbul-airport-to-sultanahmet\" />`,
                `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/istanbul-airport-to-sultanahmet\" />`,
                `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/istanbul-airport-to-sultanahmet\" />`,
                `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/istanbul-airport-to-sultanahmet\" />`,
                `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/istanbul-airport-to-sultanahmet\" />`,
                `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/istanbul-airport-to-sultanahmet\" />`,
                `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/istanbul-airport-to-sultanahmet\" />`,
                "<meta property=\"og:type\" content=\"website\">",
                "<meta property=\"og:title\" content=\"Istanbul Airport to Sultanahmet Taxi | Private Transfers 24/7\">",
                "<meta property=\"og:description\" content=\"Book a reliable Istanbul Airport to Sultanahmet taxi transfer. Fixed prices, free meet & greet, & 24/7 service. No extra charge for flight delays\">",
                `<meta property=\"og:url\" content=\"${env.websiteDomain}"/istanbul-airport-to-sultanahmet\">`,
                `<meta property=\"og:image\"content=\"${env.websiteDomain}/images/popularDestinations/istanbul/sultanahmet.webp\">`,
                "<meta name=\"twitter:card\" content=\"summary_large_image\">",
                "<meta name=\"twitter:title\" content=\"Istanbul Airport to Sultanahmet Taxi | Private Transfers 24/7\">",
                "<meta name=\"twitter:description\" content=\"Need a taxi from Istanbul Airport to Sultanahmet? APL Transfers offers fixed-price, 24/7 private transfers with meet & greet service. No extra charge for flight delays. Book now!\">",
                `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/popularDestinations/istanbul/sultanahmet.webp\">`,
            ],
            tr: [
                `<link rel="canonical" href="${env.websiteDomain}/istanbul-airport-to-sultanahmet" />`,
                `<link rel="alternate" hrefLang="en" href="${env.websiteDomain}/istanbul-airport-to-sultanahmet" />`,
                `<link rel="alternate" hrefLang="ar" href="${env.websiteDomain}/ar/istanbul-airport-to-sultanahmet" />`,
                `<link rel="alternate" hrefLang="es" href="${env.websiteDomain}/es/istanbul-airport-to-sultanahmet" />`,
                `<link rel="alternate" hrefLang="it" href="${env.websiteDomain}/it/istanbul-airport-to-sultanahmet" />`,
                `<link rel="alternate" hrefLang="ru" href="${env.websiteDomain}/ru/istanbul-airport-to-sultanahmet" />`,
                `<link rel="alternate" hrefLang="zh" href="${env.websiteDomain}/zh/istanbul-airport-to-sultanahmet" />`,
                `<link rel="alternate" hrefLang="x-default" href="${env.websiteDomain}/istanbul-airport-to-sultanahmet" />`,
                `<meta property="og:type" content="website">`,
                `<meta property="og:title" content="İstanbul Havalimanı Sultanahmet Taksi | 7/24 Özel Transferler">`,
                `<meta property="og:description" content="Güvenilir bir İstanbul Havalimanı Sultanahmet taksi transferi rezerve edin. Sabit fiyatlar, ücretsiz karşılama ve 7/24 hizmet. Uçuş gecikmelerinde ek ücret yok.">`,
                `<meta property="og:url" content="${env.websiteDomain}/tr/istanbul-airport-to-sultanahmet">`,
                `<meta property="og:image" content="${env.websiteDomain}/images/popularDestinations/istanbul/sultanahmet.webp">`,
                `<meta name="twitter:card" content="summary_large_image">`,
                `<meta name="twitter:title" content="İstanbul Havalimanı Sultanahmet Taksi | 7/24 Özel Transferler">`,
                `<meta name="twitter:description" content="İstanbul Havalimanı'ndan Sultanahmet'e taksi mi lazım? APL Transfers, sabit fiyatlarla, 7/24 özel transfer ve ücretsiz karşılama hizmeti sunar. Uçuş gecikmelerinde ek ücret yok. Hemen rezervasyon yapın!">`,
                `<meta name="twitter:image" content="${env.websiteDomain}/images/popularDestinations/istanbul/sultanahmet.webp">`
            ],
            ar: [
                `<link rel="canonical" href="${env.websiteDomain}/istanbul-airport-to-sultanahmet" />`,
                `<link rel="alternate" hrefLang="en" href="${env.websiteDomain}/istanbul-airport-to-sultanahmet" />`,
                `<link rel="alternate" hrefLang="ar" href="${env.websiteDomain}/ar/istanbul-airport-to-sultanahmet" />`,
                `<link rel="alternate" hrefLang="es" href="${env.websiteDomain}/es/istanbul-airport-to-sultanahmet" />`,
                `<link rel="alternate" hrefLang="it" href="${env.websiteDomain}/it/istanbul-airport-to-sultanahmet" />`,
                `<link rel="alternate" hrefLang="ru" href="${env.websiteDomain}/ru/istanbul-airport-to-sultanahmet" />`,
                `<link rel="alternate" hrefLang="zh" href="${env.websiteDomain}/zh/istanbul-airport-to-sultanahmet" />`,
                `<link rel="alternate" hrefLang="x-default" href="${env.websiteDomain}/istanbul-airport-to-sultanahmet" />`,
                `<meta property="og:type" content="website">`,
                `<meta property="og:title" content="تاكسي من مطار إسطنبول إلى السلطان أحمد | انتقالات خاصة 24/7">`,
                `<meta property="og:description" content="احجز انتقال تاكسي موثوق من مطار إسطنبول إلى السلطان أحمد. أسعار ثابتة، استقبال مجاني وخدمة 24/7. لا توجد رسوم إضافية لتأخير الرحلات.">`,
                `<meta property="og:url" content="${env.websiteDomain}/ar/istanbul-airport-to-sultanahmet">`,
                `<meta property="og:image" content="${env.websiteDomain}/images/popularDestinations/istanbul/sultanahmet.webp">`,
                `<meta name="twitter:card" content="summary_large_image">`,
                `<meta name="twitter:title" content="تاكسي من مطار إسطنبول إلى السلطان أحمد | انتقالات خاصة 24/7">`,
                `<meta name="twitter:description" content="هل تحتاج إلى تاكسي من مطار إسطنبول إلى السلطان أحمد؟ تقدم APL Transfers انتقالات خاصة بأسعار ثابتة وخدمة استقبال مجانية على مدار 24/7. لا توجد رسوم إضافية لتأخير الرحلات. احجز الآن!">`,
                `<meta name="twitter:image" content="${env.websiteDomain}/images/popularDestinations/istanbul/sultanahmet.webp">`
            ],
            es: [
                `<link rel="canonical" href="${env.websiteDomain}/istanbul-airport-to-sultanahmet" />`,
                `<link rel="alternate" hrefLang="en" href="${env.websiteDomain}/istanbul-airport-to-sultanahmet" />`,
                `<link rel="alternate" hrefLang="ar" href="${env.websiteDomain}/ar/istanbul-airport-to-sultanahmet" />`,
                `<link rel="alternate" hrefLang="es" href="${env.websiteDomain}/es/istanbul-airport-to-sultanahmet" />`,
                `<link rel="alternate" hrefLang="it" href="${env.websiteDomain}/it/istanbul-airport-to-sultanahmet" />`,
                `<link rel="alternate" hrefLang="ru" href="${env.websiteDomain}/ru/istanbul-airport-to-sultanahmet" />`,
                `<link rel="alternate" hrefLang="zh" href="${env.websiteDomain}/zh/istanbul-airport-to-sultanahmet" />`,
                `<link rel="alternate" hrefLang="x-default" href="${env.websiteDomain}/istanbul-airport-to-sultanahmet" />`,
                `<meta property="og:type" content="website">`,
                `<meta property="og:title" content="Taxi del Aeropuerto de Estambul a Sultanahmet | Traslados Privados 24/7">`,
                `<meta property="og:description" content="Reserva un traslado en taxi confiable desde el Aeropuerto de Estambul a Sultanahmet. Precios fijos, bienvenida gratuita y servicio 24/7. Sin cargo extra por retrasos de vuelos.">`,
                `<meta property="og:url" content="${env.websiteDomain}/es/istanbul-airport-to-sultanahmet">`,
                `<meta property="og:image" content="${env.websiteDomain}/images/popularDestinations/istanbul/sultanahmet.webp">`,
                `<meta name="twitter:card" content="summary_large_image">`,
                `<meta name="twitter:title" content="Taxi del Aeropuerto de Estambul a Sultanahmet | Traslados Privados 24/7">`,
                `<meta name="twitter:description" content="¿Necesitas un taxi del Aeropuerto de Estambul a Sultanahmet? APL Transfers ofrece traslados privados con precios fijos, servicio 24/7 y bienvenida gratuita. Sin cargo extra por retrasos de vuelos. ¡Reserva ahora!">`,
                `<meta name="twitter:image" content="${env.websiteDomain}/images/popularDestinations/istanbul/sultanahmet.webp">`
            ],
            it: [
                `<link rel="canonical" href="${env.websiteDomain}/istanbul-airport-to-sultanahmet" />`,
                `<link rel="alternate" hrefLang="en" href="${env.websiteDomain}/istanbul-airport-to-sultanahmet" />`,
                `<link rel="alternate" hrefLang="ar" href="${env.websiteDomain}/ar/istanbul-airport-to-sultanahmet" />`,
                `<link rel="alternate" hrefLang="es" href="${env.websiteDomain}/es/istanbul-airport-to-sultanahmet" />`,
                `<link rel="alternate" hrefLang="it" href="${env.websiteDomain}/it/istanbul-airport-to-sultanahmet" />`,
                `<link rel="alternate" hrefLang="ru" href="${env.websiteDomain}/ru/istanbul-airport-to-sultanahmet" />`,
                `<link rel="alternate" hrefLang="zh" href="${env.websiteDomain}/zh/istanbul-airport-to-sultanahmet" />`,
                `<link rel="alternate" hrefLang="x-default" href="${env.websiteDomain}/istanbul-airport-to-sultanahmet" />`,
                `<meta property="og:type" content="website">`,
                `<meta property="og:title" content="Taxi Aeroporto Istanbul Sultanahmet | Trasferimenti Privati 24/7">`,
                `<meta property="og:description" content="Prenota un trasferimento in taxi affidabile dall Aeroporto di Istanbul a Sultanahmet. Prezzi fissi, accoglienza gratuita e servizio 24/7. Nessun costo aggiuntivo per ritardi dei voli.">`,
                `<meta property="og:url" content="${env.websiteDomain}/it/istanbul-airport-to-sultanahmet">`,
                `<meta property="og:image" content="${env.websiteDomain}/images/popularDestinations/istanbul/sultanahmet.webp">`,
                `<meta name="twitter:card" content="summary_large_image">`,
                `<meta name="twitter:title" content="Taxi Aeroporto Istanbul Sultanahmet | Trasferimenti Privati 24/7">`,
                `<meta name="twitter:description" content="Hai bisogno di un taxi dall Aeroporto di Istanbul a Sultanahmet? APL Transfers offre trasferimenti privati a prezzo fisso, servizio 24/7 e accoglienza gratuita. Nessun costo extra per ritardi dei voli. Prenota ora!">`,
                `<meta name="twitter:image" content="${env.websiteDomain}/images/popularDestinations/istanbul/sultanahmet.webp">`
            ],
            ru: [
                `<link rel="canonical" href="${env.websiteDomain}/istanbul-airport-to-sultanahmet" />`,
                `<link rel="alternate" hrefLang="en" href="${env.websiteDomain}/istanbul-airport-to-sultanahmet" />`,
                `<link rel="alternate" hrefLang="ar" href="${env.websiteDomain}/ar/istanbul-airport-to-sultanahmet" />`,
                `<link rel="alternate" hrefLang="es" href="${env.websiteDomain}/es/istanbul-airport-to-sultanahmet" />`,
                `<link rel="alternate" hrefLang="it" href="${env.websiteDomain}/it/istanbul-airport-to-sultanahmet" />`,
                `<link rel="alternate" hrefLang="ru" href="${env.websiteDomain}/ru/istanbul-airport-to-sultanahmet" />`,
                `<link rel="alternate" hrefLang="zh" href="${env.websiteDomain}/zh/istanbul-airport-to-sultanahmet" />`,
                `<link rel="alternate" hrefLang="x-default" href="${env.websiteDomain}/istanbul-airport-to-sultanahmet" />`,
                `<meta property="og:type" content="website">`,
                `<meta property="og:title" content="Такси из аэропорта Стамбула в Султанахмет | Частные трансферы 24/7">`,
                `<meta property="og:description" content="Забронируйте надежный трансфер такси из аэропорта Стамбула в Султанахмет. Фиксированные цены, бесплатная встреча и обслуживание 24/7. Без доплат за задержку рейса.">`,
                `<meta property="og:url" content="${env.websiteDomain}/ru/istanbul-airport-to-sultanahmet">`,
                `<meta property="og:image" content="${env.websiteDomain}/images/popularDestinations/istanbul/sultanahmet.webp">`,
                `<meta name="twitter:card" content="summary_large_image">`,
                `<meta name="twitter:title" content="Такси из аэропорта Стамбула в Султанахмет | Частные трансферы 24/7">`,
                `<meta name="twitter:description" content="Нужен такси из аэропорта Стамбула в Султанахмет? APL Transfers предлагает фиксированные цены, круглосуточные частные трансферы и бесплатную встречу. Без доплат за задержку рейса. Забронируйте сейчас!">`,
                `<meta name="twitter:image" content="${env.websiteDomain}/images/popularDestinations/istanbul/sultanahmet.webp">`
            ],
            zh: [
                `<link rel="canonical" href="${env.websiteDomain}/istanbul-airport-to-sultanahmet" />`,
                `<link rel="alternate" hrefLang="en" href="${env.websiteDomain}/istanbul-airport-to-sultanahmet" />`,
                `<link rel="alternate" hrefLang="ar" href="${env.websiteDomain}/ar/istanbul-airport-to-sultanahmet" />`,
                `<link rel="alternate" hrefLang="es" href="${env.websiteDomain}/es/istanbul-airport-to-sultanahmet" />`,
                `<link rel="alternate" hrefLang="it" href="${env.websiteDomain}/it/istanbul-airport-to-sultanahmet" />`,
                `<link rel="alternate" hrefLang="ru" href="${env.websiteDomain}/ru/istanbul-airport-to-sultanahmet" />`,
                `<link rel="alternate" hrefLang="zh" href="${env.websiteDomain}/zh/istanbul-airport-to-sultanahmet" />`,
                `<link rel="alternate" hrefLang="x-default" href="${env.websiteDomain}/istanbul-airport-to-sultanahmet" />`,
                `<meta property="og:type" content="website">`,
                `<meta property="og:title" content="伊斯坦布尔机场至苏丹艾哈迈德出租车 | 24/7私人接送">`,
                `<meta property="og:description" content="预订可靠的伊斯坦布尔机场至苏丹艾哈迈德出租车接送。固定价格，免费接机，24/7服务。航班延误无额外费用。">`,
                `<meta property="og:url" content="${env.websiteDomain}/zh/istanbul-airport-to-sultanahmet">`,
                `<meta property="og:image" content="${env.websiteDomain}/images/popularDestinations/istanbul/sultanahmet.webp">`,
                `<meta name="twitter:card" content="summary_large_image">`,
                `<meta name="twitter:title" content="伊斯坦布尔机场至苏丹艾哈迈德出租车 | 24/7私人接送">`,
                `<meta name="twitter:description" content="需要从伊斯坦布尔机场到苏丹艾哈迈德的出租车？APL Transfers 提供固定价格、24/7 私人接送和免费迎接服务。航班延误无额外费用。立即预订！">`,
                `<meta name="twitter:image" content="${env.websiteDomain}/images/popularDestinations/istanbul/sultanahmet.webp">`
            ]
        },
        "/istanbul-airport-to-beyoglu": {
            en: [
                `<link rel=\"canonical\" href=\"${env.websiteDomain}/istanbul-airport-to-beyoglu\" />`,
                `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/istanbul-airport-to-beyoglu\" />`,
                `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/istanbul-airport-to-beyoglu\" />`,
                `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/istanbul-airport-to-beyoglu\" />`,
                `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/istanbul-airport-to-beyoglu\" />`,
                `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/istanbul-airport-to-beyoglu\" />`,
                `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/istanbul-airport-to-beyoglu\" />`,
                `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}"/istanbul-airport-to-beyoglu\" />`,
                "<meta property=\"og:type\" content=\"website\">",
                "<meta property=\"og:title\" content=\"Istanbul Airport to Beyoğlu Taxi | Fast & Reliable Transfers\">",
                "<meta property=\"og:description\" content=\"Need a taxi from Istanbul Airport to Beyoğlu? APL Transfers offers fixed-price, 24/7 private transfers with meet & greet service. No extra charge for flight delays. Book now!\">",
                `<meta property=\"og:url\" content=\"${env.websiteDomain}/istanbul-airport-to-beyoglu\">`,
                `<meta property=\"og:image\"content=\"${env.websiteDomain}/images/popularDestinations/istanbul/beyoglu.webp\">`,
                "<meta name=\"twitter:card\" content=\"summary_large_image\">",
                "<meta name=\"twitter:title\" content=\"Istanbul Airport to Beyoğlu Taxi | Fast & Reliable Transfers\">",
                "<meta name=\"twitter:description\" content=\"Book your Istanbul Airport to Beyoğlu transfer with APL Transfers. Reliable, affordable, and available 24/7 with free cancellation. No extra charge for flight delays.\">",
                `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/popularDestinations/istanbul/beyoglu.webp\">`,
            ],
            tr: [
                `<link rel=\"canonical\" href=\"${env.websiteDomain}/tr/istanbul-airport-to-beyoglu\" />`,
                `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/istanbul-airport-to-beyoglu\" />`,
                `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/istanbul-airport-to-beyoglu\" />`,
                `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/istanbul-airport-to-beyoglu\" />`,
                `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/istanbul-airport-to-beyoglu\" />`,
                `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/istanbul-airport-to-beyoglu\" />`,
                `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/istanbul-airport-to-beyoglu\" />`,
                `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/istanbul-airport-to-beyoglu\" />`,
                "<meta property=\"og:type\" content=\"website\">",
                "<meta property=\"og:title\" content=\"İstanbul Havalimanı Beyoğlu Taksi | Hızlı ve Güvenilir Transferler\">",
                "<meta property=\"og:description\" content=\"İstanbul Havalimanı'ndan Beyoğlu'na taksi mi lazım? APL Transfers sabit fiyatlı, 7/24 özel transfer hizmeti sunar. Ücretsiz karşılama, uçuş gecikmelerinde ek ücret yok. Hemen rezervasyon yapın!\">",
                `<meta property=\"og:url\" content=\"${env.websiteDomain}/tr/istanbul-havalimani-beyoglu\">`,
                `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/popularDestinations/istanbul/beyoglu.webp\">`,
                "<meta name=\"twitter:card\" content=\"summary_large_image\">",
                "<meta name=\"twitter:title\" content=\"İstanbul Havalimanı Beyoğlu Taksi | Hızlı ve Güvenilir Transferler\">",
                "<meta name=\"twitter:description\" content=\"İstanbul Havalimanı'ndan Beyoğlu'na transferinizi APL Transfers ile ayırtın. Güvenilir, uygun fiyatlı ve 7/24 hizmet. Ücretsiz iptal ve uçuş gecikmelerinde ek ücret yok.\">",
                `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/popularDestinations/istanbul/beyoglu.webp\">`
            ],

            ar: [
                `<link rel=\"canonical\" href=\"${env.websiteDomain}/ar/istanbul-airport-to-beyoglu\" />`,
                `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/istanbul-airport-to-beyoglu\" />`,
                `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/istanbul-airport-to-beyoglu\" />`,
                `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/istanbul-airport-to-beyoglu\" />`,
                `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/istanbul-airport-to-beyoglu\" />`,
                `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/istanbul-airport-to-beyoglu\" />`,
                `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/istanbul-airport-to-beyoglu\" />`,
                `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/istanbul-airport-to-beyoglu\" />`,
                "<meta property=\"og:type\" content=\"website\">",
                "<meta property=\"og:title\" content=\"تاكسي مطار إسطنبول إلى بيوغلو | نقل سريع وموثوق\">",
                "<meta property=\"og:description\" content=\"هل تحتاج إلى تاكسي من مطار إسطنبول إلى بيوغلو؟ توفر APL Transfers خدمة نقل خاصة بأسعار ثابتة على مدار 24/7 مع استقبال مجاني. لا توجد رسوم إضافية على تأخير الرحلات. احجز الآن!\">",
                `<meta property=\"og:url\" content=\"${env.websiteDomain}/ar/istanbul-airport-to-beyoglu\">`,
                `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/popularDestinations/istanbul/beyoglu.webp\">`,
                "<meta name=\"twitter:card\" content=\"summary_large_image\">",
                "<meta name=\"twitter:title\" content=\"تاكسي مطار إسطنبول إلى بيوغلو | نقل سريع وموثوق\">",
                "<meta name=\"twitter:description\" content=\"احجز خدمة النقل من مطار إسطنبول إلى بيوغلو مع APL Transfers. خدمة موثوقة وبأسعار مناسبة ومتاحة على مدار 24/7 مع إلغاء مجاني. لا توجد رسوم إضافية على تأخير الرحلات.\">",
                `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/popularDestinations/istanbul/beyoglu.webp\">`
            ],
            es: [
                `<link rel=\"canonical\" href=\"${env.websiteDomain}/istanbul-airport-to-beyoglu\" />`,
                `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/istanbul-airport-to-beyoglu\" />`,
                `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/istanbul-airport-to-beyoglu\" />`,
                `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/istanbul-airport-to-beyoglu\" />`,
                `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/istanbul-airport-to-beyoglu\" />`,
                `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/istanbul-airport-to-beyoglu\" />`,
                `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/istanbul-airport-to-beyoglu\" />`,
                `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/istanbul-airport-to-beyoglu\" />`,
                "<meta property=\"og:type\" content=\"website\">",
                "<meta property=\"og:title\" content=\"Taxi del Aeropuerto de Estambul a Beyoğlu | Traslados Rápidos y Confiables\">",
                "<meta property=\"og:description\" content=\"¿Necesitas un taxi desde el Aeropuerto de Estambul a Beyoğlu? APL Transfers ofrece traslados privados con precio fijo, servicio 24/7 y recepción gratuita. Sin cargos adicionales por retrasos de vuelo. ¡Reserva ahora!\">",
                `<meta property=\"og:url\" content=\"${env.websiteDomain}/es/istanbul-airport-to-beyoglu\">`,
                `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/popularDestinations/istanbul/beyoglu.webp\">`,
                "<meta name=\"twitter:card\" content=\"summary_large_image\">",
                "<meta name=\"twitter:title\" content=\"Taxi del Aeropuerto de Estambul a Beyoğlu | Traslados Rápidos y Confiables\">",
                "<meta name=\"twitter:description\" content=\"Reserva tu traslado desde el Aeropuerto de Estambul a Beyoğlu con APL Transfers. Servicio confiable, precios accesibles y disponible 24/7 con cancelación gratuita. Sin cargos adicionales por retrasos de vuelo.\">",
                `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/popularDestinations/istanbul/beyoglu.webp\">`
            ]
            ,
            it: [
                `<link rel=\"canonical\" href=\"${env.websiteDomain}/istanbul-airport-to-beyoglu\" />`,
                `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/istanbul-airport-to-beyoglu\" />`,
                `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/istanbul-airport-to-beyoglu\" />`,
                `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/istanbul-airport-to-beyoglu\" />`,
                `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/istanbul-airport-to-beyoglu\" />`,
                `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/istanbul-airport-to-beyoglu\" />`,
                `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/istanbul-airport-to-beyoglu\" />`,
                `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/istanbul-airport-to-beyoglu\" />`,
                "<meta property=\"og:type\" content=\"website\">",
                "<meta property=\"og:title\" content=\"Taxi dall'Aeroporto di Istanbul a Beyoğlu | Trasferimenti Veloci e Affidabili\">",
                "<meta property=\"og:description\" content=\"Hai bisogno di un taxi dall'Aeroporto di Istanbul a Beyoğlu? APL Transfers offre trasferimenti privati a prezzo fisso, servizio 24/7 e accoglienza gratuita. Nessun costo aggiuntivo per ritardi dei voli. Prenota ora!\">",
                `<meta property=\"og:url\" content=\"${env.websiteDomain}/it/istanbul-airport-to-beyoglu\">`,
                `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/popularDestinations/istanbul/beyoglu.webp\">`,
                "<meta name=\"twitter:card\" content=\"summary_large_image\">",
                "<meta name=\"twitter:title\" content=\"Taxi dall'Aeroporto di Istanbul a Beyoğlu | Trasferimenti Veloci e Affidabili\">",
                "<meta name=\"twitter:description\" content=\"Prenota il tuo trasferimento dall'Aeroporto di Istanbul a Beyoğlu con APL Transfers. Servizio affidabile, prezzi convenienti e disponibilità 24/7 con cancellazione gratuita. Nessun costo aggiuntivo per ritardi dei voli.\">",
                `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/popularDestinations/istanbul/beyoglu.webp\">`
            ]
            ,
            ru: [
                `<link rel=\"canonical\" href=\"${env.websiteDomain}/istanbul-airport-to-beyoglu\" />`,
                `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/istanbul-airport-to-beyoglu\" />`,
                `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/istanbul-airport-to-beyoglu\" />`,
                `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/istanbul-airport-to-beyoglu\" />`,
                `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/istanbul-airport-to-beyoglu\" />`,
                `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/istanbul-airport-to-beyoglu\" />`,
                `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/istanbul-airport-to-beyoglu\" />`,
                `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/istanbul-airport-to-beyoglu\" />`,
                "<meta property=\"og:type\" content=\"website\">",
                "<meta property=\"og:title\" content=\"Такси из аэропорта Стамбула в Бейоглу | Быстрые и Надежные Трансферы\">",
                "<meta property=\"og:description\" content=\"Нужен такси из аэропорта Стамбула в Бейоглу? APL Transfers предлагает частные трансферы по фиксированной цене, круглосуточное обслуживание и бесплатную встречу. Без дополнительных платежей за задержку рейса. Забронируйте сейчас!\">",
                `<meta property=\"og:url\" content=\"${env.websiteDomain}/ru/istanbul-airport-to-beyoglu\">`,
                `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/popularDestinations/istanbul/beyoglu.webp\">`,
                "<meta name=\"twitter:card\" content=\"summary_large_image\">",
                "<meta name=\"twitter:title\" content=\"Такси из аэропорта Стамбула в Бейоглу | Быстрые и Надежные Трансферы\">",
                "<meta name=\"twitter:description\" content=\"Забронируйте трансфер из аэропорта Стамбула в Бейоглу с APL Transfers. Надежное обслуживание, доступные цены и круглосуточная поддержка с бесплатной отменой. Без дополнительных платежей за задержку рейса.\">",
                `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/popularDestinations/istanbul/beyoglu.webp\">`
            ]
            ,
            zh: [
                `<link rel=\"canonical\" href=\"${env.websiteDomain}/istanbul-airport-to-beyoglu\" />`,
                `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/istanbul-airport-to-beyoglu\" />`,
                `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/istanbul-airport-to-beyoglu\" />`,
                `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/istanbul-airport-to-beyoglu\" />`,
                `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/istanbul-airport-to-beyoglu\" />`,
                `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/istanbul-airport-to-beyoglu\" />`,
                `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/istanbul-airport-to-beyoglu\" />`,
                `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/istanbul-airport-to-beyoglu\" />`,
                "<meta property=\"og:type\" content=\"website\">",
                "<meta property=\"og:title\" content=\"伊斯坦布尔机场至贝尤格鲁出租车 | 快速可靠的接送服务\">",
                "<meta property=\"og:description\" content=\"需要从伊斯坦布尔机场前往贝尤格鲁的出租车？APL Transfers 提供固定价格的 24/7 私人接送服务，并提供免费接机。航班延误无额外费用。立即预订！\">",
                `<meta property=\"og:url\" content=\"${env.websiteDomain}/zh/istanbul-airport-to-beyoglu\">`,
                `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/popularDestinations/istanbul/beyoglu.webp\">`,
                "<meta name=\"twitter:card\" content=\"summary_large_image\">",
                "<meta name=\"twitter:title\" content=\"伊斯坦布尔机场至贝尤格鲁出租车 | 快速可靠的接送服务\">",
                "<meta name=\"twitter:description\" content=\"使用 APL Transfers 预订从伊斯坦布尔机场到贝尤格鲁的接送服务。可靠的服务，实惠的价格，24/7 全天候可用，免费取消。航班延误无额外费用。\">",
                `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/popularDestinations/istanbul/beyoglu.webp\">`
            ]
            ,
        },

        "/istanbul-airport-to-kadikoy": {
            en: [
                `<link rel=\"canonical\" href=\"${env.websiteDomain}/istanbul-airport-to-kadikoy\" />`,
                `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/istanbul-airport-to-kadikoy\" />`,
                `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/istanbul-airport-to-kadikoy\" />`,
                `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/istanbul-airport-to-kadikoy\" />`,
                `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/istanbul-airport-to-kadikoy\" />`,
                `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/istanbul-airport-to-kadikoy\" />`,
                `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/istanbul-airport-to-kadikoy\" />`,
                `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}"/istanbul-airport-to-kadikoy\" />`,
                "<meta property=\"og:type\" content=\"website\">",
                "<meta property=\"og:title\" content=\"Istanbul Airport to Kadıköy Taxi | Fast & Reliable Transfers\">",
                "<meta property=\"og:description\" content=\"Need a taxi from Istanbul Airport to Kadıköy? APL Transfers offers fixed-price, 24/7 private transfers with meet & greet service. No extra charge for flight delays. Book now!\">",
                `<meta property=\"og:url\" content=\"${env.websiteDomain}/istanbul-airport-to-kadikoy\">`,
                `<meta property=\"og:image\"content=\"${env.websiteDomain}/images/popularDestinations/istanbul/kadikoy.webp\">`,
                "<meta name=\"twitter:card\" content=\"summary_large_image\">",
                "<meta name=\"twitter:title\" content=\"Istanbul Airport to Kadıköy Taxi | Fast & Reliable Transfers\">",
                "<meta name=\"twitter:description\" content=\"Book your Istanbul Airport to Kadıköy transfer with APL Transfers. Reliable, affordable, and available 24/7 with free cancellation. No extra charge for flight delays.\">",
                `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/popularDestinations/istanbul/kadikoy.webp\">`,
            ],
            tr: [
                `<link rel=\"canonical\" href=\"${env.websiteDomain}/istanbul-airport-to-kadikoy\" />`,
                `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/istanbul-airport-to-kadikoy\" />`,
                `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/istanbul-airport-to-kadikoy\" />`,
                `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/istanbul-airport-to-kadikoy\" />`,
                `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/istanbul-airport-to-kadikoy\" />`,
                `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/istanbul-airport-to-kadikoy\" />`,
                `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/istanbul-airport-to-kadikoy\" />`,
                `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/istanbul-airport-to-kadikoy\" />`,
                "<meta property=\"og:type\" content=\"website\">",
                "<meta property=\"og:title\" content=\"İstanbul Havalimanı Kadıköy Taksi | Hızlı ve Güvenilir Transferler\">",
                "<meta property=\"og:description\" content=\"İstanbul Havalimanı'ndan Kadıköy'e taksi mi lazım? APL Transfers sabit fiyatlı, 7/24 özel transfer hizmeti sunar. Ücretsiz karşılama, uçuş gecikmelerinde ek ücret yok. Hemen rezervasyon yapın!\">",
                `<meta property=\"og:url\" content=\"${env.websiteDomain}/istanbul-airport-to-kadikoy\">`,
                `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/popularDestinations/istanbul/kadikoy.webp\">`,
                "<meta name=\"twitter:card\" content=\"summary_large_image\">",
                "<meta name=\"twitter:title\" content=\"İstanbul Havalimanı Kadıköy Taksi | Hızlı ve Güvenilir Transferler\">",
                "<meta name=\"twitter:description\" content=\"İstanbul Havalimanı'ndan Kadıköy'e transferinizi APL Transfers ile ayırtın. Güvenilir, uygun fiyatlı ve 7/24 hizmet. Ücretsiz iptal ve uçuş gecikmelerinde ek ücret yok.\">",
                `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/popularDestinations/istanbul/kadikoy.webp\">`
            ]
            ,
            ar: [
                `<link rel=\"canonical\" href=\"${env.websiteDomain}/istanbul-airport-to-kadikoy\" />`,
                `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/istanbul-airport-to-kadikoy\" />`,
                `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/istanbul-airport-to-kadikoy\" />`,
                `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/istanbul-airport-to-kadikoy\" />`,
                `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/istanbul-airport-to-kadikoy\" />`,
                `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/istanbul-airport-to-kadikoy\" />`,
                `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/istanbul-airport-to-kadikoy\" />`,
                `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/istanbul-airport-to-kadikoy\" />`,
                "<meta property=\"og:type\" content=\"website\">",
                "<meta property=\"og:title\" content=\"تاكسي من مطار إسطنبول إلى كاديكوي | انتقالات سريعة وموثوقة\">",
                "<meta property=\"og:description\" content=\"هل تحتاج إلى تاكسي من مطار إسطنبول إلى كاديكوي؟ توفر APL Transfers خدمة نقل خاصة بأسعار ثابتة على مدار 24/7 مع استقبال مجاني. لا توجد رسوم إضافية على تأخير الرحلات. احجز الآن!\">",
                `<meta property=\"og:url\" content=\"${env.websiteDomain}/ar/istanbul-airport-to-kadikoy\">`,
                `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/popularDestinations/istanbul/kadikoy.webp\">`,
                "<meta name=\"twitter:card\" content=\"summary_large_image\">",
                "<meta name=\"twitter:title\" content=\"تاكسي من مطار إسطنبول إلى كاديكوي | انتقالات سريعة وموثوقة\">",
                "<meta name=\"twitter:description\" content=\"احجز خدمة النقل من مطار إسطنبول إلى كاديكوي مع APL Transfers. خدمة موثوقة وبأسعار مناسبة ومتاحة على مدار 24/7 مع إلغاء مجاني. لا توجد رسوم إضافية على تأخير الرحلات.\">",
                `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/popularDestinations/istanbul/kadikoy.webp\">`
            ]
            ,
            es: [
                `<link rel=\"canonical\" href=\"${env.websiteDomain}/istanbul-airport-to-kadikoy\" />`,
                `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/istanbul-airport-to-kadikoy\" />`,
                `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/istanbul-airport-to-kadikoy\" />`,
                `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/istanbul-airport-to-kadikoy\" />`,
                `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/istanbul-airport-to-kadikoy\" />`,
                `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/istanbul-airport-to-kadikoy\" />`,
                `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/istanbul-airport-to-kadikoy\" />`,
                `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/istanbul-airport-to-kadikoy\" />`,
                "<meta property=\"og:type\" content=\"website\">",
                "<meta property=\"og:title\" content=\"Taxi del Aeropuerto de Estambul a Kadıköy | Traslados Rápidos y Confiables\">",
                "<meta property=\"og:description\" content=\"¿Necesitas un taxi desde el Aeropuerto de Estambul a Kadıköy? APL Transfers ofrece traslados privados con precio fijo, servicio 24/7 y recepción gratuita. Sin cargos adicionales por retrasos de vuelo. ¡Reserva ahora!\">",
                `<meta property=\"og:url\" content=\"${env.websiteDomain}/es/istanbul-airport-to-kadikoy\">`,
                `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/popularDestinations/istanbul/kadikoy.webp\">`,
                "<meta name=\"twitter:card\" content=\"summary_large_image\">",
                "<meta name=\"twitter:title\" content=\"Taxi del Aeropuerto de Estambul a Kadıköy | Traslados Rápidos y Confiables\">",
                "<meta name=\"twitter:description\" content=\"Reserva tu traslado desde el Aeropuerto de Estambul a Kadıköy con APL Transfers. Servicio confiable, precios accesibles y disponible 24/7 con cancelación gratuita. Sin cargos adicionales por retrasos de vuelo.\">",
                `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/popularDestinations/istanbul/kadikoy.webp\">`
            ]
            ,
            it: [
                `<link rel=\"canonical\" href=\"${env.websiteDomain}/istanbul-airport-to-kadikoy\" />`,
                `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/istanbul-airport-to-kadikoy\" />`,
                `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/istanbul-airport-to-kadikoy\" />`,
                `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/istanbul-airport-to-kadikoy\" />`,
                `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/istanbul-airport-to-kadikoy\" />`,
                `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/istanbul-airport-to-kadikoy\" />`,
                `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/istanbul-airport-to-kadikoy\" />`,
                `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/istanbul-airport-to-kadikoy\" />`,
                "<meta property=\"og:type\" content=\"website\">",
                "<meta property=\"og:title\" content=\"Taxi Aeroporto Istanbul Kadıköy | Trasferimenti Veloci e Affidabili\">",
                "<meta property=\"og:description\" content=\"Hai bisogno di un taxi dall'Aeroporto di Istanbul a Kadıköy? APL Transfers offre trasferimenti privati a prezzo fisso, servizio 24/7 e accoglienza gratuita. Nessun costo aggiuntivo per ritardi dei voli. Prenota ora!\">",
                `<meta property=\"og:url\" content=\"${env.websiteDomain}/it/istanbul-airport-to-kadikoy\">`,
                `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/popularDestinations/istanbul/kadikoy.webp\">`,
                "<meta name=\"twitter:card\" content=\"summary_large_image\">",
                "<meta name=\"twitter:title\" content=\"Taxi Aeroporto Istanbul Kadıköy | Trasferimenti Veloci e Affidabili\">",
                "<meta name=\"twitter:description\" content=\"Prenota il tuo trasferimento dall'Aeroporto di Istanbul a Kadıköy con APL Transfers. Servizio affidabile, prezzi convenienti e disponibilità 24/7 con cancellazione gratuita. Nessun costo aggiuntivo per ritardi dei voli.\">",
                `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/popularDestinations/istanbul/kadikoy.webp\">`
            ]
            ,
            ru: [
                `<link rel=\"canonical\" href=\"${env.websiteDomain}/istanbul-airport-to-kadikoy\" />`,
                `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/istanbul-airport-to-kadikoy\" />`,
                `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/istanbul-airport-to-kadikoy\" />`,
                `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/istanbul-airport-to-kadikoy\" />`,
                `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/istanbul-airport-to-kadikoy\" />`,
                `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/istanbul-airport-to-kadikoy\" />`,
                `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/istanbul-airport-to-kadikoy\" />`,
                `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/istanbul-airport-to-kadikoy\" />`,
                "<meta property=\"og:type\" content=\"website\">",
                "<meta property=\"og:title\" content=\"Такси из аэропорта Стамбула в Кадыкёй | Быстрые и Надежные Трансферы\">",
                "<meta property=\"og:description\" content=\"Нужен такси из аэропорта Стамбула в Кадыкёй? APL Transfers предлагает частные трансферы по фиксированной цене, круглосуточное обслуживание и бесплатную встречу. Без дополнительных платежей за задержку рейса. Забронируйте сейчас!\">",
                `<meta property=\"og:url\" content=\"${env.websiteDomain}/ru/istanbul-airport-to-kadikoy\">`,
                `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/popularDestinations/istanbul/kadikoy.webp\">`,
                "<meta name=\"twitter:card\" content=\"summary_large_image\">",
                "<meta name=\"twitter:title\" content=\"Такси из аэропорта Стамбула в Кадыкёй | Быстрые и Надежные Трансферы\">",
                "<meta name=\"twitter:description\" content=\"Забронируйте трансфер из аэропорта Стамбула в Кадыкёй с APL Transfers. Надежное обслуживание, доступные цены и круглосуточная поддержка с бесплатной отменой. Без дополнительных платежей за задержку рейса.\">",
                `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/popularDestinations/istanbul/kadikoy.webp\">`
            ]
            ,
            zh: [
                `<link rel=\"canonical\" href=\"${env.websiteDomain}/istanbul-airport-to-kadikoy\" />`,
                `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/istanbul-airport-to-kadikoy\" />`,
                `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/istanbul-airport-to-kadikoy\" />`,
                `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/istanbul-airport-to-kadikoy\" />`,
                `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/istanbul-airport-to-kadikoy\" />`,
                `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/istanbul-airport-to-kadikoy\" />`,
                `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/istanbul-airport-to-kadikoy\" />`,
                `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/istanbul-airport-to-kadikoy\" />`,
                "<meta property=\"og:type\" content=\"website\">",
                "<meta property=\"og:title\" content=\"伊斯坦布尔机场至卡德柯伊出租车 | 快速可靠的接送服务\">",
                "<meta property=\"og:description\" content=\"需要从伊斯坦布尔机场前往卡德柯伊的出租车？APL Transfers 提供固定价格的 24/7 私人接送服务，并提供免费接机。航班延误无额外费用。立即预订！\">",
                `<meta property=\"og:url\" content=\"${env.websiteDomain}/zh/istanbul-airport-to-kadikoy\">`,
                `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/popularDestinations/istanbul/kadikoy.webp\">`,
                "<meta name=\"twitter:card\" content=\"summary_large_image\">",
                "<meta name=\"twitter:title\" content=\"伊斯坦布尔机场至卡德柯伊出租车 | 快速可靠的接送服务\">",
                "<meta name=\"twitter:description\" content=\"使用 APL Transfers 预订从伊斯坦布尔机场到卡德柯伊的接送服务。可靠的服务，实惠的价格，24/7 全天候可用，免费取消。航班延误无额外费用。\">",
                `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/popularDestinations/istanbul/kadikoy.webp\">`
            ]
            ,
        },

        "/istanbul-airport-to-besiktas": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        },
        "/istanbul-airport-to-nisantasi": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        },
        "/istanbul-airport-to-eminonu": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        },
        "/istanbul-airport-to-uskudar-asian-side": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        },
        "/istanbul-airport-to-levent-maslak": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        },
        "/istanbul-airport-to-ortakoy": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        },
        "/istanbul-airport-to-sapanca": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        },
        "/istanbul-airport-to-bursa": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        },
        "/istanbul-airport-to-yalova": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        },
        "/istanbul-airport-to-kocaeli-izmit": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        },
        "/istanbul-airport-to-sile-and-agva": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        },
        "/istanbul-airport-to-edirne": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        },
        "/istanbul-airport-to-tekirdag": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        },
        "/istanbul-airport-to-canakkale": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        }
    },
    SAW: {},
    AYT: {},
    DLM: {},
    BJY: {},
    ADB: {},
    GZP: {}
})



/**
 * Retrieves the schema for a single popular destination based on the provided parameters.
 *
 * @param {Object} env - The environment configuration object containing website domain.
 * @param {string} hasTaxiDeals - The airport code or identifier for taxi deals.
 * @param {string} pathname - The specific route or destination path.
 * @param {string} language - The language code for localized schema content.
 * @returns {Object|null} The schema object for the specified destination, or null if not found.
 */
export const getSinglePopularDestinationSchemaByPathname = (env, hasTaxiDeals, pathname, language) => {
    const popularDestinationSchema = {
        IST: {
            "/istanbul-airport-to-taksim": {
                en: {
                    "LocalBusiness": {
                        "@context": "https://schema.org/",
                        "@type": "LocalBusiness",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/taksim.webp`,
                        "name": "APL Transfers",
                        "@id": "33",
                        "url": `${env.websiteDomain}/istanbul-airport-to-taksim`,
                        "telephone": "+90 212 123 4567",
                        "priceRange": "35",
                        "address": {
                            "@type": "PostalAddress",
                            "postalCode": "34435",
                            "streetAddress": "Taksim Square, Beyoglu",
                            "addressCountry": "TR",
                            "addressLocality": "Istanbul"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 41.0082,
                            "longitude": 28.9784
                        },
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                            ],
                            "opens": "00:00",
                            "closes": "23:59"
                        },
                        "sameAs": [
                            "https://www.facebook.com/APLTransfers",
                            "https://twitter.com/APLTransfers",
                            "https://www.instagram.com/APLTransfers"
                        ]
                    },
                    "Product": {
                        "@context": "https://schema.org/",
                        "@type": "Product",
                        "name": "Istanbul Airport to Taksim Taxi Transfer",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/taksim.webp`,
                        "description": "Book a premium taxi transfer from Istanbul Airport to Taksim with APL Transfers. Fixed price, free meet & greet, and 24/7 service.",
                        "brand": "APL Transfers",
                        "sku": "IST-TAK-001",
                        "offers": {
                            "@type": "Offer",
                            "url": `${env.websiteDomain}/istanbul-airport-to-taksim`,
                            "priceCurrency": "EUR",
                            "price": "35.00",
                            "priceValidUntil": "2025-12-31",
                            "availability": "https://schema.org/InStock",
                            "itemCondition": "https://schema.org/NewCondition"
                        },
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.9",
                            "bestRating": "5",
                            "worstRating": "1",
                            "ratingCount": 2145,
                            "reviewCount": 2145
                        },
                        "review": {
                            "@type": "Review",
                            "name": "John Smith",
                            "reviewBody": "Great service! My driver was waiting at Istanbul Airport, very professional and friendly. The car was clean and comfortable. Highly recommended!",
                            "itemReviewed": {
                                "@type": "Thing",
                                "name": "Istanbul Airport to Taksim Taxi Transfer"
                            },
                            "reviewRating": {
                                "@type": "Rating",
                                "ratingValue": "5",
                                "bestRating": "5",
                                "worstRating": "1"
                            },
                            "datePublished": "2025-03-15",
                            "author": {
                                "@type": "Person",
                                "name": "John Smith"
                            },
                            "publisher": {
                                "@type": "Organization",
                                "name": "Trustpilot"
                            }
                        }
                    },
                    "FAQPage": {
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "Where will my driver meet me at Istanbul Airport?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Your driver will meet you by our APL Transfers office in the Arrival Hall at Istanbul Airport, holding a name board for easy identification."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Are the taxi prices from Istanbul Airport to Taksim fixed?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, all our taxi prices are fixed with no hidden charges, providing transparent and competitive rates."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you offer free cancellations for Istanbul Airport to Taksim transfers?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, you can cancel your booking free of charge up to 24 hours before arrival."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What payment methods do you accept for Istanbul Airport transfers?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "We accept payments in Euro, GBP, US Dollar, and Turkish Lira via secure online payment."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you provide child seats for Istanbul Airport to Taksim taxi transfers?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, we offer free child seats for 8 and 9-seater private vehicles to ensure safety for families."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How long does a taxi from Istanbul Airport to Taksim take?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "The journey from Istanbul Airport to Taksim typically takes 40-50 minutes, depending on traffic conditions."
                                }
                            }
                        ]
                    }
                },
                tr: {
                    "LocalBusiness": {
                        "@context": "https://schema.org/",
                        "@type": "LocalBusiness",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/taksim.webp`,
                        "name": "APL Transfers",
                        "@id": "33",
                        "url": `${env.websiteDomain}/tr/istanbul-airport-to-taksim`,
                        "telephone": "+90 212 123 4567",
                        "priceRange": "35",
                        "address": {
                            "@type": "PostalAddress",
                            "postalCode": "34435",
                            "streetAddress": "Taksim Square, Beyoglu",
                            "addressCountry": "TR",
                            "addressLocality": "Istanbul"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 41.0082,
                            "longitude": 28.9784
                        },
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                            ],
                            "opens": "00:00",
                            "closes": "23:59"
                        },
                        "sameAs": [
                            "https://www.facebook.com/APLTransfers",
                            "https://twitter.com/APLTransfers",
                            "https://www.instagram.com/APLTransfers"
                        ]
                    },
                    "Product": {
                        "@context": "https://schema.org/",
                        "@type": "Product",
                        "name": "İstanbul Havalimanı Taksim Taksi Transferi",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/taksim.webp`,
                        "description": "İstanbul Havalimanından Taksime premium taksi transferinizi APL Transfers ile rezerve edin. Sabit fiyat, ücretsiz karşılama ve 7/24 hizmet.",
                        "brand": "APL Transfers",
                        "sku": "IST-TAK-001",
                        "offers": {
                            "@type": "Offer",
                            "url": `${env.websiteDomain}/tr/istanbul-airport-to-taksim`,
                            "priceCurrency": "EUR",
                            "price": "35.00",
                            "priceValidUntil": "2025-12-31",
                            "availability": "https://schema.org/InStock",
                            "itemCondition": "https://schema.org/NewCondition"
                        },
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.9",
                            "bestRating": "5",
                            "worstRating": "1",
                            "ratingCount": 2145,
                            "reviewCount": 2145
                        },
                        "review": {
                            "@type": "Review",
                            "name": "Harika Hizmet!",
                            "reviewBody": "Hizmet harikaydı! Şoförüm İstanbul Havalimanında beni bekliyordu, çok profesyonel ve güler yüzlüydü. Araç temiz ve konforluydu. Kesinlikle tavsiye ederim!",
                            "itemReviewed": {
                                "@type": "Thing",
                                "name": "İstanbul Havalimanı Taksim Taksi Transferi"
                            },
                            "reviewRating": {
                                "@type": "Rating",
                                "ratingValue": "5",
                                "bestRating": "5",
                                "worstRating": "1"
                            },
                            "datePublished": "2025-03-15",
                            "author": {
                                "@type": "Person",
                                "name": "John Smith"
                            },
                            "publisher": {
                                "@type": "Organization",
                                "name": "Trustpilot"
                            }
                        }
                    }
                    ,
                    "FAQPage": {
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "Şoförüm beni İstanbul Havalimanında nerede karşılayacak?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Şoförünüz sizi İstanbul Havalimanındaki APL Transfers ofisimizin önünde, isminizin yazılı olduğu bir tabela ile karşılayacaktır."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "İstanbul Havalimanı Taksim taksi ücretleri sabit mi?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Evet, tüm taksi fiyatlarımız sabittir ve gizli ücretler içermez. Şeffaf ve rekabetçi fiyatlandırma sunuyoruz."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "İstanbul Havalimanı Taksim transferleri için ücretsiz iptal imkanı var mı?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Evet, varışınızdan 24 saat öncesine kadar ücretsiz iptal yapabilirsiniz."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "İstanbul Havalimanı transferleri için hangi ödeme yöntemlerini kabul ediyorsunuz?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Euro, GBP, Amerikan Doları ve Türk Lirası cinsinden güvenli online ödeme kabul ediyoruz."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "İstanbul Havalimanı Taksim taksi transferleri için çocuk koltuğu sağlıyor musunuz?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Evet, ailelerin güvenliği için 8 ve 9 kişilik özel araçlarımızda ücretsiz çocuk koltuğu sunuyoruz."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "İstanbul Havalimanından Taksime taksiyle ulaşım ne kadar sürer?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "İstanbul Havalimanından Taksime yolculuk, trafik durumuna bağlı olarak genellikle 40-50 dakika sürer."
                                }
                            }
                        ]
                    }
                },
                ar: {
                    "LocalBusiness": {
                        "@context": "https://schema.org/",
                        "@type": "LocalBusiness",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/taksim.webp`,
                        "name": "APL Transfers",
                        "@id": "33",
                        "url": `${env.websiteDomain}/ar/istanbul-airport-to-taksim`,
                        "telephone": "+90 212 123 4567",
                        "priceRange": "35",
                        "address": {
                            "@type": "PostalAddress",
                            "postalCode": "34435",
                            "streetAddress": "Taksim Square, Beyoglu",
                            "addressCountry": "TR",
                            "addressLocality": "Istanbul"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 41.0082,
                            "longitude": 28.9784
                        },
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                            ],
                            "opens": "00:00",
                            "closes": "23:59"
                        },
                        "sameAs": [
                            "https://www.facebook.com/APLTransfers",
                            "https://twitter.com/APLTransfers",
                            "https://www.instagram.com/APLTransfers"
                        ]
                    },
                    "Product": {
                        "@context": "https://schema.org/",
                        "@type": "Product",
                        "name": "Трансфер на такси из аэропорта Стамбула в Таксим",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/taksim.webp`,
                        "description": "Забронируйте премиум трансфер на такси из аэропорта Стамбула в Таксим с APL Transfers. Фиксированная цена, бесплатная встреча и круглосуточное обслуживание.",
                        "brand": "APL Transfers",
                        "sku": "IST-TAK-001",
                        "offers": {
                            "@type": "Offer",
                            "url": `${env.websiteDomain}/ar/istanbul-airport-to-taksim`,
                            "priceCurrency": "EUR",
                            "price": "35.00",
                            "priceValidUntil": "2025-12-31",
                            "availability": "https://schema.org/InStock",
                            "itemCondition": "https://schema.org/NewCondition"
                        },
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.9",
                            "bestRating": "5",
                            "worstRating": "1",
                            "ratingCount": 2145,
                            "reviewCount": 2145
                        },
                        "review": {
                            "@type": "Review",
                            "name": "Отличный сервис!",
                            "reviewBody": "Сервис был великолепным! Водитель ждал меня в аэропорту Стамбула, был очень профессиональным и дружелюбным. Машина была чистая и комфортная. Определенно рекомендую!",
                            "itemReviewed": {
                                "@type": "Thing",
                                "name": "Трансфер на такси из аэропорта Стамбула в Таксим"
                            },
                            "reviewRating": {
                                "@type": "Rating",
                                "ratingValue": "5",
                                "bestRating": "5",
                                "worstRating": "1"
                            },
                            "datePublished": "2025-03-15",
                            "author": {
                                "@type": "Person",
                                "name": "John Smith"
                            },
                            "publisher": {
                                "@type": "Organization",
                                "name": "Trustpilot"
                            }
                        }
                    },
                    "FAQPage": {
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "أين سيقابلني السائق في مطار إسطنبول؟",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "سائقك سيقابلك عند مكتب APL Transfers في صالة الوصول بمطار إسطنبول، وهو يحمل لوحة باسمك لتسهيل التعرف عليه."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "هل أسعار التاكسي من مطار إسطنبول إلى تقسيم ثابتة؟",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "نعم، جميع أسعار التاكسي لدينا ثابتة ولا توجد رسوم خفية، حيث نقدم أسعارًا شفافة وتنافسية."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "هل يمكنني إلغاء حجز التاكسي من مطار إسطنبول إلى تقسيم مجانًا؟",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "نعم، يمكنك إلغاء الحجز مجانًا حتى 24 ساعة قبل موعد الوصول."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "ما هي طرق الدفع التي تقبلونها لانتقالات مطار إسطنبول؟",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "نقبل المدفوعات باليورو، الجنيه الإسترليني، الدولار الأمريكي، والليرة التركية عبر الدفع الإلكتروني الآمن."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "هل توفرون مقاعد أطفال لرحلات التاكسي من مطار إسطنبول إلى تقسيم؟",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "نعم، نوفر مقاعد أطفال مجانية للمركبات الخاصة ذات 8 و9 مقاعد لضمان سلامة العائلات."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "كم تستغرق رحلة التاكسي من مطار إسطنبول إلى تقسيم؟",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "تستغرق الرحلة من مطار إسطنبول إلى تقسيم عادة 40-50 دقيقة حسب حالة المرور."
                                }
                            }
                        ]
                    }
                },
                es: {
                    "LocalBusiness": {
                        "@context": "https://schema.org/",
                        "@type": "LocalBusiness",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/taksim.webp`,
                        "name": "APL Transfers",
                        "@id": "33",
                        "url": `${env.websiteDomain}/es/istanbul-airport-to-taksim`,
                        "telephone": "+90 212 123 4567",
                        "priceRange": "35",
                        "address": {
                            "@type": "PostalAddress",
                            "postalCode": "34435",
                            "streetAddress": "Taksim Square, Beyoglu",
                            "addressCountry": "TR",
                            "addressLocality": "Istanbul"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 41.0082,
                            "longitude": 28.9784
                        },
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                            ],
                            "opens": "00:00",
                            "closes": "23:59"
                        },
                        "sameAs": [
                            "https://www.facebook.com/APLTransfers",
                            "https://twitter.com/APLTransfers",
                            "https://www.instagram.com/APLTransfers"
                        ]
                    },
                    "Product": {
                        "@context": "https://schema.org/",
                        "@type": "Product",
                        "name": "Traslado en taxi desde el Aeropuerto de Estambul a Taksim",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/taksim.webp`,
                        "description": "Reserva un traslado en taxi premium desde el Aeropuerto de Estambul a Taksim con APL Transfers. Precio fijo, bienvenida gratuita y servicio 24/7.",
                        "brand": "APL Transfers",
                        "sku": "IST-TAK-001",
                        "offers": {
                            "@type": "Offer",
                            "url": `${env.websiteDomain}/es/istanbul-airport-to-taksim`,
                            "priceCurrency": "EUR",
                            "price": "35.00",
                            "priceValidUntil": "2025-12-31",
                            "availability": "https://schema.org/InStock",
                            "itemCondition": "https://schema.org/NewCondition"
                        },
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.9",
                            "bestRating": "5",
                            "worstRating": "1",
                            "ratingCount": 2145,
                            "reviewCount": 2145
                        },
                        "review": {
                            "@type": "Review",
                            "name": "¡Excelente servicio!",
                            "reviewBody": "¡El servicio fue increíble! Mi conductor me estaba esperando en el Aeropuerto de Estambul, muy profesional y amable. El coche estaba limpio y era cómodo. ¡Totalmente recomendado!",
                            "itemReviewed": {
                                "@type": "Thing",
                                "name": "Traslado en taxi desde el Aeropuerto de Estambul a Taksim"
                            },
                            "reviewRating": {
                                "@type": "Rating",
                                "ratingValue": "5",
                                "bestRating": "5",
                                "worstRating": "1"
                            },
                            "datePublished": "2025-03-15",
                            "author": {
                                "@type": "Person",
                                "name": "John Smith"
                            },
                            "publisher": {
                                "@type": "Organization",
                                "name": "Trustpilot"
                            }
                        }
                    },
                    "FAQPage": {
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "¿Dónde me encontrará mi conductor en el Aeropuerto de Estambul?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Su conductor lo esperará en nuestra oficina de APL Transfers en la sala de llegadas del Aeropuerto de Estambul, sosteniendo un cartel con su nombre para facilitar la identificación."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "¿Son fijas las tarifas de taxi del Aeropuerto de Estambul a Taksim?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Sí, todas nuestras tarifas de taxi son fijas y no hay cargos ocultos. Ofrecemos precios transparentes y competitivos."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "¿Ofrecen cancelaciones gratuitas para los traslados del Aeropuerto de Estambul a Taksim?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Sí, puede cancelar su reserva de forma gratuita hasta 24 horas antes de su llegada."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "¿Qué métodos de pago aceptan para los traslados desde el Aeropuerto de Estambul?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Aceptamos pagos en euros, libras esterlinas, dólares estadounidenses y liras turcas a través de pago seguro en línea."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "¿Proporcionan sillas para niños en los traslados en taxi del Aeropuerto de Estambul a Taksim?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Sí, ofrecemos sillas para niños gratuitas en vehículos privados de 8 y 9 plazas para garantizar la seguridad de las familias."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "¿Cuánto tarda un taxi desde el Aeropuerto de Estambul a Taksim?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "El viaje desde el Aeropuerto de Estambul a Taksim suele durar entre 40 y 50 minutos, dependiendo del tráfico."
                                }
                            }
                        ]
                    }
                },
                it: {
                    "LocalBusiness": {
                        "@context": "https://schema.org/",
                        "@type": "LocalBusiness",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/taksim.webp`,
                        "name": "APL Transfers",
                        "@id": "33",
                        "url": `${env.websiteDomain}/it/istanbul-airport-to-taksim`,
                        "telephone": "+90 212 123 4567",
                        "priceRange": "35",
                        "address": {
                            "@type": "PostalAddress",
                            "postalCode": "34435",
                            "streetAddress": "Taksim Square, Beyoglu",
                            "addressCountry": "TR",
                            "addressLocality": "Istanbul"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 41.0082,
                            "longitude": 28.9784
                        },
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                            ],
                            "opens": "00:00",
                            "closes": "23:59"
                        },
                        "sameAs": [
                            "https://www.facebook.com/APLTransfers",
                            "https://twitter.com/APLTransfers",
                            "https://www.instagram.com/APLTransfers"
                        ]
                    },
                    "Product": {
                        "@context": "https://schema.org/",
                        "@type": "Product",
                        "name": "Trasferimento in taxi dall Aeroporto di Istanbul a Taksim",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/taksim.webp`,
                        "description": "Prenota un trasferimento in taxi premium dall Aeroporto di Istanbul a Taksim con APL Transfers. Prezzo fisso, accoglienza gratuita e servizio 24/7.",
                        "brand": "APL Transfers",
                        "sku": "IST-TAK-001",
                        "offers": {
                            "@type": "Offer",
                            "url": `${env.websiteDomain}/it/istanbul-airport-to-taksim`,
                            "priceCurrency": "EUR",
                            "price": "35.00",
                            "priceValidUntil": "2025-12-31",
                            "availability": "https://schema.org/InStock",
                            "itemCondition": "https://schema.org/NewCondition"
                        },
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.9",
                            "bestRating": "5",
                            "worstRating": "1",
                            "ratingCount": 2145,
                            "reviewCount": 2145
                        },
                        "review": {
                            "@type": "Review",
                            "name": "Servizio eccellente!",
                            "reviewBody": "Il servizio è stato fantastico! Il mio autista mi stava aspettando all Aeroporto di Istanbul, molto professionale e gentile. L auto era pulita e confortevole. Assolutamente consigliato!",
                            "itemReviewed": {
                                "@type": "Thing",
                                "name": "Trasferimento in taxi dall Aeroporto di Istanbul a Taksim"
                            },
                            "reviewRating": {
                                "@type": "Rating",
                                "ratingValue": "5",
                                "bestRating": "5",
                                "worstRating": "1"
                            },
                            "datePublished": "2025-03-15",
                            "author": {
                                "@type": "Person",
                                "name": "John Smith"
                            },
                            "publisher": {
                                "@type": "Organization",
                                "name": "Trustpilot"
                            }
                        }
                    },
                    "FAQPage": {
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "Dove mi incontrerà il mio autista all Aeroporto di Istanbul?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Il tuo autista ti aspetterà presso il nostro ufficio APL Transfers nella sala arrivi dell Aeroporto di Istanbul, con un cartello con il tuo nome per un facile riconoscimento."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Le tariffe dei taxi dall Aeroporto di Istanbul a Taksim sono fisse?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Sì, tutte le nostre tariffe taxi sono fisse e non ci sono costi nascosti. Offriamo prezzi trasparenti e competitivi."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Offrite cancellazioni gratuite per i trasferimenti dall Aeroporto di Istanbul a Taksim?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Sì, puoi cancellare la tua prenotazione gratuitamente fino a 24 ore prima dell arrivo."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Quali metodi di pagamento accettate per i trasferimenti dall Aeroporto di Istanbul?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Accettiamo pagamenti in euro, sterline britanniche, dollari statunitensi e lire turche tramite pagamento sicuro online."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Fornite seggiolini per bambini nei trasferimenti in taxi dall Aeroporto di Istanbul a Taksim?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Sì, offriamo seggiolini per bambini gratuiti nei veicoli privati da 8 e 9 posti per garantire la sicurezza delle famiglie."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Quanto tempo impiega un taxi dall Aeroporto di Istanbul a Taksim?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Il viaggio dall Aeroporto di Istanbul a Taksim dura generalmente tra i 40 e i 50 minuti, a seconda del traffico."
                                }
                            }
                        ]
                    }

                },
                ru: {
                    "LocalBusiness": {
                        "@context": "https://schema.org/",
                        "@type": "LocalBusiness",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/taksim.webp`,
                        "name": "APL Transfers",
                        "@id": "33",
                        "url": `${env.websiteDomain}/ru/istanbul-airport-to-taksim`,
                        "telephone": "+90 212 123 4567",
                        "priceRange": "35",
                        "address": {
                            "@type": "PostalAddress",
                            "postalCode": "34435",
                            "streetAddress": "Taksim Square, Beyoglu",
                            "addressCountry": "TR",
                            "addressLocality": "Istanbul"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 41.0082,
                            "longitude": 28.9784
                        },
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                            ],
                            "opens": "00:00",
                            "closes": "23:59"
                        },
                        "sameAs": [
                            "https://www.facebook.com/APLTransfers",
                            "https://twitter.com/APLTransfers",
                            "https://www.instagram.com/APLTransfers"
                        ]
                    },
                    "Product": {
                        "@context": "https://schema.org/",
                        "@type": "Product",
                        "name": "Трансфер на такси из аэропорта Стамбула в Таксим",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/taksim.webp`,
                        "description": "Забронируйте премиум трансфер на такси из аэропорта Стамбула в Таксим с APL Transfers. Фиксированная цена, бесплатная встреча и круглосуточное обслуживание.",
                        "brand": "APL Transfers",
                        "sku": "IST-TAK-001",
                        "offers": {
                            "@type": "Offer",
                            "url": `${env.websiteDomain}/ru/istanbul-airport-to-taksim`,
                            "priceCurrency": "EUR",
                            "price": "35.00",
                            "priceValidUntil": "2025-12-31",
                            "availability": "https://schema.org/InStock",
                            "itemCondition": "https://schema.org/NewCondition"
                        },
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.9",
                            "bestRating": "5",
                            "worstRating": "1",
                            "ratingCount": 2145,
                            "reviewCount": 2145
                        },
                        "review": {
                            "@type": "Review",
                            "name": "Отличный сервис!",
                            "reviewBody": "Сервис был великолепным! Водитель ждал меня в аэропорту Стамбула, был очень профессиональным и дружелюбным. Машина была чистая и комфортная. Определенно рекомендую!",
                            "itemReviewed": {
                                "@type": "Thing",
                                "name": "Трансфер на такси из аэропорта Стамбула в Таксим"
                            },
                            "reviewRating": {
                                "@type": "Rating",
                                "ratingValue": "5",
                                "bestRating": "5",
                                "worstRating": "1"
                            },
                            "datePublished": "2025-03-15",
                            "author": {
                                "@type": "Person",
                                "name": "John Smith"
                            },
                            "publisher": {
                                "@type": "Organization",
                                "name": "Trustpilot"
                            }
                        }
                    },
                    "FAQPage": {
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "Где меня встретит мой водитель в аэропорту Стамбула?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Ваш водитель встретит вас у нашего офиса APL Transfers в зале прибытия аэропорта Стамбула с табличкой с вашим именем для удобства идентификации."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Фиксированы ли цены на такси из аэропорта Стамбула в Таксим?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Да, все наши тарифы фиксированы и не содержат скрытых платежей. Мы предлагаем прозрачные и конкурентоспособные цены."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Есть ли возможность бесплатной отмены для трансферов из аэропорта Стамбула в Таксим?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Да, вы можете бесплатно отменить бронирование за 24 часа до прибытия."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Какие способы оплаты вы принимаете для трансферов из аэропорта Стамбула?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Мы принимаем оплату в евро, британских фунтах, долларах США и турецких лирах через безопасный онлайн-платеж."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Предоставляете ли вы детские кресла для трансферов на такси из аэропорта Стамбула в Таксим?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Да, мы предоставляем бесплатные детские кресла для 8- и 9-местных частных автомобилей для обеспечения безопасности семей."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Сколько времени занимает поездка на такси из аэропорта Стамбула в Таксим?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Поездка из аэропорта Стамбула в Таксим обычно занимает 40-50 минут в зависимости от дорожной ситуации."
                                }
                            }
                        ]
                    }

                },
                zh: {
                    "LocalBusiness": {
                        "@context": "https://schema.org/",
                        "@type": "LocalBusiness",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/taksim.webp`,
                        "name": "APL Transfers",
                        "@id": "33",
                        "url": `${env.websiteDomain}/zh/istanbul-airport-to-taksim`,
                        "telephone": "+90 212 123 4567",
                        "priceRange": "35",
                        "address": {
                            "@type": "PostalAddress",
                            "postalCode": "34435",
                            "streetAddress": "Taksim Square, Beyoglu",
                            "addressCountry": "TR",
                            "addressLocality": "Istanbul"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 41.0082,
                            "longitude": 28.9784
                        },
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                            ],
                            "opens": "00:00",
                            "closes": "23:59"
                        },
                        "sameAs": [
                            "https://www.facebook.com/APLTransfers",
                            "https://twitter.com/APLTransfers",
                            "https://www.instagram.com/APLTransfers"
                        ]
                    },
                    "Product": {
                        "@context": "https://schema.org/",
                        "@type": "Product",
                        "name": "伊斯坦布尔机场到塔克西姆出租车接送",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/taksim.webp`,
                        "description": "通过 APL Transfers 预订伊斯坦布尔机场到塔克西姆的豪华出租车接送服务。固定价格，免费接机，24/7 全天候服务。",
                        "brand": "APL Transfers",
                        "sku": "IST-TAK-001",
                        "offers": {
                            "@type": "Offer",
                            "url": `${env.websiteDomain}/zh/istanbul-airport-to-taksim`,
                            "priceCurrency": "EUR",
                            "price": "35.00",
                            "priceValidUntil": "2025-12-31",
                            "availability": "https://schema.org/InStock",
                            "itemCondition": "https://schema.org/NewCondition"
                        },
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.9",
                            "bestRating": "5",
                            "worstRating": "1",
                            "ratingCount": 2145,
                            "reviewCount": 2145
                        },
                        "review": {
                            "@type": "Review",
                            "name": "优质服务！",
                            "reviewBody": "服务非常棒！我的司机在伊斯坦布尔机场等我，非常专业和友好。车辆干净舒适。强烈推荐！",
                            "itemReviewed": {
                                "@type": "Thing",
                                "name": "伊斯坦布尔机场到塔克西姆出租车接送"
                            },
                            "reviewRating": {
                                "@type": "Rating",
                                "ratingValue": "5",
                                "bestRating": "5",
                                "worstRating": "1"
                            },
                            "datePublished": "2025-03-15",
                            "author": {
                                "@type": "Person",
                                "name": "John Smith"
                            },
                            "publisher": {
                                "@type": "Organization",
                                "name": "Trustpilot"
                            }
                        }
                    },
                    "FAQPage": {
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "我的司机会在伊斯坦布尔机场哪里接我？",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "您的司机将在伊斯坦布尔机场抵达大厅的 APL Transfers 办公室前等候，手持您的姓名牌以便识别。"
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "伊斯坦布尔机场到塔克西姆的出租车价格是固定的吗？",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "是的，我们所有的出租车价格都是固定的，没有隐藏费用，提供透明和有竞争力的价格。"
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "伊斯坦布尔机场到塔克西姆的接送是否提供免费取消？",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "是的，您可以在到达前 24 小时内免费取消您的预订。"
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "伊斯坦布尔机场接送接受哪些付款方式？",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "我们接受欧元、英镑、美元和土耳其里拉的安全在线支付。"
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "伊斯坦布尔机场到塔克西姆的出租车接送是否提供儿童座椅？",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "是的，我们为 8 座和 9 座的私人车辆提供免费儿童座椅，以确保家庭的安全。"
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "从伊斯坦布尔机场到塔克西姆的出租车需要多长时间？",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "从伊斯坦布尔机场到塔克西姆的旅程通常需要 40-50 分钟，具体取决于交通状况。"
                                }
                            }
                        ]
                    }

                },
            },
            "/istanbul-airport-to-sultanahmet": {
                en: {
                    "LocalBusiness": {
                        "@context": "https://schema.org/",
                        "@type": "LocalBusiness",
                        "name": "APL Transfers",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/sultanahmet.webp`,
                        "@id": "34",
                        "url": `${env.websiteDomain}/istanbul-airport-to-sultanahmet`,
                        "telephone": "+90 212 123 4567",
                        "priceRange": "35",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Mühürdar Caddesi, No 14 D3, Kadıköy",
                            "addressLocality": "Istanbul",
                            "addressCountry": "TR",
                            "postalCode": "34710"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 40.987843,
                            "longitude": 29.022205
                        },
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                            ],
                            "opens": "00:00",
                            "closes": "23:59"
                        },
                        "sameAs": [
                            "https://www.facebook.com/APLTransfers",
                            "https://twitter.com/APLTransfers",
                            "https://www.instagram.com/APLTransfers"
                        ]
                    }
                    ,
                    "Product": {
                        "@context": "https://schema.org/",
                        "@type": "Product",
                        "name": "Istanbul Airport to Sultanahmet Taxi Transfer",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/sultanahmet.webp`,
                        "description": "Book a premium taxi transfer from Istanbul Airport to Sultanahmet with APL Transfers. Fixed price, free meet & greet, and 24/7 service. No extra charge for flight delays.",
                        "brand": "APL Transfers",
                        "sku": "IST-SUL-001",
                        "offers": {
                            "@type": "Offer",
                            "url": `${env.websiteDomain}/istanbul-airport-to-sultanahmet`,
                            "priceCurrency": "EUR",
                            "price": "35.00",
                            "priceValidUntil": "2025-12-31",
                            "availability": "https://schema.org/InStock",
                            "itemCondition": "https://schema.org/NewCondition"
                        },
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.9",
                            "bestRating": "5",
                            "worstRating": "1",
                            "ratingCount": 2180,
                            "reviewCount": 2180
                        },
                        "review": {
                            "@type": "Review",
                            "name": "Emily Johnson",
                            "reviewBody": "The best airport transfer service! My driver was waiting at Istanbul Airport, and the journey to Sultanahmet was smooth. Great service, highly recommended!",
                            "itemReviewed": {
                                "@type": "Thing",
                                "name": "Istanbul Airport to Sultanahmet Taxi Transfer"
                            },
                            "reviewRating": {
                                "@type": "Rating",
                                "ratingValue": "5",
                                "bestRating": "5",
                                "worstRating": "1"
                            },
                            "datePublished": "2025-03-18",
                            "author": {
                                "@type": "Person",
                                "name": "Emily Johnson"
                            },
                            "publisher": {
                                "@type": "Organization",
                                "name": "Trustpilot"
                            }
                        },
                        "FAQPage": {
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": "Where will my driver meet me at Istanbul Airport?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Your driver will meet you by our APL Transfers office in the Arrival Hall at Istanbul Airport, holding a name board for easy identification."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Are the taxi prices from Istanbul Airport to Taksim fixed?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Yes, all our taxi prices are fixed with no hidden charges, providing transparent and competitive rates."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Do you offer free cancellations for Istanbul Airport to Taksim transfers?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Yes, you can cancel your booking free of charge up to 24 hours before arrival."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "What payment methods do you accept for Istanbul Airport transfers?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "We accept payments in Euro, GBP, US Dollar, and Turkish Lira via secure online payment."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Do you provide child seats for Istanbul Airport to Taksim taxi transfers?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Yes, we offer free child seats for 8 and 9-seater private vehicles to ensure safety for families."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "How long does a taxi from Istanbul Airport to Taksim take?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "The journey from Istanbul Airport to Taksim typically takes 40-50 minutes, depending on traffic conditions."
                                    }
                                }
                            ]
                        }
                    },
                    "FAQPage": {
                        "@context": "https://schema.org/",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "Do you track flights, and will I be charged if my flight is delayed?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, we track your flight in real-time. If your flight is delayed, we adjust your pickup time accordingly, and you will not be charged extra for delays."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Where will my driver meet me at Istanbul Airport?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Your driver will meet you by our APL Transfers office in the Arrival Hall at Istanbul Airport, holding a name board for easy identification."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Are the taxi prices from Istanbul Airport to Sultanahmet fixed?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, all our taxi prices are fixed with no hidden charges, providing transparent and competitive rates."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you offer free cancellations for Istanbul Airport to Sultanahmet transfers?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, you can cancel your booking free of charge up to 24 hours before arrival."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What payment methods do you accept for Istanbul Airport transfers?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "We accept payments in Euro, GBP, US Dollar, and Turkish Lira via secure online payment."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you provide child seats for Istanbul Airport to Sultanahmet taxi transfers?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, we offer free child seats for 8 and 9-seater private vehicles to ensure safety for families."
                                }
                            }
                        ]
                    }
                },
                tr: {
                    "LocalBusiness": {
                        "@context": "https://schema.org/",
                        "@type": "LocalBusiness",
                        "name": "APL Transfers",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/sultanahmet.webp`,
                        "@id": "34",
                        "url": `${env.websiteDomain}/tr/istanbul-airport-to-sultanahmet`,
                        "telephone": "+90 212 123 4567",
                        "priceRange": "35",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Mühürdar Caddesi, No 14 D3, Kadıköy",
                            "addressLocality": "Istanbul",
                            "addressCountry": "TR",
                            "postalCode": "34710"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 40.987843,
                            "longitude": 29.022205
                        },
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                            ],
                            "opens": "00:00",
                            "closes": "23:59"
                        },
                        "sameAs": [
                            "https://www.facebook.com/APLTransfers",
                            "https://twitter.com/APLTransfers",
                            "https://www.instagram.com/APLTransfers"
                        ]
                    }
                    ,
                    "Product": {
                        "@context": "https://schema.org/",
                        "@type": "Product",
                        "name": "İstanbul Havalimanı Sultanahmet Taksi Transferi",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/sultanahmet.webp`,
                        "description": "APL Transfers ile İstanbul Havalimanı'ndan Sultanahmet'e premium taksi transferinizi ayırtın. Sabit fiyat, ücretsiz karşılama ve 7/24 hizmet. Uçuş gecikmelerinde ek ücret yok.",
                        "brand": "APL Transfers",
                        "sku": "IST-SUL-001",
                        "offers": {
                            "@type": "Teklif",
                            "url": `${env.websiteDomain}/tr/istanbul-airport-to-sultanahmet`,

                            "priceCurrency": "EUR",
                            "price": "35.00",
                            "priceValidUntil": "2025-12-31",
                            "availability": "https://schema.org/InStock",
                            "itemCondition": "https://schema.org/NewCondition"
                        },
                        "aggregateRating": {
                            "@type": "OrtalamaDeğerlendirme",
                            "ratingValue": "4.9",
                            "bestRating": "5",
                            "worstRating": "1",
                            "ratingCount": 2180,
                            "reviewCount": 2180
                        },
                        "review": {
                            "@type": "Yorum",
                            "name": "Emily Johnson",
                            "reviewBody": "En iyi havalimanı transfer hizmeti! Şoförüm İstanbul Havalimanı'nda bekliyordu ve Sultanahmet'e yolculuk çok rahattı. Harika hizmet, şiddetle tavsiye ederim!",
                            "itemReviewed": {
                                "@type": "Thing",
                                "name": "İstanbul Havalimanı Sultanahmet Taksi Transferi"
                            },
                            "reviewRating": {
                                "@type": "Derecelendirme",
                                "ratingValue": "5",
                                "bestRating": "5",
                                "worstRating": "1"
                            },
                            "datePublished": "2025-03-18",
                            "author": {
                                "@type": "Kişi",
                                "name": "Emily Johnson"
                            },
                            "publisher": {
                                "@type": "Organizasyon",
                                "name": "Trustpilot"
                            }
                        }
                    },
                    "FAQPage": {
                        "@context": "https://schema.org/",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "Uçuşları takip ediyor musunuz ve uçuşum gecikirse ek ücret ödeyecek miyim?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Evet, uçuşunuzu gerçek zamanlı olarak takip ediyoruz. Uçuşunuz gecikirse, alma saatinizi buna göre ayarlıyoruz ve gecikmeler için ek ücret alınmaz."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Şoförüm İstanbul Havalimanı'nda beni nerede karşılayacak?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Şoförünüz, İstanbul Havalimanı Gelen Yolcu Salonu'nda bulunan APL Transfers ofisimizin yanında, adınızı gösteren bir tabela tutarak sizi karşılayacaktır."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "İstanbul Havalimanı'ndan Sultanahmet'e taksi ücretleri sabit mi?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Evet, tüm taksi fiyatlarımız sabittir, gizli ücret yoktur ve şeffaf, rekabetçi fiyatlar sunarız."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "İstanbul Havalimanı'ndan Sultanahmet'e transferlerde ücretsiz iptal hakkı sunuyor musunuz?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Evet, rezervasyonunuzu varıştan 24 saat öncesine kadar ücretsiz olarak iptal edebilirsiniz."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "İstanbul Havalimanı transferleri için hangi ödeme yöntemlerini kabul ediyorsunuz?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Ödemeleri Euro, GBP, ABD Doları ve Türk Lirası olarak güvenli online ödeme sistemi ile kabul ediyoruz."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "İstanbul Havalimanı'ndan Sultanahmet'e taksi transferleri için çocuk koltuğu sağlıyor musunuz?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Evet, ailelerin güvenliği için 8 ve 9 kişilik özel araçlarımızda ücretsiz çocuk koltukları sunuyoruz."
                                }
                            }
                        ]
                    }
                },
                ar: {
                    "LocalBusiness": {
                        "@context": "https://schema.org/",
                        "@type": "LocalBusiness",
                        "name": "APL Transfers",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/sultanahmet.webp`,
                        "@id": "34",
                        "url": `${env.websiteDomain}/ar/istanbul-airport-to-sultanahmet`,
                        "telephone": "+90 212 123 4567",
                        "priceRange": "35",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Mühürdar Caddesi, No 14 D3, Kadıköy",
                            "addressLocality": "Istanbul",
                            "addressCountry": "TR",
                            "postalCode": "34710"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 40.987843,
                            "longitude": 29.022205
                        },
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                            ],
                            "opens": "00:00",
                            "closes": "23:59"
                        },
                        "sameAs": [
                            "https://www.facebook.com/APLTransfers",
                            "https://twitter.com/APLTransfers",
                            "https://www.instagram.com/APLTransfers"
                        ]
                    }
                    ,
                    "Product": {
                        "@context": "https://schema.org/",
                        "@type": "Product",
                        "name": "تاكسي من مطار إسطنبول إلى السلطان أحمد",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/sultanahmet.webp`,
                        "description": "احجز انتقال تاكسي موثوق من مطار إسطنبول إلى السلطان أحمد مع APL Transfers. أسعار ثابتة، استقبال مجاني وخدمة 24/7. لا توجد رسوم إضافية لتأخير الرحلات.",
                        "brand": "APL Transfers",
                        "sku": "IST-SUL-001",
                        "offers": {
                            "@type": "عرض",
                            "url": `${env.websiteDomain}/ar/istanbul-airport-to-sultanahmet`,
                            "priceCurrency": "EUR",
                            "price": "35.00",
                            "priceValidUntil": "2025-12-31",
                            "availability": "https://schema.org/InStock",
                            "itemCondition": "https://schema.org/NewCondition"
                        },
                        "aggregateRating": {
                            "@type": "التقييم_الإجمالي",
                            "ratingValue": "4.9",
                            "bestRating": "5",
                            "worstRating": "1",
                            "ratingCount": 2180,
                            "reviewCount": 2180
                        },
                        "review": {
                            "@type": "مراجعة",
                            "name": "إميلي جونسون",
                            "reviewBody": "أفضل خدمة نقل من المطار! كان السائق ينتظرني في مطار إسطنبول، وكانت الرحلة إلى السلطان أحمد سلسة للغاية. خدمة رائعة، أنصح بها بشدة!",
                            "itemReviewed": {
                                "@type": "Thing",
                                "name": "تاكسي من مطار إسطنبول إلى السلطان أحمد"
                            },
                            "reviewRating": {
                                "@type": "تقييم",
                                "ratingValue": "5",
                                "bestRating": "5",
                                "worstRating": "1"
                            },
                            "datePublished": "2025-03-18",
                            "author": {
                                "@type": "شخص",
                                "name": "إميلي جونسون"
                            },
                            "publisher": {
                                "@type": "منظمة",
                                "name": "Trustpilot"
                            }
                        }
                    },
                    "FAQPage": {
                        "@context": "https://schema.org/",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "هل تتابعون الرحلات الجوية، وهل سيتم فرض رسوم إضافية إذا تأخرت رحلتي؟",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "نعم، نحن نتابع رحلتك في الوقت الفعلي. إذا تأخرت رحلتك، سنقوم بتعديل وقت الاستلام وفقًا لذلك، ولن يتم فرض رسوم إضافية على التأخيرات."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "أين سيلتقيني السائق في مطار إسطنبول؟",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "سيلتقيك السائق بجوار مكتب APL Transfers في صالة الوصول بمطار إسطنبول، حاملًا لافتة تحمل اسمك لتسهيل التعرف عليك."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "هل أسعار التاكسي من مطار إسطنبول إلى السلطان أحمد ثابتة؟",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "نعم، جميع أسعار التاكسي لدينا ثابتة وبدون رسوم خفية، حيث نقدم أسعارًا شفافة وتنافسية."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "هل تقدمون إلغاء مجاني لعمليات النقل من مطار إسطنبول إلى السلطان أحمد؟",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "نعم، يمكنك إلغاء حجزك مجانًا حتى 24 ساعة قبل الوصول."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "ما طرق الدفع التي تقبلونها لعمليات النقل من مطار إسطنبول؟",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "نقبل المدفوعات باليورو والجنيه الإسترليني والدولار الأمريكي والليرة التركية من خلال الدفع الإلكتروني الآمن."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "هل توفرون مقاعد للأطفال في خدمات التاكسي من مطار إسطنبول إلى السلطان أحمد؟",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "نعم، نوفر مقاعد أطفال مجانية في السيارات الخاصة التي تتسع لـ 8 و 9 أشخاص لضمان سلامة العائلات."
                                }
                            }
                        ]
                    }
                },
                es: {
                    "LocalBusiness": {
                        "@context": "https://schema.org/",
                        "@type": "LocalBusiness",
                        "name": "APL Transfers",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/sultanahmet.webp`,
                        "@id": "34",
                        "url": `${env.websiteDomain}/es/istanbul-airport-to-sultanahmet`,
                        "telephone": "+90 212 123 4567",
                        "priceRange": "35",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Mühürdar Caddesi, No 14 D3, Kadıköy",
                            "addressLocality": "Istanbul",
                            "addressCountry": "TR",
                            "postalCode": "34710"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 40.987843,
                            "longitude": 29.022205
                        },
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                            ],
                            "opens": "00:00",
                            "closes": "23:59"
                        },
                        "sameAs": [
                            "https://www.facebook.com/APLTransfers",
                            "https://twitter.com/APLTransfers",
                            "https://www.instagram.com/APLTransfers"
                        ]
                    }
                    ,
                    "Product": {
                        "@context": "https://schema.org/",
                        "@type": "Product",
                        "name": "Taxi del Aeropuerto de Estambul a Sultanahmet",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/sultanahmet.webp`,
                        "description": "Reserva un traslado en taxi confiable desde el Aeropuerto de Estambul a Sultanahmet con APL Transfers. Precios fijos, bienvenida gratuita y servicio 24/7. Sin cargo extra por retrasos de vuelos.",
                        "brand": "APL Transfers",
                        "sku": "IST-SUL-001",
                        "offers": {
                            "@type": "Oferta",
                            "url": `${env.websiteDomain}/es/istanbul-airport-to-sultanahmet`,
                            "priceCurrency": "EUR",
                            "price": "35.00",
                            "priceValidUntil": "2025-12-31",
                            "availability": "https://schema.org/InStock",
                            "itemCondition": "https://schema.org/NewCondition"
                        },
                        "aggregateRating": {
                            "@type": "ValoraciónAgregada",
                            "ratingValue": "4.9",
                            "bestRating": "5",
                            "worstRating": "1",
                            "ratingCount": 2180,
                            "reviewCount": 2180
                        },
                        "review": {
                            "@type": "Reseña",
                            "name": "Emily Johnson",
                            "reviewBody": "¡El mejor servicio de traslado desde el aeropuerto! Mi conductor me esperaba en el Aeropuerto de Estambul y el viaje a Sultanahmet fue muy cómodo. Gran servicio, ¡altamente recomendado!",
                            "itemReviewed": {
                                "@type": "Thing",
                                "name": "Taxi del Aeropuerto de Estambul a Sultanahmet"
                            },
                            "reviewRating": {
                                "@type": "Calificación",
                                "ratingValue": "5",
                                "bestRating": "5",
                                "worstRating": "1"
                            },
                            "datePublished": "2025-03-18",
                            "author": {
                                "@type": "Persona",
                                "name": "Emily Johnson"
                            },
                            "publisher": {
                                "@type": "Organización",
                                "name": "Trustpilot"
                            }
                        }
                    },
                    "FAQPage": {
                        "@context": "https://schema.org/",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "¿Hacen seguimiento de los vuelos y me cobrarán si mi vuelo se retrasa?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Sí, hacemos un seguimiento de tu vuelo en tiempo real. Si tu vuelo se retrasa, ajustamos tu hora de recogida en consecuencia y no se te cobrará extra por retrasos."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "¿Dónde me encontrará mi conductor en el Aeropuerto de Estambul?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Tu conductor te esperará junto a nuestra oficina de APL Transfers en la sala de llegadas del Aeropuerto de Estambul, con un cartel con tu nombre para facilitar la identificación."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "¿Los precios de taxi desde el Aeropuerto de Estambul a Sultanahmet son fijos?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Sí, todos nuestros precios de taxi son fijos, sin cargos ocultos, ofreciendo tarifas transparentes y competitivas."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "¿Ofrecen cancelaciones gratuitas para los traslados del Aeropuerto de Estambul a Sultanahmet?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Sí, puedes cancelar tu reserva de forma gratuita hasta 24 horas antes de la llegada."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "¿Qué métodos de pago aceptan para los traslados desde el Aeropuerto de Estambul?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Aceptamos pagos en euros, libras esterlinas, dólares estadounidenses y liras turcas mediante pago seguro en línea."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "¿Proporcionan asientos para niños en los traslados en taxi desde el Aeropuerto de Estambul a Sultanahmet?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Sí, ofrecemos asientos para niños gratuitos en vehículos privados de 8 y 9 plazas para garantizar la seguridad de las familias."
                                }
                            }
                        ]
                    }
                },
                it: {
                    "LocalBusiness": {
                        "@context": "https://schema.org/",
                        "@type": "LocalBusiness",
                        "name": "APL Transfers",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/sultanahmet.webp`,
                        "@id": "34",
                        "url": `${env.websiteDomain}/it/istanbul-airport-to-sultanahmet`,
                        "telephone": "+90 212 123 4567",
                        "priceRange": "35",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Mühürdar Caddesi, No 14 D3, Kadıköy",
                            "addressLocality": "Istanbul",
                            "addressCountry": "TR",
                            "postalCode": "34710"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 40.987843,
                            "longitude": 29.022205
                        },
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                            ],
                            "opens": "00:00",
                            "closes": "23:59"
                        },
                        "sameAs": [
                            "https://www.facebook.com/APLTransfers",
                            "https://twitter.com/APLTransfers",
                            "https://www.instagram.com/APLTransfers"
                        ]
                    }
                    ,
                    "Product": {
                        "@context": "https://schema.org/",
                        "@type": "Product",
                        "name": "Taxi Aeroporto Istanbul Sultanahmet",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/sultanahmet.webp`,
                        "description": "Prenota un trasferimento in taxi affidabile dall Aeroporto di Istanbul a Sultanahmet con APL Transfers. Prezzi fissi, accoglienza gratuita e servizio 24/7. Nessun costo aggiuntivo per ritardi dei voli.",
                        "brand": "APL Transfers",
                        "sku": "IST-SUL-001",
                        "offers": {
                            "@type": "Offerta",
                            "url": `${env.websiteDomain}/it/istanbul-airport-to-sultanahmet`,
                            "priceCurrency": "EUR",
                            "price": "35.00",
                            "priceValidUntil": "2025-12-31",
                            "availability": "https://schema.org/InStock",
                            "itemCondition": "https://schema.org/NewCondition"
                        },
                        "aggregateRating": {
                            "@type": "ValutazioneAggregata",
                            "ratingValue": "4.9",
                            "bestRating": "5",
                            "worstRating": "1",
                            "ratingCount": 2180,
                            "reviewCount": 2180
                        },
                        "review": {
                            "@type": "Recensione",
                            "name": "Emily Johnson",
                            "reviewBody": "Il miglior servizio di trasferimento aeroportuale! Il mio autista mi aspettava all Aeroporto di Istanbul e il viaggio fino a Sultanahmet è stato molto confortevole. Servizio eccellente, altamente raccomandato!",
                            "itemReviewed": {
                                "@type": "Thing",
                                "name": "Taxi Aeroporto Istanbul Sultanahmet"
                            },
                            "reviewRating": {
                                "@type": "Valutazione",
                                "ratingValue": "5",
                                "bestRating": "5",
                                "worstRating": "1"
                            },
                            "datePublished": "2025-03-18",
                            "author": {
                                "@type": "Persona",
                                "name": "Emily Johnson"
                            },
                            "publisher": {
                                "@type": "Organizzazione",
                                "name": "Trustpilot"
                            }
                        }
                    },
                    "FAQPage": {
                        "@context": "https://schema.org/",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "Monitorate i voli e verrò addebitato un costo se il mio volo è in ritardo?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Sì, monitoriamo il tuo volo in tempo reale. Se il tuo volo è in ritardo, adegueremo l'orario di ritiro di conseguenza e non ti verrà addebitato alcun costo aggiuntivo per il ritardo."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Dove mi incontrerà il mio autista all'Aeroporto di Istanbul?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Il tuo autista ti aspetterà presso il nostro ufficio APL Transfers nella sala arrivi dell'Aeroporto di Istanbul, tenendo un cartello con il tuo nome per facilitare il riconoscimento."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Le tariffe dei taxi dall'Aeroporto di Istanbul a Sultanahmet sono fisse?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Sì, tutte le nostre tariffe taxi sono fisse, senza costi nascosti, offrendo prezzi trasparenti e competitivi."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Offrite cancellazioni gratuite per i trasferimenti dall'Aeroporto di Istanbul a Sultanahmet?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Sì, puoi cancellare la tua prenotazione gratuitamente fino a 24 ore prima dell'arrivo."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Quali metodi di pagamento accettate per i trasferimenti dall'Aeroporto di Istanbul?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Accettiamo pagamenti in Euro, Sterline britanniche, Dollari americani e Lire turche tramite pagamento online sicuro."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Fornite seggiolini per bambini nei trasferimenti in taxi dall'Aeroporto di Istanbul a Sultanahmet?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Sì, offriamo seggiolini per bambini gratuiti per veicoli privati da 8 e 9 posti per garantire la sicurezza delle famiglie."
                                }
                            }
                        ]
                    }
                },
                ru: {
                    "LocalBusiness": {
                        "@context": "https://schema.org/",
                        "@type": "LocalBusiness",
                        "name": "APL Transfers",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/sultanahmet.webp`,
                        "@id": "34",
                        "url": `${env.websiteDomain}/ru/istanbul-airport-to-sultanahmet`,
                        "telephone": "+90 212 123 4567",
                        "priceRange": "35",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Mühürdar Caddesi, No 14 D3, Kadıköy",
                            "addressLocality": "Istanbul",
                            "addressCountry": "TR",
                            "postalCode": "34710"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 40.987843,
                            "longitude": 29.022205
                        },
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                            ],
                            "opens": "00:00",
                            "closes": "23:59"
                        },
                        "sameAs": [
                            "https://www.facebook.com/APLTransfers",
                            "https://twitter.com/APLTransfers",
                            "https://www.instagram.com/APLTransfers"
                        ]
                    }
                    ,
                    "Product": {
                        "@context": "https://schema.org/",
                        "@type": "Product",
                        "name": "Такси из аэропорта Стамбула в Султанахмет",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/sultanahmet.webp`,
                        "description": "Забронируйте надежный трансфер на такси из аэропорта Стамбула в Султанахмет с APL Transfers. Фиксированные цены, бесплатная встреча и обслуживание 24/7. Без доплат за задержку рейса.",
                        "brand": "APL Transfers",
                        "sku": "IST-SUL-001",
                        "offers": {
                            "@type": "Предложение",
                            "url": `${env.websiteDomain}/ru/istanbul-airport-to-sultanahmet`,
                            "priceCurrency": "EUR",
                            "price": "35.00",
                            "priceValidUntil": "2025-12-31",
                            "availability": "https://schema.org/InStock",
                            "itemCondition": "https://schema.org/NewCondition"
                        },
                        "aggregateRating": {
                            "@type": "СреднийРейтинг",
                            "ratingValue": "4.9",
                            "bestRating": "5",
                            "worstRating": "1",
                            "ratingCount": 2180,
                            "reviewCount": 2180
                        },
                        "review": {
                            "@type": "Обзор",
                            "name": "Эмили Джонсон",
                            "reviewBody": "Лучший сервис трансфера из аэропорта! Водитель ждал меня в аэропорту Стамбула, и поездка до Султанахмета была очень комфортной. Отличный сервис, настоятельно рекомендую!",
                            "itemReviewed": {
                                "@type": "Thing",
                                "name": "Такси из аэропорта Стамбула в Султанахмет"
                            },
                            "reviewRating": {
                                "@type": "Оценка",
                                "ratingValue": "5",
                                "bestRating": "5",
                                "worstRating": "1"
                            },
                            "datePublished": "2025-03-18",
                            "author": {
                                "@type": "Человек",
                                "name": "Эмили Джонсон"
                            },
                            "publisher": {
                                "@type": "Организация",
                                "name": "Trustpilot"
                            }
                        }
                    },
                    "FAQPage": {
                        "@context": "https://schema.org/",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "Вы отслеживаете рейсы и будет ли взиматься плата, если мой рейс задержится?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Да, мы отслеживаем ваш рейс в режиме реального времени. Если ваш рейс задерживается, мы корректируем время подачи такси, и дополнительная плата за задержку не взимается."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Где меня встретит водитель в аэропорту Стамбула?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Ваш водитель встретит вас у офиса APL Transfers в зале прибытия аэропорта Стамбула, держа табличку с вашим именем для удобства идентификации."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Фиксированы ли цены на такси из аэропорта Стамбула до Султанахмета?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Да, все наши цены фиксированы, без скрытых платежей, с прозрачными и конкурентоспособными тарифами."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Можно ли бесплатно отменить трансфер из аэропорта Стамбула в Султанахмет?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Да, вы можете отменить бронирование бесплатно за 24 часа до прибытия."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Какие способы оплаты вы принимаете для трансферов из аэропорта Стамбула?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Мы принимаем платежи в евро, фунтах стерлингов, долларах США и турецких лирах через безопасный онлайн-платеж."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Предоставляете ли вы детские кресла для такси из аэропорта Стамбула в Султанахмет?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Да, мы предоставляем бесплатные детские кресла для частных автомобилей на 8 и 9 мест, чтобы обеспечить безопасность семей."
                                }
                            }
                        ]
                    }
                },
                zh: {
                    "LocalBusiness": {
                        "@context": "https://schema.org/",
                        "@type": "LocalBusiness",
                        "name": "APL Transfers",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/sultanahmet.webp`,
                        "@id": "34",
                        "url": `${env.websiteDomain}/zh/istanbul-airport-to-sultanahmet`,
                        "telephone": "+90 212 123 4567",
                        "priceRange": "35",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Mühürdar Caddesi, No 14 D3, Kadıköy",
                            "addressLocality": "Istanbul",
                            "addressCountry": "TR",
                            "postalCode": "34710"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 40.987843,
                            "longitude": 29.022205
                        },
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                            ],
                            "opens": "00:00",
                            "closes": "23:59"
                        },
                        "sameAs": [
                            "https://www.facebook.com/APLTransfers",
                            "https://twitter.com/APLTransfers",
                            "https://www.instagram.com/APLTransfers"
                        ]
                    }
                    ,
                    "Product": {
                        "@context": "https://schema.org/",
                        "@type": "Product",
                        "name": "伊斯坦布尔机场至苏丹艾哈迈德出租车",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/sultanahmet.webp`,
                        "description": "通过 APL Transfers 预订可靠的伊斯坦布尔机场至苏丹艾哈迈德的出租车接送服务。固定价格，免费接机，24/7 全天候服务。航班延误无额外费用。",
                        "brand": "APL Transfers",
                        "sku": "IST-SUL-001",
                        "offers": {
                            "@type": "优惠",
                            "url": `${env.websiteDomain}/zh/istanbul-airport-to-sultanahmet`,
                            "priceCurrency": "EUR",
                            "price": "35.00",
                            "priceValidUntil": "2025-12-31",
                            "availability": "https://schema.org/InStock",
                            "itemCondition": "https://schema.org/NewCondition"
                        },
                        "aggregateRating": {
                            "@type": "综合评分",
                            "ratingValue": "4.9",
                            "bestRating": "5",
                            "worstRating": "1",
                            "ratingCount": 2180,
                            "reviewCount": 2180
                        },
                        "review": {
                            "@type": "评论",
                            "name": "艾米丽·约翰逊",
                            "reviewBody": "最好的机场接送服务！我的司机在伊斯坦布尔机场等候，前往苏丹艾哈迈德的旅程非常顺畅。优质服务，强烈推荐！",
                            "itemReviewed": {
                                "@type": "Thing",
                                "name": "伊斯坦布尔机场至苏丹艾哈迈德出租车"
                            },
                            "reviewRating": {
                                "@type": "评分",
                                "ratingValue": "5",
                                "bestRating": "5",
                                "worstRating": "1"
                            },
                            "datePublished": "2025-03-18",
                            "author": {
                                "@type": "人",
                                "name": "艾米丽·约翰逊"
                            },
                            "publisher": {
                                "@type": "组织",
                                "name": "Trustpilot"
                            }
                        }
                    },
                    "FAQPage": {
                        "@context": "https://schema.org/",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "你们会跟踪航班，如果我的航班延误，会收取额外费用吗？",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "是的，我们实时跟踪您的航班。如果您的航班延误，我们会相应调整接机时间，并且不会收取额外费用。"
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "我的司机会在哪里接我（伊斯坦布尔机场）？",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "您的司机将在伊斯坦布尔机场到达大厅的 APL Transfers 办公室旁等待，并举着写有您姓名的牌子以便识别。"
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "从伊斯坦布尔机场到苏丹艾哈迈德的出租车价格是固定的吗？",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "是的，我们所有的出租车价格都是固定的，没有隐藏费用，提供透明且有竞争力的价格。"
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "你们提供伊斯坦布尔机场至苏丹艾哈迈德的免费取消服务吗？",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "是的，您可以在抵达前 24 小时内免费取消您的预订。"
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "你们接受哪些付款方式（伊斯坦布尔机场接送服务）？",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "我们接受欧元、英镑、美元和土耳其里拉付款，可通过安全的在线支付方式完成。"
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "你们是否提供儿童座椅（伊斯坦布尔机场至苏丹艾哈迈德出租车服务）？",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "是的，我们为 8 座和 9 座的私人车辆提供免费儿童座椅，以确保家庭的安全。"
                                }
                            }
                        ]
                    }
                },
            },
            "/istanbul-airport-to-beyoglu": {
                en: {
                    "LocalBusiness": {
                        "@context": "https://schema.org/",
                        "@type": "LocalBusiness",
                        "name": "APL Transfers",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/beyoglu.webp`,
                        "@id": "36",
                        "url": `${env.websiteDomain}/istanbul-airport-to-beyoglu`,
                        "telephone": "+90 212 123 4567",
                        "priceRange": "35",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Mühürdar Caddesi, No 14 D3, Kadıköy",
                            "addressLocality": "Istanbul",
                            "addressCountry": "TR",
                            "postalCode": "34710"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 40.987843,
                            "longitude": 29.022205
                        },
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                            ],
                            "opens": "00:00",
                            "closes": "23:59"
                        },
                        "sameAs": [
                            "https://www.facebook.com/APLTransfers",
                            "https://twitter.com/APLTransfers",
                            "https://www.instagram.com/APLTransfers"
                        ]
                    },
                    "Product": {
                        "@context": "https://schema.org/",
                        "@type": "Product",
                        "name": "Istanbul Airport to Beyoğlu Taxi Transfer",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/beyoglu.webp`,
                        "description": "Book a fast and hassle-free taxi transfer from Istanbul Airport to Beyoğlu with APL Transfers. Fixed prices, free meet & greet, and 24/7 availability.",
                        "brand": "APL Transfers",
                        "sku": "IST-BEY-001",
                        "offers": {
                            "@type": "Offer",
                            "url": `${env.websiteDomain}/istanbul-airport-to-beyoglu`,
                            "priceCurrency": "EUR",
                            "price": "35.00",
                            "priceValidUntil": "2025-12-31",
                            "availability": "https://schema.org/InStock",
                            "itemCondition": "https://schema.org/NewCondition"
                        },
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.9",
                            "bestRating": "5",
                            "worstRating": "1",
                            "ratingCount": 1900,
                            "reviewCount": 1900
                        },
                        "review": {
                            "@type": "Review",
                            "name": "Sarah Thompson",
                            "reviewBody": "Great service! My driver was waiting at Istanbul Airport, very professional, and the journey to Beyoğlu was smooth and stress-free.",
                            "itemReviewed": {
                                "@type": "Thing",
                                "name": "Istanbul Airport to Beyoğlu Taxi Transfer"
                            },
                            "reviewRating": {
                                "@type": "Rating",
                                "ratingValue": "5",
                                "bestRating": "5",
                                "worstRating": "1"
                            },
                            "datePublished": "2025-03-18",
                            "author": {
                                "@type": "Person",
                                "name": "Sarah Thompson"
                            },
                            "publisher": {
                                "@type": "Organization",
                                "name": "Trustpilot"
                            }
                        }
                    },
                    "FAQPage": {
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "Do you track flights, and will I be charged if my flight is delayed?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, we track your flight in real-time. If your flight is delayed, we adjust your pickup time accordingly, and you will not be charged extra for delays."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Where will my driver meet me at Istanbul Airport?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Your driver will meet you by our APL Transfers office in the Arrival Hall at Istanbul Airport, holding a name board for easy identification."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Are the taxi prices from Istanbul Airport to Beyoğlu fixed?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, all our taxi prices are fixed with no hidden charges, providing transparent and competitive rates."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you offer free cancellations for Istanbul Airport to Beyoğlu transfers?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, you can cancel your booking free of charge up to 24 hours before arrival."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What payment methods do you accept for Istanbul Airport transfers?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "We accept payments in Euro, GBP, US Dollar, and Turkish Lira via secure online payment."
                                }
                            }
                        ]
                    }

                },
                tr: {
                    "LocalBusiness": {
                        "@context": "https://schema.org/",
                        "@type": "LocalBusiness",
                        "name": "APL Transfers",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/beyoglu.webp`,
                        "@id": "36",
                        "url": `${env.websiteDomain}/tr/istanbul-airport-to-beyoglu`,
                        "telephone": "+90 212 123 4567",
                        "priceRange": "35",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Mühürdar Caddesi, No 14 D3, Kadıköy",
                            "addressLocality": "Istanbul",
                            "addressCountry": "TR",
                            "postalCode": "34710"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 40.987843,
                            "longitude": 29.022205
                        },
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                            ],
                            "opens": "00:00",
                            "closes": "23:59"
                        },
                        "sameAs": [
                            "https://www.facebook.com/APLTransfers",
                            "https://twitter.com/APLTransfers",
                            "https://www.instagram.com/APLTransfers"
                        ]
                    },
                    "Product": {
                        "@context": "https://schema.org/",
                        "@type": "Product",
                        "name": "İstanbul Havalimanı Beyoğlu Taksi Transferi",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/beyoglu.webp`,
                        "description": "APL Transfers ile İstanbul Havalimanı'ndan Beyoğlu'na hızlı ve sorunsuz bir taksi transferi yapın. Sabit fiyatlar, ücretsiz karşılama ve 7/24 hizmet sunuyoruz.",
                        "brand": "APL Transfers",
                        "sku": "IST-BEY-001",
                        "offers": {
                            "@type": "Teklif",
                            "url": `${env.websiteDomain}/tr/istanbul-havalimani-beyoglu`,
                            "priceCurrency": "EUR",
                            "price": "35.00",
                            "priceValidUntil": "2025-12-31",
                            "availability": "https://schema.org/InStock",
                            "itemCondition": "https://schema.org/NewCondition"
                        },
                        "aggregateRating": {
                            "@type": "OrtalamaDeğerlendirme",
                            "ratingValue": "4.9",
                            "bestRating": "5",
                            "worstRating": "1",
                            "ratingCount": 1900,
                            "reviewCount": 1900
                        },
                        "review": {
                            "@type": "Yorum",
                            "name": "Sarah Thompson",
                            "reviewBody": "Harika hizmet! Şoförüm İstanbul Havalimanı'nda beni bekliyordu, çok profesyoneldi ve Beyoğlu'na yolculuk sorunsuz geçti.",
                            "itemReviewed": {
                                "@type": "Thing",
                                "name": "İstanbul Havalimanı Beyoğlu Taksi Transferi"
                            },
                            "reviewRating": {
                                "@type": "Derecelendirme",
                                "ratingValue": "5",
                                "bestRating": "5",
                                "worstRating": "1"
                            },
                            "datePublished": "2025-03-18",
                            "author": {
                                "@type": "Kişi",
                                "name": "Sarah Thompson"
                            },
                            "publisher": {
                                "@type": "Organizasyon",
                                "name": "Trustpilot"
                            }
                        }
                    },
                    "FAQPage": {
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "Uçuşları takip ediyor musunuz ve uçuşum gecikirse ek ücret öder miyim?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Evet, uçuşunuzu gerçek zamanlı olarak takip ediyoruz. Eğer uçuşunuz gecikirse, alma saatinizi buna göre ayarlıyoruz ve gecikmeler için ek ücret alınmaz."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "İstanbul Havalimanı'nda şoförüm beni nerede karşılayacak?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Şoförünüz, İstanbul Havalimanı Gelen Yolcu Salonu'ndaki APL Transfers ofisimizin önünde, adınızın yazılı olduğu bir tabela ile sizi karşılayacaktır."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "İstanbul Havalimanı'ndan Beyoğlu'na taksi fiyatları sabit mi?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Evet, tüm taksi fiyatlarımız sabittir ve gizli ücret yoktur. Şeffaf ve rekabetçi fiyatlar sunuyoruz."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "İstanbul Havalimanı'ndan Beyoğlu'na transferlerde ücretsiz iptal hakkı var mı?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Evet, varıştan 24 saat öncesine kadar rezervasyonunuzu ücretsiz olarak iptal edebilirsiniz."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "İstanbul Havalimanı transferleri için hangi ödeme yöntemlerini kabul ediyorsunuz?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Euro, İngiliz Sterlini (GBP), ABD Doları ve Türk Lirası cinsinden güvenli online ödeme kabul ediyoruz."
                                }
                            }
                        ]
                    }
                },
                ar: {
                    "LocalBusiness": {
                        "@context": "https://schema.org/",
                        "@type": "LocalBusiness",
                        "name": "APL Transfers",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/beyoglu.webp`,
                        "@id": "36",
                        "url": `${env.websiteDomain}/ar/istanbul-airport-to-beyoglu`,
                        "telephone": "+90 212 123 4567",
                        "priceRange": "35",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Mühürdar Caddesi, No 14 D3, Kadıköy",
                            "addressLocality": "Istanbul",
                            "addressCountry": "TR",
                            "postalCode": "34710"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 40.987843,
                            "longitude": 29.022205
                        },
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                            ],
                            "opens": "00:00",
                            "closes": "23:59"
                        },
                        "sameAs": [
                            "https://www.facebook.com/APLTransfers",
                            "https://twitter.com/APLTransfers",
                            "https://www.instagram.com/APLTransfers"
                        ]
                    },
                    "Product": {
                        "@context": "https://schema.org/",
                        "@type": "Product",
                        "name": "تاكسي من مطار إسطنبول إلى بيوغلو",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/beyoglu.webp`,
                        "description": "احجز خدمة التاكسي السريعة والمريحة من مطار إسطنبول إلى بيوغلو مع APL Transfers. أسعار ثابتة، استقبال مجاني، وخدمة متوفرة 24/7.",
                        "brand": "APL Transfers",
                        "sku": "IST-BEY-001",
                        "offers": {
                            "@type": "عرض",
                            "url": `${env.websiteDomain}/ar/istanbul-airport-to-beyoglu`,
                            "priceCurrency": "EUR",
                            "price": "35.00",
                            "priceValidUntil": "2025-12-31",
                            "availability": "https://schema.org/InStock",
                            "itemCondition": "https://schema.org/NewCondition"
                        },
                        "aggregateRating": {
                            "@type": "التقييم_الإجمالي",
                            "ratingValue": "4.9",
                            "bestRating": "5",
                            "worstRating": "1",
                            "ratingCount": 1900,
                            "reviewCount": 1900
                        },
                        "review": {
                            "@type": "مراجعة",
                            "name": "سارة تومسون",
                            "reviewBody": "خدمة رائعة! كان السائق بانتظاري في مطار إسطنبول، كان محترفًا للغاية، وكانت الرحلة إلى بيوغلو سلسة وخالية من التوتر.",
                            "itemReviewed": {
                                "@type": "شيء",
                                "name": "تاكسي من مطار إسطنبول إلى بيوغلو"
                            },
                            "reviewRating": {
                                "@type": "تقييم",
                                "ratingValue": "5",
                                "bestRating": "5",
                                "worstRating": "1"
                            },
                            "datePublished": "2025-03-18",
                            "author": {
                                "@type": "شخص",
                                "name": "سارة تومسون"
                            },
                            "publisher": {
                                "@type": "منظمة",
                                "name": "Trustpilot"
                            }
                        }
                    },
                    "FAQPage": {
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "هل تتابعون رحلات الطيران، وهل سيتم تحميلي تكلفة إضافية إذا تأخرت رحلتي؟",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "نعم، نتابع رحلتك في الوقت الفعلي. إذا تأخرت رحلتك، نقوم بتعديل وقت الاستقبال وفقًا لذلك، ولن يتم فرض أي رسوم إضافية على التأخير."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "أين سيلتقيني السائق في مطار إسطنبول؟",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "سيلتقيك السائق في صالة الوصول بمطار إسطنبول عند مكتب APL Transfers، حاملًا لوحة تحمل اسمك لسهولة التعرف عليه."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "هل أسعار التاكسي من مطار إسطنبول إلى بيوغلو ثابتة؟",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "نعم، جميع أسعار التاكسي لدينا ثابتة ولا توجد رسوم مخفية، حيث نقدم أسعارًا شفافة ومنافسة."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "هل يمكنني إلغاء حجزي مجانًا لرحلات النقل من مطار إسطنبول إلى بيوغلو؟",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "نعم، يمكنك إلغاء الحجز مجانًا حتى 24 ساعة قبل موعد الوصول."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "ما طرق الدفع التي تقبلونها لعمليات النقل من مطار إسطنبول؟",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "نقبل المدفوعات عبر الإنترنت بشكل آمن بعملات اليورو (EUR)، الجنيه الإسترليني (GBP)، الدولار الأمريكي (USD)، والليرة التركية (TRY)."
                                }
                            }
                        ]
                    }

                },
                es: {
                    "LocalBusiness": {
                        "@context": "https://schema.org/",
                        "@type": "LocalBusiness",
                        "name": "APL Transfers",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/beyoglu.webp`,
                        "@id": "36",
                        "url": `${env.websiteDomain}/es/istanbul-airport-to-beyoglu`,
                        "telephone": "+90 212 123 4567",
                        "priceRange": "35",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Mühürdar Caddesi, No 14 D3, Kadıköy",
                            "addressLocality": "Istanbul",
                            "addressCountry": "TR",
                            "postalCode": "34710"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 40.987843,
                            "longitude": 29.022205
                        },
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                            ],
                            "opens": "00:00",
                            "closes": "23:59"
                        },
                        "sameAs": [
                            "https://www.facebook.com/APLTransfers",
                            "https://twitter.com/APLTransfers",
                            "https://www.instagram.com/APLTransfers"
                        ]
                    },
                    "Product": {
                        "@context": "https://schema.org/",
                        "@type": "Product",
                        "name": "Taxi del Aeropuerto de Estambul a Beyoğlu",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/beyoglu.webp`,
                        "description": "Reserva un servicio de taxi rápido y cómodo desde el Aeropuerto de Estambul a Beyoğlu con APL Transfers. Precios fijos, recepción gratuita y servicio disponible las 24 horas, todos los días.",
                        "brand": "APL Transfers",
                        "sku": "IST-BEY-001",
                        "offers": {
                            "@type": "Oferta",
                            "url": `${env.websiteDomain}/es/istanbul-airport-to-beyoglu`,
                            "priceCurrency": "EUR",
                            "price": "35.00",
                            "priceValidUntil": "2025-12-31",
                            "availability": "https://schema.org/InStock",
                            "itemCondition": "https://schema.org/NewCondition"
                        },
                        "aggregateRating": {
                            "@type": "ValoraciónGlobal",
                            "ratingValue": "4.9",
                            "bestRating": "5",
                            "worstRating": "1",
                            "ratingCount": 1900,
                            "reviewCount": 1900
                        },
                        "review": {
                            "@type": "Reseña",
                            "name": "Sarah Thompson",
                            "reviewBody": "¡Servicio excelente! Mi conductor me estaba esperando en el Aeropuerto de Estambul, fue muy profesional y el viaje a Beyoğlu fue cómodo y sin estrés.",
                            "itemReviewed": {
                                "@type": "Cosa",
                                "name": "Taxi del Aeropuerto de Estambul a Beyoğlu"
                            },
                            "reviewRating": {
                                "@type": "Calificación",
                                "ratingValue": "5",
                                "bestRating": "5",
                                "worstRating": "1"
                            },
                            "datePublished": "2025-03-18",
                            "author": {
                                "@type": "Persona",
                                "name": "Sarah Thompson"
                            },
                            "publisher": {
                                "@type": "Organización",
                                "name": "Trustpilot"
                            }
                        }
                    },
                    "FAQPage": {
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "¿Hacen seguimiento de los vuelos y me cobrarán si mi vuelo se retrasa?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Sí, hacemos un seguimiento en tiempo real de tu vuelo. Si tu vuelo se retrasa, ajustamos la hora de recogida en consecuencia y no se te cobrará ningún cargo adicional por el retraso."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "¿Dónde me encontrará mi conductor en el Aeropuerto de Estambul?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Tu conductor te esperará en la sala de llegadas del Aeropuerto de Estambul, junto a nuestra oficina de APL Transfers, con un cartel con tu nombre para que puedas identificarlo fácilmente."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "¿Las tarifas de taxi del Aeropuerto de Estambul a Beyoğlu son fijas?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Sí, todas nuestras tarifas de taxi son fijas y no hay cargos ocultos. Ofrecemos precios transparentes y competitivos."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "¿Puedo cancelar gratuitamente mi traslado del Aeropuerto de Estambul a Beyoğlu?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Sí, puedes cancelar tu reserva sin cargo hasta 24 horas antes de la llegada."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "¿Qué métodos de pago aceptan para los traslados desde el Aeropuerto de Estambul?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Aceptamos pagos en línea de manera segura en euros (EUR), libras esterlinas (GBP), dólares estadounidenses (USD) y liras turcas (TRY)."
                                }
                            }
                        ]
                    }

                },
                it: {
                    "LocalBusiness": {
                        "@context": "https://schema.org/",
                        "@type": "LocalBusiness",
                        "name": "APL Transfers",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/beyoglu.webp`,
                        "@id": "36",
                        "url": `${env.websiteDomain}/it/istanbul-airport-to-beyoglu`,
                        "telephone": "+90 212 123 4567",
                        "priceRange": "35",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Mühürdar Caddesi, No 14 D3, Kadıköy",
                            "addressLocality": "Istanbul",
                            "addressCountry": "TR",
                            "postalCode": "34710"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 40.987843,
                            "longitude": 29.022205
                        },
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                            ],
                            "opens": "00:00",
                            "closes": "23:59"
                        },
                        "sameAs": [
                            "https://www.facebook.com/APLTransfers",
                            "https://twitter.com/APLTransfers",
                            "https://www.instagram.com/APLTransfers"
                        ]
                    },
                    "Product": {
                        "@context": "https://schema.org/",
                        "@type": "Product",
                        "name": "Taxi dall'Aeroporto di Istanbul a Beyoğlu",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/beyoglu.webp`,
                        "description": "Prenota un servizio taxi veloce e confortevole dall'Aeroporto di Istanbul a Beyoğlu con APL Transfers. Prezzi fissi, accoglienza gratuita e servizio disponibile 24 ore su 24, 7 giorni su 7.",
                        "brand": "APL Transfers",
                        "sku": "IST-BEY-001",
                        "offers": {
                            "@type": "Offerta",
                            "url": `${env.websiteDomain}/it/istanbul-airport-to-beyoglu`,
                            "priceCurrency": "EUR",
                            "price": "35.00",
                            "priceValidUntil": "2025-12-31",
                            "availability": "https://schema.org/InStock",
                            "itemCondition": "https://schema.org/NewCondition"
                        },
                        "aggregateRating": {
                            "@type": "ValutazioneAggregata",
                            "ratingValue": "4.9",
                            "bestRating": "5",
                            "worstRating": "1",
                            "ratingCount": 1900,
                            "reviewCount": 1900
                        },
                        "review": {
                            "@type": "Recensione",
                            "name": "Sarah Thompson",
                            "reviewBody": "Servizio eccellente! Il mio autista mi stava aspettando all'Aeroporto di Istanbul, è stato molto professionale e il viaggio fino a Beyoğlu è stato comodo e senza stress.",
                            "itemReviewed": {
                                "@type": "Cosa",
                                "name": "Taxi dall'Aeroporto di Istanbul a Beyoğlu"
                            },
                            "reviewRating": {
                                "@type": "Valutazione",
                                "ratingValue": "5",
                                "bestRating": "5",
                                "worstRating": "1"
                            },
                            "datePublished": "2025-03-18",
                            "author": {
                                "@type": "Persona",
                                "name": "Sarah Thompson"
                            },
                            "publisher": {
                                "@type": "Organizzazione",
                                "name": "Trustpilot"
                            }
                        }
                    },
                    "FAQPage": {
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "Monitorate i voli e mi verrà addebitato un costo se il mio volo è in ritardo?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Sì, monitoriamo il tuo volo in tempo reale. Se il tuo volo è in ritardo, adegueremo l'orario di ritiro di conseguenza e non ti verrà addebitato alcun costo aggiuntivo per il ritardo."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Dove mi incontrerà il mio autista all'Aeroporto di Istanbul?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Il tuo autista ti aspetterà nella sala arrivi dell'Aeroporto di Istanbul, vicino al nostro ufficio APL Transfers, con un cartello con il tuo nome per una facile identificazione."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Le tariffe dei taxi dall'Aeroporto di Istanbul a Beyoğlu sono fisse?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Sì, tutte le nostre tariffe taxi sono fisse, senza costi nascosti. Offriamo prezzi trasparenti e competitivi."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Posso cancellare gratuitamente il mio trasferimento dall'Aeroporto di Istanbul a Beyoğlu?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Sì, puoi cancellare la tua prenotazione gratuitamente fino a 24 ore prima dell'arrivo."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Quali metodi di pagamento accettate per i trasferimenti dall'Aeroporto di Istanbul?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Accettiamo pagamenti online sicuri in euro (EUR), sterline britanniche (GBP), dollari statunitensi (USD) e lire turche (TRY)."
                                }
                            }
                        ]
                    }
                },
                ru: {
                    "LocalBusiness": {
                        "@context": "https://schema.org/",
                        "@type": "LocalBusiness",
                        "name": "APL Transfers",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/beyoglu.webp`,
                        "@id": "36",
                        "url": `${env.websiteDomain}/ru/istanbul-airport-to-beyoglu`,
                        "telephone": "+90 212 123 4567",
                        "priceRange": "35",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Mühürdar Caddesi, No 14 D3, Kadıköy",
                            "addressLocality": "Istanbul",
                            "addressCountry": "TR",
                            "postalCode": "34710"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 40.987843,
                            "longitude": 29.022205
                        },
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                            ],
                            "opens": "00:00",
                            "closes": "23:59"
                        },
                        "sameAs": [
                            "https://www.facebook.com/APLTransfers",
                            "https://twitter.com/APLTransfers",
                            "https://www.instagram.com/APLTransfers"
                        ]
                    },
                    "Product": {
                        "@context": "https://schema.org/",
                        "@type": "Product",
                        "name": "Такси из аэропорта Стамбула в Бейоглу",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/beyoglu.webp`,
                        "description": "Забронируйте быстрый и комфортный трансфер на такси из аэропорта Стамбула в Бейоглу с APL Transfers. Фиксированные цены, бесплатная встреча и круглосуточное обслуживание 7 дней в неделю.",
                        "brand": "APL Transfers",
                        "sku": "IST-BEY-001",
                        "offers": {
                            "@type": "Предложение",
                            "url": `${env.websiteDomain}/ru/istanbul-airport-to-beyoglu`,
                            "priceCurrency": "EUR",
                            "price": "35.00",
                            "priceValidUntil": "2025-12-31",
                            "availability": "https://schema.org/InStock",
                            "itemCondition": "https://schema.org/NewCondition"
                        },
                        "aggregateRating": {
                            "@type": "ОбщийРейтинг",
                            "ratingValue": "4.9",
                            "bestRating": "5",
                            "worstRating": "1",
                            "ratingCount": 1900,
                            "reviewCount": 1900
                        },
                        "review": {
                            "@type": "Отзыв",
                            "name": "Сара Томпсон",
                            "reviewBody": "Отличный сервис! Водитель ждал меня в аэропорту Стамбула, был очень профессионален, а поездка в Бейоглу прошла комфортно и без стресса.",
                            "itemReviewed": {
                                "@type": "Вещь",
                                "name": "Такси из аэропорта Стамбула в Бейоглу"
                            },
                            "reviewRating": {
                                "@type": "Оценка",
                                "ratingValue": "5",
                                "bestRating": "5",
                                "worstRating": "1"
                            },
                            "datePublished": "2025-03-18",
                            "author": {
                                "@type": "Человек",
                                "name": "Сара Томпсон"
                            },
                            "publisher": {
                                "@type": "Организация",
                                "name": "Trustpilot"
                            }
                        }
                    },
                    "FAQPage": {
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "Вы отслеживаете рейсы, и будет ли взиматься плата, если мой рейс задержится?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Да, мы отслеживаем ваш рейс в реальном времени. Если ваш рейс задерживается, мы корректируем время подачи автомобиля, и с вас не будет взиматься дополнительная плата за задержку."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Где меня встретит водитель в аэропорту Стамбула?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Ваш водитель встретит вас в зале прилета аэропорта Стамбула у офиса APL Transfers с табличкой с вашим именем для удобства идентификации."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Являются ли тарифы на такси из аэропорта Стамбула в Бейоглу фиксированными?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Да, все наши тарифы на такси фиксированные, без скрытых платежей. Мы предлагаем прозрачные и конкурентоспособные цены."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Могу ли я бесплатно отменить трансфер из аэропорта Стамбула в Бейоглу?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Да, вы можете отменить бронь бесплатно за 24 часа до прибытия."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Какие способы оплаты вы принимаете для трансферов из аэропорта Стамбула?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Мы принимаем безопасные онлайн-платежи в евро (EUR), фунтах стерлингов (GBP), долларах США (USD) и турецких лирах (TRY)."
                                }
                            }
                        ]
                    }
                },
                zh: {
                    "LocalBusiness": {
                        "@context": "https://schema.org/",
                        "@type": "LocalBusiness",
                        "name": "APL Transfers",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/beyoglu.webp`,
                        "@id": "36",
                        "url": `${env.websiteDomain}/zh/istanbul-airport-to-beyoglu`,
                        "telephone": "+90 212 123 4567",
                        "priceRange": "35",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Mühürdar Caddesi, No 14 D3, Kadıköy",
                            "addressLocality": "Istanbul",
                            "addressCountry": "TR",
                            "postalCode": "34710"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 40.987843,
                            "longitude": 29.022205
                        },
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                            ],
                            "opens": "00:00",
                            "closes": "23:59"
                        },
                        "sameAs": [
                            "https://www.facebook.com/APLTransfers",
                            "https://twitter.com/APLTransfers",
                            "https://www.instagram.com/APLTransfers"
                        ]
                    },
                    "Product": {
                        "@context": "https://schema.org/",
                        "@type": "Product",
                        "name": "伊斯坦布尔机场至贝尤格鲁出租车",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/beyoglu.webp`,
                        "description": "通过 APL Transfers 预订从伊斯坦布尔机场到贝尤格鲁的快速便捷出租车服务。固定价格，免费接机，全天候 24/7 服务。",
                        "brand": "APL Transfers",
                        "sku": "IST-BEY-001",
                        "offers": {
                            "@type": "优惠",
                            "url": `${env.websiteDomain}/zh/istanbul-airport-to-beyoglu`,
                            "priceCurrency": "EUR",
                            "price": "35.00",
                            "priceValidUntil": "2025-12-31",
                            "availability": "https://schema.org/InStock",
                            "itemCondition": "https://schema.org/NewCondition"
                        },
                        "aggregateRating": {
                            "@type": "综合评分",
                            "ratingValue": "4.9",
                            "bestRating": "5",
                            "worstRating": "1",
                            "ratingCount": 1900,
                            "reviewCount": 1900
                        },
                        "review": {
                            "@type": "评价",
                            "name": "莎拉·汤普森",
                            "reviewBody": "非常棒的服务！我的司机在伊斯坦布尔机场等候，非常专业，前往贝尤格鲁的旅程顺畅无忧。",
                            "itemReviewed": {
                                "@type": "物品",
                                "name": "伊斯坦布尔机场至贝尤格鲁出租车"
                            },
                            "reviewRating": {
                                "@type": "评分",
                                "ratingValue": "5",
                                "bestRating": "5",
                                "worstRating": "1"
                            },
                            "datePublished": "2025-03-18",
                            "author": {
                                "@type": "人",
                                "name": "莎拉·汤普森"
                            },
                            "publisher": {
                                "@type": "组织",
                                "name": "Trustpilot"
                            }
                        },
                        "FAQPage": {}

                    },
                    "FAQPage": {
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "你们会跟踪航班吗？如果我的航班延误，我需要支付额外费用吗？",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "是的，我们会实时跟踪您的航班。如果您的航班延误，我们会相应调整您的接机时间，不会收取额外费用。"
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "在伊斯坦布尔机场，我的司机会在哪里接我？",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "您的司机将在伊斯坦布尔机场的到达大厅等待您，靠近 APL Transfers 办公室，并举着带有您姓名的牌子，方便您识别。"
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "伊斯坦布尔机场到贝尤格鲁的出租车价格是固定的吗？",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "是的，我们所有的出租车价格都是固定的，没有隐藏费用。我们提供透明且有竞争力的价格。"
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "我可以免费取消从伊斯坦布尔机场到贝尤格鲁的接送服务吗？",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "是的，您可以在抵达前 24 小时内免费取消预订。"
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "你们接受哪些支付方式用于伊斯坦布尔机场的接送？",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "我们接受安全的在线支付，包括欧元 (EUR)、英镑 (GBP)、美元 (USD) 和土耳其里拉 (TRY)。"
                                }
                            }
                        ]
                    }
                },

            },
            "/istanbul-airport-to-kadikoy": {
                en: {
                    "LocalBusiness": {
                        "@context": "https://schema.org/",
                        "@type": "LocalBusiness",
                        "name": "APL Transfers",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/kadikoy.webp`,
                        "@id": "36",
                        "url": `${env.websiteDomain}/istanbul-airport-to-kadikoy`,
                        "telephone": "+90 212 123 4567",
                        "priceRange": "35",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Mühürdar Caddesi, No 14 D3, Kadıköy",
                            "addressLocality": "Istanbul",
                            "addressCountry": "TR",
                            "postalCode": "34710"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 40.987843,
                            "longitude": 29.022205
                        },
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                            ],
                            "opens": "00:00",
                            "closes": "23:59"
                        },
                        "sameAs": [
                            "https://www.facebook.com/APLTransfers",
                            "https://twitter.com/APLTransfers",
                            "https://www.instagram.com/APLTransfers"
                        ]
                    },
                    "Product": {
                        "@context": "https://schema.org/",
                        "@type": "Product",
                        "name": "Istanbul Airport to Kadıköy Taxi Transfer",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/kadikoy.webp`,
                        "description": "Book a premium taxi transfer from Istanbul Airport to Kadıköy with APL Transfers. Fixed price, free meet & greet, and 24/7 service. No extra charge for flight delays.",
                        "brand": "APL Transfers",
                        "sku": "IST-KDK-001",
                        "offers": {
                            "@type": "Offer",
                            "url": `${env.websiteDomain}/istanbul-airport-to-kadikoy`,
                            "priceCurrency": "EUR",
                            "price": "35.00",
                            "priceValidUntil": "2025-12-31",
                            "availability": "https://schema.org/InStock",
                            "itemCondition": "https://schema.org/NewCondition"
                        },
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.9",
                            "bestRating": "5",
                            "worstRating": "1",
                            "ratingCount": 2200,
                            "reviewCount": 2200
                        },
                        "review": {
                            "@type": "Review",
                            "name": "Michael Williams",
                            "reviewBody": "Super easy transfer! The driver was waiting at Istanbul Airport, very professional, and the ride to Kadıköy was smooth. Great service, highly recommend!",
                            "itemReviewed": {
                                "@type": "Thing",
                                "name": "Istanbul Airport to Kadıköy Taxi Transfer"
                            },
                            "reviewRating": {
                                "@type": "Rating",
                                "ratingValue": "5",
                                "bestRating": "5",
                                "worstRating": "1"
                            },
                            "datePublished": "2025-03-18",
                            "author": {
                                "@type": "Person",
                                "name": "Michael Williams"
                            },
                            "publisher": {
                                "@type": "Organization",
                                "name": "Trustpilot"
                            }
                        }
                    },
                    "FAQPage": {
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "Do you track flights, and will I be charged if my flight is delayed?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, we track your flight in real-time. If your flight is delayed, we adjust your pickup time accordingly, and you will not be charged extra for delays."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Where will my driver meet me at Istanbul Airport?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Your driver will meet you by our APL Transfers office in the Arrival Hall at Istanbul Airport, holding a name board for easy identification."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Are the taxi prices from Istanbul Airport to Kadıköy fixed?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, all our taxi prices are fixed with no hidden charges, providing transparent and competitive rates."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you offer free cancellations for Istanbul Airport to Kadıköy transfers?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, you can cancel your booking free of charge up to 24 hours before arrival."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What payment methods do you accept for Istanbul Airport transfers?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "We accept payments in Euro, GBP, US Dollar, and Turkish Lira via secure online payment."
                                }
                            }
                        ]
                    }

                },
                tr: {
                    "LocalBusiness": {
                        "@context": "https://schema.org/",
                        "@type": "LocalBusiness",
                        "name": "APL Transfers",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/kadikoy.webp`,
                        "@id": "36",
                        "url": `${env.websiteDomain}/tr/istanbul-airport-to-kadikoy`,
                        "telephone": "+90 212 123 4567",
                        "priceRange": "35",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Mühürdar Caddesi, No 14 D3, Kadıköy",
                            "addressLocality": "Istanbul",
                            "addressCountry": "TR",
                            "postalCode": "34710"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 40.987843,
                            "longitude": 29.022205
                        },
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                            ],
                            "opens": "00:00",
                            "closes": "23:59"
                        },
                        "sameAs": [
                            "https://www.facebook.com/APLTransfers",
                            "https://twitter.com/APLTransfers",
                            "https://www.instagram.com/APLTransfers"
                        ]
                    },
                    "Product": {
                        "@context": "https://schema.org/",
                        "@type": "Product",
                        "name": "İstanbul Havalimanı Kadıköy Taksi Transferi",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/kadikoy.webp`,
                        "description": "APL Transfers ile İstanbul Havalimanı'ndan Kadıköy'e premium taksi transferinizi ayırtın. Sabit fiyat, ücretsiz karşılama ve 7/24 hizmet. Uçuş gecikmelerinde ek ücret yok.",
                        "brand": "APL Transfers",
                        "sku": "IST-KDK-001",
                        "offers": {
                            "@type": "Teklif",
                            "url": `${env.websiteDomain}/tr/istanbul-airport-to-kadikoy`,
                            "priceCurrency": "EUR",
                            "price": "35.00",
                            "priceValidUntil": "2025-12-31",
                            "availability": "https://schema.org/InStock",
                            "itemCondition": "https://schema.org/NewCondition"
                        },
                        "aggregateRating": {
                            "@type": "OrtalamaDeğerlendirme",
                            "ratingValue": "4.9",
                            "bestRating": "5",
                            "worstRating": "1",
                            "ratingCount": 2200,
                            "reviewCount": 2200
                        },
                        "review": {
                            "@type": "Yorum",
                            "name": "Michael Williams",
                            "reviewBody": "Son derece kolay bir transfer! Şoförüm İstanbul Havalimanı'nda beni bekliyordu, çok profesyoneldi ve Kadıköy'e yolculuk oldukça rahattı. Harika hizmet, şiddetle tavsiye ederim!",
                            "itemReviewed": {
                                "@type": "Thing",
                                "name": "İstanbul Havalimanı Kadıköy Taksi Transferi"
                            },
                            "reviewRating": {
                                "@type": "Derecelendirme",
                                "ratingValue": "5",
                                "bestRating": "5",
                                "worstRating": "1"
                            },
                            "datePublished": "2025-03-18",
                            "author": {
                                "@type": "Kişi",
                                "name": "Michael Williams"
                            },
                            "publisher": {
                                "@type": "Organizasyon",
                                "name": "Trustpilot"
                            }
                        }
                    }
                    ,
                    "FAQPage": {
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "Uçuşları takip ediyor musunuz ve uçuşum gecikirse ek ücret öder miyim?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Evet, uçuşunuzu gerçek zamanlı olarak takip ediyoruz. Eğer uçuşunuz gecikirse, buna göre transfer saatinizi ayarlıyoruz ve gecikmeler için ekstra ücret talep etmiyoruz."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "İstanbul Havalimanı'nda şoförüm beni nerede karşılayacak?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Şoförünüz, İstanbul Havalimanı Geliş Salonu'ndaki APL Transfers ofisimizin yanında, isminizin yazılı olduğu bir pano tutarak sizi karşılayacaktır."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "İstanbul Havalimanı'ndan Kadıköy'e taksi ücretleri sabit mi?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Evet, tüm taksi fiyatlarımız sabittir ve gizli ücret içermez. Şeffaf ve rekabetçi fiyatlandırma sunuyoruz."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "İstanbul Havalimanı'ndan Kadıköy'e transferler için ücretsiz iptal imkanı sunuyor musunuz?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Evet, rezervasyonunuzu varıştan 24 saat öncesine kadar ücretsiz olarak iptal edebilirsiniz."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "İstanbul Havalimanı transferleri için hangi ödeme yöntemlerini kabul ediyorsunuz?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Ödemeleri Euro, GBP, Amerikan Doları ve Türk Lirası olarak güvenli çevrimiçi ödeme ile kabul ediyoruz."
                                }
                            }
                        ]
                    }

                },
                ar: {
                    "LocalBusiness": {
                        "@context": "https://schema.org/",
                        "@type": "LocalBusiness",
                        "name": "APL Transfers",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/kadikoy.webp`,
                        "@id": "36",
                        "url": `${env.websiteDomain}/ar/istanbul-airport-to-kadikoy`,
                        "telephone": "+90 212 123 4567",
                        "priceRange": "35",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Mühürdar Caddesi, No 14 D3, Kadıköy",
                            "addressLocality": "Istanbul",
                            "addressCountry": "TR",
                            "postalCode": "34710"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 40.987843,
                            "longitude": 29.022205
                        },
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                            ],
                            "opens": "00:00",
                            "closes": "23:59"
                        },
                        "sameAs": [
                            "https://www.facebook.com/APLTransfers",
                            "https://twitter.com/APLTransfers",
                            "https://www.instagram.com/APLTransfers"
                        ]
                    },
                    "Product": {
                        "@context": "https://schema.org/",
                        "@type": "Product",
                        "name": "تاكسي من مطار إسطنبول إلى كاديكوي",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/kadikoy.webp`,
                        "description": "احجز خدمة تاكسي مميزة من مطار إسطنبول إلى كاديكوي مع APL Transfers. سعر ثابت، استقبال مجاني، وخدمة متاحة 24/7. لا توجد رسوم إضافية على تأخير الرحلات.",
                        "brand": "APL Transfers",
                        "sku": "IST-KDK-001",
                        "offers": {
                            "@type": "عرض",
                            "url": `${env.websiteDomain}/ar/istanbul-airport-to-kadikoy`,
                            "priceCurrency": "EUR",
                            "price": "35.00",
                            "priceValidUntil": "2025-12-31",
                            "availability": "https://schema.org/InStock",
                            "itemCondition": "https://schema.org/NewCondition"
                        },
                        "aggregateRating": {
                            "@type": "تقييم_إجمالي",
                            "ratingValue": "4.9",
                            "bestRating": "5",
                            "worstRating": "1",
                            "ratingCount": 2200,
                            "reviewCount": 2200
                        },
                        "review": {
                            "@type": "مراجعة",
                            "name": "مايكل ويليامز",
                            "reviewBody": "نقل سهل للغاية! كان السائق بانتظاري في مطار إسطنبول، كان محترفًا للغاية وكانت الرحلة إلى كاديكوي مريحة للغاية. خدمة رائعة، أوصي بها بشدة!",
                            "itemReviewed": {
                                "@type": "شيء",
                                "name": "تاكسي من مطار إسطنبول إلى كاديكوي"
                            },
                            "reviewRating": {
                                "@type": "تقييم",
                                "ratingValue": "5",
                                "bestRating": "5",
                                "worstRating": "1"
                            },
                            "datePublished": "2025-03-18",
                            "author": {
                                "@type": "شخص",
                                "name": "مايكل ويليامز"
                            },
                            "publisher": {
                                "@type": "منظمة",
                                "name": "Trustpilot"
                            }
                        }
                    }
                    ,
                    "FAQPage": {
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "هل تتابعون الرحلات الجوية، وهل سيتم تحميلي رسوم إضافية إذا تأخرت رحلتي؟",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "نعم، نقوم بتتبع رحلتك الجوية في الوقت الفعلي. إذا تأخرت رحلتك، سنقوم بتعديل وقت الاستقبال وفقًا لذلك، ولن يتم تحصيل أي رسوم إضافية مقابل التأخير."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "أين سيلتقيني السائق في مطار إسطنبول؟",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "سيلتقيك السائق بجوار مكتب APL Transfers في صالة الوصول بمطار إسطنبول، وسيحمل لافتة تحمل اسمك لتسهيل التعرف عليه."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "هل أسعار التاكسي من مطار إسطنبول إلى كاديكوي ثابتة؟",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "نعم، جميع أسعار التاكسي لدينا ثابتة ولا توجد أي رسوم مخفية، مما يضمن أسعارًا شفافة وتنافسية."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "هل توفرون إلغاء مجاني لعمليات النقل من مطار إسطنبول إلى كاديكوي؟",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "نعم، يمكنك إلغاء الحجز مجانًا حتى 24 ساعة قبل موعد الوصول."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "ما هي طرق الدفع التي تقبلونها لعمليات النقل من مطار إسطنبول؟",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "نقبل المدفوعات باليورو والجنيه الإسترليني والدولار الأمريكي والليرة التركية عبر الدفع الآمن عبر الإنترنت."
                                }
                            }
                        ]
                    }

                },
                es: {
                    "LocalBusiness": {
                        "@context": "https://schema.org/",
                        "@type": "LocalBusiness",
                        "name": "APL Transfers",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/kadikoy.webp`,
                        "@id": "36",
                        "url": `${env.websiteDomain}/es/istanbul-airport-to-kadikoy`,
                        "telephone": "+90 212 123 4567",
                        "priceRange": "35",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Mühürdar Caddesi, No 14 D3, Kadıköy",
                            "addressLocality": "Istanbul",
                            "addressCountry": "TR",
                            "postalCode": "34710"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 40.987843,
                            "longitude": 29.022205
                        },
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                            ],
                            "opens": "00:00",
                            "closes": "23:59"
                        },
                        "sameAs": [
                            "https://www.facebook.com/APLTransfers",
                            "https://twitter.com/APLTransfers",
                            "https://www.instagram.com/APLTransfers"
                        ]
                    },
                    "Product": {
                        "@context": "https://schema.org/",
                        "@type": "Product",
                        "name": "Taxi del Aeropuerto de Estambul a Kadıköy",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/kadikoy.webp`,
                        "description": "Reserva un traslado en taxi premium desde el Aeropuerto de Estambul a Kadıköy con APL Transfers. Precio fijo, recepción gratuita y servicio disponible las 24 horas. Sin cargos adicionales por retrasos de vuelos.",
                        "brand": "APL Transfers",
                        "sku": "IST-KDK-001",
                        "offers": {
                            "@type": "Oferta",
                            "url": `${env.websiteDomain}/es/istanbul-airport-to-kadikoy`,
                            "priceCurrency": "EUR",
                            "price": "35.00",
                            "priceValidUntil": "2025-12-31",
                            "availability": "https://schema.org/InStock",
                            "itemCondition": "https://schema.org/NewCondition"
                        },
                        "aggregateRating": {
                            "@type": "ValoraciónAgregada",
                            "ratingValue": "4.9",
                            "bestRating": "5",
                            "worstRating": "1",
                            "ratingCount": 2200,
                            "reviewCount": 2200
                        },
                        "review": {
                            "@type": "Reseña",
                            "name": "Michael Williams",
                            "reviewBody": "¡Traslado súper fácil! Mi conductor me estaba esperando en el Aeropuerto de Estambul, fue muy profesional y el viaje a Kadıköy fue muy cómodo. ¡Un servicio excelente, lo recomiendo totalmente!",
                            "itemReviewed": {
                                "@type": "Cosa",
                                "name": "Taxi del Aeropuerto de Estambul a Kadıköy"
                            },
                            "reviewRating": {
                                "@type": "Calificación",
                                "ratingValue": "5",
                                "bestRating": "5",
                                "worstRating": "1"
                            },
                            "datePublished": "2025-03-18",
                            "author": {
                                "@type": "Persona",
                                "name": "Michael Williams"
                            },
                            "publisher": {
                                "@type": "Organización",
                                "name": "Trustpilot"
                            }
                        }
                    }
                    ,
                    "FAQPage": {
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "¿Hacen seguimiento de los vuelos y me cobrarán si mi vuelo se retrasa?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Sí, hacemos seguimiento de tu vuelo en tiempo real. Si tu vuelo se retrasa, ajustaremos la hora de recogida en consecuencia y no se te cobrará extra por los retrasos."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "¿Dónde me encontrará mi conductor en el Aeropuerto de Estambul?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Tu conductor te esperará junto a nuestra oficina de APL Transfers en la Sala de Llegadas del Aeropuerto de Estambul, sosteniendo un cartel con tu nombre para facilitar la identificación."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "¿Las tarifas de taxi desde el Aeropuerto de Estambul a Kadıköy son fijas?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Sí, todas nuestras tarifas de taxi son fijas y sin cargos ocultos, ofreciendo precios transparentes y competitivos."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "¿Ofrecen cancelaciones gratuitas para los traslados del Aeropuerto de Estambul a Kadıköy?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Sí, puedes cancelar tu reserva sin cargo hasta 24 horas antes de la llegada."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "¿Qué métodos de pago aceptan para los traslados del Aeropuerto de Estambul?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Aceptamos pagos en euros, libras esterlinas, dólares estadounidenses y liras turcas a través de pago seguro en línea."
                                }
                            }
                        ]
                    }

                },
                it: {
                    "LocalBusiness": {
                        "@context": "https://schema.org/",
                        "@type": "LocalBusiness",
                        "name": "APL Transfers",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/kadikoy.webp`,
                        "@id": "36",
                        "url": `${env.websiteDomain}/it/istanbul-airport-to-kadikoy`,
                        "telephone": "+90 212 123 4567",
                        "priceRange": "35",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Mühürdar Caddesi, No 14 D3, Kadıköy",
                            "addressLocality": "Istanbul",
                            "addressCountry": "TR",
                            "postalCode": "34710"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 40.987843,
                            "longitude": 29.022205
                        },
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                            ],
                            "opens": "00:00",
                            "closes": "23:59"
                        },
                        "sameAs": [
                            "https://www.facebook.com/APLTransfers",
                            "https://twitter.com/APLTransfers",
                            "https://www.instagram.com/APLTransfers"
                        ]
                    },
                    "Product": {
                        "@context": "https://schema.org/",
                        "@type": "Product",
                        "name": "Taxi dall'Aeroporto di Istanbul a Kadıköy",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/kadikoy.webp`,
                        "description": "Prenota un trasferimento in taxi premium dall'Aeroporto di Istanbul a Kadıköy con APL Transfers. Prezzo fisso, accoglienza gratuita e servizio disponibile 24/7. Nessun costo aggiuntivo per ritardi dei voli.",
                        "brand": "APL Transfers",
                        "sku": "IST-KDK-001",
                        "offers": {
                            "@type": "Offerta",
                            "url": `${env.websiteDomain}/it/istanbul-airport-to-kadikoy`,
                            "priceCurrency": "EUR",
                            "price": "35.00",
                            "priceValidUntil": "2025-12-31",
                            "availability": "https://schema.org/InStock",
                            "itemCondition": "https://schema.org/NewCondition"
                        },
                        "aggregateRating": {
                            "@type": "ValutazioneAggregata",
                            "ratingValue": "4.9",
                            "bestRating": "5",
                            "worstRating": "1",
                            "ratingCount": 2200,
                            "reviewCount": 2200
                        },
                        "review": {
                            "@type": "Recensione",
                            "name": "Michael Williams",
                            "reviewBody": "Trasferimento super facile! Il mio autista mi stava aspettando all'Aeroporto di Istanbul, è stato molto professionale e il viaggio a Kadıköy è stato molto confortevole. Servizio eccellente, lo consiglio vivamente!",
                            "itemReviewed": {
                                "@type": "Cosa",
                                "name": "Taxi dall'Aeroporto di Istanbul a Kadıköy"
                            },
                            "reviewRating": {
                                "@type": "Valutazione",
                                "ratingValue": "5",
                                "bestRating": "5",
                                "worstRating": "1"
                            },
                            "datePublished": "2025-03-18",
                            "author": {
                                "@type": "Persona",
                                "name": "Michael Williams"
                            },
                            "publisher": {
                                "@type": "Organizzazione",
                                "name": "Trustpilot"
                            }
                        }
                    }
                    ,
                    "FAQPage": {
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "Monitorate i voli e mi verrà addebitato un costo se il mio volo è in ritardo?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Sì, monitoriamo il tuo volo in tempo reale. Se il tuo volo è in ritardo, adegueremo l'orario di ritiro di conseguenza e non ti verrà addebitato alcun costo aggiuntivo per il ritardo."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Dove mi incontrerà il mio autista all'Aeroporto di Istanbul?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Il tuo autista ti aspetterà presso il nostro ufficio APL Transfers nella Sala Arrivi dell'Aeroporto di Istanbul, tenendo un cartello con il tuo nome per un facile riconoscimento."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Le tariffe del taxi dall'Aeroporto di Istanbul a Kadıköy sono fisse?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Sì, tutte le nostre tariffe taxi sono fisse e senza costi nascosti, offrendo prezzi trasparenti e competitivi."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Offrite cancellazioni gratuite per i trasferimenti dall'Aeroporto di Istanbul a Kadıköy?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Sì, puoi cancellare la tua prenotazione gratuitamente fino a 24 ore prima dell'arrivo."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Quali metodi di pagamento accettate per i trasferimenti dall'Aeroporto di Istanbul?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Accettiamo pagamenti in Euro, GBP, Dollaro USA e Lira Turca tramite pagamento sicuro online."
                                }
                            }
                        ]
                    }

                },
                ru: {
                    "LocalBusiness": {
                        "@context": "https://schema.org/",
                        "@type": "LocalBusiness",
                        "name": "APL Transfers",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/kadikoy.webp`,
                        "@id": "36",
                        "url": `${env.websiteDomain}/ru/istanbul-airport-to-kadikoy`,
                        "telephone": "+90 212 123 4567",
                        "priceRange": "35",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Mühürdar Caddesi, No 14 D3, Kadıköy",
                            "addressLocality": "Istanbul",
                            "addressCountry": "TR",
                            "postalCode": "34710"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 40.987843,
                            "longitude": 29.022205
                        },
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                            ],
                            "opens": "00:00",
                            "closes": "23:59"
                        },
                        "sameAs": [
                            "https://www.facebook.com/APLTransfers",
                            "https://twitter.com/APLTransfers",
                            "https://www.instagram.com/APLTransfers"
                        ]
                    },
                    "Product": {
                        "@context": "https://schema.org/",
                        "@type": "Product",
                        "name": "Такси из аэропорта Стамбула в Кадыкёй",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/kadikoy.webp`,
                        "description": "Закажите премиальный трансфер на такси из аэропорта Стамбула в Кадыкёй с APL Transfers. Фиксированная цена, бесплатная встреча и обслуживание 24/7. Без дополнительных платежей за задержку рейса.",
                        "brand": "APL Transfers",
                        "sku": "IST-KDK-001",
                        "offers": {
                            "@type": "Предложение",
                            "url": `${env.websiteDomain}/ru/istanbul-airport-to-kadikoy`,
                            "priceCurrency": "EUR",
                            "price": "35.00",
                            "priceValidUntil": "2025-12-31",
                            "availability": "https://schema.org/InStock",
                            "itemCondition": "https://schema.org/NewCondition"
                        },
                        "aggregateRating": {
                            "@type": "ОбщийРейтинг",
                            "ratingValue": "4.9",
                            "bestRating": "5",
                            "worstRating": "1",
                            "ratingCount": 2200,
                            "reviewCount": 2200
                        },
                        "review": {
                            "@type": "Отзыв",
                            "name": "Майкл Уильямс",
                            "reviewBody": "Очень удобный трансфер! Водитель ждал меня в аэропорту Стамбула, был очень профессионален, а поездка в Кадыкёй прошла гладко. Отличный сервис, настоятельно рекомендую!",
                            "itemReviewed": {
                                "@type": "Объект",
                                "name": "Такси из аэропорта Стамбула в Кадыкёй"
                            },
                            "reviewRating": {
                                "@type": "Рейтинг",
                                "ratingValue": "5",
                                "bestRating": "5",
                                "worstRating": "1"
                            },
                            "datePublished": "2025-03-18",
                            "author": {
                                "@type": "Человек",
                                "name": "Майкл Уильямс"
                            },
                            "publisher": {
                                "@type": "Организация",
                                "name": "Trustpilot"
                            }
                        }
                    }
                    ,
                    "FAQPage": {
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "Вы отслеживаете рейсы, и будет ли взиматься плата, если мой рейс задержится?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Да, мы отслеживаем ваш рейс в режиме реального времени. Если ваш рейс задерживается, мы соответствующим образом корректируем время подачи такси, и дополнительная плата за задержку не взимается."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Где меня встретит водитель в аэропорту Стамбула?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Ваш водитель встретит вас рядом с офисом APL Transfers в зале прилета аэропорта Стамбула, держа табличку с вашим именем для удобства идентификации."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Фиксированные ли тарифы на такси из аэропорта Стамбула в Кадыкёй?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Да, все наши тарифы фиксированные, без скрытых платежей, что обеспечивает прозрачное и конкурентоспособное ценообразование."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Предоставляете ли вы бесплатную отмену бронирования для трансферов из аэропорта Стамбула в Кадыкёй?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Да, вы можете бесплатно отменить бронирование за 24 часа до прибытия."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Какие способы оплаты вы принимаете для трансферов из аэропорта Стамбула?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Мы принимаем оплату в евро, фунтах стерлингов, долларах США и турецких лирах через безопасный онлайн-платеж."
                                }
                            }
                        ]
                    }

                },
                zh: {
                    "LocalBusiness": {
                        "@context": "https://schema.org/",
                        "@type": "LocalBusiness",
                        "name": "APL Transfers",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/kadikoy.webp`,
                        "@id": "36",
                        "url": `${env.websiteDomain}/zh/istanbul-airport-to-kadikoy`,
                        "telephone": "+90 212 123 4567",
                        "priceRange": "35",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Mühürdar Caddesi, No 14 D3, Kadıköy",
                            "addressLocality": "Istanbul",
                            "addressCountry": "TR",
                            "postalCode": "34710"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 40.987843,
                            "longitude": 29.022205
                        },
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                            ],
                            "opens": "00:00",
                            "closes": "23:59"
                        },
                        "sameAs": [
                            "https://www.facebook.com/APLTransfers",
                            "https://twitter.com/APLTransfers",
                            "https://www.instagram.com/APLTransfers"
                        ]
                    },
                    "Product": {
                        "@context": "https://schema.org/",
                        "@type": "Product",
                        "name": "伊斯坦布尔机场至卡德柯伊出租车",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/kadikoy.webp`,
                        "description": "通过 APL Transfers 预订从伊斯坦布尔机场到卡德柯伊的优质出租车接送服务。固定价格，免费接机，24/7 全天候服务。航班延误无额外费用。",
                        "brand": "APL Transfers",
                        "sku": "IST-KDK-001",
                        "offers": {
                            "@type": "优惠",
                            "url": `${env.websiteDomain}/zh/istanbul-airport-to-kadikoy`,
                            "priceCurrency": "EUR",
                            "price": "35.00",
                            "priceValidUntil": "2025-12-31",
                            "availability": "https://schema.org/InStock",
                            "itemCondition": "https://schema.org/NewCondition"
                        },
                        "aggregateRating": {
                            "@type": "综合评分",
                            "ratingValue": "4.9",
                            "bestRating": "5",
                            "worstRating": "1",
                            "ratingCount": 2200,
                            "reviewCount": 2200
                        },
                        "review": {
                            "@type": "评论",
                            "name": "迈克尔·威廉姆斯",
                            "reviewBody": "超级便捷的接送！我的司机在伊斯坦布尔机场等着我，非常专业，前往卡德柯伊的旅程非常顺利。优质服务，强烈推荐！",
                            "itemReviewed": {
                                "@type": "物品",
                                "name": "伊斯坦布尔机场至卡德柯伊出租车"
                            },
                            "reviewRating": {
                                "@type": "评分",
                                "ratingValue": "5",
                                "bestRating": "5",
                                "worstRating": "1"
                            },
                            "datePublished": "2025-03-18",
                            "author": {
                                "@type": "人物",
                                "name": "迈克尔·威廉姆斯"
                            },
                            "publisher": {
                                "@type": "组织",
                                "name": "Trustpilot"
                            }
                        }
                    }
                    ,
                    "FAQPage": {
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "你们会追踪航班吗？如果我的航班延误，会收取额外费用吗？",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "是的，我们会实时追踪您的航班。如果您的航班延误，我们会相应调整接送时间，不会收取额外费用。"
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "我的司机会在伊斯坦布尔机场哪里接我？",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "您的司机将在伊斯坦布尔机场到达大厅的 APL Transfers 办公室旁等候，并举着带有您姓名的牌子，以便您轻松识别。"
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "从伊斯坦布尔机场到卡德柯伊的出租车价格是固定的吗？",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "是的，我们所有的出租车价格都是固定的，没有隐藏费用，提供透明且有竞争力的价格。"
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "你们提供伊斯坦布尔机场到卡德柯伊的免费取消服务吗？",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "是的，您可以在抵达前 24 小时内免费取消预订。"
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "你们接受哪些支付方式用于伊斯坦布尔机场接送服务？",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "我们接受欧元、英镑、美元和土耳其里拉的支付，并支持安全的在线支付。"
                                }
                            }
                        ]
                    }

                },
            },
            "/istanbul-airport-to-besiktas": {
                en: {
                    "LocalBusiness": {
                        "@context": "https://schema.org/",
                        "@type": "LocalBusiness",
                        "name": "APL Transfers",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/besiktas.webp`,
                        "@id": "37",
                        "url": `${env.websiteDomain}/istanbul-airport-to-besiktas`,
                        "telephone": "+90 212 123 4567",
                        "priceRange": "35",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Mühürdar Caddesi, No 14 D3, Kadıköy",
                            "addressLocality": "Istanbul",
                            "addressCountry": "TR",
                            "postalCode": "34710"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 40.987843,
                            "longitude": 29.022205
                        },
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                            ],
                            "opens": "00:00",
                            "closes": "23:59"
                        },
                        "sameAs": [
                            "https://www.facebook.com/APLTransfers",
                            "https://twitter.com/APLTransfers",
                            "https://www.instagram.com/APLTransfers"
                        ]
                    }
                    ,
                    "Product": {
                        "@context": "https://schema.org/",
                        "@type": "Product",
                        "name": "Istanbul Airport to Beşiktaş Taxi Transfer",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/besiktas.webp`,
                        "description": "Book a premium taxi transfer from Istanbul Airport to Beşiktaş with APL Transfers. Fixed price, free meet & greet, and 24/7 service. No extra charge for flight delays.",
                        "brand": "APL Transfers",
                        "sku": "IST-BES-001",
                        "offers": {
                            "@type": "Offer",
                            "url": `${env.websiteDomain}/istanbul-airport-to-besiktas`,
                            "priceCurrency": "EUR",
                            "price": "35.00",
                            "priceValidUntil": "2025-12-31",
                            "availability": "https://schema.org/InStock",
                            "itemCondition": "https://schema.org/NewCondition"
                        },
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.9",
                            "bestRating": "5",
                            "worstRating": "1",
                            "ratingCount": 2000,
                            "reviewCount": 2000
                        },
                        "review": {
                            "@type": "Review",
                            "name": "David Brown",
                            "reviewBody": "Fantastic service! My driver was on time, the ride to Beşiktaş was smooth, and the car was comfortable. Highly recommended!",
                            "itemReviewed": {
                                "@type": "Thing",
                                "name": "Istanbul Airport to Beşiktaş Taxi Transfer"
                            },
                            "reviewRating": {
                                "@type": "Rating",
                                "ratingValue": "5",
                                "bestRating": "5",
                                "worstRating": "1"
                            },
                            "datePublished": "2025-03-18",
                            "author": {
                                "@type": "Person",
                                "name": "David Brown"
                            },
                            "publisher": {
                                "@type": "Organization",
                                "name": "Trustpilot"
                            }
                        }
                    },
                    "FAQPage": {},
                },
                tr: {
                    "LocalBusiness": {
                        "@context": "https://schema.org/",
                        "@type": "LocalBusiness",
                        "name": "APL Transfers",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/besiktas.webp`,
                        "@id": "37",
                        "url": `${env.websiteDomain}/tr/istanbul-airport-to-besiktas`,
                        "telephone": "+90 212 123 4567",
                        "priceRange": "35",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Mühürdar Caddesi, No 14 D3, Kadıköy",
                            "addressLocality": "Istanbul",
                            "addressCountry": "TR",
                            "postalCode": "34710"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 40.987843,
                            "longitude": 29.022205
                        },
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                            ],
                            "opens": "00:00",
                            "closes": "23:59"
                        },
                        "sameAs": [
                            "https://www.facebook.com/APLTransfers",
                            "https://twitter.com/APLTransfers",
                            "https://www.instagram.com/APLTransfers"
                        ]
                    }
                    ,
                    "Product": {
                        "@context": "https://schema.org/",
                        "@type": "Product",
                        "name": "İstanbul Havalimanı Beşiktaş Taksi Transferi",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/besiktas.webp`,
                        "description": "APL Transfers ile İstanbul Havalimanı'ndan Beşiktaş'a premium taksi transferinizi ayırtın. Sabit fiyat, ücretsiz karşılama ve 7/24 hizmet. Uçuş gecikmelerinde ek ücret yok.",
                        "brand": "APL Transfers",
                        "sku": "IST-BES-001",
                        "offers": {
                            "@type": "Teklif",
                            "url": `${env.websiteDomain}/tr/istanbul-airport-to-besiktas`,
                            "priceCurrency": "EUR",
                            "price": "35.00",
                            "priceValidUntil": "2025-12-31",
                            "availability": "https://schema.org/InStock",
                            "itemCondition": "https://schema.org/NewCondition"
                        },
                        "aggregateRating": {
                            "@type": "OrtalamaDeğerlendirme",
                            "ratingValue": "4.9",
                            "bestRating": "5",
                            "worstRating": "1",
                            "ratingCount": 2000,
                            "reviewCount": 2000
                        },
                        "review": {
                            "@type": "Yorum",
                            "name": "David Brown",
                            "reviewBody": "Harika hizmet! Şoförüm tam zamanında geldi, Beşiktaş'a yolculuk çok rahattı ve araç oldukça konforluydu. Kesinlikle tavsiye ederim!",
                            "itemReviewed": {
                                "@type": "Thing",
                                "name": "İstanbul Havalimanı Beşiktaş Taksi Transferi"
                            },
                            "reviewRating": {
                                "@type": "Derecelendirme",
                                "ratingValue": "5",
                                "bestRating": "5",
                                "worstRating": "1"
                            },
                            "datePublished": "2025-03-18",
                            "author": {
                                "@type": "Kişi",
                                "name": "David Brown"
                            },
                            "publisher": {
                                "@type": "Organizasyon",
                                "name": "Trustpilot"
                            }
                        }
                    }
                    ,
                    "FAQPage": {},
                },
                ar: {
                    "LocalBusiness": {
                        "@context": "https://schema.org/",
                        "@type": "LocalBusiness",
                        "name": "APL Transfers",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/besiktas.webp`,
                        "@id": "37",
                        "url": `${env.websiteDomain}/ar/istanbul-airport-to-besiktas`,
                        "telephone": "+90 212 123 4567",
                        "priceRange": "35",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Mühürdar Caddesi, No 14 D3, Kadıköy",
                            "addressLocality": "Istanbul",
                            "addressCountry": "TR",
                            "postalCode": "34710"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 40.987843,
                            "longitude": 29.022205
                        },
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                            ],
                            "opens": "00:00",
                            "closes": "23:59"
                        },
                        "sameAs": [
                            "https://www.facebook.com/APLTransfers",
                            "https://twitter.com/APLTransfers",
                            "https://www.instagram.com/APLTransfers"
                        ]
                    }
                    ,
                    "Product": {
                        "@context": "https://schema.org/",
                        "@type": "Product",
                        "name": "تاكسي مطار إسطنبول إلى بشكتاش",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/besiktas.webp`,
                        "description": "احجز خدمة التاكسي الفاخرة من مطار إسطنبول إلى بشكتاش مع APL Transfers. سعر ثابت، استقبال مجاني، وخدمة 24/7. لا رسوم إضافية على تأخير الرحلات.",
                        "brand": "APL Transfers",
                        "sku": "IST-BES-001",
                        "offers": {
                            "@type": "عرض",
                            "url": `${env.websiteDomain}/ar/istanbul-airport-to-besiktas`,
                            "priceCurrency": "EUR",
                            "price": "35.00",
                            "priceValidUntil": "2025-12-31",
                            "availability": "https://schema.org/InStock",
                            "itemCondition": "https://schema.org/NewCondition"
                        },
                        "aggregateRating": {
                            "@type": "التقييم الإجمالي",
                            "ratingValue": "4.9",
                            "bestRating": "5",
                            "worstRating": "1",
                            "ratingCount": 2000,
                            "reviewCount": 2000
                        },
                        "review": {
                            "@type": "مراجعة",
                            "name": "ديفيد براون",
                            "reviewBody": "خدمة رائعة! كان السائق في الوقت المحدد، وكانت الرحلة إلى بشكتاش سلسة، وكانت السيارة مريحة للغاية. أنصح بها بشدة!",
                            "itemReviewed": {
                                "@type": "شيء",
                                "name": "تاكسي مطار إسطنبول إلى بشكتاش"
                            },
                            "reviewRating": {
                                "@type": "تقييم",
                                "ratingValue": "5",
                                "bestRating": "5",
                                "worstRating": "1"
                            },
                            "datePublished": "2025-03-18",
                            "author": {
                                "@type": "شخص",
                                "name": "ديفيد براون"
                            },
                            "publisher": {
                                "@type": "منظمة",
                                "name": "Trustpilot"
                            }
                        }
                    }
                    ,
                    "FAQPage": {},
                },
                es: {
                    "LocalBusiness": {
                        "@context": "https://schema.org/",
                        "@type": "LocalBusiness",
                        "name": "APL Transfers",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/besiktas.webp`,
                        "@id": "37",
                        "url": `${env.websiteDomain}/es/istanbul-airport-to-besiktas`,
                        "telephone": "+90 212 123 4567",
                        "priceRange": "35",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Mühürdar Caddesi, No 14 D3, Kadıköy",
                            "addressLocality": "Istanbul",
                            "addressCountry": "TR",
                            "postalCode": "34710"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 40.987843,
                            "longitude": 29.022205
                        },
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                            ],
                            "opens": "00:00",
                            "closes": "23:59"
                        },
                        "sameAs": [
                            "https://www.facebook.com/APLTransfers",
                            "https://twitter.com/APLTransfers",
                            "https://www.instagram.com/APLTransfers"
                        ]
                    }
                    ,
                    "Product": {
                        "@context": "https://schema.org/",
                        "@type": "Product",
                        "name": "Taxi del Aeropuerto de Estambul a Beşiktaş",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/besiktas.webp`,
                        "description": "Reserva un traslado en taxi premium desde el Aeropuerto de Estambul a Beşiktaş con APL Transfers. Precio fijo, recepción gratuita y servicio 24/7. Sin cargos adicionales por retrasos en los vuelos.",
                        "brand": "APL Transfers",
                        "sku": "IST-BES-001",
                        "offers": {
                            "@type": "Oferta",
                            "url": `${env.websiteDomain}/es/istanbul-airport-to-besiktas`,
                            "priceCurrency": "EUR",
                            "price": "35.00",
                            "priceValidUntil": "2025-12-31",
                            "availability": "https://schema.org/InStock",
                            "itemCondition": "https://schema.org/NewCondition"
                        },
                        "aggregateRating": {
                            "@type": "ValoraciónAgregada",
                            "ratingValue": "4.9",
                            "bestRating": "5",
                            "worstRating": "1",
                            "ratingCount": 2000,
                            "reviewCount": 2000
                        },
                        "review": {
                            "@type": "Reseña",
                            "name": "David Brown",
                            "reviewBody": "¡Servicio fantástico! Mi conductor llegó a tiempo, el viaje a Beşiktaş fue cómodo y el coche era muy confortable. ¡Muy recomendable!",
                            "itemReviewed": {
                                "@type": "Cosa",
                                "name": "Taxi del Aeropuerto de Estambul a Beşiktaş"
                            },
                            "reviewRating": {
                                "@type": "Calificación",
                                "ratingValue": "5",
                                "bestRating": "5",
                                "worstRating": "1"
                            },
                            "datePublished": "2025-03-18",
                            "author": {
                                "@type": "Persona",
                                "name": "David Brown"
                            },
                            "publisher": {
                                "@type": "Organización",
                                "name": "Trustpilot"
                            }
                        }
                    },
                    "FAQPage": {},
                },
                it: {
                    "LocalBusiness": {
                        "@context": "https://schema.org/",
                        "@type": "LocalBusiness",
                        "name": "APL Transfers",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/besiktas.webp`,
                        "@id": "37",
                        "url": `${env.websiteDomain}/it/istanbul-airport-to-besiktas`,
                        "telephone": "+90 212 123 4567",
                        "priceRange": "35",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Mühürdar Caddesi, No 14 D3, Kadıköy",
                            "addressLocality": "Istanbul",
                            "addressCountry": "TR",
                            "postalCode": "34710"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 40.987843,
                            "longitude": 29.022205
                        },
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                            ],
                            "opens": "00:00",
                            "closes": "23:59"
                        },
                        "sameAs": [
                            "https://www.facebook.com/APLTransfers",
                            "https://twitter.com/APLTransfers",
                            "https://www.instagram.com/APLTransfers"
                        ]
                    }
                    ,
                    "Product": {
                        "@context": "https://schema.org/",
                        "@type": "Product",
                        "name": "Taxi dall'Aeroporto di Istanbul a Beşiktaş",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/besiktas.webp`,
                        "description": "Prenota un trasferimento in taxi premium dall'Aeroporto di Istanbul a Beşiktaş con APL Transfers. Prezzo fisso, accoglienza gratuita e servizio 24/7. Nessun costo aggiuntivo per ritardi dei voli.",
                        "brand": "APL Transfers",
                        "sku": "IST-BES-001",
                        "offers": {
                            "@type": "Offerta",
                            "url": `${env.websiteDomain}/it/istanbul-airport-to-besiktas`,
                            "priceCurrency": "EUR",
                            "price": "35.00",
                            "priceValidUntil": "2025-12-31",
                            "availability": "https://schema.org/InStock",
                            "itemCondition": "https://schema.org/NewCondition"
                        },
                        "aggregateRating": {
                            "@type": "ValutazioneAggregata",
                            "ratingValue": "4.9",
                            "bestRating": "5",
                            "worstRating": "1",
                            "ratingCount": 2000,
                            "reviewCount": 2000
                        },
                        "review": {
                            "@type": "Recensione",
                            "name": "David Brown",
                            "reviewBody": "Servizio fantastico! Il mio autista è arrivato in orario, il viaggio fino a Beşiktaş è stato confortevole e l'auto molto comoda. Altamente consigliato!",
                            "itemReviewed": {
                                "@type": "Cosa",
                                "name": "Taxi dall'Aeroporto di Istanbul a Beşiktaş"
                            },
                            "reviewRating": {
                                "@type": "Valutazione",
                                "ratingValue": "5",
                                "bestRating": "5",
                                "worstRating": "1"
                            },
                            "datePublished": "2025-03-18",
                            "author": {
                                "@type": "Persona",
                                "name": "David Brown"
                            },
                            "publisher": {
                                "@type": "Organizzazione",
                                "name": "Trustpilot"
                            }
                        }
                    }
                    ,
                    "FAQPage": {},
                },
                ru: {
                    "LocalBusiness": {
                        "@context": "https://schema.org/",
                        "@type": "LocalBusiness",
                        "name": "APL Transfers",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/besiktas.webp`,
                        "@id": "37",
                        "url": `${env.websiteDomain}/ru/istanbul-airport-to-besiktas`,
                        "telephone": "+90 212 123 4567",
                        "priceRange": "35",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Mühürdar Caddesi, No 14 D3, Kadıköy",
                            "addressLocality": "Istanbul",
                            "addressCountry": "TR",
                            "postalCode": "34710"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 40.987843,
                            "longitude": 29.022205
                        },
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                            ],
                            "opens": "00:00",
                            "closes": "23:59"
                        },
                        "sameAs": [
                            "https://www.facebook.com/APLTransfers",
                            "https://twitter.com/APLTransfers",
                            "https://www.instagram.com/APLTransfers"
                        ]
                    }
                    ,
                    "Product": {
                        "@context": "https://schema.org/",
                        "@type": "Product",
                        "name": "Такси из аэропорта Стамбула в Бешикташ",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/besiktas.webp`,
                        "description": "Забронируйте премиальный трансфер на такси из аэропорта Стамбула в Бешикташ с APL Transfers. Фиксированная цена, бесплатная встреча и обслуживание 24/7. Без доплат за задержку рейса.",
                        "brand": "APL Transfers",
                        "sku": "IST-BES-001",
                        "offers": {
                            "@type": "Предложение",
                            "url": `${env.websiteDomain}/ru/istanbul-airport-to-besiktas`,
                            "priceCurrency": "EUR",
                            "price": "35.00",
                            "priceValidUntil": "2025-12-31",
                            "availability": "https://schema.org/InStock",
                            "itemCondition": "https://schema.org/NewCondition"
                        },
                        "aggregateRating": {
                            "@type": "ОбщийРейтинг",
                            "ratingValue": "4.9",
                            "bestRating": "5",
                            "worstRating": "1",
                            "ratingCount": 2000,
                            "reviewCount": 2000
                        },
                        "review": {
                            "@type": "Отзыв",
                            "name": "Дэвид Браун",
                            "reviewBody": "Отличный сервис! Водитель прибыл вовремя, поездка до Бешикташа была комфортной, а машина очень удобной. Очень рекомендую!",
                            "itemReviewed": {
                                "@type": "Объект",
                                "name": "Такси из аэропорта Стамбула в Бешикташ"
                            },
                            "reviewRating": {
                                "@type": "Рейтинг",
                                "ratingValue": "5",
                                "bestRating": "5",
                                "worstRating": "1"
                            },
                            "datePublished": "2025-03-18",
                            "author": {
                                "@type": "Человек",
                                "name": "Дэвид Браун"
                            },
                            "publisher": {
                                "@type": "Организация",
                                "name": "Trustpilot"
                            }
                        }
                    }
                    ,
                    "FAQPage": {},
                },
                zh: {
                    "LocalBusiness": {
                        "@context": "https://schema.org/",
                        "@type": "LocalBusiness",
                        "name": "APL Transfers",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/besiktas.webp`,
                        "@id": "37",
                        "url": `${env.websiteDomain}/zh/istanbul-airport-to-besiktas`,
                        "telephone": "+90 212 123 4567",
                        "priceRange": "35",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Mühürdar Caddesi, No 14 D3, Kadıköy",
                            "addressLocality": "Istanbul",
                            "addressCountry": "TR",
                            "postalCode": "34710"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 40.987843,
                            "longitude": 29.022205
                        },
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                            ],
                            "opens": "00:00",
                            "closes": "23:59"
                        },
                        "sameAs": [
                            "https://www.facebook.com/APLTransfers",
                            "https://twitter.com/APLTransfers",
                            "https://www.instagram.com/APLTransfers"
                        ]
                    }
                    ,
                    "Product": {
                        "@context": "https://schema.org/",
                        "@type": "Product",
                        "name": "伊斯坦布尔机场至贝西克塔斯出租车接送",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/besiktas.webp`,
                        "description": "通过 APL Transfers 预订从伊斯坦布尔机场到贝西克塔斯的豪华出租车接送服务。固定价格，免费迎接，24/7 全天候服务。航班延误无额外费用。",
                        "brand": "APL Transfers",
                        "sku": "IST-BES-001",
                        "offers": {
                            "@type": "优惠",
                            "url": `${env.websiteDomain}/zh/istanbul-airport-to-besiktas`,
                            "priceCurrency": "EUR",
                            "price": "35.00",
                            "priceValidUntil": "2025-12-31",
                            "availability": "https://schema.org/InStock",
                            "itemCondition": "https://schema.org/NewCondition"
                        },
                        "aggregateRating": {
                            "@type": "综合评分",
                            "ratingValue": "4.9",
                            "bestRating": "5",
                            "worstRating": "1",
                            "ratingCount": 2000,
                            "reviewCount": 2000
                        },
                        "review": {
                            "@type": "评论",
                            "name": "大卫·布朗",
                            "reviewBody": "非常棒的服务！我的司机准时到达，前往贝西克塔斯的旅程非常顺畅，车辆也很舒适。强烈推荐！",
                            "itemReviewed": {
                                "@type": "物品",
                                "name": "伊斯坦布尔机场至贝西克塔斯出租车接送"
                            },
                            "reviewRating": {
                                "@type": "评分",
                                "ratingValue": "5",
                                "bestRating": "5",
                                "worstRating": "1"
                            },
                            "datePublished": "2025-03-18",
                            "author": {
                                "@type": "人物",
                                "name": "大卫·布朗"
                            },
                            "publisher": {
                                "@type": "组织",
                                "name": "Trustpilot"
                            }
                        }
                    }
                    ,
                    "FAQPage": {},
                },
            },

            "/istanbul-airport-to-nisantasi": {
                en: ``,
                tr: ``,
                ar: ``,
                es: ``,
                it: ``,
                ru: ``,
                zh: ``,
            },
            "/istanbul-airport-to-eminonu": {
                en: ``,
                tr: ``,
                ar: ``,
                es: ``,
                it: ``,
                ru: ``,
                zh: ``,
            },
            "/istanbul-airport-to-uskudar-asian-side": {
                en: ``,
                tr: ``,
                ar: ``,
                es: ``,
                it: ``,
                ru: ``,
                zh: ``,
            },
            "/istanbul-airport-to-levent-maslak": {
                en: ``,
                tr: ``,
                ar: ``,
                es: ``,
                it: ``,
                ru: ``,
                zh: ``,
            },
            "/istanbul-airport-to-ortakoy": {
                en: ``,
                tr: ``,
                ar: ``,
                es: ``,
                it: ``,
                ru: ``,
                zh: ``,
            },
            "/istanbul-airport-to-sapanca": {
                en: ``,
                tr: ``,
                ar: ``,
                es: ``,
                it: ``,
                ru: ``,
                zh: ``,
            },
            "/istanbul-airport-to-bursa": {
                en: ``,
                tr: ``,
                ar: ``,
                es: ``,
                it: ``,
                ru: ``,
                zh: ``,
            },
            "/istanbul-airport-to-yalova": {
                en: ``,
                tr: ``,
                ar: ``,
                es: ``,
                it: ``,
                ru: ``,
                zh: ``,
            },
            "/istanbul-airport-to-kocaeli-izmit": {
                en: ``,
                tr: ``,
                ar: ``,
                es: ``,
                it: ``,
                ru: ``,
                zh: ``,
            },
            "/istanbul-airport-to-sile-and-agva": {
                en: ``,
                tr: ``,
                ar: ``,
                es: ``,
                it: ``,
                ru: ``,
                zh: ``,
            },
            "/istanbul-airport-to-edirne": {
                en: ``,
                tr: ``,
                ar: ``,
                es: ``,
                it: ``,
                ru: ``,
                zh: ``,
            },
            "/istanbul-airport-to-tekirdag": {
                en: ``,
                tr: ``,
                ar: ``,
                es: ``,
                it: ``,
                ru: ``,
                zh: ``,
            },
            "/istanbul-airport-to-canakkale": {
                en: ``,
                tr: ``,
                ar: ``,
                es: ``,
                it: ``,
                ru: ``,
                zh: ``,
            },
            SAW: {},
            AYT: {},
            DLM: {},
            BJY: {},
            ADB: {},
            GZP: {},
        }
    }
    return popularDestinationSchema[hasTaxiDeals][pathname][language] || null;
}



/**
 * Retrieves the airport page content for the given pathname and language.
 *
 * @param {string} pathname - The pathname of the airport page.
 * @param {string} [language="en"] - The language of the airport page content.
 * @returns {string} The airport page content for the given pathname and language.
 */
export const getPopularDestinationsPageContentByPathname = (pathname, language = "en", hasTaxiDeals) => {
    return popularDestinationsPageContents[hasTaxiDeals][pathname][language]
}
const popularDestinationsPageContents = {
    IST: {
        "/istanbul-airport-to-taksim": {
            en: `
         <h1>Istanbul Airport to Taksim Taxi Transfer</h1>

    <p>
        Experience a seamless and comfortable transfer from Istanbul Airport (IST) to Taksim, the vibrant heart of Istanbul.
        Whether you're visiting for business or leisure, our premium taxi service ensures a hassle-free journey with professional drivers and top-quality vehicles.
    </p>

    <h2>Why Choose APL Transfers?</h2>
    <ul>
        <li>Free Meet & Greet & Waiting Time – Your driver will be waiting at the <a href="#">arrivals</a> hall with a name board.</li>
        <li>APL Transfers Office Inside Istanbul Airport – Convenient in-terminal assistance.</li>
        <li>Free Child Seats for 8 & 9-Seater Private Vehicles – Ensuring family-friendly travel.</li>
        <li>Free Cancellation Up to 24 Hours Before Arrival – Book with peace of mind.</li>
        <li>Fixed Prices – No Hidden Costs – What you see is what you pay.</li>
        <li>24/7 Customer Support – We're available anytime you need us.</li>
        <li>Corporate Travel Solutions – Reliable transfers for business professionals.</li>
        <li>Luxury, Clean & Well-Maintained Vehicles – Enjoy a smooth and stylish ride.</li>
        <li>Comprehensive Coverage – We provide transfers to all hotels and addresses in Taksim, ensuring you reach your destination without hassle.</li>
    </ul>

    <h2>Reliable & Hassle-Free Airport Transfer</h2>
    <p>
        Navigating a new city can be overwhelming, but with our Istanbul Airport to Taksim taxi transfer, you can relax knowing your transport is taken care of.
        Our drivers track your flight to accommodate any delays, ensuring a smooth pickup experience.
    </p>

    <h2>Journey Details</h2>
    <ul>
        <li>Distance: Approximately 40 km</li>
        <li>Duration: Around 40-50 minutes (depending on traffic)</li>
        <li>Route: Via D020 or O-7 highway, passing key landmarks and the <a href="#">Bosphorus</a> skyline</li>
    </ul>

    <h2>Booking Your Taxi Transfer</h2>
    <p>
        Booking your Istanbul Airport to Taksim taxi is simple.
        Use our secure online platform to reserve your transfer in advance, ensuring a stress-free arrival in Istanbul.
    </p>

    <h2>Additional Services</h2>
    <ul>
        <li>Child Seats Available – Safe travel for families.</li>
        <li>Business-Class Transfers – Premium vehicle options for corporate travelers.</li>
        <li>Group Transfers – Minibuses available for larger parties.</li>
    </ul>

    <p>
        Enjoy a reliable, comfortable, and affordable transfer from Istanbul Airport to Taksim.
        Book now and start your journey in Istanbul with ease!
    </p>

        `,
            tr: `
        <h1>İstanbul Havalimanı'ndan Taksim'e Taksi Transferi</h1>

<p>
    İstanbul Havalimanı (IST) ile Taksim arasındaki sorunsuz ve konforlu transferin keyfini çıkarın.
    İster iş ister tatil amaçlı seyahat edin, premium taksi hizmetimiz, profesyonel şoförler ve yüksek kaliteli araçlarla 
    sorunsuz bir yolculuk sunar.
</p>

<h2>Neden APL Transferleri?</h2>
<ul>
    <li>Ücretsiz Karşılama & Bekleme Süresi – Şoförünüz <a href="#">varış</a> salonunda isim tabelasıyla sizi bekliyor olacak.</li>
    <li>İstanbul Havalimanı İçinde APL Transfer Ofisi – Terminal içinde rahat asistan hizmeti.</li>
    <li>Ücretsiz Çocuk Koltukları (8 & 9 Kişilik Özel Araçlar) – Aile dostu seyahat sağlar.</li>
    <li>Varıştan 24 Saat Öncesine Kadar Ücretsiz İptal – Güvenle rezervasyon yapın.</li>
    <li>Sabit Fiyatlar – Gizli Ücret Yok – Gördüğünüz fiyat, ödediğiniz fiyattır.</li>
    <li>7/24 Müşteri Desteği – İhtiyacınız olduğunda her zaman buradayız.</li>
    <li>Kurumsal Seyahat Çözümleri – İş seyahatleri için güvenilir transfer hizmeti.</li>
    <li>Lüks, Temiz ve Bakımlı Araçlar – Konforlu ve şık bir yolculuğun keyfini çıkarın.</li>
    <li>Kapsamlı Hizmet – Taksim'deki tüm otel ve adreslere transfer sağlıyoruz, böylece varış noktanıza sorunsuzca ulaşabilirsiniz.</li>
</ul>

<h2>Güvenilir ve Sorunsuz Havalimanı Transferi</h2>
<p>
    Yeni bir şehirde gezinmek zor olabilir, ancak İstanbul Havalimanı'ndan Taksim'e taksi transferimiz sayesinde ulaşımınızın 
    güvence altına alındığını bilerek rahatlayabilirsiniz. Şoförlerimiz, uçuşunuzu takip ederek herhangi bir gecikmeyi 
    karşılamak için esneklik sağlar ve sorunsuz bir karşılama deneyimi sunar.
</p>

<h2>Yolculuk Detayları</h2>
<ul>
    <li>Mesafe: Yaklaşık 40 km</li>
    <li>Süre: Trafik durumuna bağlı olarak yaklaşık 40-50 dakika</li>
    <li>Güzergah: D020 veya O-7 otoyolu üzerinden, önemli simge yapılar ve <a href="#">Boğaz</a> manzarasını geçerek</li>
</ul>

<h2>Taksi Transferinizi Rezervasyon Yapın</h2>
<p>
    İstanbul Havalimanı'ndan Taksim'e taksi rezervasyonu yapmak çok kolaydır.
    Online güvenli platformumuzu kullanarak transferinizi önceden rezerve edin ve İstanbul'a stressiz bir şekilde varın.
</p>

<h2>Ek Hizmetler</h2>
<ul>
    <li>Çocuk Koltuğu Mevcut – Aileler için güvenli seyahat.</li>
    <li>Business-Class Transferleri – Kurumsal seyahat edenler için premium araç seçenekleri.</li>
    <li>Grup Transferleri – Büyük gruplar için minibüs hizmeti mevcuttur.</li>
</ul>

<p>
    İstanbul Havalimanı'ndan Taksim'e güvenilir, konforlu ve uygun fiyatlı bir transferin tadını çıkarın.
    Hemen rezervasyon yapın ve İstanbul'daki yolculuğunuza kolayca başlayın!
</p>

        `,
            ar: `
        <h1>خدمة التاكسي من مطار إسطنبول إلى تقسيم</h1>

<p>
    استمتع برحلة نقل سلسة ومريحة من مطار إسطنبول (IST) إلى تقسيم، قلب إسطنبول النابض.
    سواء كنت تزور من أجل العمل أو الترفيه، فإن خدمة التاكسي المميزة لدينا تضمن لك رحلة خالية من المتاعب مع سائقين محترفين 
    ومركبات عالية الجودة.
</p>

<h2>لماذا تختار APL Transfers؟</h2>
<ul>
    <li>استقبال مجاني وانتظار – سيكون سائقك بانتظارك في <a href="#">صالة الوصول</a> مع لوحة تحمل اسمك.</li>
    <li>مكتب APL Transfers داخل مطار إسطنبول – خدمة مساعدة مريحة داخل المطار.</li>
    <li>مقاعد أطفال مجانية للمركبات الخاصة (8 و 9 مقاعد) – لضمان سفر آمن ومريح للعائلات.</li>
    <li>إلغاء مجاني حتى 24 ساعة قبل الوصول – احجز بثقة وراحة بال.</li>
    <li>أسعار ثابتة – لا توجد تكاليف مخفية – السعر الذي تراه هو السعر الذي تدفعه.</li>
    <li>دعم العملاء على مدار الساعة – نحن متاحون في أي وقت تحتاج فيه إلينا.</li>
    <li>حلول النقل لرجال الأعمال – خدمات نقل موثوقة للمسافرين بغرض العمل.</li>
    <li>مركبات فاخرة، نظيفة ومجهزة – استمتع برحلة مريحة وأنيقة.</li>
    <li>تغطية شاملة – نوفر خدمات النقل إلى جميع الفنادق والعناوين في تقسيم، لضمان وصولك دون أي متاعب.</li>
</ul>

<h2>نقل موثوق وخالٍ من المتاعب من المطار</h2>
<p>
    قد يكون التنقل في مدينة جديدة أمراً مربكاً، ولكن مع خدمة التاكسي من مطار إسطنبول إلى تقسيم، 
    يمكنك الاسترخاء مع العلم أن وسيلة نقلك مرتبة مسبقًا. يقوم سائقونا بتتبع رحلتك الجوية 
    لاستيعاب أي تأخيرات، مما يضمن لك تجربة استقبال سلسة.
</p>

<h2>تفاصيل الرحلة</h2>
<ul>
    <li>المسافة: حوالي 40 كم</li>
    <li>المدة: حوالي 40-50 دقيقة (حسب حركة المرور)</li>
    <li>المسار: عبر طريق D020 أو O-7، مروراً بالمعالم الرئيسية وإطلالة على <a href="#">مضيق البوسفور</a></li>
</ul>

<h2>حجز خدمة التاكسي الخاصة بك</h2>
<p>
    يعد حجز خدمة التاكسي من مطار إسطنبول إلى تقسيم أمراً بسيطاً.
    استخدم منصتنا الآمنة عبر الإنترنت لحجز النقل مسبقاً، مما يضمن وصولاً مريحاً وخالياً من التوتر إلى إسطنبول.
</p>

<h2>خدمات إضافية</h2>
<ul>
    <li>مقاعد الأطفال متاحة – لضمان سفر آمن للعائلات.</li>
    <li>خدمات نقل درجة رجال الأعمال – خيارات المركبات الفاخرة للمسافرين من رجال الأعمال.</li>
    <li>خدمات النقل الجماعي – تتوفر حافلات صغيرة للمجموعات الكبيرة.</li>
</ul>

<p>
    استمتع برحلة نقل موثوقة ومريحة وبتكلفة مناسبة من مطار إسطنبول إلى تقسيم.
    احجز الآن وابدأ رحلتك في إسطنبول بكل سهولة!
</p>

        `,
            es: `
        <h1>Traslado en Taxi desde el Aeropuerto de Estambul a Taksim</h1>

<p>
    Disfruta de un traslado cómodo y sin complicaciones desde el Aeropuerto de Estambul (IST) a Taksim, el vibrante corazón de Estambul.
    Ya sea que viajes por negocios o placer, nuestro servicio de taxi premium garantiza un viaje sin estrés con conductores profesionales 
    y vehículos de alta calidad.
</p>

<h2>¿Por qué elegir APL Transfers?</h2>
<ul>
    <li>Recepción gratuita y tiempo de espera – Tu conductor te esperará en la sala de <a href="#">llegadas</a> con un cartel con tu nombre.</li>
    <li>Oficina de APL Transfers dentro del Aeropuerto de Estambul – Asistencia conveniente en la terminal.</li>
    <li>Asientos infantiles gratuitos para vehículos privados de 8 y 9 plazas – Garantizando un viaje seguro y cómodo para las familias.</li>
    <li>Cancelación gratuita hasta 24 horas antes de la llegada – Reserva con tranquilidad.</li>
    <li>Precios fijos – Sin costos ocultos – Lo que ves es lo que pagas.</li>
    <li>Atención al cliente 24/7 – Estamos disponibles siempre que nos necesites.</li>
    <li>Soluciones de viaje corporativas – Traslados confiables para profesionales de negocios.</li>
    <li>Vehículos lujosos, limpios y bien mantenidos – Disfruta de un viaje cómodo y elegante.</li>
    <li>Cobertura completa – Ofrecemos traslados a todos los hoteles y direcciones en Taksim, asegurando que llegues sin problemas a tu destino.</li>
</ul>

<h2>Traslado confiable y sin complicaciones desde el aeropuerto</h2>
<p>
    Navegar en una ciudad nueva puede ser abrumador, pero con nuestro traslado en taxi del Aeropuerto de Estambul a Taksim, 
    puedes relajarte sabiendo que tu transporte está asegurado. 
    Nuestros conductores rastrean tu vuelo para acomodar cualquier retraso y garantizar una experiencia de recogida fluida.
</p>

<h2>Detalles del viaje</h2>
<ul>
    <li>Distancia: Aproximadamente 40 km</li>
    <li>Duración: Alrededor de 40-50 minutos (dependiendo del tráfico)</li>
    <li>Ruta: A través de la carretera D020 o O-7, pasando por puntos de referencia clave y la vista del <a href="#">Bósforo</a></li>
</ul>

<h2>Reserva tu traslado en taxi</h2>
<p>
    Reservar tu taxi desde el Aeropuerto de Estambul a Taksim es simple.
    Usa nuestra plataforma en línea segura para reservar tu traslado con anticipación, asegurando una llegada sin estrés a Estambul.
</p>

<h2>Servicios adicionales</h2>
<ul>
    <li>Asientos para niños disponibles – Viaje seguro para familias.</li>
    <li>Traslados de clase ejecutiva – Opciones de vehículos premium para viajeros de negocios.</li>
    <li>Traslados grupales – Minibuses disponibles para grupos grandes.</li>
</ul>

<p>
    Disfruta de un traslado confiable, cómodo y asequible desde el Aeropuerto de Estambul a Taksim.
    ¡Reserva ahora y comienza tu viaje en Estambul con facilidad!
</p>

        `,
            it: `
        <h1>Trasferimento in Taxi dall'Aeroporto di Istanbul a Taksim</h1>

<p>
    Vivi un trasferimento comodo e senza stress dall'Aeroporto di Istanbul (IST) a Taksim, il cuore pulsante di Istanbul.
    Che tu sia in viaggio per affari o per piacere, il nostro servizio taxi premium garantisce un viaggio senza problemi con autisti professionali
    e veicoli di alta qualità.
</p>

<h2>Perché scegliere APL Transfers?</h2>
<ul>
    <li>Incontro gratuito e tempo di attesa – Il tuo autista ti aspetterà nella sala <a href="#">arrivi</a> con un cartello con il tuo nome.</li>
    <li>Ufficio APL Transfers all'interno dell'Aeroporto di Istanbul – Assistenza comoda direttamente nel terminal.</li>
    <li>Seggiolini per bambini gratuiti per veicoli privati da 8 e 9 posti – Per garantire un viaggio sicuro e confortevole per le famiglie.</li>
    <li>Cancellazione gratuita fino a 24 ore prima dell'arrivo – Prenota con tranquillità.</li>
    <li>Prezzi fissi – Nessun costo nascosto – Quello che vedi è quello che paghi.</li>
    <li>Assistenza clienti 24/7 – Siamo sempre disponibili per te.</li>
    <li>Soluzioni di viaggio aziendali – Trasferimenti affidabili per professionisti in viaggio d'affari.</li>
    <li>Veicoli di lusso, puliti e ben mantenuti – Goditi un viaggio confortevole ed elegante.</li>
    <li>Copertura completa – Forniamo trasferimenti a tutti gli hotel e indirizzi di Taksim, assicurandoti di arrivare senza problemi a destinazione.</li>
</ul>

<h2>Trasferimento affidabile e senza problemi dall'aeroporto</h2>
<p>
    Orientarsi in una nuova città può essere complicato, ma con il nostro trasferimento in taxi dall'Aeroporto di Istanbul a Taksim, 
    puoi rilassarti sapendo che il tuo trasporto è organizzato. 
    I nostri autisti monitorano il tuo volo per adattarsi a eventuali ritardi, garantendo un'accoglienza senza problemi.
</p>

<h2>Dettagli del viaggio</h2>
<ul>
    <li>Distanza: Circa 40 km</li>
    <li>Durata: Circa 40-50 minuti (a seconda del traffico)</li>
    <li>Percorso: Attraverso la strada D020 o O-7, passando per i principali punti di riferimento e il panorama del <a href="#">Bosforo</a></li>
</ul>

<h2>Prenota il tuo trasferimento in taxi</h2>
<p>
    Prenotare un taxi dall'Aeroporto di Istanbul a Taksim è semplice.
    Usa la nostra piattaforma sicura online per prenotare il tuo trasferimento in anticipo, garantendo un arrivo senza stress a Istanbul.
</p>

<h2>Servizi aggiuntivi</h2>
<ul>
    <li>Seggiolini per bambini disponibili – Viaggio sicuro per le famiglie.</li>
    <li>Trasferimenti Business-Class – Opzioni di veicoli premium per viaggiatori d'affari.</li>
    <li>Trasferimenti di gruppo – Minibus disponibili per gruppi numerosi.</li>
</ul>

<p>
    Goditi un trasferimento affidabile, confortevole e conveniente dall'Aeroporto di Istanbul a Taksim.
    Prenota ora e inizia il tuo viaggio a Istanbul senza stress!
</p>

        `,
            ru: `
        <h1>Трансфер на такси из аэропорта Стамбула в Таксим</h1>

<p>
    Наслаждайтесь комфортным и удобным трансфером из аэропорта Стамбула (IST) в Таксим, оживленный центр города.
    Независимо от того, путешествуете ли вы по делам или для отдыха, наш премиальный сервис такси обеспечит вам 
    беззаботную поездку с профессиональными водителями и автомобилями высокого класса.
</p>

<h2>Почему стоит выбрать APL Transfers?</h2>
<ul>
    <li>Бесплатная встреча и ожидание – Ваш водитель будет ждать вас в зале <a href="#">прилета</a> с табличкой с вашим именем.</li>
    <li>Офис APL Transfers внутри аэропорта Стамбула – Удобная помощь прямо в терминале.</li>
    <li>Бесплатные детские кресла для частных автомобилей на 8 и 9 мест – Гарантия безопасного и комфортного путешествия для семей.</li>
    <li>Бесплатная отмена бронирования за 24 часа до прибытия – Бронируйте без риска.</li>
    <li>Фиксированные цены – Без скрытых платежей – Вы платите ровно столько, сколько видите в цене.</li>
    <li>Круглосуточная поддержка клиентов – Мы всегда на связи, когда вам это нужно.</li>
    <li>Корпоративные решения для путешествий – Надежные трансферы для деловых поездок.</li>
    <li>Роскошные, чистые и ухоженные автомобили – Наслаждайтесь комфортной и стильной поездкой.</li>
    <li>Полное покрытие – Мы предоставляем трансфер до всех отелей и адресов в Таксиме, гарантируя удобное прибытие.</li>
</ul>

<h2>Надежный и удобный трансфер из аэропорта</h2>
<p>
    Ориентироваться в новом городе может быть сложно, но с нашим такси из аэропорта Стамбула в Таксим 
    вы можете расслабиться, зная, что ваш транспорт организован. 
    Наши водители отслеживают ваш рейс, чтобы учесть возможные задержки и обеспечить вам удобную встречу.
</p>

<h2>Детали поездки</h2>
<ul>
    <li>Расстояние: примерно 40 км</li>
    <li>Продолжительность: около 40-50 минут (в зависимости от трафика)</li>
    <li>Маршрут: По трассе D020 или O-7, проходя ключевые достопримечательности и панораму <a href="#">Босфора</a></li>
</ul>

<h2>Бронирование такси</h2>
<p>
    Забронировать такси из аэропорта Стамбула в Таксим очень просто.
    Используйте нашу безопасную онлайн-платформу, чтобы заранее заказать трансфер и обеспечить себе комфортное прибытие в Стамбул.
</p>

<h2>Дополнительные услуги</h2>
<ul>
    <li>Детские кресла – Безопасное путешествие для семей.</li>
    <li>Трансферы бизнес-класса – Премиальные автомобили для корпоративных клиентов.</li>
    <li>Групповые трансферы – Минивэны для больших групп.</li>
</ul>

<p>
    Наслаждайтесь надежным, комфортным и доступным трансфером из аэропорта Стамбула в Таксим.
    Забронируйте сейчас и начните свое путешествие по Стамбулу с комфортом!
</p>

        `,
            zh: `
        <h1>伊斯坦布尔机场至塔克西姆的出租车接送服务</h1>

<p>
    体验从伊斯坦布尔机场 (IST) 到塔克西姆的无缝舒适接送服务，塔克西姆是伊斯坦布尔充满活力的中心地带。
    无论您是商务出行还是休闲旅行，我们的高端出租车服务都能提供专业司机和高质量的车辆，确保您拥有轻松愉快的旅程。
</p>

<h2>为什么选择 APL Transfers？</h2>
<ul>
    <li>免费迎接和等待时间 – 您的司机将在 <a href="#">到达大厅</a> 举着您的名字牌等候。</li>
    <li>APL Transfers 办公室设在伊斯坦布尔机场 – 便捷的航站楼内协助。</li>
    <li>提供 8 和 9 座私家车的免费儿童座椅 – 确保家庭旅行更加舒适安全。</li>
    <li>抵达前 24 小时内可免费取消 – 让您无忧预订。</li>
    <li>固定价格 – 无隐藏费用 – 透明定价，放心支付。</li>
    <li>24/7 全天候客户支持 – 任何时候都可以联系我们。</li>
    <li>企业旅行解决方案 – 为商务人士提供可靠的接送服务。</li>
    <li>豪华、干净、维护良好的车辆 – 享受舒适时尚的乘车体验。</li>
    <li>全面覆盖 – 我们提供到塔克西姆所有酒店和地址的接送服务，确保您顺利到达目的地。</li>
</ul>

<h2>可靠、无忧的机场接送</h2>
<p>
    在新的城市旅行可能会让人感到不安，但通过我们的伊斯坦布尔机场到塔克西姆出租车接送服务，
    您可以安心享受便捷的交通安排。我们的司机会追踪您的航班，以适应任何延误，确保您顺利到达目的地。
</p>

<h2>行程详情</h2>
<ul>
    <li>距离：约 40 公里</li>
    <li>时间：大约 40-50 分钟（取决于交通状况）</li>
    <li>路线：沿 D020 或 O-7 高速公路行驶，经过主要地标和<a href="#">博斯普鲁斯海峡</a>全景</li>
</ul>

<h2>预订您的出租车接送</h2>
<p>
    预订从伊斯坦布尔机场到塔克西姆的出租车非常简单。
    通过我们安全的在线平台提前预订您的接送服务，确保您顺利抵达伊斯坦布尔。
</p>

<h2>附加服务</h2>
<ul>
    <li>提供儿童座椅 – 让家庭旅行更加安全。</li>
    <li>商务级接送 – 为商务旅客提供高端车辆选择。</li>
    <li>团体接送 – 提供小型巴士服务，适合大型团体。</li>
</ul>

<p>
    享受从伊斯坦布尔机场到塔克西姆的可靠、舒适且经济实惠的接送服务。
    立即预订，轻松开启您的伊斯坦布尔之旅！
</p>

        `,
        },
        "/istanbul-airport-to-sultanahmet": {
            en: `
            
 <h1>Istanbul Airport to Sultanahmet Taxi Transfer</h1>
        <p>Enjoy a seamless and comfortable <strong>Istanbul Airport to Sultanahmet taxi transfer</strong> with APL Transfers. Whether you’re arriving for a holiday or business trip, we ensure a smooth, stress-free journey to <strong>Sultanahmet</strong>, the historic heart of Istanbul.</p>

        <h2>Why Choose APL Transfers?</h2>
        <ul>
            <li><strong>Free Meet & Greet & Waiting Time</strong> – Your driver will be waiting at the arrivals hall with a name board.</li>
            <li><strong>APL Transfers Office Inside Istanbul Airport</strong> – Convenient in-terminal assistance.</li>
            <li><strong>Free Child Seats for 8 & 9-Seater Private Vehicles</strong> – Ensuring family-friendly travel.</li>
            <li><strong>Free Cancellation Up to 24 Hours Before Arrival</strong> – Book with peace of mind.</li>
            <li><strong>Fixed Prices – No Hidden Costs</strong> – What you see is what you pay.</li>
            <li><strong>24/7 Customer Support</strong> – We’re available anytime you need us.</li>
            <li><strong>Corporate Travel Solutions</strong> – Reliable transfers for business professionals.</li>
            <li><strong>Luxury, Clean & Well-Maintained Vehicles</strong> – Enjoy a smooth and stylish ride.</li>
            <li><strong>Comprehensive Coverage</strong> – We provide transfers to <strong>all hotels and addresses in Sultanahmet</strong>, ensuring you reach your destination hassle-free.</li>
            <li><strong>Flight Tracking & No Extra Charge for Delays</strong> – We monitor your flight in real-time, so if your flight is delayed, we adjust your pickup time at no additional cost.</li>
        </ul>

        <h2>Reliable & Hassle-Free Airport Transfer</h2>
        <p>Navigating a new city can be overwhelming, but with our <strong>Istanbul Airport to Sultanahmet taxi service</strong>, you can relax knowing your transport is handled by professionals. Our drivers monitor your flight for delays and ensure a timely pickup.</p>

        <h2>Journey Details</h2>
        <ul>
            <li><strong>Distance:</strong> Approximately 45 km</li>
            <li><strong>Duration:</strong> Around 45-55 minutes (depending on traffic)</li>
            <li><strong>Route:</strong> Via D020 or O-7 highway, passing Istanbul’s breathtaking skyline and historical landmarks</li>
        </ul>

        <h2>Booking Your Taxi Transfer</h2>
        <p>Booking your <strong>Istanbul Airport to Sultanahmet taxi</strong> is quick and secure. Use our easy online platform to reserve your transfer in advance and enjoy a hassle-free arrival.</p>

        <h2>Additional Services</h2>
        <ul>
            <li><strong>Child Seats Available</strong> – Safe travel for families.</li>
            <li><strong>Business-Class Transfers</strong> – Premium vehicle options for corporate travelers.</li>
            <li><strong>Group Transfers</strong> – Minibuses available for larger parties.</li>
        </ul>

        <p><strong>Arrive in <span>Sultanahmet</span> comfortably and stress-free</strong> with our premium <strong>Istanbul Airport taxi service</strong>. <strong>Book now</strong> for a smooth start to your stay in Istanbul!</p>
            `,
            tr: `
            <h1>İstanbul Havalimanı'ndan Sultanahmet'e Taksi Transferi</h1>
<p><strong>İstanbul Havalimanı'ndan Sultanahmet'e taksi transferi</strong> ile APL Transfers sayesinde sorunsuz ve konforlu bir yolculuk deneyimi yaşayın. Tatil veya iş seyahati için geliyorsanız, <strong>Sultanahmet</strong>’e rahat ve stressiz bir şekilde ulaşmanızı sağlıyoruz.</p>

<h2>Neden APL Transfers'i Seçmelisiniz?</h2>
<ul>
    <li><strong>Ücretsiz Karşılama & Bekleme Süresi</strong> – Şoförünüz, adınızın yazılı olduğu tabela ile varış salonunda sizi bekliyor olacak.</li>
    <li><strong>İstanbul Havalimanı İçinde APL Transfers Ofisi</strong> – Havalimanında kolay erişim imkanı.</li>
    <li><strong>8 & 9 Kişilik Özel Araçlar İçin Ücretsiz Çocuk Koltukları</strong> – Aile dostu seyahat garantisi.</li>
    <li><strong>Varıştan 24 Saat Öncesine Kadar Ücretsiz İptal</strong> – Güvenle rezervasyon yapın.</li>
    <li><strong>Sabit Fiyatlar – Gizli Ücret Yok</strong> – Ne görüyorsanız onu ödersiniz.</li>
    <li><strong>7/24 Müşteri Desteği</strong> – Ne zaman ihtiyacınız olursa biz buradayız.</li>
    <li><strong>Kurumsal Seyahat Çözümleri</strong> – İş profesyonelleri için güvenilir transfer hizmetleri.</li>
    <li><strong>Lüks, Temiz ve Bakımlı Araçlar</strong> – Konforlu ve şık bir yolculuğun tadını çıkarın.</li>
    <li><strong>Kapsamlı Hizmet</strong> – <strong>Sultanahmet’teki tüm otel ve adreslere</strong> transfer sağlıyoruz, böylece varış noktanıza sorunsuz şekilde ulaşabilirsiniz.</li>
    <li><strong>Uçuş Takibi & Gecikmeler İçin Ekstra Ücret Yok</strong> – Uçuşunuzu gerçek zamanlı olarak takip ediyoruz, bu nedenle uçuşunuz gecikirse, ek ücret olmadan alma saatinizi ayarlıyoruz.</li>
</ul>

<h2>Güvenilir & Sorunsuz Havalimanı Transferi</h2>
<p>Yeni bir şehirde yolculuk yapmak zor olabilir, ancak <strong>İstanbul Havalimanı'ndan Sultanahmet'e taksi hizmetimiz</strong> sayesinde, ulaşımınız profesyoneller tarafından güvenle sağlanır. Şoförlerimiz uçuş gecikmelerini takip eder ve zamanında transferinizi gerçekleştirir.</p>

<h2>Yolculuk Detayları</h2>
<ul>
    <li><strong>Mesafe:</strong> Yaklaşık 45 km</li>
    <li><strong>Süre:</strong> Trafiğe bağlı olarak yaklaşık 45-55 dakika</li>
    <li><strong>Rota:</strong> D020 veya O-7 otoyolu üzerinden, İstanbul’un muhteşem manzarası ve tarihi simgeleri eşliğinde</li>
</ul>

<h2>Taksi Transferinizi Rezerve Edin</h2>
<p><strong>İstanbul Havalimanı'ndan Sultanahmet'e taksi</strong> rezervasyonu yapmak hızlı ve güvenlidir. Kolay online platformumuzu kullanarak transferinizi önceden ayırtın ve sorunsuz bir varış deneyimi yaşayın.</p>

<h2>Ek Hizmetler</h2>
<ul>
    <li><strong>Çocuk Koltukları Mevcut</strong> – Aileler için güvenli seyahat.</li>
    <li><strong>Business-Class Transferleri</strong> – Kurumsal yolcular için premium araç seçenekleri.</li>
    <li><strong>Grup Transferleri</strong> – Büyük gruplar için minibüs seçenekleri.</li>
</ul>

<p><strong><span>Sultanahmet</span>’e konforlu ve stressiz bir şekilde ulaşın</strong> ve premium <strong>İstanbul Havalimanı taksi hizmetimiz</strong> ile yolculuğunuzun tadını çıkarın. <strong>Hemen rezervasyon yapın</strong> ve İstanbul’da keyifli bir başlangıç yapın!</p>

            `,
            ar: `
            <h1>تاكسي من مطار إسطنبول إلى السلطان أحمد</h1>
<p>استمتع برحلة مريحة وسلسة مع <strong>خدمة التاكسي من مطار إسطنبول إلى السلطان أحمد</strong> مع APL Transfers. سواء كنت قادماً لقضاء عطلة أو رحلة عمل، فإننا نضمن لك وصولاً سهلاً وخالٍ من التوتر إلى <strong>السلطان أحمد</strong>، القلب التاريخي لإسطنبول.</p>

<h2>لماذا تختار APL Transfers؟</h2>
<ul>
    <li><strong>الاستقبال المجاني & وقت الانتظار</strong> – سيكون سائقك بانتظارك في صالة الوصول مع لوحة تحمل اسمك.</li>
    <li><strong>مكتب APL Transfers داخل مطار إسطنبول</strong> – خدمة مريحة داخل المطار.</li>
    <li><strong>مقاعد أطفال مجانية للمركبات الخاصة ذات 8 و9 مقاعد</strong> – لضمان راحة العائلات.</li>
    <li><strong>إلغاء مجاني حتى 24 ساعة قبل الوصول</strong> – احجز بثقة.</li>
    <li><strong>أسعار ثابتة – لا تكاليف مخفية</strong> – ما تراه هو ما تدفعه.</li>
    <li><strong>دعم العملاء على مدار 24/7</strong> – نحن متاحون متى احتجتنا.</li>
    <li><strong>حلول السفر للأعمال</strong> – خدمات نقل موثوقة لرجال الأعمال.</li>
    <li><strong>مركبات فاخرة ونظيفة ومجهزة جيدًا</strong> – استمتع برحلة أنيقة ومريحة.</li>
    <li><strong>تغطية شاملة</strong> – نوفر خدمات التوصيل إلى <strong>جميع الفنادق والعناوين في السلطان أحمد</strong>، لضمان وصولك بسهولة إلى وجهتك.</li>
    <li><strong>تتبع الرحلات وعدم فرض رسوم إضافية على التأخير</strong> – نراقب رحلتك في الوقت الفعلي، وإذا تأخرت، نقوم بتعديل وقت الاستلام دون أي تكلفة إضافية.</li>
</ul>

<h2>نقل موثوق وخالٍ من المتاعب</h2>
<p>قد يكون التنقل في مدينة جديدة صعبًا، ولكن مع <strong>خدمة التاكسي من مطار إسطنبول إلى السلطان أحمد</strong>، يمكنك الاسترخاء مع العلم أن نقلك يتم بواسطة محترفين. يراقب سائقونا الرحلات الجوية لضمان وصولك في الوقت المحدد.</p>

<h2>تفاصيل الرحلة</h2>
<ul>
    <li><strong>المسافة:</strong> حوالي 45 كم</li>
    <li><strong>المدة:</strong> حوالي 45-55 دقيقة (حسب حركة المرور)</li>
    <li><strong>المسار:</strong> عبر طريق D020 أو O-7، مروراً بمعالم إسطنبول التاريخية الرائعة</li>
</ul>

<h2>حجز تاكسي المطار الخاص بك</h2>
<p>حجز <strong>تاكسي من مطار إسطنبول إلى السلطان أحمد</strong> سهل وآمن. استخدم منصتنا عبر الإنترنت لحجز نقلك مسبقًا والاستمتاع بوصول خالٍ من المتاعب.</p>

<h2>خدمات إضافية</h2>
<ul>
    <li><strong>مقاعد الأطفال متوفرة</strong> – سفر آمن للعائلات.</li>
    <li><strong>نقل بدرجة رجال الأعمال</strong> – خيارات سيارات فاخرة للمسافرين من رجال الأعمال.</li>
    <li><strong>نقل المجموعات</strong> – حافلات صغيرة متاحة للمجموعات الكبيرة.</li>
</ul>

<p><strong>وصل إلى <span>السلطان أحمد</span> براحة وبدون عناء</strong> مع <strong>خدمة التاكسي الفاخرة من مطار إسطنبول</strong>. <strong>احجز الآن</strong> لبدء رحلتك في إسطنبول بأفضل طريقة!</p>

            `,
            es: `
            <h1>Taxi del Aeropuerto de Estambul a Sultanahmet</h1>
<p>Disfruta de un traslado cómodo y sin complicaciones con <strong>el servicio de taxi del Aeropuerto de Estambul a Sultanahmet</strong> con APL Transfers. Ya sea que vengas por vacaciones o un viaje de negocios, garantizamos un trayecto tranquilo y sin estrés hacia <strong>Sultanahmet</strong>, el corazón histórico de Estambul.</p>

<h2>¿Por qué elegir APL Transfers?</h2>
<ul>
    <li><strong>Recepción gratuita y tiempo de espera</strong> – Tu conductor te esperará en la sala de llegadas con un cartel con tu nombre.</li>
    <li><strong>Oficina de APL Transfers dentro del Aeropuerto de Estambul</strong> – Asistencia conveniente dentro del aeropuerto.</li>
    <li><strong>Asientos infantiles gratuitos para vehículos privados de 8 y 9 plazas</strong> – Viaje seguro para familias.</li>
    <li><strong>Cancelación gratuita hasta 24 horas antes de la llegada</strong> – Reserva con tranquilidad.</li>
    <li><strong>Precios fijos – Sin costos ocultos</strong> – Pagas lo que ves.</li>
    <li><strong>Atención al cliente 24/7</strong> – Estamos disponibles cuando nos necesites.</li>
    <li><strong>Soluciones de viaje corporativo</strong> – Traslados confiables para profesionales.</li>
    <li><strong>Vehículos lujosos, limpios y bien mantenidos</strong> – Disfruta de un viaje elegante y cómodo.</li>
    <li><strong>Cobertura completa</strong> – Ofrecemos traslados a <strong>todos los hoteles y direcciones en Sultanahmet</strong>, asegurando una llegada sin problemas.</li>
    <li><strong>Seguimiento de vuelos y sin cargos adicionales por retrasos</strong> – Monitoreamos tu vuelo en tiempo real y ajustamos la hora de recogida sin costo adicional.</li>
</ul>

<h2>Traslado confiable y sin complicaciones</h2>
<p>Viajar en una ciudad nueva puede ser difícil, pero con nuestro <strong>servicio de taxi del Aeropuerto de Estambul a Sultanahmet</strong>, puedes relajarte sabiendo que tu transporte está en manos de profesionales. Nuestros conductores monitorean los vuelos para garantizar una recogida puntual.</p>

<h2>Detalles del trayecto</h2>
<ul>
    <li><strong>Distancia:</strong> Aproximadamente 45 km</li>
    <li><strong>Duración:</strong> Entre 45 y 55 minutos (según el tráfico)</li>
    <li><strong>Ruta:</strong> A través de la carretera D020 o O-7, con vistas panorámicas y monumentos históricos de Estambul</li>
</ul>

<h2>Reserva tu traslado en taxi</h2>
<p>Reservar tu <strong>taxi del Aeropuerto de Estambul a Sultanahmet</strong> es rápido y seguro. Usa nuestra plataforma en línea para programar tu traslado con antelación y disfruta de una llegada sin estrés.</p>

<h2>Servicios adicionales</h2>
<ul>
    <li><strong>Asientos infantiles disponibles</strong> – Viaje seguro para familias.</li>
    <li><strong>Traslados en clase ejecutiva</strong> – Opciones premium para viajeros de negocios.</li>
    <li><strong>Traslados grupales</strong> – Minibuses disponibles para grupos grandes.</li>
</ul>

<p><strong>Llega a <span>Sultanahmet</span> cómodamente y sin estrés</strong> con nuestro <strong>servicio premium de taxi del Aeropuerto de Estambul</strong>. <strong>Reserva ahora</strong> para comenzar tu viaje en Estambul con tranquilidad.</p>

            `,
            it: `
            <h1>Taxi Aeroporto Istanbul Sultanahmet</h1>
<p>Goditi un trasferimento confortevole e senza stress con il <strong>servizio taxi dall'Aeroporto di Istanbul a Sultanahmet</strong> con APL Transfers. Che tu sia in viaggio per vacanza o per lavoro, garantiamo un viaggio tranquillo e senza problemi verso <strong>Sultanahmet</strong>, il cuore storico di Istanbul.</p>

<h2>Perché scegliere APL Transfers?</h2>
<ul>
    <li><strong>Accoglienza gratuita & Tempo di attesa</strong> – Il tuo autista ti aspetterà nella sala arrivi con un cartello con il tuo nome.</li>
    <li><strong>Ufficio APL Transfers all'interno dell'Aeroporto di Istanbul</strong> – Assistenza comoda direttamente in aeroporto.</li>
    <li><strong>Seggiolini per bambini gratuiti per veicoli privati da 8 e 9 posti</strong> – Per un viaggio sicuro in famiglia.</li>
    <li><strong>Cancellazione gratuita fino a 24 ore prima dell'arrivo</strong> – Prenota senza preoccupazioni.</li>
    <li><strong>Prezzi fissi – Nessun costo nascosto</strong> – Quello che vedi è quello che paghi.</li>
    <li><strong>Supporto clienti 24/7</strong> – Siamo disponibili in qualsiasi momento.</li>
    <li><strong>Soluzioni di viaggio aziendali</strong> – Trasferimenti affidabili per professionisti.</li>
    <li><strong>Veicoli di lusso, puliti e ben mantenuti</strong> – Goditi un viaggio confortevole ed elegante.</li>
    <li><strong>Copertura completa</strong> – Offriamo trasferimenti a <strong>tutti gli hotel e indirizzi di Sultanahmet</strong>, assicurandoti un arrivo senza problemi.</li>
    <li><strong>Monitoraggio voli e nessun costo extra per ritardi</strong> – Monitoriamo il tuo volo in tempo reale, quindi se è in ritardo, adeguiamo il tuo orario di ritiro senza costi aggiuntivi.</li>
</ul>

<h2>Trasferimento aeroportuale affidabile e senza problemi</h2>
<p>Viaggiare in una nuova città può essere complicato, ma con il nostro <strong>servizio taxi dall'Aeroporto di Istanbul a Sultanahmet</strong>, puoi rilassarti sapendo che il tuo trasporto è gestito da professionisti. I nostri autisti monitorano i voli per garantire un ritiro puntuale.</p>

<h2>Dettagli del viaggio</h2>
<ul>
    <li><strong>Distanza:</strong> Circa 45 km</li>
    <li><strong>Durata:</strong> Circa 45-55 minuti (a seconda del traffico)</li>
    <li><strong>Percorso:</strong> Attraverso la strada D020 o O-7, passando per lo splendido skyline e i monumenti storici di Istanbul</li>
</ul>

<h2>Prenota il tuo trasferimento in taxi</h2>
<p>Prenotare il tuo <strong>taxi dall'Aeroporto di Istanbul a Sultanahmet</strong> è semplice e sicuro. Usa la nostra piattaforma online per prenotare il tuo trasferimento in anticipo e goditi un arrivo senza problemi.</p>

<h2>Servizi aggiuntivi</h2>
<ul>
    <li><strong>Seggiolini per bambini disponibili</strong> – Viaggio sicuro per famiglie.</li>
    <li><strong>Trasferimenti Business-Class</strong> – Opzioni di veicoli premium per viaggiatori d'affari.</li>
    <li><strong>Trasferimenti di gruppo</strong> – Minibus disponibili per gruppi numerosi.</li>
</ul>

<p><strong>Arriva a <span>Sultanahmet</span> comodamente e senza stress</strong> con il nostro <strong>servizio taxi premium dall'Aeroporto di Istanbul</strong>. <strong>Prenota ora</strong> per iniziare il tuo soggiorno a Istanbul nel migliore dei modi!</p>

            `,
            ru: `
            <h1>Такси из аэропорта Стамбула в Султанахмет</h1>
<p>Наслаждайтесь комфортным и беспроблемным трансфером с <strong>услугой такси из аэропорта Стамбула в Султанахмет</strong> от APL Transfers. Будь то туристическая или деловая поездка, мы обеспечим вам плавное и удобное путешествие в <strong>Султанахмет</strong> — исторический центр Стамбула.</p>

<h2>Почему выбирают APL Transfers?</h2>
<ul>
    <li><strong>Бесплатная встреча & ожидание</strong> – Ваш водитель будет ждать вас в зале прибытия с табличкой с вашим именем.</li>
    <li><strong>Офис APL Transfers внутри аэропорта Стамбула</strong> – Удобная помощь в терминале.</li>
    <li><strong>Бесплатные детские кресла для 8- и 9-местных частных автомобилей</strong> – Безопасные поездки для семей.</li>
    <li><strong>Бесплатная отмена за 24 часа до прибытия</strong> – Бронируйте с уверенностью.</li>
    <li><strong>Фиксированные цены – без скрытых платежей</strong> – Вы платите только указанную стоимость.</li>
    <li><strong>Круглосуточная поддержка клиентов</strong> – Мы доступны в любое время.</li>
    <li><strong>Корпоративные трансферы</strong> – Надежный транспорт для деловых поездок.</li>
    <li><strong>Роскошные, чистые и ухоженные автомобили</strong> – Наслаждайтесь стильной и комфортной поездкой.</li>
    <li><strong>Широкая зона покрытия</strong> – Мы предоставляем трансферы во <strong>все отели и адреса в Султанахмете</strong>, обеспечивая удобное прибытие.</li>
    <li><strong>Отслеживание рейсов и отсутствие доплат за задержку</strong> – Мы отслеживаем ваш рейс в режиме реального времени и корректируем время встречи без дополнительных затрат.</li>
</ul>

<h2>Надежный и удобный трансфер из аэропорта</h2>
<p>Путешествие в незнакомом городе может быть сложным, но с нашим <strong>такси из аэропорта Стамбула в Султанахмет</strong> вы можете расслабиться, зная, что ваш транспорт находится в руках профессионалов. Наши водители следят за статусом рейсов, чтобы обеспечить своевременную подачу автомобиля.</p>

<h2>Детали поездки</h2>
<ul>
    <li><strong>Расстояние:</strong> Примерно 45 км</li>
    <li><strong>Продолжительность:</strong> Около 45-55 минут (в зависимости от дорожного трафика)</li>
    <li><strong>Маршрут:</strong> По шоссе D020 или O-7, мимо впечатляющего горизонта и исторических достопримечательностей Стамбула</li>
</ul>

<h2>Забронируйте такси</h2>
<p>Бронирование <strong>такси из аэропорта Стамбула в Султанахмет</strong> – это просто и безопасно. Используйте нашу онлайн-платформу, чтобы заранее оформить заказ и насладиться беспроблемным прибытием.</p>

<h2>Дополнительные услуги</h2>
<ul>
    <li><strong>Детские кресла в наличии</strong> – Безопасные поездки для семей.</li>
    <li><strong>Трансферы бизнес-класса</strong> – Премиальные автомобили для деловых поездок.</li>
    <li><strong>Групповые трансферы</strong> – Доступны микроавтобусы для больших групп.</li>
</ul>

<p><strong>Доберитесь до <span>Султанахмета</span> с комфортом и без стресса</strong> с нашим <strong>премиальным такси из аэропорта Стамбула</strong>. <strong>Забронируйте сейчас</strong>, чтобы начать свое пребывание в Стамбуле с комфортом!</p>

            `,
            zh: `
            <h1>伊斯坦布尔机场至苏丹艾哈迈德出租车</h1>
<p>通过 APL Transfers 的 <strong>伊斯坦布尔机场至苏丹艾哈迈德出租车服务</strong>，享受无忧、舒适的出行体验。无论您是商务出行还是度假旅行，我们都能确保您顺利抵达 <strong>苏丹艾哈迈德</strong>——伊斯坦布尔的历史中心。</p>

<h2>为什么选择 APL Transfers？</h2>
<ul>
    <li><strong>免费接机 & 等候时间</strong> – 司机将在到达大厅举着您的姓名牌等候。</li>
    <li><strong>APL Transfers 办公室位于伊斯坦布尔机场</strong> – 机场内便利的服务支持。</li>
    <li><strong>免费儿童座椅（适用于 8 座和 9 座私人车辆）</strong> – 确保家庭旅行的安全。</li>
    <li><strong>到达前 24 小时内免费取消</strong> – 让您的预订更加安心。</li>
    <li><strong>固定价格 – 无隐藏费用</strong> – 价格透明，无需额外支付。</li>
    <li><strong>24/7 全天候客服支持</strong> – 无论何时需要，我们都在这里。</li>
    <li><strong>企业出行解决方案</strong> – 为商务旅客提供可靠的接送服务。</li>
    <li><strong>豪华、干净且维护良好的车辆</strong> – 享受高品质的舒适旅程。</li>
    <li><strong>全面覆盖</strong> – 我们提供 <strong>苏丹艾哈迈德所有酒店和地址</strong> 的接送服务，确保您轻松抵达目的地。</li>
    <li><strong>航班跟踪 & 无额外延误费用</strong> – 我们实时监控您的航班，若有延误，将自动调整接送时间，无需额外支付费用。</li>
</ul>

<h2>可靠 & 无忧的机场接送</h2>
<p>在陌生的城市旅行可能会让人感到焦虑，但通过我们的 <strong>伊斯坦布尔机场至苏丹艾哈迈德出租车服务</strong>，您可以安心放松，因为您的出行由专业人士安排。我们的司机将密切关注您的航班，以确保准时接送。</p>

<h2>行程详情</h2>
<ul>
    <li><strong>距离：</strong> 约 45 公里</li>
    <li><strong>时长：</strong> 约 45-55 分钟（取决于交通状况）</li>
    <li><strong>路线：</strong> 途经 D020 或 O-7 高速公路，沿途欣赏伊斯坦布尔壮丽的城市天际线和历史地标</li>
</ul>

<h2>预订您的出租车</h2>
<p>预订 <strong>伊斯坦布尔机场至苏丹艾哈迈德出租车</strong> 既快速又安全。使用我们的在线平台提前预约您的接送服务，享受无忧抵达。</p>

<h2>额外服务</h2>
<ul>
    <li><strong>提供儿童座椅</strong> – 确保家庭旅客的安全。</li>
    <li><strong>商务舱接送</strong> – 为商务人士提供高端车辆选择。</li>
    <li><strong>团体接送</strong> – 适用于大型团体的迷你巴士服务。</li>
</ul>

<p><strong>轻松抵达 <span>苏丹艾哈迈德</span>，享受无忧之旅</strong>，选择我们的 <strong>伊斯坦布尔机场豪华出租车服务</strong>。<strong>立即预订</strong>，为您的伊斯坦布尔之旅带来美好开端！</p>

            `,
        },
        "/istanbul-airport-to-beyoglu": {
            en: `
            <h1>Istanbul Airport to Beyoğlu Taxi Transfer</h1>
<p>Travel comfortably with our <strong>Istanbul Airport to Beyoğlu taxi transfer</strong>, offering a <strong>fixed-price, hassle-free</strong> journey to one of Istanbul’s most vibrant districts. Whether you're visiting for business or leisure, APL Transfers ensures a smooth and reliable ride.</p>

<h2>Why Choose APL Transfers?</h2>
<ul>
    <li><strong>Free Meet & Greet</strong> – Your driver will be waiting at arrivals with a name board.</li>
    <li><strong>Flight Tracking & No Extra Charge for Delays</strong> – We monitor flights and adjust pickups at no extra cost.</li>
    <li><strong>Fixed Prices – No Hidden Fees</strong> – Transparent and competitive pricing.</li>
    <li><strong>Free Cancellation Up to 24 Hours Before Arrival</strong> – Flexible booking options.</li>
    <li><strong>24/7 Customer Support</strong> – Always available to assist you.</li>
</ul>

<h2>Journey Details</h2>
<ul>
    <li><strong>Distance:</strong> ~40 km</li>
    <li><strong>Duration:</strong> 40-50 minutes (traffic dependent)</li>
    <li><strong>Route:</strong> Via D020 or O-7 highway, passing key landmarks.</li>
</ul>

<h2>Book Your Taxi in Minutes</h2>
<p>Secure your <strong>private taxi from Istanbul Airport to Beyoğlu</strong> easily via our online booking system. Enjoy a <strong>comfortable, stress-free transfer</strong> with APL Transfers. <strong>Book now!</strong></p>

            `,
            tr: `
            <h1>İstanbul Havalimanı'ndan Beyoğlu'na Taksi Transferi</h1>
<p><strong>İstanbul Havalimanı'ndan Beyoğlu'na taksi transferi</strong> ile konforlu bir yolculuk yapın. <strong>Sabit fiyatlı ve sorunsuz</strong> transfer hizmetimizle İstanbul’un en hareketli bölgelerinden birine güvenle ulaşın. İster iş, ister tatil için seyahat edin, APL Transfers ile rahat ve güvenilir bir ulaşım deneyimi yaşayın.</p>

<h2>Neden APL Transfers'i Seçmelisiniz?</h2>
<ul>
    <li><strong>Ücretsiz Karşılama</strong> – Şoförünüz, adınızın yazılı olduğu tabela ile varış salonunda sizi bekliyor olacak.</li>
    <li><strong>Uçuş Takibi & Gecikmeler İçin Ekstra Ücret Yok</strong> – Uçuşunuzu takip ediyoruz ve gecikme olması durumunda ek ücret almadan alma saatini ayarlıyoruz.</li>
    <li><strong>Sabit Fiyatlar – Gizli Ücret Yok</strong> – Şeffaf ve rekabetçi fiyat garantisi.</li>
    <li><strong>Varıştan 24 Saat Öncesine Kadar Ücretsiz İptal</strong> – Esnek rezervasyon seçenekleri.</li>
    <li><strong>7/24 Müşteri Desteği</strong> – Her zaman size yardımcı olmaya hazırız.</li>
</ul>

<h2>Yolculuk Detayları</h2>
<ul>
    <li><strong>Mesafe:</strong> Yaklaşık 40 km</li>
    <li><strong>Süre:</strong> Trafiğe bağlı olarak 40-50 dakika</li>
    <li><strong>Rota:</strong> D020 veya O-7 otoyolu üzerinden, önemli simgeleri geçerek</li>
</ul>

<h2>Birkaç Dakikada Taksi Rezervasyonu Yapın</h2>
<p><strong>İstanbul Havalimanı'ndan Beyoğlu'na özel taksi</strong> rezervasyonunuzu online sistemimiz üzerinden hızlı ve kolay bir şekilde yapabilirsiniz. <strong>Konforlu ve sorunsuz bir transfer</strong> deneyimi için APL Transfers’i seçin. <strong>Şimdi rezervasyon yapın!</strong></p>

            `,
            ar: `
            <h1>تاكسي من مطار إسطنبول إلى بيوغلو</h1>
<p>سافر براحة مع <strong>خدمة التاكسي من مطار إسطنبول إلى بيوغلو</strong>، حيث نقدم لك رحلة <strong>بسعر ثابت وبدون متاعب</strong> إلى واحدة من أكثر المناطق حيوية في إسطنبول. سواء كنت مسافراً للعمل أو السياحة، تضمن لك APL Transfers رحلة سلسة وموثوقة.</p>

<h2>لماذا تختار APL Transfers؟</h2>
<ul>
    <li><strong>استقبال مجاني</strong> – سيكون سائقك بانتظارك في صالة الوصول بلوحة تحمل اسمك.</li>
    <li><strong>تتبع الرحلات & بدون رسوم إضافية عند التأخير</strong> – نراقب رحلتك ونعدل وقت الاستلام دون أي تكلفة إضافية.</li>
    <li><strong>أسعار ثابتة – بدون رسوم خفية</strong> – أسعار شفافة وتنافسية.</li>
    <li><strong>إلغاء مجاني حتى 24 ساعة قبل الوصول</strong> – خيارات حجز مرنة.</li>
    <li><strong>دعم العملاء 24/7</strong> – نحن متاحون لمساعدتك في أي وقت.</li>
</ul>

<h2>تفاصيل الرحلة</h2>
<ul>
    <li><strong>المسافة:</strong> حوالي 40 كم</li>
    <li><strong>المدة:</strong> 40-50 دقيقة حسب حركة المرور</li>
    <li><strong>المسار:</strong> عبر طريق D020 أو O-7، مروراً بأهم المعالم</li>
</ul>

<h2>احجز التاكسي الخاص بك في دقائق</h2>
<p>يمكنك حجز <strong>تاكسي خاص من مطار إسطنبول إلى بيوغلو</strong> بسهولة عبر نظام الحجز الإلكتروني الخاص بنا. استمتع بـ<strong>نقل مريح وخالي من المتاعب</strong> مع APL Transfers. <strong>احجز الآن!</strong></p>
`,
            es: `
            <h1>Taxi del Aeropuerto de Estambul a Beyoğlu</h1>
<p>Viaja con comodidad con nuestro <strong>servicio de taxi del Aeropuerto de Estambul a Beyoğlu</strong>, ofreciendo un <strong>precio fijo y un traslado sin complicaciones</strong> a uno de los distritos más vibrantes de Estambul. Ya sea que viajes por negocios o por placer, APL Transfers garantiza un viaje seguro y confiable.</p>

<h2>¿Por qué elegir APL Transfers?</h2>
<ul>
    <li><strong>Recepción gratuita</strong> – Tu conductor te esperará en la sala de llegadas con un cartel con tu nombre.</li>
    <li><strong>Seguimiento de vuelos & Sin cargos adicionales por retrasos</strong> – Monitoreamos tu vuelo en tiempo real y ajustamos la recogida sin costo adicional.</li>
    <li><strong>Precios fijos – Sin tarifas ocultas</strong> – Tarifas transparentes y competitivas.</li>
    <li><strong>Cancelación gratuita hasta 24 horas antes de la llegada</strong> – Opciones de reserva flexibles.</li>
    <li><strong>Atención al cliente 24/7</strong> – Siempre disponibles para ayudarte.</li>
</ul>

<h2>Detalles del viaje</h2>
<ul>
    <li><strong>Distancia:</strong> Aproximadamente 40 km</li>
    <li><strong>Duración:</strong> Entre 40 y 50 minutos (dependiendo del tráfico)</li>
    <li><strong>Ruta:</strong> A través de las autopistas D020 o O-7, pasando por puntos de referencia clave.</li>
</ul>

<h2>Reserva tu taxi en minutos</h2>
<p>Reserva fácilmente tu <strong>taxi privado del Aeropuerto de Estambul a Beyoğlu</strong> a través de nuestro sistema de reserva en línea. Disfruta de un <strong>traslado cómodo y sin estrés</strong> con APL Transfers. <strong>¡Reserva ahora!</strong></p>

            `,
            it: `
            <h1>Taxi Aeroporto Istanbul Beyoğlu</h1>
<p>Viaggia comodamente con il nostro <strong>servizio taxi dall'Aeroporto di Istanbul a Beyoğlu</strong>, offrendo un <strong>prezzo fisso e un viaggio senza stress</strong> verso uno dei quartieri più vibranti di Istanbul. Che tu sia in città per lavoro o per piacere, APL Transfers garantisce un trasferimento sicuro e affidabile.</p>

<h2>Perché scegliere APL Transfers?</h2>
<ul>
    <li><strong>Accoglienza gratuita</strong> – Il tuo autista ti aspetterà nella sala arrivi con un cartello con il tuo nome.</li>
    <li><strong>Monitoraggio voli & Nessun costo extra per ritardi</strong> – Controlliamo il tuo volo in tempo reale e adeguiamo l'orario di ritiro senza costi aggiuntivi.</li>
    <li><strong>Prezzi fissi – Nessun costo nascosto</strong> – Tariffe trasparenti e competitive.</li>
    <li><strong>Cancellazione gratuita fino a 24 ore prima dell'arrivo</strong> – Opzioni di prenotazione flessibili.</li>
    <li><strong>Assistenza clienti 24/7</strong> – Sempre disponibili per aiutarti.</li>
</ul>

<h2>Dettagli del viaggio</h2>
<ul>
    <li><strong>Distanza:</strong> Circa 40 km</li>
    <li><strong>Durata:</strong> 40-50 minuti (a seconda del traffico)</li>
    <li><strong>Percorso:</strong> Attraverso la strada D020 o O-7, passando per punti di riferimento chiave.</li>
</ul>

<h2>Prenota il tuo taxi in pochi minuti</h2>
<p>Prenota facilmente il tuo <strong>taxi privato dall'Aeroporto di Istanbul a Beyoğlu</strong> tramite il nostro sistema di prenotazione online. Goditi un <strong>trasferimento comodo e senza problemi</strong> con APL Transfers. <strong>Prenota ora!</strong></p>

            `,
            ru: `
            <h1>Такси из аэропорта Стамбула в Бейоглу</h1>
<p>Путешествуйте с комфортом с нашим <strong>трансфером на такси из аэропорта Стамбула в Бейоглу</strong>, предлагая <strong>фиксированную цену и поездку без стресса</strong> в один из самых оживленных районов Стамбула. Независимо от того, приезжаете ли вы по делам или в отпуск, APL Transfers обеспечит вам надежный и безопасный трансфер.</p>

<h2>Почему выбирают APL Transfers?</h2>
<ul>
    <li><strong>Бесплатная встреча</strong> – Ваш водитель будет ждать вас в зале прибытия с табличкой с вашим именем.</li>
    <li><strong>Отслеживание рейсов & Без дополнительных сборов за задержку</strong> – Мы отслеживаем ваш рейс в режиме реального времени и при необходимости корректируем время встречи без дополнительных затрат.</li>
    <li><strong>Фиксированные цены – Без скрытых платежей</strong> – Прозрачные и конкурентоспособные тарифы.</li>
    <li><strong>Бесплатная отмена за 24 часа до прибытия</strong> – Гибкие условия бронирования.</li>
    <li><strong>Круглосуточная поддержка клиентов</strong> – Мы всегда на связи и готовы помочь.</li>
</ul>

<h2>Детали поездки</h2>
<ul>
    <li><strong>Расстояние:</strong> Около 40 км</li>
    <li><strong>Длительность:</strong> 40-50 минут (в зависимости от дорожной ситуации)</li>
    <li><strong>Маршрут:</strong> Через автомагистрали D020 или O-7, мимо ключевых достопримечательностей.</li>
</ul>

<h2>Забронируйте такси за несколько минут</h2>
<p>Легко оформите <strong>личный трансфер на такси из аэропорта Стамбула в Бейоглу</strong> через нашу онлайн-систему бронирования. Наслаждайтесь <strong>комфортным и беспроблемным трансфером</strong> с APL Transfers. <strong>Забронировать сейчас!</strong></p>

            `,
            zh: `
            <h1>伊斯坦布尔机场至贝尤格鲁出租车接送</h1>
<p>通过我们的 <strong>伊斯坦布尔机场至贝尤格鲁出租车接送服务</strong>，享受舒适的出行体验。<strong>固定价格，无忧出行</strong>，让您轻松抵达伊斯坦布尔最具活力的地区之一。无论是商务出行还是休闲旅行，APL Transfers 都能确保您的旅程顺畅可靠。</p>

<h2>为什么选择 APL Transfers？</h2>
<ul>
    <li><strong>免费迎接服务</strong> – 司机将在到达大厅手持您的姓名牌迎接您。</li>
    <li><strong>航班跟踪 & 无延误附加费</strong> – 实时监控您的航班，如有延误，将自动调整接机时间，无需额外支付费用。</li>
    <li><strong>固定价格 – 无隐藏费用</strong> – 透明收费，无额外开销。</li>
    <li><strong>到达前 24 小时内可免费取消</strong> – 灵活的预订选项，保障您的行程。</li>
    <li><strong>24/7 客服支持</strong> – 我们随时为您提供帮助。</li>
</ul>

<h2>行程详情</h2>
<ul>
    <li><strong>距离：</strong> 约 40 公里</li>
    <li><strong>时长：</strong> 40-50 分钟（具体取决于交通状况）</li>
    <li><strong>路线：</strong> 途经 D020 或 O-7 高速公路，沿途经过多个重要地标。</li>
</ul>

<h2>几分钟内完成出租车预订</h2>
<p>通过我们的在线预订系统，轻松预订 <strong>伊斯坦布尔机场至贝尤格鲁的私人出租车</strong>。享受 <strong>舒适、无忧的接送服务</strong>，选择 APL Transfers。<strong>立即预订！</strong></p>

            `,
        },
        "/istanbul-airport-to-kadikoy": {
            en: `
            <h1>Istanbul Airport to Kadıköy Taxi Transfer</h1>
<p>Book a hassle-free <strong>Istanbul Airport to Kadıköy taxi transfer</strong> with APL Transfers and enjoy a smooth journey to the vibrant Asian side of Istanbul. Whether you’re traveling for business or leisure, our <strong>fixed-price, private transfer service</strong> ensures comfort, reliability, and efficiency.</p>

<h2>Why Choose APL Transfers?</h2>
<ul>
    <li><strong>Free Meet & Greet & Waiting Time</strong> – Your driver will be waiting at the arrivals hall with a name board.</li>
    <li><strong>APL Transfers Office Inside Istanbul Airport</strong> – Convenient in-terminal assistance.</li>
    <li><strong>Flight Tracking & No Extra Charge for Delays</strong> – We monitor your flight and adjust your pickup time accordingly at no extra cost.</li>
    <li><strong>Free Child Seats for 8 & 9-Seater Private Vehicles</strong> – Safe and convenient for families.</li>
    <li><strong>Free Cancellation Up to 24 Hours Before Arrival</strong> – Flexible booking options.</li>
    <li><strong>Fixed Prices – No Hidden Costs</strong> – Transparent pricing with no surprises.</li>
    <li><strong>24/7 Customer Support</strong> – Available at all times to assist you.</li>
    <li><strong>Luxury, Clean & Well-Maintained Vehicles</strong> – Choose from a variety of modern vehicles.</li>
    <li><strong>Comprehensive Coverage</strong> – We provide transfers to <strong>all hotels and addresses in Kadıköy</strong>.</li>
</ul>

<h2>Reliable & Hassle-Free Airport Transfer</h2>
<p>Traveling from <strong>Istanbul Airport (IST) to Kadıköy</strong> has never been easier. Avoid long taxi queues, unpredictable fares, and crowded public transport. With <strong>APL Transfers</strong>, your private driver will ensure a direct and stress-free ride to your destination.</p>

<h2>Journey Details</h2>
<ul>
    <li><strong>Distance:</strong> Approximately 55 km</li>
    <li><strong>Duration:</strong> Around 50-65 minutes (depending on traffic and route)</li>
    <li><strong>Route Options:</strong> Via O-7 Highway and Avrasya Tunnel or via TEM Highway over the Bosphorus Bridge</li>
</ul>

<h2>Booking Your Taxi Transfer</h2>
<p>Booking your <strong>Istanbul Airport to Kadıköy taxi</strong> is quick and easy. Use our <strong>secure online booking system</strong> to reserve your ride in advance and enjoy a smooth start to your trip.</p>

<h2>Additional Services</h2>
<ul>
    <li><strong>Child Seats Available</strong> – Ensuring safe travel for young passengers.</li>
    <li><strong>Business-Class Transfers</strong> – Premium vehicle options for corporate travelers.</li>
    <li><strong>Group Transfers</strong> – Minibuses available for larger groups.</li>
</ul>

<p>Start your journey stress-free with our <strong>reliable, comfortable, and affordable taxi service</strong> from <strong>Istanbul Airport to Kadıköy</strong>. <strong>Book now</strong> for a smooth ride!</p>

            `,
            tr: `
            <h1>İstanbul Havalimanı Kadıköy Taksi Transferi</h1>
<p>APL Transfers ile <strong>İstanbul Havalimanı'ndan Kadıköy'e taksi transferi</strong> için zahmetsiz bir rezervasyon yapın ve İstanbul'un canlı Asya yakasına konforlu bir yolculuk yapın. İster iş ister tatil için seyahat edin, <strong>sabit fiyatlı özel transfer hizmetimiz</strong> konfor, güvenilirlik ve verimlilik sağlar.</p>

<h2>Neden APL Transfers'i Seçmelisiniz?</h2>
<ul>
    <li><strong>Ücretsiz Karşılama & Bekleme Süresi</strong> – Şoförünüz sizi varış salonunda isminizin yazılı olduğu bir pano ile karşılayacaktır.</li>
    <li><strong>APL Transfers Ofisi İstanbul Havalimanı İçerisinde</strong> – Havalimanı içinde kolay destek imkanı.</li>
    <li><strong>Uçuş Takibi & Gecikmeler İçin Ek Ücret Yok</strong> – Uçuşunuzu takip ediyoruz ve rötar durumunda transfer saatinizi ücretsiz olarak ayarlıyoruz.</li>
    <li><strong>8 ve 9 Kişilik Özel Araçlar İçin Ücretsiz Çocuk Koltukları</strong> – Aileler için güvenli ve konforlu seyahat.</li>
    <li><strong>Varıştan 24 Saat Öncesine Kadar Ücretsiz İptal</strong> – Esnek rezervasyon seçenekleri.</li>
    <li><strong>Sabit Fiyatlar – Gizli Ücret Yok</strong> – Şeffaf fiyatlandırma, sürpriz masraflar yok.</li>
    <li><strong>7/24 Müşteri Desteği</strong> – İhtiyacınız olduğunda her zaman yanınızdayız.</li>
    <li><strong>Lüks, Temiz & Bakımlı Araçlar</strong> – Çeşitli modern araç seçenekleri.</li>
    <li><strong>Kapsamlı Hizmet</strong> – <strong>Kadıköy'deki tüm otellere ve adreslere</strong> transfer hizmeti sağlıyoruz.</li>
</ul>

<h2>Güvenilir & Sorunsuz Havalimanı Transferi</h2>
<p><strong>İstanbul Havalimanı'ndan (IST) Kadıköy'e</strong> seyahat etmek hiç bu kadar kolay olmamıştı. Uzun taksi kuyruklarından, öngörülemeyen ücretlerden ve kalabalık toplu taşımadan kaçının. <strong>APL Transfers</strong> ile özel şoförünüz sizi doğrudan ve stressiz bir şekilde varış noktanıza ulaştıracaktır.</p>

<h2>Yolculuk Detayları</h2>
<ul>
    <li><strong>Mesafe:</strong> Yaklaşık 55 km</li>
    <li><strong>Süre:</strong> Trafik ve güzergaha bağlı olarak 50-65 dakika</li>
    <li><strong>Güzergah Seçenekleri:</strong> O-7 Otoyolu ve Avrasya Tüneli üzerinden veya TEM Otoyolu ile Boğaziçi Köprüsü üzerinden</li>
</ul>

<h2>Taksi Transferinizi Rezerve Edin</h2>
<p><strong>İstanbul Havalimanı'ndan Kadıköy'e taksinizi</strong> hızlı ve kolay bir şekilde ayırtın. <strong>Güvenli online rezervasyon sistemimizi</strong> kullanarak transferinizi önceden planlayın ve seyahatinize sorunsuz bir başlangıç yapın.</p>

<h2>Ek Hizmetler</h2>
<ul>
    <li><strong>Çocuk Koltuğu Mevcut</strong> – Küçük yolcular için güvenli seyahat.</li>
    <li><strong>Business-Class Transferleri</strong> – İş seyahatleri için premium araç seçenekleri.</li>
    <li><strong>Grup Transferleri</strong> – Kalabalık gruplar için minibüs seçenekleri.</li>
</ul>

<p>Seyahatinize stressiz bir başlangıç yapın ve <strong>güvenilir, konforlu ve uygun fiyatlı taksi hizmetimizle</strong> <strong>İstanbul Havalimanı'ndan Kadıköy'e</strong> ulaşın. <strong>Hemen rezervasyon yapın</strong> ve keyifli bir yolculuğa çıkın!</p>

            `,
            ar: `
            <h1>تاكسي من مطار إسطنبول إلى كاديكوي</h1>
<p>احجز <strong>خدمة التاكسي من مطار إسطنبول إلى كاديكوي</strong> مع APL Transfers واستمتع برحلة سلسة إلى الجانب الآسيوي النابض بالحياة من إسطنبول. سواء كنت مسافرًا للعمل أو السياحة، فإن <strong>خدمتنا الخاصة للنقل بأسعار ثابتة</strong> تضمن لك الراحة والموثوقية والكفاءة.</p>

<h2>لماذا تختار APL Transfers؟</h2>
<ul>
    <li><strong>استقبال مجاني ولوحة ترحيب</strong> – سيكون السائق في انتظارك في صالة الوصول مع لوحة تحمل اسمك.</li>
    <li><strong>مكتب APL Transfers داخل مطار إسطنبول</strong> – دعم مريح داخل المطار.</li>
    <li><strong>تتبع الرحلات الجوية وعدم فرض رسوم إضافية على التأخير</strong> – نراقب رحلتك الجوية ونضبط وقت الاستقبال وفقًا لذلك دون أي تكلفة إضافية.</li>
    <li><strong>مقاعد أطفال مجانية للسيارات الخاصة ذات 8 و9 مقاعد</strong> – سفر آمن ومريح للعائلات.</li>
    <li><strong>إلغاء مجاني حتى 24 ساعة قبل الوصول</strong> – خيارات حجز مرنة.</li>
    <li><strong>أسعار ثابتة – بدون رسوم مخفية</strong> – تسعير شفاف بدون مفاجآت.</li>
    <li><strong>دعم العملاء على مدار الساعة</strong> – متاح دائمًا لمساعدتك.</li>
    <li><strong>مركبات فاخرة ونظيفة ومُصانة جيدًا</strong> – اختر من بين مجموعة متنوعة من السيارات الحديثة.</li>
    <li><strong>تغطية شاملة</strong> – نقدم النقل إلى <strong>جميع الفنادق والعناوين في كاديكوي</strong>.</li>
</ul>

<h2>نقل موثوق وخالٍ من المتاعب من المطار</h2>
<p>لم يكن السفر من <strong>مطار إسطنبول (IST) إلى كاديكوي</strong> أسهل من أي وقت مضى. تجنب طوابير سيارات الأجرة الطويلة والأسعار غير المتوقعة والمواصلات العامة المزدحمة. مع <strong>APL Transfers</strong>، سيضمن لك سائقك الخاص رحلة مباشرة وخالية من المتاعب إلى وجهتك.</p>

<h2>تفاصيل الرحلة</h2>
<ul>
    <li><strong>المسافة:</strong> حوالي 55 كم</li>
    <li><strong>المدة:</strong> حوالي 50-65 دقيقة (حسب الازدحام والطريق)</li>
    <li><strong>خيارات الطريق:</strong> عبر طريق O-7 ونفق أوراسيا أو عبر طريق TEM السريع فوق جسر البوسفور</li>
</ul>

<h2>احجز خدمة التاكسي الخاصة بك</h2>
<p>احجز <strong>تاكسي من مطار إسطنبول إلى كاديكوي</strong> بسرعة وسهولة. استخدم <strong>نظام الحجز الإلكتروني الآمن</strong> لدينا لضمان رحلتك مسبقًا والاستمتاع ببداية سلسة لرحلتك.</p>

<h2>الخدمات الإضافية</h2>
<ul>
    <li><strong>مقاعد أطفال متاحة</strong> – لضمان سفر آمن للأطفال.</li>
    <li><strong>نقل درجة رجال الأعمال</strong> – خيارات سيارات فاخرة للمسافرين من رجال الأعمال.</li>
    <li><strong>نقل المجموعات</strong> – حافلات صغيرة متاحة للمجموعات الكبيرة.</li>
</ul>

<p>ابدأ رحلتك بدون إجهاد مع <strong>خدمة التاكسي الموثوقة والمريحة والميسورة التكلفة</strong> من <strong>مطار إسطنبول إلى كاديكوي</strong>. <strong>احجز الآن</strong> لرحلة سلسة!</p>

            `,
            it: `
            <h1>Taxi dall'Aeroporto di Istanbul a Kadıköy</h1>
<p>Prenota un <strong>trasferimento in taxi dall'Aeroporto di Istanbul a Kadıköy</strong> con APL Transfers e goditi un viaggio fluido verso il vivace lato asiatico di Istanbul. Che tu stia viaggiando per affari o per piacere, il nostro <strong>servizio di trasferimento privato a prezzo fisso</strong> garantisce comfort, affidabilità ed efficienza.</p>

<h2>Perché scegliere APL Transfers?</h2>
<ul>
    <li><strong>Accoglienza gratuita & Attesa gratuita</strong> – Il tuo autista ti aspetterà nella sala arrivi con un cartello con il tuo nome.</li>
    <li><strong>Ufficio APL Transfers all'interno dell'Aeroporto di Istanbul</strong> – Assistenza comoda direttamente in aeroporto.</li>
    <li><strong>Monitoraggio voli & Nessun costo aggiuntivo per ritardi</strong> – Monitoriamo il tuo volo e regoliamo il tempo di prelievo di conseguenza senza costi extra.</li>
    <li><strong>Seggiolini per bambini gratuiti per veicoli privati da 8 e 9 posti</strong> – Sicurezza e comfort per le famiglie.</li>
    <li><strong>Cancellazione gratuita fino a 24 ore prima dell'arrivo</strong> – Opzioni di prenotazione flessibili.</li>
    <li><strong>Prezzi fissi – Nessun costo nascosto</strong> – Prezzi trasparenti senza sorprese.</li>
    <li><strong>Supporto clienti 24/7</strong> – Disponibile in qualsiasi momento per assistenza.</li>
    <li><strong>Veicoli di lusso, puliti e ben mantenuti</strong> – Scegli tra una varietà di veicoli moderni.</li>
    <li><strong>Copertura completa</strong> – Offriamo trasferimenti a <strong>tutti gli hotel e indirizzi di Kadıköy</strong>.</li>
</ul>

<h2>Trasferimento aeroportuale affidabile e senza problemi</h2>
<p>Viaggiare da <strong>Aeroporto di Istanbul (IST) a Kadıköy</strong> non è mai stato così facile. Evita le lunghe code dei taxi, le tariffe imprevedibili e i trasporti pubblici affollati. Con <strong>APL Transfers</strong>, il tuo autista privato ti garantirà un viaggio diretto e senza stress fino alla tua destinazione.</p>

<h2>Dettagli del viaggio</h2>
<ul>
    <li><strong>Distanza:</strong> Circa 55 km</li>
    <li><strong>Durata:</strong> Circa 50-65 minuti (a seconda del traffico e del percorso)</li>
    <li><strong>Opzioni di percorso:</strong> Attraverso la O-7 e il Tunnel Eurasia o via TEM attraverso il Ponte sul Bosforo</li>
</ul>

<h2>Prenota il tuo trasferimento in taxi</h2>
<p>Prenotare il tuo <strong>taxi dall'Aeroporto di Istanbul a Kadıköy</strong> è rapido e semplice. Usa il nostro <strong>sistema di prenotazione online sicuro</strong> per prenotare in anticipo e goderti un inizio di viaggio senza problemi.</p>

<h2>Servizi aggiuntivi</h2>
<ul>
    <li><strong>Seggiolini per bambini disponibili</strong> – Per garantire la sicurezza dei più piccoli.</li>
    <li><strong>Trasferimenti Business-Class</strong> – Opzioni di veicoli premium per viaggiatori d'affari.</li>
    <li><strong>Trasferimenti di gruppo</strong> – Minibus disponibili per gruppi numerosi.</li>
</ul>

<p>Inizia il tuo viaggio senza stress con il nostro <strong>servizio taxi affidabile, confortevole e conveniente</strong> da <strong>Aeroporto di Istanbul a Kadıköy</strong>. <strong>Prenota ora</strong> per un viaggio senza problemi!</p>

            `,
            ru: `
            <h1>Такси из аэропорта Стамбула в Кадыкёй</h1>
<p>Закажите <strong>трансфер на такси из аэропорта Стамбула в Кадыкёй</strong> с APL Transfers и наслаждайтесь комфортной поездкой на оживленную азиатскую часть Стамбула. Независимо от того, путешествуете ли вы по делам или в отпуск, наш <strong>фиксированный тариф и частный трансфер</strong> обеспечат вам комфорт, надежность и эффективность.</p>

<h2>Почему стоит выбрать APL Transfers?</h2>
<ul>
    <li><strong>Бесплатная встреча & ожидание</strong> – Ваш водитель будет ждать вас в зале прибытия с табличкой с вашим именем.</li>
    <li><strong>Офис APL Transfers в аэропорту Стамбула</strong> – Удобная помощь прямо в терминале.</li>
    <li><strong>Отслеживание рейсов & отсутствие дополнительных сборов за задержки</strong> – Мы отслеживаем ваш рейс и корректируем время подачи такси без дополнительной платы.</li>
    <li><strong>Бесплатные детские кресла для автомобилей на 8 и 9 мест</strong> – Безопасность и удобство для семей.</li>
    <li><strong>Бесплатная отмена бронирования за 24 часа до прибытия</strong> – Гибкие условия бронирования.</li>
    <li><strong>Фиксированные цены – Без скрытых платежей</strong> – Прозрачные тарифы, без сюрпризов.</li>
    <li><strong>Круглосуточная поддержка клиентов</strong> – Мы всегда на связи для вашей помощи.</li>
    <li><strong>Роскошные, чистые и ухоженные автомобили</strong> – Выберите любой из современных автомобилей.</li>
    <li><strong>Обширное покрытие</strong> – Мы осуществляем трансферы во <strong>все отели и адреса в Кадыкёе</strong>.</li>
</ul>

<h2>Надежный и удобный трансфер из аэропорта</h2>
<p>Путешествие из <strong>аэропорта Стамбула (IST) в Кадыкёй</strong> никогда не было таким простым. Избегайте длинных очередей на такси, непредсказуемых тарифов и переполненного общественного транспорта. С <strong>APL Transfers</strong> ваш личный водитель доставит вас напрямую и без стресса.</p>

<h2>Детали поездки</h2>
<ul>
    <li><strong>Расстояние:</strong> примерно 55 км</li>
    <li><strong>Продолжительность:</strong> около 50-65 минут (в зависимости от трафика и маршрута)</li>
    <li><strong>Варианты маршрута:</strong> через автомагистраль O-7 и туннель Евразия или через автомагистраль TEM и Босфорский мост</li>
</ul>

<h2>Бронирование такси</h2>
<p>Забронировать <strong>такси из аэропорта Стамбула в Кадыкёй</strong> легко и быстро. Используйте нашу <strong>безопасную систему онлайн-бронирования</strong>, чтобы заранее запланировать свою поездку и начать путешествие без лишних забот.</p>

<h2>Дополнительные услуги</h2>
<ul>
    <li><strong>Детские кресла</strong> – Безопасные поездки для маленьких пассажиров.</li>
    <li><strong>Бизнес-класс</strong> – Премиальные автомобили для деловых путешественников.</li>
    <li><strong>Групповые трансферы</strong> – Минивэны для больших компаний.</li>
</ul>

<p>Начните свое путешествие без стресса с нашим <strong>надежным, комфортным и доступным такси-сервисом</strong> из <strong>аэропорта Стамбула в Кадыкёй</strong>. <strong>Забронируйте сейчас</strong> и наслаждайтесь поездкой!</p>

            `,
            es: `
            
            <h1>Taxi del Aeropuerto de Estambul a Kadıköy</h1>
<p>Reserva un <strong>traslado en taxi desde el Aeropuerto de Estambul a Kadıköy</strong> con APL Transfers y disfruta de un viaje cómodo a la vibrante parte asiática de Estambul. Ya sea por negocios o placer, nuestro <strong>servicio de traslado privado con tarifa fija</strong> garantiza comodidad, confiabilidad y eficiencia.</p>

<h2>¿Por qué elegir APL Transfers?</h2>
<ul>
    <li><strong>Recepción gratuita y tiempo de espera</strong> – Tu conductor te esperará en la sala de llegadas con un cartel con tu nombre.</li>
    <li><strong>Oficina de APL Transfers dentro del Aeropuerto de Estambul</strong> – Asistencia conveniente en la terminal.</li>
    <li><strong>Seguimiento de vuelos y sin cargos adicionales por retrasos</strong> – Monitoreamos tu vuelo y ajustamos la hora de recogida sin costo adicional.</li>
    <li><strong>Asientos para niños gratuitos en vehículos privados de 8 y 9 plazas</strong> – Seguridad y comodidad para las familias.</li>
    <li><strong>Cancelación gratuita hasta 24 horas antes de la llegada</strong> – Opciones de reserva flexibles.</li>
    <li><strong>Precios fijos – Sin costes ocultos</strong> – Tarifas transparentes, sin sorpresas.</li>
    <li><strong>Atención al cliente 24/7</strong> – Siempre disponibles para ayudarte.</li>
    <li><strong>Vehículos de lujo, limpios y bien mantenidos</strong> – Elige entre una variedad de coches modernos.</li>
    <li><strong>Cobertura completa</strong> – Ofrecemos traslados a <strong>todos los hoteles y direcciones en Kadıköy</strong>.</li>
</ul>

<h2>Traslado confiable y sin complicaciones desde el aeropuerto</h2>
<p>Viajar desde <strong>el Aeropuerto de Estambul (IST) a Kadıköy</strong> nunca ha sido tan fácil. Evita largas colas de taxis, tarifas impredecibles y transporte público abarrotado. Con <strong>APL Transfers</strong>, tu conductor privado garantizará un viaje directo y sin estrés a tu destino.</p>

<h2>Detalles del viaje</h2>
<ul>
    <li><strong>Distancia:</strong> Aproximadamente 55 km</li>
    <li><strong>Duración:</strong> Alrededor de 50-65 minutos (dependiendo del tráfico y la ruta)</li>
    <li><strong>Opciones de ruta:</strong> A través de la autopista O-7 y el Túnel Eurasia o por la autopista TEM sobre el Puente del Bósforo</li>
</ul>

<h2>Reserva tu traslado en taxi</h2>
<p>Reservar tu <strong>taxi del Aeropuerto de Estambul a Kadıköy</strong> es rápido y sencillo. Utiliza nuestro <strong>sistema de reserva en línea seguro</strong> para planificar tu traslado con antelación y comenzar tu viaje sin problemas.</p>

<h2>Servicios adicionales</h2>
<ul>
    <li><strong>Asientos para niños disponibles</strong> – Para garantizar la seguridad de los más pequeños.</li>
    <li><strong>Traslados en clase ejecutiva</strong> – Opciones de vehículos premium para viajeros de negocios.</li>
    <li><strong>Traslados para grupos</strong> – Minibuses disponibles para grupos grandes.</li>
</ul>

<p>Empieza tu viaje sin estrés con nuestro <strong>servicio de taxi confiable, cómodo y asequible</strong> desde <strong>el Aeropuerto de Estambul a Kadıköy</strong>. <strong>¡Reserva ahora</strong> y disfruta de un viaje tranquilo!</p>
`,
            zh: `
            <h1>伊斯坦布尔机场至卡德柯伊出租车</h1>
<p>通过 APL Transfers 预订 <strong>伊斯坦布尔机场至卡德柯伊出租车</strong>，享受顺畅的旅程，前往伊斯坦布尔充满活力的亚洲一侧。无论您是商务旅行还是休闲出行，我们的 <strong>固定价格私人接送服务</strong> 都能确保您的舒适、可靠和高效出行。</p>

<h2>为什么选择 APL Transfers？</h2>
<ul>
    <li><strong>免费接机 & 等候时间</strong> – 司机将在到达大厅举着您的姓名牌迎接您。</li>
    <li><strong>APL Transfers 办公室位于伊斯坦布尔机场内</strong> – 提供便捷的机场内协助。</li>
    <li><strong>航班跟踪 & 无航班延误额外费用</strong> – 我们实时监测您的航班并调整接送时间，无需额外费用。</li>
    <li><strong>免费儿童座椅（适用于 8 至 9 座私人车辆）</strong> – 确保家庭出行安全舒适。</li>
    <li><strong>抵达前 24 小时内免费取消</strong> – 提供灵活的预订选项。</li>
    <li><strong>固定价格 – 无隐藏费用</strong> – 透明定价，无意外费用。</li>
    <li><strong>24/7 客户支持</strong> – 我们随时为您提供帮助。</li>
    <li><strong>豪华、整洁 & 维护良好的车辆</strong> – 提供多种现代化车辆供您选择。</li>
    <li><strong>广泛覆盖</strong> – 我们提供前往 <strong>卡德柯伊所有酒店和地址</strong> 的接送服务。</li>
</ul>

<h2>可靠 & 无忧的机场接送服务</h2>
<p>从 <strong>伊斯坦布尔机场 (IST) 前往卡德柯伊</strong> 从未如此便捷。避免排长队打车、价格不透明和拥挤的公共交通。通过 <strong>APL Transfers</strong>，您的私人司机将确保您顺利直达目的地。</p>

<h2>行程详情</h2>
<ul>
    <li><strong>距离：</strong> 约 55 公里</li>
    <li><strong>时长：</strong> 约 50-65 分钟（取决于交通状况和路线）</li>
    <li><strong>路线选项：</strong> 通过 O-7 高速公路和欧亚隧道，或经 TEM 高速公路跨越博斯普鲁斯大桥</li>
</ul>

<h2>预订您的出租车接送服务</h2>
<p>预订您的 <strong>伊斯坦布尔机场至卡德柯伊出租车</strong> 轻松快捷。使用我们的 <strong>安全在线预订系统</strong> 提前安排您的接送服务，确保旅程顺畅。</p>

<h2>额外服务</h2>
<ul>
    <li><strong>提供儿童座椅</strong> – 确保儿童安全出行。</li>
    <li><strong>商务舱接送</strong> – 为商务旅客提供高端车辆选择。</li>
    <li><strong>团体接送</strong> – 提供适合大型团体的商务车服务。</li>
</ul>

<p>让您的旅程从容开始，享受我们 <strong>可靠、舒适且价格合理的出租车服务</strong>，从 <strong>伊斯坦布尔机场到卡德柯伊</strong>。<strong>立即预订</strong>，开启顺畅之旅！</p>

            `,
        },
        "/istanbul-airport-to-besiktas": {
            en: `
            <h1>Istanbul Airport to Beşiktaş Taxi Transfer</h1>
<p>Enjoy a seamless and comfortable <strong>Istanbul Airport to Beşiktaş taxi transfer</strong> with APL Transfers. Whether you’re visiting for business or leisure, our fixed-price, private transfer service ensures a stress-free ride to one of Istanbul’s most lively districts.</p>

<h2>Why Choose APL Transfers?</h2>
<ul>
    <li><strong>Free Meet & Greet & Waiting Time</strong> – Your driver will be waiting at the arrivals hall with a name board.</li>
    <li><strong>Flight Tracking & No Extra Charge for Delays</strong> – We monitor your flight and adjust your pickup time accordingly at no extra cost.</li>
    <li><strong>Fixed Prices – No Hidden Costs</strong> – What you see is what you pay.</li>
    <li><strong>Free Cancellation Up to 24 Hours Before Arrival</strong> – Flexible booking options.</li>
    <li><strong>24/7 Customer Support</strong> – We are available anytime you need assistance.</li>
    <li><strong>Luxury, Clean & Well-Maintained Vehicles</strong> – Travel in style and comfort.</li>
    <li><strong>Comprehensive Coverage</strong> – We provide transfers to <strong>all hotels and addresses in Beşiktaş</strong>.</li>
</ul>

<h2>Reliable & Hassle-Free Airport Transfer</h2>
<p>Skip the long taxi queues and unreliable public transport. With <strong>APL Transfers</strong>, your driver will pick you up directly from <strong>Istanbul Airport (IST)</strong> and take you to <strong>Beşiktaş in a modern, well-maintained vehicle</strong>.</p>

<h2>Journey Details</h2>
<ul>
    <li><strong>Distance:</strong> Approximately 43 km</li>
    <li><strong>Duration:</strong> Around 45-60 minutes (depending on traffic)</li>
    <li><strong>Route Options:</strong> Via O-7 Highway or TEM Highway, crossing the Bosphorus Bridge</li>
</ul>

<h2>Booking Your Taxi Transfer</h2>
<p>Booking your <strong>Istanbul Airport to Beşiktaş taxi</strong> is simple. Use our <strong>secure online booking system</strong> to reserve your ride in advance and ensure a smooth arrival in Istanbul.</p>

<h2>Additional Services</h2>
<ul>
    <li><strong>Child Seats Available</strong> – Safe travel for families.</li>
    <li><strong>Business-Class Transfers</strong> – Premium vehicle options for corporate travelers.</li>
    <li><strong>Group Transfers</strong> – Minibuses available for larger parties.</li>
</ul>

<p>Experience a <strong>comfortable, reliable, and affordable</strong> transfer from <strong>Istanbul Airport to Beşiktaş</strong>. <strong>Book now</strong> and start your journey in Istanbul with ease!</p>

            `,
            tr: `
            <h1>İstanbul Havalimanı Beşiktaş Taksi Transferi</h1>
<p><strong>İstanbul Havalimanı'ndan Beşiktaş'a taksi transferinizi</strong> APL Transfers ile zahmetsiz ve konforlu bir şekilde gerçekleştirin. İster iş ister tatil amaçlı seyahat ediyor olun, sabit fiyatlı özel transfer hizmetimiz, İstanbul’un en hareketli bölgelerinden birine stressiz bir yolculuk sunar.</p>

<h2>Neden APL Transfers’i Tercih Etmelisiniz?</h2>
<ul>
    <li><strong>Ücretsiz Karşılama & Bekleme Süresi</strong> – Şoförünüz, isminizin yazılı olduğu tabela ile varış salonunda sizi bekliyor olacak.</li>
    <li><strong>Uçuş Takibi & Gecikmeler İçin Ek Ücret Yok</strong> – Uçuşunuzu anlık olarak takip ediyor ve rötar durumunda ek ücret almadan transfer saatinizi ayarlıyoruz.</li>
    <li><strong>Sabit Fiyatlar – Gizli Ücret Yok</strong> – Ödediğiniz fiyat dışında ekstra bir ücret çıkmaz.</li>
    <li><strong>Varıştan 24 Saat Öncesine Kadar Ücretsiz İptal</strong> – Esnek rezervasyon seçenekleri.</li>
    <li><strong>7/24 Müşteri Desteği</strong> – Yardıma ihtiyacınız olduğunda her zaman buradayız.</li>
    <li><strong>Lüks, Temiz & Bakımlı Araçlar</strong> – Konforlu ve şık bir yolculuk deneyimi yaşayın.</li>
    <li><strong>Kapsamlı Hizmet</strong> – <strong>Beşiktaş’taki tüm otel ve adreslere</strong> transfer hizmeti sağlıyoruz.</li>
</ul>

<h2>Güvenilir & Sorunsuz Havalimanı Transferi</h2>
<p>Uzun taksi kuyruklarını ve güvenilmez toplu taşımayı unutun. <strong>APL Transfers</strong> ile şoförünüz sizi doğrudan <strong>İstanbul Havalimanı’ndan (IST)</strong> alır ve <strong>Beşiktaş’a modern, bakımlı bir araçla</strong> götürür.</p>

<h2>Yolculuk Detayları</h2>
<ul>
    <li><strong>Mesafe:</strong> Yaklaşık 43 km</li>
    <li><strong>Süre:</strong> Trafik durumuna bağlı olarak yaklaşık 45-60 dakika</li>
    <li><strong>Rota Seçenekleri:</strong> O-7 Otoyolu veya TEM Otoyolu üzerinden Boğaziçi Köprüsü</li>
</ul>

<h2>Taksi Transferinizi Rezerve Edin</h2>
<p><strong>İstanbul Havalimanı’ndan Beşiktaş’a taksi</strong> rezervasyonu yapmak çok kolay. <strong>Güvenli online rezervasyon sistemimizi</strong> kullanarak önceden transferinizi planlayın ve İstanbul’a sorunsuz bir şekilde varın.</p>

<h2>Ek Hizmetler</h2>
<ul>
    <li><strong>Çocuk Koltukları Mevcut</strong> – Aileler için güvenli seyahat imkanı.</li>
    <li><strong>Business-Class Transferler</strong> – İş seyahati yapanlar için premium araç seçenekleri.</li>
    <li><strong>Grup Transferleri</strong> – Büyük gruplar için minibüs seçenekleri.</li>
</ul>

<p><strong>Konforlu, güvenilir ve uygun fiyatlı</strong> bir transfer deneyimi için <strong>İstanbul Havalimanı’ndan Beşiktaş’a</strong> yolculuğunuza başlayın. <strong>Hemen rezervasyon yapın</strong> ve İstanbul seyahatinize sorunsuz bir başlangıç yapın!</p>

            `,
            ar: `
            <h1>تاكسي من مطار إسطنبول إلى بشكتاش</h1>
<p>استمتع برحلة مريحة وسلسة مع <strong>خدمة التاكسي من مطار إسطنبول إلى بشكتاش</strong> مع APL Transfers. سواء كنت مسافرًا للعمل أو السياحة، فإن خدمتنا الخاصة ذات الأسعار الثابتة تضمن لك رحلة خالية من التوتر إلى أحد أكثر أحياء إسطنبول حيوية.</p>

<h2>لماذا تختار APL Transfers؟</h2>
<ul>
    <li><strong>استقبال مجاني & وقت انتظار</strong> – سيكون سائقك في انتظارك في صالة الوصول حاملًا لافتة تحمل اسمك.</li>
    <li><strong>تتبع الرحلات & لا توجد رسوم إضافية على التأخيرات</strong> – نتابع رحلتك في الوقت الفعلي ونعدل وقت الاستقبال دون أي رسوم إضافية.</li>
    <li><strong>أسعار ثابتة – لا تكاليف مخفية</strong> – ما تراه هو ما تدفعه.</li>
    <li><strong>إلغاء مجاني حتى 24 ساعة قبل الوصول</strong> – خيارات حجز مرنة.</li>
    <li><strong>دعم العملاء على مدار 24/7</strong> – نحن متاحون لمساعدتك في أي وقت تحتاج فيه.</li>
    <li><strong>سيارات فاخرة ونظيفة ومُعتنى بها جيدًا</strong> – استمتع برحلة أنيقة ومريحة.</li>
    <li><strong>تغطية شاملة</strong> – نقدم خدمات النقل إلى <strong>جميع الفنادق والعناوين في بشكتاش</strong>.</li>
</ul>

<h2>نقل موثوق وخالٍ من المتاعب من المطار</h2>
<p>تجنب طوابير التاكسي الطويلة والمواصلات العامة غير الموثوقة. مع <strong>APL Transfers</strong>، سيقوم سائقك بأخذك مباشرة من <strong>مطار إسطنبول (IST)</strong> وينقلك إلى <strong>بشكتاش بسيارة حديثة ومُعتنى بها جيدًا</strong>.</p>

<h2>تفاصيل الرحلة</h2>
<ul>
    <li><strong>المسافة:</strong> حوالي 43 كم</li>
    <li><strong>المدة:</strong> حوالي 45-60 دقيقة (حسب حركة المرور)</li>
    <li><strong>خيارات المسار:</strong> عبر طريق O-7 السريع أو طريق TEM السريع عبر جسر البوسفور</li>
</ul>

<h2>احجز خدمة التاكسي الخاصة بك</h2>
<p>حجز <strong>تاكسي من مطار إسطنبول إلى بشكتاش</strong> سهل وسريع. استخدم <strong>نظام الحجز الإلكتروني الآمن</strong> لدينا لتحديد موعد رحلتك مسبقًا وضمان وصول سلس إلى إسطنبول.</p>

<h2>خدمات إضافية</h2>
<ul>
    <li><strong>مقاعد أطفال متاحة</strong> – لضمان سفر آمن للعائلات.</li>
    <li><strong>نقل درجة رجال الأعمال</strong> – خيارات سيارات فاخرة للمسافرين من رجال الأعمال.</li>
    <li><strong>نقل المجموعات</strong> – تتوفر حافلات صغيرة للمجموعات الكبيرة.</li>
</ul>

<p>ابدأ رحلتك بدون قلق مع <strong>خدمة التاكسي المريحة والموثوقة والميسورة التكلفة</strong> من <strong>مطار إسطنبول إلى بشكتاش</strong>. <strong>احجز الآن</strong> واستمتع برحلة سلسة!</p>

            `,
            es: `
            <h1>Taxi del Aeropuerto de Estambul a Beşiktaş</h1>
<p>Disfruta de un traslado en <strong>taxi desde el Aeropuerto de Estambul a Beşiktaş</strong> con APL Transfers de manera cómoda y sin complicaciones. Ya sea por negocios o placer, nuestro servicio de traslado privado con tarifa fija garantiza un viaje sin estrés a uno de los distritos más animados de Estambul.</p>

<h2>¿Por qué elegir APL Transfers?</h2>
<ul>
    <li><strong>Recepción gratuita & Tiempo de espera</strong> – Tu conductor te estará esperando en la sala de llegadas con un cartel con tu nombre.</li>
    <li><strong>Seguimiento de vuelos & Sin cargo adicional por retrasos</strong> – Monitoreamos tu vuelo y ajustamos la hora de recogida sin costo adicional.</li>
    <li><strong>Precios fijos – Sin costos ocultos</strong> – Lo que ves es lo que pagas.</li>
    <li><strong>Cancelación gratuita hasta 24 horas antes de la llegada</strong> – Opciones de reserva flexibles.</li>
    <li><strong>Atención al cliente 24/7</strong> – Estamos disponibles en cualquier momento que necesites asistencia.</li>
    <li><strong>Vehículos de lujo, limpios y bien mantenidos</strong> – Viaja con estilo y comodidad.</li>
    <li><strong>Cobertura completa</strong> – Ofrecemos traslados a <strong>todos los hoteles y direcciones en Beşiktaş</strong>.</li>
</ul>

<h2>Traslado confiable y sin complicaciones desde el aeropuerto</h2>
<p>Evita las largas colas para tomar un taxi y el transporte público poco confiable. Con <strong>APL Transfers</strong>, tu conductor te recogerá directamente en el <strong>Aeropuerto de Estambul (IST)</strong> y te llevará a <strong>Beşiktaş en un vehículo moderno y bien mantenido</strong>.</p>

<h2>Detalles del viaje</h2>
<ul>
    <li><strong>Distancia:</strong> Aproximadamente 43 km</li>
    <li><strong>Duración:</strong> Alrededor de 45-60 minutos (dependiendo del tráfico)</li>
    <li><strong>Opciones de ruta:</strong> A través de la autopista O-7 o la autopista TEM, cruzando el Puente del Bósforo</li>
</ul>

<h2>Reserva tu traslado en taxi</h2>
<p>Reservar tu <strong>taxi del Aeropuerto de Estambul a Beşiktaş</strong> es simple y rápido. Usa nuestro <strong>sistema de reserva en línea seguro</strong> para programar tu viaje con anticipación y asegurarte de una llegada sin problemas a Estambul.</p>

<h2>Servicios adicionales</h2>
<ul>
    <li><strong>Asientos para niños disponibles</strong> – Viaje seguro para familias.</li>
    <li><strong>Traslados en clase ejecutiva</strong> – Opciones de vehículos premium para viajeros de negocios.</li>
    <li><strong>Traslados grupales</strong> – Minibuses disponibles para grupos grandes.</li>
</ul>

<p>Experimenta un traslado <strong>cómodo, confiable y asequible</strong> desde el <strong>Aeropuerto de Estambul a Beşiktaş</strong>. <strong>¡Reserva ahora</strong> y comienza tu viaje en Estambul con tranquilidad!</p>

            `,
            it: `
            <h1>Taxi dall'Aeroporto di Istanbul a Beşiktaş</h1>
<p>Goditi un trasferimento <strong>in taxi dall'Aeroporto di Istanbul a Beşiktaş</strong> con APL Transfers in modo semplice e confortevole. Che tu stia viaggiando per affari o per piacere, il nostro servizio di trasferimento privato a prezzo fisso garantisce un viaggio senza stress verso uno dei quartieri più vivaci di Istanbul.</p>

<h2>Perché scegliere APL Transfers?</h2>
<ul>
    <li><strong>Accoglienza gratuita & Tempo di attesa</strong> – Il tuo autista ti aspetterà nella sala arrivi con un cartello con il tuo nome.</li>
    <li><strong>Monitoraggio del volo & Nessun costo aggiuntivo per ritardi</strong> – Monitoriamo il tuo volo e regoliamo l'orario di prelievo senza costi aggiuntivi.</li>
    <li><strong>Prezzi fissi – Nessun costo nascosto</strong> – Paghi solo quello che vedi.</li>
    <li><strong>Cancellazione gratuita fino a 24 ore prima dell'arrivo</strong> – Opzioni di prenotazione flessibili.</li>
    <li><strong>Supporto clienti 24/7</strong> – Siamo disponibili in qualsiasi momento per aiutarti.</li>
    <li><strong>Veicoli di lusso, puliti e ben mantenuti</strong> – Viaggia con stile e comfort.</li>
    <li><strong>Copertura completa</strong> – Offriamo trasferimenti a <strong>tutti gli hotel e indirizzi di Beşiktaş</strong>.</li>
</ul>

<h2>Trasferimento affidabile e senza problemi dall'aeroporto</h2>
<p>Evita le lunghe code per i taxi e il trasporto pubblico inaffidabile. Con <strong>APL Transfers</strong>, il tuo autista ti preleverà direttamente dall'<strong>Aeroporto di Istanbul (IST)</strong> e ti porterà a <strong>Beşiktaş con un veicolo moderno e ben mantenuto</strong>.</p>

<h2>Dettagli del viaggio</h2>
<ul>
    <li><strong>Distanza:</strong> Circa 43 km</li>
    <li><strong>Durata:</strong> Circa 45-60 minuti (a seconda del traffico)</li>
    <li><strong>Opzioni di percorso:</strong> Autostrada O-7 o Autostrada TEM attraversando il Ponte sul Bosforo</li>
</ul>

<h2>Prenota il tuo trasferimento in taxi</h2>
<p>Prenotare il tuo <strong>taxi dall'Aeroporto di Istanbul a Beşiktaş</strong> è semplice e veloce. Usa il nostro <strong>sistema di prenotazione online sicuro</strong> per organizzare il tuo trasferimento in anticipo e assicurarti un arrivo senza problemi a Istanbul.</p>

<h2>Servizi aggiuntivi</h2>
<ul>
    <li><strong>Seggiolini per bambini disponibili</strong> – Viaggi sicuri per famiglie.</li>
    <li><strong>Trasferimenti Business-Class</strong> – Opzioni di veicoli premium per viaggiatori d'affari.</li>
    <li><strong>Trasferimenti di gruppo</strong> – Minibus disponibili per gruppi numerosi.</li>
</ul>

<p>Goditi un trasferimento <strong>comodo, affidabile e conveniente</strong> dall'<strong>Aeroporto di Istanbul a Beşiktaş</strong>. <strong>Prenota ora</strong> e inizia il tuo viaggio a Istanbul senza stress!</p>

            `,
            ru: `
            <h1>Такси из аэропорта Стамбула в Бешикташ</h1>
<p>Наслаждайтесь комфортным <strong>трансфером на такси из аэропорта Стамбула в Бешикташ</strong> с APL Transfers. Независимо от того, путешествуете ли вы по делам или в отпуск, наша услуга частного трансфера с фиксированной ценой обеспечит вам поездку без стресса в один из самых оживленных районов Стамбула.</p>

<h2>Почему выбирают APL Transfers?</h2>
<ul>
    <li><strong>Бесплатная встреча & Ожидание</strong> – Ваш водитель будет ждать вас в зале прилета с табличкой с вашим именем.</li>
    <li><strong>Отслеживание рейсов & Без дополнительной платы за задержки</strong> – Мы отслеживаем ваш рейс и корректируем время подачи такси без дополнительной оплаты.</li>
    <li><strong>Фиксированные цены – Без скрытых платежей</strong> – Вы платите только ту сумму, которую видите.</li>
    <li><strong>Бесплатная отмена за 24 часа до прибытия</strong> – Гибкие условия бронирования.</li>
    <li><strong>Круглосуточная поддержка клиентов</strong> – Мы всегда на связи, когда вам нужна помощь.</li>
    <li><strong>Роскошные, чистые и ухоженные автомобили</strong> – Путешествуйте с комфортом и в безопасности.</li>
    <li><strong>Широкий охват</strong> – Мы предлагаем трансферы во <strong>все отели и по всем адресам в Бешикташе</strong>.</li>
</ul>

<h2>Надежный и удобный трансфер из аэропорта</h2>
<p>Избегайте длинных очередей на такси и ненадежного общественного транспорта. С <strong>APL Transfers</strong> ваш водитель встретит вас прямо в <strong>аэропорту Стамбула (IST)</strong> и доставит вас в <strong>Бешикташ на современном, комфортабельном автомобиле</strong>.</p>

<h2>Детали поездки</h2>
<ul>
    <li><strong>Расстояние:</strong> около 43 км</li>
    <li><strong>Длительность:</strong> около 45-60 минут (в зависимости от дорожной ситуации)</li>
    <li><strong>Маршрут:</strong> по шоссе O-7 или TEM через Босфорский мост</li>
</ul>

<h2>Бронирование такси</h2>
<p>Забронировать <strong>такси из аэропорта Стамбула в Бешикташ</strong> просто и удобно. Используйте нашу <strong>безопасную онлайн-систему бронирования</strong>, чтобы оформить заказ заранее и обеспечить себе комфортное прибытие в Стамбул.</p>

<h2>Дополнительные услуги</h2>
<ul>
    <li><strong>Детские кресла</strong> – Безопасные поездки для семей с детьми.</li>
    <li><strong>Бизнес-класс трансфер</strong> – Премиальные автомобили для деловых поездок.</li>
    <li><strong>Групповые трансферы</strong> – Минивэны для больших групп.</li>
</ul>

<p>Наслаждайтесь <strong>комфортным, надежным и доступным</strong> трансфером <strong>из аэропорта Стамбула в Бешикташ</strong>. <strong>Забронируйте сейчас</strong> и начните свое путешествие в Стамбуле с комфортом!</p>

            `,
            zh: `
            <h1>伊斯坦布尔机场至贝西克塔斯出租车</h1>
<p>通过 APL Transfers 享受顺畅舒适的 <strong>伊斯坦布尔机场至贝西克塔斯出租车接送服务</strong>。无论您是商务出行还是旅游观光，我们的固定价格私人接送服务都能确保您轻松前往伊斯坦布尔最热闹的地区之一。</p>

<h2>为什么选择 APL Transfers？</h2>
<ul>
    <li><strong>免费迎接 & 等候时间</strong> – 您的司机将在到达大厅举着您的姓名牌等待您。</li>
    <li><strong>航班跟踪 & 延误无额外费用</strong> – 我们实时监控您的航班，并相应调整接送时间，无需额外费用。</li>
    <li><strong>固定价格 – 无隐藏费用</strong> – 透明定价，无任何额外收费。</li>
    <li><strong>最多可在抵达前 24 小时免费取消</strong> – 灵活的预订选项。</li>
    <li><strong>24/7 客户支持</strong> – 无论何时您需要帮助，我们都随时待命。</li>
    <li><strong>豪华、干净且维护良好的车辆</strong> – 享受舒适、时尚的旅程。</li>
    <li><strong>全面覆盖</strong> – 我们提供前往 <strong>贝西克塔斯所有酒店和地址</strong>的接送服务。</li>
</ul>

<h2>可靠 & 无忧的机场接送</h2>
<p>无需排长队等候出租车，也不用担心公共交通的不确定性。选择 <strong>APL Transfers</strong>，您的司机将在 <strong>伊斯坦布尔机场 (IST)</strong> 直接接您，并使用 <strong>现代化、高质量的车辆</strong>安全送达贝西克塔斯。</p>

<h2>行程详情</h2>
<ul>
    <li><strong>距离：</strong> 约 43 公里</li>
    <li><strong>时长：</strong> 约 45-60 分钟（取决于交通情况）</li>
    <li><strong>路线选择：</strong> 经 O-7 高速公路或 TEM 高速公路，途经博斯普鲁斯大桥</li>
</ul>

<h2>预订您的出租车接送服务</h2>
<p>预订 <strong>伊斯坦布尔机场至贝西克塔斯出租车</strong> 非常简单快捷。使用我们的 <strong>安全在线预订系统</strong> 提前预定，确保您顺利抵达伊斯坦布尔。</p>

<h2>额外服务</h2>
<ul>
    <li><strong>提供儿童座椅</strong> – 保障家庭出行安全。</li>
    <li><strong>商务舱接送</strong> – 为商务旅客提供高端车辆选择。</li>
    <li><strong>团体接送</strong> – 提供适合大型团队的商务面包车。</li>
</ul>

<p>享受 <strong>舒适、可靠、经济实惠</strong> 的 <strong>伊斯坦布尔机场至贝西克塔斯</strong> 接送服务。<strong>立即预订</strong>，轻松开启您的伊斯坦布尔之旅！</p>

            `,
        },


        "/istanbul-airport-to-nisantasi": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        },
        "/istanbul-airport-to-eminonu": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        },
        "/istanbul-airport-to-uskudar-asian-side": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        },
        "/istanbul-airport-to-levent-maslak": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        },
        "/istanbul-airport-to-ortakoy": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        },
        "/istanbul-airport-to-sapanca": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        },
        "/istanbul-airport-to-bursa": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        },
        "/istanbul-airport-to-yalova": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        },
        "/istanbul-airport-to-kocaeli-izmit": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        },
        "/istanbul-airport-to-sile-and-agva": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        },
        "/istanbul-airport-to-edirne": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        },
        "/istanbul-airport-to-tekirdag": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        },
        "/istanbul-airport-to-canakkale": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        }
    },
    SAW: {},
    AYT: {},
    DLM: {},
    BJY: {},
    ADB: {},
    GZP: {}
}


//!Beyoglu
//!Taksim
//!Sultanahmet
//!Kadikoy