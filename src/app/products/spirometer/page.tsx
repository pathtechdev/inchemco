import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Phế dung kế - INCHEMCO",
  description: "Phế dung kế cao cấp từ BTL - Thiết bị chẩn đoán chức năng phổi hiện đại, cung cấp kết quả chính xác và đáng tin cậy.",
};

export default function SpirometryPage() {
  return (
    <main className="bg-gray-50 pb-16">
      {/* Breadcrumb */}
      <div className="bg-white py-3 shadow-sm">
        <div className="neura-container">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-gray-500 hover:text-inchemco-primary">
              Trang chủ
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/products/cardio-pulmonary" className="text-gray-500 hover:text-inchemco-primary">
              Điện tim và phế dung
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-inchemco-primary font-medium">Phế dung kế</span>
          </div>
        </div>
      </div>

      {/* Category Header */}
      <div className="bg-inchemco-dark text-white py-12">
        <div className="neura-container">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Phế dung kế</h1>
          <p className="text-lg opacity-90 max-w-3xl">
            Thiết bị chẩn đoán chức năng phổi hiện đại, cung cấp kết quả chính xác và đáng tin cậy. 
            INCHEMCO tự hào là nhà cung cấp các thiết bị phế dung kế chất lượng cao từ BTL - Anh Quốc.
          </p>
        </div>
      </div>
      
      {/* Products List */}
      <div className="neura-container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product 1 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="md:flex">
              <div className="md:w-1/2 h-64 md:h-auto relative">
                <Image
                  src="/images/medical/spirometer-1.jpg"
                  alt="Phế dung kế máy tính"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 md:w-1/2">
                <h2 className="text-xl font-semibold mb-3 text-inchemco-dark">Phế dung kế máy tính</h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Thiết bị chẩn đoán chức năng phổi hiện đại, cung cấp kết quả chính xác và đáng tin cậy.
                </p>
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-500">Hãng sản xuất:</p>
                  <p>BTL/ Anh Quốc</p>
                </div>
                <div className="flex justify-between items-center">
                  <Link href="/products/spirometer/btl-spirometer">
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
          </div>

          {/* Product 2 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="md:flex">
              <div className="md:w-1/2 h-64 md:h-auto relative">
                <Image
                  src="/images/medical/spirometer-2.jpg"
                  alt="Phế dung kế BTL-08 Spiro Pro"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 md:w-1/2">
                <h2 className="text-xl font-semibold mb-3 text-inchemco-dark">Phế dung kế BTL-08 Spiro Pro</h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Phiên bản nâng cấp với các tính năng chuyên nghiệp, đáp ứng nhu cầu của các bệnh viện và phòng khám chuyên sâu.
                </p>
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-500">Hãng sản xuất:</p>
                  <p>BTL/ Anh Quốc</p>
                </div>
                <div className="flex justify-between items-center">
                  <Link href="/products/spirometer/btl-08-spiro-pro">
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
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-12">
        <div className="neura-container">
          <h2 className="text-2xl font-semibold mb-8 text-center">Tại sao chọn phế dung kế BTL?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-gray-50">
              <div className="w-12 h-12 bg-inchemco-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-inchemco-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Độ chính xác cao</h3>
              <p className="text-gray-600">
                Tuân thủ tiêu chuẩn ATS/ERS, cung cấp kết quả chẩn đoán chính xác và đáng tin cậy.
              </p>
            </div>
            
            <div className="p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-gray-50">
              <div className="w-12 h-12 bg-inchemco-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-inchemco-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Phần mềm toàn diện</h3>
              <p className="text-gray-600">
                Phần mềm hiện đại với giao diện dễ sử dụng, hỗ trợ nhiều phép đo và báo cáo chi tiết.
              </p>
            </div>
            
            <div className="p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-gray-50">
              <div className="w-12 h-12 bg-inchemco-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-inchemco-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Dễ sử dụng</h3>
              <p className="text-gray-600">
                Thiết kế thân thiện với người dùng, dễ dàng sử dụng cho cả bác sĩ và kỹ thuật viên.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Section */}
      <div className="neura-container py-12">
        <div className="bg-inchemco-dark rounded-xl overflow-hidden shadow-lg">
          <div className="md:flex">
            <div className="md:w-2/3 p-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">Yêu cầu tư vấn chi tiết</h2>
              <p className="text-gray-300 mb-6">
                Để nhận tư vấn chuyên sâu và yêu cầu báo giá sản phẩm, vui lòng liên hệ với chúng tôi.
                Đội ngũ chuyên viên INCHEMCO sẽ hỗ trợ quý khách một cách nhanh chóng và hiệu quả.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-inchemco-accent shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="text-white font-medium">Email:</p>
                    <a href="mailto:thietbiyte@vnn.vn" className="text-gray-300 hover:text-inchemco-accent">thietbiyte@vnn.vn</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-inchemco-accent shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="text-white font-medium">Hotline:</p>
                    <p className="text-gray-300">024.3926 2699 - 0986621314</p>
                  </div>
                </div>
              </div>
              
              <Link href="/contact">
                <Button className="mt-6 bg-inchemco-accent hover:bg-opacity-90 text-white">
                  Gửi yêu cầu báo giá
                </Button>
              </Link>
            </div>
            
            <div className="md:w-1/3 bg-inchemco-dark-secondary hidden md:flex items-center justify-center p-8">
              <Image
                src="/images/inchemco/btl-logo.png"
                alt="BTL Logo"
                width={200}
                height={100}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 