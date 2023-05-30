import React, {useState} from 'react';
import '../styles/Form.css';
import ApiComponent from './ApiComponent';

const Form = ({setPayload}) => {
	const [name, changeName] = useState('');
	const [email, changeEmail] = useState('');
    const url = 'https://api.example.com/data';
    const method = 'POST';
	
    const handleSubmit = (e) => {
        e.preventDefault();
        setPayload(name,email);
    }

	const handleName = (e) => {
		changeName(e.target.value);
	}
	const handleEmail = (e) => {
		changeEmail(e.target.value);
	}

	return (
		<>
			<form action="" onSubmit={handleSubmit} className="formulario">
				<div>
					<label htmlFor="nombre">Nombre</label>
					<input
						type="text"
						name="nombre"
						placeholder="Nombre"
						id="nombre"
						value={name}
						onChange={handleName}
					/>
				</div>

				<div>
					<label htmlFor="correo">Correo</label>
					<input
						type="text"
						name="correo"
						placeholder="Correo"
						id="correo"
						value={email}
						onChange={handleEmail}
					/>
				</div>

				<button type="submit">Enviar</button>
			</form>
		</>
	);
} 
export default Form;