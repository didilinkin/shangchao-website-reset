// 'APP应用'
<template lang="pug">
#Application( v-bind:style="{ backgroundColor: '#67b5c2' }" )
    DetailAppBar
    DetailBanner( v-bind:DetailBanner="bannerInfo" )
    // '两大开发平台'
    .moduleBox( v-bind:style="{ backgroundColor: twoPlatformModule.backgroundColor }" )
        TitleBox( v-bind:titleInfo="twoPlatformModule" )
        mu-row.moduleBox__content( gutter )
            mu-col(
                v-for="item in twoPlatformModule.contentInfo" v-bind:key="item.title"
                class="mediaQuery--twoPlatformModule twoPlatformModule"
                width="100" tablet="100" desktop="50"
            )
                .moduleBox__iconImg( v-bind:style="{ borderRadius: '50%' }" )
                    img( v-bind:src="item.iconImg" v-bind:style="{ width: '80%' }" )
                .moduleBox__info
                    h3 {{ item.title }}
                    p {{ item.subTitle }}
    // 开发技术
    .moduleBox( v-bind:style="{ backgroundColor: fourPlatformModule.backgroundColor }" )
        TitleBox( v-bind:titleInfo="fourPlatformModule" )
        mu-row.moduleBox__content( gutter )
            mu-col(
                v-for="item in fourPlatformModule.contentInfo" v-bind:key="item.title"
                class="mediaQuery--fourPlatformModule fourPlatformModule"
                width="50" tablet="50" desktop="25"
                v-bind:style="{ backgroundColor: item.bColor, textAlign: 'center' }"
            )
                .moduleBox__iconImg
                    img( v-bind:src="item.iconImg" v-bind:style="{ width: '30%' }" )
                .moduleBox__info
                    h3 {{ item.title }}
    // 六大服务优势
    .moduleBox( v-bind:style="{ backgroundColor: sixAdvantageModule.backgroundColor }" )
        TitleBox( v-bind:titleInfo="sixAdvantageModule" )
        mu-row.moduleBox__content( gutter class="mediaQuery--sixAdvantageModule" )
            mu-col(
                v-for="item in sixAdvantageModule.contentInfo" v-bind:key="item.title"
                class="sixAdvantageModule"
                width="100" tablet="50" desktop="33"
            )
                .moduleBox__iconImg
                    img( v-bind:src="item.iconImg" )
                .moduleBox__info
                    h3 {{ item.title }}
                    p {{ item.subTitle }}
    // 二十大行业解决方案
    .moduleBox( v-bind:style="{ backgroundColor: twentySolutionModule.backgroundColor }" )
        TitleBox( v-bind:titleInfo="twentySolutionModule" )
        mu-row.moduleBox__content( gutter class="mediaQuery--twentySolutionModule" )
            mu-col(
                v-for="item in twentySolutionModule.contentInfo" v-bind:key="item.title"
                class="twentySolutionModule"
                width="33" tablet="33" desktop="20"
            )
                .moduleBox__iconImg
                    img( v-bind:src="item.iconImg" v-bind:style="{ width: '30%' }" )
                .moduleBox__info
                    h3 {{ item.title }}

</template>

<script>
import DetailAppBar     from '../components/common/DetailAppBar'
import DetailBanner     from '../components/common/DetailBanner'
import TitleBox         from '../components/common/TitleBox'

import { twoPlatformObj, fourPlatformObj, sixAdvantageObj, twentySolutionObj }    from '../assets/script/module/Application'
const components = { DetailAppBar, DetailBanner, TitleBox }

export default {
    name: 'Application',
    methods: {},
    data() {
        return {
            // 传递给 Banner组件( 通用 )的数据
            bannerInfo: {
                bgImg: require('../assets/img/application-bgbanner.jpg'),
                titleInfo: [
                    {
                        title: '专注于移动APP开发'
                    }
                ]
            },
            twoPlatformModule: twoPlatformObj,
            fourPlatformModule: fourPlatformObj,
            sixAdvantageModule: sixAdvantageObj,
            twentySolutionModule: twentySolutionObj
        }
    },
    mounted: function() {
        this.$updateViewUrlState( 'Application' )   // 更新 路由url状态
    },
    components: components
}
</script>

<style lang="sass?indentedSyntax" scoped>
@import '../sass/main'

#Application

