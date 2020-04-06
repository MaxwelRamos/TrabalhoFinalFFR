import React from "react";
import { useDispatch } from "react-redux";
import { setChaveAPI } from '../actions/contatoAction';
import { useSelector } from "react-redux";
import { Input } from '../visual/styles'

export const ChaveApi = () => {
  const dispatch = useDispatch();
  const contatosResult = useSelector(state => state.contatoAdd);

  return (
    <div>
      <Input type="text" value={contatosResult.chaveApi} onChange={event => dispatch(setChaveAPI({ chaveApi: event.target.value }))} placeholder="Chave da API" required="required" />
    </div>
  );
};