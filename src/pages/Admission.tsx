import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Phone, Mail, FileText, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import Header from '../components/Header';
import TencentMap from '../components/TencentMap';
import Footer from '../components/Footer';
import GaokaoAdmission from '../components/GaokaoAdmission';

const Admission: React.FC = () => {
  const [showGaokao, setShowGaokao] = useState(false);
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
         <section className="py-12 bg-[#7c569d] text-white">
          <div className="container mx-auto px-4">
            <motion.h1 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold"
            >
              招生信息
            </motion.h1>
            <motion.p 
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-2 text-white text-opacity-80"
            >
              了解富源基础学校的招生政策和报名流程
            </motion.p>
          </div>
        </section>
        
        {/* 招生简章 */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
           <h2 className="text-2xl md:text-3xl font-bold text-[#7c569d] mb-4">2024年春季招生简章</h2>
           <div className="w-24 h-1 bg-[#7c569d]"></div>
            </motion.div>
            
            {/* 高考招生简章 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div 
                className="flex items-center justify-between cursor-pointer p-4 bg-[#f9f9f9] rounded-lg"
                onClick={() => setShowGaokao(!showGaokao)}
              >
                <h2 className="text-xl font-bold text-[#7c569d]">高考招生信息</h2>
                {showGaokao ? <ChevronUp className="text-[#7c569d]" /> : <ChevronDown className="text-[#7c569d]" />}
              </div>
              
              <motion.div
                initial={false}
                animate={{ height: showGaokao ? 'auto' : 0, opacity: showGaokao ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <GaokaoAdmission className="mt-4" />
              </motion.div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">招生对象</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                     <div className="w-6 h-6 bg-[#7c569d] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <i className="fas fa-check text-white text-xs"></i>
                      </div>
                      <span className="text-gray-700">小学一年级：年满6周岁（2018年8月31日前出生）的适龄儿童</span>
                    </li>
                    <li className="flex items-start">
                     <div className="w-6 h-6 bg-[#800080] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <i className="fas fa-check text-white text-xs"></i>
                      </div>
                      <span className="text-gray-700">小学二至六年级：符合转学条件的学生</span>
                    </li>
                    <li className="flex items-start">
                     <div className="w-6 h-6 bg-[#800080] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <i className="fas fa-check text-white text-xs"></i>
                      </div>
                      <span className="text-gray-700">初中一年级：符合入学条件的小学毕业生</span>
                    </li>
                    <li className="flex items-start">
                     <div className="w-6 h-6 bg-[#800080] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <i className="fas fa-check text-white text-xs"></i>
                      </div>
                      <span className="text-gray-700">初中二至三年级：符合转学条件的学生</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">报名时间</h3>
                  <div className="flex items-start">
                     <Calendar size={20} className="mr-3 mt-1 text-[#7c569d] flex-shrink-0" />
                    <span className="text-gray-700">2023年10月1日至2023年11月30日</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">报名方式</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                     <div className="w-6 h-6 bg-[#800080] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <i className="fas fa-check text-white text-xs"></i>
                      </div>
                      <span className="text-gray-700">网上报名：登录学校官网，填写报名信息</span>
                    </li>
                    <li className="flex items-start">
                     <div className="w-6 h-6 bg-[#800080] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <i className="fas fa-check text-white text-xs"></i>
                      </div>
                      <span className="text-gray-700">现场报名：携带相关材料到学校招生办公室报名</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">所需材料</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                     <div className="w-6 h-6 bg-[#800080] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <i className="fas fa-file-alt text-white text-xs"></i>
                      </div>
                      <span className="text-gray-700">户口本原件及复印件</span>
                    </li>
                    <li className="flex items-start">
                     <div className="w-6 h-6 bg-[#800080] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <i className="fas fa-file-alt text-white text-xs"></i>
                      </div>
                      <span className="text-gray-700">学生身份证原件及复印件（如有）</span>
                    </li>
                    <li className="flex items-start">
                     <div className="w-6 h-6 bg-[#800080] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <i className="fas fa-file-alt text-white text-xs"></i>
                      </div>
                      <span className="text-gray-700">学生近期免冠一寸照片2张</span>
                    </li>
                    <li className="flex items-start">
                     <div className="w-6 h-6 bg-[#800080] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <i className="fas fa-file-alt text-white text-xs"></i>
                      </div>
                      <span className="text-gray-700">转学证明（转学学生提供）</span>
                    </li>
                    <li className="flex items-start">
                     <div className="w-6 h-6 bg-[#800080] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <i className="fas fa-file-alt text-white text-xs"></i>
                      </div>
                      <span className="text-gray-700">学生成长手册（如有）</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">录取流程</h3>
                  <ol className="space-y-2">
                    <li className="flex items-start">
                     <div className="w-6 h-6 bg-[#800080] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <span className="text-white text-xs font-medium">1</span>
                      </div>
                      <span className="text-gray-700">提交报名材料</span>
                    </li>
                    <li className="flex items-start">
                     <div className="w-6 h-6 bg-[#800080] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <span className="text-white text-xs font-medium">2</span>
                      </div>
                      <span className="text-gray-700">学校审核材料</span>
                    </li>
                    <li className="flex items-start">
                     <div className="w-6 h-6 bg-[#800080] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <span className="text-white text-xs font-medium">3</span>
                      </div>
                      <span className="text-gray-700">综合素质评估（面谈/测试）</span>
                    </li>
                    <li className="flex items-start">
                     <div className="w-6 h-6 bg-[#800080] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <span className="text-white text-xs font-medium">4</span>
                      </div>
                      <span className="text-gray-700">公布录取结果</span>
                    </li>
                    <li className="flex items-start">
                     <div className="w-6 h-6 bg-[#800080] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <span className="text-white text-xs font-medium">5</span>
                      </div>
                      <span className="text-gray-700">办理入学手续</span>
                    </li>
                  </ol>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* 常见问题 */}
        <section className="py-16 bg-[#f9f9f9]">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
               <h2 className="text-2xl md:text-3xl font-bold text-[#7c569d] mb-4">常见问题</h2>
               <div className="w-24 h-1 bg-[#7c569d] mx-auto"></div>
            </motion.div>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">学校的收费标准是多少？</h3>
                  <p className="text-gray-600">
                    我校严格按照物价部门核定的收费标准收取费用。具体收费标准可咨询学校招生办公室，我们会根据学生的年级和具体情况提供详细的收费信息。
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">学校是否提供住宿？</h3>
                  <p className="text-gray-600">
                    我校为有需要的学生提供住宿服务，宿舍环境舒适，设施齐全，配有专职生活老师负责学生的日常生活管理。住宿生实行封闭式管理，确保学生的安全和健康。
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">学校的课程设置有哪些特色？</h3>
                  <p className="text-gray-600">
                    我校在完成国家规定课程的基础上，开设了丰富多彩的特色课程，如科技创新、艺术素养、体育特长、社会实践等，旨在培养学生的创新精神和实践能力，促进学生的全面发展。
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">学校是否有奖学金制度？</h3>
                  <p className="text-gray-600">
                    我校设有完善的奖学金制度，对品学兼优的学生给予奖励和表彰。奖学金分为学年奖学金、竞赛奖学金、进步奖学金等多种类型，旨在激励学生努力学习，不断进步。
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* 招生咨询 */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
               <h2 className="text-2xl md:text-3xl font-bold text-[#7c569d] mb-4">招生咨询</h2>
               <div className="w-24 h-1 bg-[#7c569d] mx-auto"></div>
            </motion.div>
            
            <div className="max-w-3xl mx-auto bg-[#f9f9f9] p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                 <div className="w-12 h-12 bg-[#7c569d] bg-opacity-10 rounded-full flex items-center justify-center mr-4 text-[#7c569d] flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-1">联系电话</h3>
                    <p className="text-gray-600">0755-12345678</p>
                    <p className="text-gray-600">0755-12345679</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                 <div className="w-12 h-12 bg-[#800080] bg-opacity-10 rounded-full flex items-center justify-center mr-4 text-[#800080] flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-1">电子邮箱</h3>
                    <p className="text-gray-600">admission@fuyuanbaschool.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                 <div className="w-12 h-12 bg-[#800080] bg-opacity-10 rounded-full flex items-center justify-center mr-4 text-[#800080] flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-1">学校地址</h3>
                    <p className="text-gray-600">广东省深圳市宝安区富源路100号</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                 <div className="w-12 h-12 bg-[#800080] bg-opacity-10 rounded-full flex items-center justify-center mr-4 text-[#800080] flex-shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-1">咨询时间</h3>
                    <p className="text-gray-600">周一至周五: 8:00 - 18:00</p>
                    <p className="text-gray-600">周六: 9:00 - 16:00</p>
                  </div>
                </div>
              </div>
              
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#"
               className="inline-block mt-8 bg-[#7c569d] text-white px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all"
              >
                预约参观学校
              </motion.a>

              <div className="mt-12">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">学校位置</h3>
                <TencentMap />
              </div>
            </div>
          </div>
        </section>
      </motion.main>
      
      <Footer />
    </div>
  );
};

export default Admission;