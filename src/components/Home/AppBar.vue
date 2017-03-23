<template lang="pug">
.header( v-bind:style=" { width: '100%' } " id="HOME-anchor" )
    .mobile-header
        mu-appbar#mobile--appbar( class="" )
            .logoImg( slot="left" )
                img( src="../../assets/img/logo-shangchao-dark-44-px@3x.png" )
            .mu-appbar-title
                span.mobile--title 青岛上朝信息科技有限公司
            mu-icon-button( icon='menu' class="mobile--btn" slot="right" @click="toggle( true )" )
        mu-drawer( right v-bind:open="open" v-bind:docked="docked" @close="toggle()" )
            mu-list( @itemClick="docked ? '' : toggle()" )
                mu-list-item( title="HOME"     @click="toId( 'HOME-anchor' )" )
                mu-list-item( title="关于我们"  @click="toId( 'aboutUs-anchor' )" )
                mu-list-item( title="提供服务"  @click="toId( 'service-anchor' )" )
                mu-list-item( title="服务简介"  @click="toId( 'intro-anchor' )" )
                mu-list-item( title="行业方案"  @click="toId( 'works-anchor' )" )
                mu-list-item( title="团队介绍"  @click="toId( 'team-anchor' )" )
                mu-list-item( title="招贤纳士"  @click="toId( 'joinUs-anchor' )" )
                mu-list-item( title="联系我们"  @click="toId( 'contactUs-anchor' )" )
                mu-list-item( v-if="docked"    @click.native="open = false" title="Close" )
    .pc-header( id="pc--header" )
        .warp--pc-header
            mu-row( gutter )
                // PC - 左侧
                mu-col( class="pc--header--box" desktop="40" )
                    .logoImg
                        img( src="../../assets/img/logo-shangchao-dark-44-px@3x.png" )
                    .mu-appbar-title
                        span.mobile--title 青岛上朝信息科技有限公司
                // PC - 右侧
                mu-col( class="pc--header--box" desktop="60" )
                    mu-paper
                        mu-bottom-nav( v-bind:value="bottomNav" @change="handleChange" )
                            mu-bottom-nav-item( value="HOME-anchor"         title="HOME"       )
                            mu-bottom-nav-item( value="aboutUs-anchor"      title="关于我们"    )
                            mu-bottom-nav-item( value="service-anchor"      title="提供服务"    )
                            mu-bottom-nav-item( value="intro-anchor"        title="服务简介"    )
                            mu-bottom-nav-item( value="works-anchor"        title="行业方案"    )
                            mu-bottom-nav-item( value="team-anchor"         title="团队介绍"    )
                            mu-bottom-nav-item( value="joinUs-anchor"       title="招贤纳士"    )
                            mu-bottom-nav-item( value="contactUs-anchor"    title="联系我们"    )
</template>

<script>
export default {
    data () {
        return {
            open        : false,
            docked      : true,
            bottomNav   : 'HOME-anchor'
        }
    },
    methods: {
        toggle ( flag ) {
            this.open   = !this.open
            this.docked = !flag
        },
        toId( idName ) {
            // 首先将锚点点击事件的name派发到actions事件中
            this.$store.dispatch({
                type        : 'setAnchorName',
                anchorName  : idName
            })
        },
        handleChange( val ) {
            this.bottomNav = val
            this.PCtoId( val )
        },
        PCtoId( idName ) {
            // 首先将锚点点击事件的name派发到actions事件中
            this.$store.dispatch({
                type        : 'setAnchorName',
                anchorName  : idName
            })
        }
    }
}
</script>

<style lang="sass?indentedSyntax" scoped>
@import '../../sass/main'

.header
    position: absolute
    top: 0
    // 移动端 - header
    .mobile-header
        @media only screen and ( min-width : 320px )
            width: 100%
            +REM( height, 60px )
            // 顶部导航栏( 未滚动 )
            .mu-appbar
                position: fixed
                +bC( inherit )
                // left下
                .logoImg
                        +flexCenter
                        +REM-W-H( 48px, 48px )
                        >img
                            padding: 20% 0
                            +imgCover( 75% )
                .mobile--title
                    font-size: $F-text
                .right
        @media only screen and ( min-width : 1024px )
            display: none

    // PC - header
    .pc-header
        @media only screen and ( min-width : 320px )
            display: none
        @media only screen and ( min-width : 1180px )
            position: fixed
            display: block
            width: 100%
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
