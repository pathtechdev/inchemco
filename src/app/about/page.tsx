import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FallbackImage } from "@/components/ui/fallback-image";

export const metadata = {
  title: "Giới thiệu - INCHEMCO | Thiết bị y tế & Hóa chất chuyên dụng",
  description: "Công ty CP Xuất nhập khẩu Thiết bị và Hóa chất Việt Nam (INCHEMCO) - Nhà phân phối thiết bị y tế cao cấp, thiết bị vật lý trị liệu và hóa chất xét nghiệm chuyên dụng tại Việt Nam.",
};

export default function AboutPage() {
  // Các lĩnh vực hoạt động của công ty
  const businessAreas = [
    {
      id: "lab-equipment",
      title: "Thiết bị và hóa chất sử dụng trong phòng xét nghiệm",
      items: [
        "Máy xét nghiệm sinh hóa tự động và bán tự động",
        "Máy xét nghiệm huyết học",
        "Máy xét nghiệm nước tiểu bán tự động và tự động",
        "Máy xét nghiệm đông máu tự động và bán tự động",
        "Máy xét nghiệm miễn dịch tự động",
        "Hóa chất xét nghiệm sinh hóa, huyết học, nước tiểu, miễn dịch, đông máu",
        "Que thử nước tiểu, test thử nhanh các loại"
      ],
      icon: (
        <svg className="w-12 h-12 text-inchemco-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      id: "rehabilitation",
      title: "Thiết bị vật lý trị liệu, phục hồi chức năng (BTL/Anh)",
      items: [
        "Máy điện trị liệu",
        "Máy siêu âm trị liệu",
        "Máy laser trị liệu công suất thấp",
        "Máy laser trị liệu công suất cao",
        "Máy điện từ trị liệu",
        "Máy trị liệu kết hợp",
        "Máy xung kích",
        "Máy trị liệu bằng RF",
        "Máy trị liệu kết hợp xung kích và laser cường độ cao",
        "Máy trị liệu sóng ngắn, vi sóng",
        "Liệu pháp vận động thụ động liên tục",
        "Máy kéo giãn",
        "Thủy trị liệu",
        "Dẫn lưu bạch huyết",
        "Giường và ghế trị liệu"
      ],
      icon: (
        <svg className="w-12 h-12 text-inchemco-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      id: "cardio",
      title: "Thiết bị tim mạch",
      description: "Máy điện tim kết hợp với phần mềm ưu việt của BTL tạo ra sự đột phát trong chuẩn đoán các bệnh lý liên quan đến tim mạch cũng như nguy cơ tử vong cao do đột quỵ.",
      items: [
        "Máy điện tim 3-12 kênh",
        "Holter điện tim",
        "Điện tim gắng sức",
        "Holter huyết áp",
        "Phế dung kế",
        "Phần mềm tim - phổi",
        "Mạng lưới BTL"
      ],
      icon: (
        <svg className="w-12 h-12 text-inchemco-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m-6-8h6M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" />
        </svg>
      )
    },
    {
      id: "gas-detection",
      title: "Thiết bị phát hiện khí cầm tay",
      items: [
        "Thiết bị phát hiện khí đa chỉ tiêu",
        "Thiết bị phát hiện đơn khí"
      ],
      icon: (
        <svg className="w-12 h-12 text-inchemco-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      )
    }
  ];

  return (
    <main className="bg-white pb-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-inchemco-dark to-inchemco-dark-secondary text-white">
        <div className="neura-container">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Giới thiệu về INCHEMCO</h1>
            <p className="text-xl opacity-90">
              Công ty CP Xuất nhập khẩu Thiết bị và Hóa chất Việt Nam (INCHEMCO) chuyên cung cấp các thiết bị và vật tư y tế chất lượng cao tại thị trường Việt Nam.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="neura-container">
          <div className="md:flex gap-12 items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="rounded-xl overflow-hidden shadow-lg relative h-96">
                <FallbackImage
                  src="/images/inchemco/hero/company-overview.jpg"
                  alt="INCHEMCO Office"
                  fill
                  className="object-cover"
                  fallbackSrc="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                />
              </div>
            </div>
            
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-inchemco-dark">Về chúng tôi</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Công ty CP Xuất nhập khẩu Thiết bị và Hóa chất Việt Nam</strong> (INCHEMCO) là đơn vị chuyên nhập khẩu và phân phối các thiết bị y tế, thiết bị vật lý trị liệu phục hồi chức năng, thiết bị xét nghiệm và hóa chất chuyên dụng cho ngành y tế.
                </p>
                <p>
                  Chúng tôi tự hào là đối tác độc quyền tại Việt Nam của nhiều thương hiệu uy tín trên thế giới như BTL (Anh Quốc) - nhà sản xuất hàng đầu về thiết bị vật lý trị liệu và chẩn đoán tim phổi, cùng nhiều đối tác khác trong lĩnh vực thiết bị và hóa chất xét nghiệm.
                </p>
                <p>
                  Với phương châm "Đối tác chuyên nghiệp - Hợp tác vững bền", INCHEMCO cam kết cung cấp các sản phẩm chất lượng cao, dịch vụ chuyên nghiệp, hỗ trợ kỹ thuật tận tâm và giải pháp toàn diện cho các cơ sở y tế trên toàn quốc.
                </p>
              </div>
              
              <div className="mt-8">
                <Link href="/contact">
                  <Button className="bg-inchemco-primary hover:bg-inchemco-primary-hover text-white">
                    Liên hệ với chúng tôi
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Business Areas */}
      <section className="py-16 bg-gray-50">
        <div className="neura-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-inchemco-dark">Lĩnh vực hoạt động</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              INCHEMCO cung cấp đa dạng các thiết bị y tế và hóa chất chuyên dụng phục vụ cho nhiều lĩnh vực trong ngành y tế và chăm sóc sức khỏe.
            </p>
          </div>
          
          <div className="space-y-12">
            {businessAreas.map((area, index) => (
              <div key={area.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-inchemco-light p-8 flex items-start justify-center">
                    <div className="text-center">
                      {area.icon}
                      <h3 className="mt-4 text-xl font-bold text-inchemco-dark">
                        {area.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3 p-8">
                    {area.description && (
                      <p className="mb-4 text-gray-700">{area.description}</p>
                    )}
                    <ul className="space-y-2">
                      {area.items.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <svg 
                            className="h-5 w-5 text-inchemco-primary mt-0.5 mr-2 flex-shrink-0" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor" 
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <Link href={`/products/${area.id}`}>
                        <Button variant="outline" className="border-inchemco-primary text-inchemco-primary hover:bg-inchemco-primary/10">
                          Xem sản phẩm
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Brand Partners */}
      <section className="py-16">
        <div className="neura-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-inchemco-dark">Đối tác của chúng tôi</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              INCHEMCO là đối tác phân phối độc quyền của nhiều thương hiệu uy tín trên thế giới tại thị trường Việt Nam.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center">
              <div className="relative h-20 w-full mb-6">
                <FallbackImage
                  src="/images/inchemco/brands/btl-logo.png"
                  alt="BTL Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-medium mb-2 text-inchemco-dark">BTL</h3>
              <p className="text-center text-gray-600">
                Nhà sản xuất hàng đầu về thiết bị vật lý trị liệu và chẩn đoán tim phổi đến từ Anh Quốc.
              </p>
            </div>
            
            {/* Placeholder for partner 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center">
              <div className="h-20 w-full mb-6 flex items-center justify-center">
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-gray-400">
                  Logo
                </div>
              </div>
              <h3 className="text-lg font-medium mb-2 text-inchemco-dark">Partner 2</h3>
              <p className="text-center text-gray-600">
                Thông tin về đối tác 2 và lĩnh vực cung cấp sản phẩm.
              </p>
            </div>
            
            {/* Placeholder for partner 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center">
              <div className="h-20 w-full mb-6 flex items-center justify-center">
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-gray-400">
                  Logo
                </div>
              </div>
              <h3 className="text-lg font-medium mb-2 text-inchemco-dark">Partner 3</h3>
              <p className="text-center text-gray-600">
                Thông tin về đối tác 3 và lĩnh vực cung cấp sản phẩm.
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link href="/partners">
              <Button className="bg-inchemco-primary hover:bg-inchemco-primary-hover text-white">
                Xem tất cả đối tác
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 bg-inchemco-dark text-white">
        <div className="neura-container">
          <div className="md:flex items-center gap-8">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Thông tin liên hệ</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg 
                    className="h-6 w-6 text-inchemco-accent mt-1 flex-shrink-0" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-medium">Trụ sở:</p>
                    <p>94 Phó Đức Chính, P. Trúc Bạch, Q. Ba Đình, TP. Hà Nội</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg 
                    className="h-6 w-6 text-inchemco-accent mt-1 flex-shrink-0" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-medium">Văn phòng:</p>
                    <p>Nhà C24/X1 ngõ 14 phố Huy Du, phường Cầu Diễn, Nam Từ Liêm, Hà Nội</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg 
                    className="h-6 w-6 text-inchemco-accent mt-1 flex-shrink-0" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-medium">Điện thoại:</p>
                    <p>024.3926 2699</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg 
                    className="h-6 w-6 text-inchemco-accent mt-1 flex-shrink-0" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-medium">Email:</p>
                    <p>thietbiyte@vnn.vn</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg 
                    className="h-6 w-6 text-inchemco-accent mt-1 flex-shrink-0" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-medium">Giờ làm việc:</p>
                    <p>Thứ 2 - Thứ 6: 8:00 - 17:30</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/3">
              <Link href="/contact">
                <Button size="lg" className="w-full bg-inchemco-accent hover:bg-inchemco-accent/90 text-white">
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