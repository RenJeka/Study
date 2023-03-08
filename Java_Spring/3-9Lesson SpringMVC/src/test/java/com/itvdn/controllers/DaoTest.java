package com.itvdn.controllers;

import com.itvdn.persistence.dao.repositories.EmployeeRepository;
import com.itvdn.persistence.dao.services.implementations.EmployeeSimpleServiceImpl;
import com.itvdn.persistence.dao.services.interfaces.EmployeeSimpleService;
import com.itvdn.persistence.model.Employee;
import org.junit.Assert;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import static org.mockito.Mockito.*;

/**
 * Created by itvdn on 02.12.18.
 */
public class DaoTest {

    @Mock
    EmployeeRepository employeeRepository;

    @InjectMocks
    EmployeeSimpleServiceImpl employeeSimpleService;

    static List<Employee> employeeList = new ArrayList<>();

    static {
        employeeList.add(new Employee("Gena", "Manager", "044"));
        employeeList.add(new Employee("Kolya", "Director", "001"));
    }

    @Before
    public void init() {
        MockitoAnnotations.initMocks(this);
    }


    @Test
    public void test1() throws InterruptedException {
        when(employeeRepository.findAll()).thenReturn(employeeList);
        Assert.assertEquals(employeeList, employeeSimpleService.findAll());
    }

    @Test
    public void test2() {
        when(employeeRepository.findEmployeeByName("Gena"))
                .thenReturn(employeeList.stream().filter(elem -> elem.getName().equals("Gena"))
                        .collect(Collectors.toList()));
        System.out.println(employeeSimpleService.findEmployeeByName("Gena"));
    }
}
