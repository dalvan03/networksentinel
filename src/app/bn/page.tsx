
import SentinelDashboard from '@/components/network-sentinel/SentinelDashboard';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faq = [
  {
    question: "এই টুলটি কিভাবে কাজ করে?",
    answer: "নেটওয়ার্ক সেন্টিনেল প্রদত্ত প্রতিটি URL-এ একটি HTTP অনুরোধ পাঠায়। আমরা প্রতিক্রিয়া বিশ্লেষণ করে স্থিতি (অনলাইন, অফলাইন, ত্রুটি), HTTP স্থিতি কোড এবং প্রতিক্রিয়া সময়,すべて রিয়েল-টাইমে নির্ধারণ করি।"
  },
  {
    question: "কোন স্ট্যাটাস কোডগুলি একটি সাইট 'অনলাইন' olduğunu নির্দেশ করে?",
    answer: "আমরা একটি সাইটকে অনলাইন বলে মনে করি যদি এটি 200-299 পরিসরের মধ্যে একটি স্ট্যাটাস কোড দিয়ে প্রতিক্রিয়া জানায়, যা सफलता নির্দেশ করে। অন্য যেকোনো কোড 'অফলাইন' বা 'ত্রুটি' হিসাবে वर्गीकृत করা হয়।"
  },
  {
    question: "এই টুলটি ব্যবহার করা কি নিরাপদ?",
    answer: "হ্যাঁ। টুলটি ફક્ત আপনার দেওয়া URL-এর সর্বজনীন স্থিতি পরীক্ষা করে। আমরা URL বা ফলাফল সংগ্রহ, সংরক্ষণ বা ভাগ করি না। সমস্ত যাচাইকরণ સુરക്ഷിତভাবে সম্পন্ন হয়।"
  },
  {
    question: "আমি কি একবারে একাধিক সাইট পরীক্ষা করতে পারি?",
    answer: "হ্যাঁ! আপনি পাঠ্য এলাকায় URL-এর একটি তালিকা, প্রতি লাইনে একটি, পেস্ট করতে পারেন অথবা বাল্ক চেকের জন্য URL স্ট্রিংগুলির একটি অ্যারে ধারণকারী একটি JSON ফাইল আপলোড করতে পারেন।"
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
            ওয়েবের স্পন্দনে আপনার রিয়েল-টাইম চোখ। আপনার URL পেস্ট করুন বা তাৎক্ষণিকভাবে তাদের স্থিতি পরীক্ষা করতে একটি ফাইল আপলোড করুন।
          </p>
        </header>

        <section aria-labelledby="tool-description">
          <SentinelDashboard />
        </section>

        <section className="max-w-4xl mx-auto mt-20" aria-labelledby="faq-title">
          <h2 id="faq-title" className="text-3xl font-headline font-bold text-center mb-8">Frequently Asked Questions</h2>
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
