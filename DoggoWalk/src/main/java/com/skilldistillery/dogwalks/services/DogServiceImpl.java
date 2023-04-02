package com.skilldistillery.dogwalks.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.dogwalks.entities.Dog;
import com.skilldistillery.dogwalks.repositories.DogRepository;

@Service
public class DogServiceImpl implements DogService {

	@Autowired
	private DogRepository dogRepo;

	@Override
	public boolean deleteById(int id) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public List<Dog> listAllDogs() {
		// TODO Auto-generated method stub
		return dogRepo.findAll();
	}

	@Override
	public Optional<Dog> getDog(int id) {
//		Dog dog = null;

		return dogRepo.findById(id);
	}

	@Override
	public Dog addDog(Dog dog) {


		return dogRepo.saveAndFlush(dog);
	}

	@Override
	public Dog update(int id, Dog dog) {
		// TODO Auto-generated method stub
		return null;
	}

}
