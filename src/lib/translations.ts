type Translation = {
  appName: string;
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
  og: {
    description: string;
    imageAlt: string;
    locale: string;
  };
  twitter: {
    description: string;
  };
};

const translations: { [key: string]: Translation } = {
  en: {
    appName: 'Network Sentinel',
    meta: {
      title: 'Network Sentinel | Free Real-Time Website Status Checker',
      description: 'Check the status of any website in real-time with Network Sentinel. A free online tool to monitor if a site is online, offline, or has errors.',
      keywords: ['free website checker', 'site status', 'is site down', 'website monitoring', 'uptime', 'network tool', 'free tool', 'network sentinel'],
    },
    og: {
      description: 'A completely free online tool to instantly check the status of multiple URLs.',
      imageAlt: 'Network Sentinel Banner showing a globe and status icons',
      locale: 'en_US',
    },
    twitter: {
      description: 'Quickly check if your websites are up. Simple, fast, and completely free.',
    },
  },
  pt: {
    appName: 'Sentinela da Rede',
    meta: {
      title: 'Sentinela da Rede | Verificador de Status de Site Gratuito em Tempo Real',
      description: 'Verifique o status de qualquer site em tempo real com o Sentinela da Rede. Ferramenta online grátis para monitorar se um site está online, offline ou com erros.',
      keywords: ['verificador de site gratuito', 'status do site', 'site fora do ar', 'monitoramento de site', 'uptime', 'ferramenta de rede', 'ferramenta grátis', 'sentinela da rede'],
    },
    og: {
      description: 'Ferramenta online totalmente gratuita para verificar instantaneamente o status de múltiplos URLs.',
      imageAlt: 'Banner do Sentinela da Rede mostrando um globo e ícones de status',
      locale: 'pt_BR',
    },
    twitter: {
      description: 'Verifique rapidamente se seus sites estão no ar. Simples, rápido e totalmente grátis.',
    },
  },
  es: {
    appName: 'Centinela de Red',
    meta: {
      title: 'Centinela de Red | Verificador de Estado de Sitios Web Gratuito en Tiempo Real',
      description: 'Verifique el estado de cualquier sitio web en tiempo real con Centinela de Red. Herramienta en línea gratuita para monitorear si un sitio está en línea, fuera de línea o tiene errores.',
      keywords: ['verificador de sitios web gratuito', 'estado del sitio', 'sitio caído', 'monitoreo de sitios web', 'tiempo de actividad', 'herramienta de red', 'herramienta gratis', 'centinela de red'],
    },
    og: {
      description: 'Herramienta en línea completamente gratuita para verificar instantáneamente el estado de múltiples URLs.',
      imageAlt: 'Banner de Centinela de Red mostrando un globo e íconos de estado',
      locale: 'es_ES',
    },
    twitter: {
      description: 'Verifique rápidamente si sus sitios web están activos. Simple, rápido y completamente gratis.',
    },
  },
  zh: {
    appName: '网络哨兵',
    meta: {
      title: '网络哨兵 | 免费实时网站状态检查器',
      description: '使用网络哨兵实时检查任何网站的状态。一个免费的在线工具，用于监控网站是在线、离线还是有错误。',
      keywords: ['免费网站检查器', '网站状态', '网站是否宕机', '网站监控', '正常运行时间', '网络工具', '免费工具', '网络哨兵'],
    },
    og: {
      description: '一个完全免费的在线工具，可即时检查多个URL的状态。',
      imageAlt: '网络哨兵横幅，显示一个地球和状态图标',
      locale: 'zh_CN',
    },
    twitter: {
      description: '快速检查您的网站是否正常运行。简单、快速、完全免费。',
    },
  },
  ru: {
    appName: 'Сетевой Страж',
    meta: {
      title: 'Сетевой Страж | Бесплатная проверка статуса сайтов в реальном времени',
      description: 'Проверяйте статус любого сайта в реальном времени с помощью Сетевого Стража. Бесплатный онлайн-инструмент для мониторинга, находится ли сайт в сети, офлайн или имеет ошибки.',
      keywords: ['бесплатная проверка сайта', 'статус сайта', 'сайт недоступен', 'мониторинг сайта', 'время работы', 'сетевой инструмент', 'бесплатный инструмент', 'сетевой страж'],
    },
    og: {
      description: 'Полностью бесплатный онлайн-инструмент для мгновенной проверки статуса нескольких URL-адресов.',
      imageAlt: 'Баннер Сетевого Стража, показывающий глобус и значки статуса',
      locale: 'ru_RU',
    },
    twitter: {
      description: 'Быстро проверьте, работают ли ваши сайты. Просто, быстро и абсолютно бесплатно.',
    },
  },
  ar: {
    appName: 'حارس الشبكة',
    meta: {
      title: 'حارس الشبكة | مدقق حالة المواقع المجاني في الوقت الفعلي',
      description: 'تحقق من حالة أي موقع ويب في الوقت الفعلي باستخدام حارس الشبكة. أداة مجانية عبر الإنترنت لمراقبة ما إذا كان الموقع متصلاً بالإنترنت أو غير متصل أو به أخطاء.',
      keywords: ['مدقق مواقع الويب المجاني', 'حالة الموقع', 'هل الموقع معطل', 'مراقبة مواقع الويب', 'وقت التشغيل', 'أداة الشبكة', 'أداة مجانية', 'حارس الشبكة'],
    },
    og: {
      description: 'أداة مجانية تمامًا عبر الإنترنت للتحقق الفوري من حالة عناوين URL متعددة.',
      imageAlt: 'بانر حارس الشبكة يظهر كرة أرضية وأيقونات الحالة',
      locale: 'ar_AE',
    },
    twitter: {
      description: 'تحقق بسرعة مما إذا كانت مواقع الويب الخاصة بك تعمل. بسيط وسريع ومجاني تمامًا.',
    },
  },
  fr: {
    appName: 'Sentinelle du Réseau',
    meta: {
      title: 'Sentinelle du Réseau | Vérificateur de Statut de Site Web Gratuit en Temps Réel',
      description: "Vérifiez le statut de n'importe quel site web en temps réel avec Sentinelle du Réseau. Outil en ligne gratuit pour surveiller si un site est en ligne, hors ligne ou a des erreurs.",
      keywords: ['vérificateur de site web gratuit', 'statut du site', 'site en panne', 'surveillance de site web', 'disponibilité', 'outil réseau', 'outil gratuit', 'sentinelle du réseau'],
    },
    og: {
      description: "Outil en ligne entièrement gratuit pour vérifier instantanément le statut de plusieurs URL.",
      imageAlt: 'Bannière de Sentinelle du Réseau montrant un globe et des icônes de statut',
      locale: 'fr_FR',
    },
    twitter: {
      description: 'Vérifiez rapidement si vos sites web sont fonctionnels. Simple, rapide et entièrement gratuit.',
    },
  },
  de: {
    appName: 'Netzwerkwächter',
    meta: {
      title: 'Netzwerkwächter | Kostenloser Echtzeit-Website-Statusprüfer',
      description: 'Überprüfen Sie den Status jeder Website in Echtzeit mit dem Netzwerkwächter. Kostenloses Online-Tool zur Überwachung, ob eine Website online, offline ist oder Fehler aufweist.',
      keywords: ['kostenloser Website-Prüfer', 'Site-Status', 'Ist die Seite ausgefallen', 'Website-Überwachung', 'Verfügbarkeit', 'Netzwerk-Tool', 'kostenloses Tool', 'Netzwerkwächter'],
    },
    og: {
      description: 'Ein komplett kostenloses Online-Tool zur sofortigen Überprüfung des Status mehrerer URLs.',
      imageAlt: 'Banner des Netzwerkwächters, der einen Globus und Statussymbole zeigt',
      locale: 'de_DE',
    },
    twitter: {
      description: 'Überprüfen Sie schnell, ob Ihre Websites betriebsbereit sind. Einfach, schnell und völlig kostenlos.',
    },
  },
  nl: {
    appName: 'Netwerk Schildwacht',
    meta: {
      title: 'Netwerk Schildwacht | Gratis Real-Time Website Status Checker',
      description: 'Controleer de status van elke website in real-time met Netwerk Schildwacht. Gratis online tool om te monitoren of een site online, offline is of fouten bevat.',
      keywords: ['gratis website checker', 'site status', 'is site down', 'website monitoring', 'uptime', 'netwerk tool', 'gratis tool', 'netwerk schildwacht'],
    },
    og: {
      description: 'Een volledig gratis online tool om direct de status van meerdere URL\'s te controleren.',
      imageAlt: 'Netwerk Schildwacht Banner met een wereldbol en statusiconen',
      locale: 'nl_NL',
    },
    twitter: {
      description: 'Controleer snel of uw websites werken. Eenvoudig, snel en volledig gratis.',
    },
  },
  hi: {
    appName: 'नेटवर्क प्रहरी',
    meta: {
      title: 'नेटवर्क प्रहरी | मुफ्त रियल-टाइम वेबसाइट स्थिति परीक्षक',
      description: 'नेटवर्क प्रहरी के साथ किसी भी वेबसाइट की स्थिति की रीयल-टाइम में जांच करें। यह मॉनिटर करने के लिए मुफ्त ऑनलाइन टूल है कि कोई साइट ऑनलाइन, ऑफलाइन है या उसमें कोई त्रुटि है।',
      keywords: ['मुफ्त वेबसाइट चेकर', 'साइट स्थिति', 'क्या साइट डाउन है', 'वेबसाइट निगरानी', 'अपटाइम', 'नेटवर्क टूल', 'मुफ्त टूल', 'नेटवर्क प्रहरी'],
    },
    og: {
      description: 'कई यूआरएल की स्थिति की तुरंत जांच करने के लिए पूरी तरह से मुफ्त ऑनलाइन टूल।',
      imageAlt: 'नेटवर्क प्रहरी बैनर, एक ग्लोब और स्थिति आइकन दिखा रहा है',
      locale: 'hi_IN',
    },
    twitter: {
      description: 'जल्दी से जांचें कि आपकी वेबसाइटें चल रही हैं या नहीं। सरल, तेज और पूरी तरह से मुफ्त।',
    },
  },
  bn: {
    appName: 'নেটওয়ার্ক সেন্টিনেল',
    meta: {
      title: 'নেটওয়ার্ক সেন্টিনেল | বিনামূল্যে রিয়েল-টাইম ওয়েবসাইট স্ট্যাটাস চেকার',
      description: 'নেটওয়ার্ক সেন্টিনেল দিয়ে রিয়েল-টাইমে যেকোনো ওয়েবসাইটের স্ট্যাটাস পরীক্ষা করুন। একটি সাইট অনলাইন, অফলাইন বা ত্রুটি আছে কিনা তা নিরীক্ষণ করার জন্য একটি বিনামূল্যের অনলাইন টুল।',
      keywords: ['বিনামূল্যে ওয়েবসাইট চেকার', 'সাইটের অবস্থা', 'সাইট কি ডাউন', 'ওয়েবসাইট পর্যবেক্ষণ', 'আপটাইম', 'নেটওয়ার্ক টুল', 'বিনামূল্যে টুল', 'নেটওয়ার্ক সেন্টিনেল'],
    },
    og: {
      description: 'একাধিক ইউআরএলের অবস্থা অবিলম্বে পরীক্ষা করার জন্য একটি সম্পূর্ণ বিনামূল্যে অনলাইন টুল।',
      imageAlt: 'নেটওয়ার্ক সেন্টিনেল ব্যানার, একটি গ্লোব এবং স্ট্যাটাস আইকন দেখাচ্ছে',
      locale: 'bn_BD',
    },
    twitter: {
      description: 'আপনার ওয়েবসাইটগুলি চালু আছে কিনা তা দ্রুত পরীক্ষা করুন। সহজ, দ্রুত এবং সম্পূর্ণ বিনামূল্যে।',
    },
  },
  ur: {
    appName: 'نیٹ ورک سینٹینل',
    meta: {
      title: 'نیٹ ورک سینٹینل | مفت ریئل ٹائم ویب سائٹ اسٹیٹس چیکر',
      description: 'نیٹ ورک سینٹینل کے ساتھ کسی بھی ویب سائٹ کی حیثیت کو حقیقی وقت میں چیک کریں۔ یہ نگرانی کرنے کے لئے ایک مفت آن لائن ٹول ہے کہ آیا کوئی سائٹ آن لائن، آف لائن ہے، یا اس میں خرابیاں ہیں۔',
      keywords: ['مفت ویب سائٹ چیکر', 'سائٹ کی حیثیت', 'کیا سائٹ ڈاؤن ہے', 'ویب سائٹ کی نگرانی', 'اپ ٹائم', 'نیٹ ورک ٹول', 'مفت ٹول', 'نیٹ ورک سینٹینেল'],
    },
    og: {
      description: 'متعدد یو آر ایل کی حیثیت کو فوری طور پر چیک کرنے کے لئے ایک مکمل طور پر مفت آن لائن ٹول۔',
      imageAlt: 'نیٹ ورک سینٹینل بینر، ایک گلوب اور اسٹیٹس آئیکن دکھا رہا ہے',
      locale: 'ur_PK',
    },
    twitter: {
      description: 'فوری طور پر چیک کریں کہ آیا آپ کی ویب سائٹیں چل رہی ہیں۔ سادہ، تیز اور مکمل طور پر مفت۔',
    },
  },
  id: {
    appName: 'Sentinel Jaringan',
    meta: {
      title: 'Sentinel Jaringan | Pemeriksa Status Situs Web Real-Time Gratis',
      description: 'Periksa status situs web apa pun secara real-time dengan Sentinel Jaringan. Alat online gratis untuk memantau apakah sebuah situs online, offline, atau mengalami kesalahan.',
      keywords: ['pemeriksa situs web gratis', 'status situs', 'apakah situs nonaktif', 'pemantauan situs web', 'uptime', 'alat jaringan', 'alat gratis', 'sentinel jaringan'],
    },
    og: {
      description: 'Alat online gratis sepenuhnya untuk langsung memeriksa status beberapa URL.',
      imageAlt: 'Banner Sentinel Jaringan yang menampilkan bola dunia dan ikon status',
      locale: 'id_ID',
    },
    twitter: {
      description: 'Periksa dengan cepat apakah situs web Anda aktif. Sederhana, cepat, dan sepenuhnya gratis.',
    },
  },
  ja: {
    appName: 'ネットワークセンチネル',
    meta: {
      title: 'ネットワークセンチネル | 無料リアルタイムウェブサイトステータスチェッカー',
      description: 'ネットワークセンチネルを使用して、あらゆるウェブサイトのステータスをリアルタイムで確認します。サイトがオンラインか、オフラインか、またはエラーがあるかを監視するための無料のオンラインツール。',
      keywords: ['無料ウェブサイトチェッカー', 'サイトステータス', 'サイトはダウンしていますか', 'ウェブサイト監視', '稼働時間', 'ネットワークツール', '無料ツール', 'ネットワークセンチネル'],
    },
    og: {
      description: '複数のURLのステータスを即座に確認するための完全に無料のオンラインツール。',
      imageAlt: 'ネットワークセンチネルのバナー、地球とステータスアイコンを表示',
      locale: 'ja_JP',
    },
    twitter: {
      description: 'あなたのウェブサイトが稼働しているかをすばやく確認します。シンプル、高速、完全に無料。',
    },
  },
  tr: {
    appName: 'Ağ Gözcüsü',
    meta: {
      title: 'Ağ Gözcüsü | Ücretsiz Gerçek Zamanlı Web Sitesi Durum Denetleyicisi',
      description: "Ağ Gözcüsü ile herhangi bir web sitesinin durumunu gerçek zamanlı olarak kontrol edin. Bir sitenin çevrimiçi, çevrimdışı veya hatalı olup olmadığını izlemek için ücretsiz bir çevrimiçi araç.",
      keywords: ['ücretsiz web sitesi denetleyicisi', 'site durumu', 'site çöktü mü', 'web sitesi izleme', 'çalışma süresi', 'ağ aracı', 'ücretsiz araç', 'ağ gözcüsü'],
    },
    og: {
      description: "Birden çok URL'nin durumunu anında kontrol etmek için tamamen ücretsiz bir çevrimiçi araç.",
      imageAlt: 'Ağ Gözcüsü Afişi, bir küre ve durum simgeleri gösteriyor',
      locale: 'tr_TR',
    },
    twitter: {
      description: 'Web sitelerinizin çalışıp çalışmadığını hızla kontrol edin. Basit, hızlı ve tamamen ücretsiz.',
    },
  },
  te: {
    appName: 'నెట్‌వర్క్ సెంట్రీ',
    meta: {
      title: 'నెట్‌వర్క్ సెంట్రీ | ఉచిత నిజ-సమయ వెబ్‌సైట్ స్థితి తనిఖీదారు',
      description: 'నెట్‌వర్క్ సెంట్రీతో ఏ వెబ్‌సైట్ స్థితి అయినా నిజ సమయంలో తనిఖీ చేయండి. ఒక సైట్ ఆన్‌లైన్, ఆఫ్‌లైన్ లేదా లోపాలు ఉన్నాయో లేదో పర్యవేక్షించడానికి ఒక ఉచిత ఆన్‌లైన్ సాధనం.',
      keywords: ['ఉచిత వెబ్‌సైట్ తనిఖీదారు', 'సైట్ స్థితి', 'సైట్ డౌన్ అయ్యిందా', 'వెబ్‌సైట్ పర్యవేక్షణ', 'అప్‌టైమ్', 'నెట్‌వర్క్ సాధనం', 'ఉచిత సాధనం', 'నెట్‌వర్క్ సెంట్రీ'],
    },
    og: {
      description: 'బహుళ URLల స్థితిని తక్షణమే తనిఖీ చేయడానికి ఒక పూర్తిగా ఉచిత ఆన్‌లైన్ సాధనం.',
      imageAlt: 'నెట్‌వర్క్ సెంట్రీ బ్యానర్, ఒక గ్లోబ్ మరియు స్థితి చిహ్నాలను చూపుతుంది',
      locale: 'te_IN',
    },
    twitter: {
      description: 'మీ వెబ్‌సైట్‌లు పనిచేస్తున్నాయో లేదో త్వరగా తనిఖీ చేయండి. సరళమైనది, వేగవంతమైనది మరియు పూర్తిగా ఉచితం.',
    },
  },
  vi: {
    appName: 'Lính gác Mạng',
    meta: {
      title: 'Lính gác Mạng | Trình kiểm tra trạng thái trang web miễn phí theo thời gian thực',
      description: 'Kiểm tra trạng thái của bất kỳ trang web nào trong thời gian thực với Lính gác Mạng. Một công cụ trực tuyến miễn phí để theo dõi xem một trang web có trực tuyến, ngoại tuyến hay có lỗi không.',
      keywords: ['trình kiểm tra trang web miễn phí', 'trạng thái trang web', 'trang web có bị sập không', 'giám sát trang web', 'thời gian hoạt động', 'công cụ mạng', 'công cụ miễn phí', 'lính gác mạng'],
    },
    og: {
      description: 'Một công cụ trực tuyến hoàn toàn miễn phí để kiểm tra ngay lập tức trạng thái của nhiều URL.',
      imageAlt: 'Biểu ngữ của Lính gác Mạng hiển thị một quả địa cầu và các biểu tượng trạng thái',
      locale: 'vi_VN',
    },
    twitter: {
      description: 'Kiểm tra nhanh xem trang web của bạn có hoạt động không. Đơn giản, nhanh chóng và hoàn toàn miễn phí.',
    },
  },
};

export function getTranslations(lang: string): Translation {
  return translations[lang] || translations['en'];
}

    