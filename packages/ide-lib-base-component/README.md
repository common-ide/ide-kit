## 概览

ide-lib-base-component

## 安装使用

npm 包方式：
```shell
npm install --save ide-lib-base-component
```

web 方式：
```html
<script src="https://unpkg.com/ide-lib-base-component@1.0.0/dist/index.umd.js"></script>
```
引入之后将会暴露全局变量 `ideBaseComponent`.

> 如果你想要在 webpack 中 external 该库，可以使用以下配置：
```js
{
    externals: {
        "ide-lib-base-component": {
            "commonjs": "ide-lib-base-component",
            "commonjs2": "ide-lib-base-component",
            "amd": "ide-lib-base-component",
            "root": "ideBaseComponent"
        }
    }
}
```

## 如何本地开发？

### 本地调试

首先从 git 仓库拉取代码，安装依赖项：
```shell
git clone https://github.com/common-ide/ide-kit/tree/master/packages/ide-lib-base-component

npm install

## 安装 peerDependencies 依赖包
npm run install:all
```

运行以下命令后，访问 demo 地址： http://localhost:9000
```shell
npm run dev
```
> 如果遇到无法启动、报错的情况，将 `ide.config.js` 中的 **proxyLibs** 字段注释掉（这字段是方便本地不同组件之间联调的）

也可访问 [storybook](https://github.com/storybooks/storybook) 参考具体的使用案例：http://localhost:9001/
```shell
npm run storybook
```

### 运行测试用例

使用 [jest](https://jestjs.io) 进行测试，执行：

```shell
npm test
```

### 打包发布

普通的 npm 发布即可，记得发布前需要手动打包：

```shell
npm run build && npm publish
```


