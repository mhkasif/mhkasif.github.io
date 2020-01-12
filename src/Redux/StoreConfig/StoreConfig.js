import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from './../Reducers/RootReducer';


var configStore = (preLoadedState) => {
    var middleWares = [thunk];
    var middleWareEnhancer = applyMiddleware(...middleWares);
    var storeEnhancer = [middleWareEnhancer];
    var composedEnhancer = composeWithDevTools(
                            ...storeEnhancer,
                            )
    var store = createStore(
        rootReducer,
        preLoadedState,
        composedEnhancer
    );

    return store;
}

export default configStore;