// 模块样式
.moduleBox
    +pT( 0 )
    +REM( padding-bottom, 40px )
    .moduleBox__content
        margin: 0 auto
        max-width: 1180px
        .twoPlatformModule
            +REM-margin-TB( $M-contentMargin )
            .moduleBox__iconImg
                +flexCenter--inline
                border: 1px solid $C-title
                +text-vertical-align( top )
            .moduleBox__info

        .fourPlatformModule
            h3
                color: $F
        .sixAdvantageModule
            h3
                +fontStyle( $F-info, $F-title*1.5, $C-title )
                +fW( bold )
            p
                +fontStyle( $F-text, $F-text*1.5, $C-text )

// 媒体查询 - 两大平台
.mediaQuery--twoPlatformModule
    +REM( padding, $M-contentMargin )
    @media only screen and ( min-width : 1024px )
        +textCenter
    .moduleBox__iconImg
        @media only screen and ( min-width : 320px )
            +dib
            +REM( margin-left, $M-contentMargin )
            +REM( width, 45px )
            +REM( height, 45px )
        @media only screen and ( min-width : 768px )
            +REM( width, 60px )
            +REM( height, 60px )
        @media only screen and ( min-width : 1024px )
            +block
            margin: 0
    .moduleBox__info
        @media only screen and ( min-width : 320px )
            +dib
            +REM( margin-left, $M-contentMargin )
            +REM( max-width, 260px )
            >h3
                +REM( font-size, $F-info )
                color: $C-title
            >p
                +REM( font-size, $F-text*.7 )
                color: $C-text
        @media only screen and ( min-width : 768px )
            >h3
                +REM( font-size, $F-title )
                color: $C-title
            >p
                +REM( font-size, $F-text )
                color: $C-text
        @media only screen and ( min-width : 1024px )
            +block
            margin: 0 auto
            >h3
                +REM( font-size, $F-sub-bigTitle )
                color: $C-title
            >p
                +REM( font-size, $F-text )
                color: $C-text

// 媒体查询 - 四大平台
.mediaQuery--fourPlatformModule
    @media only screen and ( min-width : 320px )
        width: 50% !important
        +REM-padding-TB( $M-contentMargin*2 )
        h3
            +REM( font-size, $F-title )
    @media only screen and ( min-width : 1024px )
        width: 25% !important
        h3
            +REM( font-size, $F-title )

// 媒体查询 - 六大服务优势
.mediaQuery--sixAdvantageModule
    @media only screen and ( min-width : 320px )
        +REM-margin-LR( $M-contentMargin )
        +REM( padding, $M-contentMargin )
        .sixAdvantageModule
            .moduleBox__iconImg >img
                +imgCover( 10% )
    @media only screen and ( min-width : 640px )
        .sixAdvantageModule
            +rowBorderAll( 6, 2, 1px, solid, $C-Intro-border )
            +REM-P( $M-contentMargin )
            width: 50% !important
            +REM( height, 120px )
            .moduleBox__iconImg >img
                +imgCover( 15% )
            .moduleBox__info >h3
                +fontStyle( $F-info, $F-info*2, $C-title )
            .moduleBox__info >p
                +fontStyle( $F-text, $F-text*2, $C-title )
    @media only screen and ( min-width : 1024px )
        padding: 0 
// 媒体查询 - 二十大行业解决方案( 唯一一个与 .moduleBox__content 同级的类 )
.mediaQuery--twentySolutionModule
    @media only screen and ( min-width : 320px )
        padding:
            left: $M-contentMargin !important
            right: $M-contentMargin !important
        .twentySolutionModule
            +REM-padding-TB( $M-contentMargin ) 
            width: 25%
            +textCenter
            // 边框样式
            +rowBorderAll( 20, 4, 1px, solid, $C-Intro-border )
            h3
                +fontStyle( $F-text, $F-info, $C-title )
    @media only screen and ( min-width : 414px )
        .twentySolutionModule
            h3 
                +fontStyle( $F-text*1.2, $F-info*1.2, $C-title )
    @media only screen and ( min-width : 768px )
        .twentySolutionModule
            h3 
                +fontStyle( $F-title, $F-title*1.5, $C-title )
    @media only screen and ( min-width : 1024px )
        padding: 0 !important
        .twentySolutionModule
            width: 20%
            +REM( height, 100px )
            +rowBorderAll( 20, 5, 1px, solid, $C-Intro-border )

</style>
