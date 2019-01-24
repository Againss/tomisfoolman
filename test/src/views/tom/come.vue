/*
 * @Author: Againss
 * @Date: 2019-01-21 15:20:25
 * @Last Modified by: Againss
 * @Last Modified time: 2019-01-21 18:28:37
 */
<template>
  <div>
    <div>hi.Tom</div>
    <router-link to='/login'>这里来个路由跳转吧,跳登陆页吧</router-link>
    <div @click.stop="go">这里来个点击跳转吧,跳登陆页吧</div>
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