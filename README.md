# coolq-cqhttp-ocr
基于CQHTTP的酷Q机器人聊天内容翻译插件

**部署流程**



## 1、酷Q
本插件依赖[酷Q机器人运作](https://cqp.cc/)
使用前请先安装酷q
## 2、coolq-http-api
本插件依赖[coolq-http-api](https://github.com/richardchien/coolq-http-api)以及[cqhttp-node-sdk](https://github.com/richardchien/cqhttp-node-sdk)运作
配置插件请参考[插件使用文档](https://github.com/richardchien/cqhttp-node-sdk)
## 3、Node.js
需要[nodejs](https://nodejs.org/en/)作为运行环境
## 4、百度文字识别
请前往[百度AI开放平台](https://ai.baidu.com/ai-doc/OCR/zk3h7xz52)注册账号并获取Access Token
## 5、具体操作
①确保准备好以上内容

②安装
```ps1
git clone https://github.com/SayaSS/coolq-cqhttp-ocr.git
cd coolq-cqhttp-ocr
npm install
```

③请进入ocr.js按照注释来配置 

④运行
```ps1
node ocr
```
