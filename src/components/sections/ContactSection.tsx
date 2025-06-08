'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { contactInfo } from "../../constants/navigation";
// import Input from "../ui/Input";

const schema = yup.object().shape({
  name: yup.string().required("Vui lòng nhập họ và tên"),
  phone: yup.string().required("Vui lòng nhập số điện thoại"),
  message: yup.string().required("Vui lòng nhập tin nhắn"),
});

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    setFormStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
        reset();
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8">Liên Hệ & Hợp Tác</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <PhoneIcon className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-medium">Hotline</p>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-primary hover:text-secondary"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <EnvelopeIcon className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-medium">Email</p>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-primary hover:text-secondary"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPinIcon className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-medium">Địa chỉ</p>
                  <p className="text-gray-600">{contactInfo.address}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold mb-6">Gửi Tin Nhắn</h3>
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              {/* <Input
                label="Họ và tên"
                {...register("name")}
                error={errors.name?.message}
              />
              <Input
                label="Số điện thoại"
                type="tel"
                {...register("phone")}
                error={errors.phone?.message}
              /> */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Tin nhắn
                </label>
                <textarea
                  id="message"
                  rows={4}
                  {...register("message")}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 rounded-lg transition-colors"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Đang gửi..." : "Gửi Tin Nhắn"}
              </button>
              {formStatus === "success" && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-600 text-center mt-2"
                >
                  Tin nhắn đã được gửi thành công!
                </motion.p>
              )}
              {formStatus === "error" && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-600 text-center mt-2"
                >
                  Có lỗi xảy ra, vui lòng thử lại sau.
                </motion.p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
