import { fromJS } from "immutable";

import { actionTypes } from "./index";
import { apiGetCarousel, apiGetSuggestion, apiGetHotRank, apiGetOfficialSuggestion, apiGetShopbackSuggestion } from "../../apis/promote";

export const getCarousel = () => {
    return (dispatch) => {
        apiGetCarousel()
            .then((res)=> {
                if (res.status==200 && res.data.res==0) {
                    dispatch(getCarouselAction(res.data.data));
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }
}

export const getSuggestion = () => {
    return (dispatch) => {
        apiGetSuggestion().then(
            (res)=>{
                if ( res.status==200 && res.data.res ==0 ) {
                    dispatch(getSuggestionAction(res.data.data));
                }
            },
            (err) => {
                console.log(err);
            })
    }
}

export const getOfficialSuggestion = () => {
    return (dispatch) => {
        apiGetOfficialSuggestion().then(
            (res) => {
                if (res.status==200 && res.data.res==0) {
                    dispatch(getOfficialSuggestionAction(res.data.data));
                }
            },
            (err) => {
                console.log(err);
            }
        )
    }
}

export const getHotRank = () => {
    return (dispatch) => {
        apiGetHotRank().then(
            (res) => {
                if (res.status==200 && res.data.res==0) {
                    dispatch(getHotRankAction(res.data.data));
                }
            },
            (err) => {
                console.log(err);
            }
        )
    }
}

export const getShopbackSuggestion = () => {
    return (dispatch) => {
        apiGetShopbackSuggestion().then(
            (res) => {
                if (res.status==200 && res.data.res==0) {
                    dispatch(getShopbackSuggestionAction(res.data.data));
                }
            },
            (err) => {
                console.log(err);
            }
        )
    }
}





const getCarouselAction = (value) => {
    return {
        type: actionTypes.GET_CAROUSEL,
        value: fromJS(value),
    }
}

const getSuggestionAction = (value) => {
    return {
        type: actionTypes.GET_SUGGESTION,
        value: fromJS(value),
    }
}

const getOfficialSuggestionAction = (value) => {
    return {
        type: actionTypes.GET_OFFICIAL_SUGGESTION,
        value: fromJS(value),
    }
}

const getHotRankAction = (value) => {
    return {
        type: actionTypes.GET_HOT_RANK,
        value: fromJS(value),
    }
}

const getShopbackSuggestionAction = (value) => {
    return {
        type: actionTypes.GET_SHOPBACK_SUGGESTION,
        value: fromJS(value),
    }
}