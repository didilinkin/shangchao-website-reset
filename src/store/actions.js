import  Vue      from    'vue';
import  * as types from './mutations';

export const setAnchorName = ( { commit }, Obj ) => {
    commit( 'SET_ANCHOR_NAME', Obj.anchorName );
};

export const updateViewUrlState = ({ commit }, Obj ) => {
    commit( 'SET_VIEW_URL_STATE', Obj.viewUrlState );
};