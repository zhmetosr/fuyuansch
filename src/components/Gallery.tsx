import React from 'react';
import { motion } from 'framer-motion';

const Gallery: React.FC = () => {
  // 图片数据
  const galleryImages = [
    {
      id: 1,
      src: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=school%20library%20with%20students%20reading&sign=1f3429bf1695fb0606a3774b039d441d",
      alt: "学校图书馆",
      title: "图书馆"
    },
    {
      id: 2,
      src: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=school%20science%20laboratory&sign=dbc591b4dc66e45e1e975ccb1b132822",
      alt: "学校实验室",
      title: "实验室"
    },
    {
      id: 3,
      src: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=school%20art%20classroom&sign=3ac4063dfd27b7712382710d5b0aedff",
      alt: "学校美术教室",
      title: "美术教室"
    },
    {
      id: 4,
      src: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=school%20computer%20lab&sign=9d13ad647ed9d92b59608bb3ce006535",
      alt: "学校计算机教室",
      title: "计算机教室"
    },
    {
      id: 5,
      src: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=school%20auditorium&sign=6a84b1036004025179fc0c89da576761",
      alt: "学校礼堂",
      title: "礼堂"
    },
    {
      id: 6,
      src: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=school%20cafeteria&sign=1aa9d4519ba29325ee89b0a6a17bb9ce",
      alt: "学校食堂",
      title: "食堂"
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
           <h2 className="text-3xl font-bold text-[#800080] mb-4">校园风采</h2>
           <div className="w-24 h-1 bg-[#800080] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            富源基础学校拥有一流的教学设施和美丽的校园环境，为学生提供良好的学习和生活条件
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="relative overflow-hidden rounded-lg shadow-md group"
            >
              <div className="aspect-w-1 aspect-h-1">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <h3 className="text-white font-semibold">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
               className="inline-block bg-[#800080] text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all"
          >
            查看更多照片
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;