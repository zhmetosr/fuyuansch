import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface Teacher {
  id: number;
  name: string;
  title: string;
  subject: string;
  image: string;
  description: string;
  achievements: string[];
}const Teachers: React.FC = () => {
  // 模拟教师数据
  const teachers: Teacher[] = [
    {
      id: 1,
      name: "张老师",
      title: "特级教师",
      subject: "语文",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=middle%20school%20chinese%20teacher&sign=04bb507d5831f47f5d2a97e984805ea0",
      description: "张老师从事语文教学工作20余年，拥有丰富的教学经验和深厚的文学功底。教学风格生动有趣，深受学生喜爱。",
      achievements: [
        "全国优秀教师",
        "广东省特级教师",
        "深圳市学科带头人",
        "出版教育专著3部"
      ]
    },
    {
      id: 2,
      name: "李老师",
      title: "高级教师",
      subject: "数学",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=middle%20school%20math%20teacher&sign=ee8e1514c3d11e8cc026bd5ccfae0465",
      description: "李老师专注于数学教学研究，教学方法独特，善于激发学生的学习兴趣和思维能力，所教学生在各类数学竞赛中多次获奖。",
      achievements: [
        "广东省优秀教师",
        "全国数学奥林匹克优秀指导教师",
        "深圳市优秀班主任"
      ]
    },
    {
      id: 3,
      name: "王老师",
      title: "高级教师",
      subject: "英语",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=middle%20school%20english%20teacher&sign=f9c15a2e8a51fac7ff3ef943f5593afe",
      description: "王老师拥有丰富的英语教学经验，教学风格活泼开朗，注重培养学生的听说读写能力，课堂氛围轻松愉快。",
      achievements: [
        "深圳市优秀教师",
        "全国英语优质课大赛一等奖",
        "出版英语教学书籍2部"
      ]
    },
    {
      id: 4,
      name: "陈老师",
      title: "高级教师",
      subject: "物理",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=middle%20school%20physics%20teacher&sign=e07e592b08efad4712ea29ee7f88ae27",
      description: "陈老师致力于物理教学改革和创新，善于将抽象的物理概念转化为生动有趣的实验和现象，让学生在实践中理解物理知识。",
      achievements: [
        "广东省物理教学能手",
        "全国物理实验教学大赛一等奖",
        "深圳市优秀教师"
      ]
    },
    {
      id: 5,
      name: "刘老师",
      title: "高级教师",
      subject: "化学",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=middle%20school%20chemistry%20teacher&sign=c436ddc0458b1479793a40bae24cf3e5",
      description: "刘老师从事化学教学工作15年，教学经验丰富，注重实验教学，善于培养学生的科学探究能力和创新思维。",
      achievements: [
        "广东省优秀教师",
        "全国化学实验教学大赛一等奖",
        "深圳市优秀班主任"
      ]
    },
    {
      id: 6,
      name: "赵老师",
      title: "一级教师",
      subject: "生物",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=middle%20school%20biology%20teacher&sign=bfbc52ea1a1bdc27edc622de77a9a75b",
      description: "赵老师热爱生物学，教学风格生动有趣，注重培养学生的观察能力和实践能力，带领学生开展多种生物实验和探究活动。",
      achievements: [
        "深圳市优秀教师",
        "广东省生物教学能手",
        "全国青少年科技创新大赛优秀指导教师"
      ]
    }
  ];

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
              师资力量
            </motion.h1>
            <motion.p 
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-2 text-white text-opacity-80"
            >
              富源基础学校拥有一支高素质、经验丰富的教师队伍
            </motion.p>
          </div>
        </section>
        
        {/* 教师团队概述 */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
               <h2 className="text-2xl md:text-3xl font-bold text-[#800080] mb-4">教师团队</h2>
               <div className="w-24 h-1 bg-[#800080] mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-3xl mx-auto">
                富源基础学校拥有一支高素质、经验丰富的教师队伍。目前，学校有教职工120余人，其中特级教师5人，高级教师30人，一级教师50人。教师队伍结构合理，教学经验丰富，教学水平高。
              </p>
            </motion.div>
            
            {/* 教师卡片网格 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {teachers.map((teacher, index) => (
                <motion.div
                  key={teacher.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all"
                >
                  <div className="aspect-w-1 aspect-h-1 bg-gray-100">
                    <img 
                      src={teacher.image}
                      alt={teacher.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">{teacher.name}</h3>
                     <p className="text-[#800080] font-medium mb-1">{teacher.title} | {teacher.subject}</p>
                    
                    <div className="border-t border-gray-100 my-4 pt-4">
                      <p className="text-gray-600 text-sm mb-4">{teacher.description}</p>
                      
                      <h4 className="text-sm font-medium text-gray-800 mb-2">主要成就：</h4>
                      <ul className="text-gray-600 text-sm space-y-1">
                        {teacher.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                             <i className="fas fa-circle text-[#800080] text-[6px] mt-2 mr-2"></i>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* 教师培养 */}
        <section className="py-16 bg-[#f9f9f9]">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
               <h2 className="text-2xl md:text-3xl font-bold text-[#800080] mb-4">教师培养</h2>
               <div className="w-24 h-1 bg-[#800080] mx-auto"></div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all"
              >
                 <div className="w-16 h-16 bg-[#800080] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6 text-[#800080]">
                  <i className="fas fa-chalkboard-teacher text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">专业发展</h3>
                <p className="text-gray-600 text-center">
                  学校建立了完善的教师专业发展体系，定期组织教师参加培训、研讨和交流活动，不断提升教师的专业素养和教学能力。
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all"
              >
                 <div className="w-16 h-16 bg-[#800080] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6 text-[#800080]">
                  <i className="fas fa-search text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">教学研究</h3>
                <p className="text-gray-600 text-center">
                  学校鼓励教师开展教学研究，设立专项科研基金，支持教师申报各级各类科研课题，促进教学与科研的有机结合。
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all"
              >
                 <div className="w-16 h-16 bg-[#800080] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6 text-[#800080]">
                  <i className="fas fa-user-graduate text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">青蓝工程</h3>
                <p className="text-gray-600 text-center">
                  学校实施"青蓝工程"，组织经验丰富的老教师与青年教师结对帮扶，促进青年教师快速成长，打造高素质教师团队。
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </motion.main>
      
      <Footer />
    </div>
  );
};

export default Teachers;