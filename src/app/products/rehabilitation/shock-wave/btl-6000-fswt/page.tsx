import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FallbackImage } from "@/components/ui/fallback-image";

export const metadata = {
  title: "BTL-6000 FSWT - Xung kích hội tụ | INCHEMCO",
  description: "BTL-6000 FSWT - Thiết bị xung kích hội tụ hiện đại giúp điều trị hiệu quả các chứng đau cơ xương khớp, gai gót, viêm gân và nhiều vấn đề khác.",
};

export default function BTL6000FSWTPage() {
  // Thông số kỹ thuật của thiết bị
  const specifications = [
    { name: "Hãng sản xuất", value: "BTL / Anh Quốc" },
    { name: "Model", value: "BTL-6000 FSWT" },
    { name: "Công nghệ", value: "Focused Shock Wave Therapy (Xung kích hội tụ)" },
    { name: "Năng lượng tối đa", value: "0.63 mJ/mm²" },
    { name: "Tần số", value: "1-22 Hz" },
    { name: "Áp suất", value: "0.05-0.55 MPa" },
    { name: "Màn hình", value: "8.4\" màn hình cảm ứng màu" },
    { name: "Bộ nhớ", value: "Lưu trữ dữ liệu bệnh nhân và điều trị" },
    { name: "Pin", value: "Tùy chọn (giúp di chuyển linh hoạt)" },
    { name: "Kích thước", value: "320 x 190 x 280 mm" },
    { name: "Trọng lượng", value: "5 kg" },
    { name: "Phụ kiện chuẩn", value: "Đầu điều trị 15mm, 15mm nhiệt độ cao, túi dầu" },
    { name: "Chứng nhận", value: "CE Medical, ISO 13485" }
  ];

  // Ứng dụng lâm sàng
  const applications = [
    {
      name: "Gai gót chân (Plantar Fasciitis)",
      description: "Điều trị hiệu quả tình trạng viêm và đau do gai gót, giúp giảm đau và cải thiện chức năng vận động."
    },
    {
      name: "Viêm điểm bám gân Achilles",
      description: "Điều trị viêm gân Achilles mạn tính, giảm đau và kích thích quá trình lành thương tự nhiên."
    },
    {
      name: "Viêm mỏm trên lồi cầu (Tennis Elbow)",
      description: "Điều trị hiệu quả các trường hợp viêm mỏm trên lồi cầu xương cánh tay, giúp giảm đau và tăng cường chức năng."
    },
    {
      name: "Bệnh lý vôi hóa gân vai",
      description: "Xử lý hiệu quả tình trạng vôi hóa gân vai, làm giảm đau và cải thiện phạm vi vận động của khớp vai."
    },
    {
      name: "Đau điểm bám gân xương bánh chè",
      description: "Điều trị đau và viêm ở điểm bám gân xương bánh chè, giúp cải thiện chức năng vận động."
    }
  ];

  // Ưu điểm của BTL-6000 FSWT
  const advantages = [
    "Hiệu quả cao trong điều trị - kết quả rõ rệt sau 3-5 buổi điều trị",
    "Giảm đau nhanh chóng và hiệu quả lâu dài",
    "Rút ngắn thời gian điều trị và phục hồi",
    "Không xâm lấn, không cần phẫu thuật",
    "Giao diện đồ họa thân thiện, dễ sử dụng",
    "Tích hợp sẵn nhiều giao thức điều trị",
    "Thiết kế nhỏ gọn, di chuyển linh hoạt",
    "Không cần bảo trì thường xuyên"
  ];

  return (
    <main className="bg-white pb-16">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-3 border-b border-gray-100">
        <div className="neura-container">
          <div className="flex flex-wrap items-center text-sm">
            <Link href="/" className="text-gray-500 hover:text-inchemco-primary">
              Trang chủ
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/products" className="text-gray-500 hover:text-inchemco-primary">
              Sản phẩm
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/products/rehabilitation" className="text-gray-500 hover:text-inchemco-primary">
              Thiết bị vật lý trị liệu
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/products/rehabilitation/shock-wave" className="text-gray-500 hover:text-inchemco-primary">
              Xung kích hội tụ
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-inchemco-primary font-medium">BTL-6000 FSWT</span>
          </div>
        </div>
      </div>

      {/* Product Header */}
      <section className="bg-white py-8">
        <div className="neura-container">
          <div className="md:flex">
            {/* Product Image */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
                <div className="relative h-80 md:h-96">
                  <FallbackImage
                    src="/images/products/shock-wave/btl-6000-fswt.jpg"
                    alt="BTL-6000 FSWT"
                    fill
                    className="object-contain"
                    fallbackSrc="/images/products/shock-wave/btl-6000-fswt.svg"
                  />
                </div>
              </div>
              
              <div className="mt-4 flex justify-center">
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <div className="relative h-12 w-32">
                    <FallbackImage
                      src="/images/inchemco/brands/btl-logo.png"
                      alt="BTL Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Product Info */}
            <div className="md:w-1/2 md:pl-8">
              <h1 className="text-3xl font-bold text-inchemco-dark mb-4">BTL-6000 FSWT</h1>
              <p className="text-xl text-gray-600 mb-2">Thiết bị xung kích hội tụ</p>
              
              <div className="border-t border-b border-gray-100 py-4 my-6">
                <p className="text-gray-700 mb-4">
                  Thiết bị xung kích hội tụ (Focused Shock Wave Therapy) tiên tiến, được ứng dụng rộng rãi trong điều trị các vấn đề cơ xương khớp, đặc biệt hiệu quả đối với các chứng đau mạn tính như gai gót, viêm gân, viêm khớp và nhiều bệnh lý khác.
                </p>
                <p className="text-gray-700">
                  BTL-6000 FSWT sử dụng công nghệ sóng xung kích tập trung vào một điểm cụ thể, giúp giảm đau nhanh chóng, kích thích quá trình phục hồi tự nhiên của cơ thể và rút ngắn thời gian điều trị.
                </p>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-green-500" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Hiệu quả cao trong điều trị đau cơ xương khớp</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-green-500" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Giao diện người dùng thân thiện, dễ sử dụng</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-green-500" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Thiết kế nhỏ gọn, di chuyển linh hoạt</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-green-500" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Sản xuất tại Anh Quốc, tiêu chuẩn CE Medical</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="flex-1">
                  <Button className="w-full bg-inchemco-primary hover:bg-inchemco-primary-hover text-white">
                    Yêu cầu báo giá
                  </Button>
                </Link>
                <Link href="tel:0986621314" className="flex-1">
                  <Button variant="outline" className="w-full border-inchemco-primary text-inchemco-primary hover:bg-inchemco-primary/10">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 mr-2" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Hotline: 0986.621.314
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tabs Section */}
      <section className="py-12 bg-gray-50">
        <div className="neura-container">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Tabs Content */}
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6 text-inchemco-dark">Thông số kỹ thuật</h2>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <tbody className="divide-y divide-gray-100">
                    {specifications.map((spec, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 w-1/3">
                          {spec.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Applications Section */}
      <section className="py-12">
        <div className="neura-container">
          <h2 className="text-2xl font-bold mb-6 text-inchemco-dark">Ứng dụng lâm sàng</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-medium mb-3 text-inchemco-dark">{app.name}</h3>
                <p className="text-gray-600">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Advantages Section */}
      <section className="py-12 bg-inchemco-dark text-white">
        <div className="neura-container">
          <h2 className="text-2xl font-bold mb-8 text-center">Ưu điểm của BTL-6000 FSWT</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-inchemco-accent flex items-center justify-center flex-shrink-0">
                  <span className="font-bold">{index + 1}</span>
                </div>
                <div>
                  <p className="text-lg">{advantage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 bg-gray-50">
        <div className="neura-container">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/3 p-8">
                <h2 className="text-2xl font-bold mb-4 text-inchemco-dark">Cần tư vấn chi tiết?</h2>
                <p className="text-gray-700 mb-6">
                  Để nhận tư vấn chuyên sâu về thiết bị BTL-6000 FSWT và các ứng dụng lâm sàng, vui lòng liên hệ với đội ngũ chuyên viên INCHEMCO.
                  Chúng tôi sẵn sàng hỗ trợ quý khách lựa chọn giải pháp phù hợp nhất với nhu cầu của cơ sở y tế.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 text-inchemco-primary" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="font-medium">Hotline:</p>
                      <p>0986.621.314 - 024.3926 2699</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 text-inchemco-primary" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-medium">Email:</p>
                      <p>thietbiyte@vnn.vn</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Link href="/contact">
                    <Button className="bg-inchemco-primary hover:bg-inchemco-primary-hover text-white">
                      Liên hệ ngay
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="md:w-1/3 bg-inchemco-primary/10 flex items-center justify-center p-8 hidden md:block">
                <div className="relative h-full w-full">
                  <FallbackImage
                    src="/images/inchemco/brands/btl-logo.png"
                    alt="BTL Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Products */}
      <section className="py-12">
        <div className="neura-container">
          <h2 className="text-2xl font-bold mb-6 text-inchemco-dark">Sản phẩm liên quan</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Related Product 1 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-4">
                <div className="relative h-48 mb-4">
                  <div className="absolute inset-0 bg-gray-50 flex items-center justify-center">
                    <p className="text-gray-400">Sản phẩm liên quan</p>
                  </div>
                </div>
                <h3 className="text-lg font-medium mb-2 text-inchemco-dark">Điện trị liệu BTL-4000</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  Thiết bị điện trị liệu đa năng với nhiều tính năng hiện đại
                </p>
                <Link href="/products/rehabilitation/electrotherapy">
                  <Button variant="outline" className="w-full border-inchemco-primary text-inchemco-primary hover:bg-inchemco-primary/10">
                    Xem chi tiết
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Related Product 2 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-4">
                <div className="relative h-48 mb-4">
                  <div className="absolute inset-0 bg-gray-50 flex items-center justify-center">
                    <p className="text-gray-400">Sản phẩm liên quan</p>
                  </div>
                </div>
                <h3 className="text-lg font-medium mb-2 text-inchemco-dark">Siêu âm trị liệu BTL-4000</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  Thiết bị siêu âm trị liệu hiện đại với nhiều tùy chọn đầu dò
                </p>
                <Link href="/products/rehabilitation/ultrasound">
                  <Button variant="outline" className="w-full border-inchemco-primary text-inchemco-primary hover:bg-inchemco-primary/10">
                    Xem chi tiết
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Related Product 3 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-4">
                <div className="relative h-48 mb-4">
                  <div className="absolute inset-0 bg-gray-50 flex items-center justify-center">
                    <p className="text-gray-400">Sản phẩm liên quan</p>
                  </div>
                </div>
                <h3 className="text-lg font-medium mb-2 text-inchemco-dark">Laser trị liệu</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  Thiết bị laser trị liệu tiên tiến cho các ứng dụng phục hồi chức năng
                </p>
                <Link href="/products/rehabilitation/laser">
                  <Button variant="outline" className="w-full border-inchemco-primary text-inchemco-primary hover:bg-inchemco-primary/10">
                    Xem chi tiết
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