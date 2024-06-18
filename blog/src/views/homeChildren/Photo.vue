<script setup>
import {ref} from "vue";


let imgArr = ref([

  'https://i1.mcobj.com/uploads/20220201_ef24c2ae85b19.png-1920x1080',


  'https://i1.mcobj.com/uploads/20220514_627f64382dcb1.png-1920x1080',


  'https://i1.mcobj.com/uploads/20220201_f7600ea64541f.jpg-1920x1080',


  'https://i1.mcobj.com/uploads/20220510_2af8d3b811725.jpeg-1920x1080',


  'https://i1.mcobj.com/uploads/20220514_627f643ad088e.png-1920x1080',


  'https://i1.mcobj.com/uploads/20200725_47b6c56d6d100.png-1920x1080',


  'https://i1.mcobj.com/uploads/20220514_627f6438872d4.png-1920x1080',
  'https://i1.mcobj.com/uploads/20221027_635a751f5982b.png-1920x1080',
  'https://i1.mcobj.com/uploads/20220201_6989ce81be744.jpg-1920x1080',
  'https://image.cuteapi.com/images/ACG/PC/4b73e19cca7725777575a5e3473917ac.webp',


]);

let isShowMask = ref(false);

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
      class="w-screen h-auto"
  >
    <div
        class="w-full h-auto px-5 mx-auto   grid gap-5 xl:w-[80em] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 "
    >
      <img
          v-for="url in imgArr "
          class="p-1 shadow-md cursor-pointer rounded-md
          hover:shadow-xl transition ease-in-out duration-300 hover:scale-105 "
          v-lazy="url"
          @click="isShowMask = true"
      >

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