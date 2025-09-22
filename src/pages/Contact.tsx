import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Header from '../components/Header';
import TencentMap from '../components/TencentMap';
import Footer from '../components/Footer';
import { toast } from 'sonner';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 模拟表单提交
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success('您的信息已成功提交，我们会尽快与您联系！');
      
      // 重置表单
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast.error('提交失败，请稍后再试！');
    } finally {
      setIsSubmitting(false);
    }
  };
  
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
        <section className="py-12 bg-[#7c569d] text-white">
          <div className="container mx-auto px-4">
            <motion.h1 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold"
            >
              联系我们
            </motion.h1>
            <motion.p 
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-2 text-white text-opacity-80"
            >
              欢迎咨询富源基础学校的相关信息
            </motion.p>
          </div>
        </section>
        
        {/* 联系信息与地图 */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-[#2c5aa0] mb-6">联系方式</h2>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#7c569d] bg-opacity-10 rounded-full flex items-center justify-center mr-4 text-[#7c569d] flex-shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-1">学校地址</h3>
                      <p className="text-gray-600">广东省深圳市宝安区富源路100号</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#2c5aa0] bg-opacity-10 rounded-full flex items-center justify-center mr-4 text-[#2c5aa0] flex-shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-1">联系电话</h3>
                      <p className="text-gray-600">0755-12345678</p>
                      <p className="text-gray-600">0755-12345679</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#2c5aa0] bg-opacity-10 rounded-full flex items-center justify-center mr-4 text-[#2c5aa0] flex-shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-1">电子邮箱</h3>
                      <p className="text-gray-600">info@fuyuanbaschool.com</p>
                      <p className="text-gray-600">admission@fuyuanbaschool.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#2c5aa0] bg-opacity-10 rounded-full flex items-center justify-center mr-4 text-[#2c5aa0] flex-shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-1">工作时间</h3>
                      <p className="text-gray-600">周一至周五: 8:00 - 18:00</p>
                      <p className="text-gray-600">周六: 9:00 - 16:00</p>
                      <p className="text-gray-600">周日: 休息</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-4">关注我们</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 bg-[#7c569d] rounded-full flex items-center justify-center text-white hover:bg-opacity-90 transition-all">
                      <i className="fab fa-weixin"></i>
                    </a>
                    <a href="#" className="w-10 h-10 bg-[#2c5aa0] rounded-full flex items-center justify-center text-white hover:bg-opacity-90 transition-all">
                      <i className="fab fa-weibo"></i>
                    </a>
                    <a href="#" className="w-10 h-10 bg-[#2c5aa0] rounded-full flex items-center justify-center text-white hover:bg-opacity-90 transition-all">
                      <i className="fab fa-qq"></i>
                    </a>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="rounded-lg overflow-hidden shadow-md h-[500px]"
              >
                <TencentMap />
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* 联系表单 */}
        <section className="py-16 bg-[#f9f9f9]">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#7c569d] mb-4">发送信息</h2>
              <div className="w-24 h-1 bg-[#7c569d] mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                如果您有任何问题或建议，欢迎通过以下表单与我们联系，我们会尽快回复您。
              </p>
            </motion.div>
            
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">姓名</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7c569d] focus:border-transparent transition-all"
                      placeholder="请输入您的姓名"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">电子邮箱</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c5aa0] focus:border-transparent transition-all"
                      placeholder="请输入您的电子邮箱"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">主题</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#800080] focus:border-transparent transition-all"
                  >
                    <option value="">请选择咨询主题</option>
                    <option value="admission">招生咨询</option>
                    <option value="teaching">教育教学</option>
                    <option value="facilities">校园设施</option>
                    <option value="activities">学生活动</option>
                    <option value="other">其他问题</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">留言内容</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c5aa0] focus:border-transparent transition-all resize-none"
                    placeholder="请输入您的留言内容"
                  ></textarea>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#7c569d] text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-circle-notch fa-spin mr-2"></i>
                      发送中...
                    </>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      发送信息
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </div>
        </section>
      </motion.main>
      
      <Footer />
    </div>
  );
};

export default Contact;