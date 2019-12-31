const CQHttp = require('cqhttp');
const axios = require('axios');
const access_toke='请在这里填入你的AccessToken';
const {baidu, google } = require('translation.js');
const bot = new CQHttp({
    apiRoot: '',//请参照cqhttp配置填写
    accessToken: '',
    secret: ''
});
function ocr() {
    bot.on('message', context => {
        if (context.message.indexOf('#翻译')>=0){
            try {
                let imgURL=context.message.match(/,url=(\S*)term=2/)[1];
                console.log(imgURL);
                bot('send_msg', {
                    message_type:context.message_type,
                    user_id:context.group_id||context.user_id||context.discuss_id,
                    group_id:context.group_id||context.user_id||context.discuss_id,
                    discuss_id:context.group_id||context.user_id||context.discuss_id,
                    message:'识别中~',
                });
                axios({
                    method: 'post',
                    url:`https://aip.baidubce.com/rest/2.0/ocr/v1/general_basic?access_token=${access_toke}`,
                    headers:{
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    params: {
                        url:imgURL ,
                        detect_direction: 'true',
                        detect_language:'true',
                        probability:'true',
                        language_type:'JAP'
                    }
                }).then(res=>{
                    let sentence='',arr;
                    arr=res.data.words_result;
                    for (let i=0;i<arr.length;i++){
                        sentence+=arr[i].words;
                        if (i<arr.length-1){
                            sentence+='\n';
                        }
                    }
                    translate(sentence,context);
                })
            }catch (e) {
                bot('send_msg', {
                    message_type:context.message_type,
                    user_id:context.group_id||context.user_id||context.discuss_id,
                    group_id:context.group_id||context.user_id||context.discuss_id,
                    discuss_id:context.group_id||context.user_id||context.discuss_id,
                    message:'未检测到图片,将进行直接翻译',
                });
                let sentence=context.message.replace("#翻译",'');
                translate(sentence,context);
            }
        }
    })
}
function translate(sentence,context) {
    google.translate({
        text: sentence,
        to: 'en'
    }).then(res => {
        let translation_en='';
        for (let i=0;i<res.result.length;i++){
            translation_en+=res.result[i];
            if (i<res.result.length-1){
                translation_en+='\n';
            }
        }
        baidu.translate({
            text: sentence,
            to: 'zh-CN'
        }).then(res => {
            let translation_zh='';
            for (let i=0;i<res.result.length;i++){
                translation_zh+=res.result[i];
                if (i<res.result.length-1){
                    translation_zh+='\n';
                }
            }
            let message=`翻译成功~\n`+
                `——————————\n`+
                `原文:${sentence}\n`+
                `中文翻译:${translation_zh}\n`+
                `——————————\n`+
                `英文翻译:${translation_en}\n`+
                `——————————\n`+
                `英文翻译来自google,中文翻译来自baidu`;
            bot('send_msg', {
                message_type:context.message_type,
                user_id:context.group_id||context.user_id||context.discuss_id,
                group_id:context.group_id||context.user_id||context.discuss_id,
                discuss_id:context.group_id||context.user_id||context.discuss_id,
                message:message,
            });
        })
    })
}
ocr();
console.log('插件已开始运行')
bot.listen(8086, '127.0.0.1');//请参照cqhttp配置填写