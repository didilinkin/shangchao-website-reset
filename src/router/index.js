import Vue                  from 'vue';
import Router               from 'vue-router';
import Home                 from '@/views/Home';                    // 首页
import Application          from '@/views/Application';             // APP应用
import BigData              from '@/views/BigData';             // 大数据
import ECommerce            from '@/views/ECommerce';               // 电子商务
import SystemIntegration    from '@/views/SystemIntegration';       // 系统集成

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: Home
        }, {
            path: '/Home',
            name: 'Home',
            component: Home
        }, {
            path: '/Application',
            name: 'Application',
            component: Application
        }, {
            path: '/BigData',
            name: 'BigData',
            component: BigData
        }, {
            path: '/ECommerce',
            name: 'ECommerce',
            component: ECommerce
        }, {
            path: '/SystemIntegration',
            name: 'SystemIntegration',
            component: SystemIntegration
        }
    ]
});
