<template>
    <div id="app">
        <h1 class="font-semibold text-2xl">App</h1>
        <div class="flex justify-center">
            <div class="text-center text-white bg-blue-400 px-4 py-2 m-2">1</div>
            <div class="text-center text-white bg-blue-400 px-4 py-2 m-2">2</div>
            <div class="text-center text-white bg-blue-400 px-4 py-2 m-2">3</div>
        </div>

        <div class="flex">
            <Timezone />
        </div>

        <div class="flex justify-center">
            <div class="text-center">
                <div class="w-10/12 rounded overflow-hidden shadow-lg">
                    <img class="w-full" src="https://images.unsplash.com/photo-1591960058276-b524ab3d402d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="Sunset in the mountains">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                        <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div class="px-6 py-4">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
import Vue from "vue";

import Timezone from "@/components/Timezone.vue";

export default Vue.extend({
  name: "App",
  components: {
    Timezone
  }
});
</script>