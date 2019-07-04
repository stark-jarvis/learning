# Yran 常用命令
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

## Yarn 独有的命令
  * `yarn licenses ls`	// 允许你检查依赖的许可信息
  * `yarn licenses generate`		// 自动创建依赖负责声明 license
  * `yarn why taco`		// 检查为什么安装 taco，详细列表依赖它的其他包
  * `yarn why uvepress`	// 检查为什么安装 vuepress，详细列出依赖它的其他包

