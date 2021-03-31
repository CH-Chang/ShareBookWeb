import { actionTypes } from "./index";


export const switchSubmitLoading = (value) => {
    return (dispatch) => {
        dispatch(getSwitchSubmitLoadingAction(value));
    }
}







const getSwitchSubmitLoadingAction = (value) => {
    return {
        type: actionTypes.SWITCH_SUBMIT_LOADING,
        value: value,
    }
}