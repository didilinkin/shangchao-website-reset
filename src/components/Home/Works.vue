<template lang="pug">
#Works
    // 表格渲染
    TableRender( v-bind:TableRenderArr = "worksArr" )
    // 图片介绍
    mu-row( gutter )
        mu-col.works--box( v-for="item in worksBoxArr" width="100" tablet="100" desktop="50" )
            div( v-if="item.imgLeft" v-bind:style="{ backgroundColor: item.itemColor }" )
                .works--box--imgBox( v-bind:style=" { backgroundImage: 'url(' + item.itemImgSrc + ')', backgroundSize: 'cover' } " )
                .works--box--textContent
                    .flexbox
                        h3 {{ item.itemTitle }}
                        p {{ item.itemText }}
            div( v-else v-bind:style="{ backgroundColor: item.itemColor }" )
                .works--box--textContent
                    .flexbox
                        h3 {{ item.itemTitle }}
                        p.text {{ item.itemText }}
                .works--box--imgBox( v-bind:style=" { backgroundImage: 'url(' + item.itemImgSrc + ')', backgroundSize: 'cover' } " )
</template>

<script>
import TableRender  from '../common/TableRender'
const components = { TableRender }

export default {
    name: 'Works',
    data() {
        return {
            worksBoxArr: [
                {
                    imgLeft     : true,
                    itemColor   : '#67B5C2',
                    itemImgSrc  : require('../../assets/img/works_2.png'),
                    itemTitle   : `艾迦办公官方网站`,
                    itemText    : `艾迦办公是一家专注于为各类企业提供中高端办公室租赁
                                    及配套服务的互联网平台，通过线上初步选房-线下核定房源-陪同看房-撮合交易这一流程，
                                    为客户提供最有效的租房服务。`
                }, {
                    imgLeft     : false,
                    itemColor   : '#6574BB',
                    itemImgSrc  : require('../../assets/img/works_5.png'),
                    itemTitle   : `欢乐颂H5办公租赁平台`,
                    itemText    : `长江中心“欢乐颂创意办公空间”是岛城首家互联网创意办公空间，旨在引领本土白领生态办公新模式，
                                    打造微租赁、短时租赁新地标。`
                }, {
                    imgLeft     : true,
                    itemColor   : '#343A48',
                    itemImgSrc  : require('../../assets/img/works_3.png'),
                    itemTitle   : `艾迦办公APP客户端`,
                    itemText    : `艾迦办公是一家专注于为各类企业提供中高端办公室租赁及配套服务的互联网平台，
                                    通过线上初步选房-线下核定房源-陪同看房-撮合交易这一流程，为客户提供最有效的租房服务。`
                }, {
                    imgLeft     : false,
                    itemColor   : '#6574BB',
                    itemImgSrc  : require('../../assets/img/works_1.png'),
                    itemTitle   : `查看更多`,
                    itemText    : `···`
                }
            ],
            // 行业方案
            worksArr: [
                {
                    title   : `热门行业`,
                    leftBorderColor: `#67B5C2`,                             // 标题 左边框颜色
                    itemArr : [                                             // 单独服务类型的细分数组
                        {
                            iconImg     : require('../../assets/img/ico-xdlc-48-px@3x.png'),
                            row         : "25%",
                            rowClass    : 'row4',
                            itemTitle   : '信贷理财'
                        }, {
                            iconImg     : require('../../assets/img/ico-tcsc-48-px@3x.png'),
                            row         : "25%",
                            rowClass    : 'row4',
                            itemTitle   : '同城商城'
                        }, {
                            iconImg     : require('../../assets/img/ico-gylwl-48-px@3x.png'),
                            row         : "25%",
                            rowClass    : 'row4',
                            itemTitle   : '供应链物流'
                        }, {
                            iconImg     : require('../../assets/img/ico-sjpt-48-px@3x.png'),
                            row         : "25%",
                            rowClass    : 'row4',
                            itemTitle   : '社交平台'
                        }, {
                            iconImg     : require('../../assets/img/ico-zhcc-48-px@3x.png'),
                            row         : "25%",
                            rowClass    : 'row4',
                            itemTitle   : '智慧仓储'
                        }
                    ]
                }, {
                    title   : `热门行业`,
                    leftBorderColor: `#6574BB`,                             // 标题 左边框颜色
                    itemArr : [                                             // 单独服务类型的细分数组
                        {
                            iconImg     : require('../../assets/img/ico-48-px@3x(1).png'),
                            row         : "25%",
                            rowClass    : 'row4',
                            itemTitle   : '金融超市'
                        }, {
                            iconImg     : require('../../assets/img/ico-48-px@3x(2).png'),
                            row         : "25%",
                            rowClass    : 'row4',
                            itemTitle   : '操盘平台'
                        }, {
                            iconImg     : require('../../assets/img/ico-48-px@3x(3).png'),
                            row         : "25%",
                            rowClass    : 'row4',
                            itemTitle   : '小额信贷'
                        }, {
                            iconImg     : require('../../assets/img/ico-48-px@3x.png'),
                            row         : "25%",
                            rowClass    : 'row4',
                            itemTitle   : '投资理财'
                        }
                    ]
                }, {
                    title   : `热门行业`,
                    leftBorderColor: `#343A48`,                             // 标题 左边框颜色
                    itemArr : [                                             // 单独服务类型的细分数组
                        {
                            iconImg     : require('../../assets/img/ico3-1-48-px@3x.png'),
                            row         : "25%",
                            rowClass    : 'row4',
                            itemTitle   : '智能家居'
                        }, {
                            iconImg     : require('../../assets/img/ico3-2-48-px@3x.png'),
                            row         : "25%",
                            rowClass    : 'row4',
                            itemTitle   : '智慧城市'
                        }, {
                            iconImg     : require('../../assets/img/ico3-3-zhcc-48-px@3x.png'),
                            row         : "25%",
                            rowClass    : 'row4',
                            itemTitle   : '智慧仓储'
                        }, {
                            iconImg     : require('../../assets/img/ico3-4-gylwl-48-px@3x.png'),
                            row         : "25%",
                            rowClass    : 'row4',
                            itemTitle   : '供应链物流'
                        }, {
                            iconImg     : require('../../assets/img/ico3-5-ssxj-48-px@3x.png'),
                            row         : "25%",
                            rowClass    : 'row4',
                            itemTitle   : '设备巡检'
                        }
                        , {
                            iconImg     : require('../../assets/img/ico3-6-sheld-48-px@3x.png'),
                            row         : "25%",
                            rowClass    : 'row4',
                            itemTitle   : '防伪溯源'
                        }
                        , {
                            iconImg     : require('../../assets/img/ico3-7-spjk-48-px@3x.png'),
                            row         : "25%",
                            rowClass    : 'row4',
                            itemTitle   : '无线视频监控'
                        }
                    ]
                }, {
                    title   : `热门行业`,
                    leftBorderColor: `#6F61B6`,                             // 标题 左边框颜色
                    itemArr : [                                             // 单独服务类型的细分数组
                        {
                            iconImg     : require('../../assets/img/ico4-1-48-px@3x (1).png'),
                            row         : "25%",
                            rowClass    : 'row4',
                            itemTitle   : '同城电商'
                        }, {
                            iconImg     : require('../../assets/img/ico4-1-48-px@3x (2).png'),
                            row         : "25%",
                            rowClass    : 'row4',
                            itemTitle   : '跨境电商'
                        }, {
                            iconImg     : require('../../assets/img/ico4-1-48-px@3x (4).png'),
                            row         : "25%",
                            rowClass    : 'row4',
                            itemTitle   : '三级分销'
                        }, {
                            iconImg     : require('../../assets/img/ico4-1-48-px@3x (3).png'),
                            row         : "25%",
                            rowClass    : 'row4',
                            itemTitle   : '微商城'
                        }
                    ]
                }
            ]
        }
    },
    components: components
}
</script>

