<template>
  <div>
    <div id="logo">
      <div id="left">
        <span>门店查询</span>
        <span>在线客服</span>
        <span>帮助中心</span>
      </div>
       <router-link to="/"><img src="~@/assets/img/赫莲娜logo.png" alt=""></router-link>
      <div id="right">
        <router-link to="/login" ><span>登录与注册</span></router-link>
          <!-- <span>登录与注册</span> -->
          <!-- <el-button type="text" @click="dialogVisible = true">登录与注册</el-button> -->
          <span>
            <img src="~@/assets/img/24gl-bag.png" class="HR" alt="">
            我的购物袋
            </span>
      </div>
    </div>
    <div id="nav">
      <div id="na">
        <router-link to="/apex">先端护肤</router-link>
        <router-link to="/about">明星系列</router-link>
        <router-link to="/gift">星品礼盒</router-link>
        <router-link to="/makeup">潮流彩妆</router-link>
        <router-link to="/courtesy">臻享礼遇</router-link>
        <router-link to="/explore">品牌探索</router-link>
        <router-link to="/recycling">空瓶回收</router-link>
        <!-- 搜索框位置 -->
        <div id="find">
            <img src="~@/assets/img/搜索.png" alt="">
            <input placeholder="输入所在城市" class="input-btn">
              <!-- <img src="../src/assets/搜索.png" alt=""> -->
        </div>
      </div>
    </div>
    <router-view/>

      <!-- <el-dialog
        :visible.sync="dialogVisible"
        :before-close="handleClose"
        center>
        <div class="content">
        <span class="left"><a href="">验证码登录</a></span>
        <span class="right"><a href="">密码登录</a></span>
        <div class="one">
          <el-input v-model="input" placeholder="手机号"></el-input>
        </div>
        <div class="two">
          <el-input placeholder="输入验证码" v-model="inputs" :disabled="true"></el-input>
        </div>
        <div class="three">
          <div class="l">
          <el-input v-model="inpu" placeholder="短信验证码"></el-input></div>
          <div class="r"><el-button plain>发送</el-button></div>
        </div>
        <div class="name">
          <el-checkbox v-model="checked">记住用户名</el-checkbox>
        </div>
        <div class="incar">
          <input type="submit" value="登录" name="name">
          <input type="submit" value="创建账户" name="name">
        </div>
        </div>
      </el-dialog> -->
  </div>

</template>

<!-- <script>
  export default {
    data() {
      return {
        dialogVisible: false,
        checked: false,
        input: '',
        inputs:'',
        inpu:''
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  };
</script> -->

<style lang="scss">
@import '~@/assets/css/index.css';
</style>

