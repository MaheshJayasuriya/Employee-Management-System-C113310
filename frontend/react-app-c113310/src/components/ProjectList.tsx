import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Button, Paper, Table, TableBody, TableCell, TableContainer, 
  TableHead, TableRow, Typography 
} from '@mui/material';
import { projectService } from '../services/projectService';
import { Project } from '../models/project';

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = () => {
    projectService.getAll()
      .then(response => setProjects(response.data))
      .catch(error => console.error('Error loading projects:', error));
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      projectService.delete(id)
        .then(() => loadProjects())
        .catch(error => console.error('Error deleting project:', error));
    }
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <Typography variant="h5">Projects</Typography>
        <Button variant="contained" color="primary" onClick={() => navigate('/projects/new')}>
          Add Project
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>End Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.projectId}>
                <TableCell>{project.projectName}</TableCell>
                <TableCell>{project.startDate}</TableCell>
                <TableCell>{project.endDate || 'Ongoing'}</TableCell>
                <TableCell>
                  <Button onClick={() => navigate(`/projects/edit/${project.projectId}`)}>
                    Edit
                  </Button>
                  <Button color="error" onClick={() => project.projectId && handleDelete(project.projectId)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
