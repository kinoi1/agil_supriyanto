"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo / Nama */}
        <h1 className="text-xl font-bold text-blue-600 cursor-pointer" onClick={() => scrollToSection("hero")}>
          Agil<span className="text-white">Dev</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium text-white">
          <li
            className="hover:text-blue-600 cursor-pointer transition"
            onClick={() => scrollToSection("experience")}
          >
            Experience
          </li>
          <li
            className="hover:text-blue-600 cursor-pointer transition"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </li>
          <li
            className="hover:text-blue-600 cursor-pointer transition"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t shadow-md">
          <ul className="flex flex-col text-center py-4 space-y-4 font-medium text-white">
            <li
              className="hover:text-blue-600 cursor-pointer"
              onClick={() => scrollToSection("experience")}
            >
              Experience
            </li>
            <li
              className="hover:text-blue-600 cursor-pointer"
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </li>
            <li
              className="hover:text-blue-600 cursor-pointer"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
