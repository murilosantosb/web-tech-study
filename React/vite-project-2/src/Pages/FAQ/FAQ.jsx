import React, { useState, useEffect } from 'react'
import './FAQ.css'

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeIndex, setActiveIndex] = useState(null);
  const [faq, setFaq] = useState([]);


  const filteredFaq = faq.filter(item =>
    item.pergunta.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.resposta.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const toggleItem = (id) => {
    setActiveIndex(activeIndex === id ? null : id)
  }

  useEffect(() => {
    fetch("http://localhost:3000/faq")
      .then((response) => response.json())
      .then((data) => setFaq(data))
      .catch((error) => console.log(error))
  }, [])

  return (
    <section className='faq-container'>
      <h1 className='faq-title'>Perguntas Frequentes</h1>

      <div className='faq-search-container'>
        <input
          type='text'
          placeholder='Pesquisar dúvida...'
          className='faq-search-input'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className='faq-list'>
        {filteredFaq.length > 0 ? (
          filteredFaq.map((item) => (
            <div
              key={item.id}
              className={`faq-item ${activeIndex === item.id ? 'active' : ''}`}
              onClick={() => toggleItem(item.id)}
            >
              <div className='faq-question'>
                {item.pergunta}
                <span className='faq-icon'>{activeIndex === item.id ? '-' : '+'}</span>
              </div>
              <div className='faq-answer'>
                <p>{item.resposta}</p>
              </div>
            </div>
          ))
        ) : (
          <p className='faq-no-results'>Nenhuma dúvida encontrada.</p>
        )}
      </div>
    </section>
  )
}

export default FAQ
