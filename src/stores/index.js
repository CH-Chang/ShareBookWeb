import { createStore, applyMiddleware, compose } from "redux";
import { persistReducer, persistStore} from "redux-persist"
import { encryptTransform } from "redux-persist-transform-encrypt";

import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import immutableTransform from "redux-persist-transform-immutable";

import reducer from "./reducer";
import AES256Config from "../configs/AES256Config";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const persistConfig = {
    transforms: [
        immutableTransform(), 
        encryptTransform({secretKey: AES256Config.key, onError: (err)=>{}})
    ],
    key: 'root',
    storage,
    whitelist: ["member"]
}

const enhancer = composeEnhancers(applyMiddleware(thunk));
const persistedReducer = persistReducer(persistConfig, reducer)
const store = createStore(persistedReducer, enhancer);
const persistor = persistStore(store)

export {store, persistor};