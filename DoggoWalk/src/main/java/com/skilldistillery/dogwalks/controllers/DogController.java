package com.skilldistillery.dogwalks.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.dogwalks.entities.Dog;
import com.skilldistillery.dogwalks.services.DogService;

@RestController
@RequestMapping("api")
public class DogController {
	
	@Autowired
	private DogService dogService;
	
	@GetMapping("dogs")
	public List<Dog> getDogList() {
		
		return dogService.listAllDogs();
	}

}
