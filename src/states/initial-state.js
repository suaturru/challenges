import StorageManager from "../utils/StorageManager";

const initialState = {
    main: {
        data: {
            stations: []
        },
        generalInfo: {},
        updatedAt: false
    },
    ...StorageManager.getData()
};

export default initialState;
