package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.demo.model.Parcel;
import com.example.demo.repository.ParcelRepository;

@Service
public class ApiService {

	@Autowired
	ParcelRepository repository;
	
	public boolean addOrder(Parcel order) {
		repository.save(order);
		return true;
	}

	public List<Parcel> getOrder() {
		return repository.findAll();
	}

	public List<Parcel> getOrderSorted(String field) {
		return repository.findAll(Sort.by(Sort.Direction.ASC,field));
	}

	public List<Parcel> getOrderWithPagination(int offset, int pagesize) {
		Page<Parcel>page=repository.findAll(PageRequest.of(offset, pagesize));
		return page.getContent();
	}

	public List<Parcel> getOrderWithPaginationField(int offset, int pagesize, String field) {
		Page<Parcel>page=repository.findAll(PageRequest.of(offset, pagesize,Sort.by(field)));
		return page.getContent();
	}

}