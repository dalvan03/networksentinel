
import SentinelDashboard from '@/components/network-sentinel/SentinelDashboard';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faq = [
  {
    question: "这个工具是如何工作的？",
    answer: "网络哨兵向提供的每个URL发送HTTP请求。我们实时分析响应以确定状态（在线、离线、错误）、HTTP状态码和响应时间。"
  },
  {
    question: "哪些状态码表示网站“在线”？",
    answer: "我们认为如果网站响应的状态码在200-299范围内，则表示该网站在线，这表示成功。任何其他代码都被分类为“离线”或“错误”。"
  },
  {
    question: "使用这个工具安全吗？",
    answer: "是的。该工具仅检查您提供的URL的公共状态。我们不收集、存储或分享URL或结果。所有验证都是安全进行的。"
  },
  {
    question: "我可以一次检查多个网站吗？",
    answer: "是的！您可以在文本区域中每行粘贴一个URL列表，或上传包含URL字符串数组的JSON文件进行批量检查。"
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
            实时监控网络脉搏。粘贴您的URL或上传文件以即时检查其状态。
          </p>
        </header>

        <section aria-labelledby="tool-description">
          <SentinelDashboard />
        </section>

        <section className="max-w-4xl mx-auto mt-20" aria-labelledby="faq-title">
          <h2 id="faq-title" className="text-3xl font-headline font-bold text-center mb-8">常见问题</h2>
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
