import React, { useState, useEffect, useRef } from 'react';
// 更柔和的音效实现
const playNotification = () => {
  const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
  const ctx = new AudioContext();
  const gainNode = ctx.createGain();
  gainNode.gain.value = 0.3; // 降低音量
  
  const oscillator = ctx.createOscillator();
  oscillator.type = 'triangle';
  oscillator.frequency.setValueAtTime(523.25, ctx.currentTime); // C5音
  oscillator.frequency.exponentialRampToValueAtTime(659.25, ctx.currentTime + 0.2); // E5音
  
  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);
  
  oscillator.start();
  oscillator.stop(ctx.currentTime + 0.3);
};

const playPop = () => {
  const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
  const ctx = new AudioContext();
  const gainNode = ctx.createGain();
  gainNode.gain.value = 0.2; // 更柔和的音量
  
  const oscillator = ctx.createOscillator();
  oscillator.type = 'sine';
  oscillator.frequency.setValueAtTime(392, ctx.currentTime); // G4音
  oscillator.frequency.exponentialRampToValueAtTime(294, ctx.currentTime + 0.1); // D4音
  
  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);
  
  oscillator.start();
  oscillator.stop(ctx.currentTime + 0.15);
};
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Paperclip, Send } from 'lucide-react';

const CustomerService: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{text: string, isUser: boolean}>>([]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  // 使用默认音效

  // 自动发送欢迎消息
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        setMessages([{text: '您好！这里是富源学校在线客服，请问有什么可以帮您？', isUser: false}]);
      }, 1000);
    }
  }, [isOpen]);

  // 滚动到底部
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (inputText.trim()) {
      setMessages([...messages, {text: inputText, isUser: true}]);
      setInputText('');
      playPop();
      
      // 模拟客服回复
      setTimeout(() => {
        setMessages(prev => [...prev, {text: '感谢您的咨询，我们会尽快回复您！', isUser: false}]);
        playNotification();
      }, 1500);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setMessages([...messages, {text: `[图片] ${file.name}`, isUser: true}]);
      playPop();
      
      // 模拟客服回复
      setTimeout(() => {
        setMessages(prev => [...prev, {text: '已收到您发送的图片，我们会尽快处理。', isUser: false}]);
        playNotification();
      }, 1500);
    }
  };

  return (
    <>
      {/* 客服按钮 */}
      <motion.button
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#7c569d] text-white rounded-full shadow-lg flex items-center justify-center z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          setIsOpen(!isOpen);
          playPop();
        }}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>

      {/* 客服聊天窗口 */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-8 w-80 bg-white rounded-lg shadow-xl overflow-hidden z-50"
          >
            <div className="bg-[#7c569d] text-white p-4">
              <h3 className="font-bold">富源学校在线客服</h3>
            </div>
            
            {/* 消息区域 */}
            <div className="h-64 p-4 overflow-y-auto">
              {messages.map((msg, index) => (
                <div 
                  key={index} 
                  className={`mb-3 flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] p-3 rounded-lg ${msg.isUser ? 'bg-[#7c569d] text-white' : 'bg-gray-100'}`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            
            {/* 输入区域 */}
            <div className="p-3 border-t border-gray-200">
              <div className="flex items-center">
                <label className="p-2 text-gray-500 hover:text-[#7c569d] cursor-pointer">
                  <Paperclip size={20} />
                  <input 
                    type="file" 
                    className="hidden" 
                    onChange={handleFileUpload}
                    accept="image/*"
                  />
                </label>
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="输入消息..."
                  className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:border-[#7c569d]"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-[#7c569d] text-white p-2 rounded-r-lg hover:bg-opacity-90"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CustomerService;