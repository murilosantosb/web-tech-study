import "./Footer.css"

const FooterComponent = () => {
  return (
    <footer className='footer'>
      <section className='footer-container'>
        <div className='footer-info'>
          <h3 className='footer-title'>MeuProjeto</h3>
          <p className='footer-text'>Aprendendo React na prática.</p>
        </div>
        <div className='footer-links'>
          <a href='#'>GitHub</a>
          <a href='#'>LinkedIn</a>
          <a href='#'>Contato</a>
        </div>
        <div className='footer-copyright'>
          &copy; {new Date().getFullYear()} MeuProjeto. Todos os direitos reservados.
        </div>
      </section>
    </footer>
  )
}

export default FooterComponent
