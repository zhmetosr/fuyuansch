import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const DormitoryEnvironment: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const dormitoryImages = [
    {
      url: '/src/assets/images/banner/classroom.jpg',
      title: '4人间标准宿舍',
      description: '配备独立床位、衣柜、书桌，为学生提供舒适的住宿环境'
    },
    {
      url: '/src/assets/images/school/campus.jpg', 
      title: '温馨住宿环境',
      description: '生活老师全天候陪伴，营造温馨如家的住宿氛围'
    },
    {
      url: '/src/assets/images/banner/campus.jpg',
      title: '安全保障设施',
      description: '配备门禁系统，24小时监控，确保学生住宿安全'
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % dormitoryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + dormitoryImages.length) % dormitoryImages.length);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* 标题区域 - 右上角 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8 text-right"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#7c569d] mb-2">
            宿舍环境
          </h2>
          <p className="text-lg text-gray-600">
            为学生提供安全、舒适、温馨的住宿环境，让学生安心学习，健康成长
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
                  src={dormitoryImages[currentImageIndex].url}
                  alt={dormitoryImages[currentImageIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                
                {/* 图片信息覆盖层 */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-bold mb-1">
                    {dormitoryImages[currentImageIndex].title}
                  </h3>
                  <p className="text-sm opacity-90">
                    {dormitoryImages[currentImageIndex].description}
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
              {dormitoryImages.map((_, index) => (
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
              温馨住宿环境
            </h3>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              4人间标准宿舍，配备独立床位、衣柜、书桌，为学生提供舒适的住宿环境。每个宿舍都有独立的网络接入，满足学习需求。
            </p>
            <p className="text-base text-gray-700 leading-relaxed mb-6">
              生活老师全天候陪伴，营造温馨如家的住宿氛围。配备门禁系统，24小时监控，确保学生住宿安全，让家长放心。
            </p>
            
            {/* 特色标签 */}
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-[#7c569d] text-white rounded-full text-sm font-medium">
                舒适住宿
              </span>
              <span className="px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-medium">
                生活老师
              </span>
              <span className="px-4 py-2 bg-green-500 text-white rounded-full text-sm font-medium">
                安全保障
              </span>
              <span className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium">
                网络覆盖
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DormitoryEnvironment;