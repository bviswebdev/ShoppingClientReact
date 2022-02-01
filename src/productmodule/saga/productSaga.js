import { takeEvery, put, fork } from "redux-saga/effects";
import * as types from "../action/actions";
import { getMVProducts } from "../redux/testSlice";

function* watchFetchProducts() {
  yield takeEvery("product/getMVProducts", fetchProducts);
}

function* fetchProducts() {
  //const products = yield Api.fetch("/products");
  console.log("inside saga fetching products");
  yield put(getMVProducts());
}

const productSagas = [fork(watchFetchProducts)];

export default productSagas;
