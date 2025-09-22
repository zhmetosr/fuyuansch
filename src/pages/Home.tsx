import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import CoursePreview from '../components/CoursePreview';
import NewsSection from '../components/NewsSection';
import EducationFeatures from '../components/EducationFeatures';
import ContactSection from '../components/ContactSection';
import Gallery from '../components/Gallery';
import StudentStars from '../components/StudentStars';
import TeachersWall from '../components/TeachersWall';
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
        
        {/* 教师墙 */}
        <TeachersWall />
        
        {/* 往届佳绩 */}
        <AchievementShowcase />
        
        {/* 新闻公告 */}
        <NewsSection />
        
        {/* 学生之星 */}
        <StudentStars />
        
        {/* 联系信息 */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#7c569d] mb-4">联系我们</h2>
              <div className="w-24 h-1 bg-[#7c569d] mx-auto"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="text-[#7c569d] mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium">学校地址</h3>
                    <p className="text-gray-600">广东省深圳市宝安区富源路100号</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-[#7c569d] mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium">联系电话</h3>
                    <p className="text-gray-600">0755-12345678</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-[#7c569d] mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium">电子邮箱</h3>
                    <p className="text-gray-600">info@fuyuanbaschool.com</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-4">快速留言</h3>
                <form className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="您的姓名" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                  <input 
                    type="email" 
                    placeholder="电子邮箱" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                  <textarea 
                    placeholder="留言内容" 
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  ></textarea>
                  <button 
                    type="submit"
                    className="w-full bg-[#7c569d] text-white px-4 py-2 rounded-md hover:bg-opacity-90"
                  >
                    发送留言
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </motion.main>
      
      <Footer />
    </div>
  );
}