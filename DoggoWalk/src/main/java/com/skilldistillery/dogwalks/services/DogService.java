package com.skilldistillery.dogwalks.services;

import java.util.List;
import java.util.Optional;

import com.skilldistillery.dogwalks.entities.Dog;

public interface DogService {

	
	List<Dog> listAllDogs();
	Optional<Dog> getDog(int id);
	Dog create(Dog dog);
	Dog update(int id, Dog dog);
	boolean deleteById(int id);
}
