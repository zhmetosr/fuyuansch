import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About: React.FC = () => {
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
              学校简介
            </motion.h1>
            <motion.p 
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-2 text-white text-opacity-80"
            >
              了解富源基础学校的发展历程、办学理念与办学成果
            </motion.p>
          </div>
        </section>
        
        {/* 历史沿革 */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
           <h2 className="text-2xl md:text-3xl font-bold text-[#800080] mb-4">历史沿革</h2>
           <div className="w-24 h-1 bg-[#800080]"></div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=school%20history%20old%20and%20new%20photos&sign=41c436efeefb8f300d5cb5671992c899"
                  alt="富源基础学校历史"
                  className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-700 mb-4 leading-relaxed">
                  富源基础学校创建于2000年，是经深圳市教育局批准成立的一所全日制优质学校。学校占地面积50亩，建筑面积20000平方米，环境优美，设施齐全。
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  建校以来，学校始终坚持"以人为本，全面发展"的教育理念，致力于培养具有创新精神和实践能力的复合型人才。经过二十多年的发展，学校已成为深圳市具有较高知名度和影响力的优质学校之一。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  2010年，学校被评为"深圳市一级学校"；2015年，被评为"广东省一级学校"；2020年，被评为"全国教育系统先进集体"。目前，学校有教职工120余人，其中特级教师5人，高级教师30人，学生2000余名。
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* 办学理念 */}
        <section className="py-16 bg-[#f9f9f9]">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
               <h2 className="text-2xl md:text-3xl font-bold text-[#800080] mb-4">办学理念</h2>
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
                  <i className="fas fa-lightbulb text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">核心理念</h3>
                <p className="text-gray-600 text-center">
                  以人为本，全面发展，为学生的终身发展奠定坚实基础
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
                  <i className="fas fa-bullseye text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">培养目标</h3>
                <p className="text-gray-600 text-center">
                  培养具有家国情怀、国际视野、创新精神和实践能力的新时代人才
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
                  <i className="fas fa-graduation-cap text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">校训</h3>
                <p className="text-gray-600 text-center">
                  博学、笃行、诚信、创新
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* 办学成果 */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
           <h2 className="text-2xl md:text-3xl font-bold text-[#800080] mb-4">办学成果</h2>
           <div className="w-24 h-1 bg-[#800080]"></div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">学校荣誉</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                     <div className="w-6 h-6 bg-[#800080] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <i className="fas fa-award text-white text-xs"></i>
                    </div>
                    <span className="text-gray-700">全国教育系统先进集体</span>
                  </li>
                  <li className="flex items-start">
                     <div className="w-6 h-6 bg-[#800080] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <i className="fas fa-award text-white text-xs"></i>
                    </div>
                    <span className="text-gray-700">广东省一级学校</span>
                  </li>
                  <li className="flex items-start">
                     <div className="w-6 h-6 bg-[#800080] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <i className="fas fa-award text-white text-xs"></i>
                    </div>
                    <span className="text-gray-700">广东省文明单位</span>
                  </li>
                  <li className="flex items-start">
                     <div className="w-6 h-6 bg-[#800080] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <i className="fas fa-award text-white text-xs"></i>
                    </div>
                    <span className="text-gray-700">深圳市教育先进单位</span>
                  </li>
                  <li className="flex items-start">
                     <div className="w-6 h-6 bg-[#800080] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <i className="fas fa-award text-white text-xs"></i>
                    </div>
                    <span className="text-gray-700">深圳市绿色学校</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">学生成绩</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                     <div className="w-6 h-6 bg-[#800080] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <i className="fas fa-trophy text-white text-xs"></i>
                    </div>
                    <span className="text-gray-700">中考成绩连续十年位居全区前列</span>
                  </li>
                  <li className="flex items-start">
                     <div className="w-6 h-6 bg-[#800080] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <i className="fas fa-trophy text-white text-xs"></i>
                    </div>
                    <span className="text-gray-700">学生在各级各类竞赛中获奖累计达1000余人次</span>
                  </li>
                  <li className="flex items-start">
                     <div className="w-6 h-6 bg-[#800080] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <i className="fas fa-trophy text-white text-xs"></i>
                    </div>
                    <span className="text-gray-700">近五年，我校毕业生升入重点高中的比例达85%以上</span>
                  </li>
                  <li className="flex items-start">
                     <div className="w-6 h-6 bg-[#800080] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <i className="fas fa-trophy text-white text-xs"></i>
                    </div>
                    <span className="text-gray-700">我校学生在科技创新、文艺表演、体育竞赛等方面表现突出</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      </motion.main>
      
      <Footer />
    </div>
  );
};

export default About;