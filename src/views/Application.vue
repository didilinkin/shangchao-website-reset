// 'APP应用'
<template lang="pug">
#Application( v-bind:style="{ backgroundColor: '#67b5c2' }" )
    DetailAppBar
    DetailBanner( v-bind:DetailBanner="bannerInfo" )
    h1( v-bind:style="{ marginTop: '2rem' }" ) APP应用
</template>

<script>
import DetailAppBar     from '../components/common/DetailAppBar'    
import DetailBanner     from '../components/common/DetailBanner'   
const components = { DetailAppBar, DetailBanner }
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
            }
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

</style>
