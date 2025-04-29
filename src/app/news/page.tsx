import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { newsItems, categories } from "./data";

export const metadata = {
  title: "Tin tức & Sự kiện - INCHEMCO | Thiết bị y tế & Hóa chất chuyên dụng",
  description: "Cập nhật tin tức mới nhất từ INCHEMCO về sản phẩm, công nghệ y tế, và các sự kiện triển lãm sắp tới trong ngành thiết bị y tế và hóa chất chuyên dụng.",
};

export default function NewsPage() {
  return (
    <main className="bg-white pb-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-inchemco-dark to-inchemco-dark-secondary text-white">
        <div className="neura-container">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Tin tức & Sự kiện</h1>
            <p className="text-xl opacity-90">
              Cập nhật tin tức mới nhất về INCHEMCO, sản phẩm, công nghệ, và các sự kiện triển lãm sắp tới.
            </p>
          </div>
        </div>
      </section>

      {/* News Content */}
      <section className="py-16">
        <div className="neura-container">
          <div className="md:flex gap-12">
            {/* Main Content */}
            <div className="md:w-2/3">
              {/* Featured News */}
              <div className="mb-12">
                <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="relative h-96 w-full">
                    <Image
                      src={newsItems[0].image}
                      alt={newsItems[0].title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 768px"
                      priority
                    />
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-inchemco-primary/10 text-inchemco-primary text-sm px-3 py-1 rounded-full">
                        {newsItems[0].category}
                      </span>
                      <span className="text-gray-500 text-sm">{newsItems[0].date}</span>
                    </div>
                    
                    <h2 className="text-2xl font-bold mb-4 text-inchemco-dark">{newsItems[0].title}</h2>
                    <p className="text-gray-600 mb-6">{newsItems[0].summary}</p>
                    
                    <Link href={`/news/${newsItems[0].slug}`}>
                      <Button className="bg-inchemco-primary hover:bg-inchemco-primary-hover text-white">
                        Đọc thêm
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* News List */}
              <div className="grid md:grid-cols-2 gap-8">
                {newsItems.slice(1).map((item) => (
                  <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="relative h-56 w-full">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 384px"
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-inchemco-primary/10 text-inchemco-primary text-sm px-3 py-1 rounded-full">
                          {item.category}
                        </span>
                        <span className="text-gray-500 text-sm">{item.date}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 text-inchemco-dark">{item.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{item.summary}</p>
                      
                      <Link href={`/news/${item.slug}`} className="text-inchemco-primary hover:text-inchemco-primary-hover font-medium text-sm">
                        Đọc thêm &rarr;
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <nav className="flex items-center gap-1">
                  <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">
                    &larr;
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-md bg-inchemco-primary text-white">
                    1
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">
                    2
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">
                    3
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">
                    &rarr;
                  </button>
                </nav>
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
              
              {/* Upcoming Events */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
                <h3 className="text-xl font-bold mb-4 text-inchemco-dark">Sự kiện sắp tới</h3>
                <div className="space-y-4">
                  <div className="flex gap-4 pb-4 border-b border-gray-100">
                    <div className="w-16 flex-shrink-0 bg-inchemco-primary rounded-lg text-white flex flex-col items-center justify-center py-2">
                      <span className="text-xs">Tháng 12</span>
                      <span className="text-2xl font-bold">05</span>
                      <span className="text-xs">2023</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-inchemco-dark">Vietnam Medipharm Expo 2023</h4>
                      <p className="text-sm text-gray-500">Trung tâm Hội chợ và Triển lãm Sài Gòn (SECC), Thành phố Hồ Chí Minh</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 pb-4 border-b border-gray-100">
                    <div className="w-16 flex-shrink-0 bg-inchemco-primary rounded-lg text-white flex flex-col items-center justify-center py-2">
                      <span className="text-xs">Tháng 01</span>
                      <span className="text-2xl font-bold">15</span>
                      <span className="text-xs">2024</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-inchemco-dark">Hội thảo Chuyên đề Phục hồi Chức năng</h4>
                      <p className="text-sm text-gray-500">Bệnh viện Đại học Y Hà Nội, Hà Nội</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-16 flex-shrink-0 bg-inchemco-primary rounded-lg text-white flex flex-col items-center justify-center py-2">
                      <span className="text-xs">Tháng 03</span>
                      <span className="text-2xl font-bold">10</span>
                      <span className="text-xs">2024</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-inchemco-dark">Triển lãm Thiết bị Y tế Quốc tế</h4>
                      <p className="text-sm text-gray-500">Trung tâm Hội nghị Quốc gia, Hà Nội</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <Link href="/events" className="text-inchemco-primary hover:text-inchemco-primary-hover text-sm font-medium">
                    Xem tất cả sự kiện &rarr;
                  </Link>
                </div>
              </div>
              
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
      </section>
      
      {/* CTA Section */}
      <section className="py-12 bg-gray-50">
        <div className="neura-container">
          <div className="md:flex items-center justify-between gap-8">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-4 text-inchemco-dark">Cần tư vấn về sản phẩm?</h2>
              <p className="text-gray-600">
                Đội ngũ chuyên viên của INCHEMCO luôn sẵn sàng hỗ trợ và tư vấn để giúp bạn tìm được giải pháp phù hợp nhất.
              </p>
            </div>
            
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <Link href="/contact">
                <Button size="lg" className="bg-inchemco-primary hover:bg-inchemco-primary-hover text-white px-8">
                  Liên hệ ngay
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 