import { fromJS } from "immutable";

import { actionTypes } from "./index";

const defaultState = fromJS({
    editInformationFormData: {},
    editSchoolFormData: {},
    editInformationSubmitLoading: false,
    editInformationValidateLoading: false,
    editSchoolSubmitLoading: false,
    editSchoolValidateLoading: false,

})

export default (state=defaultState, action) => {
    switch(action.type){
        case actionTypes.GET_EDIT_SCHOOL_FORM_DATA:
            return state.set("editSchoolFormData", action.value);
        case actionTypes.GET_EDIT_INFORMATION_FORM_DATA:
            return state.set("editInformationFormData", action.value);
        case actionTypes.SWITCH_EDIT_INFORMATION_SUBMIT_LOADING:
            return state.set("editInformationSubmitLoading", action.value);
        case actionTypes.SWITCH_EDIT_INFORMATION_VALIDATE_LOADING:
            return state.set("editInformationValidateLoading", action.value);
        case actionTypes.SWITCH_EDIT_SCHOOL_SUBMIT_LOADING:
            return state.set("editSchoolSubmitLoading", action.value);
        case actionTypes.SWITCH_EDIT_SCHOOL_VALIDATE_LOADING:
            return state.set("editSchoolValidateLoading", action.value)
        default:
            return state;
    }
}