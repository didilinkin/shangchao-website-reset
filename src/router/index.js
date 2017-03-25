import Vue                  from 'vue';
import Router               from 'vue-router';
import Home                 from '@/views/Home';                    // 首页
import Application          from '@/views/Application';             // APP应用
import BigData              from '@/views/BigData';             // 大数据
import ECommerce            from '@/views/ECommerce';               // 电子商务
import SystemIntegration    from '@/views/SystemIntegration';       // 系统集成

Vue.use(Router);

// scrollBehavior:
// - only available in html5 history mode
// - defaults to no scroll behavior
// - return false to prevent scroll
const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
        // savedPosition is only avaliable for popstate navigations.
        return savedPosition;
    } else {
        const position = {};
        // new navigation
        // scroll to anchor by returning the selector
        if (to.hash) {
            position.selector = to.hash;
        }
        // check if any matched route config has meta that requires scrolling to top
        if (to.matched.some(m => m.meta.scrollToTop)) {
            // cords will be used if no selector is provided or if the selector didn't match any element
            position.x = 500;
            position.y = 100;
        }
        // if the required position is falsy or an empty object, will retain current scroll position
        return position;
    }
};

export default new Router({
    mode: 'history',
    base: __dirname,
    scrollBehavior,
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
            component: Application,
            meta: {
                scrollToTop: true
            }
        }, {
            path: '/BigData',
            name: 'BigData',
            component: BigData,
            meta: {
                scrollToTop: true
            }
        }, {
            path: '/ECommerce',
            name: 'ECommerce',
            component: ECommerce,
            meta: {
                scrollToTop: true
            }
        }, {
            path: '/SystemIntegration',
            name: 'SystemIntegration',
            component: SystemIntegration,
            meta: {
                scrollToTop: true
            }
        }
    ],
});
