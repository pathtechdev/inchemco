import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FallbackImage } from "@/components/ui/fallback-image";

export const metadata = {
  title: "Xung kích hội tụ - INCHEMCO | Thiết bị vật lý trị liệu",
  description: "Thiết bị xung kích hội tụ BTL-6000 FSWT chất lượng cao, giúp điều trị hiệu quả các chứng đau cơ xương khớp, gai gót, đau vai gáy và nhiều vấn đề khác.",
};

export default function ShockWavePage() {
  // Danh sách sản phẩm Xung kích hội tụ
  const products = [
    {
      id: "btl-6000-fswt",
      name: "BTL-6000 FSWT",
      image: "/images/products/shock-wave/btl-6000-fswt.jpg",
      imageFallback: "/images/products/shock-wave/btl-6000-fswt.svg",
      description: "Thiết bị xung kích hội tụ thế hệ mới, điều trị hiệu quả các chứng đau cơ xương khớp, viêm gân, gai gót, viêm mỏm trên lồi cầu, đau vai gáy và nhiều vấn đề khác.",
      manufacturer: "BTL / Anh Quốc",
      features: [
        "Sóng xung kích hội tụ (Focused Shock Wave Therapy)",
        "Điều trị hiệu quả các chứng gai gót, viêm gân, viêm khớp",
        "Giảm đau nhanh chóng, tăng cường tính hiệu quả",
        "Giảm thời gian điều trị, kích thích quá trình phục hồi",
        "Giao diện người dùng thân thiện, dễ sử dụng"
      ],
      applications: [
        "Điều trị gai gót chân (Plantar Fasciitis)",
        "Điều trị viêm điểm bám gân (Enthesopathies)",
        "Điều trị chứng đau cơ mạn tính",
        "Kích thích tái tạo mô tổn thương",
        "Tăng lưu thông máu tại vùng điều trị",
        "Giảm đau nhanh chóng cho bệnh nhân"
      ]
    }
  ];

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
            <Link href="/products" className="text-gray-500 hover:text-inchemco-primary">
              Sản phẩm
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/products/rehabilitation" className="text-gray-500 hover:text-inchemco-primary">
              Thiết bị vật lý trị liệu phục hồi chức năng
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-inchemco-primary font-medium">Xung kích hội tụ</span>
          </div>
        </div>
      </div>

      {/* Category Header */}
      <section className="py-12 bg-gradient-to-r from-inchemco-dark to-inchemco-dark-secondary text-white">
        <div className="neura-container">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Xung kích hội tụ</h1>
            <p className="text-lg opacity-90">
              Công nghệ trị liệu tiên tiến sử dụng sóng xung kích hội tụ (Focused Shock Wave Therapy) để điều trị các rối loạn cơ xương khớp.
              Thiết bị xung kích hội tụ BTL giúp giảm đau nhanh chóng, kích thích quá trình phục hồi tự nhiên và rút ngắn thời gian điều trị.
            </p>
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="py-12">
        <div className="neura-container">
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-2 text-inchemco-dark">Sản phẩm nổi bật</h2>
            <div className="w-20 h-1 bg-inchemco-primary"></div>
          </div>
          
          <div className="space-y-12">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100">
                <div className="md:flex">
                  <div className="md:w-2/5 p-6 flex items-center justify-center bg-gray-50">
                    <div className="relative h-64 w-full">
                      <FallbackImage
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain"
                        fallbackSrc={product.imageFallback}
                      />
                    </div>
                  </div>
                  
                  <div className="md:w-3/5 p-6 md:p-8">
                    <h3 className="text-2xl font-bold mb-4 text-inchemco-dark">{product.name}</h3>
                    <p className="text-gray-700 mb-6">{product.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-medium mb-3 text-inchemco-dark">Tính năng nổi bật</h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              className="h-5 w-5 text-inchemco-primary mt-0.5 mr-2 flex-shrink-0" 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-gray-100 pt-6">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Hãng sản xuất:</p>
                        <p className="font-medium">{product.manufacturer}</p>
                      </div>
                      <div className="flex gap-3">
                        <Link href={`/products/rehabilitation/shock-wave/${product.id}`}>
                          <Button className="bg-inchemco-primary hover:bg-inchemco-primary-hover text-white">
                            Xem chi tiết
                          </Button>
                        </Link>
                        <Link href="/contact">
                          <Button variant="outline" className="border-inchemco-primary text-inchemco-primary hover:bg-inchemco-primary/10">
                            Báo giá
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features & Benefits Section */}
      <section className="py-12 bg-gray-50">
        <div className="neura-container">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold mb-2 text-inchemco-dark">Công nghệ và lợi ích</h2>
            <div className="w-20 h-1 bg-inchemco-primary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-inchemco-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6 text-inchemco-primary" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              
              <h3 className="text-lg font-medium mb-4 text-inchemco-dark">Cơ chế xung kích hội tụ</h3>
              <p className="text-gray-700 mb-4">
                Liệu pháp sóng xung kích (ESWT) là một phương pháp điều trị không xâm lấn, sử dụng sóng âm có năng lượng cao để kích thích các quá trình chữa lành tự nhiên của cơ thể.
              </p>
              <p className="text-gray-700">
                Sóng xung kích hội tụ (Focused Shock Wave) tập trung năng lượng vào một điểm cụ thể, cho phép nhắm mục tiêu chính xác vào vùng cần điều trị, mang lại hiệu quả cao và giảm tác động đến các mô xung quanh.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-inchemco-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6 text-inchemco-primary" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              
              <h3 className="text-lg font-medium mb-4 text-inchemco-dark">Lợi ích lâm sàng</h3>
              <ul className="space-y-2">
                {products[0].applications.map((application, index) => (
                  <li key={index} className="flex items-start">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 text-inchemco-primary mt-0.5 mr-2 flex-shrink-0" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{application}</span>
                  </li>
                ))}
                <li className="flex items-start">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-inchemco-primary mt-0.5 mr-2 flex-shrink-0" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Phương pháp không phẫu thuật, không dùng thuốc</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Brand Logo Section */}
      <section className="py-12">
        <div className="neura-container">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2 text-inchemco-dark">Thương hiệu uy tín</h2>
            <p className="text-gray-600">INCHEMCO là đối tác phân phối độc quyền của thương hiệu BTL tại Việt Nam</p>
          </div>
          
          <div className="flex justify-center">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 max-w-md">
              <div className="relative h-32">
                <FallbackImage
                  src="/images/inchemco/brands/btl-logo.png"
                  alt="BTL Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-center text-gray-600 mt-4">
                BTL - Thương hiệu uy tín hàng đầu trong lĩnh vực thiết bị vật lý trị liệu và phục hồi chức năng
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 bg-inchemco-dark text-white">
        <div className="neura-container">
          <div className="md:flex items-center gap-8">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h2 className="text-2xl font-bold mb-4">Cần tư vấn về thiết bị xung kích hội tụ?</h2>
              <p className="text-gray-200">
                Liên hệ với đội ngũ INCHEMCO để nhận tư vấn chuyên sâu về sản phẩm, ứng dụng lâm sàng và báo giá chi tiết. Chúng tôi sẵn sàng hỗ trợ bạn lựa chọn thiết bị phù hợp nhất với nhu cầu của cơ sở y tế.
              </p>
              <div className="flex items-center gap-3 mt-6">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 text-inchemco-accent" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-white">Hotline: 0986.621.314</span>
              </div>
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