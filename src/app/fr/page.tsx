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
            Votre œil en temps réel sur le pouls du web. Collez vos URL ou téléchargez un fichier pour vérifier instantanément leur statut.
          </p>
        </header>

        <section aria-labelledby="tool-description">
          <SentinelDashboard />
        </section>

        <section className="max-w-4xl mx-auto mt-20" aria-labelledby="faq-title">
          <h2 id="faq-title" className="text-3xl font-headline font-bold text-center mb-8">Questions fréquentes</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Comment fonctionne l'outil ?</AccordionTrigger>
              <AccordionContent>
                Network Sentinel envoie une requête HTTP à chaque URL fournie. Nous analysons la réponse pour déterminer le statut (en ligne, hors ligne, erreur), le code de statut HTTP et le temps de réponse, le tout en temps réel.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Quels codes de statut indiquent qu'un site est "En ligne" ?</AccordionTrigger>
              <AccordionContent>
                Nous considérons qu'un site est en ligne s'il répond avec un code de statut dans la plage 200-299, ce qui indique un succès. Tout autre code est classé comme "Hors ligne" ou "Erreur".
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Est-il sûr d'utiliser cet outil ?</AccordionTrigger>
              <AccordionContent>
                Oui. L'outil ne vérifie que le statut public des URL que vous fournissez. Nous ne collectons, ne stockons ni ne partageons les URL ou les résultats. Toutes les vérifications sont effectuées en toute sécurité.
              </-AccordionContent>
            </AccordionItem>
             <AccordionItem value="item-4">
              <AccordionTrigger>Puis-je vérifier plusieurs sites à la fois ?</AccordionTrigger>
              <AccordionContent>
                Oui ! Vous pouvez coller une liste d'URL, une par ligne, dans la zone de texte ou télécharger un fichier JSON contenant un tableau de chaînes d'URL pour une vérification en masse.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </main>
    </div>
  );
}
