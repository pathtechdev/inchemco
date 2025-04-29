// News items data
export const newsItems = [
  {
    id: "news1",
    title: "INCHEMCO giới thiệu dòng sản phẩm BTL-6000 FSWT tại Việt Nam",
    summary: "Thiết bị Xung kích hội tụ (Focused Shock Wave Therapy) mới nhất từ BTL đã chính thức có mặt tại thị trường Việt Nam thông qua INCHEMCO, mang đến giải pháp điều trị hiệu quả cho các bệnh lý cơ xương khớp.",
    image: "/images/news/news-1.jpg",
    date: "15/10/2023",
    category: "Sản phẩm mới",
    slug: "gioi-thieu-btl-6000-fswt"
  },
  {
    id: "event1",
    title: "INCHEMCO tham gia Triển lãm Y tế Quốc tế Vietnam Medipharm Expo 2023",
    summary: "INCHEMCO tự hào giới thiệu các sản phẩm thiết bị y tế và hóa chất chuyên dụng mới nhất tại gian hàng A25-A26, Triển lãm Y tế Quốc tế Vietnam Medipharm Expo 2023.",
    image: "/images/news/event-1.jpg",
    date: "05/12/2023",
    category: "Sự kiện",
    slug: "trien-lam-vietnam-medipharm-2023"
  },
  {
    id: "news2",
    title: "Các ứng dụng mới của công nghệ Xung kích hội tụ trong điều trị đau cơ xương khớp",
    summary: "Nghiên cứu mới nhất chỉ ra hiệu quả điều trị đáng kể của công nghệ Xung kích hội tụ trong các trường hợp đau gót chân, viêm gân Achilles, và đau khớp vai.",
    image: "/images/news/news-2.jpg",
    date: "20/09/2023",
    category: "Công nghệ",
    slug: "ung-dung-moi-cua-xung-kich-hoi-tu"
  },
  {
    id: "news3",
    title: "INCHEMCO mở rộng mạng lưới phân phối tại miền Trung Việt Nam",
    summary: "Với việc khai trương văn phòng đại diện tại Đà Nẵng, INCHEMCO tiếp tục mở rộng mạng lưới phân phối, mang các sản phẩm y tế chất lượng cao đến gần hơn với các cơ sở y tế tại miền Trung.",
    image: "/images/news/news-3.jpg",
    date: "10/08/2023",
    category: "Công ty",
    slug: "mo-rong-mang-luoi-mien-trung"
  },
  {
    id: "event2",
    title: 'Hội thảo "Ứng dụng công nghệ Xung kích hội tụ trong điều trị phục hồi chức năng"',
    summary: "INCHEMCO phối hợp cùng Bệnh viện Đại học Y Hà Nội tổ chức hội thảo chuyên đề về ứng dụng công nghệ Xung kích hội tụ trong điều trị phục hồi chức năng.",
    image: "/images/news/event-2.jpg",
    date: "25/07/2023",
    category: "Hội thảo",
    slug: "hoi-thao-ung-dung-xung-kich-hoi-tu"
  },
  {
    id: "news4",
    title: "INCHEMCO trở thành đối tác chiến lược của BTL tại Việt Nam",
    summary: "INCHEMCO chính thức trở thành đối tác chiến lược và nhà phân phối độc quyền của BTL - nhà sản xuất thiết bị vật lý trị liệu hàng đầu thế giới tại thị trường Việt Nam.",
    image: "/images/news/news-4.jpg",
    date: "01/06/2023",
    category: "Đối tác",
    slug: "inchemco-doi-tac-chien-luoc-btl"
  }
];

// Categories based on news items
export const categories = [
  { name: "Tất cả", slug: "all", count: newsItems.length },
  { name: "Sản phẩm mới", slug: "san-pham-moi", count: newsItems.filter(item => item.category === "Sản phẩm mới").length },
  { name: "Sự kiện", slug: "su-kien", count: newsItems.filter(item => item.category === "Sự kiện").length },
  { name: "Công nghệ", slug: "cong-nghe", count: newsItems.filter(item => item.category === "Công nghệ").length },
  { name: "Công ty", slug: "cong-ty", count: newsItems.filter(item => item.category === "Công ty").length },
  { name: "Hội thảo", slug: "hoi-thao", count: newsItems.filter(item => item.category === "Hội thảo").length },
  { name: "Đối tác", slug: "doi-tac", count: newsItems.filter(item => item.category === "Đối tác").length }
]; 