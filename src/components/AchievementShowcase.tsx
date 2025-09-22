import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const AchievementShowcase: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const achievements = [
    {
      year: "2023届",
      content: "高考本科上线率98%，重点大学录取率65%"
    },
    {
      year: "2022届",
      content: "培养省级高考状元1名，全市前十占3席"
    },
    {
      year: "2021届",
      content: "清华北大录取5人，985录取率突破50%"
    },
    {
      year: "2020届",
      content: "学科竞赛国家级12项，省级58项"
    }
  ];

  const bannerImages = [
    "/src/assets/images/achievements/1.jpg",
    "/src/assets/images/achievements/2.jpg",
    "/src/assets/images/achievements/3.jpg"
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#800080] mb-4">往届佳绩</h2>
          <div className="w-24 h-1 bg-[#800080] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 左侧文字列表 */}
          <div>
            <ul className="space-y-6">
              {achievements.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border-l-4 border-[#800080] pl-4 py-2"
                >
                  <h3 className="text-xl font-semibold text-[#800080]">{item.year}</h3>
                  <p className="text-gray-700">{item.content}</p>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* 右侧图片轮播 */}
          <div className="relative h-96">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full bg-gray-100 rounded-lg overflow-hidden"
            >
              <img 
                src={bannerImages[currentSlide]}
                alt={`往届佳绩 ${currentSlide + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 text-[#800080] p-2 rounded-full shadow-md transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 text-[#800080] p-2 rounded-full shadow-md transition-all"
            >
              <ChevronRight size={24} />
            </button>
            
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {bannerImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === index 
                      ? 'bg-[#800080] w-6' 
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementShowcase;