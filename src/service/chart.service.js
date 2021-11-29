import axios from 'axios';
const API_URL = "https://s3-ap-southeast-1.amazonaws.com/he-public-data/chart2986176.json";

export default {
    getChartData: async () => {
        try {

            return await axios.get(API_URL, {
            }).catch(e => {
                throw e.response?.statusText;
            });
        } catch (e) {
            console.log(e);
            throw e;
        }
    },
}