import { all } from "redux-saga/effects";
import { userSagas } from "../testmodule";
import { productSagas } from "../productmodule";

export default function* rootSaga() {
  yield all([...userSagas, ...productSagas]);
}
