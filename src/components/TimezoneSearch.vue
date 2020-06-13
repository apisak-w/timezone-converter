<template>
    <div class="timezone-search">
        <input
            type="text"
            v-model="findTimezoneKeyword"
            id="timezone-lookup"
            autocomplete="off"
            class="shadow appearance-none border"
            placeholder="City name"
            @input="findTimezone"
            @focus="showTimezoneList = true"
        />

        <div v-if="filteredTimezone && showTimezoneList">
            <ul class="w-50 bg-blue-500 text-white">
                <li
                    v-for="timezone in filteredTimezone"
                    :key="timezone.key"
                    @click="setTimezone(timezone)"
                    class="border-b border-white py-2 cursor-pointer"
                >{{ timezone.name }}</li>
            </ul>
        </div>

        <div v-if="userSelectedTimezoneList">
            <ul>
                <li
                    v-for="userTimezone in userSelectedTimezoneList"
                    :key="userTimezone.key"
                >{{ userTimezone.name }}</li>
            </ul>
            <button
                @click="saveTimezone"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Save
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import moment from "moment-timezone";

@Component
export default class TimezoneSearch extends Vue {
    selectedTimezone: string;
    findTimezoneKeyword: string;
    filteredTimezone: { key: string; name: string }[];
    timezoneList: { key: string; name: string }[];
    showTimezoneList: boolean;
    userSelectedTimezoneList: { key: string; name: string }[];
    isSaved: boolean;

    constructor() {
        super();
        this.selectedTimezone = "";
        this.findTimezoneKeyword = "";
        this.filteredTimezone = [];
        this.timezoneList = moment.tz.names().map((timezone, index) => {
            return {
                key: `${index}_${timezone.replace("/", "_").toUpperCase()}`,
                name: timezone
            };
        });
        this.showTimezoneList = true;
        this.userSelectedTimezoneList = localStorage.getItem('user_timezone_list') ?
            this.userSelectedTimezoneList = JSON.parse(localStorage.getItem('user_timezone_list') as string)
            : [];
        this.isSaved = false;
    }

    findTimezone() {
        this.filteredTimezone = this.timezoneList.filter(timezone => {
            return timezone.name
                .toLowerCase()
                .includes(this.findTimezoneKeyword.toLowerCase());
        });
    }

    setTimezone(timezone: { key: string; name: string }) {
        this.findTimezoneKeyword = timezone.name;
        this.showTimezoneList = false;
        this.userSelectedTimezoneList.push(timezone)
    }

    saveTimezone() {
        localStorage.setItem('user_timezone_list', JSON.stringify(this.userSelectedTimezoneList));
        this.isSaved = true;
    }
}

// export default {
//   name: "TimezoneSearch",
//   methods: {
//     findTimezone() {
//       this.filteredTimezone = this.timezoneList.filter(timezone => {
//         return timezone.name
//           .toLowerCase()
//           .includes(this.findTimezoneKeyword.toLowerCase());
//       });
//     },
//     setTimezone(timezone) {
//       this.findTimezoneKeyword = timezone.name;
//     }
//   },
//   data() {
//     return {
//       selectedTimezone: "",
//       findTimezoneKeyword: "",
//       filteredTimezone: [],
//       timezoneList: moment.tz.names().map((timezone, index) => {
//         // Convert array of string to array of object
//         return {
//           key: `${index}_${timezone.replace("/", "_").toUpperCase()}`,
//           name: timezone
//         };
//       })
//     };
//   }
// };
</script>