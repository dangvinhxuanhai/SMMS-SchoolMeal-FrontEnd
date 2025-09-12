import { GalleryVerticalEnd } from "lucide-react";

import { LoginForm } from "@/app/(auth)/login/login-form";

export default function LoginPage() {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="relative flex flex-col gap-4 p-6 md:p-10 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl -translate-x-36 -translate-y-36 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl translate-x-24 translate-y-24 animate-pulse animation-delay-1000"></div>

        <div className="relative z-10 flex justify-center gap-2 md:justify-start">
          <a
            href="#"
            className="flex items-center gap-3 font-bold text-lg group transition-transform duration-300 hover:scale-105"
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white flex size-10 items-center justify-center rounded-xl shadow-lg shadow-blue-500/25 group-hover:shadow-xl group-hover:shadow-blue-500/30 transition-all duration-300">
              <GalleryVerticalEnd className="size-5" />
            </div>
            <span className="bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
              Acme Inc.
            </span>
          </a>
        </div>

        <div className="relative z-10 flex flex-1 items-center justify-center">
          <div className="w-full max-w-md">
            <div className="relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl shadow-blue-500/10 p-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/3 via-purple-600/3 to-pink-600/3 pointer-events-none"></div>

              <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl"></div>

              <LoginForm className="relative z-10" />
            </div>
          </div>
        </div>

        <div className="relative z-10 text-center text-xs text-gray-500 mt-4">
          <p>Secure • Fast • Reliable</p>
        </div>
      </div>

      <div className="relative hidden lg:block overflow-hidden h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/80 to-indigo-900/90 z-10"></div>

        <div className="absolute inset-0 z-20 opacity-10">
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-30 h-full flex flex-col items-center justify-center p-12 text-center text-white">
          <div className="absolute top-20 left-20 w-20 h-20 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 rotate-12 animate-float"></div>
          <div className="absolute top-40 right-32 w-16 h-16 bg-blue-500/20 rounded-full animate-float animation-delay-500"></div>
          <div className="absolute bottom-32 left-16 w-12 h-12 bg-purple-500/20 rounded-lg rotate-45 animate-float animation-delay-1000"></div>

          <div className="max-w-md space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Join 10,000+ users</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Start your
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                amazing journey
              </span>
              today
            </h2>

            <p className="text-lg text-white/80 leading-relaxed">
              Experience the future of digital innovation with our cutting-edge
              platform designed for modern professionals.
            </p>

            <div className="flex items-center justify-center gap-8 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">99.9%</div>
                <div className="text-sm text-white/70">Uptime</div>
              </div>
              <div className="w-px h-8 bg-white/20"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">24/7</div>
                <div className="text-sm text-white/70">Support</div>
              </div>
              <div className="w-px h-8 bg-white/20"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-400">∞</div>
                <div className="text-sm text-white/70">Possibilities</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800"></div>
        </div>
      </div>
    </div>
  );
}

const styles = `
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  25% { transform: translateY(-10px) rotate(1deg); }
  50% { transform: translateY(-20px) rotate(0deg); }
  75% { transform: translateY(-10px) rotate(-1deg); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animation-delay-500 {
  animation-delay: 0.5s;
}

.animation-delay-1000 {
  animation-delay: 1s;
}
`;
