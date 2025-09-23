import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const StudentStars: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  
  // 复制学生数据，使总数达到20人（两页），没有图片的使用钟舒铃图片
  const allStudents = [
    // 第一页学生
    {
      name: "王璨",
      achievement: "清华大学",
      image: "/src/assets/images/students/student1.jpg"
    },
    {
      name: "王涵",
      achievement: "北京大学",
      image: "/src/assets/images/students/student2.jpg"
    },
    {
      name: "钟夏临",
      achievement: "清华大学",
      image: "/src/assets/images/students/student3.jpg"
    },
    {
      name: "钟舒铃",
      achievement: "北京大学",
      image: "/src/assets/images/students/student4.jpg"
    },
    {
      name: "李思远",
      achievement: "清华大学",
      image: "/src/assets/images/students/student4.jpg"
    },
    {
      name: "张雨欣",
      achievement: "北京大学",
      image: "/src/assets/images/students/student4.jpg"
    },
    {
      name: "陈宇航",
      achievement: "清华大学",
      image: "/src/assets/images/students/student4.jpg"
    },
    {
      name: "刘佳怡",
      achievement: "北京大学",
      image: "/src/assets/images/students/student4.jpg"
    },
    {
      name: "赵明哲",
      achievement: "清华大学",
      image: "/src/assets/images/students/student4.jpg"
    },
    {
      name: "孙小美",
      achievement: "北京大学",
      image: "/src/assets/images/students/student4.jpg"
    },
    // 第二页学生（复制第一页并修改名字）
    {
      name: "王璨(2)",
      achievement: "清华大学",
      image: "/src/assets/images/students/student1.jpg"
    },
    {
      name: "王涵(2)",
      achievement: "北京大学",
      image: "/src/assets/images/students/student2.jpg"
    },
    {
      name: "钟夏临(2)",
      achievement: "清华大学",
      image: "/src/assets/images/students/student3.jpg"
    },
    {
      name: "钟舒铃(2)",
      achievement: "北京大学",
      image: "/src/assets/images/students/student4.jpg"
    },
    {
      name: "李思远(2)",
      achievement: "清华大学",
      image: "/src/assets/images/students/student4.jpg"
    },
    {
      name: "张雨欣(2)",
      achievement: "北京大学",
      image: "/src/assets/images/students/student4.jpg"
    },
    {
      name: "陈宇航(2)",
      achievement: "清华大学",
      image: "/src/assets/images/students/student4.jpg"
    },
    {
      name: "刘佳怡(2)",
      achievement: "北京大学",
      image: "/src/assets/images/students/student4.jpg"
    },
    {
      name: "赵明哲(2)",
      achievement: "清华大学",
      image: "/src/assets/images/students/student4.jpg"
    },
    {
      name: "孙小美(2)",
      achievement: "北京大学",
      image: "/src/assets/images/students/student4.jpg"
    }
  ];

  // 每页显示10个学生（两行，每行5个）
  const studentsPerPage = 10;
  const totalPages = Math.ceil(allStudents.length / studentsPerPage);
  const currentStudents = allStudents.slice(
    currentPage * studentsPerPage,
    (currentPage + 1) * studentsPerPage
  );

  return (
    <section className="py-16 bg-[#f9f9f9]">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-[#800080] mb-6">学生之星</h2>
          <div className="w-32 h-1.5 bg-[#800080] mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* 学生展示区域 */}
          <div className="relative">
            {/* 第一行5个学生 */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-2">
              {currentStudents.slice(0, 5).map((student, index) => (
                <motion.div
                  key={`${student.name}-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-transparent rounded-lg overflow-hidden"
                >
                  <div className="flex flex-col items-center p-4">
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-3">
                      <img 
                        src={student.image}
                        alt={student.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-purple-600 mb-1 text-center leading-tight font-sans antialiased">{student.name}</h3>
                    <p className="text-purple-600 text-sm font-semibold text-center leading-tight font-sans antialiased">{student.achievement}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* 切换按钮 - 左右分开 */}
            <div className="relative my-1 h-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setCurrentPage(prev => (prev - 1 + totalPages) % totalPages)}
                className={`absolute left-4 p-3 rounded-full shadow-lg transition-all ${
                  currentPage === 0 
                    ? 'bg-gray-300 cursor-not-allowed' 
                    : 'bg-[#800080] text-white hover:bg-[#6a006a]'
                }`}
                disabled={currentPage === 0}
              >
                <ChevronLeft size={24} />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setCurrentPage(prev => (prev + 1) % totalPages)}
                className={`absolute right-4 p-3 rounded-full shadow-lg transition-all ${
                  currentPage === totalPages - 1
                    ? 'bg-gray-300 cursor-not-allowed' 
                    : 'bg-[#800080] text-white hover:bg-[#6a006a]'
                }`}
                disabled={currentPage === totalPages - 1}
              >
                <ChevronRight size={24} />
              </motion.button>
            </div>

            {/* 第二行5个学生 */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-2">
              {currentStudents.slice(5, 10).map((student, index) => (
                <motion.div
                  key={`${student.name}-${index+5}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (index + 5) * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-transparent rounded-lg overflow-hidden"
                >
                  <div className="flex flex-col items-center p-4">
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-3">
                      <img 
                        src={student.image}
                        alt={student.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-purple-600 mb-1 text-center leading-tight font-sans antialiased">{student.name}</h3>
                    <p className="text-purple-600 text-sm font-semibold text-center leading-tight font-sans antialiased">{student.achievement}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* 移除原切换按钮位置 */}
        </div>
      </div>
    </section>
  );
};

export default StudentStars;