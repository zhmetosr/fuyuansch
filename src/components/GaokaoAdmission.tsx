import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, BookOpen, Award, ClipboardList, Users, Percent } from 'lucide-react';

interface GaokaoAdmissionProps {
  className?: string;
}

const GaokaoAdmission: React.FC<GaokaoAdmissionProps> = ({ className }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold text-[#7c569d] mb-2">2024年高考招生简章</h2>
        <div className="w-20 h-1 bg-[#7c569d]"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
              <BookOpen size={20} className="mr-2 text-[#7c569d]" />
              招生对象
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="w-6 h-6 bg-[#7c569d] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <span className="text-white text-xs">1</span>
                </div>
                <span className="text-gray-700">普通高中应届毕业生</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-[#7c569d] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <span className="text-white text-xs">2</span>
                </div>
                <span className="text-gray-700">具有同等学力的社会考生</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-[#7c569d] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <span className="text-white text-xs">3</span>
                </div>
                <span className="text-gray-700">年龄不超过22周岁(2002年9月1日后出生)</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
              <Calendar size={20} className="mr-2 text-[#7c569d]" />
              报名时间
            </h3>
            <div className="space-y-2">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-[#7c569d] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <span className="text-white text-xs">1</span>
                </div>
                <span className="text-gray-700">网上报名：2023年11月1日-11月15日</span>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-[#7c569d] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <span className="text-white text-xs">2</span>
                </div>
                <span className="text-gray-700">现场确认：2023年11月16日-11月20日</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
              <ClipboardList size={20} className="mr-2 text-[#7c569d]" />
              考试科目
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="w-6 h-6 bg-[#7c569d] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <span className="text-white text-xs">语</span>
                </div>
                <span className="text-gray-700">语文（150分）</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-[#7c569d] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <span className="text-white text-xs">数</span>
                </div>
                <span className="text-gray-700">数学（150分）</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-[#7c569d] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <span className="text-white text-xs">外</span>
                </div>
                <span className="text-gray-700">外语（150分）</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-[#7c569d] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <span className="text-white text-xs">综</span>
                </div>
                <span className="text-gray-700">综合（300分）</span>
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
            <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
              <Award size={20} className="mr-2 text-[#7c569d]" />
              录取规则
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="w-6 h-6 bg-[#7c569d] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <span className="text-white text-xs">1</span>
                </div>
                <span className="text-gray-700">按高考总分从高到低择优录取</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-[#7c569d] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <span className="text-white text-xs">2</span>
                </div>
                <span className="text-gray-700">单科成绩不低于及格线（90分）</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-[#7c569d] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <span className="text-white text-xs">3</span>
                </div>
                <span className="text-gray-700">优先录取第一志愿考生</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
              <Percent size={20} className="mr-2 text-[#7c569d]" />
              录取比例
            </h3>
            <div className="space-y-2">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-[#7c569d] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <span className="text-white text-xs">1</span>
                </div>
                <span className="text-gray-700">文科：计划招生120人，录取比例1:1.2</span>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-[#7c569d] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <span className="text-white text-xs">2</span>
                </div>
                <span className="text-gray-700">理科：计划招生180人，录取比例1:1.5</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
              <Users size={20} className="mr-2 text-[#7c569d]" />
              特殊政策
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="w-6 h-6 bg-[#7c569d] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <span className="text-white text-xs">1</span>
                </div>
                <span className="text-gray-700">少数民族考生加5分</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-[#7c569d] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <span className="text-white text-xs">2</span>
                </div>
                <span className="text-gray-700">省级优秀学生加10分</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-[#7c569d] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <span className="text-white text-xs">3</span>
                </div>
                <span className="text-gray-700">体育特长生降20分录取</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-12 bg-[#f9f9f9] p-6 rounded-lg"
      >
        <h3 className="text-xl font-semibold text-gray-800 mb-4">注意事项</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <div className="w-6 h-6 bg-[#7c569d] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
              <span className="text-white text-xs">!</span>
            </div>
            <span className="text-gray-700">报名时需提供真实有效的个人信息和材料</span>
          </li>
          <li className="flex items-start">
            <div className="w-6 h-6 bg-[#7c569d] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
              <span className="text-white text-xs">!</span>
            </div>
            <span className="text-gray-700">考试当天需携带准考证和身份证原件</span>
          </li>
          <li className="flex items-start">
            <div className="w-6 h-6 bg-[#7c569d] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
              <span className="text-white text-xs">!</span>
            </div>
            <span className="text-gray-700">录取结果将在考试后30个工作日内公布</span>
          </li>
          <li className="flex items-start">
            <div className="w-6 h-6 bg-[#7c569d] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
              <span className="text-white text-xs">!</span>
            </div>
            <span className="text-gray-700">被录取考生需在规定时间内完成注册手续</span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default GaokaoAdmission;