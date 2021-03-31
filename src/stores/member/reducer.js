import { fromJS } from "immutable";

import { actionTypes } from "./index";

const defaultState = fromJS({
    isLogin: false,
    account:{
        accountId: undefined,
        account: undefined,
        firstName: undefined,
        secondName: undefined,
        nickname: undefined,
        sex: undefined,
        birthday: undefined,
        email: undefined,
        phone: undefined,
        cellphone: undefined,
        cityId: undefined,
        city: undefined,
        districtId: undefined,
        district: undefined,
        address: undefined,
        timestamp: undefined,
        university: {
            universityId: undefined,
            university: undefined,
            collegeId: undefined,
            college: undefined,
            departmentId: undefined,
            department: undefined,
            schoolEmail: undefined,
            verifyTimestamp: undefined,
        }
    },
    store: {
        storeId: undefined,
        storeName: undefined,
        cityId: undefined,
        city: undefined,
        districtId: undefined,
        district: undefined,
        universityId: undefined,
        university: undefined,
        resourceId: undefined,
        resource: undefined,
    }
    
});

export default (state=defaultState, action) => {
    switch(action.type){
        case actionTypes.LOGIN:
            return state.set("isLogin", true)
                        .set("account", action.value.account)
                        .set("store", action.value.store);
        case actionTypes.LOGOUT:
            return state.set("isLogin", false)
                        .set("account", undefined)
                        .set("store", undefined);
        case actionTypes.SCHOOL_VERIFY:
            return state.setIn(["account", "university"], action.value);
        default:
            return state;
    }
}