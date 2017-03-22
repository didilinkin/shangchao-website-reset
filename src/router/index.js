import Vue from 'vue';
import Router from 'vue-router';
// import Hello from '@/components/Hello'
import Home         from '@/views/Home';
import BigData      from '@/views/BigData';

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'app',
            component: { App },
            children: [
                {},
            ]
        }
    ]
})