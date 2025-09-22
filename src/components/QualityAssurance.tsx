import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, MessageCircle, Users, BarChart3, CheckCircle, Award, Target, TrendingUp } from 'lucide-react';

const QualityAssurance: React.FC = () => {
  const measures = [
    {
      icon: BookOpen,
      title: "备课授课",
      description: "精心准备，专业授课",
      details: [
        "主讲老师亲自备课，确保教学内容质量",
        "采用先进的教学方法和教学理念",
        "结合高考大纲，制定科学的教学计划",
        "定期更新教学内容，紧跟考试动态"
      ],
      step: "01"
    },
    {
      icon: MessageCircle,
      title: "答疑辅导",
      description: "及时解答，精准指导",
      details: [
        "每天至少3小时为学生答疑解惑",
        "建立完善的答疑制度和流程",
        "针对不同层次学生提供差异化辅导",
        "及时解决学生学习中的疑难问题"
      ],
      step: "02"
    },
    {
      icon: Users,
      title: "学习监督",
      description: "全程跟踪，及时调整",
      details: [
        "主讲老师主动监督各学科学习情况",
        "建立学生学习档案，记录学习轨迹",
        "定期评估学习效果，调整教学策略",
        "确保每个学生都能跟上学习进度"
      ],
      step: "03"
    },
    {
      icon: BarChart3,
      title: "质量监控",
      description: "持续改进，追求卓越",
      details: [
        "建立教学质量评估体系",
        "定期进行教学效果分析",
        "收集学生和家长反馈意见",
        "持续优化教学管理和服务"
      ],
      step: "04"
    }
  ];

  const qualityStats = [
    { icon: CheckCircle, number: "100%", label: "教师资质", description: "全部来自名校" },
    { icon: Award, number: "95%", label: "学生满意度", description: "教学质量认可" },
    { icon: Target, number: "98%", label: "目标达成率", description: "学习目标完成" },
    { icon: TrendingUp, number: "85%", label: "成绩提升", description: "平均提升幅度" }
  ];

  return (
    <section className="py-20 bg-gray-50">
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
            教学质量保障
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            建立完善的质量保障体系，确保教学效果和学生学习成果
          </p>
        </motion.div>

        {/* 质量统计 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {qualityStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-[#7c569d] to-[#6a4a8a] rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-[#7c569d] mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-gray-800 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600">
                {stat.description}
              </div>
            </div>
          ))}
        </motion.div>

        {/* 质量保障流程时间轴 */}
        <div className="relative">
          {/* 时间轴线 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#7c569d] to-orange-500 rounded-full"></div>
          
          <div className="space-y-16">
            {measures.map((measure, index) => (
              <motion.div
                key={measure.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* 内容卡片 */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center mr-6">
                        <measure.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#7c569d] mb-2">
                          {measure.title}
                        </h3>
                        <p className="text-gray-600 font-medium">
                          {measure.description}
                        </p>
                      </div>
                    </div>
                    
                    <ul className="space-y-3">
                      {measure.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-[#7c569d] rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 leading-relaxed">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 时间轴节点 */}
                <div className="w-2/12 flex justify-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#7c569d] to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-white">
                      {measure.step}
                    </span>
                  </div>
                </div>

                {/* 空白区域 */}
                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default QualityAssurance;
