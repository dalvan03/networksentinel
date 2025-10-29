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
            Con mắt thời gian thực của bạn theo nhịp đập của web. Dán URL của bạn hoặc tải lên một tệp để kiểm tra trạng thái của chúng ngay lập tức.
          </p>
        </header>

        <section aria-labelledby="tool-description">
          <SentinelDashboard />
        </section>

        <section className="max-w-4xl mx-auto mt-20" aria-labelledby="faq-title">
          <h2 id="faq-title" className="text-3xl font-headline font-bold text-center mb-8">Câu hỏi thường gặp</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Công cụ hoạt động như thế nào?</AccordionTrigger>
              <AccordionContent>
                Network Sentinel gửi một yêu cầu HTTP đến mỗi URL được cung cấp. Chúng tôi phân tích phản hồi để xác định trạng thái (trực tuyến, ngoại tuyến, lỗi), mã trạng thái HTTP và thời gian phản hồi, tất cả trong thời gian thực.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Mã trạng thái nào cho biết một trang web đang 'Trực tuyến'?</AccordionTrigger>
              <AccordionContent>
                Chúng tôi coi một trang web là trực tuyến nếu nó phản hồi với mã trạng thái trong khoảng 200-299, cho biết thành công. Bất kỳ mã nào khác được phân loại là 'Ngoại tuyến' hoặc 'Lỗi'.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Sử dụng công cụ này có an toàn không?</AccordionTrigger>
              <AccordionContent>
                Có. Công cụ chỉ kiểm tra trạng thái công khai của các URL bạn cung cấp. Chúng tôi không thu thập, lưu trữ hoặc chia sẻ các URL hoặc kết quả. Tất cả việc xác minh được thực hiện một cách an toàn.
              </AccordionContent>
            </AccordionItem>
             <AccordionItem value="item-4">
              <AccordionTrigger>Tôi có thể kiểm tra nhiều trang web cùng một lúc không?</AccordionTrigger>
              <AccordionContent>
                Có! Bạn có thể dán danh sách các URL, mỗi URL một dòng, vào khu vực văn bản hoặc tải lên tệp JSON chứa một mảng chuỗi URL để kiểm tra hàng loạt.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </main>
    </div>
  );
}
