import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadChartData } from "../Actions/ChartAction";
import {
    BackgroundColours,
    borderColoursArray,
    coloursName,
} from "../Common/ChartColours";
import { ChartEnum } from "../Common/Enums/ChartEnum";
import { addPieDivision, removePieDivision } from "../Common/Utils";
import BarChart from "./Charts/BarChart";
import PieChart from "./Charts/PieChart";
import Button from "./UIElements/Button";

const ChartComponent = (props) => {
    const chartData = useSelector((state) => state.charts.chartData);

    const dispatch = useDispatch();
    useEffect(() => {
        if (chartData.length === 0) {
            dispatch(loadChartData());
        }
    }, []);

    const changeBarValue = (itemIndex, changeType) => {
        let newChartData = [...chartData].map((item, index) => {
            if (item.type === "Bar" && itemIndex === index) {
                if (changeType === "plus") {
                    item.elements = item.elements.map((element) => element + 25);
                } else {
                    item.elements = item.elements.map((element) => element - 25);
                }
            }
            return item;
        });
        dispatch({ type: ChartEnum.SET_CHART_DATA, chartData: newChartData });
    }

    const changePieDivision = (itemIndex, changeType) => {
        let newChartData = [...chartData].map((item, index) => {
            if (item.type === "Pie" && itemIndex === index) {
                if (changeType === "plus") {
                    item.elements = addPieDivision(item.elements);
                } else {
                    item.elements = removePieDivision(item.elements);
                }
            }
            return item;
        });
        dispatch({ type: ChartEnum.SET_CHART_DATA, chartData: newChartData });
    }

    return (
        <main
            id="main-content"
            class="h-full w-full bg-gray-50 relative overflow-y-auto"
        >
            <div class="pt-6 px-4">
                <h6 className="text-white rounded-md float-right bg-blue-500 mb-4 p-2 font-medium cursor-pointer" onClick={() => dispatch(loadChartData())}>Reset Data</h6>
                <div class="w-full grid grid-cols-1 xl:grid-cols-3 2xl:grid-cols-4 lg:grid-cols-3 gap-4">
                    {chartData.length > 0 &&
                        chartData.map((item, index) =>
                            item.type === "Pie" ? (
                                <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
                                    <div class="flex items-center justify-between mb-4">
                                        <div class="flex-shrink-0 text-left">
                                            <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
                                                Bar Chart {index + 1}
                                            </span>
                                            <h3 class="text-base font-normal text-gray-500">
                                                Type Of Chart
                                            </h3>
                                        </div>
                                        <div class="flex items-center justify-end flex-1 text-base font-bold text-white">
                                            <Button isRounded={true} colour="bg-green-500" hoverColour="bg-green-800" onClick={() => changePieDivision(index, "plus")}>+</Button>
                                            <Button isRounded={true} colour="bg-red-500" hoverColour="bg-red-700" onClick={() => changePieDivision(index, "minus")}>-</Button>
                                        </div>
                                    </div>
                                    <div id="main-chart">
                                        <PieChart
                                            redraw={false}
                                            dataElements={item.elements}
                                            index={index + 1}
                                            backgroundColor={BackgroundColours}
                                            borderColor={borderColoursArray}
                                            labels={coloursName.slice(0, item.elements.length)}
                                        />
                                    </div>
                                </div>
                            ) : (
                                <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
                                    <div class="flex items-center justify-between mb-4">
                                        <div class="flex-shrink-0 text-left">
                                            <span class="text-2xl sm:text-3xl leading-none font-bold  text-gray-900">
                                                Bar Chart {index + 1}
                                            </span>
                                            <h3 class="text-base font-normal text-gray-500">
                                                Type Of Chart
                                            </h3>
                                        </div>
                                        <div class="flex items-center justify-end flex-1 text-base font-bold text-white">
                                            <Button isRounded={true} colour="bg-green-500" hoverColour="bg-green-800" onClick={() => changeBarValue(index, "plus")}>+</Button>
                                            <Button isRounded={true} colour="bg-red-500" hoverColour="bg-red-700" onClick={() => changeBarValue(index, "minus")}>-</Button>
                                        </div>
                                    </div>
                                    <div id="main-chart">
                                        <BarChart
                                            dataElements={item.elements}
                                            index={index + 1}
                                            colour={BackgroundColours.slice(
                                                0,
                                                item.elements.length
                                            )}
                                            redraw={false}
                                            labels={coloursName.slice(0, item.elements.length)}
                                        />
                                    </div>
                                </div>
                            )
                        )}
                </div>
            </div>
        </main>
    );
};

export default ChartComponent;
