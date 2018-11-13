package com.chris.crudbackend.repositories;

import java.io.Serializable;

import org.springframework.data.jpa.repository.JpaRepository;

import com.chris.crudbackend.entities.User;

public interface UserRepository extends JpaRepository<User, Serializable> {
	
	//tienes que obligarlo a que chanque esta funcion findById con Lomg id si no
	//no te permite en esta version del springBoot
	public abstract User findById(Long id);
	
}
