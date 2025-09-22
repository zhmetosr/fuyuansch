import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const Header: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

    const handleDropdownToggle = (menu: string) => {
        setDropdownOpen(dropdownOpen === menu ? null : menu);
    };

    const navItems = [
        {
            title: "首页",
            path: "/"
        },
        {
            title: "高考复读",
            path: "/gaokao",
            subItems: [
                { title: "高考招生简章", path: "/gaokao/admission" },
                { title: "师资力量", path: "/gaokao/teachers" },
                { title: "教学管理", path: "/gaokao/management" },
                { title: "环境与配套", path: "/gaokao/environment" },
                { title: "往届成绩", path: "/gaokao/results" },
                { title: "在线申请", path: "/gaokao/apply" }
            ]
        },
        {
            title: "中考复读",
            path: "/zhongkao",
            subItems: [
                { title: "中考复读招生简章", path: "/zhongkao/admission" },
                { title: "师资力量", path: "/zhongkao/teachers" },
                { title: "教学管理", path: "/zhongkao/management" },
                { title: "环境与配套", path: "/zhongkao/environment" },
                { title: "往届成绩", path: "/zhongkao/results" },
                { title: "在线申请", path: "/zhongkao/apply" }
            ]
        },
        {
            title: "英美国际",
            path: "/international",
            subItems: [
                { title: "课程介绍", path: "/international/courses" },
                { title: "校园文化", path: "/international/culture" },
                { title: "办学成果", path: "/international/achievements" },
                { title: "招生详情", path: "/international/admission" },
                { title: "在线申请", path: "/international/apply" }
            ]
        },
        {
            title: "招生公告",
            path: "/admission",
            subItems: [
                { title: "高考复读招生计划", path: "/admission/gaokao" },
                { title: "中考复读招生计划", path: "/admission/zhongkao" },
                { title: "英美国际招生详情", path: "/admission/international" }
            ]
        },
        {
            title: "走进校园",
            path: "/campus",
            subItems: [
                { title: "学校简介", path: "/campus/about" },
                { title: "办学理念", path: "/campus/philosophy" },
                { title: "荣誉成果", path: "/campus/honors" },
                { title: "校园环境", path: "/campus/environment" },
                { title: "全景VR探校", path: "/campus/vr-tour" }
            ]
        }
    ];

    return (
        <header className="sticky top-0 z-50">
          {/* 顶部导航栏 - 报名热线 */}
          <div className="bg-[#7c569d] py-2">
            <div className="container mx-auto px-4 flex justify-end items-center space-x-4">
              <div className="bg-white text-[#7c569d] font-bold px-4 py-1 rounded-md">
                报名热线: <span className="text-lg">0755-88898962</span>
              </div>
              <a href="#" className="text-white hover:text-opacity-80 transition-colors">微信公众号</a>
              <a href="#" className="text-white hover:text-opacity-80 transition-colors">在线报名</a>
              <a href="#" className="text-white hover:text-opacity-80 transition-colors">网站地图</a>
            </div>
          </div>
          
          {/* 间距 */}
          <div className="h-[1px] bg-white bg-opacity-20"></div>
          
          {/* 左侧透明毛玻璃导航栏 */}
          <div className="relative">
            {/* 毛玻璃背景层 */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#7c569d]/50 via-[#6a4a8a]/70 to-[#5a3a7a] backdrop-blur-md z-0"></div>
            {/* 内容层 */}
            <div className="relative z-10">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        className="flex items-center"
                    >
                        <img 
                            src="/src/assets/images/logo/logo.png" 
                            alt="网站Logo" 
                            className="h-[57px]"
                        />
                    </motion.div>
                    
                    {/* 导航菜单 */}
                    <nav className="hidden md:flex space-x-1">
                        {navItems.map(item => (
                          item.subItems ? (
                            <div key={item.title} className="relative group">
                              <button
                                onClick={() => handleDropdownToggle(item.title)}
                                className="px-4 py-2 text-white hover:text-white hover:bg-white/10 transition-colors flex items-center"
                              >
                                {item.title}
                                <ChevronDown size={16} className="ml-1" />
                              </button>
                              <div className="absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                {item.subItems.map(subItem => (
                                  <a
                                    key={subItem.title}
                                    href={subItem.path}
                                    className="block px-4 py-2 text-[#7c569d] hover:bg-[#f5f0fa]"
                                  >
                                    {subItem.title}
                                  </a>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <a
                              key={item.title}
                              href={item.path}
                              className="px-4 py-2 text-white hover:text-white hover:bg-white/10 transition-colors"
                            >
                              {item.title}
                            </a>
                          )
                        ))}
                    </nav>
                    {}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
            {}
            {mobileMenuOpen && <motion.div
                initial={{
                    opacity: 0,
                    height: 0
                }}
                animate={{
                    opacity: 1,
                    height: "auto"
                }}
                exit={{
                    opacity: 0,
                    height: 0
                }}
                className="md:hidden bg-white shadow-lg">
                <div className="container mx-auto px-4 py-2">
                    {navItems.map(item => (
                      item.subItems ? (
                        <div key={item.title} className="border-b border-gray-100 last:border-0">
                          <button
                            onClick={() => handleDropdownToggle(item.title)}
                            className="w-full flex justify-between items-center px-4 py-3 text-[#7c569d] hover:bg-[#f5f0fa]"
                          >
                            {item.title}
                            <ChevronDown 
                              size={16} 
                              className={`transition-transform ${
                                dropdownOpen === item.title ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          {dropdownOpen === item.title && (
                            <div className="pl-4">
                              {item.subItems.map(subItem => (
                                <a
                                  key={subItem.title}
                                  href={subItem.path}
                                  className="block px-4 py-2 text-[#7c569d] hover:bg-[#f5f0fa]"
                                >
                                  {subItem.title}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <div key={item.title} className="border-b border-gray-100 last:border-0">
                          <a
                            href={item.path}
                            className="block px-4 py-3 text-[#7c569d] hover:bg-[#f5f0fa] transition-colors"
                          >
                            {item.title}
                          </a>
                        </div>
                      )
                    ))}
                </div>
            </motion.div>}
            </div>
          </div>
        </header>
    );
};

export default Header;