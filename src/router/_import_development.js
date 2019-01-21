/*
 * @Author: Againss
 * @Date: 2019-01-15 17:01:35
 * @Last Modified by: Againss
 * @Last Modified time: 2019-01-21 15:27:28
 */
// module.exports = file => () => import('@/views/' + file );
module.exports = file => require('@/views/' + file + '.vue').default