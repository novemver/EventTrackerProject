package com.skilldistillery.dogwalks.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.dogwalks.entities.Dog;

public interface DogRepository extends JpaRepository<Dog, Integer> {

	Dog findById(int id);
}
