import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GaokaoAdmission from '@/components/GaokaoAdmission';

const GaokaoAdmissionPage: React.FC = () => {
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
              高考招生信息
            </motion.h1>
            <motion.p 
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-2 text-white text-opacity-80"
            >
              了解富源基础学校的高考招生政策和报名流程
            </motion.p>
          </div>
        </section>

        {/* 高考招生内容 */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <GaokaoAdmission />
          </div>
        </section>
      </motion.main>
      
      <Footer />
    </div>
  );
};

export default GaokaoAdmissionPage;