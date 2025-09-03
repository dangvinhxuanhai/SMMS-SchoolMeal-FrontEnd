import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-50 to-orange-100 p-12 mt-20 text-center rounded-t-3xl shadow-2xl border-t-4 border-orange-400">
      <h4 className="text-orange-900 mb-4 text-2xl font-bold">
        SchoolMeal 🍎
      </h4>
      <p className="text-orange-800 mb-2">
        &copy; 2025 SchoolMeal. Dành tặng những mầm non tương lai của đất nước.
      </p>
      <p className="text-orange-800">
        Email: chao@schoolmeal.vn - Hotline: 0901-234-567
      </p>
    </footer>
  );
};

export default Footer;