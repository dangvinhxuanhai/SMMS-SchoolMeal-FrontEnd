"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, Sparkles, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavigationItem } from "@/components/types";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const navigationItems: NavigationItem[] = [
    { label: "Bé có gì vui?", href: "/features" },
    { label: "Món ngon mỗi ngày", href: "/food-gallery" },
    { label: "Về SchoolMeal", href: "/about" },
    { label: "Hỗ trợ", href: "/support" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileMenuClose = (): void => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-xl border-b border-orange-100"
          : "bg-white/80 backdrop-blur-md shadow-lg"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center group cursor-pointer">
            <div className="relative w-12 h-12 bg-gradient-to-br from-orange-400 via-red-400 to-pink-500 rounded-2xl rotate-6 mr-3 flex items-center justify-center text-white text-xl shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
              <span className="relative z-10 group-hover:animate-pulse">
                🍎
              </span>
              <Sparkles className="absolute top-1 right-1 w-2 h-2 text-yellow-300 opacity-70 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black bg-gradient-to-r from-orange-600 via-red-500 to-pink-600 bg-clip-text text-transparent italic">
                SchoolMeal
              </span>
              <span className="text-xs text-orange-500 font-medium tracking-wide opacity-80 hidden sm:block">
                Dinh dưỡng cho bé yêu
              </span>
            </div>
          </Link>

          <ul className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item, index) => (
              <li key={index} className="relative">
                <Link
                  href={item.href}
                  className="relative text-gray-700 hover:text-orange-600 font-semibold text-base transition-all duration-300 px-4 py-2 rounded-xl group overflow-hidden"
                >
                  <span className="relative z-10">{item.label}</span>

                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 via-red-400/10 to-pink-400/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-xl"></div>

                  {/* Animated underline */}
                  <span className="absolute bottom-1 left-4 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-[calc(100%-2rem)] transition-all duration-300 rounded-full"></span>

                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-200/20 to-red-200/20 scale-0 group-hover:scale-100 blur-sm transition-all duration-300 rounded-xl opacity-0 group-hover:opacity-100"></div>
                </Link>
              </li>
            ))}

            <li className="flex space-x-4 ml-8">
              <Link href="/login">
                <Button
                  variant="outline"
                  className="bg-white/90 text-orange-600 border-2 border-orange-400 font-semibold px-6 py-2.5 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                  type="button"
                >
                  Đăng nhập
                </Button>
              </Link>

              <Link href="/register">
                <Button
                  className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white font-bold px-8 py-2.5 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
                  type="button"
                >
                  <span className="flex items-center gap-2">
                    Đăng ký ngay!
                  </span>
                </Button>
              </Link>
            </li>
          </ul>

          <button
            className="lg:hidden p-2 rounded-lg bg-orange-100 text-orange-600 shadow-sm hover:bg-orange-200 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div
          className={`lg:hidden transition-all duration-500 ease-in-out ${
            isMenuOpen
              ? "max-h-screen opacity-100 mt-6"
              : "max-h-0 opacity-0 mt-0 overflow-hidden"
          }`}
        >
          <div className="relative bg-gradient-to-br from-white/95 to-orange-50/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-orange-200/50">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-100/30 to-red-100/30 rounded-3xl -z-10"></div>

            <div className="flex flex-col space-y-6 text-center">
              {navigationItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={handleMobileMenuClose}
                  className="relative text-gray-800 font-bold text-xl py-4 px-6 rounded-2xl hover:bg-gradient-to-r hover:from-orange-100 hover:to-red-100 hover:text-orange-700 transition-all duration-300 group"
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                </Link>
              ))}

              <div className="flex flex-col space-y-4 mt-8 pt-6 border-t border-orange-200/50">
                <Link href="/login">
                  <Button
                    variant="outline"
                    className="w-full bg-white/90 text-orange-600 border-2 border-orange-400 font-bold py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
                    type="button"
                  >
                    Đăng nhập
                  </Button>
                </Link>
                <Link href="/register">
                  <Button
                    className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white font-bold py-3 rounded-full shadow-xl hover:scale-105 transition-transform duration-300"
                    type="button"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Đăng ký ngay!
                      <Heart className="w-4 h-4" />
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;