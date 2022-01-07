import { takeEvery, put, fork } from "redux-saga/effects";
import * as types from "../action/actions";
import {
  decrement,
  increment,
  initiateIncrement,
  incrementByAmount,
  selectCount,
} from "../redux/testSlice";

function* watchFetchProducts() {
  yield takeEvery("test/initiateIncrement", fetchProducts);
}

function* fetchProducts() {
  //const products = yield Api.fetch("/products");
  console.log("inside saga watching increment");
  yield put(increment());
}

const userSagas = [fork(watchFetchProducts)];

export default userSagas;
