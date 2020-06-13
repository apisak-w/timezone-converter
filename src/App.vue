<template>
  <div id="app">
      <h1>App</h1>
      <Timezone />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Timezone from '@/components/Timezone.vue';

export default Vue.extend({
    name: 'App',
    components: {
        Timezone
    }
})
</script>