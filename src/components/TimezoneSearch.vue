<template>
    <div class="timezone-search">
        <input
            type="text"
            v-model="findTimezoneKeyword"
            id="timezone-lookup"
            @input="findTimezone"
            autocomplete="off"
            class="shadow appearance-none border"
            placeholder="City name"
        />

        <div v-if="filteredTimezone">
            <ul>
            <li
                v-for="timezone in filteredTimezone"
                :key="timezone.key"
                @click="setTimezone(timezone)"
            >{{ timezone.name }}</li>
            </ul>
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