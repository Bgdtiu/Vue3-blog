<script setup>
import {ref} from "vue";
import {router} from "../../router/router.js";

let user = ref({
  user: '',
  password: ''
});

function submit() {
  console.log(user.value.user);
  console.log(user.value.password);

  router.push('/system')
}

function clear() {
  user.value.user = '';
  user.value.password = '';
}
</script>

<template>


  <div
      class=" h-full flex flex-col lg:flex-row"
  >
    <div
        class="w-full lg:w-7/12 order-2  lg:order-1 h-screen bg-slate-900 flex flex-col justify-center items-center "
    >
      <h1
          class="w-full  mb-20 antialiased text-4xl text-white text-center font-bold"
      >
        blog博客登录
      </h1>
      <img
          src="/src/assets/image/undraw_sign_up_n6im.svg"
          class="w-full h-96"
      >

    </div>

    <div
        class="w-full lg:w-5/12 h-screen order-1 lg:order-2  flex flex-col justify-center items-center"
    >
      <h1
          class="w-full mb-20 antialiased text-4xl  text-center font-bold"
      >
        欢迎回来
      </h1>


      <div
          class="w-96 h-auto mb-5"
      >
        <span
            class="flex mb-5 shadow-2xl  px-2 py-1 rounded-md"
        >
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-10   mr-1"
          ><path
              d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path></svg>
          <input
              type="text"
              class="w-full h-10 p-2 border-2  rounded-md"
              v-model="user.user"
          >
        </span>
        <span
            class="flex mb-5 shadow-2xl  px-2 py-1 rounded-md"
        >
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-10 mr-1"
          ><path
              d="M19 10H20C20.5523 10 21 10.4477 21 11V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V11C3 10.4477 3.44772 10 4 10H5V9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V10ZM5 12V20H19V12H5ZM11 14H13V18H11V14ZM17 10V9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9V10H17Z"></path></svg>
            <input
                type="text"
                class="w-full h-10 p-2 border-2  rounded-md"
                v-model="user.password"
            >
        </span>

      </div>

      <div
          class="w-full h-auto text-center"
      >
        <button
            class="w-20 h-10 mx-1 bg-blue-400 rounded-md text-white"
            @click="submit()"
        >登录
        </button>
        <button
            class="w-20 h-10 mx-1 bg-blue-400 rounded-md text-white"
            @click="clear()"
        >重置
        </button>
      </div>

    </div>
  </div>
</template>

<style scoped>

</style>