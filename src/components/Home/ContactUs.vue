<template lang="pug">
#ContactUs
    mu-row( gutter )
        // 联系信息
        mu-col( class="contactUs--box contactUs--contactInfo" width="100" tablet="100" desktop="100" )
            .contactInfo--item( v-for=" item in contactUsArr " )
                .contactInfo--text
                    i( class="mu-icon material-icons" ) {{ item.iconName }}
                    p {{ item.info }}

</template>

<script>
export default {
    data() {
        return {
            formTitle                   : `如果您想咨询相关的定制开发业务，或者实地考察，更加直观的了解我们到产品和公司实力，可以发送留言或直接拨打热线电话。`,
            contactUsArr                : [
                {
                    iconName            : 'call',
                    info                : '0532-83861532'
                }, {
                    iconName            : 'email',
                    info                : 'aplusoffice@forevercj.com'
                }, {
                    iconName            : 'map',
                    info                : '山东省青岛市市南区华润大厦B座2408号'
                }
            ],
            input                      : '',
            inputErrorText             : '',
            multiLineInput             : '',
            multiLineInputErrorText    : ''
        }
    },
    methods: {
        handleInputOverflow (isOverflow) {
            this.inputErrorText = isOverflow ? '超过！' : ''
        },
        handleMultiLineOverflow (isOverflow) {
            this.multiLineInputErrorText = isOverflow ? '超过！' : ''
        }
    }
}
</script>

<style lang="sass?indentedSyntax" scoped>
@import '../../sass/main'

#ContactUs
    +global-maxWidth
    @media only screen and ( min-width : 1180px )
        +pT( 0 )
        +mT( 0 )
        .contactUs--box
            height: 150px
            .contactInfo--item
                +dib
                width: 33%
            &:first-child
                +mB( 0 !important)
    +REM( margin-top, $M-padding )
    +REM-margin-LR( $M-margin )
    .contactUs--box
        +moduleBoxStyle
        +REM-padding-LR( $M-padding )
        +bC( $F )
        &:first-child
            +REM( margin-bottom, $M-contentMargin )
    .contactUs--form
        >P
            +REM( font-size, $F-text )
            +REM( line-height, $F-text*2 )
            color: $C-text
    .contactUs--contactInfo
        .contactInfo--item
            +REM-padding-TB( $M-contentMargin )
            +textCenter
            .contactInfo--text
                @extend %dib
                >i
                    @extend %dib
                    +REM( margin-top, $F-title/4 )
                    +REM( font-size, $F-info*2 )
                    +text-vertical-align( top )
                    color: $C-text
                    @media only screen and ( min-width : 1180px )
                        font-size: 1rem
                >p
                    +REM( margin-top, $M-contentMargin/2 )
                    +REM( font-size, $F-text )
                    color: $C-text
// 输入框 宽度样式
.mu-text-field
    width: 100%
</style>
