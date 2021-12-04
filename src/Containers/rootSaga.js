import { takeLatest } from "redux-saga/effects";
import { ChartEnum } from "../Common/Enums/ChartEnum";
import { fetchChartData } from "./Sagas/ChartSaga";

export function* watcherSaga() {
    yield takeLatest(ChartEnum.LOAD_CHART_DATA, fetchChartData);
}