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
            Your real-time eye on the web's pulse. Paste your URLs or upload a file to instantly check their status.
          </p>
        </header>

        <section aria-labelledby="tool-description">
          <SentinelDashboard />
        </section>

        <section className="max-w-4xl mx-auto mt-20" aria-labelledby="faq-title">
          <h2 id="faq-title" className="text-3xl font-headline font-bold text-center mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How does the tool work?</AccordionTrigger>
              <AccordionContent>
                Network Sentinel sends an HTTP request to each URL provided. We analyze the response to determine the status (online, offline, error), the HTTP status code, and the response time, all in real-time.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Which status codes indicate a site is 'Online'?</AccordionTrigger>
              <AccordionContent>
                We consider a site to be online if it responds with a status code in the 200-299 range, which indicates success. Any other code is classified as 'Offline' or 'Error'.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it safe to use this tool?</AccordionTrigger>
              <AccordionContent>
                Yes. The tool only checks the public status of the URLs you provide. We do not collect, store, or share the URLs or the results. All verification is done securely.
              </AccordionContent>
            </AccordionItem>
             <AccordionItem value="item-4">
              <AccordionTrigger>Can I check multiple sites at once?</AccordionTrigger>
              <AccordionContent>
                Yes! You can paste a list of URLs, one per line, in the text area or upload a JSON file containing an array of URL strings for a bulk check.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </main>
    </div>
  );
}
