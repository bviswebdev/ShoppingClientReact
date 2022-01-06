import { takeEvery, put, fork } from "redux-saga/effects";
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from "../redux/testSlice";

function* watchFetchProducts() {
  yield takeEvery("TEST_INCREMENT", fetchProducts);
}

function* fetchProducts() {
  //const products = yield Api.fetch("/products");
  console.log("inside saga watching increment");
  yield put(increment());
}

const userSagas = [fork(watchFetchProducts)];

export default userSagas;
