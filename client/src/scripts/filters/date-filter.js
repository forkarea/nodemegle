import Vue from 'vue';
import moment from 'moment';

const dateFilter = Vue.filter('dateFilter', function(value) {
    if (value) {
        return moment(String(value)).format('hh:mm:ss')
    }
});

export default dateFilter;