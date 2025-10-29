
import SentinelDashboard from '@/components/network-sentinel/SentinelDashboard';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faq = [
  {
    question: "यह टूल कैसे काम करता है?",
    answer: "नेटवर्क सेंटिनल प्रदान किए गए प्रत्येक URL पर एक HTTP अनुरोध भेजता है। हम प्रतिक्रिया का विश्लेषण करके स्थिति (ऑनलाइन, ऑफलाइन, त्रुटि), HTTP स्थिति कोड, और प्रतिक्रिया समय, सभी को रियल-टाइम में निर्धारित करते हैं।"
  },
  {
    question: "कौन से status code बताते हैं कि साइट 'ऑनलाइन' है?",
    answer: "हम एक साइट को ऑनलाइन मानते हैं यदि वह 200-299 रेंज में status code के साथ प्रतिक्रिया करती है, जो सफलता का संकेत देता है। किसी भी अन्य कोड को 'ऑफलाइन' या 'त्रुटि' के रूप में वर्गीकृत किया जाता है।"
  },
  {
    question: "क्या इस टूल का उपयोग کرنا सुरक्षित है?",
    answer: "हाँ। टूल केवल आपके द्वारा प्रदान किए गए URL की सार्वजनिक स्थिति की जाँच करता है। हम URL या परिणामों को एकत्र, संग्रहीत या साझा नहीं करते हैं। सभी सत्यापन सुरक्षित रूप से किए जाते हैं।"
  },
  {
    question: "क्या मैं एक साथ कई साइटों की जांच कर सकता हूँ?",
    answer: "हाँ! आप टेक्स्ट क्षेत्र में URL की একটি তালিকা, प्रति पंक्ति एक, पेस्ट कर सकते हैं या थोक जांच के लिए URL स्ट्रिंग्स की একটি ऐरे वाली JSON फ़ाइल अपलोड कर सकते हैं।"
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
            वेब की नब्ज पर आपकी रियल-टाइम नजर। अपनी URL पेस्ट करें या तुरंत उनकी स्थिति जांचने के लिए एक फ़ाइल अपलोड करें।
          </p>
        </header>

        <section aria-labelledby="tool-description">
          <SentinelDashboard />
        </section>

        <section className="max-w-4xl mx-auto mt-20" aria-labelledby="faq-title">
          <h2 id="faq-title" className="text-3xl font-headline font-bold text-center mb-8">अक्सर पूछे जाने वाले प्रश्न</h2>
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
