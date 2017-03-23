<template lang="pug">
#JoinUs
    mu-row( gutter )
        mu-col( class="joinUsBox" v-for="item in joinUsArr" v-bind:key="item.title" width="100" tablet="100" desktop="50" v-bind:style=" { backgroundColor: item.backgroundColor } " )
            h3( v-bind:style=" { color: item.titleColor } " ) {{ item.title }}
            .info
                span.pay( v-bind:style=" { color: item.spanColor, borderRightColor: item.titleColor } " ) 薪资:{{ item.pay }}
                span.type( v-bind:style=" { color: item.spanColor } " ) 职位性质:{{ item.type }}
            p.subTitle( v-bind:style=" { color: item.titleColor } " ) {{ item.subTitle }}
            p( v-for=" itemP in item.describe " class="joinUs--text" v-bind:style=" { color: item.textColor } " ) {{ itemP.text }}
</template>

<script>
export default {
    data() {
        return {
            joinUsArr: [
                {
                    title           : '产品经理',
                    titleColor      : 'rgb( 51, 51, 51 )',
                    pay             : '面议',
                    type            : '全职',
                    spanColor       : 'rgb( 51, 51, 51 )',
                    subTitle        : '职位描述',
                    describe        : [
                        {
                            text    : `1、负责产品需求分析，制定明确的产品功能规划、产品项目计划，为技术团队提供明确的产品文档`
                        }, {
                            text    : `2、负责产品的生命周期管理，引导完成产品的界面、功能、流程设计，协调开发人员进行开发工作，实现产品目标`
                        }, {
                            text    : `3、参与产品功能测试、用户调研，快速推荐产品的迭代及完善，提升用户体验`
                        }, {
                            text    : `4、方向：管理系统产品、运营产品等`
                        }
                    ]
                    ,textColor      : 'rgb( 110,110,110 )'
                    ,backgroundColor: 'rgb( 255, 255, 255 )'
                }, {
                    title           : 'Java高级工程师',
                    titleColor      : 'rgb( 250, 250, 250 )',
                    pay             : '面议',
                    type            : '全职',
                    spanColor       : 'rgb( 255, 255, 255 )'
                    ,subTitle       : '岗位职责',
                    describe        : [
                        {
                            text    : `1、熟练使用linux系统，极强的编程能力和问题解决能力，与年龄经验相称的技术水平`
                        }, {
                            text    : `2、熟练使用mysql，oracle等常用的数据库系统，对数据库有较强的设计能力，同时对数据库分库分表技术等较为熟悉者更优考虑`
                        }, {
                            text    : `3、参与项目的需求分析、功能模块设计`
                        }, {
                            text    : `4、负责功能模块开发，数据库设计、管理与性能优化`
                        }, {
                            text    : `5、对现有的技术框架进行优化，提出改进方案`
                        }, {
                            text    : `6、根据业务发展做技术选型以及前沿性研究`
                        }
                    ]
                    ,textColor      : 'rgba( 250, 250, 250, .8 )'
                    ,backgroundColor: 'rgba( 0, 0, 0, .2 )'
                }
                ,{
                    title           : 'UI设计师'
                    ,titleColor     : 'rgb( 250, 250, 250 )'
                    ,pay            : '面议'
                    ,type           : '全职'
                    ,spanColor      : 'rgb( 255, 255, 255 )'
                    ,subTitle       : '职位描述'
                    ,describe       : [
                        {
                            text    : `1、负责网页端、移动端相关平台产品的交互设计及界面视觉设计`
                        }, {
                            text    : `2、参与网页端、移动端产品前期界面视觉用户研究及设计流行趋势分析`
                        }, {
                            text    : `3、制定平台产品的整体视觉风格及相关视觉规范`
                        }, {
                            text    : `4、具备产品架构的理解、分析能力，能够站在用户角度思考问题，提高产品的可用性，优化设计提升体验`
                        }, {
                            text    : `5、参与产品项目的设计流程及规范的分析制定`
                        }
                    ],
                    textColor      : 'rgba( 250, 250, 250, .8 )',
                    backgroundColor: 'rgb( 59,89,152 )'
                }
                ,{
                    title           : 'PHP高级工程师',
                    titleColor     : 'rgb( 250, 250, 250 )'
                    ,pay            : '面议'
                    ,type           : '全职'
                    ,spanColor      : 'rgb( 255, 255, 255 )'
                    ,subTitle       : '岗位职责'
                    ,describe       : [
                        {
                            text    : `1、PHP类项目和网站平台开发项目管理`
                        }, {
                            text    : `2、负责项目或产品的需求分析、架构设计和技术实施服务`
                        }, {
                            text    : `3、对产品部门提出的需求进行系统分析和设计`
                        }, {
                            text    : `4、制定开发规范，参与制定技术标准，编写相应的技术文档`
                        }, {
                            text    : `5、负责产品研发/实施过程中的模块核心编码、文档编写、性能调优等`
                        }, {
                            text    : `6、负责整个项目的架构设计，任务分配，项目管理等工作`
                        }
                    ]
                    ,textColor      : 'rgba( 250, 250, 250, .8 )'
                    ,backgroundColor: 'rgba( 0, 0, 0, .2 )'
                }
            ]
        }
    }
}
</script>

<style lang="sass?indentedSyntax" scoped>
@import '../../sass/main'

#JoinUs
    +global-maxWidth
    +moduleBoxStyle
    padding:
        left: 0
        right: 0
    .joinUsBox
        +REM( padding, $M-padding )
        h3
            +REM( font-size, $F-title )
            +REM( line-height, $F-title*1.5 )
            +fW( bold )
            color: $F
        .info
            +REM-margin-TB( $M-contentMargin )
            span
                +REM( font-size, $F-text )
                &:first-child
                    +REM( margin-right, $M-contentMargin )
                    +REM( padding-right, $M-contentMargin )
                    border-right:
                        width: 1px
                        style: solid
        p.subTitle
            +REM( margin-bottom, $M-contentMargin )
            +REM( font-size, $F-text )
            +fW( bold )
        p.joinUs--text
            +REM( font-size, $F-text )
            +REM( line-height, $F-title*1.2 )
    @media only screen and ( min-width : 768px )
        +REM-padding-LR( $M-margin )
    @media only screen and ( min-width : 1024px )
        +pL( 0 )
        +pR( 0 )
        .joinUsBox
            +REM( height, 400px )
            width: 50%
            &:nth-of-type( 3 )
                background-color: rgba( $B, .2 ) !important
            &:nth-of-type( 4 )
                background-color: $C-sub-theme !important
</style>
