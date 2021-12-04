import { ChartEnum } from "../Common/Enums/ChartEnum";

// Initial State of the reducer 
let initialSatate = {
    chartData: []
}

// Chart Reducer Function
const charts = (state = initialSatate, action) => {
    switch (action.type) {
        case ChartEnum.SET_CHART_DATA:
            const { chartData } = action;
            return { ...state, chartData };
        default:
            return state
    }
}
export default charts