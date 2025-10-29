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
            <AccordionItem value="item-1">
              <AccordionTrigger>كيف تعمل الأداة؟</AccordionTrigger>
              <AccordionContent>
                يرسل Network Sentinel طلب HTTP إلى كل عنوان URL يتم توفيره. نقوم بتحليل الاستجابة لتحديد الحالة (متصل، غير متصل، خطأ)، ورمز حالة HTTP، ووقت الاستجابة، كل ذلك في الوقت الفعلي.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>ما هي رموز الحالة التي تشير إلى أن الموقع 'متصل'؟</AccordionTrigger>
              <AccordionContent>
                نعتبر الموقع متصلاً إذا استجاب برمز حالة في نطاق 200-299، مما يشير إلى النجاح. يتم تصنيف أي رمز آخر على أنه 'غير متصل' أو 'خطأ'.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>هل استخدام هذه الأداة آمن؟</AccordionTrigger>
              <AccordionContent>
                نعم. تتحقق الأداة فقط من الحالة العامة لعناوين URL التي تقدمها. نحن لا نجمع أو نخزن أو نشارك عناوين URL أو النتائج. تتم جميع عمليات التحقق بشكل آمن.
              </AccordionContent>
            </AccordionItem>
             <AccordionItem value="item-4">
              <AccordionTrigger>هل يمكنني التحقق من عدة مواقع في وقت واحد؟</AccordionTrigger>
              <AccordionContent>
                نعم! يمكنك لصق قائمة من عناوين URL، واحد في كل سطر، في منطقة النص أو تحميل ملف JSON يحتوي على مصفوفة من سلاسل URL لإجراء فحص جماعي.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </main>
    </div>
  );
}
