# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## 1.0.0 (2022-03-23)


### Features

* 🎸 功能完善: 新增 gulp 处理脚本 ([fbc5398](https://github.com/common-ide/ide-kit/commit/fbc5398fa5ed361637c1d466925fe2d5f575b74d))
* 🎸 功能完善: 新增 has-sub 演示(demo目录) ([6d3e63a](https://github.com/common-ide/ide-kit/commit/6d3e63a95db5066c41723874e75f8906b4d3b9f2))
* 🎸 功能完善: 新增 ide-model-utils 组件 ([cdfa194](https://github.com/common-ide/ide-kit/commit/cdfa194ab0bc2dc6c5078176e3d3059bab230b75))
* 🎸 功能新增: 新增 ide-lib-engine 组件 ([74e3202](https://github.com/common-ide/ide-kit/commit/74e32027b868a0a3d53ec2ac98b5b03f65f746cc))
* 🎸 模块新增: 新增 ide-model-graph ([546b65a](https://github.com/common-ide/ide-kit/commit/546b65a7ab924c3af890cfad68eb53fa22445c35))
* 🎸 新增模块: 新增 ide-model-tree 模块 ([ff1b2bd](https://github.com/common-ide/ide-kit/commit/ff1b2bd355d6e9415f51f1d130f6974dcc74a608))
* 🎸 ide-kit 仓库初始化, 迁移 ide-lib-utils ([24732d6](https://github.com/common-ide/ide-kit/commit/24732d616c32862c16914931d031a8bfb4c588d3))
* 🎸 ide-lib-base-component: 初始化迁移 ([1990fef](https://github.com/common-ide/ide-kit/commit/1990fef70bfb0057fc51d1a7de4810c31b3d8dc8))


### Bug Fixes

* 🐛 放弃在 storybook 中展示 hasSub 功能, 放在 demo 目录中展示 ([ef02e30](https://github.com/common-ide/ide-kit/commit/ef02e30b5a72f6a51568f5e942c31b4f6ac0e43d))

## [0.1.8](https://github.com/one-gourd/ide-lib-engine/compare/v0.1.7...v0.1.8) (2019-07-03)


### Features

* 🎸 功能新增: 中间件新增 cstate 缓存对象 ([41a0c4c](https://github.com/one-gourd/ide-lib-engine/commit/41a0c4c))



## [0.1.7](https://github.com/one-gourd/ide-lib-engine/compare/v0.1.6...v0.1.7) (2019-07-01)


### Features

* 🎸 功能优化: 调整 props 融合策略 ([a57a229](https://github.com/one-gourd/ide-lib-engine/commit/a57a229))



## [0.1.6](https://github.com/one-gourd/ide-lib-engine/compare/v0.1.5...v0.1.6) (2019-05-28)


### Bug Fixes

* 🐛 修复 subComponentInjected 在子组件中失效的问题 ([00cd96d](https://github.com/one-gourd/ide-lib-engine/commit/00cd96d))


### Features

* 🎸 功能新增: subComponentInjected ([024eab7](https://github.com/one-gourd/ide-lib-engine/commit/024eab7))



## [0.1.5](https://github.com/one-gourd/ide-lib-engine/compare/v0.1.4...v0.1.5) (2019-05-21)


### Bug Fixes

* 🐛 类型声明 ([b56f902](https://github.com/one-gourd/ide-lib-engine/commit/b56f902))


### Features

* 🎸 功能新增: advanceMerge ([32be3db](https://github.com/one-gourd/ide-lib-engine/commit/32be3db))
* 🎸 功能新增: 支持 JSONMoel 特殊类型 ([6191778](https://github.com/one-gourd/ide-lib-engine/commit/6191778))



## [0.1.4](https://github.com/alibaba-paimai-frontend/ide-lib-engine/compare/v0.1.3...v0.1.4) (2019-04-30)


### Features

* 🎸 透出 StoresModel ([1d9bba7](https://github.com/alibaba-paimai-frontend/ide-lib-engine/commit/1d9bba7))



## [0.1.3](https://github.com/alibaba-paimai-frontend/ide-lib-engine/compare/v0.1.2...v0.1.3) (2019-04-25)


### Bug Fixes

* 🐛 初始化配置 ([bef4654](https://github.com/alibaba-paimai-frontend/ide-lib-engine/commit/bef4654))
* 🐛 响应模型: stores ([b416369](https://github.com/alibaba-paimai-frontend/ide-lib-engine/commit/b416369))


### Features

* 🎸 功能完善: 新增方法 ([513fe7e](https://github.com/alibaba-paimai-frontend/ide-lib-engine/commit/513fe7e))



<a name="0.1.2"></a>
## [0.1.2](https://github.com/alibaba-paimai-frontend/ide-lib-engine/compare/v0.1.1...v0.1.2) (2019-04-12)


### Features

* **功能新增: 方法:** 新增 quickInitModel 方法, 用于快速创建 mst 对象 ([55c27cd](https://github.com/alibaba-paimai-frontend/ide-lib-engine/commit/55c27cd))
* **功能新增: 配置项:** 新增 extends 配置项, 能够扩展 MST 对象的能力; ([d555410](https://github.com/alibaba-paimai-frontend/ide-lib-engine/commit/d555410))



<a name="0.1.1"></a>
## 0.1.1 (2019-04-02)


### Bug Fixes

* **类型声明:** 去掉 interface.ts 文件，将声明并入到 component.ts 文件中 ([a5a9576](https://github.com/alibaba-paimai-frontend/ide-lib-engine/commit/a5a9576))


### Features

* **功能增强:** 剥离组件业务和 engine 逻辑 ([c3d823f](https://github.com/alibaba-paimai-frontend/ide-lib-engine/commit/c3d823f))
* **功能增强: router proxy:** 新增路由代理功能；变更 ISubProps 的类型声明； ([d6d9d3a](https://github.com/alibaba-paimai-frontend/ide-lib-engine/commit/d6d9d3a))
* **功能增强: 子组件:** 支持子组件的情况；新增 has-sub demo 可运行； ([6181911](https://github.com/alibaba-paimai-frontend/ide-lib-engine/commit/6181911))
* **功能完善: 代码分离:** 将业务代码从 engine 中分离出去 ([3d21110](https://github.com/alibaba-paimai-frontend/ide-lib-engine/commit/3d21110))
* **功能完善: 完备性:** 同步 view 和 model 的 defaultValue 属性；更新 storybook 内容和示例；simple 组件 demo可用 ([abb76af](https://github.com/alibaba-paimai-frontend/ide-lib-engine/commit/abb76af))
* **功能新增: 路由代理:** 接入 lib-base-component 提供的 aliasPathProxy、hoistSubRoutes 两个方法 ([6e1af37](https://github.com/alibaba-paimai-frontend/ide-lib-engine/commit/6e1af37))


### Performance Improvements

* **缓存: createStores:** 给 createStores 新增缓存功能，防止对同一个组件创建多个 Model ([6307225](https://github.com/alibaba-paimai-frontend/ide-lib-engine/commit/6307225))
