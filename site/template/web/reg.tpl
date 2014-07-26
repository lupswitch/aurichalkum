{include file="header.tpl" title="注册用户" script_entry="reg"}

{include file="headbar.tpl"}

<div class="container">
    <div class="page-header">
        <h1>注册新用户 <small>安全私密地与朋友分享我的经历</small> </h1>
    </div>
    <form role="form">
        <div class="form-group">
            <label for="reg-email">1. 您的电子邮箱地址</label>
            <input type="email" class="form-control" id="reg-username" placeholder="例如: example@somesite.com" />
        </div>
        <div class="form-group">
            <label for="reg-password">2. 为您的账户设定一个密码</label>
            <input type="password" class="form-control" id="reg-password" placeholder="最少10个字符" />
            <p class="help-block">这一密码对保护您的隐私极为重要！请务必设置复杂而长的密码。</p>
        </div>
        <div class="form-group">
            <label for="reg-password2">3. 请再输入一遍密码以便确认</label>
            <input type="password" class="form-control" id="reg-password2" />
        </div>
        <div class="form-group">
            <label for="reg-privatekey">4. 我的私钥</label>
            <input type="text" class="form-control" id="private-key-display" disabled="true"/>
            <p class="help-block">请在这个页面上随便移动鼠标，我们将利用这些信息构建您的私钥。这一数据越随机，安全性就越好。</p>
        </div>
        <button class="btn btn-primary" type="submit">注册 &gt;&gt;</button>
    </form>
</div>

{include file="footer.tpl"}
