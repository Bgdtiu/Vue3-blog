<script setup>
import {ref} from "vue";

let objArr = ref([
  {
    date: '2024/5/~',
    arr: [
      {
        img: 'https://i1.mcobj.com/uploads/20220514_627f57b596f3a.jpg-1920x1080',
        title: '从零手撸前后端分离博客(已更新37w+字)...123123123从零手撸前后端分离博客(已更新37w+字)...123123123',
        dateTime: '2024/5/31 - 1:23:21'
      },
      {
        img: 'https://i1.mcobj.com/uploads/20220514_627f57b596f3a.jpg-1920x1080',
        title: '从零手撸前后端分离博客(已更新37w+字)...123123123',
        dateTime: '2024/5/31 - 1:23:21'
      },
      {
        img: 'https://i1.mcobj.com/uploads/20220514_627f57b596f3a.jpg-1920x1080',
        title: '从零手撸前后端分离博客(已更新37w+字)...123123123从零手撸前后端分离博客(已更新37w+字)...123123123',
        dateTime: '2024/5/31 - 1:23:21'
      },
      {
        img: 'https://i1.mcobj.com/uploads/20220514_627f57b596f3a.jpg-1920x1080',
        title: '从零手撸前后端分离博客(已更新37w+字)...123123123',
        dateTime: '2024/5/31 - 1:23:21'
      }
    ]
  },
  {
    date: '2024/6/~',
    arr: [
      {
        img: 'https://i1.mcobj.com/uploads/20220514_627f57b596f3a.jpg-1920x1080',
        title: '从零手撸前离博客(已更新37w+字)...123123123',
        dateTime: '2024/5/31 - 1:23:21'
      },
      {
        img: 'https://i1.mcobj.com/uploads/20220514_627f57b596f3a.jpg-1920x1080',
        title: '从零手博客(已更新37w+字)...123123123',
        dateTime: '2024/5/31 - 1:23:21'
      },
      {
        img: 'https://i1.mcobj.com/uploads/20220514_627f57b596f3a.jpg-1920x1080',
        title: '从零手撸客(已更新37w+字)...123123123',
        dateTime: '2024/5/31 - 1:23:21'
      },
      {
        img: 'https://i1.mcobj.com/uploads/20220514_627f57b596f3a.jpg-1920x1080',
        title: '从零手撸前后端分离博客从零手撸前后端分离博客(已更新37w+字)...123123123从零手撸前后端分离博客(已更新37w+字)...123123123(已更新37w+字)...123123123',
        dateTime: '2024/5/31 - 1:23:21'
      },{
        img: 'https://i1.mcobj.com/uploads/20220514_627f57b596f3a.jpg-1920x1080',
        title: '从零手撸前后端分离博客从零手撸前后端分离博客(已更新37w+字)...123123123从零手撸前后端分离博客(已更新37w+字)...123123123(已更新37w+字)...123123123',
        dateTime: '2024/5/31 - 1:23:21'
      },{
        img: 'https://i1.mcobj.com/uploads/20220514_627f57b596f3a.jpg-1920x1080',
        title: '从零手撸前后端分离博客从零手撸前后端分离博客(已更新37w+字)...123123123从零手撸前后端分离博客(已更新37w+字)...123123123(已更新37w+字)...123123123',
        dateTime: '2024/5/31 - 1:23:21'
      },{
        img: 'https://i1.mcobj.com/uploads/20220514_627f57b596f3a.jpg-1920x1080',
        title: '从零手撸前后端分离博客从零手撸前后端分离博客(已更新37w+字)...123123123从零手撸前后端分离博客(已更新37w+字)...123123123(已更新37w+字)...123123123',
        dateTime: '2024/5/31 - 1:23:21'
      }
    ]
  }
]);
</script>

<template>
  <div
      class="pt-24"
  />

  <div
      class="w-full h-96  mx-auto md:w-9/12"
  >
    <div
        class="w-full h-full p-1  md:p-5"
    >
      <div
          v-for="dateObj in objArr"
      >
        <div
            class="w-52 h-auto flex items-center justify-center mb-5"

        >
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-10 h-10 fill-blue-300 mr-1"
          >
            <path
                d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 12H17V14H11V7H13V12Z"></path>
          </svg>
          <h2
              class="font-semibold text-2xl tracking-wide underline decoration-blue-300 underline-offset-4"
          >
            {{ dateObj.date }}
          </h2>
        </div>

        <div
            class="w-full h-auto p-5 flex flex-wrap"
        >
          <div
              v-for="arr in dateObj.arr"
              class="w-auto h-auto py-2 px-5 mb-6 rounded-md shadow-2xl mx-3
              transition ease-in-out hover:scale-[1.05] duration-300 hover:shadow-black"
          >
            <div
                class=" flex justify-center items-center "
            >
              <router-link
                  class="w-24 h-14 mr-5"
                  :to="'/home/articleContent/' + 1">
                <img
                    v-lazy="arr.img"
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
                  >{{ arr.title }}</h2>
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
                  <p>{{ arr.dateTime }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>

</style>