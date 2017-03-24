// 保存锚点信息
export const SET_ANCHOR_NAME = ( state, res ) => {
    state.anchorName = res;                                                                             // 将数组直接赋给state
};

// 保存页面( 详情页 )的路由地址
export const SET_VIEW_URL_STATE = ( state, res ) => {
    state.viewUrlState = res;
};