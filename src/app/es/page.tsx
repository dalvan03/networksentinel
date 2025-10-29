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
            Tu ojo en tiempo real sobre el pulso de la web. Pega tus URLs o sube un archivo para verificar instantáneamente su estado.
          </p>
        </header>

        <section aria-labelledby="tool-description">
          <SentinelDashboard />
        </section>

        <section className="max-w-4xl mx-auto mt-20" aria-labelledby="faq-title">
          <h2 id="faq-title" className="text-3xl font-headline font-bold text-center mb-8">Preguntas Frecuentes</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>¿Cómo funciona la herramienta?</AccordionTrigger>
              <AccordionContent>
                Network Sentinel envía una solicitud HTTP a cada URL proporcionada. Analizamos la respuesta para determinar el estado (en línea, fuera de línea, error), el código de estado HTTP y el tiempo de respuesta, todo en tiempo real.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>¿Qué códigos de estado indican que un sitio está 'En línea'?</AccordionTrigger>
              <AccordionContent>
                Consideramos que un sitio está en línea si responde con un código de estado en el rango 200-299, lo que indica éxito. Cualquier otro código se clasifica como 'Fuera de línea' o 'Error'.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>¿Es seguro usar esta herramienta?</AccordionTrigger>
              <AccordionContent>
                Sí. La herramienta solo verifica el estado público de las URL que proporcionas. No recopilamos, almacenamos ni compartimos las URL ni los resultados. Toda la verificación se realiza de forma segura.
              </AccordionContent>
            </AccordionItem>
             <AccordionItem value="item-4">
              <AccordionTrigger>¿Puedo verificar varios sitios a la vez?</AccordionTrigger>
              <AccordionContent>
                ¡Sí! Puedes pegar una lista de URLs, una por línea, en el área de texto o cargar un archivo JSON que contenga una matriz de cadenas de URL para una verificación masiva.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </main>
    </div>
  );
}
