export const getAirportPageContentByPathname = (pathname, language = "en") => {
    return airportPageContents[pathname][language]
}

const airportPageContents = {
    "/istanbul-airport-taxi-prices": {
        en: `
          <h1>Istanbul Airport Taxi Prices – Fixed & Transparent Transfers</h1>

    <h2>Reliable, Comfortable & Affordable Istanbul Airport Transfers</h2>

    <p>
        Arriving at <strong>Istanbul Airport (IST)</strong>? Let <strong>APL Transfers</strong> take care of your journey with our premium, 
        fixed-price private airport transfers. Whether you need a saloon car, a spacious people carrier for 
        five passengers, an eight-seater minibus, or a luxury Mercedes business-class vehicle, we have the 
        perfect ride for you.
    </p>

    <p>
        With our <strong>free meet & greet service, no hidden fees, and 24/7 customer support</strong>, we ensure a 
        seamless and stress-free transfer experience.
    </p>


    <h2>Our Vehicle Options</h2>
    <ul>
        <li><strong>Saloon Car</strong> – Perfect for solo travelers and couples.</li>
        <li><strong>People Carrier (5 Passengers)</strong> – Ideal for families or small groups.</li>
        <li><strong>8-Seater Minibus</strong> – Comfortable for larger groups with luggage.</li>
        <li><strong>Business-Class Mercedes Vehicles</strong> – Premium comfort for executives and VIPs.</li>
    </ul>


    <h2>Why Choose APL Transfers?</h2>
    <ul>
        <li><strong>Free Meet & Greet & Waiting Time</strong> – Your driver will be waiting at the <strong>arrivals</strong> hall with a name board.</li>
        <li><strong>APL Transfers Office Inside Istanbul Airport</strong> – Convenient in-terminal assistance.</li>
        <li><strong>Free Child Seats for 8 & 9-Seater Private Vehicles</strong> – Ensuring family-friendly travel.</li>
        <li><strong>Free Cancellation Up to 24 Hours Before Arrival</strong> – Book with peace of mind.</li>
        <li><strong>Fixed Prices – No Hidden Costs</strong> – What you see is what you pay.</li>
        <li><strong>24/7 Customer Support</strong> – We're available anytime you need us.</li>
        <li><strong>Corporate Travel Solutions</strong> – Reliable transfers for business professionals.</li>
        <li><strong>Luxury, Clean & Well-Maintained Vehicles</strong> – Enjoy a smooth and stylish ride.</li>
    </ul>


    <h2>Book Your Istanbul Airport Taxi Now</h2>

    <p>
        Reserve your transfer today and enjoy a stress-free journey from <strong>Istanbul Airport (IST)</strong> to your hotel, 
        Airbnb, or business location.
    </p>

    <ul>
        <li><strong>Instant Online Booking</strong></li>
        <li><strong>Secure Payment</strong> (Euro, GBP, US Dollar & Turkish Lira Accepted)</li>
        <li><strong>No Hidden Fees – Fixed, Competitive Pricing</strong></li>
    </ul>

    <p>
        Need assistance? Contact our <strong>24/7 customer support</strong> for a smooth travel experience.
        <a href="/">Book Now</a> and travel with confidence.
    </p>
        `,
        tr: `
        <h1>İstanbul Havalimanı Taksi Fiyatları – Sabit & Şeffaf Transferler</h1>

<h2>Güvenilir, Konforlu & Uygun Fiyatlı İstanbul Havalimanı Transferleri</h2>

<p>
    <strong>İstanbul Havalimanı (IST)</strong>'na mı varıyorsunuz? <strong>APL Transfers</strong> ile yolculuğunuzu premium, 
    sabit fiyatlı özel havalimanı transferlerimizle güvenle tamamlayın. İster sedan araç, ister beş yolcu kapasiteli geniş bir 
    araç, sekiz kişilik bir minibüs veya lüks bir Mercedes iş sınıfı araç arıyor olun, size en uygun aracı sunuyoruz.
</p>

<p>
    <strong>Ücretsiz karşılama hizmeti, gizli ücret yok ve 7/24 müşteri desteği</strong> ile stressiz ve sorunsuz bir transfer deneyimi sağlıyoruz.
</p>

<h2>Araç Seçeneklerimiz</h2>
<ul>
    <li><strong>Sedan Araç</strong> – Tek başına seyahat edenler ve çiftler için ideal.</li>
    <li><strong>5 Kişilik Geniş Araç</strong> – Aileler veya küçük gruplar için mükemmel.</li>
    <li><strong>8 Kişilik Minibüs</strong> – Bagajlı büyük gruplar için konforlu.</li>
    <li><strong>İş Sınıfı Mercedes Araçlar</strong> – VIP ve yöneticiler için premium konfor.</li>
</ul>

<h2>Neden APL Transfers?</h2>
<ul>
    <li><strong>Ücretsiz Karşılama & Bekleme Süresi</strong> – Sürücünüz sizi <strong>varış</strong> salonunda isim tabelası ile bekliyor olacak.</li>
    <li><strong>İstanbul Havalimanı İçinde APL Transfers Ofisi</strong> – Terminal içinde rahat destek hizmeti.</li>
    <li><strong>8 & 9 Kişilik Özel Araçlarda Ücretsiz Çocuk Koltuğu</strong> – Aile dostu seyahat imkanı.</li>
    <li><strong>Varıştan 24 Saat Öncesine Kadar Ücretsiz İptal</strong> – Güvenle rezervasyon yapabilirsiniz.</li>
    <li><strong>Sabit Fiyatlar – Gizli Ücret Yok</strong> – Gördüğünüz fiyat, ödediğiniz fiyat.</li>
    <li><strong>7/24 Müşteri Desteği</strong> – Her an yanınızdayız.</li>
    <li><strong>Kurumsal Seyahat Çözümleri</strong> – İş seyahatleri için güvenilir transfer hizmeti.</li>
    <li><strong>Lüks, Temiz & Bakımlı Araçlar</strong> – Konforlu ve şık bir yolculuk deneyimi.</li>
</ul>

<h2>İstanbul Havalimanı Taksi Rezervasyonunuzu Şimdi Yapın</h2>

<p>
    Şimdiden transferinizi rezerve edin ve <strong>İstanbul Havalimanı (IST)</strong>'ndan otelinize, 
    Airbnb'nize veya iş yerinize stressiz bir yolculuk yapın.
</p>

<ul>
    <li><strong>Anında Online Rezervasyon</strong></li>
    <li><strong>Güvenli Ödeme</strong> (Euro, GBP, ABD Doları & Türk Lirası Kabul Edilir)</li>
    <li><strong>Gizli Ücret Yok – Sabit, Rekabetçi Fiyatlandırma</strong></li>
</ul>

<p>
    Yardıma mı ihtiyacınız var? <strong>7/24 müşteri desteğimizle</strong> iletişime geçin ve rahat bir yolculuk yaşayın.
    <a href="/">Şimdi Rezervasyon Yapın</a> ve güvenle seyahat edin.</p>
    `,
        ar: `
<h1>أسعار تاكسي مطار إسطنبول – نقل ثابت وشفاف</h1>

<h2>نقل موثوق ومريح وبأسعار معقولة من مطار إسطنبول</h2>

<p>
    هل وصلت إلى <strong>مطار إسطنبول (IST)</strong>؟ مع <strong>APL Transfers</strong>، استمتع برحلة مريحة وآمنة مع خدمات النقل الخاصة بأسعار ثابتة. 
    سواء كنت بحاجة إلى سيارة سيدان، أو سيارة عائلية تتسع لخمسة ركاب، أو حافلة صغيرة تتسع لثمانية أشخاص، أو سيارة مرسيدس فاخرة للأعمال، 
    لدينا السيارة المثالية لك.
</p>

<p>
    <strong>خدمة الاستقبال المجانية، لا رسوم خفية، ودعم العملاء على مدار 24/7</strong> لضمان تجربة نقل سلسة وخالية من الإجهاد.
</p>

<h2>خيارات المركبات لدينا</h2>
<ul>
    <li><strong>سيارة سيدان</strong> – مثالية للمسافرين المنفردين والأزواج.</li>
    <li><strong>سيارة عائلية (5 ركاب)</strong> – مثالية للعائلات أو المجموعات الصغيرة.</li>
    <li><strong>حافلة صغيرة (8 ركاب)</strong> – مريحة للمجموعات الكبيرة مع الأمتعة.</li>
    <li><strong>سيارات مرسيدس للأعمال</strong> – راحة فاخرة لرجال الأعمال وكبار الشخصيات.</li>
</ul>

<h2>لماذا تختار APL Transfers؟</h2>
<ul>
    <li><strong>الاستقبال المجاني ووقت الانتظار</strong> – سيكون السائق في <strong>صالة الوصول</strong> حاملًا لافتة باسمك.</li>
    <li><strong>مكتب APL Transfers داخل مطار إسطنبول</strong> – دعم داخل المطار بسهولة.</li>
    <li><strong>مقاعد أطفال مجانية في المركبات الخاصة (8 و 9 ركاب)</strong> – لضمان سفر آمن للعائلات.</li>
    <li><strong>إلغاء مجاني حتى 24 ساعة قبل الوصول</strong> – احجز بثقة.</li>
    <li><strong>أسعار ثابتة – لا تكاليف خفية</strong> – السعر الذي تراه هو السعر الذي تدفعه.</li>
    <li><strong>دعم العملاء على مدار 24/7</strong> – نحن متاحون في أي وقت تحتاج فيه إلى المساعدة.</li>
    <li><strong>حلول السفر للأعمال</strong> – نقل موثوق للمحترفين.</li>
    <li><strong>مركبات فاخرة ونظيفة ومُعتنى بها</strong> – استمتع برحلة سلسة وأنيقة.</li>
</ul>

<h2>احجز الآن تاكسي مطار إسطنبول</h2>

<p>
    احجز نقل المطار الآن واستمتع برحلة خالية من التوتر من <strong>مطار إسطنبول (IST)</strong> إلى فندقك، 
    Airbnb، أو موقع عملك.
</p>

<ul>
    <li><strong>حجز فوري عبر الإنترنت</strong></li>
    <li><strong>دفع آمن</strong> (اليورو، الجنيه الإسترليني، الدولار الأمريكي، والليرة التركية مقبولة)</li>
    <li><strong>لا رسوم خفية – أسعار ثابتة ومنافسة</strong></li>
</ul>

<p>
    هل تحتاج إلى مساعدة؟ تواصل مع <strong>دعم العملاء المتاح 24/7</strong> لضمان تجربة سفر سلسة.
    <a href="/">احجز الآن</a> وسافر بثقة.
</p>
        `,
        es: `
        <h1>Precios de Taxi en el Aeropuerto de Estambul – Traslados Fijos y Transparentes</h1>

<h2>Traslados Fiables, Cómodos y Económicos desde el Aeropuerto de Estambul</h2>

<p>
    ¿Llegas al <strong>Aeropuerto de Estambul (IST)</strong>? Con <strong>APL Transfers</strong>, disfruta de un viaje cómodo y seguro con nuestros servicios de traslado privado a precio fijo. 
    Ya sea que necesites un sedán, un vehículo espacioso para cinco pasajeros, una miniván para ocho personas o un lujoso Mercedes de clase ejecutiva, 
    tenemos el vehículo perfecto para ti.
</p>

<p>
    <strong>Servicio de bienvenida gratuito, sin tarifas ocultas y atención al cliente 24/7</strong> para garantizar una experiencia de traslado sin estrés y sin complicaciones.
</p>

<h2>Nuestras Opciones de Vehículos</h2>
<ul>
    <li><strong>Auto Sedán</strong> – Ideal para viajeros solos y parejas.</li>
    <li><strong>Vehículo Espacioso (5 Pasajeros)</strong> – Perfecto para familias o pequeños grupos.</li>
    <li><strong>Miniván para 8 Pasajeros</strong> – Cómoda para grupos más grandes con equipaje.</li>
    <li><strong>Vehículos Mercedes Clase Ejecutiva</strong> – Comodidad premium para ejecutivos y clientes VIP.</li>
</ul>

<h2>¿Por qué elegir APL Transfers?</h2>
<ul>
    <li><strong>Recepción Gratuita y Tiempo de Espera</strong> – Tu conductor te estará esperando en la <strong>zona de llegadas</strong> con un cartel con tu nombre.</li>
    <li><strong>Oficina de APL Transfers dentro del Aeropuerto de Estambul</strong> – Asistencia fácil dentro de la terminal.</li>
    <li><strong>Asientos Infantiles Gratuitos en Vehículos Privados (8 y 9 Pasajeros)</strong> – Garantizando un viaje seguro para familias.</li>
    <li><strong>Cancelación gratuita hasta 24 horas antes de la llegada</strong> – Reserva con tranquilidad.</li>
    <li><strong>Precios Fijos – Sin Costos Ocultos</strong> – Lo que ves es lo que pagas.</li>
    <li><strong>Atención al Cliente 24/7</strong> – Siempre disponibles cuando nos necesites.</li>
    <li><strong>Soluciones de Viaje Corporativo</strong> – Traslados confiables para profesionales de negocios.</li>
    <li><strong>Vehículos de Lujo, Limpios y Bien Mantenidos</strong> – Disfruta de un viaje elegante y sin complicaciones.</li>
</ul>

<h2>Reserva Ahora tu Taxi en el Aeropuerto de Estambul</h2>

<p>
    Reserva tu traslado ahora y disfruta de un viaje sin estrés desde el <strong>Aeropuerto de Estambul (IST)</strong> hasta tu hotel, 
    Airbnb o lugar de negocios.
</p>

<ul>
    <li><strong>Reserva Instantánea en Línea</strong></li>
    <li><strong>Pago Seguro</strong> (Aceptamos Euros, GBP, Dólares Estadounidenses y Liras Turcas)</li>
    <li><strong>Sin Tarifas Ocultas – Precios Fijos y Competitivos</strong></li>
</ul>

<p>
    ¿Necesitas ayuda? Contacta con nuestro <strong>servicio de atención al cliente 24/7</strong> para garantizar una experiencia de viaje sin complicaciones.
    <a href="/">Reserva Ahora</a> y viaja con confianza.
</p>
        `,
        it: `
        <h1>Prezzi Taxi Aeroporto di Istanbul – Trasferimenti Fissi e Trasparenti</h1>

<h2>Trasferimenti Affidabili, Confortevoli e Convenienti dall'Aeroporto di Istanbul</h2>

<p>
    Arrivi all'<strong>Aeroporto di Istanbul (IST)</strong>? Lascia che <strong>APL Transfers</strong> si occupi del tuo viaggio con i nostri 
    trasferimenti aeroportuali privati a prezzo fisso. Che tu abbia bisogno di un'auto berlina, di un veicolo spazioso 
    per cinque passeggeri, di un minibus a otto posti o di un lussuoso veicolo Mercedes business-class, abbiamo il mezzo perfetto per te.
</p>

<p>
    Con il nostro <strong>servizio di accoglienza gratuito, nessun costo nascosto e assistenza clienti 24/7</strong>, garantiamo 
    un trasferimento senza stress e senza problemi.
</p>

<h2>Le Nostre Opzioni di Veicoli</h2>
<ul>
    <li><strong>Berlina</strong> – Perfetta per viaggiatori singoli e coppie.</li>
    <li><strong>Monovolume (5 Passeggeri)</strong> – Ideale per famiglie o piccoli gruppi.</li>
    <li><strong>Minibus a 8 Posti</strong> – Confortevole per gruppi più numerosi con bagagli.</li>
    <li><strong>Veicoli Mercedes Business-Class</strong> – Comfort premium per dirigenti e VIP.</li>
</ul>

<h2>Perché Scegliere APL Transfers?</h2>
<ul>
    <li><strong>Accoglienza Gratuita & Tempo di Attesa</strong> – Il tuo autista ti aspetterà nella <strong>hall arrivi</strong> con un cartello con il tuo nome.</li>
    <li><strong>Ufficio APL Transfers all'Aeroporto di Istanbul</strong> – Assistenza comoda direttamente in aeroporto.</li>
    <li><strong>Seggiolini Gratuiti per Bambini nei Veicoli Privati a 8 & 9 Posti</strong> – Viaggia in sicurezza con la tua famiglia.</li>
    <li><strong>Cancellazione Gratuita Fino a 24 Ore Prima dell'Arrivo</strong> – Prenota senza preoccupazioni.</li>
    <li><strong>Prezzi Fissi – Nessun Costo Nascosto</strong> – Paghi solo quanto indicato.</li>
    <li><strong>Assistenza Clienti 24/7</strong> – Siamo disponibili in qualsiasi momento.</li>
    <li><strong>Soluzioni di Viaggio Aziendali</strong> – Trasferimenti affidabili per professionisti.</li>
    <li><strong>Veicoli di Lusso, Puliti & Ben Manutenuti</strong> – Goditi un viaggio confortevole e raffinato.</li>
</ul>

<h2>Prenota Ora il Tuo Taxi dall'Aeroporto di Istanbul</h2>

<p>
    Prenota il tuo trasferimento oggi stesso e viaggia senza stress dall'<strong>Aeroporto di Istanbul (IST)</strong> al tuo hotel, 
    Airbnb o destinazione aziendale.
</p>

<ul>
    <li><strong>Prenotazione Online Immediata</strong></li>
    <li><strong>Pagamento Sicuro</strong> (Accettati Euro, GBP, Dollari USA & Lira Turca)</li>
    <li><strong>Nessun Costo Nascosto – Prezzi Fissi e Competitivi</strong></li>
</ul>

<p>
    Hai bisogno di assistenza? Contatta il nostro <strong>servizio clienti 24/7</strong> per un'esperienza di viaggio senza intoppi.
    <a href="/">Prenota Ora</a> e viaggia con fiducia.
</p>

        `,
        ru: `
        <h1>Цены на такси в аэропорту Стамбула – Фиксированные и прозрачные трансферы</h1>

<h2>Надежные, комфортные и доступные трансферы из аэропорта Стамбула</h2>

<p>
    Прилетаете в <strong>аэропорт Стамбула (IST)</strong>? Позвольте <strong>APL Transfers</strong> позаботиться о вашем путешествии 
    с помощью наших премиальных частных трансферов по фиксированной цене. Вам нужен седан, просторный 
    автомобиль для пяти пассажиров, микроавтобус на восемь мест или роскошный Mercedes бизнес-класса? 
    У нас есть идеальный вариант для вас.
</p>

<p>
    Благодаря <strong>бесплатной встрече и ожиданию, отсутствию скрытых платежей и круглосуточной поддержке</strong> 
    мы гарантируем вам удобный и беспроблемный трансфер.
</p>

<h2>Наши варианты транспорта</h2>
<ul>
    <li><strong>Седан</strong> – Идеально подходит для индивидуальных путешественников и пар.</li>
    <li><strong>Минивэн (5 пассажиров)</strong> – Отличный вариант для семей или небольших групп.</li>
    <li><strong>Микроавтобус на 8 мест</strong> – Комфортное решение для больших групп с багажом.</li>
    <li><strong>Автомобили Mercedes бизнес-класса</strong> – Премиальный комфорт для деловых поездок и VIP-гостей.</li>
</ul>

<h2>Почему выбирают APL Transfers?</h2>
<ul>
    <li><strong>Бесплатная встреча и ожидание</strong> – Ваш водитель встретит вас в <strong>зале прилета</strong> с табличкой с вашим именем.</li>
    <li><strong>Офис APL Transfers в аэропорту Стамбула</strong> – Удобное обслуживание прямо в терминале.</li>
    <li><strong>Бесплатные детские кресла в частных авто на 8 и 9 мест</strong> – Безопасность для вашей семьи.</li>
    <li><strong>Бесплатная отмена за 24 часа до прибытия</strong> – Бронируйте без риска.</li>
    <li><strong>Фиксированные цены – Без скрытых платежей</strong> – Вы платите только указанную сумму.</li>
    <li><strong>Круглосуточная поддержка</strong> – Мы всегда готовы помочь.</li>
    <li><strong>Корпоративные трансферы</strong> – Надежные поездки для деловых клиентов.</li>
    <li><strong>Роскошные, чистые и ухоженные автомобили</strong> – Путешествуйте с комфортом и стилем.</li>
</ul>

<h2>Забронируйте такси из аэропорта Стамбула прямо сейчас</h2>

<p>
    Забронируйте свой трансфер уже сегодня и наслаждайтесь беззаботной поездкой из <strong>аэропорта Стамбула (IST)</strong> 
    в ваш отель, Airbnb или бизнес-центр.
</p>

<ul>
    <li><strong>Мгновенное онлайн-бронирование</strong></li>
    <li><strong>Безопасная оплата</strong> (принимаем евро, фунты стерлингов, доллары США и турецкие лиры)</li>
    <li><strong>Без скрытых платежей – Фиксированные и конкурентные цены</strong></li>
</ul>

<p>
    Нужна помощь? Свяжитесь с нашей <strong>службой поддержки 24/7</strong> для комфортного путешествия.
    <a href="/">Забронировать</a> и путешествуйте с уверенностью.
</p>

        `,
        zh: `
        <h1>伊斯坦布尔机场出租车价格 – 固定透明的接送服务</h1>

<h2>可靠、舒适且实惠的伊斯坦布尔机场接送</h2>

<p>
    抵达<strong>伊斯坦布尔机场 (IST)</strong>？让<strong>APL Transfers</strong>为您的旅程保驾护航，我们提供优质、固定价格的私人机场接送服务。无论您需要一辆轿车、一辆可容纳五名乘客的宽敞MPV、一辆八座小型巴士，还是一辆豪华奔驰商务车，我们都有适合您的车辆。
</p>

<p>
    我们提供<strong>免费接机服务、无隐藏费用和24/7客户支持</strong>，确保您享受无忧、顺畅的出行体验。
</p>

<h2>我们的车型选择</h2>
<ul>
    <li><strong>轿车</strong> – 适合单人或情侣出行。</li>
    <li><strong>MPV（5人座）</strong> – 适合家庭或小团体出行。</li>
    <li><strong>8座小型巴士</strong> – 适合较大的团队和行李较多的旅客。</li>
    <li><strong>奔驰商务车</strong> – 为高端商务人士和VIP提供尊贵舒适的乘坐体验。</li>
</ul>

<h2>为什么选择 APL Transfers？</h2>
<ul>
    <li><strong>免费接机和等待时间</strong> – 司机将在<strong>到达大厅</strong>持名牌等候您。</li>
    <li><strong>APL Transfers 办公室位于伊斯坦布尔机场内</strong> – 机场内提供便捷服务。</li>
    <li><strong>8座和9座私人车辆提供免费儿童座椅</strong> – 确保家庭旅客安全出行。</li>
    <li><strong>抵达前24小时可免费取消</strong> – 让您安心预订。</li>
    <li><strong>固定价格 – 无隐藏费用</strong> – 价格透明，无额外费用。</li>
    <li><strong>24/7客户支持</strong> – 我们随时为您提供帮助。</li>
    <li><strong>企业专属出行服务</strong> – 为商务人士提供可靠的接送方案。</li>
    <li><strong>豪华、整洁且维护良好的车辆</strong> – 享受舒适、时尚的旅程。</li>
</ul>

<h2>立即预订您的伊斯坦布尔机场出租车</h2>

<p>
    立即预订您的接送服务，让您的旅程从<strong>伊斯坦布尔机场 (IST)</strong>到酒店、Airbnb或商务地点变得无比轻松。
</p>

<ul>
    <li><strong>即时在线预订</strong></li>
    <li><strong>安全支付</strong>（支持欧元、英镑、美元和土耳其里拉支付）</li>
    <li><strong>无隐藏费用 – 固定且具有竞争力的价格</strong></li>
</ul>

<p>
    需要帮助？请联系我们的<strong>24/7客户支持</strong>，享受顺畅的出行体验。
    <a href="/">立即预订</a>，安心出行！
</p>

        `,
    },
    "/sabiha-gokcen-airport-taxi-prices": {
        en: `
        <h1>Sabiha Gökçen Airport Taxi Prices – Fixed & Private Transfers</h1>

<h2>Reliable and Hassle-Free Transfers from Sabiha Gökçen Airport (SAW)</h2>

<p>
    Looking for a private taxi from <strong>Sabiha Gökçen Airport (SAW)</strong>? APL Transfers provides fixed-price, 
    private airport transfers with no hidden fees. Whether you need a saloon car, a spacious minibus, 
    or a luxury Mercedes vehicle, we ensure a smooth and comfortable journey to your destination.
</p>

<p>
    Our professional drivers offer a meet & greet service at Column 13, ensuring you can quickly and 
    easily locate your driver upon arrival.
</p>

<h2>Vehicle Options for Sabiha Gökçen Airport Transfers</h2>
<ul>
    <li><strong>Saloon Car</strong> – Ideal for individuals and couples.</li>
    <li><strong>People Carrier (5 Passengers)</strong> – Great for families and small groups.</li>
    <li><strong>8-Seater Minibus</strong> – Spacious and perfect for larger groups with luggage.</li>
    <li><strong>Business-Class Mercedes Vehicles</strong> – Premium travel for executives and VIPs.</li>
</ul>

<h2>Meet & Greet Service – Where to Find Your Driver</h2>
<ul>
    <li><strong>Location:</strong> Upon arrival at <strong>Sabiha Gökçen Airport (SAW)</strong>, your driver will be waiting at Column 13, 
        located at the end of the pedestrian crossing.</li>
    <li><strong>Identification:</strong> The driver will be holding a passenger name board for easy recognition.</li>
    <li><strong>Seamless Transfers:</strong> No need to wait for taxis—your private driver will take you directly to your destination.</li>
</ul>

<h2>Why Choose APL Transfers?</h2>
<ul>
    <li><strong>Fixed Prices – No Hidden Costs</strong> – What you see is what you pay.</li>
    <li><strong>Free Meet & Greet & Waiting Time</strong> – Driver meets you at Column 13 with a name board.</li>
    <li><strong>Free Cancellation Up to 24 Hours Before Arrival</strong> – Flexible and risk-free booking.</li>
    <li><strong>24/7 Customer Support</strong> – Assistance whenever you need it.</li>
    <li><strong>Corporate Travel Solutions</strong> – Reliable transfers for business travelers.</li>
    <li><strong>Clean, Comfortable & Well-Maintained Vehicles</strong> – Travel in comfort and style.</li>
    <li><strong>Secure Payments Accepted</strong> – Pay in Euro, GBP, US Dollar & Turkish Lira.</li>
</ul>

<h2>Book Your Sabiha Gökçen Airport Taxi Now</h2>

<p>
    Avoid the hassle of searching for a taxi at the airport. Pre-book your Sabiha Gökçen Airport 
    transfer for a stress-free journey.
</p>

<ul>
    <li><strong>Instant Online Booking</strong></li>
    <li><strong>Secure Payment</strong> (Euro, GBP, US Dollar & Turkish Lira Accepted)</li>
    <li><strong>No Hidden Fees – Fixed, Competitive Pricing</strong></li>
</ul>

<p>
    Need assistance? Contact our <strong>24/7 customer support</strong> for a seamless transfer experience.
    <a href="/">Book Now</a> and travel with confidence.
</p>

        `,
        tr: `
        <h1>Sabiha Gökçen Havalimanı Taksi Fiyatları – Sabit ve Özel Transferler</h1>

<h2>Sabiha Gökçen Havalimanı’ndan Güvenilir ve Konforlu Transferler</h2>

<p>
    <strong>Sabiha Gökçen Havalimanı (SAW)</strong>’dan özel bir taksi mi arıyorsunuz? APL Transfers, gizli ücret olmadan 
    sabit fiyatlı özel havalimanı transferleri sunar. Sedan araç, geniş minibüs veya lüks Mercedes araç seçenekleriyle, 
    varış noktanıza konforlu ve sorunsuz bir yolculuk sağlıyoruz.
</p>

<p>
    Profesyonel şoförlerimiz, Kolon 13’te ücretsiz karşılama hizmeti sunarak, varışınızda sürücünüzü hızlı ve kolayca bulmanızı sağlar.
</p>

<h2>Sabiha Gökçen Havalimanı Transfer Araç Seçenekleri</h2>
<ul>
    <li><strong>Sedan Araç</strong> – Bireysel yolcular ve çiftler için ideal.</li>
    <li><strong>Minivan (5 Yolcu)</strong> – Aileler ve küçük gruplar için mükemmel.</li>
    <li><strong>8 Kişilik Minibüs</strong> – Daha büyük gruplar ve fazla bagaj için geniş ve rahat.</li>
    <li><strong>Mercedes İş Sınıfı Araçlar</strong> – VIP ve iş seyahatleri için üst düzey konfor.</li>
</ul>

<h2>Karşılama Hizmeti – Sürücünüzü Nerede Bulabilirsiniz?</h2>
<ul>
    <li><strong>Konum:</strong> <strong>Sabiha Gökçen Havalimanı (SAW)</strong>’na vardığınızda, sürücünüz sizi yaya geçidinin sonunda, Kolon 13’te bekliyor olacak.</li>
    <li><strong>Tanıma:</strong> Sürücünüz, kolay tanınabilmeniz için adınızı taşıyan bir pano tutacaktır.</li>
    <li><strong>Hızlı ve Kolay Transfer:</strong> Taksi beklemenize gerek yok – özel şoförünüz sizi doğrudan hedefinize götürecek.</li>
</ul>

<h2>Neden APL Transfers’i Tercih Etmelisiniz?</h2>
<ul>
    <li><strong>Sabit Fiyatlar – Gizli Ücret Yok</strong> – Ne görüyorsanız onu ödersiniz.</li>
    <li><strong>Ücretsiz Karşılama ve Bekleme Süresi</strong> – Şoförünüz, Kolon 13’te isminizin yazılı olduğu pano ile sizi karşılar.</li>
    <li><strong>Varıştan 24 Saat Öncesine Kadar Ücretsiz İptal</strong> – Esnek ve risksiz rezervasyon.</li>
    <li><strong>7/24 Müşteri Desteği</strong> – İhtiyacınız olduğunda her an yanınızdayız.</li>
    <li><strong>Kurumsal Seyahat Çözümleri</strong> – İş seyahatleri için güvenilir transferler.</li>
    <li><strong>Temiz, Konforlu ve Bakımlı Araçlar</strong> – Konforlu ve şık bir yolculuk deneyimi.</li>
    <li><strong>Güvenli Ödeme Seçenekleri</strong> – Euro, GBP, ABD Doları ve Türk Lirası ile ödeme yapabilirsiniz.</li>
</ul>

<h2>Sabiha Gökçen Havalimanı Taksi Rezervasyonu Yapın</h2>

<p>
    Havalimanında taksi arama zahmetinden kaçının. Önceden rezervasyon yaparak <strong>Sabiha Gökçen Havalimanı</strong> transferinizi stressiz hale getirin.
</p>

<ul>
    <li><strong>Anında Online Rezervasyon</strong></li>
    <li><strong>Güvenli Ödeme</strong> (Euro, GBP, ABD Doları ve Türk Lirası kabul edilir)</li>
    <li><strong>Gizli Ücret Yok – Sabit ve Rekabetçi Fiyatlandırma</strong></li>
</ul>

<p>
    Yardıma mı ihtiyacınız var? Sorunsuz bir transfer deneyimi için <strong>7/24 müşteri destek</strong> ekibimizle iletişime geçin.
    <a href="/">Hemen Rezervasyon Yapın</a> ve güvenle seyahat edin.
</p>

        `,
        ar: `
        <h1>أسعار سيارات الأجرة في مطار صبيحة كوكجن – تحويلات خاصة وثابتة</h1>

<h2>تحويلات موثوقة وسلسة من مطار صبيحة كوكجن (SAW)</h2>

<p>
    هل تبحث عن سيارة أجرة خاصة من <strong>مطار صبيحة كوكجن (SAW)</strong>؟ توفر APL Transfers تحويلات خاصة من المطار بأسعار ثابتة 
    وبدون أي رسوم خفية. سواء كنت بحاجة إلى سيارة سيدان، أو حافلة صغيرة فسيحة، أو سيارة مرسيدس فاخرة، 
    فإننا نضمن لك رحلة مريحة وسلسة إلى وجهتك.
</p>

<p>
    يقدم سائقونا المحترفون خدمة استقبال مجانية عند العمود 13، مما يضمن لك العثور على سائقك بسرعة وسهولة فور وصولك.
</p>

<h2>خيارات المركبات لنقل مطار صبيحة كوكجن</h2>
<ul>
    <li><strong>سيارة سيدان</strong> – مثالية للمسافرين الأفراد والأزواج.</li>
    <li><strong>حافلة صغيرة (5 ركاب)</strong> – رائعة للعائلات والمجموعات الصغيرة.</li>
    <li><strong>حافلة صغيرة بـ 8 مقاعد</strong> – فسيحة ومناسبة للمجموعات الكبيرة مع الأمتعة.</li>
    <li><strong>سيارات مرسيدس للأعمال</strong> – راحة فاخرة للمسافرين من رجال الأعمال وVIP.</li>
</ul>

<h2>خدمة الاستقبال – أين تجد سائقك؟</h2>
<ul>
    <li><strong>الموقع:</strong> عند وصولك إلى <strong>مطار صبيحة كوكجن (SAW)</strong>، سيكون سائقك بانتظارك عند العمود 13، 
        الواقع في نهاية معبر المشاة.</li>
    <li><strong>التعريف:</strong> سيحمل السائق لوحة تحمل اسمك ليسهل عليك التعرف عليه.</li>
    <li><strong>تحويلات سلسة:</strong> لا داعي لانتظار سيارات الأجرة – سيوصلك سائقك الخاص مباشرة إلى وجهتك.</li>
</ul>

<h2>لماذا تختار APL Transfers؟</h2>
<ul>
    <li><strong>أسعار ثابتة – لا رسوم خفية</strong> – ما تراه هو ما تدفعه.</li>
    <li><strong>خدمة استقبال وانتظار مجانية</strong> – سيلتقي بك السائق عند العمود 13 بلوحة اسمك.</li>
    <li><strong>إمكانية الإلغاء المجاني حتى 24 ساعة قبل الوصول</strong> – احجز بثقة ومرونة.</li>
    <li><strong>دعم العملاء 24/7</strong> – نحن هنا لمساعدتك في أي وقت تحتاج فيه.</li>
    <li><strong>حلول السفر للشركات</strong> – تحويلات موثوقة للمسافرين من رجال الأعمال.</li>
    <li><strong>مركبات نظيفة ومريحة ومصانة جيدًا</strong> – استمتع برحلة فاخرة ومريحة.</li>
    <li><strong>خيارات دفع آمنة</strong> – ادفع باليورو، الجنيه الإسترليني، الدولار الأمريكي أو الليرة التركية.</li>
</ul>

<h2>احجز سيارة أجرة مطار صبيحة كوكجن الآن</h2>

<p>
    تجنب عناء البحث عن سيارة أجرة في المطار. احجز تحويلك من مطار صبيحة كوكجن مسبقًا 
    لرحلة سلسة وخالية من المتاعب.
</p>

<ul>
    <li><strong>حجز فوري عبر الإنترنت</strong></li>
    <li><strong>دفع آمن</strong> (يتم قبول اليورو، الجنيه الإسترليني، الدولار الأمريكي والليرة التركية)</li>
    <li><strong>لا رسوم خفية – أسعار ثابتة وتنافسية</strong></li>
</ul>

<p>
    هل تحتاج إلى مساعدة؟ تواصل مع <strong>دعم العملاء 24/7</strong> للحصول على تجربة تحويل سلسة.
    <a href="/">احجز الآن</a> وسافر بثقة!
</p>

        `,
        es: `
 <h1>Precios de Taxi en el Aeropuerto Sabiha Gökçen – Traslados Privados y Fijos</h1>

<h2>Traslados Confiables y Sin Estrés desde el Aeropuerto Sabiha Gökçen (SAW)</h2>

<p>
    ¿Buscas un taxi privado desde el <strong>Aeropuerto Sabiha Gökçen (SAW)</strong>? APL Transfers ofrece traslados privados 
    con precios fijos y sin cargos ocultos. Ya sea que necesites un sedán, un minibús espacioso 
    o un lujoso vehículo Mercedes, te garantizamos un viaje cómodo y sin complicaciones a tu destino.
</p>

<p>
    Nuestros conductores profesionales ofrecen un servicio de bienvenida en la Columna 13, asegurando 
    que puedas encontrar a tu conductor de manera rápida y sencilla a tu llegada.
</p>

<h2>Opciones de Vehículos para Traslados en el Aeropuerto Sabiha Gökçen</h2>
<ul>
    <li><strong>Sedán</strong> – Ideal para viajeros solos y parejas.</li>
    <li><strong>Monovolumen (5 Pasajeros)</strong> – Perfecto para familias y grupos pequeños.</li>
    <li><strong>Minibús de 8 Plazas</strong> – Espacioso y perfecto para grupos más grandes con equipaje.</li>
    <li><strong>Vehículos Mercedes de Clase Ejecutiva</strong> – Viajes de lujo para ejecutivos y VIPs.</li>
</ul>

<h2>Servicio de Bienvenida – ¿Dónde Encontrar a tu Conductor?</h2>
<ul>
    <li><strong>Ubicación:</strong> Al llegar al <strong>Aeropuerto Sabiha Gökçen (SAW)</strong>, tu conductor te estará esperando 
        en la Columna 13, ubicada al final del cruce peatonal.</li>
    <li><strong>Identificación:</strong> El conductor llevará un cartel con tu nombre para que puedas reconocerlo fácilmente.</li>
    <li><strong>Traslados sin Esperas:</strong> No necesitas hacer fila para un taxi: tu conductor privado te llevará directamente a tu destino.</li>
</ul>

<h2>¿Por Qué Elegir APL Transfers?</h2>
<ul>
    <li><strong>Precios Fijos – Sin Costos Ocultos</strong> – Lo que ves es lo que pagas.</li>
    <li><strong>Bienvenida y Tiempo de Espera Gratis</strong> – Tu conductor te recibirá en la Columna 13 con un cartel con tu nombre.</li>
    <li><strong>Cancelación Gratuita Hasta 24 Horas Antes de la Llegada</strong> – Reserva flexible y sin riesgos.</li>
    <li><strong>Atención al Cliente 24/7</strong> – Asistencia siempre que la necesites.</li>
    <li><strong>Soluciones de Viaje Corporativo</strong> – Traslados confiables para profesionales.</li>
    <li><strong>Vehículos Limpios, Cómodos y Bien Mantenidos</strong> – Viaja con comodidad y estilo.</li>
    <li><strong>Pagos Seguros Aceptados</strong> – Puedes pagar en Euros, GBP, Dólares Estadounidenses y Lira Turca.</li>
</ul>

<h2>Reserva Ahora tu Taxi en el Aeropuerto Sabiha Gökçen</h2>

<p>
    Evita la molestia de buscar un taxi en el aeropuerto. Reserva tu traslado desde el 
    <strong>Aeropuerto Sabiha Gökçen</strong> con anticipación para un viaje sin estrés.
</p>

<ul>
    <li><strong>Reserva Online al Instante</strong></li>
    <li><strong>Pago Seguro</strong> (Se aceptan Euros, GBP, Dólares Estadounidenses y Lira Turca)</li>
    <li><strong>Sin Costos Ocultos – Precios Fijos y Competitivos</strong></li>
</ul>

<p>
    ¿Necesitas ayuda? Contacta con nuestro <strong>soporte al cliente 24/7</strong> para una experiencia de traslado sin complicaciones.
    <a href="/">Reserva Ahora</a> y viaja con confianza.
</p>


        `,
        it: `
        <h1>Prezzi Taxi Aeroporto Sabiha Gökçen – Trasferimenti Privati e a Prezzo Fisso</h1>

<h2>Trasferimenti Affidabili e Senza Stress dall'Aeroporto di Sabiha Gökçen (SAW)</h2>

<p>
    Cerchi un taxi privato dall'<strong>Aeroporto di Sabiha Gökçen (SAW)</strong>? APL Transfers offre trasferimenti privati 
    a prezzo fisso, senza costi nascosti. Che tu abbia bisogno di una berlina, di un minibus spazioso 
    o di un lussuoso veicolo Mercedes, garantiamo un viaggio confortevole e senza problemi fino alla tua destinazione.
</p>

<p>
    I nostri autisti professionisti offrono un servizio di accoglienza alla Colonna 13, per assicurarti di trovare 
    rapidamente e facilmente il tuo autista al tuo arrivo.
</p>

<h2>Opzioni di Veicoli per i Trasferimenti all'Aeroporto di Sabiha Gökçen</h2>
<ul>
    <li><strong>Berlina</strong> – Ideale per viaggiatori singoli e coppie.</li>
    <li><strong>Monovolume (5 Passeggeri)</strong> – Perfetto per famiglie e piccoli gruppi.</li>
    <li><strong>Minibus a 8 Posti</strong> – Spazioso e ideale per gruppi più numerosi con bagagli.</li>
    <li><strong>Veicoli Mercedes Business-Class</strong> – Viaggi di lusso per dirigenti ed ospiti VIP.</li>
</ul>

<h2>Servizio di Accoglienza – Dove Trovare il Tuo Autista?</h2>
<ul>
    <li><strong>Posizione:</strong> All'arrivo all'<strong>Aeroporto di Sabiha Gökçen (SAW)</strong>, il tuo autista ti aspetterà 
        alla Colonna 13, situata alla fine dell'attraversamento pedonale.</li>
    <li><strong>Identificazione:</strong> L'autista terrà un cartello con il tuo nome per essere facilmente riconosciuto.</li>
    <li><strong>Trasferimenti senza Attese:</strong> Nessuna coda per un taxi – il tuo autista privato ti porterà direttamente alla tua destinazione.</li>
</ul>

<h2>Perché Scegliere APL Transfers?</h2>
<ul>
    <li><strong>Prezzi Fissi – Nessun Costo Nascosto</strong> – Paghi solo quello che vedi.</li>
    <li><strong>Accoglienza e Attesa Gratuite</strong> – Il tuo autista ti accoglierà alla Colonna 13 con un cartello con il tuo nome.</li>
    <li><strong>Cancellazione Gratuita fino a 24 Ore Prima dell'Arrivo</strong> – Prenotazione flessibile e senza rischi.</li>
    <li><strong>Supporto Clienti 24/7</strong> – Assistenza disponibile in qualsiasi momento.</li>
    <li><strong>Soluzioni per Viaggi Aziendali</strong> – Trasferimenti affidabili per professionisti.</li>
    <li><strong>Veicoli Puliti, Confortevoli e Ben Manutenuti</strong> – Viaggia in totale relax e stile.</li>
    <li><strong>Pagamenti Sicuri Accettati</strong> – Puoi pagare in Euro, GBP, Dollari USA o Lira Turca.</li>
</ul>

<h2>Prenota Ora il Tuo Taxi all'Aeroporto di Sabiha Gökçen</h2>

<p>
    Evita lo stress di cercare un taxi all’aeroporto. Prenota in anticipo il tuo trasferimento 
    dall'<strong>Aeroporto di Sabiha Gökçen</strong> per un viaggio senza preoccupazioni.
</p>

<ul>
    <li><strong>Prenotazione Online Immediata</strong></li>
    <li><strong>Pagamento Sicuro</strong> (Accettati Euro, GBP, Dollari USA e Lira Turca)</li>
    <li><strong>Nessun Costo Nascosto – Prezzi Fissi e Competitivi</strong></li>
</ul>

<p>
    Hai bisogno di aiuto? Contatta il nostro <strong>servizio clienti 24/7</strong> per un’esperienza di trasferimento senza problemi.
    <a href="/">Prenota Ora</a> e viaggia con tranquillità!
</p>

        `,
        ru: `
        <h1>Цены на такси в аэропорту Сабиха Гёкчен – Фиксированные и частные трансферы</h1>

<h2>Надежные и комфортные трансферы из аэропорта Сабиха Гёкчен (SAW)</h2>

<p>
    Ищете частное такси из <strong>аэропорта Сабиха Гёкчен (SAW)</strong>? APL Transfers предлагает фиксированные 
    цены на частные трансферы без скрытых платежей. Независимо от того, нужна ли вам седановая машина, 
    просторный минивэн или роскошный автомобиль Mercedes, мы гарантируем комфортную и удобную поездку 
    до вашего пункта назначения.
</p>

<p>
    Наши профессиональные водители предлагают бесплатную встречу в зоне Колонна 13, 
    что позволяет вам быстро и легко найти своего водителя по прибытии.
</p>

<h2>Варианты транспорта для трансфера из аэропорта Сабиха Гёкчен</h2>
<ul>
    <li><strong>Седан</strong> – Идеально для одиночных путешественников и пар.</li>
    <li><strong>Минивэн (5 пассажиров)</strong> – Отлично подходит для семей и небольших групп.</li>
    <li><strong>Микроавтобус на 8 мест</strong> – Просторный и удобный для больших групп с багажом.</li>
    <li><strong>Автомобили Mercedes бизнес-класса</strong> – Премиальный комфорт для деловых путешественников и VIP-гостей.</li>
</ul>

<h2>Где найти вашего водителя?</h2>
<ul>
    <li><strong>Местоположение:</strong> По прибытии в <strong>аэропорт Сабиха Гёкчен (SAW)</strong> ваш водитель будет ждать вас 
        у Колонны 13, расположенной в конце пешеходного перехода.</li>
    <li><strong>Опознание:</strong> Водитель будет держать табличку с вашим именем для удобства.</li>
    <li><strong>Без задержек:</strong> Вам не нужно стоять в очереди на такси — ваш личный водитель отвезет вас прямо к месту назначения.</li>
</ul>

<h2>Почему выбирают APL Transfers?</h2>
<ul>
    <li><strong>Фиксированные цены – Без скрытых платежей</strong> – Вы платите ровно столько, сколько указано.</li>
    <li><strong>Бесплатная встреча и ожидание</strong> – Водитель встретит вас у Колонны 13 с табличкой с вашим именем.</li>
    <li><strong>Бесплатная отмена бронирования за 24 часа до прибытия</strong> – Гибкие условия бронирования без риска.</li>
    <li><strong>Круглосуточная поддержка клиентов</strong> – Мы всегда готовы помочь вам.</li>
    <li><strong>Корпоративные трансферы</strong> – Надежные поездки для деловых клиентов.</li>
    <li><strong>Чистые, комфортные и ухоженные автомобили</strong> – Наслаждайтесь поездкой с максимальным комфортом.</li>
    <li><strong>Безопасная оплата</strong> – Принимаются платежи в евро, фунтах стерлингов, долларах США и турецких лирах.</li>
</ul>

<h2>Забронируйте такси из аэропорта Сабиха Гёкчен</h2>

<p>
    Избегайте поиска такси по прилету. Забронируйте свой трансфер из <strong>аэропорта Сабиха Гёкчен</strong> заранее 
    для удобного и беспроблемного путешествия.
</p>

<ul>
    <li><strong>Мгновенное онлайн-бронирование</strong></li>
    <li><strong>Безопасная оплата</strong> (Принимаются евро, GBP, доллары США и турецкие лиры)</li>
    <li><strong>Без скрытых платежей – Фиксированные и конкурентные цены</strong></li>
</ul>

<p>
    Нужна помощь? Свяжитесь с нашей <strong>службой поддержки 24/7</strong> для комфортного трансфера.
    <a href="/">Забронировать сейчас</a> и путешествуйте без забот!
</p>

        `,
        zh: `
        <h1>萨比哈·格克琴机场出租车价格 – 固定价格 & 私人接送</h1>

<h2>可靠、无忧的萨比哈·格克琴机场 (SAW) 接送服务</h2>

<p>
    需要从 <strong>萨比哈·格克琴机场 (SAW)</strong> 乘坐私人出租车？APL Transfers 提供固定价格的私人机场接送服务，<br>
    无隐藏费用。无论您需要轿车、宽敞的面包车，还是豪华奔驰商务车，我们都能确保您舒适、顺畅地抵达目的地。
</p>

<p>
    我们的专业司机将在 13 号柱提供免费接机服务，确保您抵达后能快速、轻松地找到您的司机。
</p>

<h2>萨比哈·格克琴机场接送车辆选择</h2>
<ul>
    <li><strong>轿车</strong> – 适合个人和情侣出行。</li>
    <li><strong>面包车（5 人座）</strong> – 适合家庭和小型团体。</li>
    <li><strong>8 座小型巴士</strong> – 空间宽敞，适合携带大件行李的团队。</li>
    <li><strong>奔驰商务车型</strong> – 提供高端商务人士和 VIP 旅客的尊贵出行体验。</li>
</ul>

<h2>接机服务 – 在哪里找到您的司机？</h2>
<ul>
    <li><strong>位置：</strong> 抵达 <strong>萨比哈·格克琴机场 (SAW)</strong> 后，您的司机将在 13 号柱等候，位于人行横道尽头。</li>
    <li><strong>识别方式：</strong> 司机将举着写有您姓名的接机牌，方便您认出。</li>
    <li><strong>无缝衔接：</strong> 无需排队等出租车，您的私人司机将直接送您到达目的地。</li>
</ul>

<h2>为什么选择 APL Transfers？</h2>
<ul>
    <li><strong>固定价格，无隐藏费用</strong> – 透明定价，无额外收费。</li>
    <li><strong>免费接机 & 等待时间</strong> – 司机将在 13 号柱举牌迎接您。</li>
    <li><strong>支持 24 小时前免费取消</strong> – 预订灵活，无后顾之忧。</li>
    <li><strong>24/7 客户支持</strong> – 随时提供帮助。</li>
    <li><strong>企业差旅解决方案</strong> – 为商务人士提供可靠的接送服务。</li>
    <li><strong>干净、舒适且维护良好的车辆</strong> – 享受高品质的舒适旅行体验。</li>
    <li><strong>安全支付方式</strong> – 可使用欧元 (EUR)、英镑 (GBP)、美元 (USD) 和土耳其里拉 (TRY) 支付。</li>
</ul>

<h2>立即预订萨比哈·格克琴机场出租车</h2>

<p>
    避免在机场排队等待出租车，提前预订您的 <strong>萨比哈·格克琴机场</strong> 接送服务，享受轻松无忧的旅程。
</p>

<ul>
    <li><strong>即时在线预订</strong></li>
    <li><strong>安全支付</strong>（支持欧元、英镑、美元和土耳其里拉支付）</li>
    <li><strong>无隐藏费用 – 透明固定价格，经济实惠</strong></li>
</ul>

<p>
    需要帮助？请联系 <strong>24/7 客服支持</strong>，确保您拥有顺畅的接送体验。
    <a href="/">立即预订</a>，享受安心之旅！
</p>

        `,
    },
    "/dalaman-airport-taxi-prices": {
        en: `
        <h1>Dalaman Airport Taxi Transfer Prices – Private & Fixed-Price Transfers</h1>

<h2>Reliable & Comfortable Transfers from Dalaman Airport (DLM)</h2>

<p>
    Traveling to <strong>Fethiye, Marmaris, Oludeniz, Icmeler, or Hisaronu</strong>? APL Transfers offers 
    <strong>private, fixed-price airport taxi services</strong> from <strong>Dalaman Airport (DLM)</strong> to your destination. 
    Whether you need a <strong>saloon car, a spacious people carrier for five passengers, an eight-seater minibus, 
    or a luxury Mercedes business-class vehicle</strong>, we provide a smooth and hassle-free transfer experience.
</p>

<p>
    Our professional drivers offer a <strong>meet & greet service at the arrival gates</strong>, ensuring that 
    you are welcomed as soon as you exit the terminal.
</p>

<h2>Vehicle Options for Dalaman Airport Transfers</h2>
<ul>
    <li><strong>Saloon Car</strong> – Ideal for solo travelers and couples.</li>
    <li><strong>People Carrier (5 Passengers)</strong> – Great for families and small groups.</li>
    <li><strong>8-Seater Minibus</strong> – Spacious and perfect for larger groups with luggage.</li>
    <li><strong>Business-Class Mercedes Vehicles</strong> – Luxury and comfort for executive travelers.</li>
</ul>

<h2>Meet & Greet Service – Where to Find Your Driver</h2>
<ul>
    <li><strong>Location:</strong> Upon arrival at <strong>Dalaman Airport (DLM)</strong>, your driver will be 
        waiting <strong>by the arrival gates</strong>, holding a passenger name board for easy recognition.</li>
    <li><strong>No delays:</strong> Even if your flight is early or delayed, our drivers track your arrival 
        time and adjust accordingly.</li>
    <li><strong>Seamless Transfers:</strong> No need to wait for taxis or deal with last-minute negotiations—
        your private driver will be ready to take you directly to your destination.</li>
</ul>

<h2>Why Choose APL Transfers?</h2>
<ul>
    <li><strong>Meet & Greet at the Arrival Gates</strong> – Your driver will be waiting for you with a name board.</li>
    <li><strong>Fixed Prices – No Hidden Costs</strong> – What you see is what you pay.</li>
    <li><strong>Free Cancellation Up to 24 Hours Before Arrival</strong> – Book with confidence.</li>
    <li><strong>Free Child Seats for 8 & 9-Seater Private Vehicles</strong> – Safety for families at no extra cost.</li>
    <li><strong>24/7 Customer Support</strong> – Always available to assist with your journey.</li>
    <li><strong>Corporate Travel Solutions</strong> – Reliable airport transfers for business professionals.</li>
    <li><strong>Luxury, Clean & Well-Maintained Vehicles</strong> – Enjoy a comfortable ride to your destination.</li>
    <li><strong>Destinations Across the Region</strong> – Transfers available to <strong>Fethiye, Marmaris, Oludeniz, 
        Icmeler, Hisaronu</strong>, and more.</li>
</ul>

<h2>Book Your Dalaman Airport Taxi Now</h2>

<p>
    Make your arrival at <strong>Dalaman Airport (DLM)</strong> stress-free by pre-booking your 
    <strong>private taxi transfer</strong>. Whether you're heading to the stunning beaches of 
    <strong>Oludeniz, the lively town of Marmaris, the scenic resort of Hisaronu, or the relaxing 
    retreat of Icmeler</strong>, we ensure a smooth, fixed-price transfer with no hidden fees.
</p>

<ul>
    <li><strong>Instant Online Booking</strong></li>
    <li><strong>Secure Payment</strong> (Euro, GBP, US Dollar & Turkish Lira Accepted)</li>
    <li><strong>No Hidden Fees – Transparent Pricing</strong></li>
</ul>

<p>
    Need help? Contact our <strong>24/7 customer support</strong> for assistance.
    <a href="/">Book Now</a> and travel with ease.
</p>

        `,
        tr: `
        <h1>Dalaman Havalimanı Taksi Transfer Fiyatları – Özel ve Sabit Fiyatlı Transferler</h1>

<h2>Dalaman Havalimanı’ndan Güvenilir ve Konforlu Transferler (DLM)</h2>

<p>
    <strong>Fethiye, Marmaris, Ölüdeniz, İçmeler veya Hisarönü</strong>’ne mi seyahat ediyorsunuz? APL Transfers, 
    <strong>Dalaman Havalimanı (DLM)</strong>’dan özel ve sabit fiyatlı havalimanı taksi transfer hizmetleri sunar. 
    İhtiyacınız ister <strong>sedan bir araç, beş yolcu kapasiteli geniş bir araç, sekiz kişilik bir minibüs 
    veya lüks bir Mercedes iş sınıfı araç</strong> olsun, yolculuğunuzun sorunsuz ve konforlu geçmesini sağlıyoruz.
</p>

<p>
    Profesyonel şoförlerimiz, <strong>varış kapılarında karşılama hizmeti</strong> sunarak, havalimanı terminalinden 
    çıktığınız anda size sıcak bir karşılama sağlar.
</p>

<h2>Dalaman Havalimanı Transfer Araç Seçenekleri</h2>
<ul>
    <li><strong>Sedan Araç</strong> – Bireysel yolcular ve çiftler için ideal.</li>
    <li><strong>Minivan (5 Yolcu)</strong> – Aileler ve küçük gruplar için mükemmel.</li>
    <li><strong>8 Kişilik Minibüs</strong> – Daha büyük gruplar ve fazla bagaj için geniş ve rahat.</li>
    <li><strong>Mercedes İş Sınıfı Araçlar</strong> – VIP ve iş seyahatleri için üst düzey konfor.</li>
</ul>

<h2>Karşılama Hizmeti – Sürücünüzü Nerede Bulabilirsiniz?</h2>
<ul>
    <li><strong>Konum:</strong> <strong>Dalaman Havalimanı (DLM)</strong>’na vardığınızda, şoförünüz sizi 
        <strong>varış kapılarında</strong> isminizin yazılı olduğu bir tabela ile karşılayacaktır.</li>
    <li><strong>Gecikme Yok:</strong> Uçağınız erken inse veya rötar yapsa bile, şoförlerimiz varış saatlerinizi 
        takip ederek programlarını buna göre ayarlar.</li>
    <li><strong>Hızlı ve Kolay Transfer:</strong> Taksi beklemenize veya son dakika pazarlıkları yapmanıza gerek kalmaz – 
        özel şoförünüz sizi doğrudan gitmek istediğiniz yere götürecektir.</li>
</ul>

<h2>Neden APL Transfers’i Seçmelisiniz?</h2>
<ul>
    <li><strong>Varış Kapılarında Karşılama</strong> – Şoförünüz sizi isminizin yazılı olduğu bir tabela ile bekliyor olacak.</li>
    <li><strong>Sabit Fiyatlar – Gizli Ücret Yok</strong> – Ne görüyorsanız onu ödersiniz.</li>
    <li><strong>Varıştan 24 Saat Öncesine Kadar Ücretsiz İptal</strong> – Esnek ve risksiz rezervasyon.</li>
    <li><strong>8 ve 9 Kişilik Özel Araçlar İçin Ücretsiz Çocuk Koltuğu</strong> – Aileler için ekstra güvenlik, ek ücret olmadan.</li>
    <li><strong>7/24 Müşteri Desteği</strong> – Seyahatinizde her zaman yardıma hazırız.</li>
    <li><strong>Kurumsal Seyahat Çözümleri</strong> – İş seyahatleri için güvenilir transfer hizmetleri.</li>
    <li><strong>Temiz, Konforlu ve Bakımlı Araçlar</strong> – Varış noktanıza konfor içinde ulaşın.</li>
    <li><strong>Bölgedeki Popüler Destinasyonlar</strong> – <strong>Fethiye, Marmaris, Ölüdeniz, 
        İçmeler, Hisarönü</strong> ve daha birçok yere transfer hizmeti sağlıyoruz.</li>
</ul>

<h2>Dalaman Havalimanı Taksi Rezervasyonu Yapın</h2>

<p>
    <strong>Dalaman Havalimanı (DLM)</strong>’na vardığınızda taksi arama stresinden kaçının. 
    <strong>Özel havalimanı taksi transferinizi</strong> önceden rezerve edin ve konforlu bir yolculuk yapın. 
    İster <strong>Ölüdeniz’in eşsiz plajlarına, Marmaris’in hareketli şehir merkezine, Hisarönü’nün 
    doğal güzelliklerine ya da İçmeler’in huzurlu tatil köyüne</strong> gidiyor olun, gizli ücret olmadan 
    sabit fiyatlı ve sorunsuz bir transfer hizmeti sunuyoruz.
</p>

<ul>
    <li><strong>Anında Online Rezervasyon</strong></li>
    <li><strong>Güvenli Ödeme</strong> (Euro, GBP, ABD Doları & Türk Lirası kabul edilir)</li>
    <li><strong>Gizli Ücret Yok – Şeffaf Fiyatlandırma</strong></li>
</ul>

<p>
    Yardıma mı ihtiyacınız var? <strong>7/24 müşteri destek</strong> ekibimizle iletişime geçin.
    <a href="/">Hemen Rezervasyon Yapın</a> ve rahat bir yolculuk yapın.
</p>
        `,
        ar: `
        <h1>أسعار سيارات الأجرة في مطار دالامان – خدمات نقل خاصة وبأسعار ثابتة</h1>

<h2>نقل موثوق ومريح من مطار دالامان (DLM)</h2>

<p>
    هل تخطط للسفر إلى <strong>فتحية، مرمريس، أولودينيز، إيشملر أو هيسارونو</strong>؟ تقدم APL Transfers  
    <strong>خدمات نقل خاصة من مطار دالامان (DLM) بأسعار ثابتة</strong> إلى وجهتك.  
    سواء كنت بحاجة إلى <strong>سيارة سيدان، حافلة صغيرة تتسع لخمسة ركاب، حافلة صغيرة بثمانية مقاعد، 
    أو سيارة مرسيدس فاخرة للأعمال</strong>، فإننا نضمن لك رحلة سلسة ومريحة بدون أي متاعب.
</p>

<p>
    يوفر سائقونا المحترفون <strong>خدمة استقبال عند بوابات الوصول</strong>، مما يضمن لك ترحيبًا فوريًا  
    بمجرد خروجك من مبنى المطار.
</p>

<h2>خيارات المركبات لخدمة النقل من مطار دالامان</h2>
<ul>
    <li><strong>سيارة سيدان</strong> – مثالية للمسافرين الأفراد والأزواج.</li>
    <li><strong>حافلة صغيرة (5 ركاب)</strong> – مثالية للعائلات والمجموعات الصغيرة.</li>
    <li><strong>حافلة صغيرة بـ 8 مقاعد</strong> – فسيحة ومناسبة للمجموعات الكبيرة مع الأمتعة.</li>
    <li><strong>سيارات مرسيدس للأعمال</strong> – توفر الراحة والفخامة للمسافرين من رجال الأعمال.</li>
</ul>

<h2>خدمة الاستقبال – أين تجد سائقك؟</h2>
<ul>
    <li><strong>الموقع:</strong> عند وصولك إلى <strong>مطار دالامان (DLM)</strong>،  
        سيكون سائقك في انتظارك <strong>عند بوابات الوصول</strong> حاملًا لوحة تحمل اسمك لسهولة التعرف عليه.</li>
    <li><strong>بدون تأخير:</strong> حتى إذا كان وصول رحلتك مبكرًا أو متأخرًا،  
        فإن سائقينا يتابعون وقت وصولك ويعدّلون جدولهم وفقًا لذلك.</li>
    <li><strong>نقل سلس:</strong> لا داعي للانتظار لسيارات الأجرة أو التفاوض في اللحظة الأخيرة –  
        سيكون سائقك الخاص جاهزًا لنقلك مباشرة إلى وجهتك.</li>
</ul>

<h2>لماذا تختار APL Transfers؟</h2>
<ul>
    <li><strong>الاستقبال عند بوابات الوصول</strong> – سيكون السائق في انتظارك بلوحة تحمل اسمك.</li>
    <li><strong>أسعار ثابتة – بدون رسوم خفية</strong> – لا يوجد أي تكاليف إضافية.</li>
    <li><strong>إمكانية الإلغاء المجاني حتى 24 ساعة قبل الوصول</strong> – حجز مرن وآمن.</li>
    <li><strong>مقاعد أطفال مجانية للمركبات الخاصة بـ 8 و 9 مقاعد</strong> – لضمان سلامة العائلات.</li>
    <li><strong>دعم العملاء 24/7</strong> – متاح دائمًا لمساعدتك أثناء رحلتك.</li>
    <li><strong>حلول سفر الشركات</strong> – خدمات نقل موثوقة للمسافرين من رجال الأعمال.</li>
    <li><strong>مركبات فاخرة ونظيفة ومُصانة جيدًا</strong> – استمتع برحلة مريحة إلى وجهتك.</li>
    <li><strong>وجهات متعددة في المنطقة</strong> – تتوفر خدمات النقل إلى  
        <strong>فتحية، مرمريس، أولودينيز، إيشملر، هيسارونو</strong> والمزيد.</li>
</ul>

<h2>احجز سيارة الأجرة من مطار دالامان الآن</h2>

<p>
    تجنب عناء البحث عن سيارة أجرة عند وصولك إلى <strong>مطار دالامان (DLM)</strong>.  
    احجز <strong>خدمة النقل الخاصة</strong> مسبقًا وتمتع برحلة مريحة وخالية من المتاعب.<br>  
    سواء كنت متجهًا إلى <strong>الشواطئ الساحرة لأولودينيز، المدينة النابضة بالحياة مرمريس،  
    المنتجع الخلاب في هيسارونو أو الملاذ الهادئ في إيشملر</strong>، فإننا نوفر لك خدمة نقل  
    بأسعار ثابتة وبدون أي رسوم خفية.
</p>

<ul>
    <li><strong>حجز فوري عبر الإنترنت</strong></li>
    <li><strong>دفع آمن</strong> (نقبل اليورو، الجنيه الإسترليني، الدولار الأمريكي والليرة التركية)</li>
    <li><strong>بدون رسوم خفية – تسعير شفاف</strong></li>
</ul>

<p>
    هل تحتاج إلى مساعدة؟ تواصل مع <strong>خدمة العملاء المتوفرة 24/7</strong> لضمان تجربة نقل سلسة.
    <a href="/">احجز الآن</a> وسافر براحة وطمأنينة!
</p>

        `,
        es: `
        <h1>Precios de Taxi en el Aeropuerto de Dalaman – Traslados Privados y a Precio Fijo</h1>

<h2>Traslados Confiables y Cómodos desde el Aeropuerto de Dalaman (DLM)</h2>

<p>
    ¿Viajas a <strong>Fethiye, Marmaris, Oludeniz, Icmeler o Hisaronu</strong>?  
    APL Transfers ofrece <strong>servicios de taxi privado con tarifa fija</strong>  
    desde el <strong>Aeropuerto de Dalaman (DLM)</strong> hasta tu destino.  
    Ya sea que necesites un <strong>sedán, un monovolumen espacioso para cinco pasajeros,  
    un minibús de ocho plazas o un lujoso Mercedes de clase ejecutiva</strong>,  
    garantizamos un traslado fluido y sin complicaciones.
</p>

<p>
    Nuestros conductores profesionales ofrecen un <strong>servicio de bienvenida en las puertas de llegada</strong>,  
    asegurando que seas recibido tan pronto como salgas de la terminal.
</p>

<h2>Opciones de Vehículos para Traslados desde el Aeropuerto de Dalaman</h2>
<ul>
    <li><strong>Sedán</strong> – Ideal para viajeros solos y parejas.</li>
    <li><strong>Monovolumen (5 Pasajeros)</strong> – Perfecto para familias y grupos pequeños.</li>
    <li><strong>Minibús de 8 Plazas</strong> – Espacioso y adecuado para grupos grandes con equipaje.</li>
    <li><strong>Vehículos Mercedes de Clase Ejecutiva</strong> – Viajes de lujo para ejecutivos y VIPs.</li>
</ul>

<h2>Servicio de Bienvenida – ¿Dónde Encontrar a tu Conductor?</h2>
<ul>
    <li><strong>Ubicación:</strong> Al llegar al <strong>Aeropuerto de Dalaman (DLM)</strong>,  
        tu conductor te estará esperando <strong>en las puertas de llegada</strong>,  
        sosteniendo un cartel con tu nombre para que lo reconozcas fácilmente.</li>
    <li><strong>Sin retrasos:</strong> Incluso si tu vuelo llega antes o se retrasa,  
        nuestros conductores monitorean la hora de llegada y ajustan el horario según sea necesario.</li>
    <li><strong>Traslados sin Esperas:</strong> No es necesario hacer fila para un taxi  
        ni negociar precios de última hora – tu conductor privado estará listo  
        para llevarte directamente a tu destino.</li>
</ul>

<h2>¿Por Qué Elegir APL Transfers?</h2>
<ul>
    <li><strong>Servicio de Bienvenida en las Puertas de Llegada</strong> – Tu conductor te estará esperando con un cartel con tu nombre.</li>
    <li><strong>Precios Fijos – Sin Costos Ocultos</strong> – Lo que ves es lo que pagas.</li>
    <li><strong>Cancelación Gratuita Hasta 24 Horas Antes de la Llegada</strong> – Reserva con total confianza.</li>
    <li><strong>Asientos para Niños Gratis en Vehículos de 8 y 9 Plazas</strong> – Seguridad para familias sin costo adicional.</li>
    <li><strong>Atención al Cliente 24/7</strong> – Siempre disponible para ayudarte en tu viaje.</li>
    <li><strong>Soluciones de Viaje para Empresas</strong> – Traslados confiables para viajeros de negocios.</li>
    <li><strong>Vehículos de Lujo, Limpios y Bien Mantenidos</strong> – Disfruta de un viaje cómodo a tu destino.</li>
    <li><strong>Traslados a Diversos Destinos</strong> – Servicio disponible para  
        <strong>Fethiye, Marmaris, Oludeniz, Icmeler, Hisaronu</strong> y más.</li>
</ul>

<h2>Reserva Ahora tu Taxi en el Aeropuerto de Dalaman</h2>

<p>
    Evita el estrés de buscar un taxi al llegar al <strong>Aeropuerto de Dalaman (DLM)</strong>.  
    Reserva con anticipación tu <strong>traslado privado</strong> y disfruta de un viaje sin preocupaciones.<br>  
    Ya sea que te dirijas a <strong>las impresionantes playas de Oludeniz, la animada ciudad de Marmaris,  
    el tranquilo resort de Hisaronu o el retiro relajante de Icmeler</strong>, garantizamos  
    un traslado a precio fijo sin costos ocultos.
</p>

<ul>
    <li><strong>Reserva Online al Instante</strong></li>
    <li><strong>Pago Seguro</strong> (Se aceptan Euros, GBP, Dólares Estadounidenses y Liras Turcas)</li>
    <li><strong>Sin Costos Ocultos – Tarifas Transparentes</strong></li>
</ul>

<p>
    ¿Necesitas ayuda? Contacta con nuestro <strong>soporte al cliente 24/7</strong> para una experiencia de traslado sin inconvenientes.
    <a href="/">Reserva Ahora</a> y viaja con tranquilidad.
</p>

        `,
        it: `
        <h1>Prezzi Taxi Aeroporto di Dalaman – Trasferimenti Privati e a Prezzo Fisso</h1>

<h2>Trasferimenti Affidabili e Confortevoli dall'Aeroporto di Dalaman (DLM)</h2>

<p>
    Viaggi verso <strong>Fethiye, Marmaris, Oludeniz, Icmeler o Hisaronu</strong>? APL Transfers offre 
    <strong>servizi di trasferimento privato in taxi a prezzo fisso</strong> dall'<strong>Aeroporto di Dalaman (DLM)</strong> 
    alla tua destinazione. Che tu abbia bisogno di una <strong>berlina, un monovolume spazioso per cinque passeggeri, 
    un minibus a otto posti o un lussuoso veicolo Mercedes business-class</strong>, garantiamo un viaggio fluido e senza stress.
</p>

<p>
    I nostri autisti professionisti offrono un <strong>servizio di accoglienza ai cancelli di arrivo</strong>, assicurandoti 
    un benvenuto immediato non appena esci dal terminal.
</p>

<h2>Opzioni di Veicoli per i Trasferimenti all'Aeroporto di Dalaman</h2>
<ul>
    <li><strong>Berlina</strong> – Ideale per viaggiatori singoli e coppie.</li>
    <li><strong>Monovolume (5 Passeggeri)</strong> – Perfetto per famiglie e piccoli gruppi.</li>
    <li><strong>Minibus a 8 Posti</strong> – Spazioso e ideale per gruppi numerosi con bagagli.</li>
    <li><strong>Veicoli Mercedes Business-Class</strong> – Lusso e comfort per viaggiatori d'affari.</li>
</ul>

<h2>Servizio di Accoglienza – Dove Trovare il Tuo Autista?</h2>
<ul>
    <li><strong>Posizione:</strong> All'arrivo all'<strong>Aeroporto di Dalaman (DLM)</strong>, il tuo autista ti 
        aspetterà <strong>ai cancelli di arrivo</strong>, tenendo un cartello con il tuo nome per un facile riconoscimento.</li>
    <li><strong>Nessun ritardo:</strong> Anche se il tuo volo è in anticipo o in ritardo, i nostri autisti monitorano 
        l'orario di arrivo e si adattano di conseguenza.</li>
    <li><strong>Trasferimenti senza Attese:</strong> Nessuna fila per un taxi o trattative dell'ultimo minuto – il tuo autista 
        privato sarà pronto a portarti direttamente alla tua destinazione.</li>
</ul>

<h2>Perché Scegliere APL Transfers?</h2>
<ul>
    <li><strong>Accoglienza ai Cancelli di Arrivo</strong> – Il tuo autista ti attenderà con un cartello con il tuo nome.</li>
    <li><strong>Prezzi Fissi – Nessun Costo Nascosto</strong> – Paghi solo quello che vedi.</li>
    <li><strong>Cancellazione Gratuita fino a 24 Ore Prima dell'Arrivo</strong> – Prenotazione flessibile e sicura.</li>
    <li><strong>Seggiolini per Bambini Gratuiti per Veicoli Privati a 8 e 9 Posti</strong> – Sicurezza per le famiglie senza costi aggiuntivi.</li>
    <li><strong>Supporto Clienti 24/7</strong> – Sempre disponibile per assisterti nel tuo viaggio.</li>
    <li><strong>Soluzioni per Viaggi Aziendali</strong> – Trasferimenti affidabili per professionisti.</li>
    <li><strong>Veicoli di Lusso, Puliti e Ben Manutenuti</strong> – Viaggia in totale comfort fino alla tua destinazione.</li>
    <li><strong>Destinazioni in Tutta la Regione</strong> – Trasferimenti disponibili per <strong>Fethiye, Marmaris, Oludeniz, 
        Icmeler, Hisaronu</strong> e molte altre.</li>
</ul>

<h2>Prenota Ora il Tuo Taxi dall'Aeroporto di Dalaman</h2>

<p>
    Arriva all'<strong>Aeroporto di Dalaman (DLM)</strong> senza stress prenotando in anticipo il tuo 
    <strong>trasferimento in taxi privato</strong>. Che tu stia andando alle splendide spiagge di 
    <strong>Oludeniz, alla vivace città di Marmaris, alla località panoramica di Hisaronu o al rifugio 
    rilassante di Icmeler</strong>, garantiamo un trasferimento fluido e a prezzo fisso senza costi nascosti.
</p>

<ul>
    <li><strong>Prenotazione Online Immediata</strong></li>
    <li><strong>Pagamento Sicuro</strong> (Accettati Euro, GBP, Dollari USA e Lira Turca)</li>
    <li><strong>Nessun Costo Nascosto – Prezzi Trasparenti</strong></li>
</ul>

<p>
    Hai bisogno di aiuto? Contatta il nostro <strong>supporto clienti 24/7</strong> per assistenza.
    <a href="/">Prenota Ora</a> e viaggia con tranquillità.
</p>

        `,
        ru: `
        <h1>Цены на такси в аэропорту Даламан – Частные и фиксированные трансферы</h1>

<h2>Надежные и комфортные трансферы из аэропорта Даламан (DLM)</h2>

<p>
    Путешествуете в <strong>Фетхие, Мармарис, Олюдениз, Ичмелер или Хисарону</strong>?  
    APL Transfers предлагает <strong>частные трансферы по фиксированной цене</strong>  
    из <strong>аэропорта Даламан (DLM)</strong> до вашего пункта назначения.  
    Независимо от того, нужна ли вам <strong>седан, просторный минивэн на пять пассажиров,  
    микроавтобус на восемь мест или роскошный автомобиль Mercedes бизнес-класса</strong>,  
    мы обеспечим вам комфортную и беззаботную поездку.
</p>

<p>
    Наши профессиональные водители предлагают <strong>услугу встречи у выходов из зоны прилета</strong>,  
    чтобы вы могли сразу найти вашего водителя после выхода из терминала.
</p>

<h2>Варианты транспорта для трансфера из аэропорта Даламан</h2>
<ul>
    <li><strong>Седан</strong> – Идеально подходит для индивидуальных путешественников и пар.</li>
    <li><strong>Минивэн (5 пассажиров)</strong> – Отличный вариант для семей и небольших групп.</li>
    <li><strong>Микроавтобус на 8 мест</strong> – Просторное решение для больших групп с багажом.</li>
    <li><strong>Автомобили Mercedes бизнес-класса</strong> – Премиальный комфорт для деловых поездок и VIP-гостей.</li>
</ul>

<h2>Где найти вашего водителя?</h2>
<ul>
    <li><strong>Местоположение:</strong> По прибытии в <strong>аэропорт Даламан (DLM)</strong>  
        ваш водитель будет ждать вас <strong>у выходов из зоны прилета</strong>,  
        держа табличку с вашим именем для легкого опознания.</li>
    <li><strong>Без задержек:</strong> Даже если ваш рейс прибудет раньше или с опозданием,  
        наши водители отслеживают время прилета и корректируют расписание.</li>
    <li><strong>Быстрый и удобный трансфер:</strong> Вам не нужно стоять в очереди на такси  
        или договариваться о цене – ваш личный водитель отвезет вас прямо в пункт назначения.</li>
</ul>

<h2>Почему выбирают APL Transfers?</h2>
<ul>
    <li><strong>Встреча у выходов из зоны прилета</strong> – Водитель будет ждать вас с табличкой с вашим именем.</li>
    <li><strong>Фиксированные цены – Без скрытых платежей</strong> – Вы платите ровно столько, сколько указано.</li>
    <li><strong>Бесплатная отмена бронирования за 24 часа до прибытия</strong> – Гибкие условия бронирования без риска.</li>
    <li><strong>Бесплатные детские кресла в автомобилях на 8 и 9 мест</strong> – Дополнительная безопасность для семей.</li>
    <li><strong>Круглосуточная поддержка клиентов</strong> – Мы всегда готовы помочь вам.</li>
    <li><strong>Корпоративные трансферы</strong> – Надежные поездки для деловых клиентов.</li>
    <li><strong>Роскошные, чистые и ухоженные автомобили</strong> – Наслаждайтесь комфортной поездкой.</li>
    <li><strong>Популярные направления</strong> – Трансферы доступны в  
        <strong>Фетхие, Мармарис, Олюдениз, Ичмелер, Хисарону</strong> и другие города.</li>
</ul>

<h2>Забронируйте такси из аэропорта Даламан</h2>

<p>
    Избегайте поисков такси по прилету в <strong>аэропорт Даламан (DLM)</strong>.  
    Забронируйте <strong>частный трансфер</strong> заранее и наслаждайтесь спокойной поездкой.<br>  
    Независимо от того, направляетесь ли вы на <strong>живописные пляжи Олюдениз,  
    в оживленный Мармарис, в курортный город Хисарону или в уединенный Ичмелер</strong>,  
    мы обеспечим вам фиксированную цену без скрытых платежей.
</p>

<ul>
    <li><strong>Мгновенное онлайн-бронирование</strong></li>
    <li><strong>Безопасная оплата</strong> (Принимаются евро, фунты стерлингов, доллары США и турецкие лиры)</li>
    <li><strong>Без скрытых платежей – Прозрачные цены</strong></li>
</ul>

<p>
    Нужна помощь? Свяжитесь с нашей <strong>службой поддержки 24/7</strong> для комфортного трансфера.
    <a href="/">Забронировать сейчас</a> и путешествуйте без забот!
</p>

        `,
        zh: `
        <h1>达拉曼机场出租车价格 – 私人接送 & 固定价格</h1>

<h2>可靠 & 舒适的达拉曼机场 (DLM) 接送服务</h2>

<p>
    计划前往<strong>费特希耶 (Fethiye)、马尔马里斯 (Marmaris)、厄吕代尼兹 (Oludeniz)、伊克梅勒 (Icmeler) 或 希萨罗努 (Hisaronu)</strong>？
    APL Transfers 提供<strong>达拉曼机场 (DLM) 的私人固定价格机场出租车接送服务</strong>。<br>
    无论您需要<strong>轿车、可容纳五名乘客的宽敞 MPV、八座小型巴士，还是豪华奔驰商务车</strong>，我们都能为您提供顺畅无忧的接送服务。
</p>

<p>
    我们的专业司机将在<strong>到达门提供迎接服务</strong>，确保您一走出航站楼就能立即受到欢迎。
</p>

<h2>达拉曼机场接送车辆选择</h2>
<ul>
    <li><strong>轿车</strong> – 适合个人和情侣出行。</li>
    <li><strong>MPV（5 人座）</strong> – 适合家庭和小团体。</li>
    <li><strong>8 座小型巴士</strong> – 空间宽敞，适合较大的团队和行李较多的旅客。</li>
    <li><strong>奔驰商务车型</strong> – 为高端商务人士和 VIP 旅客提供尊贵舒适的乘坐体验。</li>
</ul>

<h2>接机服务 – 在哪里找到您的司机？</h2>
<ul>
    <li><strong>位置：</strong> 抵达 <strong>达拉曼机场 (DLM)</strong> 后，您的司机将在
        <strong>到达门</strong> 等候，并举着写有您的姓名的接机牌，方便您认出。</li>
    <li><strong>无延误：</strong> 即使您的航班提前或延误，我们的司机也会实时跟踪您的抵达时间并相应调整。</li>
    <li><strong>快速便捷：</strong> 无需排队等待出租车或与司机议价，您的私人司机将直接送您到达目的地。</li>
</ul>

<h2>为什么选择 APL Transfers？</h2>
<ul>
    <li><strong>到达门迎接服务</strong> – 司机将在到达门举着您的姓名牌等待。</li>
    <li><strong>固定价格 – 无隐藏费用</strong> – 透明价格，无额外收费。</li>
    <li><strong>支持 24 小时前免费取消</strong> – 预订灵活，无后顾之忧。</li>
    <li><strong>8 座和 9 座私人车辆提供免费儿童座椅</strong> – 确保家庭旅客的安全。</li>
    <li><strong>24/7 客户支持</strong> – 随时提供帮助。</li>
    <li><strong>企业差旅解决方案</strong> – 提供可靠的商务接送服务。</li>
    <li><strong>豪华、干净且维护良好的车辆</strong> – 享受高品质的舒适旅行体验。</li>
    <li><strong>覆盖广泛的目的地</strong> – 接送范围包括 <strong>费特希耶 (Fethiye)、马尔马里斯 (Marmaris)、厄吕代尼兹 (Oludeniz)、伊克梅勒 (Icmeler)、希萨罗努 (Hisaronu)</strong> 等地。</li>
</ul>

<h2>立即预订达拉曼机场出租车</h2>

<p>
    抵达 <strong>达拉曼机场 (DLM)</strong> 后无需费心寻找出租车。提前预订
    <strong>私人机场接送服务</strong>，享受轻松无忧的旅程。<br>
    无论您前往<strong>厄吕代尼兹 (Oludeniz) 的绝美海滩、马尔马里斯 (Marmaris) 的繁华小镇、
    希萨罗努 (Hisaronu) 的风景度假区，还是伊克梅勒 (Icmeler) 的静谧度假村</strong>，我们都提供无隐藏费用的固定价格接送服务。
</p>

<ul>
    <li><strong>即时在线预订</strong></li>
    <li><strong>安全支付</strong>（支持欧元 (EUR)、英镑 (GBP)、美元 (USD) 和土耳其里拉 (TRY)）</li>
    <li><strong>无隐藏费用 – 透明定价</strong></li>
</ul>

<p>
    需要帮助？请联系 <strong>24/7 客户支持</strong>，确保您拥有顺畅的接送体验。
    <a href="/">立即预订</a>，享受安心之旅！
</p>

        `,
    },
    "/antalya-airport-taxi-prices": {
        en: ``,
        tr: ``,
        ar: ``,
        es: ``,
        it: ``,
        ru: ``,
        zh: ``,
    },
    "/bodrum-milas-airport-taxi-prices": {
        en: ``,
        tr: ``,
        ar: ``,
        es: ``,
        it: ``,
        ru: ``,
        zh: ``,
    },
    "/izmir-adnan-menderes-airport-taxi-prices": {
        en: ``,
        tr: ``,
        ar: ``,
        es: ``,
        it: ``,
        ru: ``,
        zh: ``,
    },
    "/gazipasha-alanya-airport-taxi-prices": {
        en: ``,
        tr: ``,
        ar: ``,
        es: ``,
        it: ``,
        ru: ``,
        zh: ``,
    },

}