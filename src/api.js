import axios from 'axios';
import qs from 'qs'; 

const getAuthToken = async () => {
    try {
        const response = await axios.post(
            'https://9d6526betrial.authentication.us10.hana.ondemand.com/oauth/token',
            qs.stringify({
                client_id: 'sb-reactBE-9d6526betrial-dev!t346653',
                client_secret: '0a413f28-ef90-46f2-bdd9-1f4f947e0b9e$i_99omS_NLF3NHernoyGtPQ35dUdKGV5No_ba01ou9g=',
                grant_type: 'client_credentials',
            }),
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            }
        );

        return response.data.access_token;
    } catch (error) {
        console.error('Error fetching OAuth token:', error.response?.data || error.message);
        throw error;
    }
};

const api = axios.create({
    baseURL: 'https://9d6526betrial-dev-reactbe-srv.cfapps.us10-001.hana.ondemand.com/odata/v2/catalog',
});

api.interceptors.request.use(async (config) => {
    try {
        const token = await getAuthToken();
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    } catch (error) {
        console.error('Error in request interceptor:', error);
        throw error;
    }
});

// Named function to fetch data
export const fetchData = async (endpoint) => {
    try {
        const response = await api.get(endpoint);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error.response?.data || error.message);
        throw error;
    }
};

export default api;
