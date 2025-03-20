import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { 
  Paper, Typography, TextField, Button, Stack 
} from '@mui/material';
import { Project } from '../models/project';
import { projectService } from '../services/projectService';

export default function ProjectForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [project, setProject] = useState<Project>({
    projectName: '',
    startDate: new Date().toISOString().split('T')[0],
    endDate: ''
  });

  useEffect(() => {
    if (id) {
      projectService.getById(parseInt(id))
        .then(response => {
          const proj = response.data;
          setProject({
            ...proj,
            startDate: new Date(proj.startDate).toISOString().split('T')[0],
            endDate: proj.endDate ? new Date(proj.endDate).toISOString().split('T')[0] : ''
          });
        })
        .catch(error => console.error('Error loading project:', error));
    }
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const action = id
      ? projectService.update(parseInt(id), project)
      : projectService.create(project);

    action
      .then(() => navigate('/'))
      .catch(error => console.error('Error saving project:', error));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProject(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Paper sx={{ p: 3, maxWidth: 500, mx: 'auto' }}>
      <Typography variant="h6" mb={3}>
        {id ? 'Edit Project' : 'Create New Project'}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            label="Project Name"
            name="projectName"
            value={project.projectName}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Start Date"
            name="startDate"
            type="date"
            value={project.startDate}
            onChange={handleChange}
            required
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="End Date"
            name="endDate"
            type="date"
            value={project.endDate}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
          <Stack direction="row" spacing={2} justifyContent="flex-end">
            <Button type="button" onClick={() => navigate('/')}>
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary">
              {id ? 'Update' : 'Create'}
            </Button>
          </Stack>
        </Stack>
      </form>
    </Paper>
  );
}
