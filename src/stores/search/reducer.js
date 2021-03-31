import { fromJS } from "immutable";

import { actionTypes } from "./index";

const defaultState = fromJS({
    condition: {
        area: [],
        university: [],
        delivery: [],
        resource: [],
        payment: [],
        other: []
    },
    product: [],
    initialValues: {
        
    },
})

export default (state=defaultState, action) => {
    switch(action.type){
        case actionTypes.GET_CONDITION:
            return state.set("condition", action.value);
        case actionTypes.FORM_VALUE_CHANGE:
            return state.set("initialValues", action.value);
        case actionTypes.SEARCH:
            return state.set("product", action.value);
        default:
            return state;
    }
}