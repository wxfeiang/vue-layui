<template>
  <div class="login">
    <div class="login-box">
      <form class="layui-form">
        <div class="layui-form-item">
          <label class="layui-form-label">用户名</label>
          <div class="layui-input-block">
            <input
              type="text"
              name="usename"
              required
              lay-verify="required"
              placeholder="请输入用户名"
              autocomplete="off"
              class="layui-input"
            />
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">密码</label>
          <div class="layui-input-block">
            <input
              type="password"
              name="password"
              required
              lay-verify="required"
              placeholder="密码"
              autocomplete="off"
              class="layui-input"
            />
          </div>
        </div>
        <div class="layui-form-item">
          <div class="layui-input-block">
            <button
              class="layui-btn sub"
              lay-submit
              lay-filter="formDemo"
              type="button"
            >
              立即提交
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      msg: {}
    };
  },
  methods: {
    login() {
      this.$router.push("/index");
    }
  },

  mounted() {
    layui.use("form", function() {
      var form = layui.form;
      //监听提交
      form.on("submit(formDemo)", function(data) {
        layer.msg("登录成功");
        this.msg = JSON.stringify(data.field);
        console.log(this.msg);
        login();
        return false;
        //阻止表单跳转;
      });
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login-box {
  width: 600px;
  padding: 20px 30px 20px 10px;
  margin: 200px auto;
}
.sub {
  width: 100%;
  background: #1890ff;
}
</style>
