import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SchoolCafeteria: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const cafeteriaImages = [
    {
      url: '/src/assets/images/banner/classroom.jpg',
      title: '营养健康食堂',
      description: '由专业营养师制定科学合理的食谱，确保学生营养均衡'
    },
    {
      url: '/src/assets/images/school/campus.jpg', 
      title: '食品安全保障',
      description: '严格把控食材采购和加工流程，确保食品安全卫生'
    },
    {
      url: '/src/assets/images/banner/campus.jpg',
      title: '舒适用餐环境',
      description: '餐厅环境整洁卫生，餐具消毒严格，提供舒适的用餐体验'
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % cafeteriaImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + cafeteriaImages.length) % cafeteriaImages.length);
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
            学校食堂
          </h2>
          <p className="text-lg text-gray-600">
            学校食堂提供营养均衡、安全卫生的餐饮服务，确保学生在校期间的饮食健康
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
                  src={cafeteriaImages[currentImageIndex].url}
                  alt={cafeteriaImages[currentImageIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                
                {/* 图片信息覆盖层 */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-bold mb-1">
                    {cafeteriaImages[currentImageIndex].title}
                  </h3>
                  <p className="text-sm opacity-90">
                    {cafeteriaImages[currentImageIndex].description}
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
              {cafeteriaImages.map((_, index) => (
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
              营养健康食堂
            </h3>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              由专业营养师制定科学合理的食谱，确保学生营养均衡。严格把控食材采购和加工流程，确保食品安全卫生。
            </p>
            <p className="text-base text-gray-700 leading-relaxed mb-6">
              严格按照作息时间提供早中晚三餐，确保学生按时用餐。餐厅环境整洁卫生，餐具消毒严格，为学生提供舒适的用餐体验。
            </p>
            
            {/* 特色标签 */}
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-[#7c569d] text-white rounded-full text-sm font-medium">
                营养搭配
              </span>
              <span className="px-4 py-2 bg-green-500 text-white rounded-full text-sm font-medium">
                食品安全
              </span>
              <span className="px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-medium">
                环境清洁
              </span>
              <span className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium">
                准时供应
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SchoolCafeteria;