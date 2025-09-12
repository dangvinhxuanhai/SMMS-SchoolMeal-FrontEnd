"use client";
import React, { useEffect, useRef, useState } from "react";
import { Menu, X, Sparkles, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavigationItem } from "@/types";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logoBoxRef = useRef<HTMLDivElement>(null);
  const logoTextRef = useRef<HTMLSpanElement>(null);
  const taglineRef = useRef<HTMLSpanElement>(null);
  const lastScrollY = useRef(0);
  const [showNav, setShowNav] = useState(true);

  const navigationItems: NavigationItem[] = [
    { label: "Trang chủ", href: "/" },
    { label: "Thực đơn", href: "/menu" },
    { label: "Về SchoolMeal", href: "/about" },
    { label: "Liên hệ", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileMenuClose = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const logoBox = logoBoxRef.current;
    const logoText = logoTextRef.current;
    const tagline = taglineRef.current;

    if (!logoBox || !logoText || !tagline) return;

    const logoBoxTween = gsap.to(logoBox, {
      width: "2.5rem",
      height: "2.5rem",
      rotate: "3deg",
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top -20",
        end: "bottom top",
        toggleActions: "play none reverse none",
        scrub: 0.3,
      },
    });

    const logoTextTween = gsap.to(logoText, {
      fontSize: "1.375rem",
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top -20",
        end: "bottom top",
        toggleActions: "play none reverse none",
        scrub: 0.3,
      },
    });

    const taglineTween = gsap.to(tagline, {
      autoAlpha: 0,
      y: -15,
      duration: 0.4,
      ease: "power2.out",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top -10",
        end: "top -50",
        toggleActions: "play none reverse none",
        scrub: 0.4,
      },
    });

    return () => {
      logoBoxTween.kill();
      logoTextTween.kill();
      taglineTween.kill();

      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  ``;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transform transition-transform duration-500 bg-white backdrop-blur-md shadow-md ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center group cursor-pointer">
            <div
              ref={logoBoxRef}
              className="relative w-12 h-12 bg-gradient-to-br from-orange-400 via-red-400 to-pink-500 rounded-2xl rotate-6 mr-3 flex items-center justify-center text-white text-xl shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-all duration-300"
            >
              <span className="relative z-10 group-hover:animate-bounce">
                🍎
              </span>
              <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-yellow-300 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="flex flex-col">
              <span
                ref={logoTextRef}
                className="text-2xl font-black bg-gradient-to-r from-orange-600 via-red-500 to-pink-600 bg-clip-text text-transparent italic"
              >
                EduMeal
              </span>
              <span
                ref={taglineRef}
                className="text-xs text-orange-500 font-medium tracking-wide opacity-80 hidden sm:block"
              >
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
                  <span className="absolute bottom-1 left-4 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-[calc(100%-2rem)] transition-all duration-300 rounded-full"></span>
                </Link>
              </li>
            ))}

            <li className="flex space-x-4 ml-8">
              <Link href="/login">
                <Button
                  variant="outline"
                  className="bg-white text-orange-600 border-2 border-orange-400 font-semibold px-6 py-2.5 rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
                  type="button"
                >
                  Đăng nhập
                </Button>
              </Link>

              <Link href="/register">
                <Button
                  className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white font-bold px-8 py-2.5 rounded-xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                  type="button"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Đăng ký ngay!
                    <Heart className="w-4 h-4" />
                  </span>
                </Button>
              </Link>
            </li>
          </ul>

          <button
            className="lg:hidden p-2 rounded-lg bg-orange-100 text-orange-600 shadow-sm hover:bg-orange-200 hover:scale-105 transition-all duration-300"
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
              ? "max-h-screen opacity-100 mt-6 translate-y-0"
              : "max-h-0 opacity-0 mt-0 overflow-hidden -translate-y-4"
          }`}
        >
          <div className="relative bg-white backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-orange-200/50">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-50/80 to-red-50/80 rounded-3xl -z-10"></div>
            <div className="flex flex-col space-y-6 text-center">
              {navigationItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={handleMobileMenuClose}
                  className="text-gray-800 font-bold text-xl py-4 px-6 rounded-2xl hover:bg-gradient-to-r hover:from-orange-100 hover:to-red-100 hover:text-orange-700 transition-all duration-300"
                >
                  {item.label}
                </Link>
              ))}

              <div className="flex flex-col space-y-4 mt-8 pt-6 border-t border-orange-200/50">
                <Link href="/login">
                  <Button
                    variant="outline"
                    onClick={handleMobileMenuClose}
                    className="w-full bg-white/90 text-orange-600 border-2 border-orange-400 font-bold py-3 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
                    type="button"
                  >
                    Đăng nhập
                  </Button>
                </Link>

                <Link href="/register">
                  <Button
                    onClick={handleMobileMenuClose}
                    className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white font-bold py-3 rounded-full shadow-xl hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                    type="button"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
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
