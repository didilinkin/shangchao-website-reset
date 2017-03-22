<template lang="pug">
.banner( v-bind:style=" { backgroundImage: 'url( ' + bannerBcImg + ' )', backgroundSize: 'cover' } " )
    .banner--title
        h2.whileColor 青岛最专业的
        h2.themeColor 互联网服务公司
        p.whileColor 上朝信息科技 · 多行业应用产品
        p.whileColor 满足不同行业需求 · IT解决方案与服务提供商
</template>

<script>
export default {
    data() {
        return {
            bannerBcImg: require('../../assets/img/banner.jpg')
        }
    }
    ,methods: {
        toId( idName ) {
            location.href = '#' + idName
        }
    }
}
</script>

<style lang="sass?indentedSyntax" scoped>
@import '../../sass/main'

// 图片在背景图中
.banner
    position: relative
    width: 100%
    +REM( height, 300px )
    +bC( $C-L-theme )
    .banner--title
        position: absolute
        left: 10%
        bottom: 20%
        h2
            display: inline-block
            +REM( font-size, $F-title )
        p
            +REM( font-size, $F-text )
            +REM( line-height, $F-sub-bigTitle )
        .demo-flat-button
            border: 1px solid $F
            color: $F
    @media only screen and ( min-width : 1180px )
        height: 1024px
        .banner--title
            +REL
            left: inherit
            bottom: inherit
            width: 1180px
            margin: 0 auto
            padding-top: 26%
            >h2
                +fS( $F-title*3 )
                +lH( $F-title*4 )
                +fW( inherit )
            >p
                +fS( $F-title )
                +lH( $F-title*2 )
    @media only screen and ( min-width : 2000px )
        .banner--title
            padding-top: 15%
// 公用样式
.whileColor
    color: $F
.themeColor
    // color: $C-theme // V1.1版本更改为白色, 加粗
    color: $F
    +fW( bold )
</style>
