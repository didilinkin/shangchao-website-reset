<template lang="pug">
#Service
    mu-row( gutter )
        mu-col( v-for="item in serviceArr" class="serviceBox" width="100" tablet="50" desktop="20" )
            div
                .imgBox
                    img( v-bind:src=" item.img " )
                h2 {{ item.title }}
                .string
                p( v-for="itemText in item.textArr" v-bind:style="{ display: 'block' }" ) {{ itemText.text }}
                .btnBox
                    mu-flat-button( label="查看详情" class="demo-flat-button" )
</template>

<script>
export default {
    data() {
        return {
            serviceArr: [
                {
                    img     : require('../../assets/img/ico-tool-30-px@3x.png'),
                    title  : 'app应用',
                    textArr: [
                        {
                            text: `各大主流平台Android、iOS、`
                        }, {
                            text: `WindowsPhone、HTML5`
                        }, {
                            text: `原生和混合式开发，对大数据...`
                        }
                    ]
                }, {
                    img     : require('../../assets/img/ico-software-30-px@3x.png'),
                    title  : '大数据平台建设',
                    textArr: [
                        {
                            text: `大型分布式平台建设，`
                        }, {
                            text: `高并发应用系统架构搭建，`
                        }, {
                            text: `海量数据加工处理...`
                        }
                    ]
                }, {
                    img     : require('../../assets/img/ico-manager-30-px@3x.png'),
                    title  : '电商网站',
                    textArr: [
                        {
                            text: `长期跟踪电商领域发展，`
                        }, {
                            text: `拥有多年电商系统独立开发和二开经验，`
                        }, {
                            text: `精通于B2C、B2B...`
                        }
                    ]
                }, {
                    img     : require('../../assets/img/ico-software-30-px@3x.png'),
                    title  : '软硬结合系统集成',
                    textArr: [
                        {
                            text: `智能硬件、物联网关键技术、`
                        }, {
                            text: `各频段RFID应用系统建设，`
                        }, {
                            text: `现已在智能家居、港口电子……`
                        }
                    ]
                }, {
                    img     : require('../../assets/img/ico-c-m-m-i-30-px@3x.png'),
                    title  : 'CMMI认证',
                    textArr: [
                        {
                            text: `CMMI是一套融合多学科的、`
                        }, {
                            text: `可扩充的产品集合，`
                        }, {
                            text: `其研制的初步动机……`
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        // 目的: 跳转到 '提供服务' 详情页
        toId( idName ) {
            location.href = '#' + idName
        }
    }
}
</script>

<style lang="sass?indentedSyntax" scoped>
@import '../../sass/main'

#Service
    +moduleBoxStyle
    .serviceBox
        +flexCenter
        +textCenter
        +REM( padding, $M-padding )
        +REM( margin-bottom, $M-padding )
        +bC( $F )
        >div
            .imgBox
                @extend %dib
                +REM-W-H( 30px, 30px )
                >img
                    +imgCover( 100% )
            h2
                +REM( font-size, $F-title*.7 )
                +REM( padding-top, $M-contentMargin )
                +REM( padding-bottom, $M-contentMargin )
            .string
                @extend %dib
                width: 30%
                +REM( height, 2px )
                +REM( margin-bottom, $M-contentMargin )
                +bC( $C-theme )
            p
                +REM( font-size, $F-text*.6 )
                +REM( line-height, $F-title )
                color: $C-text
            // "查看详情" 按钮
            .demo-flat-button
                +ellipseBtn( 30px )
                width: auto
                +REM-margin-TB( $M-margin )
                box-shadow: none                        // 隐藏不必要的shadow效果
                border: 1px solid rgba( $C-text, .4 )
                color: $C-text
                // hover 事件
                &:hover
                    border-color: $C-theme
                    +bC( $C-theme )
                    color: $F
        @media only screen and ( min-width : 768px )
            height: 360px
        @media only screen and ( min-width : 1024px )
            height: 460px
            >div 
                +REL
                +pT( $M-padding*2 )
                height: 100%
                >.btnBox
                    +ABS
                    +flexCenter
                    bottom: 0
                    +W100
    @media only screen and ( min-width : 1180px )
        max-width: 1180px
        margin: 0 auto
        padding:
            left: 0
            right: 0
</style>
