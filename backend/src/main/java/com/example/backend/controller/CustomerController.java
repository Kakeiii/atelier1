package com.example.backend.controller;

import com.example.backend.modele.Customer;
import com.example.backend.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/john")
@CrossOrigin()
public class CustomerController {

    @Autowired
    CustomerRepository repository;
    @PostMapping("/insertCustomer")
    public Customer createCustomer(@RequestBody Customer customer) {
        repository.save(customer);
        return customer;
    }
}
