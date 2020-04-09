import React from "react";
import { useDispatch } from "react-redux";
import { addContato } from '../actions/contatoAction';
import { Button } from '../visual/button'

import useValidacoes from '../hooksCustom/useValidacoes';

export const AdicionarContato = (props) => {

  const dispatch = useDispatch();
  const mensagem = useValidacoes(props);

  const adicionarContato = () => {
    if (mensagem !== "")
      alert(mensagem);
    else {
      dispatch(addContato({ name: props.name, telefone: props.telefone }));
      alert('Contato adicionado com sucesso! clique em avançar.');
    }
  };

  return (
    <div>
      <Button onClick={adicionarContato}>Adicionar Contato</Button><br /><br />
    </div>
  );
};
