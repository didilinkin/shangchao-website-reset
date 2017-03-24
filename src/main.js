// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue      from 'vue';
import App      from './App';
import store    from './store';
import router   from './router';
import MuseUI   from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
require('./assets/iconfont/material-icons.css');

Vue.config.productionTip    = false;
Vue.config.devtools         = true;
Vue.config.debug            = true;

// 挂载全局方法
Vue.prototype.$updateViewUrlState = function( toUrl ) {
    this.$store.dispatch({
        type: 'updateViewUrlState',
        viewUrlState: toUrl
    });
};

Vue.use( MuseUI );

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
});
