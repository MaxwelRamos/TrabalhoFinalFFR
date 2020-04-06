import React from "react";
import { useDispatch } from "react-redux";
import { remTodos } from '../actions/contatoAction';
import { Button } from '../visual/styles'

export const RemoverTodosLista = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Button onClick={() => dispatch(remTodos())}>Remover todos</Button>
    </div>
  );
};
