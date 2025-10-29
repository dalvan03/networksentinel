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
            Seu olho em tempo real no pulso da web. Cole seus URLs ou envie um arquivo para verificar instantaneamente o status deles.
          </p>
        </header-

        <section aria-labelledby="tool-description">
          <SentinelDashboard />
        </section>

        <section className="max-w-4xl mx-auto mt-20" aria-labelledby="faq-title">
          <h2 id="faq-title" className="text-3xl font-headline font-bold text-center mb-8">Perguntas Frequentes</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Como a ferramenta funciona?</AccordionTrigger>
              <AccordionContent>
                O Network Sentinel envia uma requisição HTTP para cada URL fornecida. Analisamos a resposta para determinar o status (online, offline, erro), o código de status HTTP e o tempo de resposta, tudo em tempo real.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Quais códigos de status indicam que um site está 'Online'?</AccordionTrigger>
              <AccordionContent>
                Consideramos que um site está online se ele responder com um código de status na faixa de 200-299, que indica sucesso. Qualquer outro código é classificado como 'Offline' ou 'Erro'.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>É seguro usar esta ferramenta?</AccordionTrigger>
              <AccordionContent>
                Sim. A ferramenta apenas verifica o status público dos URLs que você fornece. Não coletamos, armazenamos ou compartilhamos os URLs ou os resultados. Toda a verificação é feita de forma segura.
              </AccordionContent>
            </AccordionItem>
             <AccordionItem value="item-4">
              <AccordionTrigger>Posso verificar múltiplos sites de uma vez?</AccordionTrigger>
              <AccordionContent>
                Sim! Você pode colar uma lista de URLs, uma por linha, na área de texto ou carregar um arquivo JSON contendo um array de strings de URL para uma verificação em massa.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </main>
    </div>
  );
}
