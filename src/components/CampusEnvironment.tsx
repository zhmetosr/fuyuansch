import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CampusEnvironment: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const campusImages = [
    {
      url: '/src/assets/images/banner/campus.jpg',
      title: '现代化教学楼',
      description: '13000多平方米、五层、全功能、现代化的教学大厦'
    },
    {
      url: '/src/assets/images/school/campus.jpg', 
      title: '优美校园环境',
      description: '绿树成荫，环境优美，空气清新'
    },
    {
      url: '/src/assets/images/banner/classroom.jpg',
      title: '先进教学设施',
      description: '配备多媒体教室、实验室等现代化设施'
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % campusImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + campusImages.length) % campusImages.length);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* 标题区域 - 左上角 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#7c569d] mb-2">
            校园环境
          </h2>
          <p className="text-lg text-gray-600">
            现代化教学设施，优美校园环境，为学生提供优质的学习和生活空间
          </p>
        </motion.div>

        {/* 主要内容区域 */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* 左侧轮播图区域 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <div className="aspect-[4/3]">
                <motion.img
                  key={currentImageIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  src={campusImages[currentImageIndex].url}
                  alt={campusImages[currentImageIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                
                {/* 图片信息覆盖层 */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-bold mb-1">
                    {campusImages[currentImageIndex].title}
                  </h3>
                  <p className="text-sm opacity-90">
                    {campusImages[currentImageIndex].description}
                  </p>
                </div>

                {/* 导航按钮 */}
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-300"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* 指示器 */}
            <div className="flex justify-center mt-4 space-x-2">
              {campusImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'bg-[#7c569d] scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* 右侧文字内容 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-[#7c569d] mb-4">
              现代化校园设施
            </h3>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              教学楼是一幢13000多平方米、五层、全功能、现代化的教学大厦，配有实验室、电子图书馆、餐厅、健身房、影剧院、室内体育馆等多种设施。
            </p>
            <p className="text-base text-gray-700 leading-relaxed mb-6">
              校内配有全天候电子监控设备，24小时保安值班，确保师生在校安全。校园内绿树成荫，环境优美，为学生营造宁静舒适的学习氛围。
            </p>
            
            {/* 特色标签 */}
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-[#7c569d] text-white rounded-full text-sm font-medium">
                现代化设施
              </span>
              <span className="px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-medium">
                安全保障
              </span>
              <span className="px-4 py-2 bg-green-500 text-white rounded-full text-sm font-medium">
                优美环境
              </span>
              <span className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium">
                智能管理
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CampusEnvironment;