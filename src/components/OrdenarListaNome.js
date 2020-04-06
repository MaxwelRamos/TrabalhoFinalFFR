import React from "react";
import { useDispatch } from "react-redux";
import { ordName } from '../actions/contatoAction';
import { Button } from '../visual/styles'

export const OrdenarListaNome = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Button onClick={() => dispatch(ordName())}>Ordenar por nome</Button>
    </div>
  );
};
