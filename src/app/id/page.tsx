
import SentinelDashboard from '@/components/network-sentinel/SentinelDashboard';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faq = [
  {
    question: "Bagaimana cara kerja alat ini?",
    answer: "Network Sentinel mengirimkan permintaan HTTP ke setiap URL yang disediakan. Kami menganalisis respons untuk menentukan status (online, offline, error), kode status HTTP, dan waktu respons, semuanya secara real-time."
  },
  {
    question: "Kode status mana yang menunjukkan situs 'Online'?",
    answer: "Kami menganggap sebuah situs online jika merespons dengan kode status dalam rentang 200-299, yang menunjukkan keberhasilan. Kode lain diklasifikasikan sebagai 'Offline' atau 'Error'."
  },
  {
    question: "Apakah aman menggunakan alat ini?",
    answer: "Ya. Alat ini hanya memeriksa status publik URL yang Anda berikan. Kami tidak mengumpulkan, menyimpan, atau membagikan URL atau hasilnya. Semua verifikasi dilakukan dengan aman."
  },
  {
    question: "Bisakah saya memeriksa beberapa situs sekaligus?",
    answer: "Ya! Anda dapat menempelkan daftar URL, satu per baris, di area teks atau mengunggah file JSON yang berisi larik string URL untuk pemeriksaan massal."
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
            Mata real-time Anda pada denyut nadi web. Tempel URL Anda atau unggah file untuk memeriksa statusnya secara instan.
          </p>
        </header>

        <section aria-labelledby="tool-description">
          <SentinelDashboard />
        </section>

        <section className="max-w-4xl mx-auto mt-20" aria-labelledby="faq-title">
          <h2 id="faq-title" className="text-3xl font-headline font-bold text-center mb-8">Pertanyaan yang Sering Diajukan</h2>
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
