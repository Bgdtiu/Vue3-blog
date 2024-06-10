<script setup>
import {ref} from "vue";

let arr = ref([]);


//添加栏
function openBar(name, path) {
  let count = -1;
  arr.value.forEach(a => {
    if (a.name === name) {
      count = 1;
    }
  });

  if (count !== 1) {
    arr.value.push({
      name: name,
      path: path
    })
  }
}

function closeBar(name) {
  for (let i = 0; i < arr.value.length; i++) {
    if (arr.value[i].name === name) {
      arr.value.splice(i, 1);
    }
  }
}

</script>

<template>
  <div
      class="flex"
  >
    <div
        class="w-60 h-screen bg-slate-800"
    >
      <div
          class="w-full h-16 bg-slate-700 mb-1"
      >
        <img
            class="w-auto h-full mx-auto"
            src="/src/assets/image/aa.jpg">
      </div>

      <router-link
          @click="openBar('仪表盘','/ybp')"
          to="">
        <div
            class="w-full  h-14 bg-slate-700 mb-1 hover:bg-blue-500
          transition ease-in-out duration-300"
        >
          <p
              class="w-full h-full flex ml-5  items-center"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-5 h-5 fill-white mr-2"
            >
              <path
                  d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM12 5C13.018 5 13.9852 5.21731 14.8579 5.60806L13.2954 7.16944C12.8822 7.05892 12.448 7 12 7C9.23858 7 7 9.23858 7 12C7 13.3807 7.55964 14.6307 8.46447 15.5355L7.05025 16.9497L6.89445 16.7889C5.71957 15.5368 5 13.8525 5 12C5 8.13401 8.13401 5 12 5ZM18.3924 9.14312C18.7829 10.0155 19 10.9824 19 12C19 13.933 18.2165 15.683 16.9497 16.9497L15.5355 15.5355C16.4404 14.6307 17 13.3807 17 12C17 11.552 16.9411 11.1178 16.8306 10.7046L18.3924 9.14312ZM16.2426 6.34315L17.6569 7.75736L13.9325 11.483C13.9765 11.6479 14 11.8212 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C12.1788 10 12.3521 10.0235 12.517 10.0675L16.2426 6.34315Z"></path>
            </svg>

            <span
                class="text-white"
            >
            仪表盘
          </span>
          </p>
        </div>
      </router-link>
      <router-link
          @click="openBar('文章管理','/wzgl')"
          to="">
        <div
            class="w-full  h-14 bg-slate-700 mb-1 hover:bg-blue-500
          transition ease-in-out duration-300"
        >
          <p
              class="w-full h-full flex ml-5  items-center"
          >


            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-5 h-5 fill-blue-300 mr-2"
            >
              <path
                  d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM7 6H11V10H7V6ZM7 12H17V14H7V12ZM7 16H17V18H7V16ZM13 7H17V9H13V7Z"></path>
            </svg>

            <span
                class="text-white"
            >
            文章管理
          </span>
          </p>
        </div>
      </router-link>
      <router-link
          @click="openBar('分类管理','/flgl')"
          to="">
        <div
            class="w-full  h-14 bg-slate-700 mb-1 hover:bg-blue-500
          transition ease-in-out duration-300"
        >
          <p
              class="w-full h-full flex ml-5  items-center"
          >


            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-5 h-5 mr-2 fill-emerald-300"
            >
              <path
                  d="M12.4142 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5ZM8 19H20V11H8V19ZM6 19V10C6 9.44772 6.44772 9 7 9H20V7H11.5858L9.58579 5H4V19H6Z"></path>
            </svg>

            <span
                class="text-white"
            >
            分类管理
          </span>
          </p>
        </div>
      </router-link>
      <router-link
          to=""
          @click="openBar('标签管理','/wzgl')"
      >
        <div
            class="w-full  h-14 bg-slate-700 mb-1 hover:bg-blue-500
          transition ease-in-out duration-300"
        >
          <p
              class="w-full h-full flex ml-5  items-center"
          >


            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-5 h-5 mr-2   fill-yellow-300"
            >
              <path
                  d="M10.9042 2.10025L20.8037 3.51446L22.2179 13.414L13.0255 22.6063C12.635 22.9969 12.0019 22.9969 11.6113 22.6063L1.71184 12.7069C1.32131 12.3163 1.32131 11.6832 1.71184 11.2926L10.9042 2.10025ZM11.6113 4.22157L3.83316 11.9997L12.3184 20.485L20.0966 12.7069L19.036 5.28223L11.6113 4.22157ZM13.7327 10.5855C12.9516 9.80448 12.9516 8.53815 13.7327 7.7571C14.5137 6.97606 15.78 6.97606 16.5611 7.7571C17.3421 8.53815 17.3421 9.80448 16.5611 10.5855C15.78 11.3666 14.5137 11.3666 13.7327 10.5855Z"></path>
            </svg>


            <span
                class="text-white"
            >
            标签管理
          </span>
          </p>
        </div>
      </router-link>
      <router-link
          to=""
          @click="openBar('图片管理','/tpgl')"
      >
        <div
            class="w-full  h-14 bg-slate-700 mb-1 hover:bg-blue-500
          transition ease-in-out duration-300"
        >
          <p
              class="w-full h-full flex ml-5  items-center"
          >


            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-5 h-5 fill-indigo-400 mr-2"
            >
              <path
                  d="M4 5V19H20V7H11.5858L9.58579 5H4ZM12.4142 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5ZM10 10.5C10 11.3284 9.32843 12 8.5 12C7.67157 12 7 11.3284 7 10.5C7 9.67157 7.67157 9 8.5 9C9.32843 9 10 9.67157 10 10.5ZM18 17L14 11L7 17H18Z"></path>
            </svg>

            <span
                class="text-white"
            >
            图片管理
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

            <router-link to="">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-auto h-5 px-5"
              >
                <path
                    d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path>
              </svg>
            </router-link>
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
              class="w-auto h-full mx-1 flex bg-blue-400 items-center rounded-sm"
              v-for="obj in arr"
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
          class="w-full h-auto p-5"
      >
        <div
            class="w-full h-auto "
        >
          <router-view/>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>

</style>