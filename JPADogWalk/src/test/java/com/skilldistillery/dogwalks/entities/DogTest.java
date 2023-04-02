package com.skilldistillery.dogwalks.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class DogTest {

	private static EntityManagerFactory emf; // need one will close after last test case
	private EntityManager em; 
	private Dog dog;
	
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("JPADogWalk");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		dog = em.find(Dog.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		dog = null;
	}

	@Test
	void test_DogWalk_Entity_Mapping() {
		assertNotNull(dog);
		assertEquals("Roxy", dog.getName());
		assertEquals("Mixed", dog.getBreed());
	}

}
