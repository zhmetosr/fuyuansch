import React from 'react';
import { motion } from 'framer-motion';

const TeachersWall: React.FC = () => {
  const teachers = [
    {
      name: "鲁老师",
      subject: "清北语文名师",
      image: "/src/assets/images/teachers/lu.png",
      description: "深圳市语文名师，教学经验丰富，深受学生喜爱"
    },
    {
      name: "吴老师",
      subject: "清北数学名师",
      image: "/src/assets/images/teachers/wu.png",
      description: "所教学生在深圳市统考数学单科第一名"
    },
    {
      name: "王老师",
      subject: "清北历史名师",
      image: "/src/assets/images/teachers/wang.jpg",
      description: "河南省历史优质课大赛一等奖获得者"
    },
    {
      name: "黄老师",
      subject: "清北化学名师",
      image: "/src/assets/images/teachers/huang.jpg",
      description: "深圳市化学学科带头人，多次参与高考模拟题命题工作"
    },
    {
      name: "夏老师",
      subject: "清北英语名师",
      image: "/src/assets/images/teachers/xia.jpg",
      description: "深圳市优秀教师称号"
    },
    {
      name: "操老师",
      subject: "清北物理名师",
      image: "/src/assets/images/teachers/cao.jpg",
      description: "拥有丰富的物理竞赛经验，多次指导学生获得物理竞赛奖项"
    },
    {
      name: "谢老师",
      subject: "清北物理名师",
      image: "/src/assets/images/teachers/xie.jpg",
      description: "从事物理竞赛培训多年，多次指导学生获得物理竞赛奖项"
    },
    {
      name: "方老师",
      subject: "清北化学名师",
      image: "/src/assets/images/teachers/fang.jpg",
      description: "所带学生有三位达到省一层次，担任化学培优工作"
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
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#800080] mb-4">优秀教师团队</h2>
          <div className="w-24 h-1 bg-[#800080] mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <motion.div
              key={teacher.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#800080]">{teacher.name}</h3>
                <p className="text-gray-600 font-medium mb-2">{teacher.subject}</p>
                <p className="text-gray-500 text-sm mb-3">{teacher.description}</p>
                <button 
                  className="text-[#800080] text-sm font-medium hover:underline"
                  onClick={() => {
                    const modal = document.getElementById(`teacher-modal-${index}`);
                    if (modal) modal.classList.remove('hidden');
                  }}
                >
                  查看完整简介 &rarr;
                </button>
              </div>

              {/* 老师个人简介模态框 */}
              <div 
                id={`teacher-modal-${index}`}
                className="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
                onClick={(e) => {
                  if (e.target === e.currentTarget) {
                    e.currentTarget.classList.add('hidden');
                  }
                }}
              >
                <div className="bg-white rounded-lg max-w-2xl w-full p-6 max-h-[80vh] overflow-y-auto">
                  <div className="flex items-start mb-6">
                    <div className="w-32 h-32 rounded-full overflow-hidden mr-6 flex-shrink-0">
                      <img 
                        src={teacher.image}
                        alt={teacher.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#800080]">{teacher.name}</h3>
                      <p className="text-gray-600 font-medium text-lg mb-4">{teacher.subject}</p>
                      <p className="text-gray-700">{teacher.description}</p>
                    </div>
                  </div>
                  
                  <div className="prose max-w-none">
                    <h4 className="text-[#800080] font-semibold mb-2">教学成果</h4>
                    <ul className="list-disc pl-5 space-y-1 mb-4">
                      <li>培养10余名学生考入清华北大</li>
                      <li>所带班级平均分连续5年位居全市前列</li>
                      <li>多次获得省级优秀教师称号</li>
                    </ul>
                    
                    <h4 className="text-[#800080] font-semibold mb-2">教学理念</h4>
                    <p className="mb-4">
                      注重因材施教，激发学生学习兴趣，培养独立思考能力，帮助学生建立完整的知识体系。
                    </p>
                    
                    <h4 className="text-[#800080] font-semibold mb-2">学术成就</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>发表教学论文20余篇</li>
                      <li>主持省级教研课题3项</li>
                      <li>参与编写教材5部</li>
                    </ul>
                  </div>
                  
                  <button 
                    className="mt-6 bg-[#800080] text-white px-4 py-2 rounded hover:bg-opacity-90 transition"
                    onClick={() => {
                      const modal = document.getElementById(`teacher-modal-${index}`);
                      if (modal) modal.classList.add('hidden');
                    }}
                  >
                    关闭
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachersWall;