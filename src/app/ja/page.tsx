
import SentinelDashboard from '@/components/network-sentinel/SentinelDashboard';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faq = [
  {
    question: "このツールはどのように機能しますか？",
    answer: "Network Sentinelは、提供された各URLにHTTPリクエストを送信します。応答を分析して、ステータス（オンライン、オフライン、エラー）、HTTPステータスコード、および応答時間をリアルタイムで判断します。"
  },
  {
    question: "どのステータスコードがサイトが「オンライン」であることを示しますか？",
    answer: "200〜299の範囲のステータスコードで応答した場合、サイトはオンラインであると見なします。これは成功を示します。その他のコードは「オフライン」または「エラー」として分類されます。"
  },
  {
    question: "このツールの使用は安全ですか？",
    answer: "はい。このツールは、提供されたURLのパブリックステータスのみをチェックします。URLや結果を収集、保存、共有することはありません。すべての検証は安全に行われます。"
  },
  {
    question: "複数のサイトを一度に確認できますか？",
    answer: "はい！テキストエリアにURLのリスト（1行に1つ）を貼り付けるか、一括チェックのためにURL文字列の配列を含むJSONファイルをアップロードできます。"
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
            ウェブの脈拍をリアルタイムで監視。URLを貼り付けるか、ファイルをアップロードして、ステータスを即座に確認します。
          </p>
        </header>

        <section aria-labelledby="tool-description">
          <SentinelDashboard />
        </section>

        <section className="max-w-4xl mx-auto mt-20" aria-labelledby="faq-title">
          <h2 id="faq-title" className="text-3xl font-headline font-bold text-center mb-8">よくある質問</h2>
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
