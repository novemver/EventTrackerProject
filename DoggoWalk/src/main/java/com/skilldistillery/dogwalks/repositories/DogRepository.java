package com.skilldistillery.dogwalks.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.dogwalks.entities.Dog;

public interface DogRepository extends JpaRepository<Dog, Integer> {

}
