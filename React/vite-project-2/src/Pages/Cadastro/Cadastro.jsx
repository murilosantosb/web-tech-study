import React, { useState } from 'react'

const Cadastro = () => {

  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: ""
  })  

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Olá.....")
  }

  return (
    <section>
      <h1>Cadastro de usuário</h1>
      <form>
        <article className='fomr-control'>
            <label htmlFor="nome">Nome</label>
            <input
                type="text"
                name='nome'
                value={formData.nome}
                onChange={handleChange}
               />
        </article>

        <article className='fomr-control'>
            <label htmlFor="telefone">Telefone</label>
            <input
                type="text"
                name='telefone'
                value={formData.telefone}
                onChange={handleChange}
               />
        </article>

        <article className='form-control'>
            <label htmlFor="email">Email</label>
            <input
                type="text"
                name='email'
                value={formData.email}
                onChange={handleChange}

               />
        </article>

        <button type='submit'>Cadastrar</button>
      </form>
    </section>
  )
}

export default Cadastro

