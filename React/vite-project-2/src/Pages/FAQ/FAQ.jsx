import React, { useState } from 'react'
import './FAQ.css'

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeIndex, setActiveIndex] = useState(null)

  const faqData = [
    {
      question: 'O que é esta aplicação?',
      answer: 'Esta é uma aplicação de estudo de tecnologias web, focada em React e Vite.'
    },
    {
      question: 'Como funciona a busca do FAQ?',
      answer: 'Basta digitar palavras-chave no campo de pesquisa para filtrar as perguntas disponíveis.'
    },
    {
      question: 'Como posso entrar em contato?',
      answer: 'Você pode utilizar a nossa página de contato para enviar suas dúvidas.'
    },
    {
      question: 'A aplicação é responsiva?',
      answer: 'Sim, a aplicação foi desenvolvida para funcionar em diversos tamanhos de tela.'
    },
    {
      question: 'Quais tecnologias foram utilizadas?',
      answer: 'Utilizamos React para a interface, Vite para o build e CSS puro para a estilização.'
    }
  ]

  const filteredFaq = faqData.filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

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
          filteredFaq.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleItem(index)}
            >
              <div className='faq-question'>
                {item.question}
                <span className='faq-icon'>{activeIndex === index ? '-' : '+'}</span>
              </div>
              <div className='faq-answer'>
                <p>{item.answer}</p>
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
