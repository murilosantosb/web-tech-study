import React, { useState, useEffect } from 'react';

import "./Usuario.css";

const Usuario = () => {

    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/usuarios")
            .then((response) => response.json())
            .then((data) => {
                setUser(data)
            })
            .catch((error) => console.log(error))
    })

  return (
    <div className='container usuarios'>
      <h1>Lista de Usuários</h1>

      {user.map((u) =>(
        <article key={u.id} className='content-usuarios'>
            <strong>Nome: {u.nome}</strong>
            <br/>
            <strong>Telefone: {u.telefone}</strong>
            <br />
            <strong>Telefone: {u.email}</strong>
            <br/>
            <button className='btn-delete'>Deletar</button>
        </article>
      ))}

      
    </div>
  )
}

export default Usuario
