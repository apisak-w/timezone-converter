<template>
  <div class="timezone">
    <h1>Timezone component</h1>

    <TimezoneSearch />
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

import TimezoneSearch from './TimezoneSearch.vue';

@Component({
  name: 'Timezone',
  components: {
    TimezoneSearch
  }
})
export default class Timezone extends Vue {
}

</script>
