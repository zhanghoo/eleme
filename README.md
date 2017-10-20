# eleme
A sell base on nodejs, webpack, vue2.0, vue-cli, vue-router, vuex, axios, scss.

# 说明
这个项目是学习vue的时候网上找的视频一边学习一边敲的课程总结, 视频是慕课网出的, 但是讲的是1.0了, 但是已经根据自己的找的资料和官网v1升级到v.2的部分, 将其中的1.0升级到了2.0. 如果还有一部分没有修改的, 请不吝指出, 谢谢了.
这里开始已经默认你已经安装了nodejs和vue-cli, 而且已经知道了git是什么和其基本的操作. 然后一点点的提交和修改代码, 同时进行笔记的更新. Notes中是学习笔记, 查阅可学习如何从最开始到项目发布完成.

# 项目文件介绍
<pre>
|--build                       # webpack和其他相关配置
|      |
|      ...
|--config                      # 项目配置
|       |
|       ...
|--node_modules                # 通过npm install 安装的依赖代码库
|--Notes                       # 学习笔记, 这里看到一步一步的搭建完整项目的学习笔记 与项目本身无关
|--Screenshots                 # 保存说明截图, 与项目本身无关
|--src                         # 存放项目源码
|    |--assets                 # 静态资源文件
|    |--components             # 组件
|    |--router                 # 路由配置存放
|    | App.vue
|    | main.js
|--static                      # 存放第三方静态资源
|       | .gitkeep             # 当目录为空时, 也可以将这个文件提交到git仓库中
| .babelrc                     # babel的配置
| .editorconfig                # 编辑器配置
| .gitignore                   # 忽略无需git控制的文件
| .postcssrc.js                # postcss的配置
| index.html                   # 首页
| package.json                 # 项目依赖版本即基本信息
| package-lcok.json            # 忽略项目配置安装依赖已更新
| README.md                    # 项目说明
</pre>

# 开发 Notes
<p><a href="https://github.com/zhanghoo/eleme/blob/master/Notes/0.Ready.md" title="0 准备阶段">0 准备阶段</a></p>
<p><a href="https://github.com/zhanghoo/eleme/blob/master/Notes/1.Use%20vue-cli.md" title="1 Vue-cli开启Vuejs项目">1 Vue-cli开启Vuejs项目</a></p>
<p><a href="https://github.com/zhanghoo/eleme/blob/master/Notes/2.Infrastructure%20setup.md" title="2 项目初期构建">2 项目初期构建</a></p>
<p><a href="https://github.com/zhanghoo/eleme/blob/master/Notes/3.Build%20page%20structure.md" title="3 页面结构搭建">3 页面结构搭建</a></p>
<p><a href="https://github.com/zhanghoo/eleme/blob/master/Notes/4.header's%20component%20development.md" title="4 header组件开发">4 header组件开发</a></p>
<p><a href="https://github.com/zhanghoo/eleme/blob/master/Notes/5.good's%20list%20development.md" title="5 goods商品列表开发">5 goods商品列表开发</a></p>
<p><a href="https://github.com/zhanghoo/eleme/blob/master/Notes/6.food's%20detail%20development.md" title="6 food商品详情页实现">6 food商品详情页实现</a></p>
<p><a href="https://github.com/zhanghoo/eleme/blob/master/Notes/7.rating's%20list%20development.md" title="7 ratings评价列表页实现">7 ratings评价列表页实现</a></p>
<p><a href="https://github.com/zhanghoo/eleme/blob/master/Notes/8.seller's%20detail%20development.md" title="8 seller商家详情页实现">8 seller商家详情页实现</a></p>

