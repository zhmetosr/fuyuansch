import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Heart } from 'lucide-react';

const TeachingSystem: React.FC = () => {
  const systems = [
    {
      icon: BookOpen,
      title: "学科监督",
      color: "from-orange-400 to-orange-500",
      content: "主讲老师跟踪式辅导，通过个性化的学科监督确保学习进度。主讲老师来自浙江大学、复旦大学、上海交大、哈工大等名校，并有成熟的教学经验，亲自备课、授课、辅导，全天陪伴学生到深夜十点半。主讲老师每天至少三个小时为学生辅导答疑，培优补强，主动监督各个学科学习被动的学生，协助学生解决心理问题，并将重要情况反馈给班主任。"
    },
    {
      icon: Users,
      title: "综合支持",
      color: "from-orange-400 to-orange-500",
      content: "班主任24小时在线，第一时间响应，为学生提供综合性的支持和力量。全部来自名校主讲老师队伍，亲自给学生上课，深度了解每位学生的学习需要。班主任每天监督学生的学习节奏、身心状态，每周为学生召开班会、组织活动，和家长、生活老师、任课老师、家长、全天密切沟通，让每一位学生及时得到辅导、关爱和照顾。"
    },
    {
      icon: Heart,
      title: "后勤关爱",
      color: "from-orange-400 to-orange-500",
      content: "生活老师昼夜轮班，结合学生自习情况，提供大后方的温暖关爱。生活老师分为白班夜班24小时\"妈妈式\"守护学生，除了给学生打扫卫生、洗衣服，生活老师还负责监督学生晚自习。生活老师记录学生自习表现，综合学生在宿舍的状态，对于消极怠学、心态脆弱的学生，及时鼓励关心，并将重要情况反馈给班主任。"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* 背景图片 */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/src/assets/images/banner/classroom.jpg)',
          filter: 'brightness(0.3)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#7c569d]/90 to-[#5a3a7a]/90" />
      
      {/* 装饰元素 */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-orange-400/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
      
      {/* 顶部介绍区域 */}
      <div className="container mx-auto px-4 mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            教学管理体系
          </h2>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed opacity-90">
            在学习管理方面，桃李未来复读学校采用"全封闭寄宿式"管理模式，做到严格作息、严管手机、严查校园出入。
            学校主讲老师追踪式辅导、班主任和生活老师双轨制无缝配合，搭建了"学科监督+综合支持+后勤关爱"的全方位陪伴式督导模式。
          </p>
        </motion.div>
      </div>

      {/* 三大体系卡片 */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {systems.map((system, index) => (
            <motion.div
              key={system.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-center mb-6">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${system.color} flex items-center justify-center`}>
                  <system.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#7c569d] mb-2">
                  {system.title}
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-orange-500 mx-auto rounded-full"></div>
              </div>
              <p className="text-gray-700 leading-relaxed text-center">
                {system.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachingSystem;
