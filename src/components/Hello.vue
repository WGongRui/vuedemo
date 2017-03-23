<template>

  <div>
    <appHeader></appHeader>

    <div class="hello">

      <h1>{{ msg }}</h1>
      <input type="text" v-model="msg">
      <testdemo></testdemo>
    </div>

    <appFooter></appFooter>
  </div>


</template>

<script>
import demo from './Demo'

import appHeader from './appHeader'
import appFooter from './appFooter'

//window.localStorage.setItem('key' + new Date().toString(), 'tetst' + Math.random().toString())

export default {
  components: {
    testdemo: demo,
    appFooter: appFooter,
    appHeader: appHeader
  },
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list: [
        '',
        'test',
        'test',
        'test',
        'test',
        'test',
        'test'
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
