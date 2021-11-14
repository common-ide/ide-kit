# ide-kit

ide 套件，包含了 ide 基础链路工具

本仓库基于 monorepo 模式开发，使用 lerna + yarn 组织管理

## 本地开发

采用 lerna 开发，先安装依赖；为了方便本地各模块可以互相引用，需要先执行一次编译（存在 dist 文件夹）：

```shell
yarn  pre-dev
```

然后直接通过运行 `yarn dev` 即可打开 storybook 进行本地预览

也可以直接仅仅只针对某个组件进行本地 dev 预览： `lerna run dev --scope=ide-lib-utils`
> 也可以直接 `cd ./packages/ide-lib-utils` ，然后执行 `yarn dev`

## 如何添加组件

 1. 在 config-files 文件中创建配置文件，比如 "ide-lib-utils.json"
 2. 在项目根目录里执行 `ide-cli create ./config-files/ide-lib-utils.json -d ./packages` 即可以生成标准组件

> 如果不存在 `ide-cli` 命令，通过 `tnpm install -D ide-component-cli` 安装
