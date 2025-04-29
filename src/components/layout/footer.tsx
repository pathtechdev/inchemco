"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Newsletter } from "./newsletter";

const footerLinks = [
  {
    title: "Danh mục sản phẩm",
    links: [
      { name: "TB vật lý trị liệu phục hồi chức năng", href: "/products/rehabilitation" },
      { name: "Điện tim và phế dung", href: "/products/cardio-pulmonary" },
      { name: "Máy xét nghiệm sinh hóa", href: "/products/biochemistry" },
      { name: "Máy xét nghiệm nước tiểu", href: "/products/urine-analyzer" },
      { name: "Hóa chất xét nghiệm", href: "/products/reagents" },
    ],
  },
  {
    title: "Thông tin",
    links: [
      { name: "Giới thiệu", href: "/about" },
      { name: "Đối tác", href: "/partners" },
      { name: "Tải xuống", href: "/downloads" },
      { name: "Tin tức", href: "/news" },
    ],
  },
  {
    title: "Hỗ trợ",
    links: [
      { name: "Hướng dẫn mua hàng", href: "/purchase-guide" },
      { name: "Chính sách bảo hành", href: "/warranty" },
      { name: "Chính sách vận chuyển", href: "/shipping" },
      { name: "Hỗ trợ kỹ thuật", href: "/technical-support" },
      { name: "Câu hỏi thường gặp", href: "/faq" },
    ],
  }
];

export function Footer() {
  return (
    <footer className="bg-inchemco-dark text-white">
      <div className="neura-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo và thông tin liên hệ */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <Image
                src="/images/inchemco/logo-white.png"
                alt="INCHEMCO Logo"
                width={180}
                height={50}
                className="h-12 w-auto invert"
              />
              <p className="text-sm mt-2">Đối tác chuyên nghiệp - Hợp tác vững bền!</p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-inchemco-accent shrink-0" />
                <div className="text-sm">
                  <p className="font-medium">Trụ sở:</p>
                  <p>94 Phó Đức Chính, P. Trúc Bạch, Q. Ba Đình, TP. Hà Nội</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-inchemco-accent shrink-0" />
                <div className="text-sm">
                  <p className="font-medium">Văn phòng:</p>
                  <p>Nhà C24/X1 ngõ 14 phố Huy Du, phường Cầu Diễn, Nam Từ Liêm, Hà Nội</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-inchemco-accent shrink-0" />
                <div className="text-sm">
                  <p className="font-medium">Điện thoại:</p>
                  <p>024.3926 2699</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-inchemco-accent shrink-0" />
                <div className="text-sm">
                  <p className="font-medium">Di động:</p>
                  <p>0986621314</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-inchemco-accent shrink-0" />
                <div className="text-sm">
                  <p className="font-medium">Email:</p>
                  <a href="mailto:thietbiyte@vnn.vn" className="hover:text-inchemco-secondary">thietbiyte@vnn.vn</a>
                </div>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {footerLinks.map((column) => (
                <div key={column.title}>
                  <h3 className="text-lg font-medium mb-4">{column.title}</h3>
                  <ul className="space-y-2">
                    {column.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-gray-300 hover:text-white transition-colors text-sm"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-1" id="newsletter">
            <Newsletter />
          </div>
        </div>

        <div className="border-t border-inchemco-dark-secondary pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              <p className="mb-1">
                © {new Date().getFullYear()} CÔNG TY CP XUẤT NHẬP KHẨU THIẾT BỊ VÀ HÓA CHẤT VIỆT NAM | <Link href="/privacy" className="hover:text-white">Chính sách bảo mật</Link>
              </p>
            </div>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://youtube.com" aria-label="YouTube" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
              <Link href="https://instagram.com" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="mailto:thietbiyte@vnn.vn" aria-label="Email" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
