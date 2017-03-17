## GitHub使用教程

#### 首先在本地创建ssh key:

>ssh-keygen -t rsa -C "your-email.com"

后面的your_email@youremail.com改为你在github上注册的邮箱,
之后会要求确认路径和输入密码，我们这使用默认的一路回车就行。
成功的话会在~/下生成.ssh文件夹，进去，打开id_rsa.pub,复制里面的key。
回到github上，进入 Account Settings（账户配置）,左边选择SSH Keys,
Add SSH Key,title随便填，粘贴在你电脑上生成的key。

#### 为了验证是否成功,在git bash下输入:

>ssh -T git@github.com

如果是第一次的会提示是否continue，输入yes就会看到：You've successfully authenticated, but GitHub does not provide shell access 。这就表示已成功连上github。
接下来我们要做的就是把本地仓库传到github上去，在此之前还需要设置username和email，因为github每次commit都会记录他们。

#### 进入要上传的仓库，右键git bash，添加远程地址：

>git remote add origin git@github.com:yourName/yourRepo.git

#### 检出仓库

执行如下命令以创建一个本地仓库的克隆版本：

> git clone 'your address'

#### 工作流

你的本地仓库由 git 维护的三棵"树"组成。第一个是你的 工作目录，它持有实际文件；第二个是 暂存区（Index），它像个缓存区域，临时保存你的改动；最后是 HEAD，它指向你最后一次提交的结果。

1. git status //检测本地文件状态
2. git add <filename>/* //添加到缓存区
3. git commit -m '提交的信息' //提交到本地仓库
4. git push/git push origin master //提交到你想用的分支 
5. git remote add origin <server> //将分支添加到服务器
6. git branch <分支名字>/git checkout -b gaoshuai //创建分支
7. git push --set-upstream origin <分支名字> //分支推送到远程仓库
8. git checkout master/gaoshuai //切换分支
9. git branch -d gaoshuai //删除本地分支
10. git push origin :<分支名字> //远程删除你的分支
11. git pull //更新你的本地仓库至最新版本
12. git merge <branch> //合并分支，可能会有冲突，手动解决完，在合并
13. git diff <master> <gaoshuai> //预览差异
14. git tag 1.0.0 1b2e1d63ff //为软件发布创建标签是推荐的。这个概念早已存在
    在 SVN 中也有。你可以执行如下命令创建一个叫做 1.0.0 的标签.
15. git log //打印提交日志,你也可以使用少一点的提交 ID 前几位，只要它的指向具有唯一性。

#### 替换本地改动

假如你操作失误（当然，这最好永远不要发生），你可以使用如下命令替换掉本地改动：

>git checkout -- <filename>

此命令会使用 HEAD 中的最新内容替换掉你的工作目录中的文件。已添加到暂存区的改动以及新文件都不会受到影响。
假如你想丢弃你在本地的所有改动与提交，可以到服务器上获取最新的版本历史，并将你本地主分支指向它：

>git fetch origin

>git reset --hard origin/master

#### 实用小贴士

内建的图形化 git：

>gitk

彩色的 git 输出：

>git config color.ui true

显示历史记录时，每个提交的信息只显示一行：

>git config format.pretty oneline

交互式添加文件到暂存区：

>git add -i

#### 相关连接
* Github 简明指南：http://rogerdudler.github.io/git-guide/index.zh.html
* 如何高效利用GitHub:http://www.yangzhiping.com/tech/github.html
* 廖雪峰git教程: http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000
