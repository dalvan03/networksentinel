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
      
      <main className="container mx-auto px-4 py-8 md-py-16 relative z-10">
        <header className="text-center mb-12">
          <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary text-glow-primary">
            Network Sentinel
          </h1>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto" id="tool-description">
            వెబ్ యొక్క పల్స్‌పై మీ నిజ-సమయ కన్ను. మీ URLలను అతికించండి లేదా వాటి స్థితిని తక్షణమే తనిఖీ చేయడానికి ఫైల్‌ను అప్‌లోడ్ చేయండి.
          </p>
        </header>

        <section aria-labelledby="tool-description">
          <SentinelDashboard />
        </section>

        <section className="max-w-4xl mx-auto mt-20" aria-labelledby="faq-title">
          <h2 id="faq-title" className="text-3xl font-headline font-bold text-center mb-8">తరచుగా అడిగే ప్రశ్నలు</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>ఈ సాధనం ఎలా పనిచేస్తుంది?</AccordionTrigger>
              <AccordionContent>
                నెట్‌వర్క్ సెంట్రీ ప్రతి வழங்கిన URLకి ఒక HTTP అభ్యర్థనను పంపుతుంది. మేము స్పందనను విశ్లేషించి स्थिति (ఆన్‌లైన్, ఆఫ్‌లైన్, దోషం), HTTP స్థితి కోడ్, మరియు ప్రతిస్పందన సమయం, అన్నీ నిజ-సమయంలో ನಿರ್ಧರಿಸುತ್ತೇವೆ.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>ఏ స్థితి కోడ్‌లు సైట్ 'ఆన్‌లైన్' అని సూచిస్తాయి?</AccordionTrigger>
              <AccordionContent>
                ఒక సైట్ 200-299 పరిధిలో స్థితి కోడ్‌తో ప్రతిస్పందిస్తే మేము તેને ఆన్‌లైన్‌లో ఉన్నట్లుగా పరిగణిస్తాము, ఇది విజయాన్ని సూచిస్తుంది. ఇతర ఏ కోడ్ అయినా 'ఆఫ్‌లైన్' அல்லது 'దోషం'గా వర్గీకరించబడుతుంది.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>ఈ సాధనాన్ని ఉపయోగించడం సురక్షితమేనా?</AccordionTrigger>
              <AccordionContent>
                అవును. సాధనం మీరు అందించిన URLల యొక్క பொது స్థితిని మాత్రమే తనిఖీ చేస్తుంది. మేము URLలు లేదా ఫలితాలను சேகரிக்கము, నిల్వ చేయము,または పంచుకోము. అన్ని ధృవీకరణ సురక్షితంగా செய்யப்படுகிறது.
              </A-ccordionContent>
            </AccordionItem>
             <AccordionItem value="item-4">
              <AccordionTrigger>నేను ఒకేసారి பல సైట్‌లను తనిఖీ చేయవచ్చా?</AccordionTrigger>
              <AccordionContent>
                అవును! మీరు టెక్స్ట్ ప్రాంతంలో URLల జాబితాను, ఒక్కో లైన్‌కు ఒకటి, అతికించవచ్చు లేదా மொத்த പരിശോധన కోసం URL стрингов வரிசைని కలిగి ఉన్న JSON ఫైల్‌ను అప్‌లోడ్ చేయవచ్చు.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </main>
    </div>
  );
}
