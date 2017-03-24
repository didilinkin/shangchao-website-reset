// 详情类 页面专用 Banner组件
<template lang="pug">
.detailBanner( class="mediaQuery" v-bind:style=" { backgroundImage: 'url( ' + DetailBanner.bgImg + ' )', backgroundSize: 'cover' } " )
    .banner--title
        h2.whileColor( v-for="item in DetailBanner.titleInfo" ) {{ item.title }}
</template>

<script>
export default {
    name: 'detailBanner',
    props: ['DetailBanner'],
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

// detailBanner - 媒体查询
.mediaQuery
    @media only screen and ( min-width : 320px )
        +REM( height, 320px )
        h2
            +REM( font-size, $F-title )
    @media only screen and ( min-width : 768px )
        +REM( height, 300px )
        h2
            +REM( font-size, $F-title )
    @media only screen and ( min-width : 1180px )
        +REM( height, 500px )
        h2
            +REM( font-size, $F-sub-bigTitle )

//  detailBanner - 结构样式
.detailBanner
    +REL
    +flexCenter
    +W100
    +bC( $C-L-theme )
    .banner--title                                  
        >h2                                         
            +block
            
        
// 公用样式
.whileColor
    color: $F
.themeColor
    color: $F
    +fW( bold )
</style>
