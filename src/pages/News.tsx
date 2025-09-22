import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  time: string;
  image: string;
  category: string;
  content: string;
}

const News: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [expandedNews, setExpandedNews] = useState<number | null>(null);
  
  // 模拟新闻数据
  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "我校举办2023年秋季运动会",
      date: "2023-09-20",
      time: "08:30",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=school%20sports%20meeting&sign=cf4b8a6c4b03dd915bd6ecdb0696786c",
      category: "校园活动",
      content: "9月20日，我校举办了2023年秋季运动会。运动会设有田径、球类、趣味运动等多个项目，全校师生积极参与，展现了良好的精神风貌和团队合作精神。在此次运动会中，共有1200余名学生参加了各项比赛，产生了60个冠军奖项。运动会不仅丰富了学生的课余生活，也增强了学生的体质和团队凝聚力。"
    },
    {
      id: 2,
      title: "富源基础学校教师获得省级教学能手称号",
      date: "2023-09-15",
      time: "14:00",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=teacher%20award%20ceremony&sign=f2b5426cdc76f769cfbf0565a045d588",
      category: "教师荣誉",
      content: "近日，我校张老师和李老师在广东省教学能手评选中脱颖而出，获得了\"省级教学能手\"称号。这是对我校教师教学水平的高度认可，也是我校教师队伍建设的重要成果。多年来，我校始终把教师队伍建设作为学校发展的核心工作，通过多种方式提升教师的专业素养和教学能力，培养了一支高素质、专业化的教师队伍。"
    },
    {
      id: 3,
      title: "2024年春季招生简章公布",
      date: "2023-09-10",
      time: "10:00",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=school%20admission%20poster&sign=c3d9a8048dcdd55a6d088d605fa37765",
      category: "招生信息",
      content: "我校2024年春季招生简章已正式公布。招生对象为小学一年级至初中三年级学生，报名时间为10月1日至11月30日。学校将根据学生的综合素质进行选拔录取。有意向的家长和学生可登录学校官网或到学校招生办公室咨询相关事宜。我校拥有一流的教学设施和师资力量，为学生提供优质的教育服务，欢迎广大学子报考。"
    },
    {
      id: 4,
      title: "我校开展消防安全知识讲座",
      date: "2023-09-05",
      time: "15:00",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=fire%20safety%20lecture%20school&sign=62c6f9b836a5d65261cd31a803402653",
      category: "安全知识",
      content: "为了增强师生的消防安全意识，提高自我保护能力，9月5日，我校邀请了市消防支队的专家为全校师生开展了消防安全知识讲座。讲座内容包括火灾的预防、火灾发生时的逃生方法、灭火器的使用等。讲座结束后，还进行了消防安全演练，让师生们亲身体验火灾发生时的应对方法。此次活动提高了师生的消防安全意识和应急处置能力，为创建平安校园奠定了坚实基础。"
    },
    {
      id: 5,
      title: "我校学生在市科技创新大赛中获得佳绩",
      date: "2023-08-28",
      time: "10:30",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=students%20science%20competition%20award&sign=031457e51b4581521db248e700cedf0d",
      category: "学生荣誉",
      content: "在刚刚结束的深圳市青少年科技创新大赛中，我校学生表现优异，共获得一等奖3项、二等奖5项、三等奖8项的好成绩。其中，我校初三学生王小明的发明作品\"智能节水装置\"获得了大赛最高奖\"市长奖\"。这是我校在科技创新教育方面取得的又一重要成果。多年来，我校注重培养学生的创新精神和实践能力，积极组织学生参加各类科技创新活动，为学生的全面发展创造了良好条件。"
    }
  ];
  
  // 获取所有分类
  const categories = Array.from(new Set(newsItems.map(item => item.category)));
  
  // 根据分类筛选新闻
  const filteredNews = activeCategory 
    ? newsItems.filter(item => item.category === activeCategory)
    : newsItems;
  
  // 切换分类
  const toggleCategory = (category: string) => {
    setActiveCategory(activeCategory === category ? null : category);
  };
  
  // 切换新闻详情展开/收起
  const toggleNewsDetails = (id: number) => {
    setExpandedNews(expandedNews === id ? null : id);
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
         <section className="py-12 bg-[#800080] text-white">
          <div className="container mx-auto px-4">
            <motion.h1 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold"
            >
              新闻公告
            </motion.h1>
            <motion.p 
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-2 text-white text-opacity-80"
            >
              了解富源基础学校的最新动态和重要通知
            </motion.p>
          </div>
        </section>
        
        {/* 分类筛选 */}
        <section className="py-8 bg-white shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveCategory(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                   activeCategory === null 
                     ? 'bg-[#800080] text-white' 
                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                全部
              </motion.button>
              
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => toggleCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                     activeCategory === category 
                       ? 'bg-[#800080] text-white' 
                       : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </section>
        
        {/* 新闻列表 */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="space-y-8">
              {filteredNews.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src={item.image}
                        alt={item.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="inline-block bg-[#800080] text-white text-xs px-2 py-1 rounded">
                          {item.category}
                        </div>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Calendar size={14} className="mr-1" />
                          <span>{item.date}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                      
                      <div className={`text-gray-600 overflow-hidden transition-all duration-500 ${
                        expandedNews === item.id ? 'max-h-full' : 'max-h-20'
                      }`}>
                        <p className="leading-relaxed">{item.content}</p>
                      </div>
                      
                      <button
                        onClick={() => toggleNewsDetails(item.id)}
                        className="mt-4 flex items-center text-[#800080] font-medium hover:underline"
                      >
                        {expandedNews === item.id ? '收起' : '阅读全文'}
                        {expandedNews === item.id ? <ChevronUp size={16} className="ml-1" /> : <ChevronDown size={16} className="ml-1" />}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* 分页 */}
            <div className="mt-12 flex justify-center">
              <div className="flex space-x-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50 transition-all"
                >
                  <i className="fas fa-chevron-left"></i>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-[#800080] text-white rounded-md"
                >
                  1
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50 transition-all"
                >
                  2
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50 transition-all"
                >
                  3
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50 transition-all"
                >
                  <i className="fas fa-chevron-right"></i>
                </motion.button>
              </div>
            </div>
          </div>
        </section>
      </motion.main>
      
      <Footer />
    </div>
  );
};

export default News;