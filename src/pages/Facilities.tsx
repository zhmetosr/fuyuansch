import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface Facility {
  id: number;
  name: string;
  description: string;
  image: string;
}

const Facilities: React.FC = () => {
  // 模拟设施数据
  const facilities: Facility[] = [
    {
      id: 1,
      name: "教学大楼",
      description: "学校拥有现代化的教学大楼，每间教室都配备了先进的多媒体教学设备，为学生提供良好的学习环境。",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=modern%20school%20classroom%20building&sign=1f42ce13c812c3ae9198f92e0bff3641"
    },
    {
      id: 2,
      name: "图书馆",
      description: "学校图书馆藏书丰富，拥有各类图书10万余册，期刊200余种，为学生提供了广阔的阅读空间和丰富的知识资源。",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=school%20library%20interior&sign=13ef606105c01a522bf3fe0c32f658bf"
    },
    {
      id: 3,
      name: "实验室",
      description: "学校设有物理、化学、生物等多个实验室，配备了先进的实验设备，为学生开展科学探究提供了良好的条件。",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=school%20science%20laboratory&sign=9ce50a27bea5462689e1c72be29d010e"
    },
    {
      id: 4,
      name: "计算机教室",
      description: "学校拥有多个计算机教室，配备了最新的计算机设备和教学软件，为学生提供了良好的信息技术学习环境。",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=school%20computer%20lab&sign=eb55a807867c7c46a7e56c2ce9afbf69"
    },
    {
      id: 5,
      name: "体育馆",
      description: "学校体育馆设施齐全，包括篮球场、羽毛球场、乒乓球场等，为学生开展体育活动提供了良好的场所。",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=school%20gymnasium&sign=484da9d8d95db87d317bfa89e30fb8af"
    },
    {
      id: 6,
      name: "运动场",
      description: "学校拥有标准的田径场、足球场和篮球场，为学生开展各类体育活动和运动训练提供了良好的场地。",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=school%20sports%20field&sign=9e272821ef10505b36da910ded8fcb77"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f9f9f9] text-[#333333]">
      <Header />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full"
      >
        {/* 页面标题 */}
         <section className="py-12 bg-[#800080] text-white">
          <div className="container mx-auto px-4">
            <motion.h1 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold"
            >
              校园设施
            </motion.h1>
            <motion.p 
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-2 text-white text-opacity-80"
            >
              富源基础学校拥有一流的教学设施和优美的校园环境
            </motion.p>
          </div>
        </section>
        
        {/* 设施介绍 */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
               <h2 className="text-2xl md:text-3xl font-bold text-[#800080] mb-4">一流设施</h2>
               <div className="w-24 h-1 bg-[#800080] mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-3xl mx-auto">
                富源基础学校拥有一流的教学设施和优美的校园环境，为学生提供良好的学习和生活条件。学校占地面积50亩，建筑面积20000平方米，环境优美，设施齐全。
              </p>
            </motion.div>
            
            {/* 设施列表 */}
            <div className="space-y-16">
              {facilities.map((facility, index) => (
                <motion.div
                  key={facility.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 items-center`}
                >
                  <div className="w-full md:w-1/2">
                    <img 
                      src={facility.image}
                      alt={facility.name}
                      className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                    />
                  </div>
                  
                  <div className="w-full md:w-1/2">
                     <h3 className="text-2xl font-semibold text-[#800080] mb-4">{facility.name}</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {facility.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* 校园环境 */}
        <section className="py-16 bg-[#f9f9f9]">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
               <h2 className="text-2xl md:text-3xl font-bold text-[#800080] mb-4">校园环境</h2>
               <div className="w-24 h-1 bg-[#800080] mx-auto"></div>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-lg shadow-md group"
              >
                <div className="aspect-w-1 aspect-h-1">
                  <img 
                    src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=school%20garden%20landscape&sign=deaf0c2661134fdb5887b5355082f3b3"
                    alt="校园环境"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-lg shadow-md group"
              >
                <div className="aspect-w-1 aspect-h-1">
                  <img 
                    src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=school%20path%20with%20trees&sign=95a24ce0ed9f71818be2faf6fd57fcd1"
                    alt="校园小路"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-lg shadow-md group"
              >
                <div className="aspect-w-1 aspect-h-1">
                  <img 
                    src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=school%20pond%20with%20fountain&sign=50505963bbbeb1f7a4c54ee9ab789e8a"
                    alt="校园池塘"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-lg shadow-md group"
              >
                <div className="aspect-w-1 aspect-h-1">
                  <img 
                    src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=school%20playground%20students&sign=e93de64bef0ea6533374e16a7de838ce"
                    alt="校园操场"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </motion.main>
      
      <Footer />
    </div>
  );
};

export default Facilities;