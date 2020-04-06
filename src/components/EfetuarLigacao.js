import React from "react";
import { useSelector } from "react-redux";
import { ContatoService } from "../services/ContatoService";
import { Button } from '../visual/styles'

//hooks custom
import useValidacoes from '../useValidacoes';

export const EfetuarLigacao = (props) => {

  const contatosResult = useSelector(state => state.contatoAdd);
  const mensagem = useValidacoes(props);

  const efetuarLigacao = () => {
    if (mensagem !== "")
      alert(mensagem);
    else {
      ContatoService.efetuarLigacao(contatosResult);
    }
  };

  return (
    <div>
      <Button onClick={efetuarLigacao}>Efetuar Ligação</Button><br /><br />
    </div>
  );
};
