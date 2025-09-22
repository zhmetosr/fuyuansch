import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    requirement: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  return (
    <footer className="bg-[#7c569d] text-white pb-8">
      {/* 课程定制表单 - 紧凑细长条布局 */}
      <div className="container mx-auto px-4 py-2">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-4 mb-2">
          <div className="flex flex-col space-y-2">
            <h3 className="text-sm font-bold text-[#7c569d] text-center">定制专属精品课程</h3>
            
            <div className="flex flex-wrap gap-2">
              <div className="flex-1 min-w-[120px]">
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-2 py-1 border border-gray-300 rounded text-xs"
                  placeholder="学生姓名"
                />
              </div>
              
              <div className="flex-1 min-w-[120px]">
                <input 
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-2 py-1 border border-gray-300 rounded text-xs"
                  placeholder="手机号"
                />
              </div>
              
              <div className="flex-1 min-w-[120px]">
                <input 
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-2 py-1 border border-gray-300 rounded text-xs"
                  placeholder="学习城市+区域"
                />
              </div>
              
              <div className="flex-1 min-w-[120px]">
                <input 
                  type="text"
                  name="requirement"
                  value={formData.requirement}
                  onChange={handleInputChange}
                  className="w-full px-2 py-1 border border-gray-300 rounded text-xs"
                  placeholder="学习需求"
                />
              </div>
              
              <div className="flex space-x-2">
                <button 
                  type="button"
                  className="bg-[#7c569d] text-white px-3 py-1 rounded text-xs hover:bg-opacity-90 whitespace-nowrap"
                >
                  立即定制
                </button>
                <button 
                  type="button"
                  className="bg-white text-[#7c569d] px-3 py-1 rounded border border-[#7c569d] text-xs hover:bg-[#f5f0fa] whitespace-nowrap"
                >
                  立即预约
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <div className="flex items-center">
                <img 
                  src="/src/assets/images/logo/logo.png"
                  alt="富源学校logo" 
                  className="w-35 h-12 object-contain mr-3"
                />
                <div>
                </div>
              </div>
            </div>
            
            <p className="text-white text-opacity-70 mb-6">
              富源基础学校创建于1999年，是一所全日制的优质学校，学校位于深圳市宝安区富源路100号。
            </p>
            
            {/* 社交媒体图标已移除 */}
          </motion.div>
          

          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
          
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">联系方式</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 text-white text-opacity-70 flex-shrink-0" />
                <span className="text-white text-opacity-70">地址</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="mr-3 mt-1 text-white text-opacity-70 flex-shrink-0" />
                <span className="text-white text-opacity-70">电话</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-3 mt-1 text-white text-opacity-70 flex-shrink-0" />
                <span className="text-white text-opacity-70">邮箱</span>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mr-3 mt-1 text-white text-opacity-70 flex-shrink-0" />
                <span className="text-white text-opacity-70">营业时间</span>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <div className="border-t border-white border-opacity-20 mt-12 pt-8 text-center text-white text-opacity-50 text-sm">
          <p>© 2025 深圳市富源学校 版权所有 | 粤ICP备0000号</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;