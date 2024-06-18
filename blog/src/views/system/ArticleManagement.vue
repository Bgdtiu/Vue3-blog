<script setup>
import {onUpdated, ref} from "vue";
import {router} from "../../router/router.js";
import {MdEditor} from "md-editor-v3";
import 'md-editor-v3/lib/style.css'


let arr = ref([
  {
    id: '1',
    title: '从零手撸前后端分离博客(已更新37w+字)',
    content: '## hahahasss',
    articleCover: 'https://i1.mcobj.com/uploads/20220514_627f643c54a76.png-1920x1080',
    summary: '从零手撸前后端分离博客(已更新37w+字)',
    releaseTime: '2024/6/13 - 10:42:20',
    isDisplay: 1,
    classify: 'java',
    label: [
      {
        name: 'java常见问题',

        backgroundColor: 'bg-yellow-500'
      },
      {
        name: 'vue3项目',
        backgroundColor: 'bg-green-400',
      }
    ]
  },
  {
    id: '10',
    title: '从零手撸前后端分离博客(已更新37w+字)',
    content: '## 10',
    articleCover: 'https://i1.mcobj.com/uploads/20220514_627f51acc8b93.png-1920x1080',
    summary: '从零手撸前后端分aa离博客(已更新37w+字)',
    releaseTime: '2024/6/13 - 10:42:20',
    isDisplay: 1,
    classify: 'java',
    label: [
      {
        name: 'java常见问题',

        backgroundColor: 'bg-yellow-500'
      },
      {
        name: 'vue3项目',
        backgroundColor: 'bg-green-400',
      }
    ]
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

let layer2 = ref(0);

function modifyUploadedArticle() {
  let id = modifyCreate.value.id;

  for (let i = 0; i < arr.value.length; i++) {
    if (arr.value[i].id === id) {
      arr.value[i] = modifyCreate.value;
      console.log('修改成功')
      layer2.value = 0;
      return;
    }
  }

}


//克隆与显示指定文章
function articleModification(id) {
  for (let i = 0; i < arr.value.length; i++) {
    if (arr.value[i].id === id) {
      modifyCreate.value = Object.assign({}, arr.value[i]);
      layer2.value = 1;
      return
    }
  }

}

function deleteArticle(id) {
  for (let i = 0; i < arr.value.length; i++) {
    if (arr.value[i].id === id) {
      arr.value.splice(i, 1);
      return;
    }
  }
}

//添加文章
function addArticle(id) {

}

const previewTheme = 'smart-blue';


function handleFileChange(event) {
  const file = event.target.files[0];


  const reader = new FileReader();
  reader.onload = (e) => {
    modifyCreate.value.articleCover = e.target.result;
  };

  reader.readAsDataURL(file);
}

let categoriesAndTags = ref([
  [
    'java',
    'vue3',
    'json',
    'linux',
    'python',
  ],
  [
    {
      name: 'java常见问题',

      backgroundColor: 'bg-yellow-500'
    },
    {
      name: 'vue3项目',
      backgroundColor: 'bg-green-400',
    },
    {
      name: 'node使用',
      backgroundColor: 'bg-lime-500',
    },
    {
      name: 'linux运维',
      backgroundColor: 'bg-sky-600',
    },
    {
      name: 'python脚本',
      count: 0,
      backgroundColor: 'bg-gradient-to-r from-cyan-500 to-yellow-500'
    }
  ]
]);

//克隆文章信息
let modifyCreate = ref({});

function addLabel(label, index) {

  for (let i = 0; i < modifyCreate.value.label.length; i++) {
    if (modifyCreate.value.label[i].name === label.name) {
      return;
    }
  }

  if (categoriesAndTags.value.length > 0) {
    modifyCreate.value.label.push(label);
    categoriesAndTags.value[1].splice(index, 1)
  }

}

function removeLabel(label, index) {

  if (modifyCreate.value.label.length > 0) {
    modifyCreate.value.label.splice(index, 1);
    categoriesAndTags.value[1].push(label);
  }
}

function addClassify(classify, index) {

  modifyCreate.value.classify = classify;
}
</script>

<template>
  <div
      class="w-full h-full "
  >
    <div
        class="w-full h-16 px-5 py-2 border-2 rounded-md shadow-md flex items-center mb-5 bg-white"
    >
      <div
          class="h-full flex items-center  mr-10"
      >
        <p
            class="text-sm mr-3"
        >
          文章标题:
        </p>
        <input
            type="text"
            class="w-48 border-2 rounded-md text-[16px]"
            placeholder="请输入"
        >
      </div>

      <div
          class=""
      >
        <button
            class="bg-blue-400 text-white px-4 py-1 rounded-sm mr-10"
        >
          确定
        </button>
        <button
            class="bg-blue-400 text-white px-4 py-1 rounded-sm"
        >
          重置
        </button>
      </div>
    </div>


    <div
        class="w-full h-auto border p-1 shadow-md rounded-md bg-white"
    >
      <div
          class="w-auto h-auto my-2 ml-5"
      >
        <div
            class="w-full h-auto "
        >
          <button
              class="bg-blue-400 px-3 py-1 rounded-md text-white flex items-center"
          >
          <span
              class="mr-2"
          >
            <svg t="1718242638363" class="icon" viewBox="0 0 1034 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 p-id="5829" width="20" height="20"><path
                d="M0 198.171106m101.870246-27.094154l541.367591-143.986074q101.870246-27.094154 128.9644 74.776091l143.986074 541.367592q27.094154 101.870246-74.776091 128.9644l-541.367592 143.986074q-101.870246 27.094154-128.9644-74.776092l-143.986074-541.367591q-27.094154-101.870246 74.776092-128.9644Z"
                fill="#0F62FE" p-id="5830"></path><path
                d="M263.529412 252.988235m150.588235 0l469.835294 0q150.588235 0 150.588235 150.588236l0 469.835294q0 150.588235-150.588235 150.588235l-469.835294 0q-150.588235 0-150.588235-150.588235l0-469.835294q0-150.588235 150.588235-150.588236Z"
                fill="#C1D0FF" fill-opacity=".4" p-id="5831"></path><path
                d="M428.653929 730.724894a15.061835 15.061835 0 0 0-4.460423 9.476518l-10.032188 118.016c-0.627953 7.3984 5.520565 13.601129 12.924988 13.031906l116.877553-8.964518a15.067859 15.067859 0 0 0 9.392188-4.263153l324.002635-317.744188c8.905788-8.735624 9.045835-23.036988 0.310212-31.942777l-93.137318-94.974494c-8.735624-8.907294-23.036988-9.045835-31.942776-0.311717l-49.329694 48.37647 63.332894 64.582777c8.574494 8.744659 8.437459 22.785506-0.3072 31.36-8.744659 8.576-22.784 8.438965-31.36-0.3072l-63.331388-64.581271-242.939483 238.245647z"
                fill="#FFFFFF" p-id="5832"></path></svg>
          </span>
            添加文章
          </button>
        </div>
      </div>

      <table class="w-full">
        <thead>
        <tr>
          <th class="border w-1/12">
            编号
          </th>
          <th class="border w-5/12">
            标题
          </th>
          <th class="border w-1/12">
            文章封面
          </th>
          <th class="border w-2/12">
            发布时间
          </th>
          <th class="border w-1/12">
            是否发布
          </th>
          <th class="border w-3/12">
            操作
          </th>
        </tr>
        </thead>
        <tbody>
        <tr class="border"
            v-for="obj in arr"
        >
          <td
              class="text-center border-r"
          >
            {{ obj.id }}
          </td>
          <td
              class="border-r"
          >
            {{ obj.title }}
          </td>
          <td
              class="p-1 border-r"
          ><img
              class="h-20 mx-auto"
              :src="obj.articleCover">
          </td>
          <td
              class="text-center border-r"
          >
            {{ obj.releaseTime }}
          </td>
          <td
              class="border"
          >
            <div>
              <svg
                  v-if="obj.isDisplay === 1"
                  @click="obj.isDisplay = 0"
                  t="1718267382752" class="icon mx-auto cursor-pointer" viewBox="0 0 1024 1024" version="1.1"
                  xmlns="http://www.w3.org/2000/svg" p-id="2457" width="30" height="30">
                <path
                    d="M12.8 512c0 275.2512 223.9488 499.2 499.2 499.2s499.2-223.9488 499.2-499.2a502.1184 502.1184 0 0 0-282.88-449.9968 38.4 38.4 0 1 0-33.28 69.2224A424.96 424.96 0 0 1 934.4 512c0 232.9088-189.4912 422.4-422.4 422.4S89.6 744.9088 89.6 512 279.0912 89.6 512 89.6a38.4 38.4 0 0 0 0-76.8C236.7488 12.8 12.8 236.7488 12.8 512z"
                    fill="#438CFF" p-id="2458"></path>
                <path
                    d="M285.7472 466.7392a38.4 38.4 0 1 0-54.3232 54.3232l180.992 180.992a38.2976 38.2976 0 0 0 54.272 0l325.8368-325.7856a38.4 38.4 0 1 0-54.3232-54.3232l-298.7008 298.6496-153.7536-153.856z"
                    fill="#438CFF" p-id="2459"></path>
              </svg>
              <svg
                  v-else
                  @click="obj.isDisplay = 1"
                  t="1718268065201" class="icon mx-auto cursor-pointer" viewBox="0 0 1024 1024" version="1.1"
                  xmlns="http://www.w3.org/2000/svg" p-id="28523" width="30" height="30">
                <path
                    d="M953.37931 512C953.37931 268.232939 755.767066 70.62069 512 70.62069 268.232934 70.62069 70.62069 268.232939 70.62069 512 70.62069 755.767061 268.232934 953.37931 512 953.37931 755.767066 953.37931 953.37931 755.767061 953.37931 512ZM512 462.063632 362.212652 312.276289C348.324334 298.387966 326.044072 298.464978 312.254535 312.254526 298.368847 326.140211 298.474726 348.41109 312.276286 362.212657L462.063634 512 312.276286 661.787343C298.387968 675.675664 298.46498 697.955927 312.254535 711.745474 326.140204 725.63116 348.411092 725.525278 362.212652 711.723711L512 561.936368 661.787348 711.723711C675.675666 725.612034 697.955928 725.535022 711.745465 711.745474 725.631153 697.859789 725.525274 675.58891 711.723714 661.787343L561.936366 512 711.723714 362.212657C725.612032 348.324336 725.53502 326.044073 711.745465 312.254526 697.859796 298.36884 675.588908 298.474722 661.787348 312.276289L512 462.063632ZM0 512C0 229.230209 229.230204 0 512 0 794.769796 0 1024 229.230209 1024 512 1024 794.769791 794.769796 1024 512 1024 229.230204 1024 0 794.769791 0 512Z"
                    fill="#389BFF" p-id="28524"></path>
              </svg>
            </div>
          </td>

          <td>
            <div
                class="flex justify-evenly items-center"
            >
              <svg
                  @click="articleModification(obj.id)"
                  t="1718280114455" class="icon cursor-pointer" viewBox="0 0 1024 1024" version="1.1"
                  xmlns="http://www.w3.org/2000/svg" p-id="4430" width="30" height="30">
                <path d="M763.744 240.576l-67.84-67.904-317.76 317.76-10.784 78.624 78.656-10.752z" fill="#3671FD"
                      opacity=".2" p-id="4431"></path>
                <path
                    d="M787.904 198.976a64 64 0 0 1 0 90.496l-302.592 302.624a64 64 0 0 1-36.576 18.144l-115.2 15.776A16 16 0 0 1 315.52 608l15.776-115.2a64 64 0 0 1 18.144-36.576l302.624-302.592a64 64 0 0 1 90.496 0z m-45.248 45.152l-45.248-45.248-302.624 302.592-7.168 52.48 52.448-7.2z"
                    fill="#3671FD" p-id="4432"></path>
                <path
                    d="M416.512 154.432a32 32 0 0 1 3.744 63.776l-3.744 0.224h-160a64 64 0 0 0-63.84 59.2l-0.16 4.8v480a64 64 0 0 0 59.2 63.84l4.8 0.16h512a64 64 0 0 0 63.84-59.2l0.16-4.8v-288a32 32 0 0 1 63.776-3.744l0.224 3.744v288a128 128 0 0 1-121.6 127.84l-6.4 0.16h-512a128 128 0 0 1-127.84-121.6l-0.16-6.4v-480a128 128 0 0 1 121.6-127.84l6.4-0.16z"
                    fill="#3671FD" p-id="4433"></path>
                <path
                    d="M320.512 666.432h384a28.288 28.288 0 0 1 32 32 28.288 28.288 0 0 1-32 32h-384a28.288 28.288 0 0 1-32-32 28.288 28.288 0 0 1 32-32z"
                    fill="#FE9C23" p-id="4434"></path>
              </svg>

              <svg
                  title="你哈"
                  @click="router.push('/home/articleContent/' + obj.id)"
                  t="1718280219547" class="icon cursor-pointer" viewBox="0 0 1024 1024" version="1.1"
                  xmlns="http://www.w3.org/2000/svg" p-id="9819" width="30" height="30">
                <path
                    d="M766.06060633 605.090909a232.727273 232.727273 0 0 0-279.272728 372.363636H151.66060633A83.781818 83.781818 0 0 1 67.87878833 893.672727V126.277818a83.781818 83.781818 0 0 1 83.781818-83.781818h530.618182a83.781818 83.781818 0 0 1 83.781818 83.781818V605.090909zM198.20606033 232.727273a37.236364 37.236364 0 1 0 0 74.472727h437.527273a37.236364 37.236364 0 1 0 0-74.472727H198.20606033z m0 139.636363a37.236364 37.236364 0 1 0 0 74.472728h344.436364a37.236364 37.236364 0 1 0 0-74.472728H198.20606033zM626.42424233 907.636364a116.363636 116.363636 0 1 0 0-232.727273 116.363636 116.363636 0 0 0 0 232.727273z m171.985455-44.962909l147.874909 84.48a34.909091 34.909091 0 0 1-34.629818 60.602181l-151.738182-86.714181a186.181818 186.181818 0 1 1 38.539636-58.414546z"
                    fill="#03a8ff" p-id="9820"></path>
              </svg>
              <svg
                  @click="deleteArticle(obj.id)"
                  t="1718280697563" class="icon cursor-pointer" viewBox="0 0 1024 1024" version="1.1"
                  xmlns="http://www.w3.org/2000/svg" p-id="11750" width="30" height="30">
                <path
                    d="M514.144 847.038c15.452 0 27.973-12.529 27.973-27.972V483.461c0-15.443-12.522-27.979-27.973-27.979-15.444 0-27.966 12.536-27.966 27.979v335.605c0 15.443 12.522 27.972 27.966 27.972z m111.886 0c15.444 0 27.959-12.522 27.959-27.965V483.468c0-15.443-12.514-27.972-27.959-27.972-15.444 0-27.973 12.529-27.973 27.972v335.605c0 15.443 12.529 27.965 27.973 27.965z m-223.743 0c15.444 0 27.966-12.522 27.966-27.965V483.468c0-15.443-12.522-27.972-27.966-27.972s-27.973 12.529-27.973 27.972v335.605c0 15.443 12.529 27.965 27.973 27.965z m419.499-671.23H653.982v-55.931c0-30.893-25.036-55.931-55.939-55.931H430.239c-30.889 0-55.925 25.038-55.925 55.931v55.931H206.51c-30.903 0-55.939 25.052-55.939 55.944v55.938c0 30.886 25.036 55.931 55.939 55.931v503.417c0 61.779 50.08 111.868 111.864 111.868h391.547c61.784 0 111.864-50.09 111.864-111.868V343.621c30.889 0 55.939-25.045 55.939-55.931v-55.938c0.001-30.892-25.05-55.944-55.938-55.944z m-391.547-27.965c0-15.443 12.529-27.965 27.973-27.965h111.872c15.444 0 27.959 12.522 27.959 27.965v27.965H430.239v-27.965z m335.607 699.195c0 30.879-25.036 55.931-55.925 55.931H318.374c-30.889 0-55.925-25.052-55.925-55.931V343.621h503.396v503.417z m27.973-559.348h-559.35c-15.444 0-27.959-12.529-27.959-27.965 0-15.45 12.514-27.972 27.959-27.972H793.82c15.444 0 27.966 12.522 27.966 27.972 0 15.436-12.522 27.965-27.967 27.965z"
                    fill="#ed0200" p-id="11751"></path>
              </svg>

            </div>
          </td>
        </tr>
        </tbody>
      </table>
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

    <div
        class="absolute top-0 bottom-0 left-0 right-0 bg-white"
        v-if="layer2 === 1"
    >
      <div
          class="w-full h-16 px-5 py-2 border-b shadow-md flex items-center justify-between mb-5"
      >
        <h2
            class=" text-xl font-bold text-zinc-500"
        >
          修改文章
        </h2>
        <div
            class="w-auto h-auto"
        >
          <button
              class="bg-blue-400 text-white text-lg rounded-sm px-5 py-1 mx-2"
              @click="modifyUploadedArticle()"
          >
            修改
          </button>

          <button
              class="bg-blue-400 text-white text-lg rounded-sm px-5 py-1 mx-2"
              @click="layer2 = 0"
          >
            取消
          </button>
        </div>
      </div>

      <div
          class="w-full  h-auto px-5 py-2 items-center mb-5"
      >
        <p
            class="mb-2"
        >
          标题
        </p>
        <input
            class="w-full h-10  border rounded-md px-3"
            type="text"
            v-model="modifyCreate.title"
        >
      </div>


      <div
          class="w-full h-[50em]  px-5 py-2 mb-10"
      >
        <p
            class="mb-2"
        >
          内容
        </p>

        <div
            class="w-full h-full"
        >
          <MdEditor
              class="rounded-md"
              v-model="modifyCreate.content"
              style="width: 100% !important;height: 100%;"
              :preview-theme="previewTheme"
          />
        </div>
      </div>

      <div
          class="w-full  h-auto px-5 py-2 items-center mb-5"
      >
        <p
            class="mb-2"
        >
          文章封面
        </p>


        <div
            class="w-full h-auto flex items-end"
        >

          <img
              class="h-48 mr-5"
              v-if="modifyCreate.articleCover" :src="modifyCreate.articleCover"/>

          <input
              class="w-auto cursor-pointer"
              type="file" @change="handleFileChange"/>


        </div>

      </div>

      <div
          class="w-full  h-auto px-5 py-2 items-center mb-5"
      >
        <p
            class="mb-2"
        >
          摘要
        </p>
        <input
            class="w-full h-10  border rounded-md px-3"
            type="text"
            v-model="modifyCreate.summary"
        >
      </div>
      <div
          class="w-full  h-auto px-5 py-2 items-center mb-5"
      >
        <p
            class="mb-2"
        >
          标签
        </p>

        <div
            class="w-full h-auto  px-4 py-2 flex"
        >
          <div
              class="w-96 h-auto shadow mr-3"
          >
            <p
                class="mb-1"
            >
              未使用
            </p>
            <ul
                class="flex flex-wrap"
            >
              <li
                  :class="'px-4 py-1 tracking-wide  mx-1 my-1  rounded-sm cursor-pointer ' + label.backgroundColor"
                  v-for="(label,index) in categoriesAndTags[1]"
                  @click="addLabel(label,index)"
              >
                {{ label.name }}
              </li>
            </ul>
          </div>

          <div
              class="w-96 h-auto shadow"
          >
            <p
                class="mb-1"
            >
              已使用
            </p>
            <ul
                class="flex flex-wrap"
            >
              <li
                  :class="'px-4 py-1   tracking-wide  mx-1 my-1  rounded-sm cursor-pointer ' + label.backgroundColor"
                  v-for="(label,index) in modifyCreate.label"
                  @click="removeLabel(label,index)"
              >
                {{ label.name }}
              </li>
            </ul>
          </div>


        </div>
      </div>
      <div
          class="w-full  h-auto px-5 py-2 items-center mb-5"
      >
        <p
            class="mb-2"
        >
          分类
        </p>

        <div
            class="w-full h-auto  px-4 py-2 flex"
        >
          <div
              class="w-96 h-auto shadow mr-3"
          >
            <p
                class="mb-1"
            >
              未使用
            </p>
            <ul
                class="flex flex-wrap"
            >
              <li
                  class="px-4 py-1 bg-blue-400 text-white tracking-wide  mx-1 my-1  rounded-sm cursor-pointer"
                  v-for="(classify,index) in categoriesAndTags[0]"
                  @click="addClassify(classify,index)"
              >
                {{ classify }}
              </li>
            </ul>
          </div>

          <div
              class="w-96 h-auto shadow"
          >
            <p
                class="mb-1"
            >
              已使用
            </p>
            <ul
                class="flex flex-wrap"
            >
              <li
                  class="px-4 py-1 bg-blue-400 text-white tracking-wide  mx-1 my-1  rounded-sm cursor-pointer"
              >
                {{ modifyCreate.classify }}
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>