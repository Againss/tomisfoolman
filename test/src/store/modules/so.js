/*
 * @Author: Againss
 * @Date: 2019-01-23 16:10:21
 * @Last Modified by: Againss
 * @Last Modified time: 2019-01-23 18:10:28
 */
import Vue from "vue";
import api from "../../api/api";


const state = {
  about:false,
}

const actions = {
  userLogin = function ({
    state,
    commit
  }, router) {
    if (state.loginFlag) {
      // commit('setLoginFlag', false);
      Vue.http.post(state.loginUrl, state.postData).then(response => {
        if (response.status === 200) {
          commit('setAuthUser', response.data)
          commit('setAccessToken', response.data.access_token);
          //window.sessionStorage.setItem('authUser', JSON.stringify(state.authUser))
          window.localStorage.setItem('authUser', JSON.stringify(state.authUser))
        }
        commit('setHeaders', response.data.access_token)
        Vue.http.get(state.apiUser, {
          headers: state.headers
        }).then(response => {
          let userInfo = response.data.user;
          //   增加 是否为智布网用户isSfabricUser，和是否为系统管理员isSuperAdmin
          userInfo.isSfabricUser = response.data.isSfabricUser;
          userInfo.isSuperAdmin = response.data.isSuperAdmin;
          commit('setLoginFlag', true);

          commit('getCount', userInfo);

          //               commit('getCount',response.data.user);
          //               window.localStorage.setItem('isSuperAdmin',response.data.isSuperAdmin);

          //window.sessionStorage.setItem('permission',JSON.stringify(response.data.data))
          //window.localStorage.setItem('permission',JSON.stringify(response.data.data))
          window.localStorage.setItem('menu', JSON.stringify(response.data.menu))
          window.localStorage.setItem('isSuperAdmin', JSON.stringify(response.data.isSuperAdmin))
          window.localStorage.setItem('userAdminLv', JSON.stringify(response.data.userAdminLv))
          let typeId = response.data.user.company ? response.data.user.company.type_id.split(",") : [];
          window.localStorage.setItem('hasKnit', JSON.stringify({
            is_knit: response.data.is_knit,
            is_knit_company: typeId.includes('5'),
            company: response.data.user.company ? response.data.user.company : {
              id: null,
              name: '',
              address: '',
              contactinfo: '',
              contact_info: []
            }
          }));

          commit('userLogin', router);
        }, response => {
          commit('setLoginFlag', true);
        })
      }, response => {
        commit('setLoginFlag', true);
        alert("登录失败")
      });
    }
  }
}
const mutations = {
  setAuthUser(state,info){
    state.authUser.access_token = info.access_token;
    state.authUser.refresh_token = info.refresh_token;
  }
}

export default {
  state,
  mutations,
  actions,
  namespaced: true,
  //命名空间
  // commit('popup', tipsObj, {
  //   root: true
  // });
  // popup是全局的方法，在这个模块里面调用的时候需要加上{root:true}
  // 在.vue文件里面调用的话，需要加上模块名称
}
