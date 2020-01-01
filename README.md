# coolq-cqhttp-ocr
基于CQHTTP的酷Q机器人聊天内容翻译插件

**部署流程**



## 1、酷Q
本插件依赖[酷Q机器人运作](https://cqp.cc/)
使用前请先安装酷q
## 2、coolq-http-api
本插件依赖[coolq-http-api](https://github.com/richardchien/coolq-http-api)运作

前往下载最新的[coolqhttpapi.cpk](https://github.com/richardchien/coolq-http-api/releases)并安装

配置插件请参考[插件使用文档](https://cqhttp.cc/docs/4.13/#/)
```ps1
打开酷Q目录里的data\app\io.github.richardchien.coolqhttpapi\${对应Q号}.ini
```
![配置1](https://pic.downk.cc/item/5e0c1a8476085c32892e3524.jpg)
![配置2](https://pic.downk.cc/item/5e0c1bbf76085c32892e6556.jpg)
![配置3](https://pic.downk.cc/item/5e0c1bd976085c32892e696c.jpg)

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
