<template>
  <div class="one">
    <h4>{{message}}</h4>
    <!--<input type="text" v-model="message"><br><br><br>-->
    <button @click="show = !show">Click</button>
    <h4 v-show="show">{{message}}</h4>
  </div>
</template>

<script>
import Helle from './Hello'

var mes = 'Hello'

export default {
  name: 'one',
  data () {
    return {
      message: mes,
      show: false
    }
  },
  methods () {
      return {

      }
  }
}
</script>
