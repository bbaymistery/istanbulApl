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
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        },
        "/istanbul-airport-to-kadikoy": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        },
        "/istanbul-airport-to-beyoglu": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
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
}


//*****************************************
//*****************************************
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
                `<link rel=\"canonical\" href=\"${env.websiteDomain}"/istanbul-airport-to-sultanahmet\" />`,
                `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}"/istanbul-airport-to-sultanahmet\" />`,
                `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar"/istanbul-airport-to-sultanahmet\" />`,
                `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es"/istanbul-airport-to-sultanahmet\" />`,
                `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it"/istanbul-airport-to-sultanahmet\" />`,
                `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru"/istanbul-airport-to-sultanahmet\" />`,
                `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh"/istanbul-airport-to-sultanahmet\" />`,
                `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}"/istanbul-airport-to-sultanahmet\" />`,
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
            "it": [
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
        "/istanbul-airport-to-kadikoy": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        },
        "/istanbul-airport-to-beyoglu": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
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


//*****************************************
//*****************************************
export const getSinglekeywordsTitlePopularDestinationPage = (pathname, language, hasTaxiDeals) => {
    const headTitle = keywordsTitlePopularDestinationPage[hasTaxiDeals][pathname]?.headTitle[language] || ""
    const keywords = keywordsTitlePopularDestinationPage[hasTaxiDeals][pathname]?.keywords[language] || ""
    const metaDescription = keywordsTitlePopularDestinationPage[hasTaxiDeals][pathname]?.metaDescription[language] || ""
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
        "/istanbul-airport-to-kadikoy": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
        },
        "/istanbul-airport-to-beyoglu": {
            en: ``,
            tr: ``,
            ar: ``,
            es: ``,
            it: ``,
            ru: ``,
            zh: ``,
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




//*****************************************
//*****************************************

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
                        "name": "İstanbul Havalimanı Taksim Taksi Transferi",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/taksim.webp`,
                        "description": "İstanbul Havalimanından Taksime premium taksi transferinizi APL Transfers ile rezerve edin. Sabit fiyat, ücretsiz karşılama ve 7/24 hizmet.",
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
                        "name": "Трансфер на такси из аэропорта Стамбула в Таксим",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/taksim.webp`,
                        "description": "Забронируйте премиум трансфер на такси из аэропорта Стамбула в Таксим с APL Transfers. Фиксированная цена, бесплатная встреча и круглосуточное обслуживание.",
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
                        "name": "Traslado en taxi desde el Aeropuerto de Estambul a Taksim",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/taksim.webp`,
                        "description": "Reserva un traslado en taxi premium desde el Aeropuerto de Estambul a Taksim con APL Transfers. Precio fijo, bienvenida gratuita y servicio 24/7.",
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
                        "name": "Trasferimento in taxi dall Aeroporto di Istanbul a Taksim",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/taksim.webp`,
                        "description": "Prenota un trasferimento in taxi premium dall Aeroporto di Istanbul a Taksim con APL Transfers. Prezzo fisso, accoglienza gratuita e servizio 24/7.",
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
                        "name": "Трансфер на такси из аэропорта Стамбула в Таксим",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/taksim.webp`,
                        "description": "Забронируйте премиум трансфер на такси из аэропорта Стамбула в Таксим с APL Transfers. Фиксированная цена, бесплатная встреча и круглосуточное обслуживание.",
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
                        "name": "伊斯坦布尔机场到塔克西姆出租车接送",
                        "image": `${env.websiteDomain}/images/popularDestinations/istanbul/taksim.webp`,
                        "description": "通过 APL Transfers 预订伊斯坦布尔机场到塔克西姆的豪华出租车接送服务。固定价格，免费接机，24/7 全天候服务。",
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
                en: ``,
                tr: ``,
                ar: ``,
                es: ``,
                it: ``,
                ru: ``,
                zh: ``,
            },
            "/istanbul-airport-to-kadikoy": {
                en: ``,
                tr: ``,
                ar: ``,
                es: ``,
                it: ``,
                ru: ``,
                zh: ``,
            },
            "/istanbul-airport-to-beyoglu": {
                en: ``,
                tr: ``,
                ar: ``,
                es: ``,
                it: ``,
                ru: ``,
                zh: ``,
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
    }
    return popularDestinationSchema[hasTaxiDeals][pathname][language] || null;
}
