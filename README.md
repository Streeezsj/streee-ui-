### Streee-ui私人UI组件库


### 介绍
写一个自己的组件库来串联一下自己的工程化知识，以及增强一下自己的代码封装水平，毕竟切图可不能提高我们的代码水平，目前简单封装了Input,Button,Radio,Select,Textarea,Tree,Upload等组件。

### 技术栈
- Vue3，JavaScript，Vite，Vite-plugin-md，Scss
- 持续化部署 简单的采用git中的hooks里面的post-recieve
- 代码约束 husky提交发布前验证 eslint提升代码规范性

### 安装运行
* #### 第一步
    * 克隆项目到本地`git clone https://github.com/Streeezsj/streee-ui-.git
* #### 第二步
    * `cnpm i`安装依赖
* #### 第三步
    * 启动后台服务 `npm run dev`
    
## 目录结构

    |-- [dist]                    // 项目打包文件
    |-- [node_modules]            // 存放下载安装的包
    |-- [package]                 // 项目包
        -- [button]               // button组件
        -- [input]                // input组件
        -- [radio]                // radio组件
        -- [select]               // select组件
        -- [textarea]             // textarea组件
        -- [tree]                 // tree组件
        -- [upload]               // upload组件
        -- [index.js]             // 挂载公共组件方法
    |-- [src]                     // 项目代码
        -- [assets]               // 静态文件
            -- [styles]           // 公共组件样式
        -- [components]           // 组件文件
        -- [routes]               // 路由目录
        -- [views]                // 页面级组件
        -- [styles]               // 样式文件
    |-- main.js                   // 项目入口文件
    |-- eslintrc                  // 约束代码规范
    |-- .gitignore                // git忽略配置
    |-- .prettierrc               // 配置代码格式
    |-- package-lock.json         // npm
    |-- package.json              // npm
    |-- vite.config.js            // 开发打包环境
    ...

### 留言

**可以的话可以在此留下阁下宝贵的建议**

-------------------------------------

### 作者信息

####  **[github](https://github.com/Streeezsj)**

联系邮箱: 506106022@qq.com
