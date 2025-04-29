import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";
import { newsItems, categories } from "../../data";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const category = categories.find(c => c.slug === params.slug);
  
  if (!category && params.slug !== "all") {
    return {
      title: "Danh mục không tồn tại - INCHEMCO",
      description: "Danh mục bạn đang tìm kiếm không tồn tại hoặc đã bị xóa."
    };
  }
  
  return {
    title: `${category?.name || "Tất cả tin tức"} - INCHEMCO`,
    description: `Tin tức và sự kiện về ${category?.name.toLowerCase() || "các lĩnh vực"} từ INCHEMCO - Nhà cung cấp thiết bị y tế và hóa chất chuyên dụng.`,
  };
}

export default function NewsCategoryPage({ params }: { params: { slug: string } }) {
  const category = categories.find(c => c.slug === params.slug);
  const isAllCategory = params.slug === "all";
  
  if (!category && !isAllCategory) {
    notFound();
  }
  
  // Filter news items based on category
  const filteredNews = isAllCategory 
    ? newsItems 
    : newsItems.filter(item => item.category.toLowerCase().replace(/\s+/g, '-') === params.slug);
  
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
            <span className="text-inchemco-primary font-medium">{category?.name || "Tất cả tin tức"}</span>
          </div>
        </div>
      </div>

      {/* Category Header */}
      <section className="py-12 bg-gradient-to-r from-inchemco-dark to-inchemco-dark-secondary text-white">
        <div className="neura-container">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{category?.name || "Tất cả tin tức & sự kiện"}</h1>
          <p className="text-lg opacity-90 max-w-3xl">
            {isAllCategory 
              ? "Cập nhật thông tin mới nhất về INCHEMCO, sản phẩm, công nghệ, và các sự kiện." 
              : `Tin tức và sự kiện về ${category?.name.toLowerCase()} từ INCHEMCO. Tìm hiểu thêm về các hoạt động, sản phẩm, và cập nhật mới nhất.`
            }
          </p>
        </div>
      </section>

      {/* News Content */}
      <section className="py-16">
        <div className="neura-container">
          <div className="md:flex gap-12">
            {/* Main Content */}
            <div className="md:w-2/3">
              {filteredNews.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-8">
                  {filteredNews.map((item) => (
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
              ) : (
                <div className="bg-gray-50 p-8 rounded-xl text-center">
                  <h2 className="text-xl font-bold mb-2 text-inchemco-dark">Không tìm thấy bài viết</h2>
                  <p className="text-gray-600 mb-6">Hiện tại chưa có bài viết nào trong danh mục này. Vui lòng quay lại sau.</p>
                  <Link href="/news">
                    <Button className="bg-inchemco-primary hover:bg-inchemco-primary-hover text-white">
                      Quay lại Tin tức
                    </Button>
                  </Link>
                </div>
              )}
              
              {/* Pagination (Only show if there are items) */}
              {filteredNews.length > 0 && (
                <div className="mt-12 flex justify-center">
                  <nav className="flex items-center gap-1">
                    <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">
                      &larr;
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-md bg-inchemco-primary text-white">
                      1
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">
                      &rarr;
                    </button>
                  </nav>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="md:w-1/3 mt-12 md:mt-0">
              {/* Categories */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
                <h3 className="text-xl font-bold mb-4 text-inchemco-dark">Danh mục</h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <Link 
                      key={cat.slug} 
                      href={`/news/category/${cat.slug}`} 
                      className={`flex items-center justify-between py-2 border-b border-gray-100 hover:text-inchemco-primary ${params.slug === cat.slug ? 'text-inchemco-primary font-medium' : ''}`}
                    >
                      <span>{cat.name}</span>
                      <span className={`${params.slug === cat.slug ? 'bg-inchemco-primary text-white' : 'bg-gray-100 text-gray-700'} text-xs px-2 py-1 rounded-full`}>
                        {cat.count}
                      </span>
                    </Link>
                  ))}
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