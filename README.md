# eleme
A sell base on nodejs, webpack, vue2.0, vue-cli, vue-router, vuex, axios, scss.

# 说明
这个项目是学习vue的时候网上找的视频一边学习一边敲的课程总结, 视频是慕课网出的, 但是讲的是1.0了, 但是已经根据自己的找的资料和官网v1升级到v.2的部分, 将其中的1.0升级到了2.0. 如果还有一部分没有修改的, 请不吝指出, 谢谢了.
这里开始已经默认你已经安装了nodejs和vue-cli, 而且已经知道了git是什么和其基本的操作. 然后一点点的提交和修改代码, 同时进行笔记的更新.

# 0. 准备阶段
为了在GitHub项目库的README.md中插入图片, 在对应的项目中新建Screenshots文件夹, 用于存放插入的截图图片. 保存此时的README, add commit 之后, 同步到远程库中.
<p align="center">
<img src="https://github.com/zhanghoo/eleme/blob/master/Screenshots/20171015003.png" alt="将本地git库同步到远程git库中"></p>
<div>
<p>Git补充:</p> 
<p>提交到本地版本库之前, 可先通过<code style="color: #D05;background: #fafafa;">git status</code>命令查看一下, 可看到对README.md 进行了修改和 添加了Screenshots文件夹. <code style="color: #D05;background: #fafafa;">git add .</code>命令, 将工作区的文件添加到缓存区, <code style="color: #D05;background: #fafafa;">git commit</code> 提交到版本库, 
<code style="color: #D05;background: #fafafa;">git push -u origin master</code> 提交到远程库中, 第一次加参数 -u  之后就可以省略了. 最后看一下 status, nothing to commit , OK.
</p>
</div>
<p align="center"><img src="https://github.com/zhanghoo/eleme/blob/master/Screenshots/20171015001.png" alt="将远程库关联同步到本地"></p>
<p>此时, 已建立项目目录, 目录中可以看到远程库同步下来的文件README.md文件, 其他的就没有了. 可以开始了. </p>
