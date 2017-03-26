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

    .moduleBox( v-bind:style="{ backgroundColor: sixAdvantageModule.backgroundColor }" )
        TitleBox( v-bind:titleInfo="sixAdvantageModule" )

    .moduleBox( v-bind:style="{ backgroundColor: twentySolutionModule.backgroundColor }" )
        TitleBox( v-bind:titleInfo="twentySolutionModule" )

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
</style>
