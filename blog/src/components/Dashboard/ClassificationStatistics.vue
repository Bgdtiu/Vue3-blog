<script setup>
import {ref, onMounted} from 'vue';
import * as echarts from 'echarts/core';
import {TooltipComponent, LegendComponent} from 'echarts/components';
import {PieChart} from 'echarts/charts';
import {LabelLayout} from 'echarts/features';
import {CanvasRenderer} from 'echarts/renderers';

echarts.use([TooltipComponent, LegendComponent, PieChart, CanvasRenderer, LabelLayout]);

const chartRef = ref(null);
let myChart;
const option = ref({
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: '文章数',
      type: 'pie',
      radius: ['30%', '55%'],
      avoidLabelOverlap: false,
      padAngle: 5,
      itemStyle: {
        borderRadius: 5
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 24,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        {
          value: 23, name: 'java'
        },
        {
          value: 12, name: 'vue3'
        },
        {
          value: 14, name: 'json'
        },
        {
          value: 5, name: 'linux'
        },
        {
          value: 3, name: 'python',
        }

      ]
    }
  ]
});

onMounted(() => {
  myChart = echarts.init(chartRef.value);
  myChart.setOption(option.value);
});
</script>

<template>
  <div
      class="w-full h-96 shadow-md rounded-md p-5 mr-5 border bg-white
          hover:shadow-xl transition ease-in-out duration-300"
  >
    <h2
        class="w-full flex items-center"
    >
          <span
              class="mr-3"
          >
            <svg t="1718191119848" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 p-id="11197" width="20" height="20"><path
                d="M87.466667 469.333333h172.8c19.2-106.666667 102.4-189.866667 209.066666-209.066666V87.466667C266.666667 108.8 106.666667 266.666667 87.466667 469.333333z"
                fill="#4C64FE" opacity=".6" p-id="11198"></path><path
                d="M936.533333 469.333333h-172.8c-19.2-106.666667-102.4-189.866667-209.066666-209.066666V87.466667c202.666667 21.333333 362.666667 179.2 381.866666 381.866666zM87.466667 556.8h172.8c19.2 106.666667 102.4 189.866667 209.066666 209.066667V938.666667c-202.666667-21.333333-362.666667-181.333333-381.866666-381.866667z"
                fill="#4C64FE" p-id="11199"></path><path
                d="M936.533333 556.8h-172.8c-19.2 106.666667-102.4 189.866667-209.066666 209.066667V938.666667c202.666667-21.333333 362.666667-181.333333 381.866666-381.866667z"
                fill="#4C64FE" opacity=".6" p-id="11200"></path></svg>
          </span>

      <span
          class="text-xl"
      >
            文章分类统计
          </span>
    </h2>


    <div
        class="w-full h-full"
        ref="chartRef"
    />
  </div>
</template>

<style scoped>

</style>