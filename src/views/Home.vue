// 首页内容( 路由 - 引入 )
<template lang="pug">
#Home
    AppBar
    Banner
    MapView
</template>

<script>
import AppBar       from '../components/Home/AppBar'            // AppBar顶部导航
import Banner       from '../components/Home/Banner'            // Banner组件
import MapView      from '../components/Home/MapView'           // 地图组件

const components = { AppBar, Banner, MapView }

export default {
    name: 'Home',
    data() {
        return {}
    },
    components: components
}
</script>

<style lang="sass?indentedSyntax" scoped>
@import '../sass/main'

</style>
