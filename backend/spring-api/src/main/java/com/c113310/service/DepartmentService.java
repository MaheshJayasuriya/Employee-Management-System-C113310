package com.c113310.service;

import com.c113310.model.Department;
import com.c113310.repository.DepartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class DepartmentService {
    @Autowired
    private DepartmentRepository repository;

    public Page<Department> findAll(Pageable pageable) {
        return repository.findAll(pageable);
    }

    public Department save(Department department) {
        return repository.save(department);
    }

    public void deleteById(Integer id) {
        repository.deleteById(id);
    }
}
