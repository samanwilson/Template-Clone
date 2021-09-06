<template>
  <div id="app">
    <appHeader></appHeader>
<transition enter-active-class="animated fadeIn" v-if="AnimationIsTrue">
  <router-view></router-view>
</transition>
    <appFooter></appFooter>

  </div>
</template>

<script>
import Header from './Components/Header'
import Footer from './Components/footer'
import Index from './Components/index'

  export default {
      data(){
          return{
          AnimationIsTrue:true
          }
      },
      components:{
          appHeader:Header,
          appFooter:Footer,

      }

  }
</script>
<style>


</style>
