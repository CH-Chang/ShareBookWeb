import {fromJS} from "immutable";

import {actionTypes} from "./index";

const defaultState = fromJS({
    suggestion: [],
    initialValues: {
        keyword: "",
    }
})

export default (state=defaultState, action) => {
    switch(action.type){
        case actionTypes.GET_SUGGESTION:
            return state.set("suggestion", action.value);
        case actionTypes.FORM_VALUE_CHANGE:
            return state.set("initialValues", action.value);
        default:
            return state;
    }
}