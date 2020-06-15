<template>
    <div id="app" class="container mx-auto">
        <h1 class="font-semibold text-2xl">Timezone Converter</h1>
        <!-- <div class="flex justify-center">
            <div
                class="text-center text-white bg-blue-400 px-3 py-1 m-1"
                v-for="(n,index) in 24"
                :key="index"
            >
                {{ n }}
            </div>
        </div> -->

        <div class="py-4 px-2">
            <Timezone />
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