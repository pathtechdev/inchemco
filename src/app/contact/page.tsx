import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Liên hệ - INCHEMCO | Thiết bị y tế & Hóa chất chuyên dụng",
  description: "Liên hệ với Công ty CP Xuất nhập khẩu Thiết bị và Hóa chất Việt Nam (INCHEMCO) để được tư vấn và báo giá về các sản phẩm thiết bị y tế và hóa chất chuyên dụng.",
};

export default function ContactPage() {
  return (
    <main className="bg-white pb-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-inchemco-dark to-inchemco-dark-secondary text-white">
        <div className="neura-container">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Liên hệ với chúng tôi</h1>
            <p className="text-xl opacity-90">
              Quý khách có nhu cầu tư vấn và báo giá, vui lòng liên hệ với chúng tôi qua thông tin bên dưới hoặc gửi yêu cầu trực tiếp qua mẫu đơn.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16">
        <div className="neura-container">
          <div className="md:flex gap-10">
            {/* Contact Information */}
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-2xl font-bold mb-6 text-inchemco-dark">Thông tin liên hệ</h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-inchemco-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg 
                        className="w-6 h-6 text-inchemco-primary" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2 text-inchemco-dark">Trụ sở</h3>
                      <p className="text-gray-600">94 Phó Đức Chính, P. Trúc Bạch, Q. Ba Đình, TP. Hà Nội</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-inchemco-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg 
                        className="w-6 h-6 text-inchemco-primary" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2 text-inchemco-dark">Văn phòng</h3>
                      <p className="text-gray-600">Nhà C24/X1 ngõ 14 phố Huy Du, phường Cầu Diễn, Nam Từ Liêm, Hà Nội</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-inchemco-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg 
                        className="w-6 h-6 text-inchemco-primary" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2 text-inchemco-dark">Điện thoại</h3>
                      <div className="space-y-1">
                        <p className="text-gray-600">Văn phòng: 024.3926 2699</p>
                        <p className="text-gray-600">Hotline: 0986.621.314 (Mr. Tuân)</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-inchemco-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg 
                        className="w-6 h-6 text-inchemco-primary" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2 text-inchemco-dark">Email</h3>
                      <div className="space-y-1">
                        <p className="text-gray-600">thietbiyte@vnn.vn</p>
                        <p className="text-gray-600">inchemco@hotmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-inchemco-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg 
                        className="w-6 h-6 text-inchemco-primary" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2 text-inchemco-dark">Giờ làm việc</h3>
                      <p className="text-gray-600">Thứ Hai - Thứ Sáu: 8:00 - 17:30</p>
                      <p className="text-gray-600">Thứ Bảy, Chủ Nhật & Ngày lễ: Nghỉ</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="md:w-1/2">
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                <h2 className="text-2xl font-bold mb-6 text-inchemco-dark">Gửi yêu cầu tư vấn</h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">Họ</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-inchemco-primary focus:border-transparent"
                        placeholder="Nhập họ của bạn" 
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Tên</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-inchemco-primary focus:border-transparent"
                        placeholder="Nhập tên của bạn" 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-inchemco-primary focus:border-transparent"
                      placeholder="example@email.com" 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-inchemco-primary focus:border-transparent"
                      placeholder="Nhập số điện thoại của bạn" 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Tên công ty/đơn vị</label>
                    <input 
                      type="text" 
                      id="company" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-inchemco-primary focus:border-transparent"
                      placeholder="Nhập tên công ty/đơn vị của bạn" 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-1">Sản phẩm quan tâm</label>
                    <select 
                      id="product" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-inchemco-primary focus:border-transparent"
                    >
                      <option value="">-- Chọn loại sản phẩm --</option>
                      <option value="rehab">Thiết bị vật lý trị liệu</option>
                      <option value="cardio">Thiết bị tim mạch</option>
                      <option value="lab">Thiết bị xét nghiệm</option>
                      <option value="chemicals">Hóa chất xét nghiệm</option>
                      <option value="gas">Thiết bị phát hiện khí</option>
                      <option value="other">Khác</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Nội dung yêu cầu</label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-inchemco-primary focus:border-transparent"
                      placeholder="Vui lòng cung cấp chi tiết về yêu cầu của bạn"
                    ></textarea>
                  </div>
                  
                  <div>
                    <Button type="submit" className="w-full bg-inchemco-primary hover:bg-inchemco-primary-hover text-white py-3">
                      Gửi yêu cầu
                    </Button>
                    <p className="mt-2 text-sm text-gray-500">
                      Chúng tôi sẽ liên hệ lại trong vòng 24 giờ làm việc.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="neura-container">
          <h2 className="text-2xl font-bold mb-8 text-inchemco-dark">Bản đồ</h2>
          
          <div className="bg-white p-4 rounded-xl shadow-sm overflow-hidden">
            <div className="aspect-video w-full">
              {/* Placeholder for Google Maps iframe */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <svg 
                    className="w-16 h-16 text-gray-400 mx-auto mb-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-gray-500">Google Maps sẽ được hiển thị tại đây</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 bg-inchemco-dark text-white">
        <div className="neura-container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Đội ngũ INCHEMCO luôn sẵn sàng hỗ trợ bạn</h2>
            <p className="text-lg mb-8 text-gray-200">
              Với kinh nghiệm nhiều năm trong lĩnh vực thiết bị y tế và hóa chất chuyên dụng, 
              chúng tôi cam kết cung cấp dịch vụ tư vấn chuyên nghiệp và giải pháp tối ưu cho mọi nhu cầu của quý khách.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link href="tel:0986621314">
                <Button size="lg" className="bg-inchemco-accent hover:bg-inchemco-accent/90 text-white">
                  <svg 
                    className="w-5 h-5 mr-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Gọi ngay: 0986.621.314
                </Button>
              </Link>
              <Link href="mailto:thietbiyte@vnn.vn">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <svg 
                    className="w-5 h-5 mr-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Gửi email
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 