import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Sản phẩm - INCHEMCO | Thiết bị y tế & Hóa chất chuyên dụng",
  description: "Khám phá danh mục đầy đủ các sản phẩm thiết bị y tế và hóa chất chất lượng cao của INCHEMCO - từ thiết bị vật lý trị liệu, máy điện tim, phế dung kế đến máy xét nghiệm sinh hóa.",
};

export default function ProductsPage() {
  // Danh mục sản phẩm chính
  const mainCategories = [
    {
      id: "rehabilitation",
      title: "Thiết bị vật lý trị liệu phục hồi chức năng",
      image: "/images/products/rehabilitation-hero.jpg",
      description: "Thiết bị hiện đại hỗ trợ phục hồi chức năng vận động, giảm đau và cải thiện chất lượng cuộc sống cho bệnh nhân.",
      subcategories: [
        { name: "Điện trị liệu", slug: "electrotherapy" },
        { name: "Xung kích hội tụ", slug: "shock-wave" },
        { name: "Từ trường siêu dẫn", slug: "magnetic-field" },
        { name: "Từ trường trị liệu", slug: "magnetic" },
        { name: "Siêu âm trị liệu", slug: "ultrasound" },
        { name: "Laser trị liệu", slug: "laser" },
        { name: "Bộ kết hợp", slug: "combination" },
        { name: "Kéo giãn trị liệu - kéo giãn cột sống", slug: "traction" },
        { name: "CPMOTION - Liệu pháp vận động thụ động liên tục", slug: "cpmotion" },
        { name: "Thấu nhiệt sóng ngắn", slug: "shortwave" },
        { name: "Thấu nhiệt vi sóng", slug: "microwave" },
        { name: "Liệu pháp tần số Radio nhắm đích", slug: "radio-frequency" },
        { name: "Laser cường độ cao", slug: "high-intensity-laser" },
        { name: "Liệu pháp sóng xung kích", slug: "shockwave" },
        { name: "Dẫn lưu bạch huyết", slug: "lymphatic-drainage" },
        { name: "Thủy trị liệu", slug: "hydrotherapy" },
        { name: "Nhiệt trị liệu", slug: "thermotherapy" },
        { name: "Giường và Ghế", slug: "beds-and-chairs" },
      ]
    },
    {
      id: "cardio-pulmonary",
      title: "Điện tim và phế dung",
      image: "/images/products/cardio-pulmonary-hero.jpg",
      description: "Thiết bị điện tim và phế dung kế chất lượng cao, giúp chẩn đoán chính xác các bệnh lý tim mạch và đường hô hấp.",
      subcategories: [
        { name: "Điện tim nghỉ (Điện tim)", slug: "ecg" },
        { name: "Phế dung kế", slug: "spirometer" },
        { name: "Phần mềm tim phổi", slug: "cardio-software" },
        { name: "Điện tim gắng sức", slug: "stress-ecg" },
        { name: "Holter điện tim", slug: "holter-ecg" },
        { name: "Holter huyết áp", slug: "holter-bp" },
      ]
    },
    {
      id: "lab-equipment",
      title: "Thiết bị và vật tư xét nghiệm",
      image: "/images/products/lab-equipment-hero.jpg",
      description: "Máy xét nghiệm sinh hóa, máy xét nghiệm nước tiểu và hóa chất xét nghiệm chất lượng cao, đáp ứng nhu cầu chẩn đoán.",
      subcategories: [
        { name: "Máy xét nghiệm sinh hóa", slug: "biochemistry" },
        { name: "Máy xét nghiệm nước tiểu", slug: "urine-analyzer" },
        { name: "Hóa chất xét nghiệm", slug: "reagents" },
        { name: "Hóa chất xét nghiệm sinh hóa Biotecnica", slug: "biotecnica" },
        { name: "Hóa chất xét nghiệm đông máu", slug: "coagulation" },
        { name: "Hóa chất xét nghiệm huyết học", slug: "hematology" },
        { name: "Hóa chất xét nghiệm miễn dịch", slug: "immunology" },
        { name: "Hóa chất xét nghiệm nước tiểu", slug: "urine-reagents" },
        { name: "Test thử nhanh", slug: "rapid-test" },
      ]
    },
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-inchemco-light to-white py-16 md:py-24">
        <div className="neura-container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-inchemco-dark mb-6">Sản phẩm</h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              INCHEMCO cung cấp thiết bị y tế và hóa chất cao cấp, phục vụ ngành y tế Việt Nam với sản phẩm chất lượng từ các thương hiệu uy tín thế giới.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-inchemco-primary hover:bg-inchemco-primary-hover text-white">
                <Link href="#categories">Khám phá danh mục</Link>
              </Button>
              <Button variant="outline" className="border-inchemco-primary text-inchemco-primary hover:bg-inchemco-primary/10">
                <Link href="/contact">Liên hệ tư vấn</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Categories Section */}
      <section className="py-16 bg-white" id="categories">
        <div className="neura-container">
          <h2 className="text-3xl font-bold text-center mb-16 text-inchemco-dark">Danh mục sản phẩm</h2>
          
          <div className="grid grid-cols-1 gap-16">
            {mainCategories.map((category, index) => (
              <div key={category.id} className={`flex flex-col lg:flex-row gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2 relative h-80 md:h-96 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-inchemco-primary/10"></div>
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="lg:w-1/2">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-inchemco-dark">
                    {category.title}
                  </h3>
                  <p className="text-gray-700 mb-6">{category.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 mb-6">
                    {category.subcategories.map((subcat) => (
                      <Link 
                        key={subcat.slug} 
                        href={`/products/${category.id}/${subcat.slug}`}
                        className="flex items-center py-2 border-b border-gray-100 hover:text-inchemco-primary group"
                      >
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-4 w-4 mr-2 text-inchemco-primary group-hover:translate-x-1 transition-transform" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        {subcat.name}
                      </Link>
                    ))}
                  </div>
                  
                  <Link href={`/products/${category.id}`}>
                    <Button className="bg-inchemco-secondary hover:bg-inchemco-secondary/90 text-white">
                      Xem tất cả {category.title}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-gray-50">
        <div className="neura-container">
          <h2 className="text-3xl font-bold text-center mb-6 text-inchemco-dark">Đối tác thương hiệu</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            INCHEMCO tự hào là đối tác phân phối độc quyền của các thương hiệu thiết bị y tế uy tín hàng đầu thế giới tại thị trường Việt Nam.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center justify-center h-32">
                <Image
                  src={i === 0 ? "/images/inchemco/btl-logo.png" : `/images/brands/brand-${i+1}.png`}
                  alt={`Brand ${i+1}`}
                  width={160}
                  height={80}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-inchemco-dark text-white">
        <div className="neura-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Cần tư vấn về sản phẩm?</h2>
            <p className="text-lg mb-8 text-gray-200">
              Đội ngũ chuyên viên INCHEMCO sẵn sàng hỗ trợ và tư vấn chi tiết về các sản phẩm phù hợp nhất với nhu cầu của quý khách.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-inchemco-accent hover:bg-inchemco-accent/90 text-white">
                  Yêu cầu báo giá
                </Button>
              </Link>
              <Link href="tel:0986621314">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  0986.621.314
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 