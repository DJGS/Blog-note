## 新电脑创建ssh密钥
1. 设置用户名
    git config --global user.name 'gaoshuai'
2. 设置邮箱
    git config --global user.email '2075079757@qq.com'
3. 检查是否正确
    git config user.name/user.email
4. 创建ssh
    ssh-keygen -t rsa -C '2075079757@qq.com'
5. 登录github帐号添加本地ssh即可访问github远程