import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { remContato } from '../actions/contatoAction';

//visual
import { Head } from '../visual/head'
import { Section } from '../visual/section'
import { Article } from '../visual/article'
import { Aside } from '../visual/aside'
import { Footer } from '../visual/footer'
import { Td } from '../visual/td'
import { Table } from '../visual/table'
import { Cab } from '../visual/cab'

//Componentes
import { RemoverTodosLista } from "./RemoverTodosLista";
import { OrdenarListaNome } from "./OrdenarListaNome";
import { DeixeSuaMensagem } from "./DeixeSuaMensagem";
import { ChaveApi } from "./ChaveApi";
import { EfetuarLigacao } from "./EfetuarLigacao";
import { TipoVoz } from "./TipoVoz";


export const ListaContato = () => {

  const dispatch = useDispatch();

  const contatosResult = useSelector(state => state.contatoAdd);

  return (
    <div>
      <body>
        <Head>CoronaAviso - PUC MINAS 2020</Head>
        <Section>
          <Article>
            <h2>Contatos registrados</h2>
            <p></p>
            <RemoverTodosLista />
            <OrdenarListaNome />
            <Table>
              <tr>
                <Cab>Acao</Cab>
                <Cab>Nome</Cab>
                <Cab>Telefone</Cab>
              </tr>

                {contatosResult.contato.map(contato => (
                  <tr>
                     <Td><button onClick={() => dispatch(remContato(contato))}>Remover </button></Td>
                     <Td>{contato.name}</Td>  
                     <Td>{contato.telefone}</Td>
                  </tr>
                ))}
            </Table>
            <br /><br />
            <DeixeSuaMensagem />
            <p></p>
            <ChaveApi />
            <p></p>
            <TipoVoz />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <EfetuarLigacao funcao="EfetuarLigacao" />
            <h3><Link to={`/`}>Voltar</Link></h3>
          </Article>
          <Aside>
            <h2>Sobre</h2>
            <p>Este App consiste em informar a todos via ligação telefonica,
            a importância de se prevenir contra o novo COVID-19.
            </p>
          </Aside>
        </Section>
        <Footer>© copyright Maxwel Ramos Pereira - Pós Graduação Desenvolvimento Web Full Stack</Footer>
      </body>
    </div>
  );
};
