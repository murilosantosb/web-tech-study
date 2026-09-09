// Styles
import "./Header.css"

const HeaderComponent = () => {
  return (
    <header className='header'>
      <div className='header-container'>
        <div className='logo'>
          <h1 className='title-header'>Meu Projeto</h1>
        </div>
        <nav className='nav-menu'>
          <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Sobre</a></li>
            <li><a href='#'>Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default HeaderComponent
