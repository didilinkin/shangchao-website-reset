// 标题组件 - 通用
<template lang="pug">
.title( v-bind:id="titleInfo.idName" )
    .warp--title
        h2( v-bind:style = "{ color: titleInfo.title[0].color, display: 'inline-block' }" ) {{ titleInfo.title[0].text }}
        h2( v-bind:style = "{ color: titleInfo.title[1].color, display: 'inline-block', fontWeight: 'bold' }" ) {{ titleInfo.title[1].text }}
        .modifiedLine
            .string( v-bind:style = " { left: '0', backgroundColor: titleInfo.subTitle.color } " )
            p( v-bind:style = "{ color: titleInfo.subTitle.color }" ) {{ titleInfo.subTitle.text }}
            .string( v-bind:style = " { right: '0', backgroundColor: titleInfo.subTitle.color } " )
</template>

<script>
export default {
    props: ['titleInfo']
}
</script>

<style lang="sass?indentedSyntax" scoped>
@import '../../sass/main'

.title
    +flexCenter
    +textCenter
    +REM( padding-top, $M-padding*3 ) // 方便锚点跳到指定位置, 加高padding-top
    +REM( padding-bottom, $M-padding )
    >div
        +W100
        h2
            +REM( font-size, $F-title )
        .modifiedLine
            +REL
            width: 100%
            .string
                display: block
                +ABS
                top: 60%
                z-index: 1
                width: 30%
                +REM( height, 1px )
                border-top: 1px solid $C-text
                +REM( border-bottom-width, 1px )
            >p
                +REM( font-size, $F-text )
                +REM( margin-top, $M-contentMargin )
                +REM( margin-bottom, $M-contentMargin )
// 容器媒体查询( PC情况下 ) 设置最大宽度
.title
    @media only screen and ( min-width : 1180px )
        .warp--title
            max-width: 420px
</style>
