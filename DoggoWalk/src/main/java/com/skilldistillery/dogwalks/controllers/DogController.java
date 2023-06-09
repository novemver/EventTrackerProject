package com.skilldistillery.dogwalks.controllers;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	
	@GetMapping("dog/{id}")
	public  Dog findDog(@PathVariable Integer id, HttpServletResponse res) {
		
		return dogService.getDog(id);
	}
	
//	@PostMapping("dog/newdog")
//	public Dog addDogToHotel(@RequestBody Dog dog,
//			HttpServletRequest req, HttpServletResponse res) {
//		
////		Dog newDog = null;
//		try {
//			dog = dogService.addDog(dog);
//			if (dog == null) {
//				res.setStatus(404);
//			} else {
//				res.setStatus(201);
//			}
//		} catch (Exception e) {
//			e.printStackTrace();
//			res.setStatus(400);
//			dog = null;
//		}
//		return dog;
//	}
	@PostMapping("dog/newdog")
	public Dog addDogToHotel(@RequestBody Dog dog, HttpServletResponse res) {
		Dog created = null;
		try {
			created = dogService.addDog(dog);
			res.setStatus(201); // successful creation
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(400);
		}

		return created;
	}
	
	@PutMapping("updog/{id}")
	public Dog updateDog(@PathVariable Integer id, @RequestBody Dog dog, HttpServletResponse res) {
//		Dog editDog = null;
		try {
//			dog = dogService.updateDog(id, dog);
//			dog = dogService.getDog(id);
			 dog = dogService.updateDog(id, dog);
		
			if (dog == null) {
				res.setStatus(404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(400);
		}
		return dog;
	}
	
	@DeleteMapping("gonedog/{id}")
	public void offToTheFarm(@PathVariable Integer id, HttpServletResponse res) {
		try {
			if (dogService.deleteById(id)) {
				res.setStatus(204);
			} else {
				res.setStatus(404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(400);
		}
		
	}

}
