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
      title: 'Network Sentinel | Real-Time Website Status Checker',
      description: 'Check the status of any website in real-time with Network Sentinel. Free online tool to monitor if a site is online, offline, or has errors.',
      keywords: ['website checker', 'site status', 'is site down', 'website monitoring', 'uptime', 'network tool', 'network sentinel'],
    },
    og: {
      description: 'Free online tool to instantly check the status of multiple URLs.',
      imageAlt: 'Network Sentinel Banner',
      locale: 'en_US',
    },
    twitter: {
      description: 'Quickly check if your websites are up. Simple, fast, and free.',
    },
  },
  pt: {
    appName: 'Sentinela da Rede',
    meta: {
      title: 'Sentinela da Rede | Verificador de Status de Site em Tempo Real',
      description: 'Verifique o status de qualquer site em tempo real com o Sentinela da Rede. Ferramenta online gratuita para monitorar se um site está online, offline ou com erros.',
      keywords: ['verificador de site', 'status do site', 'site fora do ar', 'monitoramento de site', 'uptime', 'ferramenta de rede', 'sentinela da rede'],
    },
    og: {
      description: 'Ferramenta online gratuita para verificar instantaneamente o status de múltiplos URLs.',
      imageAlt: 'Banner do Sentinela da Rede',
      locale: 'pt_BR',
    },
    twitter: {
      description: 'Verifique rapidamente se seus sites estão no ar. Simples, rápido e grátis.',
    },
  },
  es: {
    appName: 'Centinela de Red',
    meta: {
      title: 'Centinela de Red | Verificador de Estado de Sitios Web en Tiempo Real',
      description: 'Verifique el estado de cualquier sitio web en tiempo real con Centinela de Red. Herramienta en línea gratuita para monitorear si un sitio está en línea, fuera de línea o tiene errores.',
      keywords: ['verificador de sitios web', 'estado del sitio', 'sitio caído', 'monitoreo de sitios web', 'tiempo de actividad', 'herramienta de red', 'centinela de red'],
    },
    og: {
      description: 'Herramienta en línea gratuita para verificar instantáneamente el estado de múltiples URLs.',
      imageAlt: 'Banner de Centinela de Red',
      locale: 'es_ES',
    },
    twitter: {
      description: 'Verifique rápidamente si sus sitios web están activos. Simple, rápido y gratis.',
    },
  },
  zh: {
    appName: '网络哨兵',
    meta: {
      title: '网络哨兵 | 实时网站状态检查器',
      description: '使用网络哨兵实时检查任何网站的状态。免费在线工具，用于监控网站是在线、离线还是有错误。',
      keywords: ['网站检查器', '网站状态', '网站是否宕机', '网站监控', '正常运行时间', '网络工具', '网络哨兵'],
    },
    og: {
      description: '免费在线工具，可即时检查多个URL的状态。',
      imageAlt: '网络哨兵横幅',
      locale: 'zh_CN',
    },
    twitter: {
      description: '快速检查您的网站是否正常运行。简单、快速、免费。',
    },
  },
  ru: {
    appName: 'Сетевой Страж',
    meta: {
      title: 'Сетевой Страж | Проверка статуса сайтов в реальном времени',
      description: 'Проверяйте статус любого сайта в реальном времени с помощью Сетевого Стража. Бесплатный онлайн-инструмент для мониторинга, находится ли сайт в сети, офлайн или имеет ошибки.',
      keywords: ['проверка сайта', 'статус сайта', 'сайт недоступен', 'мониторинг сайта', 'время работы', 'сетевой инструмент', 'сетевой страж'],
    },
    og: {
      description: 'Бесплатный онлайн-инструмент для мгновенной проверки статуса нескольких URL-адресов.',
      imageAlt: 'Баннер Сетевого Стража',
      locale: 'ru_RU',
    },
    twitter: {
      description: 'Быстро проверьте, работают ли ваши сайты. Просто, быстро и бесплатно.',
    },
  },
  ar: {
    appName: 'حارس الشبكة',
    meta: {
      title: 'حارس الشبكة | مدقق حالة المواقع في الوقت الفعلي',
      description: 'تحقق من حالة أي موقع ويب في الوقت الفعلي باستخدام حارس الشبكة. أداة مجانية عبر الإنترنت لمراقبة ما إذا كان الموقع متصلاً بالإنترنت أو غير متصل أو به أخطاء.',
      keywords: ['مدقق مواقع الويب', 'حالة الموقع', 'هل الموقع معطل', 'مراقبة مواقع الويب', 'وقت التشغيل', 'أداة الشبكة', 'حارس الشبكة'],
    },
    og: {
      description: 'أداة مجانية عبر الإنترنت للتحقق الفوري من حالة عناوين URL متعددة.',
      imageAlt: 'بانر حارس الشبكة',
      locale: 'ar_AE',
    },
    twitter: {
      description: 'تحقق بسرعة مما إذا كانت مواقع الويب الخاصة بك تعمل. بسيط وسريع ومجاني.',
    },
  },
  fr: {
    appName: 'Sentinelle du Réseau',
    meta: {
      title: 'Sentinelle du Réseau | Vérificateur de Statut de Site Web en Temps Réel',
      description: "Vérifiez le statut de n'importe quel site web en temps réel avec Sentinelle du Réseau. Outil en ligne gratuit pour surveiller si un site est en ligne, hors ligne ou a des erreurs.",
      keywords: ['vérificateur de site web', 'statut du site', 'site en panne', 'surveillance de site web', 'disponibilité', 'outil réseau', 'sentinelle du réseau'],
    },
    og: {
      description: "Outil en ligne gratuit pour vérifier instantanément le statut de plusieurs URL.",
      imageAlt: 'Bannière de Sentinelle du Réseau',
      locale: 'fr_FR',
    },
    twitter: {
      description: 'Vérifiez rapidement si vos sites web sont fonctionnels. Simple, rapide et gratuit.',
    },
  },
  de: {
    appName: 'Netzwerkwächter',
    meta: {
      title: 'Netzwerkwächter | Echtzeit-Website-Statusprüfer',
      description: 'Überprüfen Sie den Status jeder Website in Echtzeit mit dem Netzwerkwächter. Kostenloses Online-Tool zur Überwachung, ob eine Website online, offline ist oder Fehler aufweist.',
      keywords: ['Website-Prüfer', 'Site-Status', 'Ist die Seite ausgefallen', 'Website-Überwachung', 'Verfügbarkeit', 'Netzwerk-Tool', 'Netzwerkwächter'],
    },
    og: {
      description: 'Kostenloses Online-Tool zur sofortigen Überprüfung des Status mehrerer URLs.',
      imageAlt: 'Banner des Netzwerkwächters',
      locale: 'de_DE',
    },
    twitter: {
      description: 'Überprüfen Sie schnell, ob Ihre Websites betriebsbereit sind. Einfach, schnell und kostenlos.',
    },
  },
  nl: {
    appName: 'Netwerk Schildwacht',
    meta: {
      title: 'Netwerk Schildwacht | Real-Time Website Status Checker',
      description: 'Controleer de status van elke website in real-time met Netwerk Schildwacht. Gratis online tool om te monitoren of een site online, offline is of fouten bevat.',
      keywords: ['website checker', 'site status', 'is site down', 'website monitoring', 'uptime', 'netwerk tool', 'netwerk schildwacht'],
    },
    og: {
      description: 'Gratis online tool om direct de status van meerdere URL\'s te controleren.',
      imageAlt: 'Netwerk Schildwacht Banner',
      locale: 'nl_NL',
    },
    twitter: {
      description: 'Controleer snel of uw websites werken. Eenvoudig, snel en gratis.',
    },
  },
  hi: {
    appName: 'नेटवर्क प्रहरी',
    meta: {
      title: 'नेटवर्क प्रहरी | रियल-टाइम वेबसाइट स्थिति परीक्षक',
      description: 'नेटवर्क प्रहरी के साथ किसी भी वेबसाइट की स्थिति की रीयल-टाइम में जांच करें। यह मॉनिटर करने के लिए मुफ्त ऑनलाइन टूल है कि कोई साइट ऑनलाइन, ऑफलाइन है या उसमें कोई त्रुटि है।',
      keywords: ['वेबसाइट चेकर', 'साइट स्थिति', 'क्या साइट डाउन है', 'वेबसाइट निगरानी', 'अपटाइम', 'नेटवर्क टूल', 'नेटवर्क प्रहरी'],
    },
    og: {
      description: 'कई यूआरएल की स्थिति की तुरंत जांच करने के लिए मुफ्त ऑनलाइन टूल।',
      imageAlt: 'नेटवर्क प्रहरी बैनर',
      locale: 'hi_IN',
    },
    twitter: {
      description: 'जल्दी से जांचें कि आपकी वेबसाइटें चल रही हैं या नहीं। सरल, तेज और मुफ्त।',
    },
  },
  bn: {
    appName: 'নেটওয়ার্ক সেন্টিনেল',
    meta: {
      title: 'নেটওয়ার্ক সেন্টিনেল | রিয়েল-টাইম ওয়েবসাইট স্ট্যাটাস চেকার',
      description: 'নেটওয়ার্ক সেন্টিনেল দিয়ে রিয়েল-টাইমে যেকোনো ওয়েবসাইটের স্ট্যাটাস পরীক্ষা করুন। একটি সাইট অনলাইন, অফলাইন বা ত্রুটি আছে কিনা তা নিরীক্ষণ করার জন্য বিনামূল্যে অনলাইন টুল।',
      keywords: ['ওয়েবসাইট চেকার', 'সাইটের অবস্থা', 'সাইট কি ডাউন', 'ওয়েবসাইট পর্যবেক্ষণ', 'আপটাইম', 'নেটওয়ার্ক টুল', 'নেটওয়ার্ক সেন্টিনেল'],
    },
    og: {
      description: 'একাধিক ইউআরএলের অবস্থা অবিলম্বে পরীক্ষা করার জন্য বিনামূল্যে অনলাইন টুল।',
      imageAlt: 'নেটওয়ার্ক সেন্টিনেল ব্যানার',
      locale: 'bn_BD',
    },
    twitter: {
      description: 'আপনার ওয়েবসাইটগুলি চালু আছে কিনা তা দ্রুত পরীক্ষা করুন। সহজ, দ্রুত এবং বিনামূল্যে।',
    },
  },
  ur: {
    appName: 'نیٹ ورک سینٹینل',
    meta: {
      title: 'نیٹ ورک سینٹینل | ریئل ٹائم ویب سائٹ اسٹیٹس چیکر',
      description: 'نیٹ ورک سینٹینل کے ساتھ کسی بھی ویب سائٹ کی حیثیت کو حقیقی وقت میں چیک کریں۔ یہ نگرانی کرنے کے لئے مفت آن لائن ٹول ہے کہ آیا کوئی سائٹ آن لائن، آف لائن ہے، یا اس میں خرابیاں ہیں۔',
      keywords: ['ویب سائٹ چیکر', 'سائٹ کی حیثیت', 'کیا سائٹ ڈاؤن ہے', 'ویب سائٹ کی نگرانی', 'اپ ٹائم', 'نیٹ ورک ٹول', 'نیٹ ورک سینٹینেল'],
    },
    og: {
      description: 'متعدد یو آر ایل کی حیثیت کو فوری طور پر چیک کرنے کے لئے مفت آن لائن ٹول۔',
      imageAlt: 'نیٹ ورک سینٹینل بینر',
      locale: 'ur_PK',
    },
    twitter: {
      description: 'فوری طور پر چیک کریں کہ آیا آپ کی ویب سائٹیں چل رہی ہیں۔ سادہ، تیز اور مفت۔',
    },
  },
  id: {
    appName: 'Sentinel Jaringan',
    meta: {
      title: 'Sentinel Jaringan | Pemeriksa Status Situs Web Real-Time',
      description: 'Periksa status situs web apa pun secara real-time dengan Sentinel Jaringan. Alat online gratis untuk memantau apakah sebuah situs online, offline, atau mengalami kesalahan.',
      keywords: ['pemeriksa situs web', 'status situs', 'apakah situs nonaktif', 'pemantauan situs web', 'uptime', 'alat jaringan', 'sentinel jaringan'],
    },
    og: {
      description: 'Alat online gratis untuk langsung memeriksa status beberapa URL.',
      imageAlt: 'Banner Sentinel Jaringan',
      locale: 'id_ID',
    },
    twitter: {
      description: 'Periksa dengan cepat apakah situs web Anda aktif. Sederhana, cepat, dan gratis.',
    },
  },
  ja: {
    appName: 'ネットワークセンチネル',
    meta: {
      title: 'ネットワークセンチネル | リアルタイムウェブサイトステータスチェッカー',
      description: 'ネットワークセンチネルを使用して、あらゆるウェブサイトのステータスをリアルタイムで確認します。サイトがオンラインか、オフラインか、またはエラーがあるかを監視するための無料のオンラインツール。',
      keywords: ['ウェブサイトチェッカー', 'サイトステータス', 'サイトはダウンしていますか', 'ウェブサイト監視', '稼働時間', 'ネットワークツール', 'ネットワークセンチネル'],
    },
    og: {
      description: '複数のURLのステータスを即座に確認するための無料のオンラインツール。',
      imageAlt: 'ネットワークセンチネルのバナー',
      locale: 'ja_JP',
    },
    twitter: {
      description: 'あなたのウェブサイトが稼働しているかをすばやく確認します。シンプル、高速、無料。',
    },
  },
  tr: {
    appName: 'Ağ Gözcüsü',
    meta: {
      title: 'Ağ Gözcüsü | Gerçek Zamanlı Web Sitesi Durum Denetleyicisi',
      description: "Ağ Gözcüsü ile herhangi bir web sitesinin durumunu gerçek zamanlı olarak kontrol edin. Bir sitenin çevrimiçi, çevrimdışı veya hatalı olup olmadığını izlemek için ücretsiz çevrimiçi araç.",
      keywords: ['web sitesi denetleyicisi', 'site durumu', 'site çöktü mü', 'web sitesi izleme', 'çalışma süresi', 'ağ aracı', 'ağ gözcüsü'],
    },
    og: {
      description: 'Birden çok URL\'nin durumunu anında kontrol etmek için ücretsiz çevrimiçi araç.',
      imageAlt: 'Ağ Gözcüsü Afişi',
      locale: 'tr_TR',
    },
    twitter: {
      description: 'Web sitelerinizin çalışıp çalışmadığını hızla kontrol edin. Basit, hızlı ve ücretsiz.',
    },
  },
  te: {
    appName: 'నెట్‌వర్క్ సెంట్రీ',
    meta: {
      title: 'నెట్‌వర్క్ సెంట్రీ | నిజ-సమయ వెబ్‌సైట్ స్థితి తనిఖీదారు',
      description: 'నెట్‌వర్క్ సెంట్రీతో ఏ వెబ్‌సైట్ స్థితి అయినా నిజ సమయంలో తనిఖీ చేయండి. ఒక సైట్ ఆన్‌లైన్, ఆఫ్‌లైన్ లేదా లోపాలు ఉన్నాయో లేదో పర్యవేక్షించడానికి ఉచిత ఆన్‌లైన్ సాధనం.',
      keywords: ['వెబ్‌సైట్ తనిఖీదారు', 'సైట్ స్థితి', 'సైట్ డౌన్ అయ్యిందా', 'వెబ్‌సైట్ పర్యవేక్షణ', 'అప్‌టైమ్', 'నెట్‌వర్క్ సాధనం', 'నెట్‌వర్క్ సెంట్రీ'],
    },
    og: {
      description: 'బహుళ URLల స్థితిని తక్షణమే తనిఖీ చేయడానికి ఉచిత ఆన్‌లైన్ సాధనం.',
      imageAlt: 'నెట్‌వర్క్ సెంట్రీ బ్యానర్',
      locale: 'te_IN',
    },
    twitter: {
      description: 'మీ వెబ్‌సైట్‌లు పనిచేస్తున్నాయో లేదో త్వరగా తనిఖీ చేయండి. సరళమైనది, వేగవంతమైనది మరియు ఉచితం.',
    },
  },
  vi: {
    appName: 'Lính gác Mạng',
    meta: {
      title: 'Lính gác Mạng | Trình kiểm tra trạng thái trang web theo thời gian thực',
      description: 'Kiểm tra trạng thái của bất kỳ trang web nào trong thời gian thực với Lính gác Mạng. Công cụ trực tuyến miễn phí để theo dõi xem một trang web có trực tuyến, ngoại tuyến hay có lỗi không.',
      keywords: ['trình kiểm tra trang web', 'trạng thái trang web', 'trang web có bị sập không', 'giám sát trang web', 'thời gian hoạt động', 'công cụ mạng', 'lính gác mạng'],
    },
    og: {
      description: 'Công cụ trực tuyến miễn phí để kiểm tra ngay lập tức trạng thái của nhiều URL.',
      imageAlt: 'Biểu ngữ của Lính gác Mạng',
      locale: 'vi_VN',
    },
    twitter: {
      description: 'Kiểm tra nhanh xem trang web của bạn có hoạt động không. Đơn giản, nhanh chóng và miễn phí.',
    },
  },
};

export function getTranslations(lang: string): Translation {
  return translations[lang] || translations['en'];
}
