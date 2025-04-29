// Global site data
export const siteInfo = {
  name: "INCHEMCO",
  fullName: "CÔNG TY CP XUẤT NHẬP KHẨU THIẾT BỊ VÀ HÓA CHẤT VIỆT NAM",
  slogan: "Đối tác chuyên nghiệp - Hợp tác vững bền",
  contact: {
    email: "thietbiyte@vnn.vn",
    phone: "024.3926 2699",
    mobile: "0986621314",
    address: {
      headquarters: "94 Phó Đức Chính, P. Trúc Bạch, Q. Ba Đình, TP. Hà Nội",
      office: "Nhà C24/X1 ngõ 14 phố Huy Du, phường Cầu Diễn, Nam Từ Liêm, Hà Nội"
    }
  },
  social: {
    facebook: "https://facebook.com/inchemco",
    youtube: "https://youtube.com/inchemco",
    instagram: "https://instagram.com/inchemco"
  }
};

// Main product categories
export const productCategories = [
  {
    id: "rehabilitation",
    title: "Thiết bị vật lý trị liệu phục hồi chức năng",
    image: "/images/products/rehabilitation-hero.jpg",
    description: "Thiết bị hiện đại hỗ trợ phục hồi chức năng vận động, giảm đau và cải thiện chất lượng cuộc sống cho bệnh nhân.",
    slug: "rehabilitation",
    subcategories: [
      { name: "Điện trị liệu", slug: "electrotherapy" },
      { name: "Xung kích hội tụ", slug: "shock-wave" },
      { name: "Từ trường siêu dẫn", slug: "magnetic-field" },
      { name: "Từ trường trị liệu", slug: "magnetic" },
      { name: "Siêu âm trị liệu", slug: "ultrasound" },
      { name: "Laser trị liệu", slug: "laser" }
    ]
  },
  {
    id: "cardio-pulmonary",
    title: "Điện tim và phế dung",
    image: "/images/products/cardio-pulmonary-hero.jpg",
    description: "Thiết bị điện tim và phế dung kế chất lượng cao, giúp chẩn đoán chính xác các bệnh lý tim mạch và đường hô hấp.",
    slug: "cardio-pulmonary",
    subcategories: [
      { name: "Điện tim nghỉ (Điện tim)", slug: "ecg" },
      { name: "Phế dung kế", slug: "spirometer" },
      { name: "Phần mềm tim phổi", slug: "cardio-software" }
    ]
  },
  {
    id: "lab-equipment",
    title: "Thiết bị và vật tư xét nghiệm",
    image: "/images/products/lab-equipment-hero.jpg",
    description: "Máy xét nghiệm sinh hóa, máy xét nghiệm nước tiểu và hóa chất xét nghiệm chất lượng cao, đáp ứng nhu cầu chẩn đoán.",
    slug: "lab-equipment",
    subcategories: [
      { name: "Máy xét nghiệm sinh hóa", slug: "biochemistry" },
      { name: "Máy xét nghiệm nước tiểu", slug: "urine-analyzer" },
      { name: "Hóa chất xét nghiệm", slug: "reagents" }
    ]
  }
];

// Featured products
export const featuredProducts = [
  {
    id: "btl-6000-fswt",
    name: "BTL-6000 FSWT",
    description: "Thiết bị Xung kích hội tụ (Focused Shock Wave Therapy) điều trị hiệu quả các bệnh lý cơ xương khớp.",
    image: "/images/products/shock-wave/btl-6000-fswt.jpg",
    category: "rehabilitation",
    subcategory: "shock-wave",
    brand: "BTL",
    countryOfOrigin: "Anh Quốc",
    slug: "btl-6000-fswt"
  },
  {
    id: "btl-spirometer",
    name: "Phế dung kế Spirometer BTL",
    description: "Thiết bị chẩn đoán chức năng phổi hiện đại, cung cấp kết quả chính xác và đáng tin cậy.",
    image: "/images/products/spirometer/btl-spirometer.jpg",
    category: "cardio-pulmonary",
    subcategory: "spirometer",
    brand: "BTL",
    countryOfOrigin: "Anh Quốc",
    slug: "btl-spirometer"
  },
  {
    id: "btl-cardiopoint",
    name: "BTL CardioPoint",
    description: "Hệ thống chẩn đoán tim mạch toàn diện, tích hợp điện tim nghỉ, điện tim gắng sức và Holter ECG.",
    image: "/images/products/ecg/btl-cardiopoint.jpg",
    category: "cardio-pulmonary",
    subcategory: "ecg",
    brand: "BTL",
    countryOfOrigin: "Anh Quốc",
    slug: "btl-cardiopoint"
  }
];

