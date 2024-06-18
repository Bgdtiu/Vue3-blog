<script setup>
import {ref} from "vue";

let arr = ref([
  {
    id: '1',
    categoryName: 'java',
    articleCount: 10000000,
    creationTime: '2024/5/31 - 1:23:21',
  },
  {
    id: '2',
    categoryName: 'vue3',
    articleCount: 10,
    creationTime: '2024/5/31 - 1:23:21',
  },
  {
    id: '3',
    categoryName: 'json',
    articleCount: 3,
    creationTime: '2024/5/31 - 1:23:21',
  }
]);


let layer2 = ref(0);

let createCategoryName = ref('');

function addCategory() {
  console.log(createCategoryName.value);

  layer2.value = 0;
}

</script>

<template>
  <div
      class="w-full h-full "
  >
    <div
        class="w-full h-auto shadow-md px-5 py-3 bg-white rounded-md mb-5"
    >
      <button
          class="px-5 py-2 bg-blue-400 rounded-sm text-white "
          @click="layer2 = 1"
      >
        创建
      </button>
    </div>

    <div
        class="w-full h-auto bg-white rounded-md px-5 py-3  shadow-md"
    >
      <table
          class="w-full h-auto border"
      >
        <thead
            class="h-14"
        >
        <tr>
          <th
              class="w-1/12 border"
          >
            编号
          </th>
          <th
              class="w-4/12 border"
          >
            分类名
          </th>
          <th
              class="w-1/12 border"
          >
            文章数
          </th>
          <th
              class="w-3/12 border"
          >
            创建时间
          </th>
          <th
              class="w-3/12 border"
          >
            操作
          </th>
        </tr>
        </thead>
        <tbody>
        <tr
            v-for="(obj,index) in arr">
          <td
              class="border text-center"
          >{{ obj.id }}
          </td>
          <td
              class="border "
          >
            <div
                class="flex justify-center"
            >
              <p
                  class="px-3 py-2 bg-blue-400 text-white rounded-sm"
              >
                {{ obj.categoryName }}
              </p>
            </div>
          </td>
          <td
              class="border"
          >
            <div
                class="flex justify-center"
            >
              <p
                  class="bg-indigo-800 text-white px-2 py-1 rounded-full"
              >
                {{ obj.articleCount }}
              </p>
            </div>
          </td>
          <td
              class="border text-center"
          >{{ obj.creationTime }}
          </td>
          <td
              class="border text-center py-2"
          >
            <button
                class="px-5 py-3 bg-red-500 rounded-md text-white cursor-pointer "
                @click="arr.splice(index, 1)"
            >
              删除
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div
      class="absolute left-0 right-0 top-0 bottom-0"
      v-if="layer2 === 1"
  >
    <div
        class="absolute  left-0 right-0 top-0 bottom-0 bg-black opacity-50"
    />

    <div
        class="absolute left-0 right-0 top-0 bottom-0 flex justify-center items-center"
    >
      <div
          class="w-4/12 h-auto bg-white rounded-md px-5 py-3"
      >
        <div
            class="w-auto h-auto flex justify-between border-b py-3 mb-5"
        >

          <p
              class="text-zinc-500 font-bold"
          >
            创建分类
          </p>
          <svg
              @click="layer2 = 0"
              t="1718697753419" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
              p-id="6438" width="20" height="20">
            <path
                d="M461.843747 512 10.406151 963.437601C-3.37504 977.218792-3.412751 999.712215 10.437524 1013.562479 24.384355 1027.509306 46.729466 1027.42679 60.562404 1013.593849L512 562.156248 963.437596 1013.593849C977.218787 1027.37504 999.712218 1027.412745 1013.562476 1013.562479 1027.509306 999.615652 1027.426786 977.270542 1013.593849 963.437601L562.156253 512 1013.593849 60.562399C1027.37504 46.781208 1027.412751 24.287786 1013.562476 10.43752 999.615645-3.509307 977.270534-3.42679 963.437596 10.406151L512 461.843752 60.562404 10.406151C46.781213-3.37504 24.287782-3.412745 10.437524 10.43752-3.509306 24.384347-3.426786 46.729458 10.406151 60.562399L461.843747 512 461.843747 512Z"
                fill="#389BFF" p-id="6439"></path>
          </svg>
        </div>

        <div
            class="w-full h-auto mb-5"
        >
          <p
              class="font-light mb-2"
          >
            分类名
          </p>
          <input
              type="text"
              class="w-full h-12 border rounded-md px-2"
              v-model="createCategoryName"
          >
        </div>

        <div
            class="w-full h-auto flex justify-center"
        >
          <button
              class="px-10 py-3 bg-blue-400 text-white rounded-md"
              @click="addCategory()"
          >
            确定
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>