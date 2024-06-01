<script setup>
import {ref} from "vue";

let articleArray = ref([
  {
    img: 'https://api.miaomc.cn/image/get',
    articleId: '1',
    tag: [
      {
        name: 'Java',
        backgroundColor: 'bg-yellow-500',
      },
      {
        name: 'Json',
        backgroundColor: 'bg-lime-500',
      },
      {
        name: 'MybatisPlus',
        backgroundColor: 'bg-blue-400',
      }
    ],
    title: '从零手撸前后端分离博客(已更新37w+字)...',
    legend: '已更新 159 节内容，共计 244600 字，演示截图：1058 张，持续爆肝...',
    dateTime: '2024/5/31 - 1:23:21',
    classify: 'Java'
  }

]);
</script>

<template>
  <div
      class="w-full h-full p-2  grid gap-5
        lg:w-12/12  lg:grid-cols-2
        2xl:w-10/12"
  >
    <div
        v-for="obj in articleArray"
        class=" h-[30rem] shadow-2xl border-solid border-4  border-amber-400 rounded-2xl "
    >
      <div
          class="w-full h-2/5  "
      >
        <router-link :to="'/articleContent/' + obj.articleId">
          <img
              alt="error"
              :src="obj.img"
              class="w-full h-full  rounded-t-2xl"
          >
        </router-link>

      </div>

      <div
          class="w-full h-3/5  bg-white rounded-b-2xl p-5"
      >
        <div
            class="w-full h-5  mb-5"
        >
            <span
                :class="'h-full  mr-2 px-2 rounded-md tracking-wide ' + arr.backgroundColor "
                v-for="arr in obj.tag"
            >
              <router-link :to="'/tag/' + arr.name">
                {{ arr.name }}
              </router-link>
            </span>

        </div>

        <h2
            class="w-full text-3xl mb-5 font-bold tracking-wide "
        >
          <router-link :to="'/articleContent/' +  obj.articleId">
            {{obj.title}}
          </router-link>
        </h2>

        <p
            class="text-[18px] font-normal tracking-wide mb-5 "
        >
          {{obj.legend}}
        </p>

        <p
            class="w-full h-7  text-[18px] font-normal tracking-wide "
        >
            <span
                class="float-left "
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24" fill="currentColor"
                  class="w-7 mr-2 fill-blue-500"
              ><path
                  d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM8 14V16H6V14H8ZM18 14V16H10V14H18ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"></path></svg>

            </span>

          <span
              class="float-left"
          >
              {{obj.dateTime}}
            </span>

          <span
              class="float-right"
          >
              <router-link :to="'/classify/' + obj.classify">
                {{obj.classify}}
              </router-link>
            </span>

          <span
              class="float-right"
          >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-7 mr-2 fill-emerald-400"
              ><path
                  d="M12.4142 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5ZM8 19H20V11H8V19ZM6 19V10C6 9.44772 6.44772 9 7 9H20V7H11.5858L9.58579 5H4V19H6Z"></path></svg>
            </span>

        </p>
      </div>


    </div>
  </div>
</template>

<style scoped>

</style>