
import SentinelDashboard from '@/components/network-sentinel/SentinelDashboard';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faq = [
  {
    question: "Araç nasıl çalışır?",
    answer: "Network Sentinel, sağlanan her URL'ye bir HTTP isteği gönderir. Yanıtı analiz ederek durumu (çevrimiçi, çevrimdışı, hata), HTTP durum kodunu ve yanıt süresini gerçek zamanlı olarak belirleriz."
  },
  {
    question: "Hangi durum kodları bir sitenin 'Çevrimiçi' olduğunu gösterir?",
    answer: "Bir sitenin 200-299 aralığında bir durum koduyla yanıt vermesi durumunda çevrimiçi olduğunu kabul ederiz, bu başarıyı gösterir. Diğer tüm kodlar 'Çevrimdışı' veya 'Hata' olarak sınıflandırılır."
  },
  {
    question: "Bu aracı kullanmak güvenli mi?",
    answer: "Evet. Araç yalnızca sağladığınız URL'lerin genel durumunu kontrol eder. URL'leri veya sonuçları toplamıyor, saklamıyor veya paylaşmıyoruz. Tüm doğrulama güvenli bir şekilde yapılır."
  },
  {
    question: "Aynı anda birden fazla siteyi kontrol edebilir miyim?",
    answer: "Evet! Metin alanına URL'lerin bir listesini (her satıra bir tane) yapıştırabilir veya toplu kontrol için URL dizeleri dizisi içeren bir JSON dosyası yükleyebilirsiniz."
  }
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faq.map(item => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer
    }
  }))
};

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="absolute inset-0 z-0 opacity-10">
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px]">
        </div>
      </div>
      
      <main className="container mx-auto px-4 py-8 md:py-16 relative z-10">
        <header className="text-center mb-12">
          <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary text-glow-primary">
            Network Sentinel
          </h1>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto" id="tool-description">
            Web'in nabzını gerçek zamanlı olarak izleyin. URL'lerinizi yapıştırın veya durumlarını anında kontrol etmek için bir dosya yükleyin.
          </p>
        </header>

        <section aria-labelledby="tool-description">
          <SentinelDashboard />
        </section>

        <section className="max-w-4xl mx-auto mt-20" aria-labelledby="faq-title">
          <h2 id="faq-title" className="text-3xl font-headline font-bold text-center mb-8">Sıkça Sorulan Sorular</h2>
          <Accordion type="single" collapsible className="w-full">
            {faq.map((item, index) => (
              <AccordionItem value={`item-${index + 1}`} key={index}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </main>
    </div>
  );
}
