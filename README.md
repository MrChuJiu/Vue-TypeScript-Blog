# 本项目提供给Vue-TypeScript 新手学习使用
# 后台请用老张的Core项目

## Project setup
```
npm install
```
```
npm run serve
```
```
├── public                     # 静态资源 (会被直接复制)
│   │── favicon.ico            # favicon图标
│   │── manifest.json          # PWA 配置文件
│   └── index.html             # html模板
├── src                        # 源代码
│   ├── api                    # 所有请求
│   ├── assets                 # 主题 字体等静态资源 (由 webpack 处理加载)
│   ├── components             # 全局组件
│   ├── store                  # 全局 vuex store
│   ├── styles                 # 全局样式
│   ├── views                  # 所有页面
│   ├── App.vue                # 入口页面
│   ├── main.ts                # 入口文件 加载组件 初始化等
│   ├── router.ts              # 路由
│   ├── shims-tsx.d.ts         # 模块注入 支持JSX
│   └── shims-vue.d.ts         # 模块注入
├── tests                      # 测试
├── babel.config.js            # babel-loader 配置
├── cypress.json               # e2e 测试配置
├── package.json               # package.json 依赖
├── postcss.config.js          # postcss 配置
├── tsconfig.json              # typescript 配置
└── vue.config.js              # vue-cli 配置
```
