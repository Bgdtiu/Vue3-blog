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
  legend: {
    data: ['CPU使用率(%)', '内存使用率(%)','存储使用率(%)']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: ['21:41:15', '21:41:20', '21:41:25', '21:41:30', '21:41:35', '21:41:40', '21:41:45']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'CPU使用率(%)',
      type: 'line',
      data: [1, 10, 5, 100, 1.1, 2, 4.23]
    },
    {
      name: '内存使用率(%)',
      type: 'line',
      data: [40, 90, 50, 54, 43, 61, 20]
    },
    {
      name: '存储使用率(%)',
      type: 'line',
      data: [10, 20, 60, 40, 15, 99, 61]
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
            <svg t="1718196664449" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 p-id="37271" width="20" height="20"><path
                d="M23.324444 697.457778v87.608889c0 37.831111 29.297778 68.551111 65.422223 68.551111h324.551111v88.462222H264.817778c-26.453333 0-52.906667-0.568889-79.075556 0h-1.422222c-13.653333 0-26.737778 12.515556-26.168889 27.591111 0.568889 14.791111 11.377778 27.591111 26.168889 27.591111h573.724444c26.453333 0 52.906667 0.568889 79.075556 0h1.137778c13.653333 0 26.737778-12.515556 26.168889-27.591111-0.568889-14.791111-11.377778-27.591111-26.168889-27.591111h-228.977778v-88.462222h324.551111c36.124444 0 65.422222-30.72 65.422222-68.551111v-87.608889H23.324444zM934.968889 54.897778H89.315556a65.422222 65.422222 0 0 0-65.422223 65.422222v534.471111h976.213334V120.604444a65.422222 65.422222 0 0 0-65.137778-65.706666z m-155.306667 296.675555l-7.395555 8.248889-83.911111 91.875556-40.106667 43.804444c0 1.422222 0.284444 2.56 0.284444 3.982222a55.893333 55.893333 0 1 1-91.306666 42.951112c-16.497778-13.653333-23.893333-35.84-18.488889-56.604445l-60.871111-71.395555-42.097778-49.208889c-7.68 1.706667-15.928889 1.706667-23.608889 0.284444l-6.542222 6.257778-78.506667 75.946667-33.564444 32.711111A49.550222 49.550222 0 0 1 210.488889 526.222222c-15.644444-15.36-19.626667-38.968889-9.386667-58.311111 9.955556-19.342222 31.573333-29.866667 53.191111-25.884444l3.128889-3.128889 78.506667-75.946667 35.271111-34.133333a55.665778 55.665778 0 0 1 75.093333-68.835556c20.195556 8.817778 33.28 28.728889 33.564445 50.915556 0 4.266667-0.568889 8.248889-1.422222 12.515555l11.662222 13.653334 76.231111 89.315555 15.928889 18.773334a55.495111 55.495111 0 0 1 34.986666 4.266666l83.911112-91.591111c11.093333-12.231111 22.186667-24.462222 33.28-36.408889-8.248889-20.195556-2.56-43.52 14.222222-57.173333 16.782222-13.937778 40.675556-15.075556 58.88-2.844445 18.204444 12.231111 26.168889 34.702222 19.911111 55.466667-6.826667 20.48-26.168889 34.702222-47.786667 34.702222z m0 0"
                fill="#5089E1" p-id="37272"></path></svg>
          </span>

      <span
          class="text-xl"
      >
            系统信息
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