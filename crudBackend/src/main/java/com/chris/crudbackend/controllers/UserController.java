package com.chris.crudbackend.controllers;

import java.util.List;	
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.chris.crudbackend.entities.User;
import com.chris.crudbackend.repositories.UserRepository;

//lo decoramos como @RestController para que se active el rest
@RestController
// con este @RequestMapping("/api") enstramos a la raiz.
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:4200", allowedHeaders="*")
public class UserController {
	// inyectamos el objeto userRepository con @AutoWired
	@Autowired
	private UserRepository userRepository;

	private User userTrans = new User();

	// Listar todos los usuarios
	@GetMapping("/users")
	public List<User> getUsers() {

		return userRepository.findAll();
	}

	// encuentra por id del objeto User
	@GetMapping("/user/{id}")
	public User getUser(@PathVariable Long id) {

		return userRepository.findById(id);

	}

	// borra un id con el metodo de userRepository.deleteById(id)
	@DeleteMapping("/user/{id}")
	public boolean deleteUser(@PathVariable Long id) {

		userRepository.deleteById(id);
		return true;

	}

	@PutMapping("/user/{id}")
	// actualizar usuario con @PutMapping lo va a meter en lista
	// el objeto user lleno.
	public User updateUser(@PathVariable(value = "id") Long id, @RequestBody User userDetails) {

		// cargas por id el objeto lleno que quieres actualizar
		User user = userRepository.findById(id);

		// enviado parametros de lo que hay en objeto userDetails obteniendo
		// cpn get su nombre y apellido.
		user.setNombre(userDetails.getNombre());
		user.setApellido(userDetails.getApellido());

		// Creando una variable de tipo User llamado updateUser
		// y guardando el nuevoobjeto con los parametros actualizados
		User updateUser = userRepository.save(user);

		return updateUser;

	}

	// el @PutMaping hace que si existe el primary key va a
	// actualizar la dara por la nueva si no, la va a crear.
	@PostMapping("/user")
	public User createUser(@RequestBody User user) {

		return userRepository.save(user);

	}	
	

}
