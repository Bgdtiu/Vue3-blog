<script setup>
import {ref, onMounted} from "vue";
import {frontPageStore} from "../../store/FrontPageStore.js";

let div = ref(null);

onMounted(() => {
  const divEl = div.value.$el || div.value;
  frontPageStore().$state.leftContentHeight = divEl.offsetHeight;
});


let articleArray = ref([
  {
    img: 'https://i1.mcobj.com/uploads/20220514_627f643c54a76.png-1920x1080',
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
  },
  {
    img: 'https://i1.mcobj.com/uploads/20220514_627f51acc8b93.png-1920x1080',
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
  },
  {
    img: 'https://i1.mcobj.com/uploads/20220201_cb31b370430ad.jpg-1920x1080',
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
  },
  {
    img: 'https://i1.mcobj.com/uploads/20220514_627f649731a3a.png-1920x1080',
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
  },
  {
    img: 'https://i1.mcobj.com/uploads/20220514_627f57b596f3a.jpg-1920x1080',
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
  },


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
      ref="div"
  >
    <div
        class="w-full  grid gap-4 lg:grid-cols-2"

    >

      <div
          v-for="obj in articleArray"
          class="w-[28em] h-[32rem] shadow-xl  border-amber-400 rounded-2xl bg-white
         ease-in-out hover:scale-[1.03] duration-300 hover:shadow-2xl"
      >
        <div
            class="w-full h-2/5  overflow-hidden rounded-t-2xl"
        >
          <router-link :to="'/home/articleContent/' + obj.articleId">
            <img
                alt="error"
                v-lazy="obj.img"
                class="w-full h-full transition-transform ease-in-out hover:scale-110 duration-300"
            >
          </router-link>

        </div>

        <div
            class="w-full h-3/5  bg-white rounded-b-2xl p-5 "
        >
          <div
              class="w-full h-5  mb-5"
          >
            <span
                :class="'mr-2 px-2 rounded-md tracking-wide duration-300 hover:brightness-75 '  + arr.backgroundColor"
                v-for="arr in obj.tag"
            >
              <router-link :to="'/home/tag/' + arr.name">
                {{ arr.name }}
              </router-link>
            </span>

          </div>

          <h2
              class="w-full text-3xl mb-5 font-bold tracking-wide  hover:text-indigo-800 duration-300"
          >
            <router-link :to="'/home/articleContent/' +  obj.articleId">
              {{ obj.title }}
            </router-link>
          </h2>

          <p
              class="text-[18px] font-normal tracking-wide mb-5 "
          >
            {{ obj.legend }}
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
                  class="w-7 mr-2 fill-blue-300"
              ><path
                  d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM8 14V16H6V14H8ZM18 14V16H10V14H18ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"></path></svg>

            </span>

            <span
                class="float-left"
            >
              {{ obj.dateTime }}
            </span>

            <span
                class="float-right hover:text-indigo-800 duration-300 "
            >
              <router-link :to="'/home/classify/' + obj.classify">
                {{ obj.classify }}
              </router-link>
            </span>

            <span
                class="float-right"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-7 mr-2 fill-emerald-300"
              ><path
                  d="M12.4142 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5ZM8 19H20V11H8V19ZM6 19V10C6 9.44772 6.44772 9 7 9H20V7H11.5858L9.58579 5H4V19H6Z"></path></svg>
            </span>

          </p>
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
</template>

<style scoped>

</style>