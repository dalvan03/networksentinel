
import SentinelDashboard from '@/components/network-sentinel/SentinelDashboard';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faq = [
  {
    question: "كيف تعمل الأداة؟",
    answer: "يرسل Network Sentinel طلب HTTP إلى كل عنوان URL يتم توفيره. نقوم بتحليل الاستجابة لتحديد الحالة (متصل، غير متصل، خطأ)، ورمز حالة HTTP، ووقت الاستجابة، كل ذلك في الوقت الفعلي."
  },
  {
    question: "ما هي رموز الحالة التي تشير إلى أن الموقع 'متصل'؟",
    answer: "نعتبر الموقع متصلاً إذا استجاب برمز حالة في نطاق 200-299، مما يشير إلى النجاح. يتم تصنيف أي رمز آخر على أنه 'غير متصل' أو 'خطأ'."
  },
  {
    question: "هل استخدام هذه الأداة آمن؟",
    answer: "نعم. تتحقق الأداة فقط من الحالة العامة لعناوين URL التي تقدمها. نحن لا نجمع أو نخزن أو نشارك عناوين URL أو النتائج. تتم جميع عمليات التحقق بشكل آمن."
  },
  {
    question: "هل يمكنني التحقق من عدة مواقع في وقت واحد؟",
    answer: "نعم! يمكنك لصق قائمة من عناوين URL، واحد في كل سطر، في منطقة النص أو تحميل ملف JSON يحتوي على مصفوفة من سلاسل URL لإجراء فحص جماعي."
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
            عينك في الوقت الفعلي على نبض الويب. الصق عناوين URL الخاصة بك أو قم بتحميل ملف للتحقق من حالتها على الفور.
          </p>
        </header>

        <section aria-labelledby="tool-description">
          <SentinelDashboard />
        </section>

        <section className="max-w-4xl mx-auto mt-20" aria-labelledby="faq-title">
          <h2 id="faq-title" className="text-3xl font-headline font-bold text-center mb-8">الأسئلة الشائعة</h2>
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
