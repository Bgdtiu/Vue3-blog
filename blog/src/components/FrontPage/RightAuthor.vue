<script setup>
import {ref} from "vue";

import {frontPageStore} from "../../store/FrontPageStore.js";

let leftContentHeight = frontPageStore().$state.leftContentHeight;

console.log(leftContentHeight);

let userData = ref({
  img: '/src/assets/image/avatar.jpg',
  nickName: 'Bgdtiu',
  explain: '一个人，一晚上',
  socializing: {
    github: 'https://github.com/Bgdtiu?tab=repositories',
    bilibili: 'https://space.bilibili.com/37711262',
  },
  dataInformation: [
    {
      count: 123,
      name: '文章'
    },
    {
      count: 44,
      name: '分类'
    },
    {
      count: 21,
      name: '图片'
    },
    {
      count: 123123,
      name: '总访问量'
    }
  ]

});


</script>

<template>
  <div
      :class=" `hidden h-[${leftContentHeight}px] w-auto   2xl:block p-2 mx-5`"
  >

    <div
        class="w-96 h-auto sticky top-24 2xl:w-96"
    >
      <div
          class="w-full h-96 rounded-lg shadow-xl border-amber-400 flex justify-evenly flex-col items-center
          ease-in-out hover:scale-105 hover:shadow-2xl duration-300 "
      >
        <img
            alt="error"
            :src="userData.img"
            class="w-20 h-20 rounded-full "
        >
        <h2
            class="text-2xl "
        >
          {{ userData.nickName }}
        </h2>
        <p
            class=""
        >
          {{ userData.explain }}
        </p>

        <div
            class="w-auto h-auto flex justify-center items-center"
        >
          <a :href="userData.socializing.github"
             v-if="userData.socializing.github !== ''"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-10 h-10  ease-in-out hover:scale-125 hover:fill-indigo-800  duration-300"
            >
              <path
                  d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path>
            </svg>
          </a>

          <a
              :href="userData.socializing.bilibili"
              v-if="userData.socializing.bilibili !== ''"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-10 h-10 fill-pink-300 ease-in-out hover:scale-125 hover:fill-indigo-800  duration-300"
            >
              <path
                  d="M18.223 3.08609C18.7112 3.57424 18.7112 4.3657 18.223 4.85385L17.08 5.99622L18.25 5.99662C20.3211 5.99662 22 7.67555 22 9.74662V17.2466C22 19.3177 20.3211 20.9966 18.25 20.9966H5.75C3.67893 20.9966 2 19.3177 2 17.2466V9.74662C2 7.67555 3.67893 5.99662 5.75 5.99662L6.91625 5.99622L5.77466 4.85481C5.28651 4.36665 5.28651 3.5752 5.77466 3.08704C6.26282 2.59889 7.05427 2.59889 7.54243 3.08704L10.1941 5.73869C10.2729 5.81753 10.339 5.90428 10.3924 5.99638L13.6046 5.99661C13.6581 5.90407 13.7244 5.81691 13.8036 5.73774L16.4553 3.08609C16.9434 2.59793 17.7349 2.59793 18.223 3.08609ZM18.25 8.50662H5.75C5.09102 8.50662 4.55115 9.01654 4.50343 9.66333L4.5 9.75662V17.2566C4.5 17.9156 5.00992 18.4555 5.65671 18.5032L5.75 18.5066H18.25C18.909 18.5066 19.4489 17.9967 19.4966 17.3499L19.5 17.2566V9.75662C19.5 9.06626 18.9404 8.50662 18.25 8.50662ZM8.25 11.0066C8.94036 11.0066 9.5 11.5663 9.5 12.2566V13.5066C9.5 14.197 8.94036 14.7566 8.25 14.7566C7.55964 14.7566 7 14.197 7 13.5066V12.2566C7 11.5663 7.55964 11.0066 8.25 11.0066ZM15.75 11.0066C16.4404 11.0066 17 11.5663 17 12.2566V13.5066C17 14.197 16.4404 14.7566 15.75 14.7566C15.0596 14.7566 14.5 14.197 14.5 13.5066V12.2566C14.5 11.5663 15.0596 11.0066 15.75 11.0066Z"></path>
            </svg>
          </a>
        </div>

        <div
            class="w-auto h-20  flex justify-center items-center"
        >
          <p
              v-for="obj in userData.dataInformation"
              class="flex flex-col items-center mx-4"
          >
              <span
                  class="text-2xl "
              >
                {{ obj.count }}
              </span>
            <span
                class=""
            >
                {{ obj.name }}
              </span>
          </p>


        </div>
      </div>

    </div>


  </div>
</template>

<style scoped>

</style>