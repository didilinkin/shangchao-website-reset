<template lang="pug">
#app
    router-view
    FooterBox
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import FooterBox    from './components/common/FooterBox'
const components    = { FooterBox }

export default {
    name: 'app',
    methods: {
        // 目的: 根据 $store传回的 锚点名称 进行滚动
        moveScrollTop() {
            let anchorName  = this.$store.state.anchorName,                 // 首先保存 $store中锚点的名称
                anchorObj   = document.querySelector( "#" + anchorName )    // 检索这个节点对象
            document.body.scrollTop = anchorObj.offsetTop                   // 执行跳转
        },
        // 目的: 监听屏幕滚动
        watchScrollY() {
            window.onscroll = () => {
                let yValue          = window.scrollY,
                    mobileAppbar    = document.querySelector('#mobile--appbar'),
                    pcAppBar        = document.querySelector('#pc--header'),
                    viewUrlState    = this.$store.state.viewUrlState

                // 当yValue值为0时. 触发一个事件 -> 更改 PC端 AppBar 样式类, 改变样式
                if( yValue === 0 ) {
                    // 判断页面状态: 如果是 'Home' -> 执行 首页导航滚动监听事件
                    if( viewUrlState === 'Home' ) {
                        this.$data.Home.viewState = ''                                      // 重置 $data内 首页滚动状态
                        this.changeNavStyle( 1 )                                            // 改变导航按钮样式( 初始状态 - HOME )
                    } // 非首页的情况 -> 无处理
                    mobileAppbar.setAttribute( 'class', 'mu-appbar mu-paper-1' )        // 导航改回透明样式( 移动端导航栏未添加, 所以报错 )
                    pcAppBar.setAttribute( 'class', 'pc-header' )                       // 上同
                } else {
                    // 判断页面状态: 如果是 'Home' -> 执行 首页导航滚动监听事件
                    if( viewUrlState === 'Home' ) {
                        // 判断 滚动值的范围( 修正距离: 不比分要触碰顶部时 进行切换; 减400px )
                        if( yValue>=1000 && yValue<1300 ) {
                            this.cacheMethodsState( '关于我们', 2 )
                        } else if( yValue>=1300 && yValue<2100 ) {
                            this.cacheMethodsState( '提供服务', 3 )
                        } else if( yValue>=2100 && yValue<2600 ) {
                            this.cacheMethodsState( '服务简介', 4 )
                        } else if( yValue>=2600 && yValue<4900 ) {
                            this.cacheMethodsState( '行业方案', 5 )
                        } else if( yValue>=4900 && yValue<5800 ) {
                            this.cacheMethodsState( '团队介绍', 6 )
                        } else if( yValue>=5800 && yValue<7300 ) {
                            this.cacheMethodsState( '招贤纳士', 7 )
                        } else if( yValue>=7300 ) {
                            this.cacheMethodsState( '联系我们', 8 )
                        }

                    } // 非首页的情况 -> 无处理
                    mobileAppbar.setAttribute( 'class', 'mu-appbar mu-paper-1 moveViewStyle' )  // 导航改回透明样式( 移动端导航栏未添加, 所以报错 )
                    pcAppBar.setAttribute( 'class', 'pc-header moveViewStyle-PC' )
                }
            }
        },
        // 目的: 根据页面滚动 触发判断
        cacheMethodsState(HomeModuleName, HomeNavBtn) {
            let saveViewState = this.$data.Home.viewState           // 保存 $data 中 首页滚动状态
            if( HomeModuleName != saveViewState ) {                 // 如果: 缓存状态 与 $data状态不同 -> 版块发生改变
                this.changeNavStyle( HomeNavBtn )                   // console.log('版块发生改变, 修改 $data值')
                this.$data.Home.viewState = HomeModuleName          // 将 当前的模块名称存入 $data中
            }
        },
        // 目的: 改变导航样式
        changeNavStyle(HomeNavBtn) {
            let btnArr = document.getElementsByClassName('mu-buttom-item')
            for( let i = 0; i < btnArr.length; i++ ) {                                              // 清空class
                btnArr[i].setAttribute( 'class', 'mu-buttom-item' )
            }
            btnArr[HomeNavBtn - 1].setAttribute( 'class', 'mu-buttom-item mu-bottom-item-active' )
        }
    },
    data() {
        return {
            Home: {
                viewState: ''  // 首页 - 当前滚动到的模块名称( 当在最顶部时, 更改样式 )
            }
        }
    },
    computed: mapGetters({
        getAnchorName   : 'getAnchorName'
    }),
    watch: {
        // 监听: 锚点名称改变 -> 执行滚动
        getAnchorName: function() {
            this.moveScrollTop()
        }
    },
    mounted: function() {
        this.watchScrollY()
    },
    components: components
}
</script>

<style lang="sass?indentedSyntax" scoped>
@import './sass/main'
@import './sass/vendors/MuseUI'

#app
    +bC( $C-base )
</style>
