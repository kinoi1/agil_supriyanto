"use client";
import React from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Raja Derek",
    description:
      "Aplikasi digital Accounting berbasis codeigniter 3 yang merekap proses transaksi pemesanan derek, pembayaran dan pembuatan laporan.",
    tech: ["Codeigniter 3", "MySQL", "Bootstrap"],
    image: "/project/rajaderek.png",
    demo: "https://rajaderek.com",
  },
  {
    title: "Discovery Property",
    description:
      "Website penjualan dan penyewaan properti yang dibuat menggunakan codeigniter 3 yang berfokus pada pencatatan transaksi sekaligus sebagai media iklan dan afiliasi bagi marketing",
    tech: ["Codeigniter 3", "Microsoft SQL Server", "Node.js"],
    image: "/project/discoveryproperty.png",
    demo: "https://discoveryproperty.id",
  },
  {
    title: "Indobuzz ",
    description:
      "Website penyedia jasa buzzer yang menyediakan layanan penjualan bagi klien dan platform penghasilan bagi kontributor aktif",
    tech: ["Laravel", "javascript", "Bootstrap"],
    image: "/project/indobuzzz.png",
    demo: "https://indobuzz.id",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border-full-3 rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <div className="relative w-full h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-extrabold">{project.title}</h3>
                <p className="text-grey text-sm mt-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-5">
                  {project.demo && project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      className="flex items-center gap-1 text-blue-600 hover:underline text-sm border-full-3 rounded-2xl px-3 py-1"
                    >
                      <ExternalLink size={16} /> Link
                    </a>
                  )}
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
