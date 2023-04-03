package com.skilldistillery.dogwalks.services;

import java.util.List;
import java.util.Optional;

import com.skilldistillery.dogwalks.entities.Dog;

public interface DogService {

	
	List<Dog> listAllDogs();
	Dog getDog(int id);
	Dog addDog(Dog dog);
	Dog updateDog(int id, Dog dog);
	boolean deleteById(int id);
}
