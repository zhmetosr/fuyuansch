import React from 'react';
import { motion } from 'framer-motion';
import { Target, Brain, Heart, TrendingUp, Users, BookOpen, MessageCircle, Star } from 'lucide-react';

const PersonalizedTutoring: React.FC = () => {
  const services = [
    {
      icon: Target,
      title: "跟踪式辅导",
      description: "个性化学习方案，精准提升",
      features: [
        "主讲老师每天至少3小时个性化辅导",
        "根据学生特点制定专属学习计划",
        "实时跟踪学习进度，及时调整策略",
        "针对薄弱环节进行专项强化训练"
      ],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      icon: TrendingUp,
      title: "培优补强",
      description: "全面提升，均衡发展",
      features: [
        "主动监督各学科学习被动的学生",
        "为优秀学生提供更高层次的学习内容",
        "为后进学生提供基础巩固和提升",
        "确保每个学生都能得到适合的指导"
      ],
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50"
    },
    {
      icon: Brain,
      title: "心理支持",
      description: "关注心理健康，助力成长",
      features: [
        "协助学生解决学习中的心理问题",
        "提供专业的心理咨询和疏导服务",
        "帮助学生建立积极的学习心态",
        "及时关注学生的情绪变化和压力"
      ],
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50"
    },
    {
      icon: Heart,
      title: "全方位陪伴",
      description: "严中有爱，温暖守护",
      features: [
        "课堂-辅导室-宿舍一站式响应",
        "24小时全天候关注学生状态",
        "及时反馈重要情况给班主任",
        "营造温馨和谐的学习氛围"
      ],
      gradient: "from-red-500 to-orange-500",
      bgGradient: "from-red-50 to-orange-50"
    }
  ];

  const tutoringStats = [
    { icon: Users, number: "1:8", label: "师生比例", description: "确保每位学生得到充分关注" },
    { icon: BookOpen, number: "3+", label: "小时/天", description: "个性化辅导时间" },
    { icon: MessageCircle, number: "24h", label: "在线答疑", description: "随时解决学习问题" },
    { icon: Star, number: "100%", label: "覆盖学生", description: "每位学生都有专属辅导" }
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
            个性化辅导体系
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            从课堂内外跟踪每位学生的状态和表现，提供全方位的个性化支持
          </p>
        </motion.div>

        {/* 辅导统计 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {tutoringStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#7c569d] to-[#6a4a8a] rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-[#7c569d] mb-1">
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

        {/* 辅导服务展示 */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`bg-gradient-to-br ${service.bgGradient} rounded-2xl p-8 h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}>
                {/* 图标和标题 */}
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 font-medium">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                {/* 特色功能 */}
                <div className="space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mt-2 mr-4 flex-shrink-0`} />
                      <span className="text-gray-700 leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* 底部装饰 */}
                <div className={`mt-6 h-1 bg-gradient-to-r ${service.gradient} rounded-full`}></div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PersonalizedTutoring;
