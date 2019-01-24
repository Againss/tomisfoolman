/*
 * @Author: Againss
 * @Date: 2019-01-21 18:47:20
 * @Last Modified by: Againss
 * @Last Modified time: 2019-01-21 18:47:42
 */
<template>
  <div>
    <div>back</div>
  </div>
</template>
<script>
import { mapState,mapActions } from "vuex";
export default {
  data(){
    return{
    }
  },
  methods:{
    go(){
      let path='/login'
      this.$router.push({path})
    }
  },
}
</script>