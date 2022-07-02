<template>
  <div id="app">
    <Hand/>
    <Tail/>
  </div>
</template>

<script>
import Hand from '@/components/Hand'
import Tail from '@/components/Tail'

export default{
  name:'app',
  components:{
    Hand,
    Tail
  }

}
</script>

<style lang="scss">

// body {
//   background-color: #f5f5f5;
// }

// @import './assets/css/public.css';
@import './assets/css/index.css';
</style>
