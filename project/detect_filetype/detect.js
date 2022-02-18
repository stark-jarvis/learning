/*
 * Detect Input File Type - v1.0 (2021-08-04T15:00:08+0800)
 * Copyright 2005-2021 56.com
 */
!function(window) { 'use strict'

/*
 * 读取指定范围二进制数据
 */
function readBuffer(file, start = 0, end = 2) {
    return new Promise((resolve, reject) => {
        // fileReader 实例
        const reader = new FileReader();

        reader.onload = () => { 
            // 文件的内容在实例result属性里
            let result = reader.result;
            console.log(result);
            resolve(result);
        };
        reader.onerror = reject;
        //console.log(file.slice(start, end));
        //reader.readAsArrayBuffer(file.slice(start, end)); 
        reader.readAsArrayBuffer(file); 
    }); 
}

/*
 * 逐字对比函数
 * @method check
 * @param {Array} headers PNG 图片类型的定义
 * @return {Function}
 */
function check(headers) {
    return (buffers, options = { offset: 0 }) => { 
        console.log(buffers);
        return headers.every(
            (header, index) => header === buffers[options.offset + index]
        );
    };
}

/*
 * 检查是否图片类型
 * @method isImagType
 * @param {Array|Binary} buffers 需要检查图片的二进制数据
 * @param {String} type [jpg|png|gif|bmp]
 * @return {Boolen}
 */
function isImagType(buffers, type) {
    return check(imgHeaders[type]['headers'])(buffers);
}

// 图片类型定义
const imgHeaders = {
    'jpg': {
        type: 'jpg',
        ext: 'jpg/jpeg',
        headers: ['0xFF', '0xD8', '0xFF']
    },
    'png': {
        type: 'png',
        ext: 'png',
        headers: ['0x89', '0x50', '0x4E', '0x47', '0x0D', '0x0A', '0x1A', '0x0A']
    },
    'gif': {
        type: 'gif',
        ext: 'gif',
        headers: ['0x47', '0x49', '0x46', '0x38'] // (gif8)
    },
    'bmp': {
        type: 'bmp',
        ext: 'bmp',
        headers: ['0x42', '0x4D']
    }
};

//const isPNG = check(imgHeaders['png']['headers'])

async function fileChange(event) {
    // 获取文件对象方法一
    /*
    const fileInput = document.querySelector('#file-test');
    const file = [...fileInput.files][0];
    console.log(file);
    */

    // 获取文件对象方法二
    const file = event.target.files[0];
    const buffers = await readBuffer(file, 0, 8);

    console.log(buffers);
    const uint8Array = new Uint8Array(buffers);

    console.log( isImagType(uint8Array, 'png') );

    /*
    const files = [...fileInput.files];

    let i = 0;
    let fileArr = [];
    while (i < files.length) {
        fileArr.push(files[i].name);
        i++;
    }

    console.log(fileArr);
    */
}

document.querySelector('#file-test').addEventListener('change', fileChange, false);


}(window);
