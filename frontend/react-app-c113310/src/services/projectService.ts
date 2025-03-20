import axios from 'axios';
import { Project } from '../models/project';

const API_URL = 'http://localhost:8081/api/projects';

export const projectService = {
    getAll: () => axios.get<Project[]>(API_URL),
    getById: (id: number) => axios.get<Project>(`${API_URL}/${id}`),
    create: (project: Project) => axios.post<Project>(API_URL, project),
    update: (id: number, project: Project) => axios.put(`${API_URL}/${id}`, project),
    delete: (id: number) => axios.delete(`${API_URL}/${id}`)
};
