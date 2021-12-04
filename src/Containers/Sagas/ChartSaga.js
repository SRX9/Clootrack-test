import { call, put } from "redux-saga/effects";
import { setChartData } from "../../Actions/ChartAction";
import { getChartData } from "../../Services/ChartService";

export function* fetchChartData(action) {
    try {
        const response = yield call(getChartData);
        const { data } = response;
        yield put(setChartData(data));
    } catch (error) {
        console.log("Error fetching chart Data!!!");
    }
}