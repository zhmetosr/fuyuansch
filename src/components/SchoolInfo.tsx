import React from 'react';
import { motion } from 'framer-motion';

const SchoolInfo: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
           <h2 className="text-3xl font-bold text-[#800080] mb-4">学校简介</h2>
           <div className="w-24 h-1 bg-[#800080] mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img 
              src="/src/assets/images/school/campus.jpg"
              alt="富源基础学校全景"
              className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
             <h3 className="text-2xl font-semibold text-[#800080] mb-4">富源基础学校 - 培养未来的领导者</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              富源基础学校创建于2000年，是一所集小学、初中为一体的全日制优质学校。学校占地面积50亩，建筑面积20000平方米，环境优美，设施齐全。
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              学校坚持"以人为本，全面发展"的教育理念，致力于培养具有创新精神和实践能力的复合型人才。目前，学校有教职工120余人，其中特级教师5人，高级教师30人，学生2000余名。
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              近年来，学校先后被评为"全国教育系统先进集体"、"省级文明单位"、"省级示范学校"等荣誉称号。在各级各类竞赛中，学生获奖累计达1000余人次。
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
             <div className="w-12 h-12 bg-[#800080] bg-opacity-10 rounded-full flex items-center justify-center mr-3">
               <span className="text-[#800080] font-bold text-xl">20+</span>
                </div>
                <div>
                  <p className="text-gray-700 font-medium">办学年限</p>
                </div>
              </div>
              
              <div className="flex items-center">
             <div className="w-12 h-12 bg-[#800080] bg-opacity-10 rounded-full flex items-center justify-center mr-3">
               <span className="text-[#800080] font-bold text-xl">2000+</span>
                </div>
                <div>
                  <p className="text-gray-700 font-medium">在校学生</p>
                </div>
              </div>
              
              <div className="flex items-center">
             <div className="w-12 h-12 bg-[#800080] bg-opacity-10 rounded-full flex items-center justify-center mr-3">
               <span className="text-[#800080] font-bold text-xl">120+</span>
                </div>
                <div>
                  <p className="text-gray-700 font-medium">优秀教师</p>
                </div>
              </div>
            </div>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
               className="inline-block mt-8 bg-[#800080] text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all"
            >
              查看详情
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SchoolInfo;