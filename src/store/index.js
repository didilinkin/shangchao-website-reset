import  Vue                 from 'vue';
import  Vuex                from 'vuex';
import  * as getters        from './getters';
import  * as actions        from './actions';
import  * as mutations      from './mutations';

Vue.use( Vuex );

// 状态树
const state = {
    anchorName: '',             // 跳转锚点 name
    viewUrlState: 'Home'     // 当前页面的路由状态( 如: 首页时, 状态Url为 Home )
};

const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
});

if ( module.hot ) {
    module.hot.accept([
        './getters',
        './actions',
        './mutations',
    ], () => {
        store.hotUpdate({
            getters: require('./getters'),
            actions: require('./actions'),
            mutations: require('./mutations'),
        });
    });
}

export default store;