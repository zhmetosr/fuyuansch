import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Users2, Shield } from 'lucide-react';

const TeacherTeam: React.FC = () => {
  const roles = [
    {
      icon: GraduationCap,
      title: "主讲老师",
      subtitle: "名校背景，经验丰富",
      description: "来自浙江大学、复旦大学、上海交大、哈工大等名校，具有成熟的教学经验和深厚的学科功底。亲自备课、授课、辅导，全天陪伴学生到深夜十点半，每天至少三个小时为学生辅导答疑，培优补强。",
      highlights: ["名校背景", "丰富经验", "全天陪伴", "专业辅导"]
    },
    {
      icon: Users2,
      title: "班主任",
      subtitle: "24小时在线，全方位支持",
      description: "全部来自名校主讲老师队伍，亲自给学生上课，深度了解每位学生的学习需要和个性特点。每天监督学生的学习节奏、身心状态，每周为学生召开班会、组织活动，全天密切沟通。",
      highlights: ["24小时在线", "深度了解", "全程监督", "密切沟通"]
    },
    {
      icon: Shield,
      title: "生活老师",
      subtitle: "妈妈式守护，温暖关爱",
      description: "昼夜轮班，24小时\"妈妈式\"守护学生，负责监督学生晚自习，记录学习表现。综合学生在宿舍的状态，及时发现问题，对消极怠学、心态脆弱的学生及时鼓励关心。",
      highlights: ["昼夜轮班", "妈妈式守护", "全程监督", "温暖关爱"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* 标题区域 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#7c569d] mb-6">
            师资力量配置
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            双轨制无缝配合，搭建全方位陪伴式督导模式
          </p>
        </motion.div>

        {/* 师资展示区域 */}
        <div className="space-y-20">
          {roles.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* 文字内容 */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#7c569d] to-[#6a4a8a] rounded-full flex items-center justify-center mr-6">
                    <role.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-[#7c569d] mb-2">
                      {role.title}
                    </h3>
                    <p className="text-orange-500 text-lg font-medium">
                      {role.subtitle}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  {role.description}
                </p>

                {/* 特色标签 */}
                <div className="flex flex-wrap gap-3">
                  {role.highlights.map((highlight, highlightIndex) => (
                    <span
                      key={highlightIndex}
                      className="px-4 py-2 bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-full text-sm font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              {/* 图片区域 */}
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="relative">
                  <div className="w-full h-80 rounded-2xl overflow-hidden relative">
                    {/* 背景图片 */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(/src/assets/images/teachers/${index === 0 ? 'cao.jpg' : index === 1 ? 'fang.jpg' : 'huang.jpg'})`,
                        filter: 'brightness(0.7)'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#7c569d]/80 to-[#6a4a8a]/60"></div>
                    
                    {/* 内容覆盖层 */}
                    <div className="relative z-10 h-full flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                          <role.icon className="w-12 h-12 text-white" />
                        </div>
                        <h4 className="text-2xl font-bold mb-2">
                          {role.title}
                        </h4>
                        <p className="text-white/90">
                          {role.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* 装饰性元素 */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-400 rounded-full opacity-30 blur-sm"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#7c569d] rounded-full opacity-30 blur-sm"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeacherTeam;
