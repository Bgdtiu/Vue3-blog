import {defineStore} from "pinia";

export const frontPageStore = defineStore('frontPageStore', {
    state: () => {
        return {
            //leftContent组件高度
            leftContentHeight: 0,
        }
    },
    actions: {}
});

