<template>
  <div id="bannerworld">
    <!-- 轮播 -->
    <div>
      <el-carousel interval="2000" height="32px" direction="vertical" indicator-position="none">
      <el-carousel-item v-for="(banner,index) in data" :key="index" class="world">
        <span>{{banner.world}}</span>
      </el-carousel-item>
    </el-carousel>
  </div>

  <div class="pic">
      <img src="../assets/img/会员计划PC_03.webp" alt="">
  </div>

  <div class="pic">
      <img src="../assets/img/会员计划PC.webp" alt="">
  </div>

  <div class="block">
    <!-- 轮播图 -->
    <div>
        <el-carousel height="406px">
          <el-carousel-item v-for="(item,index) in date" :key="index">
            <div>
              <img :src="item.src" alt="" class="banner"/>
            </div>
          </el-carousel-item>
        </el-carousel>
    </div>
  </div>

  <div class="pic">
    <img src="../assets/img/细则.webp" alt="">
    <img src="../assets/img/会员计划PC_06.webp" alt="">
  </div>

  </div>
</template>

<script>
export default{
    name:'apex',
    data:function(){
        return{
            data:[
                {
                  world:'官网专享礼遇【全场任购正装臻享1.2倍积分】【全场任购正装臻享星品体验装】'
                },{
                  world:'【6.18年中盛典 不止买1赠1礼】，任购正装满3500元，加享<高光防晒5ml>，满5000元加享<白绷带面霜5ml+高光防晒5ml+限定行李吊牌>'
                },{
                  world:'【付邮试用】解锁赫莲娜家族星品，再享专属回购券。'
                },{
                  world:'【6.18年中盛典 不止买1赠1礼】，任购正装满3500元，加享<高光防晒5ml>，满5000元加享<白绷带面霜5ml+高光防晒5ml+限定行李吊牌>'
                },{
                  world:'官网专享礼遇【全场任购正装臻享1.2倍积分】【全场任购正装臻享星品体验装】'
                }
            ],
            date:[
              {
                src:require('@/assets/img/tc1.webp'),
              },
              {
                src:require('@/assets/img/tc2.jpg'),
              },
              {
                src:require('@/assets/img/tc3.webp'),
              },
              {
                src:require('@/assets/img/tc4.webp'),
              },
              {
                src:require('@/assets/img/tc5.webp'),
              },
            ],
        }
    },
    methods: {
      handleChange(val) {
        console.log(val);
      },
		// 改变的值
      selectChanged(e) {
        // 强制刷新
        this.$forceUpdate(); 
      }
    }
  
}
</script>

<style lang="scss">
@import '../assets/css/courtesy.css';
</style>
