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
            Ваш глаз в реальном времени за пульсом сети. Вставьте ваши URL-адреса или загрузите файл, чтобы мгновенно проверить их статус.
          </p>
        </header>

        <section aria-labelledby="tool-description">
          <SentinelDashboard />
        </section>

        <section className="max-w-4xl mx-auto mt-20" aria-labelledby="faq-title">
          <h2 id="faq-title" className="text-3xl font-headline font-bold text-center mb-8">Часто задаваемые вопросы</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Как работает инструмент?</AccordionTrigger>
              <AccordionContent>
                Network Sentinel отправляет HTTP-запрос на каждый предоставленный URL. Мы анализируем ответ, чтобы определить статус (онлайн, офлайн, ошибка), код состояния HTTP и время ответа, все в режиме реального времени.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Какие коды состояния указывают, что сайт 'Онлайн'?</AccordionTrigger>
              <AccordionContent>
                Мы считаем сайт онлайн, если он отвечает кодом состояния в диапазоне 200-299, что указывает на успех. Любой другой код классифицируется как 'Офлайн' или 'Ошибка'.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Безопасно ли использовать этот инструмент?</AccordionTrigger>
              <AccordionContent>
                Да. Инструмент проверяет только общедоступный статус предоставленных вами URL-адресов. Мы не собираем, не храним и не передаем URL-адреса или результаты. Вся проверка выполняется безопасно.
              </AccordionContent>
            </AccordionItem>
             <AccordionItem value="item-4">
              <AccordionTrigger>Могу ли я проверять несколько сайтов одновременно?</AccordionTrigger>
              <AccordionContent>
                Да! Вы можете вставить список URL-адресов, по одному в строке, в текстовое поле или загрузить файл JSON, содержащий массив строк URL для массовой проверки.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </main>
    </div>
  );
}
