<template lang="pug">
    .map
        #mapView
        .mapTitle
            .mapTitle--flexbox
                p 华润大厦B座
</template>

<script>
export default {
    mounted: function() {
        this.loadMap()
    }
    ,methods: {
        loadMap: function() {
            // 百度地图API功能
            const map           = new BMap.Map( 'mapView',  {enableMapClick:false} )
            const map_Point     = new BMap.Point( 120.384459,36.071691 )
            const map_Icon      = new BMap.Icon( "http://www.aplusoffice.cn/images/resourceMap/ico-pin-orange-24-px@2x.png", new BMap.Size( 50, 50 ) )
            const map_Marker    = new BMap.Marker( map_Point, { icon: map_Icon } )
            map.centerAndZoom( map_Point, 16 )
            map.addOverlay( map_Marker )                                // 将标注添加到地图中
            map.disableDragging()                                       // 禁止拖拽
            map.disableScrollWheelZoom()                                // 禁止滚轮缩放
            map.disableDoubleClickZoom()                                // 禁止双击缩放
            map.disableKeyboard()                                       // 禁用键盘操作
            map.disablePinchToZoom()                                    // 禁用双指操作
        }
    }
}
</script>

<style lang="sass?indentedSyntax" scoped>
@import '../../sass/main'

// 地图
.map
    position: relative
    #mapView
        width: 100%
        @media only screen and ( min-width : 320px )
            +REM( height, 220px )
        @media only screen and ( min-width : 360px )
            +REM( height, 249px )
        @media only screen and ( min-width : 375px )
            +REM( height, 249px )
        @media only screen and ( min-width : 768px )
            +REM( height, 420px )
        @media only screen and ( min-width : 1180px )
            height: 600px
    .mapTitle
        position: absolute
        // 超小屏幕手机
        @media only screen and ( min-width : 320px )
            top: 15%
            left: 33%
            width: 35%
        // Galaxy S5
        @media only screen and ( min-width : 360px )
            top: 22%
            left: 33%
            width: 35%
        // iPhone 6
        @media only screen and ( min-width : 375px )
            top: 22%
            left: 33%
            width: 35%
        // iPad
        @media only screen and ( min-width : 768px )
            top: 34%
            left: 38%
            width: 25%
        // iPad Pro
        @media only screen and ( min-width : 1180px )
            top: 35%
            left: 41%
            width: 18%
        // 笔记本以上
        @media only screen and ( min-width : 1440px )
            top: 35%
            left: 44%
            width: 12%
        +REM( padding, $M-contentMargin )
        +bC( $F )
        .mapTitle--flexbox
            +flexCenter
            width: 100%
            >p
                +REM( font-size, $F-info )
                +fW( bold )
                color: $C-sub-title
</style>
