import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const AchievementShowcase: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const achievements = [
    {
      year: "2023届",
      content: "高考本科上线率98%，重点大学录取率65%高考本科上线率98%，重点大学录取率65%高考本科上线率98%，重点大学录取率65%高考本科上线率98%，重点大学录取率65%"
    },
    {
      year: "2022届",
      content: "培养省级高考状元1名，全市前十占3席高考本科上线率98%，重点大学录取率65%高考本科上线率98%，重点大学录取率65%高考本科上线率98%，重点大学录取率65%"
    },
    {
      year: "2021届",
      content: "清华北大录取5人，985录取率突破50%高考本科上线率98%，重点大学录取率65%高考本科上线率98%，重点大学录取率65%高考本科上线率98%，重点大学录取率65%"
    },
    {
      year: "2020届",
      content: "学科竞赛国家级12项，省级58项高考本科上线率98%，重点大学录取率65%高考本科上线率98%，重点大学录取率65%高考本科上线率98%，重点大学录取率65%"
    }
  ];

  const bannerImages = [
    "/src/assets/images/achievements/1.JPG",
    "/src/assets/images/achievements/2.JPG",
    "/src/assets/images/achievements/3.JPG"
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
  };

  // 自动轮播功能
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 4000); // 每4秒自动切换

    return () => clearInterval(interval);
  }, [bannerImages.length, isAutoPlaying]);

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-100 items-center max-w-5xl mx-auto">
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

          {/* 右侧竖向图片轮播 */}
          <div className="flex items-center justify-center space-x-4">
            {/* 左侧按钮 */}
            <button
              onClick={prevSlide}
              className="flex items-center justify-center w-12 h-12 bg-purple-500/20 backdrop-blur-lg text-white rounded-full hover:bg-purple-600/30 transition-all duration-300 shadow-lg hover:shadow-xl border border-white/30 hover:border-white/50"
              aria-label="上一张图片"
            >
              <ChevronLeft size={24} />
            </button>
            
            {/* 图片区域 */}
            <div 
              className="relative h-[400px] w-[300px]"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full bg-gray-100 rounded-lg overflow-hidden shadow-lg"
              >
                <img 
                  src={bannerImages[currentSlide]}
                  alt={`往届佳绩 ${currentSlide + 1}`}
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>
              
            </div>
            
            {/* 右侧按钮 */}
            <button
              onClick={nextSlide}
              className="flex items-center justify-center w-12 h-12 bg-purple-500/20 backdrop-blur-lg text-white rounded-full hover:bg-purple-600/30 transition-all duration-300 shadow-lg hover:shadow-xl border border-white/30 hover:border-white/50"
              aria-label="下一张图片"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementShowcase;