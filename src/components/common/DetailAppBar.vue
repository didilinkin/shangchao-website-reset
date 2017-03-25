// 详情类 页面专用 AppBar组件
<template lang="pug">
.detailAppBar( v-bind:style="{ width: '100%' }" )
    .mobile-header
    .pc-header( id="pc--header" )
        .warp--pc-header
            mu-row( gutter )
                // PC - 左侧
                mu-col.pc--header--box( desktop="50" )
                    .logoImg
                        img( src="../../assets/img/logo-shangchao-dark-44-px@3x.png" )
                    .mu-appbar-title
                        span.mobile--title 青岛上朝信息科技有限公司
                // PC - 右侧
                mu-col.pc--header--box( desktop="50" v-bind:style="{ textAlign: 'right' }" )
                    mu-paper
                        a( v-bind:style="{ textDecoration: 'none' }" @click="callbackHome()" )
                            mu-bottom-nav( v-bind:value="bottomNav" @change="handleChange" )
                                mu-bottom-nav-item( value="HOME-anchor" title="返回首页" )
</template>

<script>
import VueRouter from 'vue-router'

export default {
    name: 'detailAppBar',
    data () {
        return {
            open        : false,
            docked      : true,
            bottomNav   : 'HOME-anchor'
        }
    },
    methods: {
        toggle (flag) {
            this.open   = !this.open
            this.docked = !flag
        },
        handleChange(val) {
            this.bottomNav = val
            this.PCtoId(val)
        },
        callbackHome() {
            const router = new VueRouter();
            router.go(-1);
        }
    }
}
</script>

<style lang="sass?indentedSyntax" scoped>
@import '../../sass/main'

.detailAppBar
    +ABS
    top: 0
    .mobile-header  // 移动端 样式
    .pc-header      // PC端 样式
        @media only screen and ( min-width : 320px )
            display: none                               // 移动端 - 隐藏
        @media only screen and ( min-width : 1180px )
            position: fixed
            +block
            +W100
            top: 0
            z-index: 9999
            .warp--pc-header
                +global-maxWidth
                padding: 0 !important
                .pc--header--box
                    width: 50%
                    >div
                        +dib
                    .logoImg
                        +w-h( 60px, 60px )
                        >img
                            +imgCover( 100% )
                    .mu-appbar-title
                        +fS( 20px )
                        +REM-padding-LR( $M-contentMargin )
                        +text-vertical-align( bottom )
                        >span
                            color: $F
                    .mu-paper
                        // 导航文字栏背景颜色 设置为透明
                        .mu-bottom-nav
                            background-color: inherit !important
                        // 导航栏文字 字体设置
                        .mu-bottom-item-text
                            font-size: 20px !important

// 移动页面时, mobile端添加改变class 样式
.mobile-header
    .moveViewStyle
        background-color: $F !important
        .mobile--title
            color: $C-title !important
        .mu-icon-button
            color: $C-theme !important
// 移动页面时, PC端添加改变class事件
.moveViewStyle-PC
    background-color: $F !important
    .warp--pc-header
        .pc--header--box
            >span
                color: $C-title !important
</style>
