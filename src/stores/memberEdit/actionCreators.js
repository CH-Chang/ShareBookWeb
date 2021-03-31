import { fromJS } from "immutable";

import { actionTypes } from "./index";

import { apiGetEditInformationFormData, apiGetEditSchoolFormData } from "../../apis/member";

export const getEditInformationFormData = () => {
    return (dispatch) => {
        apiGetEditInformationFormData()
            .then((res) => {
                if(res.status===200 && res.data.res===0){
                    dispatch(getEditInformationFormDataAction(res.data.data));
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }
}

export const getEditSchoolFormData = () => {
    return (dispatch) => {
        apiGetEditSchoolFormData()
            .then((res) => {
                if(res.status===200 && res.data.res===0){
                    dispatch(getEditSchoolFormDataAction(res.data.data));
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }
}

export const switchEditInformationSubmitLoading = (value) => {
    return (dispatch) => {
        dispatch(getSwitchEditInformationSubmitLoadingAction(value));
    }
}

export const switchEditInformationValidateLoading = (value) => {
    return (dispatch) => {
        dispatch(getSwitchEditInformationValidateLoadingAction(value));
    }
}

export const switchEditSchoolSubmitLoading = (value) => {
    return (dispatch) => {
        dispatch(getSwitchEditSchoolSubmitLoadingAction(value));
    }
}

export const switchEditSchoolValidateLoading = (value) => {
    return (dispatch) => {
        dispatch(getSwitchEditSchoolValidateLoadingAction(value));
    }
}




const getSwitchEditInformationSubmitLoadingAction = (value) => {
    return {
        type: actionTypes.SWITCH_EDIT_INFORMATION_SUBMIT_LOADING,
        value: fromJS(value)
    }
}

const getSwitchEditInformationValidateLoadingAction = (value) => {
    return {
        type: actionTypes.SWITCH_EDIT_INFORMATION_VALIDATE_LOADING,
        value: fromJS(value)
    }
}

const getSwitchEditSchoolSubmitLoadingAction = (value) => {
    return {
        type: actionTypes.SWITCH_EDIT_SCHOOL_SUBMIT_LOADING,
        value: fromJS(value)
    }
}

const getSwitchEditSchoolValidateLoadingAction = (value) => {
    return {
        type: actionTypes.SWITCH_EDIT_SCHOOL_VALIDATE_LOADING,
        value: fromJS(value)
    }
}


const getEditInformationFormDataAction = (value) => {
    return {
        type: actionTypes.GET_EDIT_INFORMATION_FORM_DATA,
        value: fromJS(value),
    }
}

const getEditSchoolFormDataAction = (value) => {
    return {
        type: actionTypes.GET_EDIT_SCHOOL_FORM_DATA,
        value: fromJS(value),
    }
}