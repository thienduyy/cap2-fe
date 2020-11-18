import { all, fork } from "redux-saga/effects";
import empSaga from "./empSaga";

export default function* () {
  yield all([fork(empSaga)]);
}