// Partner brands
export const partnerBrands = [
  { 
    id: "btl",
    name: "BTL", 
    logo: "/images/brands/btl.png", 
    country: "Anh Quốc",
    description: "Nhà sản xuất thiết bị vật lý trị liệu và chẩn đoán tim phổi hàng đầu thế giới.",
    products: ["Thiết bị vật lý trị liệu", "Máy điện tim", "Phế dung kế"],
    website: "https://www.btlnet.com/"
  },
  { 
    id: "tecnomed",
    name: "Tecnomed", 
    logo: "/images/brands/tecnomed.png", 
    country: "Italia",
    description: "Chuyên sản xuất các thiết bị điện trị liệu và xung kích chất lượng cao.",
    products: ["Thiết bị điện trị liệu", "Xung kích", "Siêu âm trị liệu"],
    website: "https://www.tecnomed.it/"
  },
  { 
    id: "ems",
    name: "EMS", 
    logo: "/images/brands/ems.png", 
    country: "Thụy Sĩ",
    description: "Nhà cung cấp giải pháp điều trị nha khoa và y tế tiên tiến của Thụy Sĩ.",
    products: ["Thiết bị nha khoa", "Thiết bị trị liệu"],
    website: "https://www.ems-dental.com/"
  },
  { 
    id: "zimmer",
    name: "Zimmer", 
    logo: "/images/brands/zimmer.png", 
    country: "Đức",
    description: "Chuyên sản xuất thiết bị trị liệu lạnh và thiết bị vật lý trị liệu cao cấp.",
    products: ["Thiết bị trị liệu lạnh", "Thiết bị vật lý trị liệu"],
    website: "https://www.zimmerusa.com/"
  }
];

// Company milestones for About page
export const companyMilestones = [
  {
    year: 2005,
    title: "Thành lập công ty",
    description: "INCHEMCO được thành lập với tầm nhìn trở thành nhà cung cấp thiết bị y tế và hóa chất hàng đầu tại Việt Nam."
  },
  {
    year: 2008,
    title: "Mở rộng danh mục sản phẩm",
    description: "Mở rộng danh mục sản phẩm sang lĩnh vực thiết bị vật lý trị liệu và phục hồi chức năng."
  },
  {
    year: 2012,
    title: "Trở thành đối tác của BTL",
    description: "Ký kết hợp đồng phân phối độc quyền với BTL, một trong những nhà sản xuất thiết bị vật lý trị liệu hàng đầu thế giới."
  },
  {
    year: 2015,
    title: "Mở rộng thị trường",
    description: "Mở văn phòng đại diện tại Thành phố Hồ Chí Minh, mở rộng thị trường phía Nam."
  },
  {
    year: 2018,
    title: "Phát triển hệ thống phân phối",
    description: "Xây dựng mạng lưới phân phối rộng khắp tại các tỉnh thành trên cả nước."
  },
  {
    year: 2023,
    title: "Mở rộng sang miền Trung",
    description: "Khai trương văn phòng đại diện tại Đà Nẵng, mở rộng thị trường miền Trung."
  }
];

// Company values
export const companyValues = [
  {
    id: "quality",
    title: "Chất lượng",
    description: "Cam kết cung cấp sản phẩm chất lượng cao, đảm bảo hiệu quả và an toàn trong sử dụng.",
    icon: "Shield"
  },
  {
    id: "integrity",
    title: "Chính trực",
    description: "Hoạt động với sự minh bạch và trung thực, xây dựng mối quan hệ tin cậy với khách hàng và đối tác.",
    icon: "Check"
  },
  {
    id: "innovation",
    title: "Đổi mới",
    description: "Không ngừng tìm kiếm và giới thiệu những công nghệ y tế tiên tiến nhất đến thị trường Việt Nam.",
    icon: "Lightbulb"
  },
  {
    id: "service",
    title: "Dịch vụ xuất sắc",
    description: "Cung cấp dịch vụ hậu mãi chu đáo và chuyên nghiệp, đảm bảo sự hài lòng của khách hàng.",
    icon: "HeartHandshake"
  }
];

// Downloads data
export const downloadCategories = [
  {
    id: "catalogs",
    title: "Catalogs",
    description: "Danh mục sản phẩm đầy đủ thông tin về các thiết bị y tế và hóa chất.",
    icon: "FileText"
  },
  {
    id: "instructions",
    title: "Hướng dẫn sử dụng",
    description: "Tài liệu hướng dẫn chi tiết cách sử dụng và bảo quản thiết bị.",
    icon: "BookOpen"
  },
  {
    id: "specs",
    title: "Thông số kỹ thuật",
    description: "Chi tiết kỹ thuật đầy đủ của các thiết bị y tế.",
    icon: "FileSpreadsheet"
  },
  {
    id: "certificates",
    title: "Chứng chỉ & Chứng nhận",
    description: "Các giấy phép, chứng chỉ và chứng nhận chất lượng sản phẩm.",
    icon: "ScrollText"
  }
];

