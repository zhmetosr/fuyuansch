import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  time: string;
  image: string;
  category: string;
  content: string;
}

const NewsSection: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  // 模拟新闻数据
  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "招生简章",
      date: "2023-09-20",
      time: "08:30",
      image: "/src/assets/images/news/sports.png",
      category: "招生",
      content: "详情"
    },
    {
      id: 2,
      title: "招生简章2",
      date: "2023-09-15",
      time: "14:00",
      image: "/src/assets/images/news/sports.png",
      category: "招生",
      content: "详情"
    },
    {
      id: 3,
      title: "招生简章3",
      date: "2023-09-10",
      time: "10:00",
      image: "/src/assets/images/news/sports.png",
      category: "招生",
      content: "详情"
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
           className="flex justify-between items-center mb-12"
         >
           <div>
             <h2 className="text-3xl font-bold text-[#7c569d] mb-2">招生简章</h2>
             <div className="w-24 h-1 bg-[#7c569d]"></div>
           </div>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="hidden md:inline-block text-[#7c569d] font-medium hover:underline"
          >
            查看全部 <i className="fas fa-chevron-right ml-1"></i>
          </motion.a>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-3 left-3 bg-[#2c5aa0] text-white text-xs px-2 py-1 rounded">
                  {item.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 hover:text-[#2c5aa0] transition-colors">
                  {item.title}
                </h3>
                
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <div className="flex items-center mr-4">
                    <Calendar size={14} className="mr-1" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    <span>{item.time}</span>
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-block text-[#7c569d] font-medium hover:underline"
                  onClick={() => {
                    const newExpanded = expandedItems.includes(item.id) 
                      ? expandedItems.filter(id => id !== item.id)
                      : [...expandedItems, item.id];
                    setExpandedItems(newExpanded);
                  }}
                >
                  {expandedItems.includes(item.id) ? '收起详情' : '点击查看详情'} 
                  <i className={`fas ${expandedItems.includes(item.id) ? 'fa-chevron-up' : 'fa-chevron-down'} ml-1`}></i>
                </motion.button>
                
                {expandedItems.includes(item.id) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t border-gray-100"
                  >
                    <p className="text-gray-600">{item.content}</p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="inline-block text-[#2c5aa0] font-medium hover:underline"
          >
            查看全部新闻 <i className="fas fa-chevron-right ml-1"></i>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;