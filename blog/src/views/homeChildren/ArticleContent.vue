<script setup>
import {MdPreview, MdCatalog} from "md-editor-v3";
import 'md-editor-v3/lib/preview.css'
import {ref} from "vue";
import {router} from "../../router/router.js";

let newVar = [
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
];

let text = ref(`


## Links

- [Demo](https://code-farmer-i.github.io/vue-markdown-editor/examples/base-editor.html)
- [Documentation](https://code-farmer-i.github.io/vue-markdown-editor/)
- [Changelog](https://code-farmer-i.github.io/vue-markdown-editor/changelog.html)

## Install

\`\`\` bash
# use npm
npm i @kangc/v-md-editor -S

# use yarn
yarn add @kangc/v-md-editor
\`\`\`

## Quick Start

\`\`\`js
import Vue from 'vue';
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';

VueMarkdownEditor.use(vuepressTheme);

Vue.use(VueMarkdownEditor);
\`\`\`

## Usage

\`\`\`html
<template>
  <v-md-editor v-model="text" height="400px"></v-md-editor>
</template>


  export default {
    data() {
      return {
        text: '',
      };
    },
  };

\`\`\`

## Refrence

- [ElementUi Scrollbar Component](https://github.com/ElemeFE/element/tree/dev/packages/scrollbar)
- [vuepress-plugin-container](https://vuepress.github.io/zh/plugins/container/)
## Refrence
## Refrence
## Refrence
## Refrence
## Refrence
## Refrence
## Refrence
## Refrence
## Refrence
`);
const scrollElement = document.documentElement;
const id = 'preview-only';
const previewTheme = 'smart-blue';
</script>

<template>
  <div
      class="w-full h-full pt-24"
  >
    <div
        class="w-full h-full  mx-auto lg:w-9/12"
    >
      <div
          class="w-full h-full p-5   mx-auto lg:w-10/12"
      >
        <div
            class="w-full h-auto mb-5 flex justify-end"
        >
          <button
              class="px-3 py-1 bg-blue-400 text-center rounded-md
            hover:text-white hover:bg-indigo-800 hover:duration-300 ease-in-out transition active:bg-indigo-50 "
              @click="()=>router.go(-1)">
            返回
          </button>
        </div>
        <div
            class="mb-5"
        >
            <span
                :class="'mr-2 px-2 rounded-md tracking-wide duration-300 hover:brightness-75 '  + arr.backgroundColor"
                v-for="arr in newVar"
            >
              <router-link :to="'/home/tag/' + arr.name">
                {{ arr.name }}
              </router-link>
            </span>

        </div>
        <h1
            class="text-4xl mb-5 font-bold"
        >从零手撸前后端分离博客（已更新37w+字）</h1>

        <div
            class="w-full h-auto flex "
        >
          <div class="w-auto h-5 flex justify-center items-center mr-5">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-5  mr-1 fill-yellow-300"
            >
              <path
                  d="M20 2C20.5523 2 21 2.44772 21 3V6.757L19 8.757V4H5V20H19V17.242L21 15.242V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20ZM21.7782 8.80761L23.1924 10.2218L15.4142 18L13.9979 17.9979L14 16.5858L21.7782 8.80761ZM13 12V14H8V12H13ZM16 8V10H8V8H16Z"></path>
            </svg>

            <p>6379</p>

          </div>

          <div class="w-auto h-5 flex justify-center items-center mr-5">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24" fill="currentColor"
                class="w-5 mr-1 fill-blue-300"
            >
              <path
                  d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM8 14V16H6V14H8ZM18 14V16H10V14H18ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"></path>
            </svg>
            <p>2024/5/31 - 1:23:21</p>
          </div>
          <div class="w-auto h-5 flex justify-center items-center mr-5">

            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-5 mr-1 fill-emerald-300"
            >
              <path
                  d="M12.4142 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5ZM8 19H20V11H8V19ZM6 19V10C6 9.44772 6.44772 9 7 9H20V7H11.5858L9.58579 5H4V19H6Z"></path>
            </svg>

            <router-link
                class="hover:text-indigo-800"
                to="/home/classify/java">
              java
            </router-link>
          </div>
          <div class="w-auto h-5 flex justify-center items-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-5 mr-1 fill-red-300"
            >
              <path
                  d="M9 18H4V10H9V18ZM7 16V12H6V16H7ZM13 16V8H12V16H13ZM15 18H10V6H15V18ZM19 16V4H18V16H19ZM21 18H16V2H21V18ZM22 22H3V20H22V22Z"></path>
            </svg>
            <p>80000</p>
          </div>
        </div>
      </div>
      <div
          class="w-full h-auto  "
      >
        <div
            class="w-full h-full p-3  mx-auto lg:p-5 lg:w-10/12 flex"
        >
          <div
              class="w-full h-full shadow-2xl p-5 rounded-md xl:mr-5
              hover:shadow-black transition ease-in-out duration-300 lg:hover:scale-[1.01] "
          >
            <MdPreview :editor-id="id" :model-value="text" :preview-theme="previewTheme"/>
          </div>

          <div
              class="hidden w-auto h-auto  xl:block"
          >
            <MdCatalog
                class="sticky w-64 h-auto rounded-md top-24 px-5 py-10  shadow-2xl
                hover:shadow-black transition ease-in-out duration-300 hover:scale-[1.01]"
                :editor-id="id" :scroll-element="scrollElement"/>
          </div>

        </div>

      </div>
    </div>
  </div>

</template>

<style scoped>

</style>