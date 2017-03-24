// '电商网站'
<template lang="pug">
#ECommerce( v-bind:style="{ backgroundColor: '#67b5c2' }" )
    DetailAppBar
    DetailBanner( v-bind:DetailBanner="bannerInfo" )
    h1( v-bind:style="{ marginTop: '2rem' }" ) 电商网站
</template>

<script>
import DetailAppBar     from '../components/common/DetailAppBar'    
import DetailBanner     from '../components/common/DetailBanner'   
const components = { DetailAppBar, DetailBanner }
export default {
    name: 'ECommerce',
    methods: {},
    data() {
        return {
            // 传递给 Banner组件( 通用 )的数据
            bannerInfo: {
                bgImg: require('../assets/img/ECommerce-bgbanner.png'),
                titleInfo: [
                    {
                        title: '专业电商系统研发'
                    }
                ]
            }
        }
    },
    components: components
}
</script>

<style lang="sass?indentedSyntax" scoped>
@import '../sass/main'

</style>

