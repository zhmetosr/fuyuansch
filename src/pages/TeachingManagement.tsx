import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TeachingSystem from '@/components/TeachingSystem';
import TeacherTeam from '@/components/TeacherTeam';
import LearningManagement from '@/components/LearningManagement';
import PersonalizedTutoring from '@/components/PersonalizedTutoring';
import QualityAssurance from '@/components/QualityAssurance';
import ParentCommunication from '@/components/ParentCommunication';

const TeachingManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState('教学体系');

  const tabs = [
    { id: '教学体系', label: '教学体系' },
    { id: '师资力量', label: '师资力量' },
    { id: '学习管理', label: '学习管理' },
    { id: '个性辅导', label: '个性辅导' },
    { id: '质量保障', label: '质量保障' },
    { id: '家校沟通', label: '家校沟通' }
  ];


  const renderContent = () => {
    switch (activeTab) {
      case '教学体系':
        return <TeachingSystem />;
      case '师资力量':
        return <TeacherTeam />;
      case '学习管理':
        return <LearningManagement />;
      case '个性辅导':
        return <PersonalizedTutoring />;
      case '质量保障':
        return <QualityAssurance />;
      case '家校沟通':
        return <ParentCommunication />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Banner区域 */}
      <section className="relative h-[500px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/src/assets/images/banner/classroom.jpg)',
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
              教学管理
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl font-light tracking-wide"
            >
              TEACHING MANAGEMENT
            </motion.p>
          </div>
        </div>
      </section>

      {/* 子导航标签 */}
      <section className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="flex space-x-0 border-b border-gray-200 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-4 text-sm md:text-base font-medium transition-colors duration-200 whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'text-[#7c569d] border-b-2 border-[#7c569d]'
                      : 'text-gray-600 hover:text-[#7c569d]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 主要内容区域 */}
      <main className="py-16">
        <div className="container mx-auto px-4">
          {renderContent()}
        </div>
      </main>


      <Footer />
    </div>
  );
};

export default TeachingManagement;
