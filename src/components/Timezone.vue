<template>
  <div class="timezone">
    <div class="w-full">
      <div
        class="border-2 border-gray-100 bg-white shadow rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
      >
        <div class="flex flex-col">
            <div class="w-full flex flex-row justify-between">
                <div class="text-gray-900 font-bold text-xl mb-2">
                    <TimezoneSearch />
                </div>
                <div>🐐</div>
                <div>🐑</div>
            </div>
        </div>
        <div class="mb-8">
            <UserTimezone />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

import TimezoneSearch from "./TimezoneSearch.vue";
import UserTimezone from "./UserTimezone.vue";

@Component({
  name: "Timezone",
  components: {
    TimezoneSearch,
    UserTimezone
  }
})
export default class Timezone extends Vue {}
</script>
