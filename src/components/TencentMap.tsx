import React from 'react';

const TencentMap: React.FC = () => {
  return (
    <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden mt-4">
      {/* 腾讯地图iframe嵌入代码 */}
      <iframe 
        src="https://map.qq.com/m/place/search/%E6%B7%B1%E5%9C%B3%E5%B8%82%E5%AF%8C%E6%BA%90%E5%AD%A6%E6%A0%A1/"
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen
        style={{ border: 0 }}
        title="腾讯地图-深圳市富源学校位置"
      ></iframe>
    </div>
  );
};

export default TencentMap;