<script setup>
import {ref} from "vue";

let arr = ref([
  {
    name: 'java常见问题',
    count: 10000000,
    backgroundColor: 'bg-yellow-500'
  },
  {
    name: 'vue3项目',
    count: 10,
    backgroundColor: 'bg-green-400',

  },
  {
    name: 'node使用',
    count: 3,
    backgroundColor: 'bg-lime-500',

  },
  {
    name: 'linux运维',
    count: 10,
    backgroundColor: 'bg-sky-600',

  },
  {
    name: 'python脚本',
    count: 0,
    backgroundColor: 'bg-gradient-to-r from-cyan-500 to-yellow-500'
  }
]);

let objArr = ref([
  {
    img: 'https://i1.mcobj.com/uploads/20220514_627f57b596f3a.jpg-1920x1080',
    title: '从零手撸前后端分离博客(已更新37w+字)...123123123',
    dateTime: '2024/5/31 - 1:23:21'
  },
  {
    img: 'https://i1.mcobj.com/uploads/20220514_627f57b596f3a.jpg-1920x1080',
    title: '从零手撸前后端分离博客(已更新37w+字)...',
    dateTime: '2024/5/31 - 1:23:21'
  },
  {
    img: 'https://i1.mcobj.com/uploads/20220514_627f57b596f3a.jpg-1920x1080',
    title: '从零手撸前后端分离博客(已更新37w+字)..2131231232222.',
    dateTime: '2024/5/31 - 1:23:21'
  },
  {
    img: 'https://i1.mcobj.com/uploads/20220514_627f57b596f3a.jpg-1920x1080',
    title: '从零手撸前后端分离博客(已更新37w+字)...',
    dateTime: '2024/5/31 - 1:23:21'
  },
  {
    img: 'https://i1.mcobj.com/uploads/20220514_627f57b596f3a.jpg-1920x1080',
    title: '从零手撸前后端分离博客(已更新37w+字)..2131231232222.啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊撒大网的啊啊啊啊啊啊啊啊aa端分离博客(已更新37w+字)...',
    dateTime: '2024/5/31 - 1:23:21'
  }
]);


//实现分页
let pageCountObj = ref({
  totalPages: 16,
  pageCount: 0,
  count: 5,
  allow: 'cursor-pointer',
  prohibit: 'cursor-not-allowed',
  leftBtn: 'cursor-not-allowed',
  rightBtn: 'cursor-pointer',
});

//递减页数
function pageDecreasing() {
  pageCountObj.value.count = 5;

  if (pageCountObj.value.pageCount > 0) {
    pageCountObj.value.pageCount -= 5;
  }

  if (pageCountObj.value.pageCount === 0) {
    pageCountObj.value.leftBtn = pageCountObj.value.prohibit;
  }

  pageCountObj.value.rightBtn = pageCountObj.value.allow;
}

//递增页数
function pageIncrement() {
  pageCountObj.value.leftBtn = pageCountObj.value.allow;

  //判断是否大于 5 ，大于 5 就说明当前可以，以 5 page 的长度显示
  if (pageCountObj.value.totalPages - pageCountObj.value.pageCount > 5) {
    pageCountObj.value.pageCount += 5;
  }

  //判断是否小于 5 ，如果小于则不按 5 page 来显示
  if (pageCountObj.value.totalPages - pageCountObj.value.pageCount < 5) {
    pageCountObj.value.count = (pageCountObj.value.totalPages - pageCountObj.value.pageCount)
    pageCountObj.value.rightBtn = pageCountObj.value.prohibit;
  }

  //判断 totalPages值如果是 10 15 20 30 这样的数时 元素设置为 cursor-not-allowed
  if (pageCountObj.value.pageCount + 5 === pageCountObj.value.totalPages) {
    pageCountObj.value.rightBtn = pageCountObj.value.prohibit;
  }
}
</script>

