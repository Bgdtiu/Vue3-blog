<script setup>

import {systemStore} from "../../store/SystemStore.js";
import Bottom from "../../components/home/Bottom.vue";

function brush() {
  window.location.reload();
}


//添加栏
function openBar(name, path) {
  let count = -1;
  systemStore().$state.horizontalMenu.forEach(a => {
    if (a.name === name) {
      count = 1;
    }
  });

  if (count !== 1) {
    systemStore().$state.horizontalMenu.push({
      name: name,
      path: path,
    })
  }
}

function closeBar(name) {
  for (let i = 0; i < systemStore().$state.horizontalMenu.length; i++) {
    if (systemStore().$state.horizontalMenu[i].name === name && systemStore().$state.horizontalMenu.length > 1) {
      systemStore().$state.horizontalMenu.splice(i, 1);
    }
  }
}

</script>

<template>
  <div
      class="w-screen h-screen flex"
  >
    <div
        class="w-60 h-full bg-slate-800"
    >
      <div
          class="w-full h-16 bg-slate-700 mb-1"
      >
        <img
            class="w-auto h-full mx-auto"
            src="/src/assets/image/aa.jpg">
      </div>

      <router-link
          v-for="obj in systemStore().$state.verticalMenu"
          @click="openBar(obj.name,obj.path)"
          :to="obj.path">
        <div
            class="w-full  h-14 bg-slate-700  hover:bg-blue-500
          transition ease-in-out duration-300"
        >


          <p
              class="w-full h-full flex ml-5 items-center"
          >
            <span
                v-html="obj.svg"
            />

            <span
                class="text-white"
            >
            {{ obj.name }}
          </span>
          </p>
        </div>
      </router-link>


    </div>

    <div
        class="w-full h-screen"
    >
      <div
          class="w-full h-16 border-b border-slate-100 p-1"
      >
        <div
            class=" h-full flex justify-between items-center"
        >
          <div
              class="w-auto h-auto"
          >
            <!--      此位置后面会添加      -->
          </div>

          <div
              class="w-auto h-auto mr-2 flex items-center"
          >


            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-auto h-5 px-5 cursor-pointer"
                @click="brush()"
            >
              <path
                  d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path>
            </svg>

            <img
                src="/src/assets/image/avatar.jpg"
                class="w-auto h-10 rounded-full"
            >
          </div>
        </div>
      </div>
      <div
          class="w-full h-auto: "
      >
        <div
            class="w-full h-12 border-b border-slate-100 p-2 flex"
        >
          <div
              class="w-auto h-full mx-1 flex bg-blue-400 items-center border rounded-md "
              v-for="obj in systemStore().$state.horizontalMenu"
          >
            <router-link :to="obj.path">
              <div
                  class="  w-full h-full px-1"
              >
                <p
                    class="w-auto text-xs text-white"
                >
                  {{ obj.name }}
                </p>

              </div>
            </router-link>

            <div>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class=" w-5 h-5 fill-white cursor-pointer"
                  @click="closeBar(obj.name)"
              >
                <path
                    d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div
          class="overflow-y-auto w-full h-[87vh]  p-5"
      >

          <router-view/>

      </div>

    </div>

  </div>
</template>

<style scoped>

</style>