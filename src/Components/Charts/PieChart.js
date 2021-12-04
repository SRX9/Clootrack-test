import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = (props) => {
    const {
        dataElements,
        width,
        height,
        index,
        backgroundColor,
        borderColor,
        labels,
        redraw,
    } = props;
    const data = {
        labels: labels,
        datasets: [
            {
                label: `Pie Chart ${index}`,
                data: dataElements,
                backgroundColor: backgroundColor,
                borderColor: borderColor,
                borderWidth: 1,
            },
        ],
    };

    return <Pie data={data} className="p-10" width={width} height={height} redraw={redraw} />;
};
export default PieChart;
