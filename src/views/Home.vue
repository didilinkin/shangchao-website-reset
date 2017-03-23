// 首页内容( 路由 - 引入 )
<template lang="pug">
#Home
    AppBar
    Banner
    .moduleBox( v-bind:style="{ backgroundColor: aboutUsModule.backgroundColor }" )
        TitleBox( v-bind:titleInfo="aboutUsModule" )
        AboutUs
    .moduleBox( v-bind:style="{ backgroundColor: serviceModule.backgroundColor }" )
        TitleBox( v-bind:titleInfo="serviceModule" )
        Server
    .moduleBox( v-bind:style="{ backgroundColor: introModule.backgroundColor }" )
        TitleBox( v-bind:titleInfo="introModule" )
        Intro
    .moduleBox( v-bind:style="{ backgroundColor: worksModule.backgroundColor }" )
        TitleBox( v-bind:titleInfo="worksModule" )
        Works 
    .moduleBox( v-bind:style="{ backgroundColor: teamModule.backgroundColor }" )
        TitleBox( v-bind:titleInfo="teamModule" )
        Team
    .moduleBox( v-bind:style="{  backgroundImage: 'url( ' + JoinUsBgImg + ' )', backgroundSize: 'cover'  }" )
        TitleBox( v-bind:titleInfo="joinUsModule" )
        JoinUs
    .moduleBox( v-bind:style="{ backgroundColor: teamModule.backgroundColor }" )
        TitleBox( v-bind:titleInfo="contactUsModule" )
        ContactUs
    MapView
</template>

<script>
import TitleBox     from '../components/common/TitleBox'        // 标题

import AppBar       from '../components/Home/AppBar'            // AppBar顶部导航
import Banner       from '../components/Home/Banner'            // Banner组件
import MapView      from '../components/Home/MapView'           // 地图组件
import ContactUs    from '../components/Home/ContactUs'         // 联系我们

import AboutUs      from '../components/Home/AboutUs'           // 关于我们
import Server       from '../components/Home/Service'           // 提供服务
import Intro        from '../components/Home/Intro'             // 服务简介
import Works        from '../components/Home/Works'             // 行业方案
import Team         from '../components/Home/Team'              // 团队介绍
import JoinUs       from '../components/Home/JoinUs'            // 招贤纳士

import { aboutUsObj, serviceObj, introObj, worksObj, teamObj, joinUsObj, contactUsObj }    from '../assets/script/module/Home'
const components = { TitleBox, AppBar, Banner, MapView, ContactUs, AboutUs, Server, Intro, Works, Team, JoinUs }

export default {
    name: 'Home',
    methods: {
        // 测试
        test() {}
    },
    data() {
        return {
            aboutUsModule: aboutUsObj,
            serviceModule: serviceObj,
            introModule: introObj,
            worksModule: worksObj,
            teamModule: teamObj ,
            joinUsModule: joinUsObj,
            contactUsModule: contactUsObj,
            JoinUsBgImg: require('../assets/img/bg.png')
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
