"use client";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { slides } from "@/data/constants";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useLoading } from "@/context/LoadingContext";

gsap.registerPlugin(SplitText);

export default function HeroSection() {
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const { loading } = useLoading();

  useEffect(() => {
    if (loading) return;
    const tl = gsap.timeline();

    const headingSplit = new SplitText(headingRef.current, {
      type: "lines",
      linesClass: "lineChild",
    });

    const descSplit = new SplitText(descRef.current, {
      type: "lines",
      linesClass: "lineChild",
    });

    new SplitText(headingRef.current, {
      type: "lines",
      linesClass: "lineParent",
    });

    new SplitText(descRef.current, {
      type: "lines",
      linesClass: "lineParent",
    });

    gsap.set(".lineParent", { overflow: "hidden" });
    gsap.set(headingSplit.lines, { y: "-100%" });
    gsap.set(descSplit.lines, { y: "100%" });

    tl.to(headingSplit.lines, {
      y: "0%",
      duration: 1,
      ease: "power3.out",
      stagger: 0.1,
    }).to(
      descSplit.lines,
      {
        y: "0%",
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.08,
      },
      "-=0.5"
    );

    return () => {
      headingSplit.revert();
      descSplit.revert();
      tl.kill();
    };
  }, [loading]);

  return (
    <section className="relative w-full h-[600px] overflow-hidden rounded-2xl shadow-lg">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        speed={1000}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: ".hero-prev",
          nextEl: ".hero-next",
        }}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute inset-0 flex items-center px-12 lg:px-20 z-10 pointer-events-none">
        <div className="max-w-2xl text-left text-white pointer-events-auto">
          <h1
            ref={headingRef}
            className="text-6xl lg:text-7xl font-bold mb-6 drop-shadow-2xl leading-tight"
          >
            Bữa Trưa
            <span className="block text-yellow-400">Ngon Lành</span>
          </h1>
          <p
            ref={descRef}
            className="text-xl lg:text-2xl mb-8 leading-relaxed drop-shadow-lg opacity-90"
          >
            Nền tảng quản lý bữa ăn trưa thông minh dành cho các bạn học sinh!
            Đặt cơm ngon, theo dõi dinh dưỡng và tận hưởng những bữa ăn bổ dưỡng
            mỗi ngày một cách dễ dàng và tiện lợi.
          </p>
          <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-xl transition-transform duration-300 ease-in-out hover:scale-110 active:scale-95 text-lg">
            Đặt cơm ngay
          </button>
        </div>
      </div>
      <style jsx global>{`
        .swiper-pagination {
          bottom: 2rem !important;
          z-index: 50 !important;
          position: absolute !important;
          pointer-events: auto !important;
        }
        .swiper-pagination-bullet {
          width: 14px !important;
          height: 14px !important;
          background: rgba(255, 255, 255, 0.5) !important;
          margin: 0 8px !important;
          transition: all 0.3s ease !important;
          opacity: 1 !important;
          cursor: pointer !important;
        }
        .swiper-pagination-bullet:hover {
          background: rgba(255, 255, 255, 0.75) !important;
          transform: scale(1.2) !important;
        }
        .swiper-pagination-bullet-active {
          background: white !important;
          transform: scale(1.4) !important;
        }
        .lineParent {
          overflow: hidden !important;
        }
      `}</style>
    </section>
  );
}
