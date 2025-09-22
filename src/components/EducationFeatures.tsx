import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Award, GraduationCap, Lightbulb, Heart } from 'lucide-react';

interface FeatureItem {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const EducationFeatures: React.FC = () => {
  // 教育特色数据
  const features: FeatureItem[] = [
    {
      id: 1,
      icon: <BookOpen size={28} />,
      title: "优质课程体系",
      description: "构建了一套科学、完整的课程体系，注重学生的全面发展和个性培养"
    },
    {
      id: 2,
      icon: <Users size={28} />,
      title: "优秀教师团队", 
      description: "特级教师5人，高级教师30人"
    },
    {
      id: 3,
      icon: <Award size={28} />,
      title: "丰富的课外活动",
      description: "开展多样化的课外活动，如科技创新、文艺表演、体育竞赛等，促进学生全面发展"
    },
    {
      id: 4,
      icon: <GraduationCap size={28} />,
      title: "个性化教育",
      description: "关注每个学生的特点和需求，实施个性化教学，激发学生的学习潜能"
    },
    {
      id: 5,
      icon: <Lightbulb size={28} />,
      title: "创新教育模式",
      description: "采用先进的教育理念和教学方法，培养学生的创新思维和实践能力"
    },
    {
      id: 6,
      icon: <Heart size={28} />,
      title: "人文关怀",
      description: "注重学生的心理健康和情感需求，营造温馨和谐的校园氛围"
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
          className="text-center mb-16"
        >
           <h2 className="text-3xl font-bold text-[#800080] mb-4">教育特色</h2>
           <div className="w-24 h-1 bg-[#800080] mx-auto mb-6"></div>
          {/* 副标题已移除 */}
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
              className="bg-[#f9f9f9] rounded-lg p-8 text-center hover:bg-[#f0f7ff] transition-all"
            >
               <div className="w-16 h-16 bg-[#800080] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6 text-[#800080]">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationFeatures;