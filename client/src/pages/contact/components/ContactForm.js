import React, { useState } from 'react';
import axios from 'axios';

function ContactForm(){

	const [user, setUser] = useState({
		name: '',
		lastName: ''
	});

	function handleInputChange(event){
		user[event.target.name] = event.target.value;
		setUser(user);
	}

	function handleFormSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:8888/cadastro', user)
		.then(res => {
			console.log(res.data);
			console.log(res.data.data);
		})
    }

  	return(
		<div>
			<form onSubmit={handleFormSubmit}>
				<input type="text" name="name" onChange={handleInputChange} /> <br />
				<input type="text" name="lastName" onChange={handleInputChange} />
				<button type='submit'>Registrar</button>
			</form>
		</div>	
	);
}

export default ContactForm;