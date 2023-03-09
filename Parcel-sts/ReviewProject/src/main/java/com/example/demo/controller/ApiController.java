package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.demo.model.Parcel;
import com.example.demo.service.ApiService;

@RequestMapping("/parcel")

public class ApiController {
	
	@Autowired
	ApiService service;
	
	@PostMapping("")
	public boolean addOrder(@RequestBody Parcel parcel) {
		return service.addOrder(parcel); 
	}
	
	@GetMapping("")
	public List<Parcel> read(){
		return service.getOrder();
	}
	
	@GetMapping("/{field}")
	public List<Parcel> orderwithSort(@PathVariable String field){
		return service.getOrderSorted(field);
	}
	
	@GetMapping("/{offset}/{pagesize}")
	public List<Parcel> orderWithPagination(@PathVariable int offset,@PathVariable int pagesize){
		return service.getOrderWithPagination(offset,pagesize);
	}
	
	@GetMapping("/{offset}/{pagesize}/{field}")
	public List<Parcel> orderWithPaginationField(@PathVariable int offset,@PathVariable int pagesize,@PathVariable String field){
		return service.getOrderWithPaginationField(offset,pagesize,field);
	}
}