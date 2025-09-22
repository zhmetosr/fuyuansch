import React from 'react';
import { motion } from 'framer-motion';

const CoursePreview: React.FC = () => {
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

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#800080] mb-4">课程中心</h2>
          <div className="w-24 h-1 bg-[#800080] mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#800080] mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {course.description}
                </p>
                <div className="mt-4">
                  <a 
                    href="#" 
                    className="inline-block px-4 py-2 bg-[#800080] text-white text-sm rounded hover:bg-opacity-90 transition-colors"
                  >
                    了解详情
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursePreview;