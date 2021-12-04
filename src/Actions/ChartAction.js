import { ChartEnum } from "../Common/Enums/ChartEnum";

//Load Data for the Chart from API
export const loadChartData = () => ({
    type: ChartEnum.LOAD_CHART_DATA,
})

//Set Chart Data
export const setChartData = (chartData) => ({
    type: ChartEnum.SET_CHART_DATA,
    chartData
});
