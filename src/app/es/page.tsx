
import SentinelDashboard from '@/components/network-sentinel/SentinelDashboard';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faq = [
  {
    question: "¿Cómo funciona la herramienta?",
    answer: "Network Sentinel envía una solicitud HTTP a cada URL proporcionada. Analizamos la respuesta para determinar el estado (en línea, fuera de línea, error), el código de estado HTTP y el tiempo de respuesta, todo en tiempo real."
  },
  {
    question: "¿Qué códigos de estado indican que un sitio está 'En línea'?",
    answer: "Consideramos que un sitio está en línea si responde con un código de estado en el rango 200-299, lo que indica éxito. Cualquier otro código se clasifica como 'Fuera de línea' o 'Error'."
  },
  {
    question: "¿Es seguro usar esta herramienta?",
    answer: "Sí. La herramienta solo verifica el estado público de las URL que proporcionas. No recopilamos, almacenamos ni compartimos las URL ni los resultados. Toda la verificación se realiza de forma segura."
  },
  {
    question: "¿Puedo verificar varios sitios a la vez?",
    answer: "¡Sí! Puedes pegar una lista de URLs, una por línea, en el área de texto o cargar un archivo JSON que contenga una matriz de cadenas de URL para una verificación masiva."
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
            Tu ojo en tiempo real sobre el pulso de la web. Pega tus URLs o sube un archivo para verificar instantáneamente su estado.
          </p>
        </header>

        <section aria-labelledby="tool-description">
          <SentinelDashboard />
        </section>

        <section className="max-w-4xl mx-auto mt-20" aria-labelledby="faq-title">
          <h2 id="faq-title" className="text-3xl font-headline font-bold text-center mb-8">Preguntas Frecuentes</h2>
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
