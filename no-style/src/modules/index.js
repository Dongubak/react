import { combineReducers } from "redux";
import { all } from 'redux-saga/effects';
import lessons, { lessonSaga } from './lesson';
import loading from './loading';
import login, { loginRootSaga } from './login';

const rootReducer = combineReducers({
   lessons, loading, login
});

export function* rootSaga() {
   yield all([lessonSaga(), loginRootSaga()]);
}

export default rootReducer;