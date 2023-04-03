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
	public List<Dog> listAllDogs() {
		// TODO Auto-generated method stub
		return dogRepo.findAll();
	}

	@Override
	public Dog getDog(int id) {
//		Dog dog = null;

		return (dogRepo.findById(id));
	}

	@Override
	public Dog addDog(Dog dog) {

		return dogRepo.saveAndFlush(dog);
	}

	@Override
	public Dog updateDog(int id, Dog dog) {
		Dog originalDog = dogRepo.findById(id);
		if (originalDog != null) {
			originalDog.setName(dog.getName());
			originalDog.setBreed(dog.getBreed());
			originalDog.setHeight(dog.getHeight());
			originalDog.setLength(dog.getLength());
			originalDog.setWeight(dog.getWeight());
			originalDog.setFriendly(dog.isFriendly());
			originalDog.setDescription(dog.getDescription());
			originalDog.setHealthNotes(dog.getHealthNotes());
			originalDog.setDogPhoto(dog.getDogPhoto());
			originalDog.setOwner(dog.getOwner());
			originalDog.setAdoptable(dog.isAdoptable());
			originalDog.setOnSite(dog.isOnSite());
			originalDog.setFixed(dog.isFixed());
			originalDog.setGender(dog.getGender());
			originalDog.setBirthDay(dog.getBirthDay());
		}
		return dogRepo.saveAndFlush(originalDog);
	}

	@Override
	public boolean deleteById(int id) {
		boolean dogGone = false;
		Dog dogToDelete = dogRepo.findById(id);
		if (dogToDelete != null) {
			dogRepo.delete(dogToDelete);
			dogGone = true;
		}
		return dogGone;
	}
}