export const downloadFiles = [
  {
    id: "btl-fswt-catalog",
    title: "Catalog BTL-6000 FSWT",
    category: "catalogs",
    fileSize: "3.5 MB",
    fileType: "PDF",
    language: "Tiếng Việt",
    url: "/downloads/btl-6000-fswt-catalog.pdf",
    lastUpdated: "20/09/2023"
  },
  {
    id: "btl-spirometer-instructions",
    title: "Hướng dẫn sử dụng Spirometer BTL",
    category: "instructions",
    fileSize: "2.7 MB",
    fileType: "PDF",
    language: "Tiếng Việt",
    url: "/downloads/btl-spirometer-instructions.pdf",
    lastUpdated: "15/07/2023"
  },
  {
    id: "btl-cardiopoint-specs",
    title: "Thông số kỹ thuật BTL CardioPoint",
    category: "specs",
    fileSize: "1.8 MB",
    fileType: "PDF",
    language: "Tiếng Việt",
    url: "/downloads/btl-cardiopoint-specs.pdf",
    lastUpdated: "10/08/2023"
  },
  {
    id: "inchemco-iso-certificate",
    title: "Chứng nhận ISO 9001:2015",
    category: "certificates",
    fileSize: "0.8 MB",
    fileType: "PDF",
    language: "Tiếng Việt",
    url: "/downloads/inchemco-iso-certificate.pdf",
    lastUpdated: "01/06/2023"
  }
];

// FAQ data
export const faqCategories = [
  { id: "general", name: "Thông tin chung" },
  { id: "products", name: "Sản phẩm" },
  { id: "warranty", name: "Bảo hành & Hỗ trợ kỹ thuật" },
  { id: "ordering", name: "Đặt hàng & Thanh toán" }
];

export const faqItems = [
  {
    id: "faq1",
    question: "INCHEMCO là đại diện phân phối chính thức của những thương hiệu nào?",
    answer: "INCHEMCO là đại diện phân phối chính thức của nhiều thương hiệu thiết bị y tế và hóa chất uy tín trên thế giới, bao gồm BTL (Anh Quốc), Tecnomed (Italia), EMS (Thụy Sĩ), và Zimmer (Đức). Chúng tôi cung cấp các sản phẩm chính hãng với đầy đủ giấy tờ xuất xứ và chứng nhận chất lượng.",
    category: "general"
  },
  {
    id: "faq2",
    question: "Các sản phẩm của INCHEMCO có được bảo hành chính hãng không?",
    answer: "Tất cả sản phẩm do INCHEMCO phân phối đều được bảo hành chính hãng theo quy định của nhà sản xuất, thường từ 12-24 tháng tùy theo sản phẩm. Ngoài ra, chúng tôi còn cung cấp dịch vụ bảo trì định kỳ và hỗ trợ kỹ thuật sau bán hàng.",
    category: "warranty"
  },
  {
    id: "faq3",
    question: "Làm thế nào để yêu cầu báo giá sản phẩm?",
    answer: "Quý khách có thể yêu cầu báo giá sản phẩm bằng cách liên hệ trực tiếp qua số điện thoại 024.3926 2699, gửi email tới thietbiyte@vnn.vn, hoặc sử dụng form yêu cầu báo giá trên website của chúng tôi. Đội ngũ tư vấn sẽ phản hồi trong vòng 24 giờ làm việc.",
    category: "ordering"
  },
  {
    id: "faq4",
    question: "Thiết bị BTL-6000 FSWT có những ứng dụng lâm sàng nào?",
    answer: "Thiết bị BTL-6000 FSWT (Focused Shock Wave Therapy) có nhiều ứng dụng lâm sàng trong điều trị các bệnh lý cơ xương khớp như: đau gót chân, viêm gân Achilles, viêm mỏm khuỷu, đau khớp vai, loạn năng cơ cổ vai gáy, và nhiều bệnh lý cơ xương khớp mạn tính khác. Thiết bị giúp giảm đau nhanh chóng và kích thích quá trình chữa lành tự nhiên của cơ thể.",
    category: "products"
  }
];

// Team members
export const teamMembers = [
  {
    id: "member1",
    name: "Nguyễn Văn Anh",
    title: "Giám đốc điều hành",
    image: "/images/team/member1.jpg",
    bio: "Ông Nguyễn Văn Anh có hơn 20 năm kinh nghiệm trong lĩnh vực thiết bị y tế và là người sáng lập INCHEMCO. Dưới sự lãnh đạo của ông, công ty đã trở thành một trong những nhà phân phối thiết bị y tế uy tín nhất tại Việt Nam."
  },
  {
    id: "member2",
    name: "Trần Thị Minh",
    title: "Giám đốc Marketing",
    image: "/images/team/member2.jpg",
    bio: "Bà Trần Thị Minh phụ trách chiến lược marketing và phát triển thương hiệu INCHEMCO. Với nền tảng chuyên môn về y tế và marketing, bà đã góp phần xây dựng hình ảnh chuyên nghiệp của công ty trong ngành thiết bị y tế."
  },
  {
    id: "member3",
    name: "Lê Quang Đạt",
    title: "Giám đốc Kỹ thuật",
    image: "/images/team/member3.jpg",
    bio: "Ông Lê Quang Đạt là chuyên gia kỹ thuật với hơn 15 năm kinh nghiệm trong lĩnh vực thiết bị y tế. Ông phụ trách đội ngũ kỹ thuật viên và đảm bảo chất lượng dịch vụ hậu mãi của INCHEMCO."
  }
]; 