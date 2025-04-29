"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  {
    title: "Trang chủ",
    href: "/",
  },
  {
    title: "Giới thiệu",
    href: "/about",
  },
  {
    title: "Sản phẩm",
    href: "#",
    children: [
      {
        title: "TB vật lý trị liệu phục hồi chức năng",
        href: "/products/rehabilitation",
        children: [
          { title: "Điện trị liệu", href: "/products/electrotherapy" },
          { title: "Xung kích hội tụ", href: "/products/shock-wave" },
          { title: "Từ trường siêu dẫn", href: "/products/magnetic-field" },
          { title: "Từ trường trị liệu", href: "/products/magnetic" },
          { title: "Siêu âm trị liệu", href: "/products/ultrasound" },
          { title: "Laser trị liệu", href: "/products/laser" },
        ]
      },
      {
        title: "Điện tim và phế dung",
        href: "/products/cardio-pulmonary",
        children: [
          { title: "Điện tim nghỉ (Điện tim)", href: "/products/ecg" },
          { title: "Phế dung kế", href: "/products/spirometer" },
          { title: "Phần mềm tim phổi", href: "/products/cardio-software" },
          { title: "Điện tim gắng sức", href: "/products/stress-ecg" },
          { title: "Holter điện tim", href: "/products/holter-ecg" },
          { title: "Holter huyết áp", href: "/products/holter-bp" },
        ]
      },
      {
        title: "Xét nghiệm",
        href: "/products/lab-equipment",
        children: [
          { title: "Máy xét nghiệm sinh hóa", href: "/products/biochemistry" },
          { title: "Máy xét nghiệm nước tiểu", href: "/products/urine-analyzer" },
          { title: "Hóa chất xét nghiệm", href: "/products/reagents" },
          { title: "Test thử nhanh", href: "/products/rapid-test" },
        ]
      }
    ],
  },
  {
    title: "Đối tác",
    href: "/partners",
  },
  {
    title: "Tải xuống",
    href: "/downloads",
  },
  {
    title: "Tin tức",
    href: "/news",
  },
  {
    title: "Liên hệ",
    href: "/contact",
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (title: string) => {
    if (activeSubmenu === title) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(title);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="neura-container py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/inchemco/logo.png" 
              alt="INCHEMCO Logo"
              width={180}
              height={50}
              className="h-12 w-auto"
              priority
            />
            <div className="hidden md:flex flex-col">
              <span className="text-sm font-medium text-inchemco-dark">CÔNG TY CỔ PHẦN XUẤT NHẬP KHẨU</span>
              <span className="text-xs text-inchemco-primary">THIẾT BỊ VÀ HÓA CHẤT VIỆT NAM</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.title} className="relative group">
                <Link
                  href={item.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium text-gray-700 hover:text-inchemco-primary",
                    item.children && "flex items-center gap-1"
                  )}
                >
                  {item.title}
                  {item.children && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  )}
                </Link>

                {item.children && (
                  <div className="absolute left-0 top-full bg-white shadow-lg rounded-md p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 w-64">
                    {item.children.map((child) => (
                      <div key={child.title} className="relative group/child">
                        <Link
                          href={child.href}
                          className="block px-3 py-2 text-sm hover:bg-gray-50 hover:text-inchemco-primary rounded-md"
                        >
                          {child.title}
                          {child.children && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-4 w-4 ml-auto inline"
                            >
                              <polyline points="9 6 15 12 9 18"></polyline>
                            </svg>
                          )}
                        </Link>
                        
                        {child.children && (
                          <div className="absolute left-full top-0 bg-white shadow-lg rounded-md p-2 opacity-0 invisible group-hover/child:opacity-100 group-hover/child:visible transition-all z-50 w-64">
                            {child.children.map((subChild) => (
                              <Link
                                key={subChild.title}
                                href={subChild.href}
                                className="block px-3 py-2 text-sm hover:bg-gray-50 hover:text-inchemco-primary rounded-md"
                              >
                                {subChild.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-inchemco-primary focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-40 bg-white lg:hidden transition-all duration-300 transform",
          mobileMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        )}
      >
        <nav className="flex flex-col p-4 pt-6 overflow-auto h-full">
          {navItems.map((item) => (
            <div key={item.title} className="mb-4">
              <div 
                className="flex justify-between items-center text-gray-700"
                onClick={() => item.children && toggleSubmenu(item.title)}
              >
                <Link
                  href={item.href === "#" ? (item.children && item.children.length > 0 ? item.children[0].href : "#") : item.href}
                  className="text-base font-medium hover:text-inchemco-primary py-2 flex-grow"
                  onClick={(e) => item.children && e.preventDefault()}
                >
                  {item.title}
                </Link>
                {item.children && (
                  <button className="p-2 focus:outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`h-4 w-4 transition-transform ${activeSubmenu === item.title ? 'rotate-180' : ''}`}
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                )}
              </div>

              {item.children && activeSubmenu === item.title && (
                <div className="ml-4 mt-2 flex flex-col space-y-1 border-l-2 border-inchemco-primary/20 pl-4">
                  {item.children.map((child) => (
                    <div key={child.title}>
                      <Link
                        href={child.href}
                        className="text-sm text-gray-600 hover:text-inchemco-primary py-2 block"
                      >
                        {child.title}
                      </Link>
                      
                      {child.children && (
                        <div className="ml-4 mt-1 flex flex-col space-y-1 border-l-2 border-inchemco-primary/10 pl-4">
                          {child.children.map((subChild) => (
                            <Link
                              key={subChild.title}
                              href={subChild.href}
                              className="text-xs text-gray-500 hover:text-inchemco-primary py-1 block"
                            >
                              {subChild.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
