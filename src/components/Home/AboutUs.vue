<template lang="pug">
#AboutUs
    mu-row( gutter )
        mu-col( class="AboutUs--img" width="100" tablet="45" desktop="40" )
            img( src="../../assets/img/pic-about-us.png" )
        mu-col( class="AboutUs--text" width="100" tablet="55" desktop="60" )
            h3 {{ contentInfo.title }}
            .string
            p( v-for=" item in contentInfo.textArr " ) {{ item.text }}
</template>

<script>
export default {
    name: 'AboutUs',
    data() {
        return {
            contentInfo: {
                title: '青岛上朝信息科技有限公司',
                textArr:   [
                    {
                        text: `一家专业从事互联网服务的信息技术公司，公司拥有专业的策划/设计/前后端开发工程师。
                                核心工程师曾在北上广等大型公司任职。`
                    }, {
                        text: `公司致力于为广大客户提供项目解决方案和优质服务，从技术、战略、资本各方面提供全方位的创新服务，
                                帮助企业互联网化升级。`
                    }, {
                        text: `我们深刻理解国际前沿设计趋势、对流程的互联网站点和软件应用有深刻认识、
                                在开发领域有着雄厚技术与实战经验。`
                    }, {
                        text: `业务范围平台开发，网站定制，手机应用，互联网金融。`
                    }
                ]

            }
        }
    }
}
</script>

<style lang="sass?indentedSyntax" scoped>
@import '../../sass/main'

#AboutUs
    @media only screen and ( min-width : 768px )
        +REL
        +REM( height, 370px )
        +REM-P( $M-padding, $M-margin, $M-padding, $M-margin )
    +global-maxWidth
    .AboutUs--img
        @media only screen and ( min-width : 320px )
            >img
                +imgCover( 100% )
        @media only screen and ( min-width : 768px )
            +ABS
            +REM( right, $M-margin )
            height: 445px
            >img
                +imgCover( 100% )
                height: 100%
    .AboutUs--text
        +moduleBoxStyle
        +pL( 0 )
        h3
            +REM( padding-bottom, $M-contentMargin )
            +REM( font-size, $F-title )
            +fW( bold )
            color: $C-sub-title
        .string
            +halfString( $C-sub-title, 200% )
        p
            +REM( padding-top, $M-contentMargin )
            +REM( font-size, $F-text )
            +REM( line-height, $F-title )
            color: $C-text
        @media only screen and ( min-width : 768px )
            +ABS
            left: 0
            padding:
                top: 0
                bottom: 0
</style>
