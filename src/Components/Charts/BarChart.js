import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BarChart = (props) => {
    const { dataElements, width, height, index, colour, redraw, labels } = props;
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Bar Chart",
            },
        },
    };

    const data = {
        labels,
        datasets: [
            {
                label: `Dataset ${index}`,
                data: dataElements,
                backgroundColor: colour,
            },
        ],
    };

    return (
        <Bar
            redraw={redraw}
            options={options}
            width={width}
            height={height}
            data={data}
        />
    );
};

export default BarChart;
