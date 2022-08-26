import Vue from 'vue';
import dayjs from 'dayjs';
Vue.filter('formatDate', function(date){
    return dayjs(date).format('MMM DD,YYYY')
})