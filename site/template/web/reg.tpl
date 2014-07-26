{include file="header.tpl" title="注册用户" script_entry="index"}

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
        </div>
        <div class="form-group">
            <label for="reg-password2">3. 请再输入一遍密码以便确认</label>
            <input type="password" class="form-control" id="reg-password2" placeholder="最少10个字符" />
        </div>
    </form>
</div>

{include file="footer.tpl"}
