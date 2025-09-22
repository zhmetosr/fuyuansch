import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Smartphone, Shield, BookOpen, CheckCircle } from 'lucide-react';

const LearningManagement: React.FC = () => {
  const rules = [
    {
      icon: Clock,
      title: "严格作息",
      description: "科学安排学习时间，确保高效学习",
      details: [
        "早上6:30起床，晚上22:30熄灯",
        "严格按照课程表进行教学活动",
        "保证充足睡眠，维护身心健康",
        "培养良好的时间管理习惯"
      ],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Smartphone,
      title: "严管手机",
      description: "杜绝手机干扰，专注学习环境",
      details: [
        "入学时统一收管手机，周末统一发放",
        "学习期间严禁使用任何电子设备",
        "特殊情况需家长申请，老师批准",
        "营造纯净的学习氛围"
      ],
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50"
    },
    {
      icon: Shield,
      title: "严查校园出入",
      description: "全封闭管理，确保学生安全",
      details: [
        "学生外出需家长申请，班主任批准",
        "严格登记制度，记录出入时间",
        "家长探视需提前预约，遵守规定时间",
        "确保校园安全，维护学习秩序"
      ],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: BookOpen,
      title: "学习监督",
      description: "全程跟踪，及时发现问题",
      details: [
        "主讲老师跟踪式辅导，个性化监督",
        "班主任全天候关注学生学习状态",
        "生活老师记录晚自习表现",
        "及时反馈，及时调整学习策略"
      ],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

  const managementFeatures = [
    {
      title: "全封闭寄宿式管理",
      description: "确保学生安全，营造专注学习环境",
      icon: Shield,
      stats: "100%"
    },
    {
      title: "24小时全程监督",
      description: "从课堂到宿舍，全方位关注学生状态",
      icon: Clock,
      stats: "24h"
    },
    {
      title: "严格管理制度",
      description: "建立完善的管理体系，确保执行到位",
      icon: CheckCircle,
      stats: "4项"
    }
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
            学习管理制度
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            全封闭寄宿式管理，严格作息、严管手机、严查校园出入
          </p>
        </motion.div>

        {/* 管理特色展示 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {managementFeatures.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-[#7c569d] rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-10 h-10 text-white" />
              </div>
              <div className="text-3xl font-bold text-[#7c569d] mb-2">
                {feature.stats}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </motion.div>

        {/* 详细管理制度 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {rules.map((rule, index) => (
            <motion.div
              key={rule.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`${rule.bgColor} rounded-2xl p-8 h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}>
                {/* 图标和标题 */}
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${rule.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <rule.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {rule.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {rule.description}
                  </p>
                </div>
                
                {/* 详细内容 */}
                <div className="space-y-3">
                  {rule.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start">
                      <div className={`w-2 h-2 bg-gradient-to-r ${rule.color} rounded-full mt-2 mr-3 flex-shrink-0`} />
                      <span className="text-gray-700 text-sm leading-relaxed">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>

                {/* 底部装饰线 */}
                <div className={`mt-6 h-1 bg-gradient-to-r ${rule.color} rounded-full`}></div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LearningManagement;
