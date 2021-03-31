import { fromJS } from "immutable";

import { actionTypes } from "./index";

const defaultState = fromJS({
    carousel: [],
    suggestion: [],
    hotRank: [],
    officialSuggestion: [],
    shopbackSuggestion: [],
});

export default (state=defaultState, action) => {
    switch(action.type){
        case actionTypes.GET_CAROUSEL:
            return state.set("carousel", action.value);
        case actionTypes.GET_SUGGESTION:
            return state.set("suggestion", action.value);
        case actionTypes.GET_OFFICIAL_SUGGESTION:
            return state.set("officialSuggestion", action.value);
        case actionTypes.GET_HOT_RANK:
            return state.set("hotRank", action.value);
        case actionTypes.GET_SHOPBACK_SUGGESTION:
            return state.set("shopbackSuggestion", action.value);
        default:
            return state;
    }
}