<script setup>
import {onMounted, ref} from "vue";

import * as echarts from 'echarts/core';
import {
  TitleComponent,
  CalendarComponent,
  TooltipComponent,
  VisualMapComponent
} from 'echarts/components';
import {HeatmapChart} from 'echarts/charts';
import {CanvasRenderer} from 'echarts/renderers';

echarts.use([
  TitleComponent,
  CalendarComponent,
  TooltipComponent,
  VisualMapComponent,
  HeatmapChart,
  CanvasRenderer
]);

const chartContainer = ref(null);
let myChart;
let option;


onMounted(() => {
  myChart = echarts.init(chartContainer.value);
  option = {

    tooltip: {},
    visualMap: {
      type: 'piecewise',
      orient: 'horizontal',
      left: 'center',
      top: 20,
      pieces: [
        {min: 0, max: 1, label: '一个', color: '#d1f397'},
        {min: 1, max: 9, label: '两个以上', color: '#eeea04'},
        {min: 10, max: 9999, label: '十个以上', color: '#ff0000'}
      ]
    },
    calendar: {
      top: 100,
      left: 20,
      right: 20,
      cellSize: ['auto', 20],
      range: '2024',
      itemStyle: {
        borderWidth: 0.5
      },
      monthLabel: {
        nameMap: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
      },
      dayLabel: {
        nameMap: ['日', '一', '二', '三', '四', '五', '六']
      },
    },


    series: {
      type: 'heatmap',
      coordinateSystem: 'calendar',
      data: [
        [
          '2024-1-1',
          1,
        ],
        [
          '2024-1-2',
          10
        ],
        [
          '2024-1-3',
          2
        ],
        [
          '2024-1-4',
          100
        ],
        [
          '2024-6-10',
          100
        ],
        [
          '2024-6-2',
          100
        ]
      ]
    }
  };
  myChart.setOption(option);
});
</script>

<template>
  <div
      class="w-full h-96 shadow-md rounded-md p-5 mr-5 border
          hover:shadow-xl transition ease-in-out duration-300"
  >

    <h2
        class="w-full flex  items-center"
    >
          <span
              class="mr-3"
          >
            <svg t="1718093749584" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 p-id="68001" width="20" height="20"><path
                d="M960 390.4V883.2a76.8 76.8 0 0 1-76.8 76.8H140.8a76.8 76.8 0 0 1-76.8-76.8V390.4h896zM320 691.2h-51.2l-2.2528 0.064a38.4 38.4 0 0 0 0 76.672L268.8 768h51.2l2.2528-0.064a38.4 38.4 0 0 0 0-76.672L320 691.2z m217.6 0h-51.2l-2.2528 0.064a38.4 38.4 0 0 0 0 76.672L486.4 768h51.2l2.2528-0.064a38.4 38.4 0 0 0 0-76.672L537.6 691.2zM320 512h-51.2l-2.2528 0.064a38.4 38.4 0 0 0 0 76.672L268.8 588.8h51.2l2.2528-0.064a38.4 38.4 0 0 0 0-76.672L320 512z m217.6 0h-51.2l-2.2528 0.064a38.4 38.4 0 0 0 0 76.672L486.4 588.8h51.2l2.2528-0.064a38.4 38.4 0 0 0 0-76.672L537.6 512z m217.6 0h-51.2l-2.2528 0.064a38.4 38.4 0 0 0 0 76.672L704 588.8h51.2l2.2528-0.064a38.4 38.4 0 0 0 0-76.672L755.2 512z m128-384a76.8 76.8 0 0 1 76.8 76.8v108.8H64V204.8a76.8 76.8 0 0 1 76.8-76.8h742.4z"
                fill="#6B57FE" p-id="68002"></path><path
                d="M307.2 51.2a25.6 25.6 0 0 1 25.6 25.6v51.2h358.4V76.8a25.6 25.6 0 0 1 25.6-25.6h51.2a25.6 25.6 0 0 1 25.6 25.6v51.2h89.6a76.8 76.8 0 0 1 76.8 76.8v108.8H64V204.8a76.8 76.8 0 0 1 76.8-76.8h89.6V76.8a25.6 25.6 0 0 1 25.6-25.6h51.2z"
                fill="#FFBA00" p-id="68003"></path></svg>
          </span>
      <span
          class="text-xl "
      >
            文章热点图
          </span>

    </h2>


    <div
        ref="chartContainer"
        class="w-auto h-full mx-auto"
    />

  </div>
</template>

<style scoped>

</style>