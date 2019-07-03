# NodeJs
> About NodeJs and NPM、Yarn

## NodeJs
### 升级 NodeJs
1、首先查看当前 node 版本：
```base
$ node -v
````
2、清除 node 缓存：
```base
$ sudo npm cache clean -f
````
> 执行完这个命令后会提示：`npm WARN using --force I sure hope you know what you are doing`。继续执行下面的;  
3、安装`node` 版本管理工具 `n`:
```base
$ sudo npm install n -g
```
4、使用版本管理工具安装指定`node` 或者升级到最新`node` 版本：
```base
// 安装 node 最新版本
$ sudo n stable
// 安装 node 指定版本8.9.0
$ sudo n 8.9.0
```
5、安装完成，使用`node -v`
查看版本号，看是否为人想要的版本若版本号未改变，则面要配置 `node` 环境变量。
* 查看通过 `n` 安装的 `node`  位置：
	```base
	$ which node （如：/usr/local/n/versions/node/6.11.1）
	```
* `cd` 进入`/usr/local/n/versions/node/` 你应该可以看到通过`n` 安装的`node`
	  版本，编辑 `/etc/profile`
* 将`node` 安装的路径（这里为：/usr/local/n/versions/node/10.16.0）添加到文件中；
	  ```base
	  # set node path
	  export NODE_HOME=/usr/local/n/versions/node/10.16.0
	  export PATH=$NODE_HOME/bin:$PATH
	  ```
* 保存退出，并`source /etc/profile`
* 再次查看 `node`  版本；

#### `windows` 升级方法：
	1、先卸载之前安装的`node` 版本；
	2、下载想要安装的版本，进行安装；

### 文档
* [NodeJs 中文网](http://nodejs.cn/api/child_process.html)
* [Koa](https://koa.bootcss.com/)
* [Express](http://www.expressjs.com.cn/)

## NPM
> 包管理
### 安装 `cnpm`，代替 `npm` 命令从淘宝镜像安装依赖包。
```bash
$ npm install -g cnpm --registry=https://registry.npm.taobao.org

// 查看 npm 下载依赖包仓库地址
$ npm config get registry

// 升级 npm 
$ sudo cnpm install npm -g
```

## Yarn
> Yarn
> 对你的代码来说是一个包管理器，可以通过它使用世界开发者的代码，或分享自己的代码。
### 配置 `yarn` 的下载依赖包仓库地址，使用淘宝镜像
```bash
$ yarn config set registry https://registry.npm.taobao.org

// 查看 yarn 下载依赖包仓库地址
$ yarn config get registry

// node-sass 镜像
$ yarn config set sass-binary-site http://npm.taobao.org/mirrors/node-sass
```
### Yarn 安装
```base
// 方式一
$ sudo npm install -b yarn
//  方式二
$ curl -o- -L https://yarnpkg.com/install.sh | bash
```
### Yran 常用命令
* `npm install` === `yarn`		// install 安装是默认行为
* `npm install taco --save` === `yarn add taco`		// taco
  包立即被保存到`package.json`中
* `npm install taco --save-dev` === `yarn add taco --dev`
* `npm uninstall taco --save` === `yarn remove taco`
* `npm update --save` === `yarn upgrade`
* `npm install taco@latest` === `yarn add taco`
* `npm install taco --global` === `yarn global add taco`
* `npm init` === `yarn init`
* `npm init --yes/-y` === `yarn init --yes/y`
* `npm link` === `yarn link`
* `npm outdated` === `yarn outdated`
* `npm publish` === `yarn publish`
* `npm run` === `yarn run`
* `npm cache clean` === `yarn cache clean`
* `npm login` === `yarn login`
* `npm test` === `yarn test`
#### Yarn 独有的命令
* `yarn licenses ls`	// 允许你检查依赖的许可信息
* `yarn licenses generate`		// 自动创建依赖负责声明 license
* `yarn why taco`		// 检查为什么安装 taco，详细列表依赖它的其他包
* `yarn why uvepress`	// 检查为什么安装 vuepress，详细列出依赖它的其他包

### 文档
* [yarn 中文文档](https://yarnpkg.com/zh-Hans/docs)


