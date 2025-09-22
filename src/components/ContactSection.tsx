import React from 'react';
import TencentMap from './TencentMap';

const ContactSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#800080] mb-8 text-center">联系我们</h2>
        
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800">电子邮箱</h3>
              <p className="text-gray-600">fuyuanbaschool.com</p>
            </div>
            
            {/* 添加腾讯地图 */}
            <TencentMap />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;