// '大数据平台建设'
<template lang="pug">
#BigData( v-bind:style="{ backgroundColor: '#67b5c2' }" )
    DetailAppBar
    DetailBanner( v-bind:DetailBanner="bannerInfo" )
    h1( v-bind:style="{ marginTop: '2rem' }" ) 大数据平台建设
</template>

<script>
import DetailAppBar     from '../components/common/DetailAppBar'    
import DetailBanner     from '../components/common/DetailBanner'   
const components = { DetailAppBar, DetailBanner }
export default {
    name: 'BigData',
    methods: {},
    data() {
        return {
            // 传递给 Banner组件( 通用 )的数据
            bannerInfo: {
                bgImg: require('../assets/img/bigData-bgbanner.jpg'),
                titleInfo: [
                    {
                        title: '千万级并发APP'
                    }, {
                        title: '亿级现金流投资平台'
                    }, {
                        title: '百亿级数据平台'
                    }
                ]
            }
        }
    },
    mounted: function() {
        this.$updateViewUrlState( 'BigDate' )   // 更新 路由url状态
    },
    components: components
}
</script>

<style lang="sass?indentedSyntax" scoped>
@import '../sass/main'

</style>
