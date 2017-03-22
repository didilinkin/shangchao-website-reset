<template lang="pug">
    .footer
        p © 青岛上朝信息技术有限公司 鲁ICP备16017129号-2
</template>

<style lang="sass?indentedSyntax" scoped>
@import '../../sass/main'

.footer
    +flexCenter
    width: 100%
    +REM( height, 40px )
    +bC( $C-title )
    >p
        color: rgba( $F, .6 )
</style>
