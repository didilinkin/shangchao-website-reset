import  Vue      from    'vue'
import  * as types from './mutations'

export const setAnchorName = ( { commit }, Obj ) => {
    commit( 'SET_ANCHOR_NAME', Obj.anchorName )
}