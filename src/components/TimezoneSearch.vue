<template>
    <div class="timezone-search">
        <autocomplete
            :search="findTimezone"
            :get-result-value="getResultValue"
            @submit="setTimezone"
            placeholder="City name"
            :key="autocompleteTimestamp"
        >
        </autocomplete>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import moment from "moment-timezone";
import { uuid } from 'vue-uuid';
import Autocomplete from '@trevoreyre/autocomplete-vue';
import '@trevoreyre/autocomplete-vue/dist/style.css'
// eslint-disable-next-line no-unused-vars
import { ITimezone } from './Timezone';

@Component({
    components: {
        Autocomplete
    }
})

export default class TimezoneSearch extends Vue {
    timezoneList: ITimezone[];
    selectedTimezone: ITimezone;
    autocompleteTimestamp: Number;

    constructor() {
        super();
        this.timezoneList = moment.tz.names().map((timezone) => {
            return {
                key: `${uuid.v4()}`,
                name: timezone
            };
        });
        this.selectedTimezone = { "key": "", "name": "" };
        this.autocompleteTimestamp = Date.now();
    }

    findTimezone(keyword: string): ITimezone[] {
        if (keyword.length < 1) { return [] }
        return this.timezoneList.filter(timezone => {
            return timezone.name
                .toLowerCase()
                .includes(keyword.toLowerCase());
        });
    }

    getResultValue(timezoneObject: ITimezone): string {
        return timezoneObject.name;
    }

    /**
     * Remove selected timezone from timezone list in order to prevent duplicate key
     * @param timezone_key Key of timezone to be removed from timezone list.
     */
    removeTimezoneFromList(timezone_key: string) {
        this.timezoneList = this.timezoneList.filter(timezone => {
            return timezone.key !== timezone_key;
        });
    }

    setTimezone(timezone: ITimezone) {
        this.removeTimezoneFromList(timezone.key);
        this.selectedTimezone = timezone;
        this.saveTimezone();
    }

    saveTimezone() {
        // Force re-render autocomplete component once user selected timezone
        this.autocompleteTimestamp = Date.now();

        this.$emit('saved:timezone', this.selectedTimezone);
    }
}
</script>