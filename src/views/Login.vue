<!--  -->
<template>
  <div class="contain">
    <div class="contain-info">
      <div class="input-box">
        <div class="contain-item" v-if="isLogin">
          <div class="title">用户登录</div>
          <div class="register-user">
            <input
              type="email"
              name="username"
              id=""
              placeholder="邮箱"
              autocomplete="off"
              v-model="form.useremail"
            />
            <span class="errTips" v-if="existed">* 邮箱或密码错误！ *</span>
            <input
              type="password"
              name="username"
              id=""
              placeholder="密码"
              v-model="form.userpwd"
            />
          </div>
          <button class="bbutton" @click="login">登录</button>
        </div>
        <div class="contain-item" v-else>
          <div class="title">创建用户</div>
          <div class="register-user">
            <input
              type="text"
              name="username"
              id=""
              placeholder="用户名"
              autocomplete="off"
              v-model="form.username"
            />
            <span class="errTips" v-if="existed">* 用户名已经存在！ *</span>
            <input
              type="email"
              name="username"
              id=""
              placeholder="邮箱"
              autocomplete="off"
              v-model="form.useremail"
            />
            <input
              type="password"
              name="username"
              id=""
              placeholder="密码"
              v-model="form.userpwd"
            />
          </div>
          <button class="bbbutton" @click="register">注册</button>
        </div>
      </div>
      <div class="text-box" :class="{ active: isLogin }">
        <div class="text-contain" v-if="isLogin">
          <div class="stitle">HI，朋友!</div>
          <div class="scontent">开始注册<br />和我们一起变美</div>
          <button class="sbutton" @click="changeType">注册</button>
        </div>
        <div class="text-contain" v-else>
          <div class="stitle">欢迎回来!</div>
          <div class="scontent">与我们保持联系<br />请登录您的账户</div>
          <button class="sbutton" @click="changeType">登录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from '../router';

export default {
  data() {
    return {
      form: {
        username: "",
        useremail: "",
        userpwd: "",
      },
      isLogin: true, //决定显示登录界面还是注册界面
      existed: false, //错误显示
    };
  },
  methods: {
    changeType() {
      this.isLogin = !this.isLogin;
      this.form.username = "";
      this.form.useremail = "";
      this.form.userpwd = "";
      this.existed = false;
    },
    // 登录
    async login() {
      if (this.form.useremail != "" && this.form.userpwd != "") {
        const { data: res } = await this.$http.post("/login", {
          email: this.form.useremail,
          password: this.form.userpwd,
        });
        console.log(res);
        if (res.meta.status === 403) {
          this.existed = true;
          alert(res.meta.msg);
        } else {
          this.existed = false;
          alert("登录成功！");
          router.push('/')
        }
      } else {
        alert("登录内容不能留空！");
      }
    },
    // 注册
    async register() {
      if (
        this.form.username != "" &&
        this.form.useremail != "" &&
        this.form.userpwd != ""
      ) {
        // console.log("11222");
        const { data: res } = await this.$http.post("/register", {
          username: this.form.username,
          email: this.form.useremail,
          password: this.form.userpwd,
        });
        // console.log(res);
        if (res.meta.status === 403) {
          this.existed = true; // 注册失败
          alert(res.meta.msg);
        } else {
          this.existed = false; // 注册成功
          alert("注册成功！");
        }
      } else {
        alert("注册内容不能留空！");
      }
    },
  },
};
</script>
<style scoped>
.contain {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
}
.contain-info {
  width: 50%;
  height: 60%;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 0 10px #f0f0f0, 0 0 10px #f0f0f0;
}
.input-box {
  width: 70%;
  height: 60%;
  position: absolute;
  top: 20%;
  right: 0;
  /* transform: translate(0, -50%); */
  transform: translateX(0%);
  transition: all 1s;
}
.contain-item {
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.contain-item .title {
  font-size: 30px;
  color: #000;
  font-weight: 700;
}

.register-user {
  width: 70%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.register-user input {
  width: 100%;
  height: 30px;
  margin-top: 10px;
  border-style: none;
  outline: none;
  background-color: #eeee;
  border-radius: 10px;
  padding: 2px 10px;
}
.errTips {
  position: absolute;
  top: 55px;
  left: 10px;
  display: block;
  text-align: left;
  color: red;
  font-size: 0.7em;
}
.bbutton,
.bbbutton {
  width: 30%;
  height: 40px;
  margin-top: 20px;
  border-style: none;
  border-radius: 10px;
  outline: none;
  color: #fff;
  background-color: #000;
}
.text-box {
  width: 30%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  /* transform: translateX(0%); */
  transition: all 1s;
  background-color: #000;
  border-radius: 20px;
}
.text-contain {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
}
.stitle {
  font-size: 25px;
  font-weight: 700;
}
.scontent {
  margin: 20px 10px;
}
.sbutton {
  height: 30px;
  width: 100px;
  outline: none;
  border-style: none;
  border-radius: 20px;
}
</style>