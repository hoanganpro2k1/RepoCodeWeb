import { fork, all } from "redux-saga/effects";
import authSaga from "~/redux/sagas/authSaga";
export default function* rootSaga() {
	yield all([fork(authSaga)]);
}