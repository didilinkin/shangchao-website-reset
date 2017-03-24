// '系统集成'
<template lang="pug">
#System-Integration( v-bind:style="{ backgroundColor: '#67b5c2' }" )
    DetailAppBar
    DetailBanner( v-bind:DetailBanner="bannerInfo" )
    h1( v-bind:style="{ marginTop: '2rem' }" ) 系统集成
</template>

<script>
import DetailAppBar     from '../components/common/DetailAppBar'    
import DetailBanner     from '../components/common/DetailBanner'   
const components = { DetailAppBar, DetailBanner }
export default {
    name: 'SystemIntegration',
    methods: {},
    data() {
        return {
            // 传递给 Banner组件( 通用 )的数据
            bannerInfo: {
                bgImg: require('../assets/img/SystemIntegration.png'),
                titleInfo: [
                    {
                        title: '智慧物流 | 智能硬件 | 智慧城市'
                    }
                ]
            }
        }
    },
    mounted: function() {
        this.$updateViewUrlState( 'SystemIntegration' )   // 更新 路由url状态
    },
    components: components
}
</script>

<style lang="sass?indentedSyntax" scoped>
@import '../sass/main'

#System-Integration
</style>

