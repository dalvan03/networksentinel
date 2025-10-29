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
            Uw real-time oog op de hartslag van het web. Plak uw URL's of upload een bestand om direct hun status te controleren.
          </p>
        </header>

        <section aria-labelledby="tool-description">
          <SentinelDashboard />
        </section>

        <section className="max-w-4xl mx-auto mt-20" aria-labelledby="faq-title">
          <h2 id="faq-title" className="text-3xl font-headline font-bold text-center mb-8">Veelgestelde vragen</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Hoe werkt de tool?</AccordionTrigger>
              <AccordionContent>
                Network Sentinel stuurt een HTTP-verzoek naar elke opgegeven URL. We analyseren het antwoord om de status (online, offline, fout), de HTTP-statuscode en de responstijd te bepalen, allemaal in real-time.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Welke statuscodes geven aan dat een site 'Online' is?</AccordionTrigger>
              <AccordionContent>
                We beschouwen een site als online als deze reageert met een statuscode in het bereik 200-299, wat duidt op succes. Elke andere code wordt geclassificeerd als 'Offline' of 'Fout'.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is het veilig om deze tool te gebruiken?</AccordionTrigger>
              <AccordionContent>
                Ja. De tool controleert alleen de openbare status van de URL's die u opgeeft. We verzamelen, bewaren of delen de URL's of de resultaten niet. Alle verificatie wordt veilig uitgevoerd.
              </AccordionContent>
            </AccordionItem>
             <AccordionItem value="item-4">
              <AccordionTrigger>Kan ik meerdere sites tegelijk controleren?</AccordionTrigger>
              <AccordionContent>
                Ja! U kunt een lijst met URL's, één per regel, in het tekstgebied plakken of een JSON-bestand uploaden met een array URL-strings voor een bulkcontrole.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </main>
    </div>
  );
}
