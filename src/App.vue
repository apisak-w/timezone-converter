<template>
    <div id="app" class="container mx-auto">
        <h1 class="font-semibold text-2xl">Timezone Converter</h1>
        <div class="flex justify-center">
            <div class="text-center text-white bg-blue-400 px-4 py-2 m-2">1</div>
            <div class="text-center text-white bg-blue-400 px-4 py-2 m-2">2</div>
            <div class="text-center text-white bg-blue-400 px-4 py-2 m-2">3</div>
        </div>

        <Timezone />

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