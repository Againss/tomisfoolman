/*
 * @Author: Againss
 * @Date: 2019-01-22 16:59:44
 * @Last Modified by:   Againss
 * @Last Modified time: 2019-01-22 16:59:44
 */
export default {
  // loginUrl: 'http://o.com/oauth/token',
  // /*本地*/
  // apiUser: 'http://o.com/api/account',
  // /*本地*/
  // hostUrl: 'http://o.com',
  // /*本地*/

  // loginUrl: 'http://o.com/oauth/token', /*本地*/
  // apiUser: 'http://o.com/api/account',  /*本地*/
  // hostUrl: 'http://o.com',

  // demo测试服
  // loginUrl: 'http://zhangshu.sz/oauth/token',
  // apiUser: 'http://zhangshu.sz/api/account',
  // hostUrl: 'http://zhangshu.sz',


  loginUrl: 'http://sfabric.sm/oauth/token',
  /*本地*/
  apiUser: 'http://sfabric.sm/api/account',
  /*本地*/
  hostUrl: 'http://sfabric.sm',

  postData: {
    grant_type: 'password',

    // client_id: 10,
    // client_secret: 'ZzZzWi5abd5RHzlYOxaXxsNH3recvVrWtLLQw25l',

    client_id: 12,
    /*线上ubuntu测试环境*/ //
    client_secret: "owtRbKMhGfw4vPAvls2giuM1Viv9aEQJFbNP3awM",
    /*线上ubuntu测试环境*/

    username: '',
    password: '',
    scope: '*'
  }
}