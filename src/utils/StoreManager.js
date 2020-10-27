import {store} from "../index";

export default class StoreManager {
    static get dispatch() {
        return store.dispatch;
    }
}
