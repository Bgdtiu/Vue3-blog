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
      }, {
        img: 'https://i1.mcobj.com/uploads/20220514_627f57b596f3a.jpg-1920x1080',
        title: '从零手撸前后端分离博客从零手撸前后端分离博客(已更新37w+字)...123123123从零手撸前后端分离博客(已更新37w+字)...123123123(已更新37w+字)...123123123',
        dateTime: '2024/5/31 - 1:23:21'
      }, {
        img: 'https://i1.mcobj.com/uploads/20220514_627f57b596f3a.jpg-1920x1080',
        title: '从零手撸前后端分离博客从零手撸前后端分离博客(已更新37w+字)...123123123从零手撸前后端分离博客(已更新37w+字)...123123123(已更新37w+字)...123123123',
        dateTime: '2024/5/31 - 1:23:21'
      }, {
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
      class="w-screen h-auto mx-auto"
  >
    <div
        class="w-full xl:w-[80em] h-full mx-auto"
    >
      <div
          v-for="dateObj in objArr"
      >
        <div
            class="w-52 h-auto flex items-center justify-center mb-5"

        >
          <svg t="1718122651375" class="icon mr-5" viewBox="0 0 1024 1024" version="1.1"
               xmlns="http://www.w3.org/2000/svg" p-id="5655" data-darkreader-inline-fill="" width="48" height="48">
            <path
                d="M915.968 206.421333h-352.128a29.184 29.184 0 0 1-19.072-6.784L480 144.341333A68.010667 68.010667 0 0 0 434.901333 128H203.605333A49.493333 49.493333 0 0 0 154.453333 177.066667v584.533333c0 26.496 21.973333 48.512 49.152 49.066667h712.362667a49.493333 49.493333 0 0 0 49.152-49.066667V255.488c0-26.496-21.973333-48.512-49.152-49.066667z"
                fill="#1F92F6" opacity=".3" p-id="5656" data-darkreader-inline-fill=""
                style="--darkreader-inline-fill: #0766b7;"></path>
            <path
                d="M804.181333 275.541333h-352.128a29.184 29.184 0 0 1-19.072-6.784L368.213333 213.461333a68.010667 68.010667 0 0 0-45.098666-16.341333H91.818667A49.493333 49.493333 0 0 0 42.666667 246.186667v584.533333c0 26.496 21.973333 48.512 49.152 49.066667h712.362666A49.493333 49.493333 0 0 0 853.333333 830.72V324.608c0-26.496-21.973333-48.512-49.152-49.066667z"
                fill="#1F92F6" p-id="5657" data-darkreader-inline-fill=""
                style="--darkreader-inline-fill: #0766b7;"></path>
            <path
                d="M483.84 542.72m21.333333 0l199.253334 0q21.333333 0 21.333333 21.333333l0 0q0 21.333333-21.333333 21.333334l-199.253334 0q-21.333333 0-21.333333-21.333334l0 0q0-21.333333 21.333333-21.333333Z"
                fill="#FFFFFF" p-id="5658" data-darkreader-inline-fill=""
                style="--darkreader-inline-fill: #181a1b;"></path>
            <path
                d="M483.84 680.96m21.333333 0l199.253334 0q21.333333 0 21.333333 21.333333l0 0q0 21.333333-21.333333 21.333334l-199.253334 0q-21.333333 0-21.333333-21.333334l0 0q0-21.333333 21.333333-21.333333Z"
                fill="#FFFFFF" p-id="5659" data-darkreader-inline-fill=""
                style="--darkreader-inline-fill: #181a1b;"></path>
            <path d="M42.666667 404.48h810.666666v42.666667H42.666667z" fill="#FFFFFF" p-id="5660"
                  data-darkreader-inline-fill="" style="--darkreader-inline-fill: #181a1b;"></path>
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
              class="w-auto h-auto py-2 px-5 mb-6 rounded-md shadow-md mx-3 bg-white
              transition ease-in-out hover:scale-[1.05] duration-300 hover:shadow-xl"
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