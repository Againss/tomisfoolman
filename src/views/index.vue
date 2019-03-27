/*
 * @Author: Againss
 * @Date: 2019-01-21 15:07:11
 * @Last Modified by: Againss
 * @Last Modified time: 2019-03-27 10:36:46
 */
<template>
  <div>
    首页啊
    <router-view></router-view>
    <div
      id="myChart"
      :style="{width: '1400px', height: '600px'}"
    ></div>
  </div>
</template>

<script>
// 引入基本模板
let echarts = require("echarts/lib/echarts");
// 引入柱状图组件
require("echarts/lib/chart/line");
require("echarts/lib/chart/bar");
// 引入提示框和title组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
export default {
  name: "hello",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("myChart"));
      // 绘制图表
      let option= {
          xAxis: {
              type: 'category',
              data: ['1', '2', '3', '4','5','6','7','8']
          },
          yAxis: {},
          series: [
              {
                  type: 'bar',
                  name: '2015',
                  data: [29.3, 32.1, 94.4, 85.4,12,23,44,34],
                  itemStyle: {
                    normal: {
                        //每根柱子颜色设置
                        color:'#039de6'
                    }
                  }
              },
              {
                  type: 'bar',
                  name: '2016',
                  data: [95.8, 89.4, 41.2, 76.9,56,34,67,76],
                  itemStyle: {
                    normal: {
                        //每根柱子颜色设置
                        color:'#5db678'
                    }
                  }
              },
              {
                  type: 'bar',
                  name: '2017',
                  data: [47.7, 83.1, 62.5, 78.1,23,43,56,66],
                  itemStyle: {
                    normal: {
                        //每根柱子颜色设置
                        color:'#eae41f'
                    }
                  }
              }

          ]
        }
      let initOption = {
        title: { text: "来张表" },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "line",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      };
      myChart.setOption(option);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
