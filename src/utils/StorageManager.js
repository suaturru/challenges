const LOCAL_STORAGE_KEY = "__APP_DATA__";

export default class StorageManager {
    static getData() {
        const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);

        return storedData ? JSON.parse(storedData) : {};
    }

    static setData(data) {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
    }
}
