package com.itvdn.controllers;

import com.itvdn.persistence.dao.services.implementations.EmployeeSimpleServiceImpl;
import com.itvdn.persistence.dao.services.interfaces.EmployeeSimpleService;
import com.itvdn.persistence.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.Cache;
import org.springframework.cache.CacheManager;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/rest")
public class RestEmployeeController {

    private EmployeeSimpleService employeeSimpleService;


    @Autowired
    private CacheManager cacheManager;

    @GetMapping("/employee/{id}")
    public Employee getEmployeeInfo(@PathVariable long id) throws InterruptedException {
        Cache.ValueWrapper empl = cacheManager.getCache("empl").get(id);

        return empl != null ? (Employee)empl.get() :
                employeeSimpleService.findById(id)
                        .orElseThrow(() -> new IllegalArgumentException("No employee with such id!"));
//        return employeeSimpleService.findById(id).get();
    }

    @GetMapping(value = "/employee/list")
    public List<Employee> getEmployeeInfo() throws InterruptedException {
        return employeeSimpleService.findAll();
    }


    @PutMapping("/employee/add")
    public Employee addEmployeePUT(@RequestBody Employee employee){
        return employeeSimpleService.addEmployee(employee);
    }
    @Autowired
    public void setEmployeeSimpleService(EmployeeSimpleService employeeSimpleService) {
        this.employeeSimpleService = employeeSimpleService;
    }
}
