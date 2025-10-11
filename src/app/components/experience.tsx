import React from "react";

const experiences = [
  {
    year: "2025 – Sekarang",
    position: "FullStack Developer",
    company: "PT Indobuzz",
    description:
      "Mengembangkan dan membangun sistem web interaktif berbasis React dan Tailwind untuk platform internal perusahaan.",
  },
  {
    year: "2022 – 2024",
    position: "FullStack Developer",
    company: "CV RC Electronic",
    description:
      "Membangun dan maintenance aplikasi accounting untuk internal perusahaan partner",
  },
  {
    year: "2021 – 2022",
    position: "Quality Assurance",
    company: "PT Neuronworks Indonesia",
    description:
      "Testing fitur aplikasi dalam tahap staging sebelum ke production",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div className="relative border-l-4 border-blue-500">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-10 ml-6 border-full-3 rounded-2xl">
              {/* Dot marker */}
              <div className="absolute -left-3.5 w-7 h-7 bg-blue-500 rounded-full border-4 border-white" />
              
              <div className="shadow-md rounded-2xl p-6 hover:shadow-lg transition">
                <p className="text-sm text-white mb-1 font-extrabold">{exp.year}</p>
                <h3 className="text-lg font-semibold">
                  {exp.position} –{" "}
                  <span className="text-white">{exp.company}</span>
                </h3>
                <p className="text-grey mt-2">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
