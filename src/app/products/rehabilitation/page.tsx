import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Thiết bị vật lý trị liệu phục hồi chức năng - INCHEMCO | Nhà nhập khẩu thiết bị y tế chính hãng",
  description: "Cung cấp các thiết bị vật lý trị liệu, phục hồi chức năng cao cấp từ các thương hiệu nổi tiếng như BTL, Tecnomed, EMS và nhiều hãng khác. Sản phẩm chất lượng, giá tốt, hậu mãi chu đáo.",
};

export default function RehabilitationPage() {
  // Danh sách danh mục con
  const subcategories = [
    {
      id: "shock-wave",
      name: "Xung kích hội tụ",
      image: "/images/categories/rehabilitation/shock-wave.jpg",
      description: "Thiết bị sử dụng sóng xung kích hội tụ (Focused Shock Wave Therapy) nhằm điều trị các rối loạn cơ xương khớp, giảm đau và kích thích quá trình phục hồi tự nhiên.",
      productCount: 1,
      url: "/products/rehabilitation/shock-wave"
    },
    {
      id: "ultrasound",
      name: "Siêu âm trị liệu",
      image: "/images/categories/rehabilitation/ultrasound.jpg",
      description: "Sử dụng năng lượng sóng siêu âm để giảm đau, tăng lưu thông máu và thúc đẩy quá trình chữa lành mô mềm, được ứng dụng rộng rãi trong điều trị vật lý trị liệu.",
      productCount: 3,
      url: "/products/rehabilitation/ultrasound"
    },
    {
      id: "electrotherapy",
      name: "Điện trị liệu",
      image: "/images/categories/rehabilitation/electrotherapy.jpg",
      description: "Các thiết bị sử dụng dòng điện tần số khác nhau để kích thích cơ, giảm đau, hỗ trợ chữa lành vết thương và các ứng dụng vật lý trị liệu khác.",
      productCount: 5,
      url: "/products/rehabilitation/electrotherapy"
    },
    {
      id: "laser-therapy",
      name: "Laser trị liệu",
      image: "/images/categories/rehabilitation/laser-therapy.jpg",
      description: "Sử dụng ánh sáng laser công suất thấp để thúc đẩy quá trình phục hồi mô, giảm viêm và giảm đau cho nhiều tình trạng bệnh lý khác nhau.",
      productCount: 2,
      url: "/products/rehabilitation/laser-therapy"
    },
    {
      id: "traction-therapy",
      name: "Kéo giãn cột sống",
      image: "/images/categories/rehabilitation/traction-therapy.jpg",
      description: "Thiết bị chuyên dụng để kéo giãn cột sống, giảm áp lực lên đĩa đệm và rễ thần kinh, hỗ trợ điều trị các vấn đề về cột sống.",
      productCount: 2,
      url: "/products/rehabilitation/traction-therapy"
    },
    {
      id: "magnetic-therapy",
      name: "Từ trường trị liệu",
      image: "/images/categories/rehabilitation/magnetic-therapy.jpg",
      description: "Sử dụng từ trường xung để thúc đẩy tái tạo mô, giảm đau và hỗ trợ quá trình chữa lành cho nhiều tình trạng bệnh lý.",
      productCount: 1,
      url: "/products/rehabilitation/magnetic-therapy"
    }
  ];

  // Thương hiệu nổi bật
  const featuredBrands = [
    { name: "BTL", logo: "/images/brands/btl.png", country: "Anh Quốc" },
    { name: "Tecnomed", logo: "/images/brands/tecnomed.png", country: "Italia" },
    { name: "EMS", logo: "/images/brands/ems.png", country: "Thụy Sĩ" },
    { name: "Zimmer", logo: "/images/brands/zimmer.png", country: "Đức" }
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
            <span className="text-inchemco-primary font-medium">Thiết bị vật lý trị liệu phục hồi chức năng</span>
          </div>
        </div>
      </div>

      {/* Category Header */}
      <section className="py-12 bg-gradient-to-r from-inchemco-dark to-inchemco-dark-secondary text-white">
        <div className="neura-container">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Thiết bị vật lý trị liệu phục hồi chức năng</h1>
            <p className="text-lg opacity-90">
              INCHEMCO tự hào cung cấp các thiết bị vật lý trị liệu và phục hồi chức năng cao cấp từ các thương hiệu hàng đầu thế giới.
              Sản phẩm của chúng tôi được thiết kế để hỗ trợ các chuyên gia y tế trong việc điều trị và phục hồi chức năng cho bệnh nhân một cách hiệu quả nhất.
            </p>
          </div>
        </div>
      </section>

      {/* Subcategories Grid */}
      <section className="py-12">
        <div className="neura-container">
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-2 text-inchemco-dark">Danh mục sản phẩm</h2>
            <div className="w-20 h-1 bg-inchemco-primary"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subcategories.map((category) => (
              <Link 
                key={category.id} 
                href={category.url}
                className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100 overflow-hidden flex flex-col h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-inchemco-dark group-hover:text-inchemco-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    {category.description}
                  </p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-sm text-gray-500">{category.productCount} sản phẩm</span>
                    <span className="text-inchemco-primary font-medium flex items-center group-hover:translate-x-1 transition-transform">
                      Xem thêm
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 ml-1" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Brands */}
      <section className="py-12 bg-gray-50">
        <div className="neura-container">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold mb-2 text-inchemco-dark">Thương hiệu nổi bật</h2>
            <div className="w-20 h-1 bg-inchemco-primary mx-auto"></div>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              INCHEMCO tự hào là đối tác phân phối chính thức của các thương hiệu thiết bị vật lý trị liệu hàng đầu thế giới, 
              đảm bảo mang đến những sản phẩm chính hãng, chất lượng cao với dịch vụ hậu mãi chu đáo.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredBrands.map((brand, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center">
                <div className="relative h-16 w-full mb-4">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-bold text-lg text-inchemco-dark">{brand.name}</h3>
                <p className="text-gray-500 text-sm">{brand.country}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12">
        <div className="neura-container">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold mb-2 text-inchemco-dark">Lợi ích khi chọn INCHEMCO</h2>
            <div className="w-20 h-1 bg-inchemco-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-inchemco-primary/10 rounded-full flex items-center justify-center mb-4">
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
              <h3 className="text-lg font-medium mb-2 text-inchemco-dark">Sản phẩm chính hãng</h3>
              <p className="text-gray-600">
                Tất cả sản phẩm đều được nhập khẩu trực tiếp từ nhà sản xuất, có đầy đủ giấy tờ chứng nhận xuất xứ và đăng ký lưu hành tại Việt Nam.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-inchemco-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6 text-inchemco-primary" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2 text-inchemco-dark">Tư vấn chuyên sâu</h3>
              <p className="text-gray-600">
                Đội ngũ chuyên viên giàu kinh nghiệm sẵn sàng tư vấn, hỗ trợ lựa chọn thiết bị phù hợp với nhu cầu và ngân sách của cơ sở y tế.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-inchemco-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6 text-inchemco-primary" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2 text-inchemco-dark">Hậu mãi chu đáo</h3>
              <p className="text-gray-600">
                Bảo hành chính hãng dài hạn, đội ngũ kỹ thuật sẵn sàng hỗ trợ, bảo trì và sửa chữa thiết bị tại chỗ nhanh chóng.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-inchemco-dark text-white">
        <div className="neura-container">
          <div className="md:flex items-center gap-8">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h2 className="text-2xl font-bold mb-4">Cần tư vấn về thiết bị vật lý trị liệu?</h2>
              <p className="text-gray-200">
                Liên hệ với đội ngũ INCHEMCO để nhận tư vấn chuyên sâu về sản phẩm phù hợp với nhu cầu của cơ sở y tế.
                Chúng tôi cam kết mang đến giải pháp tối ưu với chi phí hợp lý nhất.
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