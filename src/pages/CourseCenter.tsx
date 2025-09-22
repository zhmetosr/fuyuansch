import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CourseCenter: React.FC = () => {
  const [currentCourse, setCurrentCourse] = useState(0);
  
  const courses = [
    {
      title: "高考复读课程",
      description: "针对高考复读生的全方位课程体系，涵盖所有考试科目，配备资深教师团队，提供个性化辅导方案。",
      image: "/src/assets/images/courses/gaokao.jpg"
    },
    {
      title: "中考复读课程",
      description: "专为中考复读生设计的系统课程，强化基础知识，提升应试技巧，帮助学生实现成绩突破。",
      image: "/src/assets/images/courses/zhongkao.jpg"
    },
    {
      title: "英美国际课程",
      description: "英美国际课程体系，融合中西教育优势，为学生提供多元化的国际教育选择。",
      image: "/src/assets/images/courses/international.jpg"
    }
  ];

  const nextCourse = () => {
    setCurrentCourse((prev) => (prev + 1) % courses.length);
  };

  const prevCourse = () => {
    setCurrentCourse((prev) => (prev - 1 + courses.length) % courses.length);
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9] text-[#333333]">
      <Header />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full"
      >
        {/* 页面标题 */}
        <section className="py-12 bg-[#800080] text-white">
          <div className="container mx-auto px-4">
            <motion.h1 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold"
            >
              课程中心
            </motion.h1>
            <motion.p 
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-2 text-white text-opacity-80"
            >
              了解我们提供的各类优质课程
            </motion.p>
          </div>
        </section>
        
        {/* 课程展示 */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="relative">
              {/* 课程图片 */}
              <motion.div
                key={currentCourse}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <img 
                  src={courses[currentCourse].image}
                  alt={courses[currentCourse].title}
                  className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                />
              </motion.div>
              
              {/* 课程文字内容 */}
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-[#800080] mb-4">
                  {courses[currentCourse].title}
                </h2>
                <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
                  {courses[currentCourse].description}
                </p>
              </div>
              
              {/* 切换箭头 */}
              <button
                onClick={prevCourse}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-70 text-[#800080] p-2 rounded-full shadow-md transition-all"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button
                onClick={nextCourse}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-70 text-[#800080] p-2 rounded-full shadow-md transition-all"
              >
                <ChevronRight size={24} />
              </button>
              
              {/* 指示器 */}
              <div className="flex justify-center space-x-2 mt-6">
                {courses.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentCourse(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentCourse === index 
                        ? 'bg-[#800080]' 
                        : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </motion.main>
      
      <Footer />
    </div>
  );
};

export default CourseCenter;