<style lang="sass?indentedSyntax" scoped>
@import '../../sass/main'

#Works
    +global-maxWidth
    +bC( $C-base )
    .works--box
        >div
            +box
            +REM( height, 200px )
            .works--box--imgBox
                width: 50%
            .works--box--textContent
                +flexCenter
                width: 50%
                color: $F
                .flexbox
                    +REM-margin-LR( $M-contentMargin*2 )
                    +REM-margin-TB( $M-contentMargin )
                    >h3
                        // +textCenter
                        +REM( margin-bottom, $M-contentMargin/3 )
                        +fS( $F-info )
                    >p
                        +ell-line( $F-title, 4 )
                        +fS( $F-text )
                        +lH( $F-title )
                        @extend %justify
        &:last-child 
            >div .works--box--textContent .flexbox>p
                +textCenter 
    
    @media only screen and ( min-width : 768px )
        .works--box >div
            +REM( height, 250px )
            .works--box--textContent .flexbox > h3
                +fS( $F-title )       
            .works--box--textContent .flexbox > p
                +fS( $F-info )
                +ell-line( $F-title*1.5, 7 )
    @media only screen and ( min-width : 1180px )
        .row
            flex-direction: column
            height: 720px
            .works--box
                width: 50% !important          
                            
                    
</style>
