<template>
  <div id="app">
      <h1>App</h1>
      <Timezone />
  </div>
</template>

<script>
import Timezone from './components/Timezone';

export default {
  name: 'App',
  components: {
    Timezone
  }
}
</script>