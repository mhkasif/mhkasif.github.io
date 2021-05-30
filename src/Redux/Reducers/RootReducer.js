import testReducer from './TestReducer';
import { combineReducers } from 'redux';
import HomeComponentInfoReducer from './HomeComponentInfoReducer';

var rootReducer = combineReducers({
    test: testReducer,
    homeComponentInfo: HomeComponentInfoReducer
});

export default rootReducer;