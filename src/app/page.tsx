"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import HorizontalSlider from "./components/horizontalSlide";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Navbar from "./components/navbar";
import Contact from "./components/contact";

const ModalContact = dynamic(() => import("./modal/contact"), {
  ssr: false,
});

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Navbar />
      <div className="px-[32px] h-[90vh] main">
        <div id="contact">
          <div className="flex justify-center mx-4 mt-[3rem]">
            <h1 className="bg-gradient-to-b from-white to-[#adadad] bg-clip-text text-transparent text-[max(48px,min(5vw,76px))] font-extrabold tracking-[-0.05em] leading-none text-center">
              I'm Agil, Fullstack Developer
            </h1>
          </div>
          <div className="text-[max(15px,min(2vw,762px))] text-grey mx-8 text-center mt-[3rem]">
            Experience in <strong>4 years</strong> on create{" "}
            <strong>web application project</strong> for private or public usage
          </div>
          <div className="gap-[1rem] flex flex-row justify-center mt-[3rem]">
            <button
              className="bg-white text-black px-3 rounded-lg"
              type="button"
              onClick={() => setOpen(true)}
            >
              Contact Me
            </button>
            <button
              className="btn-black border-full-3 px-3 rounded-lg"
              type="button"
            >
              Learn More
            </button>
          </div>
          <div className="mt-[3rem] text-center text-lg font-extrabold">
            What are i use for development project :
          </div>
        </div>
        <div>
          <HorizontalSlider />
        </div>

        <div className="mt-[4rem]">
          <h2 className="bg-gradient-to-b from-white to-[#adadad] bg-clip-text text-transparent text-[max(48px,min(5vw,76px))] font-extrabold tracking-[-0.05em] leading-none text-center">
            About Me
          </h2>
        </div>

        <div className="mt-[4rem] text-lg flex flex-col gap-2 text-justify border-full-3 p-4 rounded-xl">
          <span>
            Hi, saya Agil Supriyanto — seorang Web Developer yang senang
            membangun solusi digital yang efisien, terstruktur, dan mudah
            digunakan.Saya berpengalaman dalam membangun aplikasi berbasis
            Laravel, React.js, dan CodeIgniter 3, serta terbiasa memadukan
            keduanya untuk membuat sistem yang cepat dan fleksibel.
          </span>
          <span>
            Fokus utama saya adalah membuat website yang SEO-friendly,
            responsif, dan mudah dikelola, mulai dari blog sederhana hingga
            sistem dengan arsitektur kompleks. Saya juga memiliki ketertarikan
            terhadap benchmarking performa backend (seperti membandingkan Actix
            dengan Laravel), integrasi API, dan pengembangan fitur real-time
            seperti sistem chat atau layanan link shortener.
          </span>
          <span>
            Selain backend, saya juga gemar bereksperimen di sisi frontend —
            menggunakan Tailwind CSS, Bootstrap 5, hingga GSAP untuk membuat
            animasi yang halus dan interaktif.
          </span>
          <span>
            Belakangan, saya juga mulai mengeksplorasi mobile development dengan
            Kotlin serta deployment ke platform seperti Vercel dan Docker.
          </span>
          <span>
            <i className="fa fa-quote-left"></i> Bagi saya, setiap proyek adalah
            kesempatan untuk belajar sesuatu yang baru dan memperbaiki hasil
            kerja sebelumnya.
          </span>
        </div>
        <div className="mt-[3rem]">
          <Experience />
        </div>
        <div className="mt-[3rem]">
          <Projects />
        </div>
        <div className="mt-[3rem]">
          <Contact />
        </div>
      </div>

      {/* Modal hanya dirender di client */}
      <ModalContact isOpen={open} onClose={() => setOpen(false)}>
        <div className="flex flex-row gap-[1rem] justify-center">
          <div className="flex flex-col justify-center items-center">
            <img
              width="50"
              height="50"
              src="icon/instagram.png"
              alt="Instagram"
            />
            <span className="mt-2">Instagram</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              width="50"
              height="50"
              src="icon/whatsapp.png"
              alt="Whatsapp"
            />
            <span className="mt-2">Whatsapp</span>
          </div>
          <div className="flex flex-col justify-between items-center">
            <img
              className="mt-2"
              width="50"
              height="50"
              src="icon/gmail.svg"
              alt="Email"
            />
            <span className="text-center">Email</span>
          </div>
        </div>
      </ModalContact>
    </div>
  );
}
