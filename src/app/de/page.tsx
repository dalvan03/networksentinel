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
            Ihr Echtzeit-Auge am Puls des Webs. Fügen Sie Ihre URLs ein oder laden Sie eine Datei hoch, um deren Status sofort zu überprüfen.
          </p>
        </header>

        <section aria-labelledby="tool-description">
          <SentinelDashboard />
        </section>

        <section className="max-w-4xl mx-auto mt-20" aria-labelledby="faq-title">
          <h2 id="faq-title" className="text-3xl font-headline font-bold text-center mb-8">Häufig gestellte Fragen</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Wie funktioniert das Tool?</AccordionTrigger>
              <AccordionContent>
                Network Sentinel sendet eine HTTP-Anfrage an jede angegebene URL. Wir analysieren die Antwort, um den Status (online, offline, Fehler), den HTTP-Statuscode und die Antwortzeit in Echtzeit zu ermitteln.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Welche Statuscodes zeigen an, dass eine Website "Online" ist?</AccordionTrigger>
              <AccordionContent>
                Wir betrachten eine Website als online, wenn sie mit einem Statuscode im Bereich 200-299 antwortet, was auf einen Erfolg hinweist. Jeder andere Code wird als "Offline" oder "Fehler" eingestuft.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Ist die Verwendung dieses Tools sicher?</AccordionTrigger>
              <AccordionContent>
                Ja. Das Tool überprüft nur den öffentlichen Status der von Ihnen angegebenen URLs. Wir sammeln, speichern oder teilen die URLs oder die Ergebnisse nicht. Alle Überprüfungen werden sicher durchgeführt.
              </AccordionContent>
            </AccordionItem>
             <AccordionItem value="item-4">
              <AccordionTrigger>Kann ich mehrere Websites gleichzeitig überprüfen?</AccordionTrigger>
              <AccordionContent>
                Ja! Sie können eine Liste von URLs (eine pro Zeile) in das Textfeld einfügen oder eine JSON-Datei mit einem Array von URL-Strings für eine Massenprüfung hochladen.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </main>
    </div>
  );
}
