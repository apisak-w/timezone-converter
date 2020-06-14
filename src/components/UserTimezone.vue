<template>
    <div class="user-timezone">
        <div v-if="userSelectedTimezoneList">
            <div
                class="flex flex-col"
                v-for="userTimezone in userSelectedTimezoneList"
                :key="userTimezone.key"
            >
                <div class="w-full py-2 flex flex-row justify-between">
                    <div>{{ userTimezone.name }}</div>
                    <div>{{ getLocationTime(userTimezone.name) }}</div>
                    <button
                        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        @click="removeTimezone(userTimezone.key)"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import moment from "moment-timezone";

@Component
export default class UserTimezone extends Vue {
    userSelectedTimezoneList: { key: string; name: string }[];
    isSaved: boolean;

    constructor() {
        super();
        this.userSelectedTimezoneList = 
            localStorage.getItem('user_timezone_list') ?
                this.userSelectedTimezoneList = JSON.parse(localStorage.getItem('user_timezone_list') as string)
                : [];
        this.isSaved = false;
    }

    setTimezone(timezone: { key: string; name: string }) {
        this.userSelectedTimezoneList.push(timezone)
    }

    removeTimezone(timezone_key: string) {
        console.log('remove timezone ', timezone_key)
        this.userSelectedTimezoneList = this.userSelectedTimezoneList.filter((timezone) => {
            return timezone.key !== timezone_key;
        });
        this.saveTimezone();
    }

    saveTimezone() {
        localStorage.setItem('user_timezone_list', JSON.stringify(this.userSelectedTimezoneList));
        this.isSaved = true;
    }

    getLocationTime(timezone: string) {
        return moment.tz(moment.now(), timezone).format("YYYY-MM-D HH:mm:ss");
    }
}
</script>