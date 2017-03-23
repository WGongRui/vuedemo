<template>
  <div class="swiper-container">
    <h1>Test</h1>
    <div class="swiper-wrapper">

      <div class="swiper-slide">
        <img class="imgload" src="http://mooc.inxedu.com/images/upload/image/20151026/1446026886181.jpg" alt="首页banner图片01">
      </div>
      <div class="swiper-slide">
        <img class="imgload" src="http://mooc.inxedu.com/images/upload/image/20151026/1446026905031.jpg" alt="首页banner图片02">
      </div>
      <div class="swiper-slide">Slide 3</div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
  import Swiper from 'swiper/dist/js/swiper.min'
  import 'swiper/dist/css/swiper.min.css'

  export default {
    components: {},
    data () {
      return {}
    },
    mounted () {
      console.log('挂载好了')
      var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
      })
      console.log(mySwiper)
    }
  }
</script>
<style>
  html {
    height: 100%;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  #app {
    color: #2c3e50;
    margin-top: -100px;
    max-width: 600px;
    font-family: Source Sans Pro, Helvetica, sans-serif;
    text-align: center;
  }

  #app a {
    color: #42b983;
    text-decoration: none;
  }

  .logo {
    width: 100px;
    height: 100px
  }
  .swiper-container{
    width: 500px;
    height: 360px;
  }
</style>
