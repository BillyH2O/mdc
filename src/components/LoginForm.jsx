import React, { useState } from 'react';
import Logo from './Logo';
import { Link, useNavigate } from 'react-router-dom';

const Form = () => {

  const [username, setUsername] = useState(''); // état pour le nom d'utilisateur
  const [password, setPassword] = useState(''); // état pour le mot de passe
  const navigate = useNavigate()

  const handleChangeUsername = (event) => { 
    setUsername(event.target.value)  
  }
  const handleChangePassword = (event) => { 
    setPassword(event.target.value)  
  }
  const handleClick = () => {
    navigate(`/dashboard/${username}`)
  }

  return (
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 flex flex-col justify-center items-center">
        <Logo></Logo>
        <form action="submit" method="get" className="w-full flex flex-col">
          <div className="form-example mb-4">
            <label htmlFor="name" className="block text-gray-700">Entrez votre nom:</label>
            <input type="text" name="name" id="name" required="required" 
                   className="mt-1 p-2 border rounded w-full"
                   onChange={handleChangeUsername}/>
          </div>

          <div className="form-example mb-4">
            <label htmlFor="email" className="block text-gray-700">Entrez votre mail:</label>
            <input type="email" name="email" id="email" required="required" 
                   className="mt-1 p-2 border rounded w-full"
                   onChange={handleChangePassword}/>
          </div>

          <button onClick={handleClick} className="w-full h-11 rounded-lg bg-blue-500 text-white mb-1">
            S'inscrire
          </button>
          <Link to="/" className="w-full h-11 rounded-lg bg-green-400 text-white flex justify-center items-center">
            Deconnexion
          </Link>
        </form>
      </div>
  );
};

export default Form;
