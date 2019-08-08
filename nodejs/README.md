# NodeJs
> About NodeJs and NPM、Yarn

## NodeJs

### 文档
* [NodeJs 中文网](http://nodejs.cn/api/child_process.html)
* [Koa](https://koa.bootcss.com/)
* [Express](http://www.expressjs.com.cn/)
* [Node版本控制](https://github.com/nvm-sh/nvm)

### 文章列表
* [升级Nodejs](./node/u-升级nodejs.md)

***

## NPM
> 包管理
#### 安装 `cnpm`，代替 `npm` 命令从淘宝镜像安装依赖包。
```bash
$ npm install -g cnpm --registry=https://registry.npm.taobao.org

// 查看 npm 下载依赖包仓库地址
$ npm config get registry

// 升级 npm 
$ sudo cnpm install npm -g
```

***

## Yarn
> Yarn
> 对你的代码来说是一个包管理器，可以通过它使用世界开发者的代码，或分享自己的代码。
#### 配置 `yarn` 的下载依赖包仓库地址，使用淘宝镜像
```bash
// 查看 yarn 下载依赖包仓库地址
$ yarn config get registry

// 切换为淘宝源
$ yarn config set registry https://registry.npm.taobao.org

// 切换为自带的源
$ yarn config set registry https://registry.yarnpkg.com

// node-sass 镜像
$ yarn config set sass-binary-site http://npm.taobao.org/mirrors/node-sass
```
#### Yarn 安装
```base
// 方式一
$ sudo npm install -b yarn
//  方式二
$ curl -o- -L https://yarnpkg.com/install.sh | bash
```

### 文档
* [yarn 中文文档](https://yarnpkg.com/zh-Hans/docs)
* [yarn 官方包查询与文档](https://yarnpkg.com/zh-Hans/docs)

### 文章列表
* [Yarn 常用命令](./yarn/n-Yarn常用命令.md)

