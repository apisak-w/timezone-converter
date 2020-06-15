<template>
    <div class="user-timezone">
        <div v-if="userSelectedTimezoneList">
            <div
                class="flex flex-col"
                v-for="userTimezone in userSelectedTimezoneList"
                :key="userTimezone.key"
            >
                <div class="w-full py-2 flex flex-row justify-between">
                    <div class="w-3/12">
                        <div class="flex px-3">
                            <div class="flex-1">
                                <p class="text-base font-semibold">
                                    {{ userTimezone.name }}
                                </p>
                                <span class="bg-green-400 text-white px-1 rounded">
                                    {{ getLocationTime(userTimezone.name, "MMMM D, YYYY") }}
                                </span>
                            </div>
                            <div class="flex-1">
                                <p class="text-small text-right">
                                    {{ getLocationTime(userTimezone.name, "HH:mm") }}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="w-8/12">
                        <div class="text-gray-700 bg-gray-400">
                            S
                        </div>
                    </div>

                    <div class="w-1/12">
                        <div class="flex justify-center">
                            <button
                                class="bg-gray-200 hover:bg-gray-400 font-bold px-2 rounded"
                                @click="removeTimezone(userTimezone.key)"
                            >
                                🗑
                            </button>
                        </div>
                    </div>
                </div>

                <hr class="m-2" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import moment from "moment-timezone";
// eslint-disable-next-line no-unused-vars
import { ITimezone } from './Timezone';

@Component
export default class UserTimezone extends Vue {
    @Prop({ type: Array }) userSelectedTimezoneList!: ITimezone[];

    removeTimezone(timezone_key: string) {
        this.$emit("remove", timezone_key)
    }

    saveTimezone() {
        localStorage.setItem('user_timezone_list', JSON.stringify(this.userSelectedTimezoneList));
    }

    getLocationTime(timezone: string, customFormat?: string) {
        const format = customFormat ? customFormat : "YYYY-MM-D HH:mm:ss";
        return moment.tz(moment.now(), timezone).format(format);
    }
}
</script>