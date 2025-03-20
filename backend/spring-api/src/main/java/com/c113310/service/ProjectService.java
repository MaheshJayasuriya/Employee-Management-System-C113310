package com.c113310.service;

import com.c113310.model.Project;
import com.c113310.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {
    @Autowired
    private ProjectRepository repository;

    public Page<Project> findAll(Pageable pageable) {
        return repository.findAll(pageable);
    }

    public Project save(Project project) {
        return repository.save(project);
    }

    public void deleteById(Integer id) {
        repository.deleteById(id);
    }
}
