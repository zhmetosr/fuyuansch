import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import CoursePreview from '../components/CoursePreview';
import NewsSection from '../components/NewsSection';
import EducationFeatures from '../components/EducationFeatures';
import ContactSection from '../components/ContactSection';
import Gallery from '../components/Gallery';
import StudentStars from '../components/StudentStars';
import AchievementShowcase from '../components/AchievementShowcase';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // 模拟页面加载
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#f9f9f9] text-[#333333]">
      <Header />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="w-full"
      >
        {/* 首页Banner */}
        <Banner />
        
        {/* 课程中心预览 */}
        <CoursePreview />
        
        {/* 教育特色 */}
        <EducationFeatures />
        
        {/* 新闻公告 */}
        <NewsSection />
        
        {/* 往届佳绩 */}
        <AchievementShowcase />
        
        {/* 学生之星 */}
        <StudentStars />
        
        {/* 友情链接 */}
        <div className="container mx-auto px-4 py-8">
          <h3 className="text-lg font-bold text-[#7c569d] mb-4 pl-4">友情链接</h3>
          <div className="flex flex-wrap justify-start gap-4 pl-4">
            <a href="https://www.fyedu.net" className="text-[#7c569d] hover:underline">深圳市富源学校</a>
            <a href="http://www.fuyuanbaschool.com" className="text-[#7c569d] hover:underline">富源英美学校</a>
          </div>
        </div>

      </motion.main>
      
      <Footer />
    </div>
  );
}