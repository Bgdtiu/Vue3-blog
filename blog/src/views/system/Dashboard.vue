<script setup>
import {dashboardStore} from "../../store/DashboardStore.js";
import ArticleHotSpots from "../../components/Dashboard/ArticleHotSpots.vue";
import ArticleViews from "../../components/Dashboard/ArticleViews.vue";
import ClassificationStatistics from "../../components/Dashboard/ClassificationStatistics.vue";
import TagStatistics from "../../components/Dashboard/TagStatistics.vue";
import SystemMessage from "../../components/Dashboard/SystemMessage.vue";


</script>

<template>
  <div
      class="w-full h-full"
  >
    <div
        class="w-full h-28  mr-1 flex mb-5 justify-around"
    >
      <div
          v-for="obj in dashboardStore().$state.dataDisplayArr"
          class="w-72 h-full  rounded-md p-5 flex shadow-md items-center border
          hover:shadow-xl transition ease-in-out duration-300 hover:scale-105"
      >
        <div
            class="w-2/6 h-full flex  items-center justify-center border-r-2 mr-5"
        >
          <div v-html="obj.svg"/>
        </div>
        <div
            class="w-4/6 h-full"
        >
          <h2
              class="w-full text-xl font-light mb-2"
          >
            {{ obj.name }}
          </h2>
          <p
              class="w-full text-2xl font-bold tracking-wide"
          >
            {{ obj.count }}
          </p>
        </div>
      </div>
    </div>

    <div
        class="w-full h-full grid gap-5 grid-cols-2"
    >
      <ArticleHotSpots/>

      <ArticleViews/>

      <ClassificationStatistics/>

      <TagStatistics/>

      <SystemMessage/>
    </div>
  </div>
</template>

<style scoped>

</style>