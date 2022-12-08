import Botao from '../Botao';
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa';
import "./Formulário.css";

const Formulario = () => {
  const times = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'
  ]

  const aoSalvar = (e) => {
    e.preventDefault();

    console.log('hello world')
  }

  return (
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o seu nome" />
        <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite o seu cargo" />
        <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
        <ListaSuspensa obrigatorio={true} label="Times" itens ={times} />
        <Botao>
          Criar Card
        </Botao>
      </form>
    </section>
  );
};

export default Formulario;
