<template>

  <footer id="appFooter">
    <div>
      <h1>appFooter</h1>
    </div>
    <div id="about">
      <h2 v-text="data.about"></h2>
    </div>
  </footer>

</template>

<script>
let data = {
  about: 'About'
}

export default {
  name: 'appFooter',
  data () {
    return {
      data: data
    }
  }
}
setTimeout(() => {
  data.about = 'tuobA'
}, 2000)
</script>

<style scoped>

</style>
