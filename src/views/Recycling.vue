<template>
    <div class="recycling">
        <div></div>
        <div class="img">
            <img src="../assets/img/步骤动图_01.webp" alt="">
        </div>
        <div class="banner">
            <template>
            <el-carousel height="736px" >
                <el-carousel-item v-for="(item,index) in banner" :key="index">
                    <img :src="item.src" alt="" class="banner"/>
                </el-carousel-item>
            </el-carousel>
            </template>
        </div>
        <div class="img" >
            <img src="../assets/img/步骤动图_03.webp" alt="">
        </div>
        <!-- 轮播图 -->
        <div class="banner">
            <template>
            <el-carousel height="736px" >
                <el-carousel-item v-for="(item,index) in date" :key="index">
                    <img :src="item.src" alt="" class="banner"/>
                </el-carousel-item>
            </el-carousel>
            </template>
        </div>
        <!-- 空瓶计划_06.webp -->
        <div class="img" >
            <img src="../assets/img/空瓶计划_06.webp" alt="">
        </div>
    </div>
</template>

<script>
  export default{
    name:"recycling",
        data:function(){
        return{
            date:[
                {
                    src:require('@/assets/img/空瓶计划_03(轮播1）.jpg'),
                },
                {
                    src:require('@/assets/img/空瓶计划_03(轮播2）.jpg'),
                },
                {
                    src:require('@/assets/img/空瓶计划_03(轮播5）.jpg'),
                },
                // 空瓶计划_03(轮播5）.jpg
            ],
            banner:[
                {
                     src:require('@/assets/img/Q1.webp'),
                },
                {
                     src:require('@/assets/img/q2.webp'),
                },
                // q3.webp
                {
                     src:require('@/assets/img/q3.webp'),
                }
            ]
        }
    }
  }
</script>

<style lang="scss">
@import '../assets/css/recycling.css';
</style>