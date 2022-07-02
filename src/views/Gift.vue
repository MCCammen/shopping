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
    
<!-- 图片 -->
    <div class="pic">
      <img src="../assets/img/WechatIMG404.jpg" alt="">
    </div>

<!-- 主内容 -->
    <div class="content">
      <!-- 折叠面板 -->
      <div class="left">
        <el-collapse v-model="activeNames" @change="handleChange">
          <!-- <el-collapse-item title="产品类型" name="1">
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="专业清洁"></el-checkbox><br>
              <el-checkbox label="爽肤水/美容液"></el-checkbox><br>
              <el-checkbox label="精华"></el-checkbox><br>
              <el-checkbox label="奢华乳霜"></el-checkbox><br>
              <el-checkbox label="眼周呵护"></el-checkbox><br>
              <el-checkbox label="面膜"></el-checkbox><br>
              <el-checkbox label="防晒隔离"></el-checkbox>
            </el-checkbox-group>
          </el-collapse-item>
          <el-collapse-item title="肌肤问题" name="2">
           <el-checkbox-group v-model="checkList">
              <el-checkbox label="抗氧化"></el-checkbox><br>
              <el-checkbox label="滋养抗老化"></el-checkbox><br>
              <el-checkbox label="防晒隔离"></el-checkbox><br>
              <el-checkbox label="镇定舒缓"></el-checkbox>
            </el-checkbox-group>
          </el-collapse-item>
          <el-collapse-item title="产品系列" name="3">
            <el-checkbox label="绿宝品系列"></el-checkbox><br>
            <el-checkbox label="干预式系列"></el-checkbox><br>
            <el-checkbox label="至美琉光系类"></el-checkbox><br>
            <el-checkbox label="至美溯潮系列"></el-checkbox><br>
            <el-checkbox label="精锐防护系列"></el-checkbox><br>
            <el-checkbox label="纯净沁润系列"></el-checkbox><br>
            <el-checkbox label="澄光肌活系列"></el-checkbox>
          </el-collapse-item> -->
          <el-collapse-item title="价格" name="4">
            <el-slider class="demonstration" v-model="adus" range :min="1440" :max="7160">
            </el-slider>
          </el-collapse-item>
        </el-collapse>
      </div>
      <!-- 商品内容 -->
      <div class="right">
        <div class="products"  v-for="(shop,index) in date" :key="index"> 
            <img :src="shop.src" alt="">
            <b>{{shop.name}}</b>
            <div>
                <p class="sub-name">{{shop.subname}}</p>
                <p class="price">{{shop.price}}</p>
            </div>
           <!-- 立即加入购物车 -->
            <div class="incar">
              <router-link to="/">
                <input type="submit" value="立即购买" name="name">
              </router-link>
            </div>
          </div>
      </div>
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
                src:require('@/assets/img/高光精华高光安瓶至美密集抗老套装.webp'),
                name:'HR赫莲娜至美密集抗老套装',
                subname:'~',
                price:'¥6360'
              },
              {
                src:require('@/assets/img/小针管黑绷带充盈抚纹礼盒.webp'),
                name:'充盈抚纹礼盒',
                subname:'~',
                price:'¥7160'
              },
              {
                src:require('@/assets/img/小露水高光精华至美光耀莹润礼盒.webp'),
                name:'至美光耀莹润礼盒',
                subname:'~',
                price:'¥3130'
              },
              // 分割线 第二pa
              {
                src:require('@/assets/img/镭射精华高光防晒淡斑防晒礼盒.webp'),
                name:'淡斑防晒礼盒',
                subname:'~',
                price:'¥3830'
              },
              {
                src:require('@/assets/img/新肌水绿宝瓶面膜绿宝瓶净化维稳礼盒.webp'),
                name:'绿宝瓶净化维稳礼盒',
                subname:'~',
                price:'¥2400'
              },{
                src:require('@/assets/img/新肌水轻乳霜绿宝瓶轻感水润礼盒.webp'),
                name:'绿宝瓶轻感水润礼盒',
                subname:'~',
                price:'¥2700'
              },

              {
                src:require('@/assets/img/洁面小露珠水感焕亮礼盒.webp'),
                name:'水感焕亮礼盒',
                subname:'~',
                price:'¥2030'
              },
              {
                src:require('@/assets/img/强韧修护明星礼盒.webp'),
                name:'强韧修护明星礼盒',
                subname:'~',
                price:'¥4860'
              },{
                src:require('@/assets/img/沁润修护礼盒.webp'),
                name:'沁润修护礼盒',
                subname:'~',
                price:'¥4230'
              },
            ],
            checkList: ['选中且禁用','复选框 A'],
            adus: [0, 7160],
            
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
@import '../assets/css/apex.css';
</style>
