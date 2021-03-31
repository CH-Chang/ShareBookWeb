import { fromJS } from "immutable";

import { actionTypes } from "./index";

import { apiGetRegisterFormData } from "../../apis/member";

export const switchValidateLoading = (value) => {
    return (dispatch) => {
        dispatch(getSwitchValidateLoadingAction(value));
    }
}

export const switchSubmitLoading = (value) => {
    return (dispatch) => {
        dispatch(getSwitchSubmitLoadingAction(value));
    }
}

export const getFormData = () => {
    return (dispatch) => {
        apiGetRegisterFormData()
            .then((res) => {
                if(res.status==200 && res.data.res==0){
                    dispatch(getFormDataAction(res.data.data));
                }
            })
            .catch((err) => {

            })
    }
}


const getSwitchValidateLoadingAction = (value) => {
    return {
        type: actionTypes.SWITCH_VALIDATE_LOADING,
        value: fromJS(value),
    }
}

const getSwitchSubmitLoadingAction = (value) => {
    return {
        type: actionTypes.SWITCH_SUBMIT_LOADING,
        value: fromJS(value),
    }
}

const getFormDataAction = (value) => {
    return {
        type: actionTypes.GET_FORM_DATA,
        value: fromJS(value),
    }
}


