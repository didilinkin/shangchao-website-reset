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
    components: components
}
</script>

<style lang="sass?indentedSyntax" scoped>
@import './sass/main'
@import './sass/vendors/MuseUI'

#app
    +bC( $C-base )
</style>
