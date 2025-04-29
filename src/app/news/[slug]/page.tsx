import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";

// Import the news items data from the parent page
import { newsItems, categories } from "../data";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const newsItem = newsItems.find(item => item.slug === params.slug);
  
  if (!newsItem) {
    return {
      title: "Bài viết không tồn tại - INCHEMCO",
      description: "Bài viết bạn đang tìm kiếm không tồn tại hoặc đã bị xóa."
    };
  }
  
  return {
    title: `${newsItem.title} - INCHEMCO`,
    description: newsItem.summary,
  };
}

export default function NewsArticlePage({ params }: { params: { slug: string } }) {
  const newsItem = newsItems.find(item => item.slug === params.slug);
  
  if (!newsItem) {
    notFound();
  }
  
  // Find related articles in the same category
  const relatedArticles = newsItems
    .filter(item => item.category === newsItem.category && item.id !== newsItem.id)
    .slice(0, 3);
  
  return (
    <main className="bg-white pb-16">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-3 border-b border-gray-100">
        <div className="neura-container">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-gray-500 hover:text-inchemco-primary">
              Trang chủ
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/news" className="text-gray-500 hover:text-inchemco-primary">
              Tin tức & Sự kiện
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-inchemco-primary font-medium">{newsItem.title}</span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="py-12">
        <div className="neura-container">
          <div className="md:flex gap-12">
            {/* Main Content */}
            <div className="md:w-2/3">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Link href={`/news/category/${newsItem.category.toLowerCase().replace(/\s+/g, '-')}`} className="bg-inchemco-primary/10 text-inchemco-primary text-sm px-3 py-1 rounded-full hover:bg-inchemco-primary/20">
                    {newsItem.category}
                  </Link>
                  <span className="text-gray-500 text-sm">{newsItem.date}</span>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-inchemco-dark">{newsItem.title}</h1>
              </div>
              
              <div className="relative h-96 w-full mb-8 rounded-xl overflow-hidden">
                <Image
                  src={newsItem.image}
                  alt={newsItem.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                  priority
                />
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {newsItem.summary}
                </p>
                
                {/* Sample content based on the news article type */}
                {newsItem.category === "Sản phẩm mới" && (
                  <>
                    <h2>Giới thiệu về {newsItem.title.split("giới thiệu").pop()?.trim()}</h2>
                    <p>
                      Thiết bị Xung kích hội tụ (Focused Shock Wave Therapy) là một công nghệ tiên tiến trong lĩnh vực vật lý trị liệu và phục hồi chức năng, sử dụng sóng xung kích năng lượng cao được hội tụ vào các vùng mô đích, giúp kích thích quá trình chữa lành tự nhiên của cơ thể.
                    </p>
                    
                    <h3>Ứng dụng chính</h3>
                    <ul>
                      <li>Điều trị đau gót chân, viêm gân gan bàn chân</li>
                      <li>Điều trị viêm gân Achilles</li>
                      <li>Điều trị gai xương gót</li>
                      <li>Điều trị viêm mỏm khuỷu</li>
                      <li>Điều trị đau khớp vai, viêm gân vùng vai</li>
                      <li>Điều trị loạn năng cơ cổ vai gáy</li>
                      <li>Điều trị các bệnh lý cơ xương khớp mạn tính khác</li>
                    </ul>
                    
                    <h3>Ưu điểm nổi bật</h3>
                    <p>
                      BTL-6000 FSWT mang đến những lợi thế vượt trội so với các phương pháp điều trị truyền thống:
                    </p>
                    <ul>
                      <li>Điều trị không xâm lấn, không dùng thuốc</li>
                      <li>Thời gian điều trị ngắn (khoảng 10-15 phút/lần)</li>
                      <li>Hiệu quả điều trị cao, có thể thấy được sau vài lần điều trị</li>
                      <li>Không cần thời gian nghỉ ngơi sau điều trị</li>
                      <li>Ít tác dụng phụ</li>
                    </ul>
                  </>
                )}
                
                {newsItem.category === "Sự kiện" && (
                  <>
                    <h2>Chi tiết sự kiện</h2>
                    <p>
                      INCHEMCO sẽ tham gia Triển lãm Y tế Quốc tế Vietnam Medipharm Expo 2023 diễn ra từ ngày 05-12-2023 đến ngày 08-12-2023 tại Trung tâm Hội chợ và Triển lãm Sài Gòn (SECC), Quận 7, Thành phố Hồ Chí Minh.
                    </p>
                    
                    <h3>Thông tin gian hàng</h3>
                    <ul>
                      <li><strong>Vị trí:</strong> A25-A26</li>
                      <li><strong>Thời gian:</strong> 08:30 - 17:00 hàng ngày</li>
                    </ul>
                    
                    <h3>Sản phẩm trưng bày</h3>
                    <p>
                      Tại triển lãm năm nay, INCHEMCO sẽ giới thiệu các sản phẩm mới nhất từ các thương hiệu BTL, EMS và Tecnomed, bao gồm:
                    </p>
                    <ul>
                      <li>BTL-6000 FSWT - Thiết bị Xung kích hội tụ</li>
                      <li>BTL CardioPoint - Hệ thống chẩn đoán tim mạch</li>
                      <li>BTL-4000 Smart & Premium - Thiết bị điện trị liệu kết hợp</li>
                      <li>Spirometer BTL - Phế dung kế chuyên nghiệp</li>
                    </ul>
                    
                    <p>
                      Đội ngũ chuyên viên của INCHEMCO sẽ có mặt tại gian hàng để tư vấn và giới thiệu chi tiết về sản phẩm. Đặc biệt, khách tham quan có cơ hội trải nghiệm trực tiếp các thiết bị và nhận những ưu đãi đặc biệt khi đặt hàng tại triển lãm.
                    </p>
                  </>
                )}
                
                {newsItem.category === "Công nghệ" && (
                  <>
                    <h2>Nghiên cứu mới về công nghệ Xung kích hội tụ</h2>
                    <p>
                      Các nghiên cứu lâm sàng gần đây đã chỉ ra những ứng dụng mới và hiệu quả đáng kể của công nghệ Xung kích hội tụ trong điều trị nhiều bệnh lý cơ xương khớp khác nhau.
                    </p>
                    
                    <h3>Kết quả nghiên cứu</h3>
                    <p>
                      Theo một nghiên cứu được công bố trên Tạp chí Y học Thể thao và Vật lý trị liệu, liệu pháp Xung kích hội tụ đã cho thấy tỷ lệ thành công lên đến 85% trong điều trị gai gót chân mạn tính, so với khoảng 50-60% ở các phương pháp điều trị truyền thống.
                    </p>
                    
                    <p>
                      Một nghiên cứu khác tại Đại học Y Hà Nội cũng ghi nhận hiệu quả vượt trội của phương pháp này trong điều trị viêm gân Achilles, với 78% bệnh nhân báo cáo giảm đau đáng kể sau 3 lần điều trị.
                    </p>
                    
                    <h3>Ứng dụng mới</h3>
                    <p>
                      Ngoài các ứng dụng truyền thống, công nghệ Xung kích hội tụ hiện đang được nghiên cứu và áp dụng trong các lĩnh vực mới như:
                    </p>
                    <ul>
                      <li>Điều trị các bệnh lý về da như vảy nến, sẹo lồi</li>
                      <li>Hỗ trợ điều trị rối loạn cương dương</li>
                      <li>Giảm mỡ và điều trị cellulite</li>
                      <li>Hỗ trợ phục hồi sau chấn thương thể thao</li>
                    </ul>
                  </>
                )}
                
                {/* Social sharing */}
                <div className="border-t border-b border-gray-200 py-6 my-8">
                  <div className="flex items-center">
                    <span className="text-gray-700 mr-4">Chia sẻ:</span>
                    <div className="flex space-x-3">
                      <a href="#" className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700">
                        f
                      </a>
                      <a href="#" className="w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center hover:bg-sky-600">
                        t
                      </a>
                      <a href="#" className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700">
                        z
                      </a>
                      <a href="#" className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700">
                        g
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="md:w-1/3 mt-12 md:mt-0">
              {/* Categories */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
                <h3 className="text-xl font-bold mb-4 text-inchemco-dark">Danh mục</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Link key={category.slug} href={`/news/category/${category.slug}`} className="flex items-center justify-between py-2 border-b border-gray-100 hover:text-inchemco-primary">
                      <span>{category.name}</span>
                      <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">{category.count}</span>
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Related Articles */}
              {relatedArticles.length > 0 && (
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
                  <h3 className="text-xl font-bold mb-4 text-inchemco-dark">Bài viết liên quan</h3>
                  <div className="space-y-4">
                    {relatedArticles.map((article) => (
                      <div key={article.id} className="flex gap-3 pb-4 border-b border-gray-100">
                        <div className="w-20 h-20 relative flex-shrink-0 rounded overflow-hidden">
                          <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover"
                            sizes="80px"
                          />
                        </div>
                        <div>
                          <Link href={`/news/${article.slug}`} className="font-medium text-inchemco-dark hover:text-inchemco-primary line-clamp-2">
                            {article.title}
                          </Link>
                          <p className="text-xs text-gray-500 mt-1">{article.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Newsletter */}
              <div className="bg-inchemco-dark rounded-xl p-6 shadow-sm text-white">
                <h3 className="text-xl font-bold mb-4">Đăng ký nhận bản tin</h3>
                <p className="text-gray-300 mb-4">Đăng ký để nhận thông tin cập nhật về sản phẩm, công nghệ và các sự kiện mới nhất từ INCHEMCO.</p>
                
                <div className="space-y-3">
                  <div>
                    <input 
                      type="email" 
                      placeholder="Email của bạn" 
                      className="w-full px-4 py-2 rounded-md border border-gray-600 bg-inchemco-dark-secondary text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-inchemco-primary"
                    />
                  </div>
                  
                  <Button className="w-full bg-inchemco-accent hover:bg-inchemco-accent/90 text-white">
                    Đăng ký
                  </Button>
                  
                  <p className="text-xs text-gray-400">
                    Bằng cách đăng ký, bạn đồng ý với <Link href="/privacy-policy" className="text-inchemco-primary hover:text-inchemco-primary-hover">Chính sách bảo mật</Link> của chúng tôi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      
      {/* More News Section */}
      <section className="py-12 bg-gray-50">
        <div className="neura-container">
          <h2 className="text-2xl font-bold mb-8 text-inchemco-dark">Tin tức khác</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {newsItems
              .filter(item => item.id !== newsItem.id)
              .slice(0, 3)
              .map((item) => (
                <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="relative h-48 w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 384px"
                    />
                  </div>
                  
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-inchemco-primary/10 text-inchemco-primary text-xs px-2 py-0.5 rounded-full">
                        {item.category}
                      </span>
                      <span className="text-gray-500 text-xs">{item.date}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-2 text-inchemco-dark line-clamp-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.summary}</p>
                    
                    <Link href={`/news/${item.slug}`} className="text-inchemco-primary hover:text-inchemco-primary-hover font-medium text-sm">
                      Đọc thêm &rarr;
                    </Link>
                  </div>
                </div>
              ))}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/news">
              <Button variant="outline" className="border-inchemco-primary text-inchemco-primary hover:bg-inchemco-primary/10">
                Xem tất cả tin tức
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 