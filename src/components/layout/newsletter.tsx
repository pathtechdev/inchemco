"use client";

import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitResult({
        success: true,
        message: "Cảm ơn quý khách đã đăng ký nhận bản tin!",
      });
      
      // Reset form
      setEmail("");
      setFirstName("");
      setLastName("");
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitResult(null);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="w-full">
      <h3 className="text-lg font-medium mb-4">Đăng ký nhận tin</h3>
      
      {submitResult ? (
        <div
          className={`p-4 rounded-md mb-4 ${
            submitResult.success
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {submitResult.message}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Tên"
              className="p-2 bg-inchemco-dark-secondary rounded text-white"
              value={firstName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Họ"
              className="p-2 bg-inchemco-dark-secondary rounded text-white"
              value={lastName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
              required
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="p-2 bg-inchemco-dark-secondary rounded text-white"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            required
          />
          <Button
            type="submit"
            className="neura-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Đang gửi..." : "Gửi"}
          </Button>
          <p className="text-xs text-gray-400">
            Đăng ký nhận thông tin mới nhất về sản phẩm, khuyến mãi và sự kiện từ INCHEMCO
          </p>
        </form>
      )}
    </div>
  );
} 