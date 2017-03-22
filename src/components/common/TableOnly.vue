// 表格 - 只负责渲染表格部分 
<template lang="pug">
#TableOnly
    .TableOnly--itemBox( v-for="item in TableArr" v-bind:style="{ width: item.row }" v-bind:class="item.rowClass" )
        .itemBox--flexBox
            img( v-bind:src="item.iconImg" )
            h4 {{ item.itemTitle }}
</template>

<script>
export default {
    name: 'TableOnly',
    props: ['TableArr']
}
</script>

<style lang="sass?indentedSyntax" scoped>
@import '../../sass/main'

#TableOnly
    +REM( padding, $M-padding )
    +bC( $F )
    .TableOnly--itemBox
        +dib
        +REM-padding-TB( $M-contentMargin ) 
        +bC( $F )
        // width: 25%
        border: 1px solid $C-Intro-border
            left: none
            top: none
        &:first-child
            border:
                left: 1px solid $C-Intro-border
                top: 1px solid $C-Intro-border
        .itemBox--flexBox
            text-align: center
            >img
                +dib
                +imgCover( 30% )
            >h4
                +block
                +fS( $F-text ) 
                +fW( normal )
    // 与 TableOnly--itemBox 类名 同级( 目的: 配置表格一行的样式, 如5行时, 设置第一行第五列的上边框为1px; 依此类推 )
    .row3
        +rowBorder( 3, $C-Intro-border )
    .row4
        +rowBorder( 4, $C-Intro-border )
    .row5
        +rowBorder( 5, $C-Intro-border )
</style>