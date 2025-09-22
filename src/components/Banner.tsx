import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import campusImage from '../assets/images/banner/campus.jpg';
import classroomImage from '../assets/images/banner/classroom.jpg';
import sportsImage from '../assets/images/banner/sports.jpg';
import logoImage from '../assets/images/logo/logo.png';

interface BannerImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  subtitle: string;
}

const Banner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // 使用本地图片数据
  const bannerImages: BannerImage[] = [
    {
      id: 1,
      src: campusImage,
      alt: "校园风貌展示图",
      title: "",
      subtitle: "",
      data: [
        { value: "26年", label: "办学悠久" },
        { value: "1.3万", label: "师生人数" },
        { value: "38万㎡", label: "占地面积" }
      ]
    },
    {
      id: 2,
      src: classroomImage,
      alt: "高考复读招生简章",
      title: "高考复读 2025招生简章",
      subtitle: "优质师资 · 专业辅导 · 定制课程"
    },
    {
      id: 3,
      src: sportsImage,
      alt: "中考复读招生简章",
      title: "中考复读 2025招生简章",
      subtitle: "专业规划 · 个性化教学 · 全面提升"
    },
    {
      id: 4,
      src: classroomImage, // 使用现有图片，实际应替换为学生班级氛围图片
      alt: "学校宣传图",
      title: "清北学生录取率位居名办学校之首",
      subtitle: "优质教育 · 卓越成绩 · 名校之路"
    },
    {
      id: 5,
      src: campusImage, // 使用现有图片，实际应替换为学校图片
      alt: "学校宣传图",
      title: "民办标杆 湾区明星",
      subtitle: "品质教育 · 精英摇篮 · 未来领航者"
    }
  ];
  // 关闭自动轮播效果
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
  //   }, 5000);
  //   
  //   return () => clearInterval(interval);
  // }, [bannerImages.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bannerImages[currentSlide].src})` }}
          >
            {/* 图片处理：添加多层滤镜和渐变叠加效果 */}
            <div 
              className="absolute inset-0" 
              style={{ 
                backdropFilter: 'brightness(0.85) contrast(1.15) saturate(1.3)',
                background: 'linear-gradient(135deg, rgba(124, 86, 157, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%)'
              }}
            ></div>
            {/* 添加额外的渐变层，增强视觉深度 */}
            <div 
              className="absolute inset-0" 
              style={{ 
                background: 'radial-gradient(circle at center, transparent 30%, rgba(0, 0, 0, 0.4) 100%)',
                mixBlendMode: 'overlay'
              }}
            ></div>
            
            {/* Logo和学校名称已移除 */}
            
            {/* 文字内容 - 根据幻灯片索引决定位置 */}
            {currentSlide === 0 ? (
              // 第一张Banner（26年）- 左下角
              <div className="absolute bottom-16 left-12 text-white text-left px-4 max-w-xl">
                {/* 标题和副标题已移除 */}
                
                {/* 数据展示 - 包含26年、1.3万、38万㎡ */}
                <div className="flex items-center mt-4 space-x-6">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="text-center"
                  >
                    <span className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">26年</span>
                    <p className="text-sm md:text-base text-white text-opacity-90">办学悠久</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="text-center"
                  >
                    <span className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">1.3万</span>
                    <p className="text-sm md:text-base text-white text-opacity-90">师生人数</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.0, duration: 0.6 }}
                    className="text-center"
                  >
                    <span className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">38万㎡</span>
                    <p className="text-sm md:text-base text-white text-opacity-90">占地面积</p>
                  </motion.div>
                </div>
              </div>
            ) : (
              // 其他Banner - 居中
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg"
                >
                  {bannerImages[currentSlide].title}
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-xl md:text-2xl max-w-3xl drop-shadow-md"
                >
                  {bannerImages[currentSlide].subtitle}
                </motion.p>
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* 导航按钮 */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <ArrowLeft size={24} />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full transition-all"
        aria-label="Next slide"
      >
        <ArrowRight size={24} />
      </button>
      
      {/* 指示器 */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index 
                ? 'bg-white w-10' 
                : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Banner;