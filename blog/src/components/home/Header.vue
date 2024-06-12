<script setup>

import {ref} from "vue";

//菜单信息
let menu = ref([
  {
    name: '首页',
    path: '/home/frontPage',
  },
  {
    name: '分类',
    path: '/home/classify',
  },
  {
    name: '标签',
    path: '/home/tag',
  },
  {
    name: '图片',
    path: '/home/photo',
  },
  {
    name: '归档',
    path: '/home/pigeonhole',
  }
]);

//按钮切换
let btnSwitch = ref(false);

</script>

<template>

  <div class="w-full h-20 flex bg-white fixed justify-center border-b-2 shadow-lg z-10 ">

    <div class="w-4/12 h-full flex items-center justify-center">
      <img alt="error" src="/src/assets/image/avatar.jpg" class="w-20 h-full  p-1 rounded-full "/>
      <p
          class="text-2xl ml-5"
      >T_blog</p>
    </div>
    <div class="invisible w-4/12 h-full lg:visible  ">
      <ul
          class="w-full h-full flex justify-center items-center  rounded-lg "
      >
        <li
            v-for="obj in menu"
            class=" flex items-center "
        >
          <router-link
              :to="obj.path"
              class="w-auto h-12 mx-1 px-3 rounded-lg flex  items-center "
          >
            {{ obj.name }}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="w-4/12 h-full lg:invisible  flex justify-center">
      <div
          class="w-full h-full  invisible lg:visible flex justify-center items-center"
      >
        <input
            type="text"
            placeholder="请输入想要查询的文章"
            class="absolute w-44 h-10 shadow-f bg-zinc-200 rounded-full bg-no-repeat bg-auto text-center"
        >
      </div>

      <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-20 h-full float-right  p-1  rounded-lg "
          v-if="btnSwitch === false"
          @click="btnSwitch = true"
      >
        <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
      </svg>

      <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-20 h-full float-right  p-1  rounded-lg   "
          v-else
          @click="btnSwitch = false"
      >
        <path
            d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
      </svg>

      <div
          class="absolute w-full h-96 left-0 right-0 top-24 "
          v-if="btnSwitch === true"
      >

        <div
            class="w-6/12 h-full  float-right rounded-l-lg"
        >

          <ul
              class="w-full h-full flex justify-center items-center flex-col "
          >
            <li
                v-for="obj in menu"
                class="my-4"
            >
              <router-link
                  :to="obj.path"
                  class="p-3 bg-white rounded-lg  shadow-lg"
              >
                {{ obj.name }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="pt-24"/>

</template>

<style scoped>

</style>