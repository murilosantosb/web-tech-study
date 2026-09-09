import React from 'react'
import Box from '../../Components/Box/Box'

const Home = () => {
  return (
    <main className='home-container'>
        <section className='d-flex'>
            <Box 
            title="Titulo do Componente"
            description="Lorem Lorem"
            imagem="./image-01.jpg"
            />
            <Box 
                title="Titulo do Componente 2"
                description="Lore lorem"
                imagem="./image-02.jpg"
            />
        </section>
    </main>
  )
}

export default Home
