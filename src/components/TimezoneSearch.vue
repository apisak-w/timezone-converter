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

export interface ITimezone {
    key: string, name: string
}

@Component({
    components: {
        Autocomplete
    }
})
export default class TimezoneSearch extends Vue {
    timezoneList: ITimezone[];
    userSelectedTimezoneList: ITimezone[];
    isSaved: boolean;
    autocompleteTimestamp: Number;

    constructor() {
        super();
        this.timezoneList = moment.tz.names().map((timezone) => {
            return {
                key: `${uuid.v4()}`,
                name: timezone
            };
        });
        this.userSelectedTimezoneList = localStorage.getItem('user_timezone_list') ?
            this.userSelectedTimezoneList = JSON.parse(localStorage.getItem('user_timezone_list') as string)
            : [];
        this.isSaved = false;
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
     * @param timezone_key Key of timezone to be removed from timezone list
     */
    removeTimezoneFromList(timezone_key: string) {
        this.timezoneList = this.timezoneList.filter(timezone => {
            return timezone.key !== timezone_key;
        });
    }

    setTimezone(timezone: ITimezone) {
        this.removeTimezoneFromList(timezone.key);
        this.userSelectedTimezoneList.push(timezone);
        this.saveTimezone();
    }

    saveTimezone() {
        localStorage.setItem('user_timezone_list', JSON.stringify(this.userSelectedTimezoneList));

        // Force re-render autocomplete component once user selected timezone
        this.autocompleteTimestamp = Date.now();

        this.isSaved = true;
    }
}
</script>