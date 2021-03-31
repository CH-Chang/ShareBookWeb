import { combineReducers } from "redux"

import { reducer as headerReducer } from "./header/index";
import { reducer as memberReducer } from "./member/index"; 
import { reducer as indexReducer } from "./index/index";
import { reducer as loginReducer } from "./login/index";
import { reducer as registerReducer } from "./register/index";
import { reducer as searchReducer } from "./search/index";
import { reducer as memberEditReducer } from "./memberEdit/index";



export default combineReducers({
    header: headerReducer,
    member: memberReducer,
    index: indexReducer,
    login: loginReducer,
    register: registerReducer,
    search: searchReducer,
    memberEdit: memberEditReducer,
});
