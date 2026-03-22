import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL || 'https://startup-match-ai.onrender.com';

const api = axios.create({
    baseURL: baseURL.endsWith('/api') ? baseURL : `${baseURL}/api`,
});

// Add a request interceptor
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default api;
