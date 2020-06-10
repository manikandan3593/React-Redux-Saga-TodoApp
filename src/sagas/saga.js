import { call, put, takeLatest } from 'redux-saga/effects';
import ActionTypes from '../actions/ActionTypes';
import { receiveTodo} from '../actions';
import { fetchData } from '../api/api';


function* getTodo(action){
    try{
        const data = yield call(fetchData);
        yield put(receiveTodo(data));
    } catch(e){
        console.log(e);
    }
}

export default function* TodoSaga(){
    yield takeLatest(ActionTypes.Request_Todo, getTodo);
}