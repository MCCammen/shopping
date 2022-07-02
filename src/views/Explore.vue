<template>
    <div id="pice">
        <!-- 轮播 -->
        <div>
        <el-carousel interval="2000" height="32px" direction="vertical" indicator-position="none">
            <el-carousel-item v-for="(banner,index) in data" :key="index" class="world">
            <span>{{banner.world}}</span>
            </el-carousel-item>
        </el-carousel>
        </div>
        <!-- 图片 -->
        <div  v-for="(imges,index) in img" :key="index">
            <img :src="imges.src" alt="">
        </div>
    </div>
</template>

<script>
  export default{
    name:"explore",
    data:function(){
        return{
            img:[
                {
                    src:require('@/assets/img/品牌故事PC_02.webp'),
                },
                {
                     src:require('@/assets/img/品牌故事PC_03.webp'),
                },
                {
                    src:require('@/assets/img/品牌故事PC_04.webp'),
                },
                {
                     src:require('@/assets/img/品牌故事PC_05.webp'),
                },
                {
                    src:require('@/assets/img/品牌故事PC_06.webp'),
                },
                {
                     src:require('@/assets/img/品牌故事PC_07.webp'),
                },
                {
                    src:require('@/assets/img/品牌故事PC_08.webp'),
                },
                {
                     src:require('@/assets/img/品牌故事PC_10.webp'),
                },
                {
                    src:require('@/assets/img/品牌故事PC_11.webp'),
                },
                {
                     src:require('@/assets/img/品牌故事PC_12.webp'),
                },
                {
                    src:require('@/assets/img/品牌故事PC_13.webp'),
                }
            ],
            data:[
                {
                    world:'【官网臻享礼遇】· 全场任购正装臻享1.2倍积分· 全场任购正装臻享随机体验装'
                },
                {
                    world:'【付邮试用】解锁赫莲娜家族星品，再享专属回购券。'
                },
                {
                    world:'【官网臻享礼遇】· 全场任购正装臻享1.2倍积分· 全场任购正装臻享随机体验装'
                },
                {
                    world:'【付邮试用】解锁赫莲娜家族星品，再享专属回购券。'
                },
            ]
        }
    }
  }
</script>

<style>
    @import '../assets/css/explore.css';
</style>
