import { combineReducers } from 'redux';
import BaseStyleReducer from './reducers/baseStyleReducer/BaseStyleReducer';

const rootReducer = combineReducers({
	base: BaseStyleReducer,
});

export default rootReducer;
