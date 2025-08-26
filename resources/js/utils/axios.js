import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://tu-dominio.com/api', // Cambia esto a tu URL base
    headers: {
        'Content-Type': 'application/json',
        // Agrega headers si necesitas autenticación
    },
});

export default apiClient;