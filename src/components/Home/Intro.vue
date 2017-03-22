// 服务简介( V1.2新加组件 )
<template lang="pug">
#Intro
    .mobile
        TableRender( v-bind:TableRenderArr = "introArr" )
    .desktop
        // 循环输出 进行渲染
        mu-tabs( v-bind:value="activeTab" @change="handleTabChange" v-bind:style="{ backgroundColor: '#67b5c2' }" )
            mu-tab( v-for="item in introArr" v-bind:value="item.tabName" v-bind:icon="item.iconName" v-bind:title="item.titleName" v-bind:style="{ color: '#FFF' }" )
        
        div( v-for="item in introArr" v-if="activeTab === item.tabName" )
            TableOnly( v-bind:TableArr = "item.itemArr" )

</template>

<script>
import TableRender      from '../common/TableRender'
import TableOnly        from '../common/TableOnly'
const components = { TableRender, TableOnly }

export default {
    name: 'Intro',
    data() {
        return {
            activeTab: 'APP',          // Tabs 组件 点击效果
            // 服务类型
            introArr: [
                {
                    titleName   : `APP应用开发`,
                    iconName    : "phone_iphone",
                    tabName     : "APP",
                    leftBorderColor: `#67B5C2`,                             // 标题 左边框颜色
                    itemArr : [                                             // 单独服务类型的细分数组
                        {
                            iconImg     : require('../../assets/img/ico-windows-140-px@3x.png'),
                            row         : "25%",
                            rowClass    : 'row4',
                            itemTitle   : 'Windows'
                        }, {
                            iconImg     : require('../../assets/img/ico-iphone-140-px@3x.png'),
                            row         : "25%",
                            rowClass    : 'row4',
                            itemTitle   : 'Apple'
                        }, {
                            iconImg     : require('../../assets/img/ico-android-140-px@3x.png'),
                            row         : "25%",
                            rowClass    : 'row4',
                            itemTitle   : 'Android'
                        }, {
                            iconImg     : require('../../assets/img/ico-h-t-m-l-5-140-px@3x.png'),
                            row         : "25%",
                            rowClass    : 'row4',
                            itemTitle   : 'HTML5'
                        }
                    ]
                }, {
                    titleName   : `企业应用`,
                    iconName    : "laptop_mac",
                    tabName     : "Enterprise",
                    leftBorderColor: `#67B5C2`,                             // 标题 左边框颜色
                    itemArr : [
                        {
                            iconImg     : require('../../assets/img/ico-e-r-p-140-px@3x.png'),
                            row         : "20%",
                            rowClass    : 'row5',
                            itemTitle   : 'ERP系统'
                        }, {
                            iconImg     : require('../../assets/img/ico-o-a-140-px@3x.png'),
                            row         : "20%",
                            rowClass    : 'row5',
                            itemTitle   : 'OA系统'
                        }, {
                            iconImg     : require('../../assets/img/ico-c-r-m-140-px@3x.png'),
                            row         : "20%",
                            rowClass    : 'row5',
                            itemTitle   : 'CRM'
                        }, {
                            iconImg     : require('../../assets/img/ico-w-e-b-s-i-t-e-140-px@3x.png'),
                            row         : "20%",
                            rowClass    : 'row5',
                            itemTitle   : '大型门户'
                        }, {
                            iconImg     : require('../../assets/img/ico-wechat-140-px@3x.png'),
                            row         : "20%",
                            rowClass    : 'row5',
                            itemTitle   : '微信'
                        }
                    ]
                }, {
                    titleName   : `电商系统`,
                    iconName    : "local_grocery_store",
                    tabName     : "ECommerce",
                    leftBorderColor: `#67B5C2`,                             // 标题 左边框颜色
                    itemArr : [
                        {
                            iconImg     : require('../../assets/img/ico-webshop-140-px@3x.png'),
                            row         : "33%",
                            rowClass    : 'row3',
                            itemTitle   : '线上电商'
                        }, {
                            iconImg     : require('../../assets/img/ico-appshop-140-px@3x.png'),
                            row         : "33%",
                            rowClass    : 'row3',
                            itemTitle   : '移动商城'
                        }, {
                            iconImg     : require('../../assets/img/ico-weishop-140-px@3x.png'),
                            row         : "33%",
                            rowClass    : 'row3',
                            itemTitle   : '微商城'
                        }
                    ]
                }, {
                    titleName   : `系统集成`,
                    iconName    : "settings",
                    tabName     : "system",
                    leftBorderColor: `#67B5C2`,                             // 标题 左边框颜色
                    itemArr : [
                        {
                            iconImg     : require('../../assets/img/ico-140-px@3x.png'),
                            row         : "25%",
                            rowClass    : 'row4',    
                            itemTitle   : '溯源'
                        }, {
                            iconImg     : require('../../assets/img/ico-barcode-140-px@3x.png'),
                            row         : "25%",
                            rowClass    : 'row4',    
                            itemTitle   : '防伪'
                        }, {
                            iconImg     : require('../../assets/img/ico-card-140-px@3x.png'),
                            row         : "25%",
                            rowClass    : 'row4',    
                            itemTitle   : '一卡通'
                        }, {
                            iconImg     : require('../../assets/img/ico-card-140-px-copy@3x.png'),
                            row         : "25%",
                            rowClass    : 'row4',    
                            itemTitle   : '巡检'
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        handleTabChange (val) {
            this.activeTab = val
        }
    },
    components: components
}
</script>

<style lang="sass?indentedSyntax" scoped>
@import '../../sass/main'
#Intro
    .mobile
        @media only screen and ( min-width : 320px )
            +block
        @media only screen and ( min-width : 768px )
            +dNone
    .desktop
        @media only screen and ( min-width : 320px )
            +dNone            
        @media only screen and ( min-width : 768px )
            +block
    @media only screen and ( min-width : 1180px )
        max-width: 1180px
        margin: 0 auto
        padding:
            left: 0
            right: 0
</style>