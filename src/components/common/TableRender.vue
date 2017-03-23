// 表格渲染 - '服务简介' + '行业方案' 通用表格内容渲染组件
<template lang="pug">
#TableRender
    .TableRender__box( v-for="item in TableRenderArr" )
        .TableRender__box--title( v-bind:style="{ color: item.leftBorderColor }" )
            h3 {{ item.title }}

        // 渲染表格组件
        TableOnly( v-bind:TableArr = "item.itemArr" )
</template>

<script>
import TableOnly  from './TableOnly'
const components = { TableOnly }

export default {
    name: 'TableRender',
    props: ['TableRenderArr'],
    components: components
}
</script>

<style lang="sass?indentedSyntax" scoped>
@import '../../sass/main'

#TableRender
    +REM-padding-TB( $M-padding )
    +bC( $C-base )
    // 版块样式
    .TableRender__box
        // 版块标题
        .TableRender__box--title
            border-left: 
                width: 5px 
                style: solid
            >h3
                +titleStyle( $C-theme )
</style>