// components/sections/CTASection.tsx
import React from 'react';
import { Button } from '@/components/ui/button';

const CTASection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-orange-400 via-orange-600 to-red-600 rounded-3xl p-16 text-center text-white mt-16 shadow-2xl border-4 border-orange-600">
      <h3 className="text-4xl font-bold mb-4 drop-shadow-lg">
        Sẵn sàng cho bữa ăn vui vẻ chưa nào?
      </h3>
      <p className="text-xl mb-8 opacity-95">
        Đăng ký ngay để bé có những bữa ăn học đường thật tuyệt vời!
      </p>
      <Button 
        className="bg-white text-orange-600 border-4 border-orange-600 font-bold text-lg px-8 py-4 rounded-full hover:bg-orange-50 hover:text-orange-800 hover:scale-105 hover:-translate-y-1 transition-all duration-300"
        type="button"
      >
        Bắt đầu miễn phí!
      </Button>
    </section>
  );
};

export default CTASection;