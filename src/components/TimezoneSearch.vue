<template>
  <div class="timezone-search">
    <input
      type="text"
      v-model="findTimezoneKeyword"
      id="timezone-lookup"
      @input="findTimezone"
      autocomplete="off"
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

<script>
import moment from "moment-timezone";

export default {
  name: "TimezoneSearch",
  methods: {
    findTimezone() {
      this.filteredTimezone = this.timezoneList.filter(timezone => {
        return timezone.name
          .toLowerCase()
          .includes(this.findTimezoneKeyword.toLowerCase());
      });
    },
    setTimezone(timezone) {
      this.findTimezoneKeyword = timezone.name;
    }
  },
  data() {
    return {
      selectedTimezone: "",
      findTimezoneKeyword: "",
      filteredTimezone: [],
      timezoneList: moment.tz.names().map((timezone, index) => {
        // Convert array of string to array of object
        return {
          key: `${index}_${timezone.replace("/", "_").toUpperCase()}`,
          name: timezone
        };
      })
    };
  }
};
</script>