Vim�UnDo� ���@I�z��|sON�}��%���A����`��   H   ,const basepath = app.getAppPath('userData');                             \�!!    _�                            ����                                                                                                                                                                                                                                                                                                                                                             \� �     �               K   +const querystring = require('querystring');   const axios = require('axios');   const fs = require('fs');   const https = require('https');   Iconst {requestPromisePost} = require('../../../utils/RequestPromise.js');   -const RegisterAPI = require('./RegisterAPI');   :const CheckRights = require('../../../utils/CheckRights');   >const RequestParser = require('../../../utils/RequestParser');       !// TODO pass apiKey from frontEnd   7module.exports = async function (req, responseToSend) {   	    try {   1        await CheckRights(req.query.credentials);       }       catch {   1        responseToSend.send('Wrong Credentials');       }   7    const captchaData = await RegisterAPI.getCaptcha();   D    await saveImageToDisk(captchaData.captchaUrl, './TmpImage.png');       const queryObj = {   0        key: '71368f098067d669eab3539dcae29a46',           method: 'base64',           json: 1       };   8    const sendImageResponse = await requestPromisePost({   S        url: 'http://rucaptcha.com/in.php' + `?${querystring.stringify(queryObj)}`,           form: {   G            body: fs.readFileSync('./TmpImage.png').toString('base64'),   	        }       });   ?    const parsedResObject = JSON.parse(sendImageResponse.body);           let captchaRequestId;   e    // if has balance, api key is correct and everything is fine then return the id of solved captcha   '    if (parsedResObject.status === 1) {   3        captchaRequestId = parsedResObject.request;       }       checkIfReady();       >    // checks if captcha is ready in an intervall of 3 seconds       function checkIfReady() {           setTimeout(() => {   7            axios.get('http://rucaptcha.com/res.php', {                   params: {   <                    key: '71368f098067d669eab3539dcae29a46',   "                    action: 'get',   )                    id: captchaRequestId,                       json: 1                   }   $            }).then(function (res) {   >                if (res.data.request === 'CAPCHA_NOT_READY') {   #                    checkIfReady();                   } else {   )                    responseToSend.send({   8                        solvedCaptcha: res.data.request,   :                        captchaGid: captchaData.captchaGid                       });                   }               })           }, 3000)       }   };           *function saveImageToDisk(url, localPath) {   %    return new Promise((resolve) => {   5        const file = fs.createWriteStream(localPath);   ,        https.get(url, function (response) {   /            const stream = response.pipe(file);   -            stream.on('finish', function () {                   resolve();               })           });       })   }5�_�                       )    ����                                                                                                                                                                                                                                                                                                                                                             \�!	    �         I      =const {requestPromisePost} = require('../RequestPromise.js');5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             \�!     �                +const app = require('electron').remote.app;5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             \�!     �         H      ,const basepath = app.getAppPath('userData');5�_�      	                     ����                                                                                                                                                                                                                                                                                                                                                             \�!     �         H      )const basepath = .getAppPath('userData');5�_�      
           	          ����                                                                                                                                                                                                                                                                                                                                                             \�!     �         H      (const basepath = getAppPath('userData');5�_�   	              
          ����                                                                                                                                                                                                                                                                                                                                                             \�!     �         H      const basepath = ('userData');5�_�   
                        ����                                                                                                                                                                                                                                                                                                                                                             \�!     �         H      const basepath = userData');5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             \�!     �         H      const basepath = ');5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             \�!     �         H      const basepath = 5�_�                       ,    ����                                                                                                                                                                                                                                                                                                                                                             \�~     �         K      Hconst {requestPromisePost} = require('../.././utils/RequestPromise.js');5�_�                       ,    ����                                                                                                                                                                                                                                                                                                                                                             \�~     �         K      Gconst {requestPromisePost} = require('../..//utils/RequestPromise.js');5�_�                        ,    ����                                                                                                                                                                                                                                                                                                                                                             \�~     �         K      Fconst {requestPromisePost} = require('../../utils/RequestPromise.js');5��