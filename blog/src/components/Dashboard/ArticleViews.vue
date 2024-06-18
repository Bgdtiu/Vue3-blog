<script setup>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts/core';
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent
} from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { UniversalTransition } from 'echarts/features';

echarts.use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition
]);

const chartRef = ref(null);
let myChart;
const option = ref({
  tooltip: {
    trigger: 'axis'
  },
  grid: {
    left: 30,
    right: 30,
    bottom: 70,
    containLabel: false
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['6-6', '6-7', '6-8', '6-9', '6-10', '6-11', '6-12']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '访问量',
      type: 'line',
      stack: 'Total',
      data: [120, 132, 101, 134, 90, 230, 210]
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
            <svg t="1718187559610" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 p-id="6578" width="20" height="20"><path
                d="M236.817067 25.6m68.266666 0l535.483734 0q68.266667 0 68.266666 68.266667l0 669.866666q0 68.266667-68.266666 68.266667l-535.483734 0q-68.266667 0-68.266666-68.266667l0-669.866666q0-68.266667 68.266666-68.266667Z"
                fill="#4362FF" p-id="6579"></path><path
                d="M102.4 160.017067m68.266667 0l535.483733 0q68.266667 0 68.266667 68.266666l0 669.866667q0 68.266667-68.266667 68.266667l-535.483733 0q-68.266667 0-68.266667-68.266667l0-669.866667q0-68.266667 68.266667-68.266666Z"
                fill="#4362FF" opacity=".601" p-id="6580"></path><path
                d="M345.975467 108.544h230.570666a17.066667 17.066667 0 0 1 17.066667 17.066667v55.022933a17.066667 17.066667 0 0 1-17.066667 17.066667H345.975467a17.066667 17.066667 0 0 1-17.066667-17.066667V125.610667a17.066667 17.066667 0 0 1 17.066667-17.066667z"
                fill="#1AC9FF" opacity=".695" p-id="6581"></path><path
                d="M566.408533 812.168533a181.077333 181.077333 0 1 0 362.154667 0 181.077333 181.077333 0 0 0-362.154667 0z"
                fill="#1AC9FF" p-id="6582"></path><path
                d="M621.021867 796.296533a26.965333 26.965333 0 0 0 0 31.778134 153.429333 153.429333 0 0 0 214.254933 35.259733c13.7216-9.557333 25.668267-21.504 35.259733-35.259733a26.965333 26.965333 0 0 0 0-31.778134 152.746667 152.746667 0 0 0-214.289066-35.259733c-13.7216 9.557333-25.668267 21.504-35.2256 35.259733z"
                fill="#4362FF" p-id="6583"></path><path
                d="M697.719467 812.168533a49.7664 49.7664 0 1 0 49.083733-49.0496c-27.101867 0-49.083733 21.947733-49.083733 49.083734zM403.285333 391.918933H363.861333a15.906133 15.906133 0 0 0-14.5408 15.223467v207.36H418.474667v-207.36a13.824 13.824 0 0 0-13.824-14.506667l-1.365334-0.682666zM493.124267 302.08h-42.837334a14.506667 14.506667 0 0 0-13.824 15.223467v298.5984h69.12V317.303467a14.506667 14.506667 0 0 0-12.458666-15.223467zM582.314667 468.650667h-42.1888a14.506667 14.506667 0 0 0-13.824 15.223466v132.027734h69.12v-132.027734a14.506667 14.506667 0 0 0-13.824-15.223466h0.682666zM672.1536 391.918933h-42.154667a15.223467 15.223467 0 0 0-14.506666 15.223467v207.36h69.12v-207.36a13.824 13.824 0 0 0-13.824-14.506667l1.365333-0.682666z"
                fill="#FFFFFF" p-id="6584"></path></svg>


          </span>

      <span
          class="text-xl"
      >
            近一周的博客访问量
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