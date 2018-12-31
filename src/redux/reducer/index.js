/**
 * reducer
 */

import { combineReducers } from 'redux'
import { type } from '../action';
const ebikeData = (state, action) => {
    switch (action.type) {
        case type.SWITCH_MENU:
            return {
                ...state,
                menuName:action.menuName
            };
        case type.COLLAPED_SIDER:
            return {
                ...state,
                collapedFlag: action.collapedFlag
            };
        default:
            return {...state};
    }
};

export default ebikeData;