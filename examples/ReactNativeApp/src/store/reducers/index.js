import {combineReducers} from 'redux';

import counter from './counter/index';

const rootReducer = combineReducers({
  counter,
});
export default rootReducer;
