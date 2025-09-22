import React from 'react';
import { motion } from 'framer-motion';

const PastAchievements: React.FC = () => {
  const achievements = [
    {
      year: "2023届",
      content: "高考本科上线率98%，其中重点大学录取率65%"
    },
    {
      year: "2022届",
      content: "培养出省级高考状元1名，全市前十名占3席"
    },
    {
      year: "2021届",
      content: "清华北大录取5人，985高校录取率突破50%"
    },
    {
      year: "2020届",
      content: "学科竞赛获国家级奖项12项，省级奖项58项"
    }
  ];

  return (
    <section className="py-16 bg-[#f9f9f9]">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#800080] mb-4">往届佳绩</h2>
          <div className="w-24 h-1 bg-[#800080] mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            我们以优异的成绩见证教育的卓越品质
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all"
            >
              <div className="text-4xl font-bold text-[#800080] mb-4">{item.year}</div>
              <p className="text-gray-700">{item.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastAchievements;