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
              <el-checkbox label="粉底液"></el-checkbox><br>
              <el-checkbox label="妆前乳"></el-checkbox><br>
              <el-checkbox label="粉饼"></el-checkbox><br>
              <el-checkbox label="睫毛膏"></el-checkbox>
            </el-checkbox-group>
          </el-collapse-item>
          <el-collapse-item title="明星睫毛膏" name="2">
           <el-checkbox-group v-model="checkList">
              <el-checkbox label="猎豹睫毛膏"></el-checkbox><br>
              <el-checkbox label="蟒纹睫毛膏"></el-checkbox><br>
              <el-checkbox label="蕾丝睫毛膏"></el-checkbox><br>
              <el-checkbox label="黄金年代睫毛膏"></el-checkbox>
            </el-checkbox-group>
          </el-collapse-item>
          <el-collapse-item title="粉底液" name="3">
            <el-checkbox label="「高光」粉底液 "></el-checkbox>
          </el-collapse-item>
          <el-collapse-item title="价格" name="4">
            <el-slider class="demonstration" v-model="adus" range :min="420" :max="1150">
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
                src:require('@/assets/img/HR赫莲娜凝颜沁白粉透防晒调理乳液.webp'),
                name:'HR赫莲娜凝颜沁白粉透防晒调理乳液',
                subname:'PREMIUM UV BASE - ROSY SPF50 PA+++',
                price:'¥690'
              },
              {
                src:require('@/assets/img/HR赫莲娜活颜舒缓匀净调理乳.webp'),
                name:'HR赫莲娜活颜舒缓匀净调理乳',
                subname:'RE-PLASTY COMPLEXION RECOVERY CC 001 SPF50 PA+++',
                price:'¥880'
              },
              {
                src:require('@/assets/img/HR赫莲娜蕾丝卷翘睫毛膏.webp'),
                name:'HR赫莲娜蕾丝卷翘睫毛膏',
                subname:'LASH QUEEN MASCARA SEXY BLACKS 01',
                price:'¥420'
              },
              // 分割线 第二pa
              {
                src:require('@/assets/img/蕾丝睫毛膏.webp'),
                name:'HR赫莲娜蟒纹魅惑睫毛膏',
                subname:'LASH QUEEN MASCARA FATAL BLACKS WATERPROOF LIFTED LASHES 01',
                price:'¥420'
              },
              {
                src:require('@/assets/img/高光粉底液30ml.webp'),
                name:'HR赫莲娜至美琉光恒采精华粉底液',
                subname:'PRODIGY CELLGLOW TINT CONCENTRATE',
                price:'¥1150'
              }
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
