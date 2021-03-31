import { fromJS } from "immutable"

import { actionTypes } from "./index";

export const login = (value) => {
    return (dispatch) => {
        dispatch(getLoginAction(value));
    }
}

export const logout = () => {
    return (dispatch) => {
        dispatch(getLogoutAction());
    }
}

export const schoolVerify = (value) => {
    return (dispatch) => {
        dispatch(getSchoolVerifyAction(value));
    }
}







const getLoginAction = (value) => {
    return {
        type: actionTypes.LOGIN,
        value: {
            account: fromJS(value.account),
            store: fromJS(value.store),
        },
    }
}

const getLogoutAction = () => {
    return {
        type: actionTypes.LOGOUT
    }
}

const getSchoolVerifyAction = (value) => {
    return {
        type: actionTypes.SCHOOL_VERIFY,
        value: fromJS(value),
    }
}