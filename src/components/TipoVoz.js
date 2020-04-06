import React from "react";
import { useDispatch } from "react-redux";
import { setTipoVoz } from '../actions/contatoAction';
import { Select } from '../visual/styles'

export const TipoVoz = () => {

  const dispatch = useDispatch();

  return (
    <div>
      <label>Escolha o tipo de voz:</label>
      <br></br>
      <Select onChange={event => dispatch(setTipoVoz({ tipoVoz: event.target.value }))}>
        <option value="Homem">Homem</option>
        <option value="Mulher">Mulher</option>
      </Select>
    </div>
  );
};
