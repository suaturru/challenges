import {DATA_UPDATED, GENERAL_INFO_UPDATED} from "../actions/main.actions";

const dataUpdated = ({data, updatedAt}) => ({type: DATA_UPDATED, data, updatedAt});
const generalInfoUpdated = ({data}) => ({type: GENERAL_INFO_UPDATED, data});

export {dataUpdated, generalInfoUpdated};
