## svn 简单的命令操作
### 1.TortoiseSVN->import
项目经理首次操作时，需在本地代码文件夹上点击右键选择“TortoiseSVN->导入”，将本项目组的代码导     入到SVN上，由SVN来对代码进行管理，其后项目组的其他成员才能下载使用项目组的代码。首次操作svn均需要     登录，从项目经理处获得用户名密码。对代码的导入、更新、合入，请按“模板”填写操作信息，方便后续进      行问题跟踪、代码审查等操作。如下图所示。

<img style="width: 500px; height: 300px; margin: 0 auto; display: block;" src="http://img.blog.csdn.net/20150829112351010?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center">
### 2.右键 -> checkout

<img style="width: 500px; height: 300px; margin: 0 auto; display: block;" src="http://img.blog.csdn.net/20150829112739622?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center">

### 3.update
从SVN检出代码后，本地的代码为SVN服务器上代码的副本，并不会随着其他成员对代码的合入而变化，故       每次对svn操作时，请先对其进行更新，获得其他同事更改后的最新文件。（当代码很多，而自己只更改一小       部分内容时，可以只update相应的文件，缩短更新事件）切记：使用代码前、合入SVN前，均需对相应文件进       行更新。具体图示如下所示。
