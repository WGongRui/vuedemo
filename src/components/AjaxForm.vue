<template>
  <div>
    <form id="uploadFile" method="post" enctype="multipart/form-data">
      <input @change="uploadFile" type="file"/>
    </form>
  </div>
</template>

<script>
import 'jquery-form'
import $ from 'jquery'

var ajaxOption = {
// 默认是form action
  url: 'uploadfile.php',
  success (data) {
    console.log(data)
  }
}
export default {
  methods: {
    uploadFile () {
      console.log('start upload file start')
      $('#uploadFile').ajaxSubmit(ajaxOption)
      console.log('start upload file end')
      return false
    }
  }
}
</script>
<style>

</style>
