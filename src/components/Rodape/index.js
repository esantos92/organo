import './Rodape.css'

const Rodape = () => {
  return (
    <footer className='rodape'>
      <div className='redes'>
        <img src='/images/fb.png' alt='logo facebook'/>
        <img src='/images/tw.png' alt='logo twiter'/>
        <img src='/images/ig.png' alt='logo instagram'/>
      </div>

      <div className='logo'>
        <img src='/images/logo.png' alt='logo facebook'/>
      </div>
      <div className='copy'>
        <span>Desenvolvido por Everton Santos</span>
      </div>
    </footer>
  )
}

export default Rodape