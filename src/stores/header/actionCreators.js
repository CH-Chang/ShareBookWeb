import {fromJS} from "immutable";

import {actionTypes} from "./index";

import { apiGetSuggestion } from "../../apis/search"; 

export const getSuggestion = () => {
    return (dispatch) => {
        apiGetSuggestion()
            .then((res) => {
                if(res.status==200 && res.data.res==0) {
                    dispatch(getSuggestionAction(res.data.data));
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }
}

export const formValueChange = (value) => {
    return (dispatch) => {
        dispatch(getFormValueChangeAction(value));
    }
}




const getSuggestionAction = (value) => {
    return {
        type: actionTypes.GET_SUGGESTION,
        value: fromJS(value),
    }
}

const getFormValueChangeAction = (value) => {
    return {
        type: actionTypes.FORM_VALUE_CHANGE,
        value: fromJS(value),
    }
}