/*
 * LocalStorage Static Files - v1.0 (2021-07-21T11:56:39+0800)
 * Copyright 2005-2021 56.com
 * 参考：https://blog.csdn.net/zhangge3663/article/details/111030277
 */
!function(window) {

const BASE_URL = 'https://file.qf.56.com/f';

const manifest = {
    "playerCode": {
        "url": "/modjs/app/common/player/core/1.x/core.js",
        "hash":  "ha8f1ccd91f6sh" 
    }
};


let localStorage = window.localStorage;

let localData = {};

/*
 * localStorage 数据结构
 * key命名: {String} qfloader_data
 * value: {Object} Json String
 *  {
 *    idName: {
 *      url: "tpl url",
 *      timeStamp: "162345746533",
 *      data: "<!-- qftpl-start -->xxxxxx<!-- qftpl-end -->"
 *    },
 *    idName: {
 *      url: "tpl url",
 *      timeStamp: "162345746535",
 *      data: "<!-- qftpl-start -->xxxxxx<!-- qftpl-end -->"
 *    }
 *  }
 *  
 */

function getCode(key, codeId) {
    // 查看localStorage 是否有
    // 有：版本判断
    //      需要更新，拉取，执行，并更新localStorage内容；
    //      不需要更新，执行；
    // 无：拉取，执行，存取到localStroage；

    // 需要判断模板或组件ID的代码是否存在
    let code = localStorage.getItem(key);
    let url = BASE_URL + manifest[codeId]['url'];
    console.log(`url: ${url}`);


    if (!code) {
        xhr(url, function(data) {
            console.log(data);
            localData[codeId] = { data: data, ...manifest[codeId]};
            console.log(localData);
            localStorage.setItem(key, JSON.stringify(localData));
        });
    } else {
        
    }
}

getCode('qfloader_data', 'playerCode');

const config = {
    manifest: manifest,
    ids: [
        'playerCode'
    ]
};

/*
 * 本地LocalStorage存储代码与静态文件
 * @Class LocalFiles
 * @param {String} param_name
 */
class LocalFiles {
    constructor(config) {
        // init
        this._localData = localStorage.getItem('qfloader_data');
        this._init();
    }

    // 初始化方法
    _init() {
        console.log('init...');
    }
    
    // ajax请求代码文件
    _xhr(url, callback) {
        let _this = this;
        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
            switch(xhr.readyState) {
                case 4:
                    if (xhr.status === 200) {
                        if ('function' === typeof callback) {
                            callback.call(_this, xhr.responseText);
                        }
                    } else {
                        alert('加载失败');
                    }
                    break;
                default:
                    break;
            }
        };
        xhr.open('GET', url, false);
        xhr.send();
    }

    // 根据代码类型执行代码
    _execCode(code) {
        
    }
    
}


}(window);
