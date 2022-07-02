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
          <el-collapse-item title="产品类型" name="1">
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
          </el-collapse-item>
          <el-collapse-item title="价格" name="4">
            <el-slider class="demonstration" v-model="adus" range :min="380" :max="7160">
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
                src:require('@/assets/img/黑绷带面霜.jpg'),
                name:'HR赫莲娜活颜修护舒缓滋养晚霜',
                subname:'REPLASTY AGE RECOVERY ACCELERATING NIGHT CARE',
                price:'¥3580'
              },
              {
                src:require('@/assets/img/绿宝瓶pro.webp'),
                name:'HR赫莲娜绿宝瓶强韧修护精华露',
                subname:'POWERCELL SKINMUNITY REINFORCING SERUM',
                price:'¥1580'
              },
              {
                src:require('@/assets/img/绿宝瓶眼霜.webp'),
                name:'绿宝瓶亮采精灵眼部精华乳',
                subname:'POWERCELL 24H EYE CARE',
                price:'¥720'
              },
              // 分割线 第二pa
              {
                src:require('@/assets/img/镭射淡斑精华.webp'),
                name:'HR赫莲娜净白淡斑精华乳',
                subname:'REPLASTY LASERIST CREAM IN SERUM',
                price:'¥2880'
              },
              {
                src:require('@/assets/img/绷带眼膜.webp'),
                name:'HR赫莲娜活颜修护舒缓眼膜',
                subname:'RE-PLASTY AGE RECOVERY EYE PATCH',
                price:'¥1680'
              },{
                src:require('@/assets/img/绿宝瓶新肌水.webp'),
                name:'HR赫莲娜绿宝瓶强韧修护精萃液',
                subname:'POWERCELL SKINMUNITY ESSENCE',
                price:'¥1250'
              },

              {
                src:require('@/assets/img/高光精华.webp'),
                name:'HR赫莲娜至美琉光恒采精华乳',
                subname:'PRODIGY CELLGLOW CONCENTRATE',
                price:'¥1680'
              },
              {
                src:require('@/assets/img/高光安瓶.webp'),
                name:'HR赫莲娜至美琉光恒采密集焕颜精华液',
                subname:'PRODIGY CELLGLOW THE ULTIMATE CELLIXIR',
                price:'¥4680'
              },{
                src:require('@/assets/img/高光防晒.webp'),
                name:'「高光」防晒乳',
                subname:'PRODIGY CELLGLOW UV FLUID',
                price:'¥950'
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
