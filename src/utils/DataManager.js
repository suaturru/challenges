import {dataUpdated, generalInfoUpdated} from "../creators/main.creators";
import StoreManager from "./StoreManager";

const Config = {
    REFRESH_PERIOD: 10 * 60 * 1000,
    STATIONS_DATA_URL: "https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json",
    STATIONS_GENERAL_URL: "https://gbfs.urbansharing.com/oslobysykkel.no/station_information.json"
};

export default class DataManager {
    static init() {
        fetchData();
        fetchGeneralInfo();
        setInterval(fetchData, Config.REFRESH_PERIOD);
    }
}

function fetchData() {
    fetch(Config.STATIONS_DATA_URL).then(function (response) {
        return response.json();
    }).then(function (data) {
        StoreManager.dispatch(dataUpdated({data: data.data, updatedAt: new Date().getTime()}));
    }).catch(function (e) {
        console.log(e.message);
    });
}

function fetchGeneralInfo() {
    fetch(Config.STATIONS_GENERAL_URL).then(function (response) {
        return response.json();
    }).then(function (data) {
        StoreManager.dispatch(generalInfoUpdated({data: formatStationsGeneralInfo(data.data.stations)}));
    }).catch(function (e) {
        console.log(e.message);
    });
}

function formatStationsGeneralInfo(generalInfo) {
    const result = {};

    for (let i = 0; i < generalInfo.length; i++) {
        result[generalInfo[i].station_id] = {
            ...generalInfo[i]
        }
    }

    return result;
}
