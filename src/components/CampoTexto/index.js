import './CampoTexto.css'

const CampoTexto = (props) => {
  let valor = '';

  const aoDigitado = (e) => {
    valor = e.target.value;
  }
  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
    </div>
  )
}

export default CampoTexto