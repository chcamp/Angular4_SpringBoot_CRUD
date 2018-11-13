package com.chris.crudbackend;

import org.springframework.beans.factory.annotation.Autowired;	
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.chris.crudbackend.entities.User;
import com.chris.crudbackend.repositories.UserRepository;

@SpringBootApplication
public class CrudBackendApplication implements CommandLineRunner{
	
	//creamos aca el userRepository para que dentro del metodo run
	//cree algunos usuarios
	@Autowired
	private UserRepository userRepository;
	
	public static void main(String[] args) {
		
		//System.getProperties().put("server.port", 8086);
		
		SpringApplication.run(CrudBackendApplication.class, args);
	}
	
	
	
	//esto hace que cuando toda la aplicacion este hecha y desplegada
	//las aplicaciones estaticas este metodo corrrera lo que tenga dentro 
	//automaticamente como el userRepository sin tener digamos una vista.
	@Override
	public void run(String... args) throws Exception {
		//metiendo algunas filas para probar ni bien se despliegue la aplicacion
		userRepository.save(new User("Christian", "Campos"));
		userRepository.save(new User("Lucas", "Maura"));
		userRepository.save(new User("Arnold", "Sshwastnegger"));
		userRepository.save(new User("Pablo", "Vasquez"));
		userRepository.save(new User("Carlos", "Gomez"));
		userRepository.save(new User("Luisa", "Angulo"));
		
	}
	
}
