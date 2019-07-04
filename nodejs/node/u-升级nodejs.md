# 升级 NodeJs

## `Mac` 升级方法：
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
* `cd` 进入`/usr/local/n/versions/node/` 你应该可以看到通过`n` 安装的`node`版本，编辑 `/etc/profile`
* 将`node` 安装的路径（这里为：/usr/local/n/versions/node/10.16.0）添加到文件中；
```base
# set node path
export NODE_HOME=/usr/local/n/versions/node/10.16.0
export PATH=$NODE_HOME/bin:$PATH
```
* 保存退出，并执行`source /etc/profile`
* 再次查看 `node`  版本；

## `windows` 升级方法：
	1、先卸载之前安装的`node` 版本；
	2、下载想要安装的版本，进行安装；
