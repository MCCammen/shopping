<template>
  <div class="block">
    <!-- 轮播图 -->
    <div>
        <el-carousel height="350px">
          <el-carousel-item v-for="(item,index) in date" :key="index">
            <!-- <h3 class="small">{{ item }}</h3> -->
            <div>
              <img :src="item.src" alt="" class="banner"/>
            </div>
          </el-carousel-item>
        </el-carousel>
    </div>
<!-- 热卖产品 -->
    <div id="hot">
      <span class="hot_product">
        热卖产品
      </span>
      <!-- 标签页 -->
      <div class="tab">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="明星产品" name="first">
            <div id="one" >
              <div class="the_product"  v-for="(shop,index) in data" :key="index"> 
                <img :src="shop.src" alt="">
                <b>{{shop.name}}</b>
                <div>
                    <p class="sub-name">{{shop.subname}}</p>
                    <p class="price">{{shop.price}}</p>
                </div>
               <!-- 下拉选项 -->
                <div class="hello">
                    <template>
                      <el-select v-model="value" placeholder="请选择" @change="selectChanged">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </template>
                </div>
               <!-- 立即加入购物车 -->
                <div class="incar">
                  <router-link to="/detail">
                    <input type="submit" value="立即购买" name="name">
                  </router-link>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="畅销套装" name="second">
            <div id="one" >
              <div class="the_product"  v-for="(shop,index) in num" :key="index"> 
                <img :src="shop.src" alt="">
                <b>{{shop.name}}</b>
                <div>
                    <p class="sub-name">{{shop.subname}}</p>
                    <p class="price">{{shop.price}}</p>
                </div>
               <!-- 下拉选项 -->
                <div class="hello">
                    <template>
                      <el-select v-model="value" placeholder="请选择">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </template>
                </div>
               <!-- 立即加入购物车 -->
                <div class="incar">
                  <input type="submit" value="立即购买" name="name">
                </div>
                </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="当季挚爱" name="third">
            <div id="one" >
              <div class="the_product"  v-for="(shop,index) in nums" :key="index"> 
                <img :src="shop.src" alt="">
                <b>{{shop.name}}</b>
                <div>
                    <p class="sub-name">{{shop.subname}}</p>
                    <p class="price">{{shop.price}}</p>
                </div>
               <!-- 下拉选项 -->
                <div class="hello">
                    <template>
                      <el-select v-model="value" placeholder="请选择">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </template>
                </div>
               <!-- 立即加入购物车 -->
                <div class="incar">
                  <input type="submit" value="立即购买" name="name">
                </div>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
      <!-- 两个主题入口 -->
      <div class="bigbanner">
        <div class="left">
          <img src="../assets/img/HR官网banner-505x505.jpg" alt="">
          <div>干预式护肤系列</div>
          <span>以诺贝尔奖议题为灵感，携手INSERM法国国家健康与医学研究院LEMAITRE博士与50位科学家共同打造护肤黑科技</span>
        </div>
        <div class="right">
          <img src="../assets/img/bigbanner.jpg" alt="">
          <div>即刻入会 尊享奢宠权益</div>
          <span>关注品牌官方小程序【赫莲娜品牌之家】，探索更多会员奢宠权益与服务</span>
        </div>
      </div>

      <!-- 尾部轮播图 -->
      <!-- <div> -->
        <div>
          <el-carousel height="360px">
            <el-carousel-item v-for="(banner,index) in datatow" :key="index">
              <img :src="banner.src" alt="" class="banner">
            </el-carousel-item>
          </el-carousel>
        </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
  export default{
    name:"home",
    data:function(){
      return{
        date:[
          {
            src:require('@/assets/img/banner.jpg'),
          },{
            src:require('@/assets/img/banner1.jpg'),
          }
        ],
        activeName:'first',
        data:[
          {
            src:require('@/assets/img/黑绷带面霜.jpg'),
            name:'HR赫莲娜活颜修护舒缓滋养晚霜',
            subname:'REPLASTY AGE RECOVERY ACCELERATING NIGHT CARE',
            price:'¥3580'
          },
          {
            src:require('@/assets/img/白绷带面霜.jpg'),
            name:'活颜修护舒润日霜',
            subname:'| ',
            price:'¥3280'
          },
          {
            src:require('@/assets/img/绿宝瓶.jpg'),
            name:'HR赫莲娜绿宝瓶强韧修护精华露',
            subname:'POWERCELL SKINMUNITY REINFORCING SERUM',
            price:'¥1580'
          }
        ],
        num:[
          {
            src:require('@/assets/img/白绷带面霜.jpg'),
            name:'活颜修护舒润日霜',
            subname:'| ',
            price:'¥3280'
          },
          {
            src:require('@/assets/img/绿宝瓶.jpg'),
            name:'HR赫莲娜绿宝瓶强韧修护精华露',
            subname:'POWERCELL SKINMUNITY REINFORCING SERUM',
            price:'¥1580'
          },
          {
            src:require('@/assets/img/黑绷带面霜.jpg'),
            name:'HR赫莲娜活颜修护舒缓滋养晚霜',
            subname:'REPLASTY AGE RECOVERY ACCELERATING NIGHT CARE',
            price:'¥3580'
          }
        ],
        nums:[
          {
            src:require('@/assets/img/绿宝瓶.jpg'),
            name:'HR赫莲娜绿宝瓶强韧修护精华露',
            subname:'POWERCELL SKINMUNITY REINFORCING SERUM',
            price:'¥1580'
          },
          {
            src:require('@/assets/img/黑绷带面霜.jpg'),
            name:'HR赫莲娜活颜修护舒缓滋养晚霜',
            subname:'REPLASTY AGE RECOVERY ACCELERATING NIGHT CARE',
            price:'¥3580'
          },
          {
            src:require('@/assets/img/白绷带面霜.jpg'),
            name:'活颜修护舒润日霜',
            subname:'| ',
            price:'¥3280'
          }
        ],
        // 底部轮播图
        datatow:[
          {
            src:require('@/assets/img/1920X530-1.jpg'),
          },
          {
            src:require('@/assets/img/1.jpg'),
          },
          {
            src:require('@/assets/img/2.jpg'),
          },
          {
            src:require('@/assets/img/3.jpg'),
          }
        ],
        options: [{
          value: '选项1',
          label: '50ml'
        }, {
          value: '选项2',
          label: '100ml',
          disabled: true
        }, {
          value: '选项3',
          label: '75ml'
        }, {
          value: '选项4',
          label: '15ml'
        }],
        value: '选项3'
      };
    },
     methods: {
        handleClick(tab, event) {
          console.log(tab, event);
        },
        // 改变的值
      selectChanged(e) {
        // 强制刷新
        this.$forceUpdate(); 
      }
      }
  }

</script>

<style lang="less">
@import '../assets/css/home.css';
</style>

