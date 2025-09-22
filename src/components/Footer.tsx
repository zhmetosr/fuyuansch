import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#7c569d] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
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
                  className="w-12 h-12 object-contain mr-3"
                />
                <div>
                  <h3 className="text-xl font-bold text-white">深圳市富源学校</h3>
                  <p className="text-xs text-white text-opacity-70">shenzhenfuyuanxuexiao</p>
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
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">快速链接</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white text-opacity-70 hover:text-white transition-colors">首页</a></li>
            </ul>
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