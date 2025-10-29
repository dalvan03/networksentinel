import SentinelDashboard from '@/components/network-sentinel/SentinelDashboard';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px]">
        </div>
      </div>
      
      <main className="container mx-auto px-4 py-8 md-py-16 relative z-10">
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
            <AccordionItem value="item-1">
              <AccordionTrigger>Araç nasıl çalışır?</AccordionTrigger>
              <AccordionContent>
                Network Sentinel, sağlanan her URL'ye bir HTTP isteği gönderir. Yanıtı analiz ederek durumu (çevrimiçi, çevrimdışı, hata), HTTP durum kodunu ve yanıt süresini gerçek zamanlı olarak belirleriz.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Hangi durum kodları bir sitenin 'Çevrimiçi' olduğunu gösterir?</AccordionTrigger>
              <AccordionContent>
                Bir sitenin 200-299 aralığında bir durum koduyla yanıt vermesi durumunda çevrimiçi olduğunu kabul ederiz, bu başarıyı gösterir. Diğer tüm kodlar 'Çevrimdışı' veya 'Hata' olarak sınıflandırılır.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Bu aracı kullanmak güvenli mi?</AccordionTrigger>
              <AccordionContent>
                Evet. Araç yalnızca sağladığınız URL'lerin genel durumunu kontrol eder. URL'leri veya sonuçları toplamıyor, saklamıyor veya paylaşmıyoruz. Tüm doğrulama güvenli bir şekilde yapılır.
              </AccordionContent>
            </AccordionItem>
             <AccordionItem value="item-4">
              <AccordionTrigger>Aynı anda birden fazla siteyi kontrol edebilir miyim?</AccordionTrigger>
              <AccordionContent>
                Evet! Metin alanına URL'lerin bir listesini (her satıra bir tane) yapıştırabilir veya toplu kontrol için URL dizeleri dizisi içeren bir JSON dosyası yükleyebilirsiniz.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </main>
    </div>
  );
}
