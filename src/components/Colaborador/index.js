import './Colaborador.css'

const Colaborador = ({ nome, imagem, cargo, corDeFundo }) => {
  const avatar = `https://github.com/${imagem}.png`;

  return (
    <div className='colaborador'>
      <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
        <img src={avatar} alt="Avatar do colaborador" />
      </div>
      <div className='rodape'>
          <h4>{nome}</h4>
          <h5>{cargo}</h5>
      </div>
    </div>
  )
}

export default Colaborador