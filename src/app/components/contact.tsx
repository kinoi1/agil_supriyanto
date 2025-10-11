"use client";

import Link from "next/link";
import { SiFacebook, SiInstagram, SiWhatsapp, SiGmail } from "react-icons/si";

export default function ContactSection() {
  const contacts = [
    {
      name: "WhatsApp",
      href: "https://wa.me/62895610217050",
      icon: <SiWhatsapp className="w-6 h-6 text-green-400" />,
      color: "hover:bg-green-900/40",
    },
    {
      name: "Facebook",
      href: "https://facebook.com/agil.supriyanto.9",
      icon: <SiFacebook className="w-6 h-6 text-blue-400" />,
      color: "hover:bg-blue-900/40",
    },
    {
      name: "Instagram",
      href: "https://instagram.com/agil_supriyanto",
      icon: <SiInstagram className="w-6 h-6 text-pink-400" />,
      color: "hover:bg-pink-900/40",
    },
    {
      name: "Email",
      href: "mailto:agilsupriyanto14@gmail.com",
      icon: <SiGmail className="w-6 h-6 text-red-400" />,
      color: "hover:bg-red-900/40",
    },
  ];

  return (
    <section id="contact" className="py-20 text-gray-100">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
          Hubungi Saya
        </h2>
        <p className="text-gray-400 mb-12">
          Anda dapat menghubungi saya melalui platform berikut:
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {contacts.map((contact) => (
            <Link
              key={contact.name}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center justify-center p-6 bg-zinc-900 rounded-2xl shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg ${contact.color}`}
            >
              {contact.icon}
              <span className="mt-3 font-medium text-gray-200">
                {contact.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
