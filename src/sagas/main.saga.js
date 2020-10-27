import {DATA_UPDATED, GENERAL_INFO_UPDATED} from "../actions/main.actions";
import {takeEvery} from "@redux-saga/core/effects";
import StorageManager from "../utils/StorageManager";
import {store} from "../index";

function saveInLocalStorage() {
    StorageManager.setData(store.getState());
}

function* mainSaga() {
    yield takeEvery(DATA_UPDATED, saveInLocalStorage);
    yield takeEvery(GENERAL_INFO_UPDATED, saveInLocalStorage);
}

export default mainSaga;
