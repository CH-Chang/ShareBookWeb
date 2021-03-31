import { fromJS } from "immutable";

import { actionTypes } from "./index";
import { apiGetCondition, apiSearch } from "../../apis/search";

export const getCondition = (successfulCallback) => {
    return (dispatch) => {
        apiGetCondition()
            .then((res) => {
                if(res.status==200 && res.data.res==0){
                    dispatch(getConditionAction(res.data.data));
                    successfulCallback();
                }
            })
            .catch((err) => {
            })
    }
}

export const search = (config) => {
    return (dispatch) => {
        apiSearch(config)
            .then((res) => {
                if(res.status==200 && res.data.res==0){
                    dispatch(getSearchAction(res.data.data));
                }
            })
            .catch((err) => {

            })
    }
}

export const formValueChange = (value) => {
    return (dispatch) => {
        dispatch(getFormValueChangeAction(value));
    }
}




const getConditionAction = (value) => {
    return {
        type: actionTypes.GET_CONDITION,
        value: fromJS(value),
    }
}

const getSearchAction = (value) => {
    return {
        type: actionTypes.GET_PRODUCT,
        value: fromJS(value),
    }
}

const getFormValueChangeAction = (value) => {
    return {
        type: actionTypes.FORM_VALUE_CHANGE,
        value: fromJS(value),
    }
}