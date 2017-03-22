<template lang="pug">
#Team
    mu-row( gutter )
        // left
        mu-col( class="teamBox teamLeft" width="100" tablet="50" desktop="50" )
            img( v-bind:src="teamLeft.img" )
            .teamBox--text
                .teamBox--iconImg
                    img( v-bind:src="iconImg" class="teamBox--iconImg" )
                p {{ teamLeft.text }}
        // right
        mu-col( class="teamBox teamRight" width="100" tablet="50" desktop="50" )

            // mobile box
            .teamRight--mobile
                img( v-for="item in teamRight.imgArr" v-bind:src="item.imgUrl" )

            // PC box
            .teamRight--PC
                .teamBox--text
                    img( v-bind:src="teamRight.img_C" )
                .teamRight--PC--imgBox
                    img( v-bind:src="teamRight.img_A" )
                    img( v-bind:src="teamRight.img_B" )

</template>

<script>
export default {
    data() {
        return {
            teamLeft: {
                img         : require('../../assets/img/group-14.png')
                ,text       : `我们深刻理解国际前沿设计趋势、对流程的互联网站点和软件应用有深刻认识、
                                在开发领域有着雄厚技术与实战经验。”`
            }
            ,teamRight: {
                img_A       : require('../../assets/img/group-17.png'),
                img_B       : require('../../assets/img/group-16.png'),
                img_C       : require('../../assets/img/group-16@3x.png'),      // V1.1 版本新加
                imgArr      : [
                    {
                        imgUrl: require('../../assets/img/group-17.png')
                    }, {
                        imgUrl: require('../../assets/img/group-16.png')
                    }, {
                        imgUrl: require('../../assets/img/group-16@3x.png')         // V1.1 版本新加
                    }
                ],
                text        : `我们深刻理解国际前沿设计趋势、对流程的互联网站点和软件应用有深刻认识、
                                在开发领域有着雄厚技术与实战经验。”`
            }
            ,iconImg: require('../../assets/img/ico-quotation@3x.png')
        }
    }
}
</script>

<style lang="sass?indentedSyntax" scoped>
@import '../../sass/main'

// 当屏幕大于1180px时, 对内容设置的混合( 单独属性, 在下面单独设置 )
=team-PC-style
    +dib
    bottom: 0
    +w-h( 50%, 45% )

#Team
    +global-maxWidth

    // 通用样式
    .teamBox
        @media only screen and ( min-width : 768px )
            width: 50% !important
        >img
            +block
        .teamBox--text
            // +REM( padding, $M-padding )  // V1.1版本去除文字
            padding: 0
            +bC( $C-L-sub-theme )
            .teamBox--iconImg
                // +REM-W-H( $F-title, $F-title )
                // +REM( margin-bottom, $M-contentMargin )
                // >img
                //     +imgCover( 30% )
            >p
                +REM( font-size, $F-text )
                +REM( line-height, $F-title )
                color: $F

    // 独立样式
    .teamLeft
        >img
            +imgCover( 100% )
        .teamBox--text
            +REM( padding, $M-contentMargin )
            +bC( $C-sub-theme )
            .teamBox--iconImg >img
                +imgCover( 10% )
        @media only screen and ( min-width : 768px )
            +REL
            width: 50%
            height: 600px
            >img
                height: 100%
                object-fit: cover
            .teamBox--text
                +ABS
                +team-PC-style
                right: 0
                height: 55%
                padding: $M-contentMargin
        @media only screen and ( min-width : 1180px )
            +REL
            width: 50%
            height: 600px
            >img
                height: 100%
                object-fit: cover
            .teamBox--text
                +ABS
                +team-PC-style
                right: 0
                


.teamRight
    .teamRight--mobile
        @media only screen and ( min-width : 320px )
            +block
            >img
                +block
                +imgCover( 100% )
                +REM( max-height, 200px )
        @media only screen and ( min-width : 768px )
            +dNone

    .teamRight--PC
        @media only screen and ( min-width : 320px )
            +dNone
        @media only screen and ( min-width : 768px )
            +block
            height: 600px       // 控制最大高度
            .teamBox--text
                +block
                height: 45%
            .teamRight--PC--imgBox
                display: flex
                height: 55%
                >img
                    +imgCover( 50% )
            .teamBox--text >img
                +imgCover( 100% )
        @media only screen and ( min-width : 1180px )
            .teamBox--text
                height: 55%
            .teamRight--PC--imgBox
                height: 45% 
</style>
