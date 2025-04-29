import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { productCategories, featuredProducts, partnerBrands } from "@/app/data";

export const metadata = {
  title: "INCHEMCO - Thiết bị y tế & Hóa chất chuyên dụng | Đối tác chuyên nghiệp - Hợp tác vững bền",
  description: "INCHEMCO cung cấp thiết bị y tế cao cấp và hóa chất chuyên dụng tại Việt Nam. Phân phối độc quyền phế dung kế, thiết bị vật lý trị liệu và thiết bị xét nghiệm từ các thương hiệu uy tín toàn cầu.",
};

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-inchemco-dark text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/inchemco/hero-bg.jpg"
            alt="Hero Background"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
            priority
          />
        </div>
        <div className="neura-container relative z-10 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="neura-heading mb-6">
              Thiết bị y tế & Hóa chất chuyên dụng
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              INCHEMCO - Đối tác chuyên nghiệp, hợp tác vững bền trong lĩnh vực thiết bị y tế và hóa chất chuyên dụng.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/products">
                <Button size="lg" className="bg-inchemco-primary hover:bg-inchemco-primary-hover text-white">
                  Khám phá sản phẩm
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Liên hệ tư vấn
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Categories */}
      <section className="py-16 bg-white">
        <div className="neura-container">
          <h2 className="text-3xl font-bold text-center mb-16">Danh mục sản phẩm</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productCategories.map((category) => (
              <div key={category.id} className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="relative h-64">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-inchemco-dark/90 to-transparent"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-gray-200 mb-4 text-sm opacity-90 line-clamp-2">
                    {category.description}
                  </p>
                  <Link href={`/products/${category.slug}`}>
                    <Button className="bg-inchemco-primary hover:bg-inchemco-primary-hover text-white">
                      Xem chi tiết
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-inchemco-light">
        <div className="neura-container">
          <div className="md:flex items-center gap-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="relative rounded-xl overflow-hidden h-96">
                <Image
                  src="/images/inchemco/about-hero.jpg"
                  alt="Về INCHEMCO"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-inchemco-dark">Về INCHEMCO</h2>
              <p className="text-gray-700 mb-4">
                INCHEMCO là nhà cung cấp hàng đầu trong lĩnh vực thiết bị y tế và hóa chất chuyên dụng tại Việt Nam. Với hơn 15 năm kinh nghiệm, chúng tôi tự hào là đối tác phân phối độc quyền của nhiều thương hiệu uy tín trên thế giới.
              </p>
              <p className="text-gray-700 mb-6">
                Sứ mệnh của chúng tôi là cung cấp các sản phẩm chất lượng cao, góp phần nâng cao hiệu quả chẩn đoán và điều trị, từ đó cải thiện chất lượng cuộc sống cho người bệnh.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-inchemco-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-inchemco-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-inchemco-dark">Chất lượng</h3>
                    <p className="text-sm text-gray-600">Sản phẩm chất lượng cao từ các thương hiệu uy tín</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-inchemco-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-inchemco-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-inchemco-dark">Hiệu quả</h3>
                    <p className="text-sm text-gray-600">Giải pháp hiệu quả cho nhu cầu y tế đa dạng</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-inchemco-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-inchemco-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-inchemco-dark">Hỗ trợ</h3>
                    <p className="text-sm text-gray-600">Đội ngũ tư vấn và hỗ trợ kỹ thuật chuyên nghiệp</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-inchemco-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-inchemco-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-inchemco-dark">Uy tín</h3>
                    <p className="text-sm text-gray-600">Đối tác tin cậy của các cơ sở y tế trên toàn quốc</p>
                  </div>
                </div>
              </div>
              
              <Link href="/about">
                <Button className="bg-inchemco-primary hover:bg-inchemco-primary-hover text-white">
                  Tìm hiểu thêm
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="neura-container">
          <h2 className="text-3xl font-bold text-center mb-6">Sản phẩm nổi bật</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Khám phá những thiết bị y tế và hóa chất hiện đại, được tin dùng tại nhiều cơ sở y tế trên toàn quốc.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100">
                <div className="relative h-56 w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-inchemco-dark">{product.name}</h3>
                    <span className="bg-inchemco-primary/10 text-inchemco-primary text-xs px-2 py-1 rounded">
                      {product.brand}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-6 line-clamp-2">{product.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <Link href={`/products/${product.category}/${product.subcategory}/${product.slug}`}>
                      <Button className="bg-inchemco-primary hover:bg-inchemco-primary-hover text-white">
                        Xem chi tiết
                      </Button>
                    </Link>
                    <Link href="/contact" className="text-inchemco-primary hover:text-inchemco-primary-hover text-sm font-medium">
                      Yêu cầu báo giá
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/products">
              <Button variant="outline" className="border-inchemco-primary text-inchemco-primary hover:bg-inchemco-primary/10">
                Xem tất cả sản phẩm
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Partner Brands */}
      <section className="py-16 bg-gray-50">
        <div className="neura-container">
          <h2 className="text-3xl font-bold text-center mb-6">Đối tác thương hiệu</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            INCHEMCO tự hào là đối tác phân phối độc quyền của nhiều thương hiệu thiết bị y tế uy tín hàng đầu thế giới.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partnerBrands.map((brand) => (
              <div key={brand.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center justify-center h-32">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={160}
                  height={80}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/partners">
              <Button variant="outline" className="border-inchemco-primary text-inchemco-primary hover:bg-inchemco-primary/10">
                Xem tất cả đối tác
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section className="py-16 bg-white">
        <div className="neura-container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-2">Tin tức & Sự kiện</h2>
              <p className="text-gray-600">Cập nhật thông tin mới nhất về INCHEMCO và ngành thiết bị y tế</p>
            </div>
            <Link href="/news" className="mt-4 md:mt-0">
              <Button variant="outline" className="border-inchemco-primary text-inchemco-primary hover:bg-inchemco-primary/10">
                Xem tất cả tin tức
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="relative h-56 w-full">
                  <Image
                    src={`/images/news/news-${i+1}.jpg`}
                    alt={`Tin tức ${i+1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-inchemco-primary/10 text-inchemco-primary text-sm px-3 py-1 rounded-full">
                      {i === 0 ? "Sản phẩm mới" : i === 1 ? "Sự kiện" : "Công nghệ"}
                    </span>
                    <span className="text-gray-500 text-sm">{i === 0 ? "15/10/2023" : i === 1 ? "05/12/2023" : "20/09/2023"}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-inchemco-dark">
                    {i === 0 
                      ? "INCHEMCO giới thiệu dòng sản phẩm BTL-6000 FSWT tại Việt Nam" 
                      : i === 1 
                        ? "INCHEMCO tham gia Triển lãm Y tế Quốc tế Vietnam Medipharm Expo 2023" 
                        : "Các ứng dụng mới của công nghệ Xung kích hội tụ trong điều trị đau cơ xương khớp"}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {i === 0 
                      ? "Thiết bị Xung kích hội tụ (Focused Shock Wave Therapy) mới nhất từ BTL đã chính thức có mặt tại thị trường Việt Nam thông qua INCHEMCO, mang đến giải pháp điều trị hiệu quả cho các bệnh lý cơ xương khớp." 
                      : i === 1 
                        ? "INCHEMCO tự hào giới thiệu các sản phẩm thiết bị y tế và hóa chất chuyên dụng mới nhất tại gian hàng A25-A26, Triển lãm Y tế Quốc tế Vietnam Medipharm Expo 2023." 
                        : "Nghiên cứu mới nhất chỉ ra hiệu quả điều trị đáng kể của công nghệ Xung kích hội tụ trong các trường hợp đau gót chân, viêm gân Achilles, và đau khớp vai."}
                  </p>
                  
                  <Link href={i === 0 ? "/news/gioi-thieu-btl-6000-fswt" : i === 1 ? "/news/trien-lam-vietnam-medipharm-2023" : "/news/ung-dung-moi-cua-xung-kich-hoi-tu"} className="text-inchemco-primary hover:text-inchemco-primary-hover font-medium text-sm">
                    Đọc thêm &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-inchemco-dark text-white">
        <div className="neura-container">
          <div className="md:flex items-center justify-between gap-8">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Cần tư vấn về sản phẩm?</h2>
              <p className="text-gray-300 text-lg">
                Đội ngũ chuyên viên của INCHEMCO luôn sẵn sàng hỗ trợ và tư vấn chi tiết về các sản phẩm phù hợp nhất với nhu cầu của quý khách.
              </p>
            </div>
            
            <div className="md:w-1/3">
              <div className="flex flex-col gap-4">
                <Link href="/contact">
                  <Button size="lg" className="w-full bg-inchemco-accent hover:bg-inchemco-accent/90 text-white">
                    Liên hệ ngay
                  </Button>
                </Link>
                <Link href="tel:0986621314">
                  <Button size="lg" variant="outline" className="w-full border-white text-white hover:bg-white/10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    0986.621.314
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