<template>
  <div
      class="pt-24"
  >
    <div
        class="w-full h-96  mx-auto lg:w-9/12"
    >
      <div
          class="w-full h-full  mx mx-auto lg:w-10/12 p-5"
      >
        <div
            class="w-full h-auto  p-5 mb-5  shadow-2xl  rounded-md
            transition ease-in-out hover:scale-[1.1] duration-300 hover:shadow-black"
        >
          <div
              class="w-full h-auto flex mb-5"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-5 h-5 mr-2   fill-yellow-300"
            ><path d="M10.9042 2.10025L20.8037 3.51446L22.2179 13.414L13.0255 22.6063C12.635 22.9969 12.0019 22.9969 11.6113 22.6063L1.71184 12.7069C1.32131 12.3163 1.32131 11.6832 1.71184 11.2926L10.9042 2.10025ZM11.6113 4.22157L3.83316 11.9997L12.3184 20.485L20.0966 12.7069L19.036 5.28223L11.6113 4.22157ZM13.7327 10.5855C12.9516 9.80448 12.9516 8.53815 13.7327 7.7571C14.5137 6.97606 15.78 6.97606 16.5611 7.7571C17.3421 8.53815 17.3421 9.80448 16.5611 10.5855C15.78 11.3666 14.5137 11.3666 13.7327 10.5855Z"></path></svg>
            <p>分类</p>
          </div>
          <div
              class="w-auto h-auto flex flex-wrap "
          >
            <p
                :class="`px-5 py-1 mx-3 my-1  bg-blue-400 rounded-md cursor-pointer
                transition ease-in-out hover:scale-[1.1] duration-300 active:bg-white ${obj.backgroundColor}`"
                v-for="obj in arr"
            >
              {{ obj.name }}
              <span
                  class=" px-1 bg-indigo-900  text-white rounded-full"
              >
                {{ obj.count }}
              </span>
            </p>
          </div>
        </div>

        <div
            class="w-full h-auto p-5 flex flex-wrap"
        >
          <div
              v-for="obj in objArr"
              class="w-auto h-auto py-2 px-5 mb-6 rounded-md shadow-2xl mx-3
              transition ease-in-out hover:scale-[1.1] duration-300 hover:shadow-black"
          >
            <div
                class=" flex justify-center items-center "
            >
              <router-link
                  class="w-24 h-14 mr-5"
                  :to="'/home/articleContent/' + 1">
                <img
                    v-lazy="obj.img"
                    class="w-full h-full  rounded-md
                    transition ease-in-out hover:scale-[1.1] duration-300"
                >
              </router-link>
              <div
                  class="w-full h-full"
              >
                <router-link :to="'/home/articleContent/' + 1">
                  <h2
                      class="mb-1 text-[18px]  tracking-wide font-semibold
                      transition ease-in-out duration-300 hover:text-indigo-800 "
                  >{{ obj.title }}</h2>
                </router-link>
                <div
                    class="w-full h-full flex"
                >
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24" fill="currentColor"
                      class="w-6 mr-2 fill-blue-300"
                  >
                    <path
                        d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM8 14V16H6V14H8ZM18 14V16H10V14H18ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"></path>
                  </svg>
                  <p>{{ obj.dateTime }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full h-20  p-5 flex justify-center items-center ">
          <div
              :class="'w-10 h-10 bg-green-400 rounded-md ' +
           'transition-transform ease-in-out hover:scale-125 duration-300 ' + pageCountObj.leftBtn"
              @click="pageDecreasing()"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-full h-full"
            >
              <path
                  d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
            </svg>
          </div>

          <div
              class="w-auto h-10  mx-5 flex items-center justify-center"
          >
            <p
                v-for="index in pageCountObj.count"
                class=" w-10 mx-2 h-full text-center  bg-blue-400 text-[21px] font-semibold  rounded-md  flex justify-center items-center cursor-pointer
            transition-transform ease-in-out hover:scale-125 duration-300"
            >
              {{ index + pageCountObj.pageCount }}
            </p>
          </div>
          <div
              :class="'w-10 h-10 bg-green-400 rounded-md ' +
           'transition-transform ease-in-out hover:scale-125 duration-300 ' + pageCountObj.rightBtn"
              @click="pageIncrement()"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-full h-full"
            >
              <path
                  d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
            </svg>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>

</style>