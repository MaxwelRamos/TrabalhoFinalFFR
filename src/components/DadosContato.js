import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { AdicionarContato } from "./AdicionarContato";
import { Head, Section, Article, Aside, Footer, Input } from '../visual/styles'


export const DadosContato = () => {
  const [name, setName] = useState("");
  const [telefone, setTelefone] = useState("");

  return (
    <div>
      <body>
        <Head>CoronaAPP - PUC MINAS 2020</Head>
        <Section>
          <Article>
            <h2>Dados de Contato</h2>

            <p>Olá! Ao clicar em Adicionar contato, o Sr.(a) <strong>{name}</strong>, será adicionado(a) a lista de contatos.</p>

            <label>Nome....:</label>
            <Input type="text" placeholder="Digite aqui o nome" onChange={event => setName(event.target.value)} /><br /><br />

            <label>Telefone:</label>
            <Input type="text" placeholder="Ex: 31988776655" onChange={event => setTelefone(event.target.value)} /><br /><br />

            <AdicionarContato funcao="AdicionarContato" name={name} telefone={telefone} />
            <h3><Link to={`/contatos`}> Avançar</Link></h3> 
          </Article>
          <Aside>
            <h2>Sobre</h2>
            <p>Este App consiste em informar a todos via ligação telefonica,
            a importancia de se prevenir contra o novo COVID-19.
            </p>
          </Aside>

        </Section>
        <Footer>© copyright Maxwel Ramos Pereira - Pós Graduação Desenvolvimento Web full stack</Footer>
      </body>
    </div >
  );
}
export default DadosContato;