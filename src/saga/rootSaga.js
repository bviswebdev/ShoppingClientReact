import { all } from "redux-saga/effects";
import { userSagas } from "../testmodule";

export default function* rootSaga() {
  yield all([...userSagas]);
}
