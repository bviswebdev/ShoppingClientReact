import { configureStore } from "@reduxjs/toolkit";
import { testReducer } from "../testmodule/";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga/rootSaga";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    test: testReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

/*
import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '../features/users/usersSlice'
import postsReducer from '../features/posts/postsSlice'
import commentsReducer from '../features/comments/commentsSlice'

export default configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
    comments: commentsReducer
  }
})*/

//const store = configureStore({ reducer: counterReducer });
