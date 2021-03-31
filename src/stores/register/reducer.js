import { fromJS } from "immutable";

import { actionTypes } from "./index";

const defaultState = fromJS({
    submitLoading: false,
    validateLoading: false,
    formData: {
        area: null,
    }
});

export default (state=defaultState, action) => {
    switch(action.type){
        case actionTypes.SWITCH_SUBMIT_LOADING:
            return state.set("submitLoading", action.value);
        case actionTypes.SWITCH_VALIDATE_LOADING:
            return state.set("validateLoading", action.value);
        case actionTypes.GET_FORM_DATA:
            return state.set("formData", action.value);
        default:
            return state;
    }
}