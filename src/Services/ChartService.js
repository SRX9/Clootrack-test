import axios from 'axios';
import { baseURLs } from "../Common/Enums/baseURLs";

export const getChartData = () => {
    return axios.request({
        method: 'get',
        baseURL: baseURLs.chartServiceBaseURL,
        url: '/he-public-data/chart2986176.json',
    });
}