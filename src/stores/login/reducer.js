import { fromJS } from "immutable";

import { actionTypes } from "./index";

const defaultState = fromJS({
    submitLoading: false,
});

export default (state=defaultState, action) => {
    switch(action.type){
        case actionTypes.SWITCH_SUBMIT_LOADING:
            return state.set("submitLoading", action.value);
        default:
            return state;
    }
}