/*
 * @Author: Againss
 * @Date: 2019-01-15 17:06:03
 * @Last Modified by:   Againss
 * @Last Modified time: 2019-01-15 17:06:03
 */
module.exports = file => () => import('@/views/' + file + '.vue');