import axios from 'axios';

const API_URL = 'http://localhost:4000/api/universities?country=';

export const fetchUniversities = async (country) => {
    const startTime = performance.now();
    try {
        const response = await axios.get(`${API_URL}${country}`);
        const endTime = performance.now();
        return {
            data: response.data,
            status: response.status,
            time: endTime - startTime
        };
    } catch (error) {
        const endTime = performance.now();
        return {
            data: [],
            status: error.response ? error.response.status : 500,
            time: endTime - startTime
        };
    }
};
