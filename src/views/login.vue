/*
 * @Author: Againss
 * @Date: 2019-01-15 18:04:39
 * @Last Modified by: Againss
 * @Last Modified time: 2019-03-27 09:33:31
 */

<template>
  <div>
    <div>登陆页面</div>
    账号：<input type="text" name="user"><br><br>
    密码：<input type="password" name="password"><br><br>
    <button @click="login">登陆</button>
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
      login(){
        this.$router.push({path:'/sys'});
      }
    }

}
</script>

