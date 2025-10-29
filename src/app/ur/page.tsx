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
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto" id="tool-description" dir="rtl">
            ویب کی نبض پر آپ کی حقیقی وقت کی نظر۔ اپنے یو آر ایل پیسٹ کریں یا ان کی حیثیت کو فوری طور پر چیک کرنے کے لیے فائل اپ لوڈ کریں۔
          </p>
        </header>

        <section aria-labelledby="tool-description">
          <SentinelDashboard />
        </section>

        <section className="max-w-4xl mx-auto mt-20" aria-labelledby="faq-title" dir="rtl">
          <h2 id="faq-title" className="text-3xl font-headline font-bold text-center mb-8">اکثر पूछे जाने वाले سوالات</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>یہ ٹول کیسے کام کرتا ہے؟</AccordionTrigger>
              <AccordionContent>
                نیٹ ورک سینٹینیل فراہم کردہ ہر یو آر ایل کو ایک HTTP درخواست بھیجتا ہے۔ ہم اسٹیٹس (آن لائن، آف لائن، خرابی)، HTTP اسٹیٹس کوڈ، اور جوابی وقت کا تعین کرنے کے لیے جواب کا تجزیہ کرتے ہیں، سب حقیقی وقت میں۔
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>کون سے اسٹیٹس کوڈز 'آن لائن' سائٹ کی نشاندہی کرتے ہیں؟</AccordionTrigger>
              <AccordionContent>
                ہم ایک سائٹ کو آن لائن سمجھتے ہیں اگر وہ 200-299 رینج میں اسٹیٹس کوڈ کے ساتھ جواب دیتی ہے، جو کامیابی کی نشاندہی کرتا ہے۔ کسی دوسرے کوڈ کو 'آف لائن' یا 'خرابی' کے طور پر درجہ بندی کیا جاتا ہے۔
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>کیا اس ٹول کا استعمال محفوظ ہے؟</AccordionTrigger>
              <AccordionContent>
                جی ہاں۔ یہ ٹول صرف आपके فراہم کردہ یو آر ایلز کی عوامی حیثیت کی جانچ کرتا ہے۔ ہم یو آر ایلز یا نتائج کو جمع، ذخیرہ یا شیئر نہیں करते ہیں۔ تمام تصدیق محفوظ तरीके से کی جاتی ہے۔
              </AccordionContent>
            </AccordionItem>
             <AccordionItem value="item-4">
              <AccordionTrigger>کیا میں ایک ساتھ कई سائٹس کی جانچ कर सकता ہوں؟</AccordionTrigger>
              <AccordionContent>
                جی ہاں! آپ ٹیکسٹ ایریا میں یو آر ایلز की एक فہرست، ایک فی لائن، پیسٹ कर سکتے ہیں یا بلک چیک کے لیے یو آر ایل سٹرنگز کی ایک صف پر مشتمل JSON فائل اپ لوڈ कर सकते ہیں۔
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </main>
    </div>
  );
}
