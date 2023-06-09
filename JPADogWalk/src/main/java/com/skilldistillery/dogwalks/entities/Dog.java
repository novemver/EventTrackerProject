package com.skilldistillery.dogwalks.entities;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Dog {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String name; //
	
	private String breed; //
	
	private int height; //
	
	private int length;//

	private int weight;//
	
	@Column(name="is_friendly")
	private boolean isFriendly;//
	
	private String description;//
	
	@Column(name="dog_image")
	private String dogPhoto;

	private String owner; //
	
	@Column(name="needs_adoption")
	private boolean adoptable; //
	
	@Column(name="health_notes")
	private String healthNotes;
	
	@Column(name="present_onsite")
	private boolean onSite;//

	@Column(name="sterilized")
	private boolean fixed;//
	
	private String gender;//
	
	@Column(name="birth_date")
	private LocalDate birthDay;//
	
//	methods
	
	public Dog() {
		
	}

	

	public Dog(int id, String name, String breed, int height, int length, int weight, boolean isFriendly,
			String description, String dogPhoto, String owner, boolean adoptable, String healthNotes, boolean onSite,
			boolean fixed, String gender, LocalDate birthDay) {
		super();
		this.id = id;
		this.name = name;
		this.breed = breed;
		this.height = height;
		this.length = length;
		this.weight = weight;
		this.isFriendly = isFriendly;
		this.description = description;
		this.dogPhoto = dogPhoto;
		this.owner = owner;
		this.adoptable = adoptable;
		this.healthNotes = healthNotes;
		this.onSite = onSite;
		this.fixed = fixed;
		this.gender = gender;
		this.birthDay = birthDay;
	}



	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getBreed() {
		return breed;
	}

	public void setBreed(String breed) {
		this.breed = breed;
	}

	public int getHeight() {
		return height;
	}

	public void setHeight(int height) {
		this.height = height;
	}

	public int getLength() {
		return length;
	}

	public void setLength(int length) {
		this.length = length;
	}

	public int getWeight() {
		return weight;
	}

	public void setWeight(int weight) {
		this.weight = weight;
	}

	public boolean isFriendly() {
		return isFriendly;
	}

	public void setFriendly(boolean isFriendly) {
		this.isFriendly = isFriendly;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getHealthNotes() {
		return healthNotes;
	}

	public void setHealthNotes(String healthNotes) {
		this.healthNotes = healthNotes;
	}

	public String getDogPhoto() {
		return dogPhoto;
	}

	public void setDogPhoto(String dogPhoto) {
		this.dogPhoto = dogPhoto;
	}

	public String getOwner() {
		return owner;
	}

	public void setOwner(String owner) {
		this.owner = owner;
	}

	public boolean isAdoptable() {
		return adoptable;
	}

	public void setAdoptable(boolean adoptable) {
		this.adoptable = adoptable;
	}

	public boolean isOnSite() {
		return onSite;
	}

	public void setOnSite(boolean onSite) {
		this.onSite = onSite;
	}

	public boolean isFixed() {
		return fixed;
	}

	public void setFixed(boolean fixed) {
		this.fixed = fixed;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}




	public LocalDate getBirthDay() {
		return birthDay;
	}

	public void setBirthDay(LocalDate birthDay) {
		this.birthDay = birthDay;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Dog other = (Dog) obj;
		return id == other.id;
	}

	@Override
	public String toString() {
		return "Dog [id=" + id + ", name=" + name + ", breed=" + breed + ", height=" + height + ", length=" + length
				+ ", weight=" + weight + ", isFriendly=" + isFriendly + ", description=" + description + ", dogPhoto="
				+ dogPhoto + ", owner=" + owner + ", adoptable=" + adoptable + ", healthNotes=" + healthNotes
				+ ", onSite=" + onSite + ", fixed=" + fixed + ", gender=" + gender + ", birthDay=" + birthDay + "]";
	}
	
	
}
