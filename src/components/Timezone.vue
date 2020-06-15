<template>
  <div class="timezone">
    <div class="w-full">
      <div
        class="border-2 border-gray-100 bg-white shadow rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
      >
        <div class="flex flex-col">
            <div class="w-full flex flex-row justify-between">
                <div class="w-3/12 text-gray-900 font-bold text-xl mb-2 px-2">
                    <TimezoneSearch @saved:timezone="handleSavedTimezone" />
                </div>
                <div class="w-8/12 px-2">🐐</div>
                <div class="w-1/12 px-2">🐑</div>
            </div>
        </div>
        <div class="mb-8">
            <UserTimezone
                @remove="handleRemoveUserTimezone"
                :key="userTimezoneKey"
                :user-selected-timezone-list="userSelectedTimezoneList"
            />
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import TimezoneSearch from "./TimezoneSearch.vue";
import UserTimezone from "./UserTimezone.vue";
// eslint-disable-next-line no-unused-vars
import { ITimezone } from './Timezone';

@Component({
  name: "Timezone",
  components: {
    TimezoneSearch,
    UserTimezone
  }
})
export default class Timezone extends Vue {
    userTimezoneKey: Number;
    userSelectedTimezoneList: ITimezone[];

    constructor() {
        super();
        this.userTimezoneKey = Date.now();
        this.userSelectedTimezoneList = this.initUserSelectedTimezone() || [];
    }

    initUserSelectedTimezone() {
        if (localStorage.getItem('user_timezone_list')) {
            return JSON.parse(localStorage.getItem('user_timezone_list') as string)
        }
    }

    setTimezone(timezone: ITimezone) {
        this.userSelectedTimezoneList.push(timezone);
        this.saveTimezone();
    }

    saveTimezone() {
        localStorage.setItem('user_timezone_list', JSON.stringify(this.userSelectedTimezoneList));
    }

    removeTimezone(timezone_key: string) {
        this.userSelectedTimezoneList = this.userSelectedTimezoneList.filter((timezone) => {
            return timezone.key !== timezone_key;
        });
        this.saveTimezone();
    }

    handleSavedTimezone(timezone: ITimezone) {
        this.setTimezone(timezone);
        this.userTimezoneKey = Date.now();
    }

    handleRemoveUserTimezone(timezone_key: string) {
        this.removeTimezone(timezone_key);
        this.userTimezoneKey = Date.now();
    }
}
</script>
