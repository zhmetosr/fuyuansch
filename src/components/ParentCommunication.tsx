import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, Calendar, Users, Mail, MapPin } from 'lucide-react';

const ParentCommunication: React.FC = () => {
  const channels = [
    {
      icon: Phone,
      title: "电话沟通",
      description: "及时联系，快速响应",
      features: [
        "班主任24小时在线，第一时间响应",
        "定期电话回访，了解学生学习情况",
        "紧急情况立即联系家长",
        "建立畅通的沟通渠道"
      ],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: MessageSquare,
      title: "微信反馈",
      description: "实时交流，便捷沟通",
      features: [
        "建立家长微信群，及时发布信息",
        "定期发送学生学习报告",
        "分享学生在校生活照片和视频",
        "方便家长随时了解孩子动态"
      ],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Calendar,
      title: "定期会议",
      description: "面对面交流，深度沟通",
      features: [
        "每月召开家长会，汇报学习情况",
        "学期中组织家长开放日活动",
        "重要节点邀请家长参与活动",
        "提供一对一家长咨询时间"
      ],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Users,
      title: "协作交流",
      description: "家校共育，形成合力",
      features: [
        "与家长密切配合，共同关注学生成长",
        "及时反馈学生在校表现和问题",
        "听取家长意见和建议，持续改进",
        "建立家校共育的长效机制"
      ],
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: "报名热线",
      content: "0755-88898962",
      description: "24小时咨询热线",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: MessageSquare,
      title: "微信咨询",
      content: "扫码添加微信",
      description: "在线实时沟通",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: Mail,
      title: "邮箱联系",
      content: "info@taolifudu.com",
      description: "发送邮件咨询",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      icon: MapPin,
      title: "学校地址",
      content: "深圳市大鹏新区",
      description: "欢迎到校参观",
      color: "text-orange-600",
      bgColor: "bg-orange-100"
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
            家校沟通机制
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            建立完善的家校沟通体系，让家长及时了解孩子学习情况，共同助力学生成长
          </p>
        </motion.div>

        {/* 沟通方式展示 */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {channels.map((channel, index) => (
            <motion.div
              key={channel.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`${channel.bgColor} rounded-2xl p-8 h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}>
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${channel.color} rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300`}>
                    <channel.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {channel.title}
                    </h3>
                    <p className="text-gray-600 font-medium">
                      {channel.description}
                    </p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {channel.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className={`w-2 h-2 bg-gradient-to-r ${channel.color} rounded-full mt-2 mr-4 flex-shrink-0`} />
                      <span className="text-gray-700 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className={`mt-6 h-1 bg-gradient-to-r ${channel.color} rounded-full`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 联系信息卡片 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#7c569d] to-[#6a4a8a] rounded-2xl p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">联系我们</h3>
            <p className="text-xl opacity-90">多种联系方式，随时为您服务</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 ${info.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <info.icon className={`w-8 h-8 ${info.color}`} />
                </div>
                <h4 className="text-xl font-bold mb-2">{info.title}</h4>
                <p className="text-lg mb-1">{info.content}</p>
                <p className="text-sm opacity-80">{info.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ParentCommunication;
