<template>
  <div class="timezone">
    <h1>Timezone component</h1>

    <TimezoneSearch />
  </div>
</template>

<script>
import TimezoneSearch from './TimezoneSearch';

export default {
  name: 'Timezone',
  components: { TimezoneSearch }
}
</script>
