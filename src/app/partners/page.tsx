import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LogoFallbackImage } from "@/components/ui/fallback-image";

export const metadata = {
  title: "Đối tác - INCHEMCO | Thiết bị y tế & Hóa chất chuyên dụng",
  description: "Các đối tác chiến lược của INCHEMCO - nhà phân phối độc quyền thiết bị y tế cao cấp, thiết bị vật lý trị liệu và hóa chất xét nghiệm chuyên dụng tại Việt Nam.",
};

export default function PartnersPage() {
  // Danh sách đối tác
  const partners = [
    {
      id: "btl",
      name: "BTL",
      logo: "/images/inchemco/brands/btl-logo.png",
      country: "Anh Quốc",
      description: "BTL là nhà sản xuất hàng đầu thế giới về thiết bị vật lý trị liệu và chẩn đoán tim phổi. Với hơn 25 năm kinh nghiệm, BTL cung cấp các giải pháp y tế tiên tiến với chất lượng và độ tin cậy cao.",
      products: ["Thiết bị vật lý trị liệu", "Thiết bị chẩn đoán tim mạch", "Phế dung kế", "Thiết bị phục hồi chức năng"],
      website: "https://www.btlnet.com/"
    },
    // Placeholder partners (you can replace with actual data later)
    {
      id: "partner2",
      name: "Partner 2",
      logo: "/images/inchemco/brands/placeholder-logo.png",
      country: "USA",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl.",
      products: ["Product 1", "Product 2", "Product 3"],
      website: "https://www.example.com/"
    },
    {
      id: "partner3",
      name: "Partner 3",
      logo: "/images/inchemco/brands/placeholder-logo.png",
      country: "Germany",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl.",
      products: ["Product 1", "Product 2", "Product 3"],
      website: "https://www.example.com/"
    },
    {
      id: "partner4",
      name: "Partner 4",
      logo: "/images/inchemco/brands/placeholder-logo.png",
      country: "Japan",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl.",
      products: ["Product 1", "Product 2", "Product 3"],
      website: "https://www.example.com/"
    },
    {
      id: "partner5",
      name: "Partner 5",
      logo: "/images/inchemco/brands/placeholder-logo.png",
      country: "France",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl.",
      products: ["Product 1", "Product 2", "Product 3"],
      website: "https://www.example.com/"
    }
  ];

  return (
    <main className="bg-white pb-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-inchemco-dark to-inchemco-dark-secondary text-white">
        <div className="neura-container">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Đối tác của chúng tôi</h1>
            <p className="text-xl opacity-90">
              INCHEMCO tự hào là đối tác chiến lược và nhà phân phối độc quyền của nhiều thương hiệu hàng đầu thế giới trong lĩnh vực thiết bị y tế và hóa chất chuyên dụng tại thị trường Việt Nam.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Overview */}
      <section className="py-16">
        <div className="neura-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-inchemco-dark">Đối tác toàn cầu</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Chúng tôi luôn đặt chất lượng lên hàng đầu, và đó là lý do tại sao INCHEMCO hợp tác với các thương hiệu uy tín và nổi tiếng toàn cầu để mang đến cho thị trường Việt Nam những sản phẩm y tế tốt nhất.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {partners.map((partner) => (
              <div key={partner.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-4 flex flex-col items-center">
                <div className="relative h-20 w-full mb-4">
                  <LogoFallbackImage
                    src={partner.logo}
                    alt={`${partner.name} Logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-md font-medium text-inchemco-dark text-center">{partner.name}</h3>
                <p className="text-sm text-gray-500 text-center">{partner.country}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Partners Detailed Section */}
      <section className="py-16 bg-gray-50">
        <div className="neura-container">
          <h2 className="text-2xl font-bold mb-8 text-inchemco-dark">Giới thiệu đối tác</h2>
          <div className="space-y-12">
            {partners.map((partner) => (
              <div key={partner.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-gray-100">
                <div className="md:flex">
                  <div className="md:w-1/3 p-8 bg-inchemco-light flex items-center justify-center">
                    <div className="relative h-48 w-full">
                      <LogoFallbackImage
                        src={partner.logo}
                        alt={`${partner.name} Logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  
                  <div className="md:w-2/3 p-8">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <h3 className="text-2xl font-bold text-inchemco-dark">{partner.name}</h3>
                      <span className="bg-inchemco-primary/10 text-inchemco-primary text-sm px-3 py-1 rounded-full">
                        {partner.country}
                      </span>
                    </div>
                    
                    <p className="text-gray-700 mb-6">{partner.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-medium mb-3 text-inchemco-dark">Sản phẩm</h4>
                      <div className="flex flex-wrap gap-2">
                        {partner.products.map((product, index) => (
                          <span key={index} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                            {product}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      {partner.id === "btl" ? (
                        <Link href="/products/rehabilitation">
                          <Button className="bg-inchemco-primary hover:bg-inchemco-primary-hover text-white">
                            Xem sản phẩm
                          </Button>
                        </Link>
                      ) : (
                        <Link href={`/products`}>
                          <Button className="bg-inchemco-primary hover:bg-inchemco-primary-hover text-white">
                            Xem sản phẩm
                          </Button>
                        </Link>
                      )}
                      
                      <Link href={partner.website} target="_blank" rel="noopener noreferrer" className="text-inchemco-primary hover:text-inchemco-primary-hover text-sm font-medium">
                        Truy cập website
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Become a Partner Section */}
      <section className="py-16">
        <div className="neura-container">
          <div className="md:flex items-center gap-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-6 text-inchemco-dark">Trở thành đối tác của INCHEMCO</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  INCHEMCO luôn tìm kiếm các đối tác chiến lược có thể cùng nhau phát triển và mang đến những giải pháp y tế tốt nhất cho thị trường Việt Nam.
                </p>
                <p>
                  Chúng tôi đánh giá cao sự hợp tác với các nhà sản xuất thiết bị y tế và hóa chất chuyên dụng chất lượng cao, cùng chia sẻ tầm nhìn về việc cải thiện chất lượng chăm sóc sức khỏe tại Việt Nam.
                </p>
                <p>
                  Nếu quý doanh nghiệp quan tâm đến việc hợp tác với INCHEMCO, vui lòng liên hệ với chúng tôi để biết thêm thông tin chi tiết.
                </p>
              </div>
              
              <div className="mt-8">
                <Link href="/contact">
                  <Button className="bg-inchemco-primary hover:bg-inchemco-primary-hover text-white">
                    Liên hệ hợp tác
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                <h3 className="text-xl font-bold mb-6 text-inchemco-dark">Lợi ích khi trở thành đối tác</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-inchemco-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg 
                        className="w-5 h-5 text-inchemco-primary" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-inchemco-dark">Mạng lưới rộng khắp</h4>
                      <p className="text-gray-600">Tiếp cận mạng lưới rộng lớn của các bệnh viện, phòng khám và cơ sở y tế trên toàn quốc.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-inchemco-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg 
                        className="w-5 h-5 text-inchemco-primary" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-inchemco-dark">Đội ngũ chuyên nghiệp</h4>
                      <p className="text-gray-600">Làm việc với đội ngũ bán hàng và hỗ trợ kỹ thuật giàu kinh nghiệm và chuyên nghiệp.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-inchemco-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg 
                        className="w-5 h-5 text-inchemco-primary" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-inchemco-dark">Phát triển thị trường</h4>
                      <p className="text-gray-600">Chiến lược marketing hiệu quả để phát triển thương hiệu và mở rộng thị phần tại Việt Nam.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-inchemco-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg 
                        className="w-5 h-5 text-inchemco-primary" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-inchemco-dark">Hỗ trợ khách hàng</h4>
                      <p className="text-gray-600">Dịch vụ hậu mãi, bảo hành và bảo trì chuyên nghiệp cho khách hàng.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 bg-inchemco-dark text-white">
        <div className="neura-container">
          <div className="md:flex items-center gap-8">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h2 className="text-2xl font-bold mb-4">Liên hệ với chúng tôi ngay hôm nay</h2>
              <p className="text-gray-200">
                Để biết thêm thông tin về các đối tác và sản phẩm của INCHEMCO, vui lòng liên hệ với đội ngũ chuyên viên của chúng tôi. Chúng tôi luôn sẵn sàng hỗ trợ và tư vấn cho quý khách.
              </p>
            </div>
            
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <Link href="/contact">
                <Button size="lg" className="bg-inchemco-accent hover:bg-inchemco-accent/90 text-white px-8">
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