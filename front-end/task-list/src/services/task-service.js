import axios from 'axios';

const API_URL = 'http://localhost:8081/tasks';
const axiosInstance = axios.create({ baseURL: API_URL });  

class _TaskService {
    
    async getTasks(page = 1, limit = 10) {
        try {
            const response = await axiosInstance.get(`?page=${page}&limit=${limit}`);
            return response.data;
        } catch(error) {
            console.error(error);
        }
    }

    async getTask(id) {
        try {
            const response = await axiosInstance.get(`/${id}`);
            return response.data.task;
        } catch(error) {
            console.error(error);
        }
    }

    async createTask(task) {
        try {
            const response = await axiosInstance.post('/', task);
            return response.data;
        } catch(error) {
            console.error(error);
        }
    }

    async updateTask(id, task) {
        try {
            const response = await axiosInstance.patch(`/${id}`, task);
            return response.data;
        } catch(error) {
            console.error(error);
        }
    }

    async deleteTask(id) {
        try {
            const response = await axiosInstance.delete(`/${id}`);
            return response.data;
        } catch(error) {
            console.error(error);
        }
    }
};

const TaskService = new _TaskService();
export default TaskService;