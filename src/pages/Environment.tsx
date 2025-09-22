import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CampusEnvironment from '@/components/CampusEnvironment';
import DormitoryEnvironment from '@/components/DormitoryEnvironment';
import SchoolCafeteria from '@/components/SchoolCafeteria';
import LaundryCenter from '@/components/LaundryCenter';

const Environment: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Banner区域 */}
      <section className="relative h-[500px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/src/assets/images/banner/campus.jpg)',
            filter: 'blur(1px)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#7c569d]/85 to-[#7c569d]/70" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              环境与设施
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl font-light tracking-wide"
            >
              ENVIRONMENT & FACILITIES
            </motion.p>
          </div>
        </div>
      </section>

      {/* 主要内容区域 */}
      <main>
        {/* 顶部描述文字 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-12 bg-white"
        >
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-gray-700 leading-relaxed">
                  富源英美学校致力于为学生提供最优质的学习和生活环境。我们拥有现代化的教学设施，
                  包括13000多平方米的五层现代化教学大厦，配备先进的多媒体教室、实验室、电子图书馆等教学设施。
                  校园内绿树成荫，环境优美，配备全天候电子监控设备，24小时保安值班，确保师生在校安全。
                  学校还配备餐厅、健身房、影剧院、室内体育馆等多种设施，满足学生多样化需求。
                  校园内WiFi全覆盖，配备智能化管理系统，提供便捷的现代化服务，为学生营造宁静舒适的学习氛围。
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 校园环境大模块 */}
        <CampusEnvironment />
        
        {/* 宿舍环境大模块 */}
        <DormitoryEnvironment />
        
        {/* 学校食堂大模块 */}
        <SchoolCafeteria />
        
        {/* 洗衣中心大模块 */}
        <LaundryCenter />
      </main>

      <Footer />
    </div>
  );
};

export default Environment;