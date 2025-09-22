import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const LaundryCenter: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const laundryImages = [
    {
      url: '/src/assets/images/banner/classroom.jpg',
      title: '专业洗衣设备',
      description: '配备专业洗衣设备，使用优质洗涤剂，确保衣物清洁卫生'
    },
    {
      url: '/src/assets/images/school/campus.jpg', 
      title: '快速洗衣服务',
      description: '提供快速洗衣服务，一般24小时内完成洗涤和烘干'
    },
    {
      url: '/src/assets/images/banner/campus.jpg',
      title: '消毒杀菌处理',
      description: '采用高温消毒杀菌处理，确保衣物清洁卫生，保护学生健康'
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % laundryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + laundryImages.length) % laundryImages.length);
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
            洗衣中心
          </h2>
          <p className="text-lg text-gray-600">
            学校设有现代化的洗衣中心，提供便捷、高效、卫生的洗衣服务，解决学生的日常需求
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
                  src={laundryImages[currentImageIndex].url}
                  alt={laundryImages[currentImageIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                
                {/* 图片信息覆盖层 */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-bold mb-1">
                    {laundryImages[currentImageIndex].title}
                  </h3>
                  <p className="text-sm opacity-90">
                    {laundryImages[currentImageIndex].description}
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
              {laundryImages.map((_, index) => (
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
              专业洗衣服务
            </h3>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              配备专业洗衣设备，使用优质洗涤剂，确保衣物清洁卫生。提供快速洗衣服务，一般24小时内完成洗涤和烘干。
            </p>
            <p className="text-base text-gray-700 leading-relaxed mb-6">
              严格按照材质和颜色分类洗涤，防止衣物损坏和串色。采用高温消毒杀菌处理，确保衣物清洁卫生，保护学生健康。
            </p>
            
            {/* 特色标签 */}
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-[#7c569d] text-white rounded-full text-sm font-medium">
                专业洗涤
              </span>
              <span className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium">
                快速服务
              </span>
              <span className="px-4 py-2 bg-green-500 text-white rounded-full text-sm font-medium">
                消毒处理
              </span>
              <span className="px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-medium">
                分类洗涤
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LaundryCenter;