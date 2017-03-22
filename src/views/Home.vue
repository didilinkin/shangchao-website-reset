// 首页内容( 路由 - 引入 )
<template lang="pug">
#Home
    AppBar
    Banner

    .moduleBox( v-for="( item, index ) in modulesArr" v-bind:key="item.title" v-bind:style="{ backgroundColor: item.backgroundColor }" )
        h1 {{ index }}
    MapView
</template>

<script>
import AppBar       from '../components/Home/AppBar'            // AppBar顶部导航
import Banner       from '../components/Home/Banner'            // Banner组件
import MapView      from '../components/Home/MapView'           // 地图组件

import AboutUs      from '../components/Home/AboutUs'           // 关于我们
import Server       from '../components/Home/Service'           // 提供服务
import Intro        from '../components/Home/Intro'             // 服务简介

const components = { AppBar, Banner, MapView, AboutUs, Server, Intro }

export default {
    name: 'Home',
    methods: {
        test() {
            console.log( components )
        }
    },
    data() {
        return {
            modulesArr: [
                {
                    title: '关于我们',
                    backgroundColor: '#FFF'
                }, {
                    title: '提供服务',
                    backgroundColor: '#F5F5F5'
                }, {
                    title: '服务简介',
                    backgroundColor: '#FFF'
                }
            ]
        }
    },
    mounted: function() {
        this.test()
    },
    components: components
}
</script>

<style lang="sass?indentedSyntax" scoped>
@import '../sass/main'

</style>
